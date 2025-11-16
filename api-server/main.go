package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"regexp"
	"strconv"
	"strings"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

// 全局配置
var (
	PORT            int
	API_KEY         string
	OPENAI_API_URL  string
	OPENAI_API_KEY  string
)

type OpenAIRequest struct {
	Model            string        `json:"model"`
	Messages         []interface{} `json:"messages"`
	Temperature      float32       `json:"temperature"`
	MaxTokens        int           `json:"max_tokens"`
}

type OpenAIResponse struct {
	Choices []struct {
		Message struct {
			Content string `json:"content"`
		} `json:"message"`
	} `json:"choices"`
}

type Message struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

// ==================== OpenAI API 调用 ====================

func callOpenAI(prompt string, retries int) (string, error) {
	for i := 0; i < retries; i++ {
		ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
		defer cancel()

		reqBody := OpenAIRequest{
			Model: "gpt-4o-mini",
			Messages: []interface{}{
				Message{Role: "user", Content: prompt},
			},
			Temperature: 0.3,
			MaxTokens:   100,
		}

		reqBytes, _ := json.Marshal(reqBody)
		req, _ := http.NewRequestWithContext(ctx, "POST", OPENAI_API_URL+"/v1/chat/completions", bytes.NewBuffer(reqBytes))
		req.Header.Set("Content-Type", "application/json")
		req.Header.Set("Authorization", "Bearer "+OPENAI_API_KEY)

		client := &http.Client{}
		resp, err := client.Do(req)
		if err != nil {
			log.Printf("[OpenAI] API调用失败 (尝试 %d/%d): %v", i+1, retries, err)
			if i == retries-1 {
				return "", err
			}
			waitTime := (i + 1) * 2
			time.Sleep(time.Duration(waitTime) * time.Second)
			continue
		}
		defer resp.Body.Close()

		bodyBytes, _ := io.ReadAll(resp.Body)

		if resp.StatusCode != http.StatusOK {
			log.Printf("[OpenAI] API错误 (尝试 %d/%d): %d - %s", i+1, retries, resp.StatusCode, string(bodyBytes))

			if (resp.StatusCode == 429 || resp.StatusCode == 503) && i < retries-1 {
				waitTime := (i + 1) * 2
				log.Printf("等待 %ds 后重试...", waitTime)
				time.Sleep(time.Duration(waitTime) * time.Second)
				continue
			}

			if i == retries-1 {
				return "", fmt.Errorf("OpenAI API error: %d", resp.StatusCode)
			}
			waitTime := (i + 1) * 2
			time.Sleep(time.Duration(waitTime) * time.Second)
			continue
		}

		var data OpenAIResponse
		json.Unmarshal(bodyBytes, &data)
		if len(data.Choices) > 0 {
			return strings.TrimSpace(data.Choices[0].Message.Content), nil
		}
	}

	return "", fmt.Errorf("OpenAI API调用失败")
}

// ==================== 答题逻辑 ====================

func getAnswerForChaoxing(question string, options interface{}, questionType string) []string {
	log.Printf("处理超星题目: question=%s, type=%s, options=%T", question, questionType, options)

	// 类型映射
	typeMap := map[string]string{
		"0":   "单选题",
		"1":   "多选题",
		"2":   "填空题",
		"3":   "判断题",
		"4":   "简答题",
		"5":   "名词解释",
		"6":   "论述题",
		"单选题":  "单选题",
		"多选题":  "多选题",
		"填空题":  "填空题",
		"判断题":  "判断题",
		"简答题":  "简答题",
		"名词解释": "名词解释",
		"论述题":  "论述题",
	}

	actualType := typeMap[questionType]
	if actualType == "" {
		actualType = "单选题"
	}

	// 解析选项
	var optionsList []string
	if options != nil {
		switch v := options.(type) {
		case string:
			if v != "" {
				for _, opt := range strings.Split(v, "\n") {
					if strings.TrimSpace(opt) != "" {
						optionsList = append(optionsList, strings.TrimSpace(opt))
					}
				}
			}
		case []interface{}:
			for _, opt := range v {
				if str, ok := opt.(string); ok {
					optionsList = append(optionsList, str)
				}
			}
		}
	}

	// 构造提示词
	prompt := fmt.Sprintf("请回答以下%s：\n\n%s\n\n", actualType, question)

	if len(optionsList) > 0 {
		prompt += "选项：\n"
		for idx, opt := range optionsList {
			prompt += fmt.Sprintf("%c. %s\n", 65+idx, opt)
		}
		prompt += "\n"
	}

	if actualType == "单选题" {
		prompt += "请只返回正确答案的选项字母（如：A）"
	} else if actualType == "多选题" {
		prompt += "请只返回正确答案的选项字母，多个答案用逗号分隔（如：A,B,C）"
	} else if actualType == "判断题" {
		prompt += "请只返回\"对\"或\"错\""
	} else if actualType == "填空题" {
		prompt += "请只返回答案内容，不要有多余的解释"
	} else {
		prompt += "请提供详细的答案"
	}

	// 调用AI
	aiAnswer, err := callOpenAI(prompt, 3)

	if err != nil {
		log.Printf("[Chaoxing] AI调用失败，返回默认答案")
		if actualType == "判断题" {
			return []string{"对"}
		}
		if actualType == "单选题" {
			return []string{"A"}
		}
		if actualType == "多选题" {
			return []string{"A", "B"}
		}
		return []string{"答案"}
	}

	// 解析AI返回的答案
	if actualType == "单选题" {
		re := regexp.MustCompile(`[A-Z]`)
		match := re.FindString(aiAnswer)
		if match != "" && len(optionsList) > 0 {
			index := int(match[0]) - 65
			if index >= 0 && index < len(optionsList) {
				return []string{optionsList[index]}
			}
		}
		if match != "" {
			return []string{match}
		}
		return []string{"A"}
	}

	if actualType == "多选题" {
		re := regexp.MustCompile(`[A-Z]`)
		matches := re.FindAllString(aiAnswer, -1)
		if len(matches) > 0 && len(optionsList) > 0 {
			var result []string
			for _, letter := range matches {
				index := int(letter[0]) - 65
				if index >= 0 && index < len(optionsList) {
					result = append(result, optionsList[index])
				}
			}
			if len(result) > 0 {
				return result
			}
		}
		return matches
	}

	if actualType == "判断题" {
		if strings.Contains(aiAnswer, "对") || strings.Contains(aiAnswer, "正确") ||
			strings.Contains(aiAnswer, "√") || strings.Contains(strings.ToLower(aiAnswer), "true") {
			return []string{"对"}
		}
		return []string{"错"}
	}

	if actualType == "填空题" {
		return []string{aiAnswer}
	}

	return []string{aiAnswer}
}

func getAnswerForJiujiu(question string, questionType string, options []string) string {
	log.Printf("处理九九助手题目: question=%s, type=%s, options=%d", question, questionType, len(options))

	// 构造提示词
	prompt := fmt.Sprintf("请回答以下%s：\n\n%s\n\n", questionType, question)

	if len(options) > 0 {
		prompt += "选项：\n"
		for idx, opt := range options {
			prompt += fmt.Sprintf("%c. %s\n", 65+idx, opt)
		}
		prompt += "\n"
	}

	if questionType == "单选题" {
		prompt += "请只返回正确答案的选项字母（如：A）"
	} else if questionType == "多选题" {
		prompt += "请只返回正确答案的选项字母，多个答案直接连在一起（如：ABC）"
	} else if questionType == "判断题" {
		prompt += "请只返回\"对\"或\"错\""
	} else if questionType == "填空题" {
		prompt += "请只返回答案内容，多个空用#!#分隔（如：答案1#!#答案2）"
	}

	// 调用AI
	aiAnswer, err := callOpenAI(prompt, 3)

	if err != nil {
		log.Printf("[九九助手] AI调用失败，返回默认答案")
		if questionType == "判断题" {
			return "对"
		}
		if questionType == "单选题" && len(options) > 0 {
			return options[0]
		}
		if questionType == "多选题" && len(options) >= 2 {
			return options[0] + options[1]
		}
		return "答案"
	}

	log.Printf("[九九助手] AI原始返回: %s", aiAnswer)

	// 解析AI返回的答案
	var finalAnswer string

	if questionType == "单选题" {
		re := regexp.MustCompile(`[A-Z]`)
		match := re.FindString(aiAnswer)
		if match != "" && len(options) > 0 {
			index := int(match[0]) - 65
			if index >= 0 && index < len(options) {
				finalAnswer = options[index]
			} else {
				finalAnswer = options[0]
			}
		} else if len(options) > 0 {
			finalAnswer = options[0]
		} else {
			finalAnswer = "A"
		}
	} else if questionType == "多选题" {
		re := regexp.MustCompile(`[A-Z]`)
		matches := re.FindAllString(aiAnswer, -1)
		if len(matches) > 0 && len(options) > 0 {
			var selectedOptions []string
			for _, letter := range matches {
				index := int(letter[0]) - 65
				if index >= 0 && index < len(options) {
					selectedOptions = append(selectedOptions, options[index])
				}
			}
			if len(selectedOptions) > 0 {
				finalAnswer = strings.Join(selectedOptions, "")
			} else if len(options) > 0 {
				finalAnswer = options[0]
				if len(options) > 1 {
					finalAnswer += options[1]
				}
			}
		} else if len(options) > 0 {
			finalAnswer = options[0]
			if len(options) > 1 {
				finalAnswer += options[1]
			}
		} else {
			finalAnswer = "AB"
		}
	} else if questionType == "判断题" {
		if strings.Contains(aiAnswer, "对") || strings.Contains(aiAnswer, "正确") ||
			strings.Contains(aiAnswer, "√") || strings.Contains(strings.ToLower(aiAnswer), "true") {
			finalAnswer = "对"
		} else {
			finalAnswer = "错"
		}
	} else if questionType == "填空题" {
		finalAnswer = aiAnswer
	} else {
		finalAnswer = aiAnswer
	}

	log.Printf("[九九助手] 最终答案: %s", finalAnswer)
	return finalAnswer
}

func getAnswerForABC(question string, questionType string, options interface{}) string {
	log.Printf("处理ABC题目: question=%s, type=%s", question, questionType)
	result := getAnswerForChaoxing(question, options, questionType)
	return strings.Join(result, ",")
}

// ==================== 路由处理 ====================

// POST /search - 超星学习通
func handleSearch(c *gin.Context) {
	var req map[string]interface{}
	c.BindJSON(&req)

	question, _ := req["question"].(string)
	options := req["options"]
	questionType, _ := req["type"].(string)
	key, _ := req["key"].(string)

	log.Printf("[超星学习通] 收到请求: question=%s, type=%s, key=%s", question, questionType, func() string {
		if key != "" {
			return "已提供"
		}
		return "未提供"
	}())

	// 验证token
	if key != "" && key != API_KEY {
		log.Printf("[超星学习通] Token验证失败 - 收到: %s..., 期望: %s...", key[:8], API_KEY[:8])
		c.JSON(http.StatusOK, gin.H{
			"code": 10003,
			"msg":  "Token验证失败",
			"data": gin.H{"answer": []string{}, "num": "0", "usenum": "0"},
		})
		return
	}

	answer := getAnswerForChaoxing(question, options, questionType)

	log.Printf("[超星学习通] 返回答案: %v", answer)

	c.JSON(http.StatusOK, gin.H{
		"code": 200,
		"msg":  "查询成功",
		"data": gin.H{
			"answer": answer,
			"num":    "999",
			"usenum": "1",
		},
	})
}

// POST /api/query - 九九助手
func handleAPIQuery(c *gin.Context) {
	token := c.Query("token")
	var req map[string]interface{}
	c.BindJSON(&req)

	if token == "" {
		if t, ok := req["token"].(string); ok {
			token = t
		}
	}

	tm, _ := req["tm"].(string)
	questionType, _ := req["type"].(string)
	optionsRaw := req["options"]

	log.Printf("[九九助手] 收到请求: tm=%s, type=%s, token=%s", tm, questionType, func() string {
		if token != "" {
			return token[:8] + "..."
		}
		return "未提供"
	}())

	// 验证token
	isJiujiuToken, _ := regexp.MatchString(`^[0-9a-z]{32}$`, token)
	if token != "" && token != API_KEY && !isJiujiuToken {
		log.Printf("[九九助手] Token验证失败")
		c.JSON(http.StatusOK, gin.H{
			"code": 0,
			"msg":  "Token验证失败",
			"data": nil,
			"left": 0,
		})
		return
	}

	// 类型映射
	typeMap := map[string]string{
		"0": "单选题",
		"1": "多选题",
		"2": "填空题",
		"3": "判断题",
	}

	actualType := typeMap[questionType]
	if actualType == "" {
		actualType = "单选题"
	}

	// 解析选项
	var options []string
	if optionsRaw != nil {
		switch v := optionsRaw.(type) {
		case string:
			json.Unmarshal([]byte(v), &options)
		case []interface{}:
			for _, opt := range v {
				if str, ok := opt.(string); ok {
					options = append(options, str)
				}
			}
		}
	}

	answer := getAnswerForJiujiu(tm, actualType, options)

	log.Printf("[九九助手] 返回答案: %s", answer)

	c.JSON(http.StatusOK, gin.H{
		"code": 1,
		"msg":  "查询成功",
		"data": answer,
		"left": 999,
	})
}

// GET /api/status - 九九助手状态
func handleAPIStatus(c *gin.Context) {
	version := c.DefaultQuery("version", "1.0")
	c.JSON(http.StatusOK, gin.H{
		"status":  "t",
		"info":    "服务正常",
		"version": version,
	})
}

// POST /api/answer - ABC网课助手通用
func handleAPIAnswer(c *gin.Context) {
	var req map[string]interface{}
	c.BindJSON(&req)

	question, _ := req["question"].(string)
	questionType, _ := req["type"].(string)
	options := req["options"]
	token, _ := req["token"].(string)

	log.Printf("[ABC网课-通用] 收到请求: question=%s, type=%s", question, questionType)

	if token != "" && token != API_KEY {
		log.Printf("[ABC网课-通用] Token验证失败")
		c.JSON(http.StatusOK, gin.H{
			"success": false,
			"message": "Token验证失败",
			"answer":  nil,
		})
		return
	}

	answer := getAnswerForABC(question, questionType, options)

	log.Printf("[ABC网课-通用] 返回答案: %s", answer)

	c.JSON(http.StatusOK, gin.H{
		"success":   true,
		"message":   "查询成功",
		"answer":    answer,
		"remaining": 999,
	})
}

// POST /question/accurateSearch - ABC精确搜索
func handleAccurateSearch(c *gin.Context) {
	var req map[string]interface{}
	c.BindJSON(&req)

	question, _ := req["question"].(string)
	options := req["options"]
	questionType, _ := req["type"].(string)
	token, _ := req["token"].(string)

	log.Printf("[ABC网课-精确] 收到请求: question=%s", question)

	if token != "" && token != API_KEY {
		log.Printf("[ABC网课-精确] Token验证失败")
		c.JSON(http.StatusOK, gin.H{
			"code": 0,
			"msg":  "Token验证失败",
			"data": gin.H{"answer": []string{}, "remainCount": 0},
		})
		return
	}

	answer := getAnswerForChaoxing(question, options, questionType)

	log.Printf("[ABC网课-精确] 返回答案: %v", answer)

	c.JSON(http.StatusOK, gin.H{
		"code": 1,
		"msg":  "查询成功",
		"data": gin.H{
			"answer":     answer,
			"remainCount": 999,
		},
	})
}

// POST /question/fuzzySearch - ABC模糊搜索
func handleFuzzySearch(c *gin.Context) {
	var req map[string]interface{}
	c.BindJSON(&req)

	question, _ := req["question"].(string)
	options := req["options"]
	questionType, _ := req["type"].(string)
	token, _ := req["token"].(string)

	log.Printf("[ABC网课-模糊] 收到请求: question=%s", question)

	if token != "" && token != API_KEY {
		log.Printf("[ABC网课-模糊] Token验证失败")
		c.JSON(http.StatusOK, gin.H{
			"code": 0,
			"msg":  "Token验证失败",
			"data": gin.H{"answer": []string{}, "remainCount": 0},
		})
		return
	}

	answer := getAnswerForChaoxing(question, options, questionType)

	log.Printf("[ABC网课-模糊] 返回答案: %v", answer)

	c.JSON(http.StatusOK, gin.H{
		"code": 1,
		"msg":  "查询成功",
		"data": gin.H{
			"answer":      answer,
			"remainCount": 999,
		},
	})
}

// GET /health - 健康检查
func handleHealth(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"status":    "ok",
		"timestamp": time.Now().Format(time.RFC3339),
		"endpoints": []string{"/search", "/api/query", "/api/answer"},
	})
}

// ==================== 主程序 ====================

func main() {
	// 加载环境变量
	godotenv.Load()

	PORT, _ = strconv.Atoi(os.Getenv("PORT"))
	if PORT == 0 {
		PORT = 3000
	}
	API_KEY = os.Getenv("API_KEY")
	if API_KEY == "" {
		API_KEY = "b1k1ntthvgrspz76wotvacm0gu1ey1eh"
	}
	OPENAI_API_URL = os.Getenv("OPENAI_API_URL")
	if OPENAI_API_URL == "" {
		OPENAI_API_URL = "https://api.openai.com"
	}
	OPENAI_API_KEY = os.Getenv("OPENAI_API_KEY")

	// 创建Gin路由
	router := gin.Default()

	// CORS中间件
	router.Use(cors.Default())

	// 路由
	router.POST("/search", handleSearch)
	router.POST("/api/query", handleAPIQuery)
	router.GET("/api/status", handleAPIStatus)
	router.POST("/api/answer", handleAPIAnswer)
	router.POST("/question/accurateSearch", handleAccurateSearch)
	router.POST("/question/fuzzySearch", handleFuzzySearch)
	router.GET("/health", handleHealth)

	// 启动服务
	fmt.Println("===========================================")
	fmt.Printf("答题API服务运行在 http://localhost:%d\n", PORT)
	fmt.Println("===========================================")
	fmt.Println("接口列表:")
	fmt.Println("  - POST /search                      (超星学习通)")
	fmt.Println("  - POST /api/query                   (九九助手)")
	fmt.Println("  - GET  /api/status                  (九九助手状态)")
	fmt.Println("  - POST /question/accurateSearch     (ABC精确搜索)")
	fmt.Println("  - POST /question/fuzzySearch        (ABC模糊搜索)")
	fmt.Println("  - POST /api/answer                  (ABC通用)")
	fmt.Println("  - GET  /health                      (健康检查)")
	fmt.Println("===========================================")
	fmt.Printf("API密钥: %s...%s\n", API_KEY[:8], API_KEY[len(API_KEY)-4:])
	fmt.Println("===========================================")
	fmt.Println("✅ AI答题已启用")
	fmt.Printf("   API: %s\n", OPENAI_API_URL)
	fmt.Println("   模型: gpt-4o-mini")
	fmt.Println("===========================================")

	router.Run(fmt.Sprintf(":%d", PORT))
}
