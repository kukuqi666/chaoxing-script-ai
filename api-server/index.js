import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY || 'b1k1ntthvgrspz76wotvacm0gu1ey1eh';

// OpenAI代理配置
const OPENAI_API_URL = process.env.OPENAI_API_URL || 'https://api.openai.com';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const MODEL = process.env.OPENAI_API_MODEL  || 'gpt-4o-mini';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==================== 超星学习通接口 ====================
// 格式1: POST /search
// 请求体: { question, options, type, key, ... }
// 响应: { code: 200, data: { answer: [], num: "", usenum: "" }, msg: "" }
app.post('/search', async (req, res) => {
  try {
    const { question, options, type, key, questionData, workType, id } = req.body;
    
    console.log(`[超星学习通] 收到请求:`, { question, type, options: typeof options, key: key ? '已提供' : '未提供' });
    
    // 验证token
    if (key && key !== API_KEY) {
      console.log(`[超星学习通] Token验证失败 - 收到: ${key ? key.substring(0, 8) + '...' : '无'}, 期望: ${API_KEY.substring(0, 8)}...`);
      return res.json({
        code: 10003,
        msg: 'Token验证失败',
        data: { answer: [], num: '0', usenum: '0' }
      });
    }

    // 调用答题逻辑
    const answer = await getAnswerForChaoxing(question, options, type);
    
    console.log(`[超星学习通] 返回答案:`, answer);

    res.json({
      code: 200,
      msg: '查询成功',
      data: {
        answer: answer,
        num: '999',      // 剩余次数
        usenum: '1'      // 已使用次数
      }
    });
  } catch (error) {
    console.error('[超星学习通] 错误:', error.message);
    console.error(error.stack);
    res.json({
      code: 10003,
      msg: '服务器错误: ' + error.message,
      data: { answer: [], num: '0', usenum: '0' }
    });
  }
});

// ==================== 九九助手接口 ====================
// 格式2: POST /api/query?token=xxx&version=xxx
// 请求体: tm=题目&type=0&wid=xxx&answernum=4&cid=xxx&options=选项JSON
// 响应: { code: 1, data: "答案", left: 999, msg: "" }
app.post('/api/query', async (req, res) => {
  try {
    // Token可能在query参数或body中
    const token = req.query.token || req.body.token;
    const { tm, type, wid, answernum, cid, options } = req.body;

    console.log(`[九九助手] 收到请求:`, { tm, type, token: token ? token.substring(0, 8) + '...' : '未提供' });

    // 九九助手token验证：接受统一token或九九助手自己的32位token
    // 如果token是32位的十六进制字符串，则认为是九九助手自己的token，允许通过
    const isJiujiuToken = token && /^[0-9a-z]{32}$/i.test(token);
    if (token && token !== API_KEY && !isJiujiuToken) {
      console.log(`[九九助手] Token验证失败 - 收到: ${token ? token.substring(0, 8) + '...' : '无'}, 期望: ${API_KEY.substring(0, 8)}... 或九九助手32位token`);
      return res.json({
        code: 0,
        msg: 'Token验证失败',
        data: null,
        left: 0
      });
    }

    console.log(`[九九助手] 题目: ${tm}, 类型: ${type}`);

    // 类型映射
    const typeMap = {
      '0': '单选题',
      '1': '多选题',
      '2': '填空题',
      '3': '判断题'
    };

    // 解析选项
    let optionsList = [];
    try {
      if (options) {
        optionsList = JSON.parse(options);
      }
    } catch (e) {
      console.error('选项解析失败:', e);
    }

    // 调用答题逻辑
    const answer = await getAnswerForJiujiu(tm, typeMap[type] || '单选题', optionsList);
    
    console.log(`[九九助手] 返回答案:`, answer);

    res.json({
      code: 1,
      msg: '查询成功',
      data: answer,
      left: 999  // 剩余次数
    });
  } catch (error) {
    console.error('[九九助手] 错误:', error);
    res.json({
      code: 0,
      msg: '服务器错误',
      data: null,
      left: 0
    });
  }
});

// ==================== ABC网课助手接口 ====================
// 格式3: 可以兼容上面两种格式
app.post('/api/answer', async (req, res) => {
  try {
    const { question, type, options, token } = req.body;

    console.log(`[ABC网课-通用] 收到请求:`, { question, type, token: token ? token.substring(0, 8) + '...' : '未提供' });

    // 验证token
    if (token && token !== API_KEY) {
      console.log(`[ABC网课-通用] Token验证失败 - 收到: ${token ? token.substring(0, 8) + '...' : '无'}, 期望: ${API_KEY.substring(0, 8)}...`);
      return res.json({
        success: false,
        message: 'Token验证失败',
        answer: null
      });
    }

    // 调用答题逻辑
    const answer = await getAnswerForABC(question, type, options);
    
    console.log(`[ABC网课-通用] 返回答案:`, answer);

    res.json({
      success: true,
      message: '查询成功',
      answer: answer,
      remaining: 999
    });
  } catch (error) {
    console.error('[ABC网课-通用] 错误:', error);
    res.json({
      success: false,
      message: '服务器错误',
      answer: null
    });
  }
});

// ==================== 健康检查 ====================
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    endpoints: ['/search', '/api/query', '/api/answer']
  });
});

// 九九助手状态检查接口
app.get('/api/status', (req, res) => {
  res.json({
    status: 't',  // 't' = 正常, 'f' = 维护, 'u' = 需要更新
    info: '服务正常',
    version: req.query.version || '1.0'
  });
});

// ==================== ABC网课助手接口 ====================
// 精确搜索接口
app.post('/question/accurateSearch', async (req, res) => {
  try {
    const { question, options, type, token } = req.body;
    
    console.log(`[ABC网课-精确] 收到请求:`, { question, type, options: options ? '已提供' : '未提供', token: token ? token.substring(0, 8) + '...' : '未提供' });
    
    // 验证token
    if (token && token !== API_KEY) {
      console.log(`[ABC网课-精确] Token验证失败 - 收到: ${token ? token.substring(0, 8) + '...' : '无'}, 期望: ${API_KEY.substring(0, 8)}...`);
      return res.json({
        code: 0,
        msg: 'Token验证失败',
        data: { answer: [], remainCount: 0 }
      });
    }

    // 调用答题逻辑
    const answer = await getAnswerForChaoxing(question, options, type);
    
    console.log(`[ABC网课-精确] 返回答案:`, answer);

    res.json({
      code: 1,
      msg: '查询成功',
      data: {
        answer: answer,
        remainCount: 999
      }
    });
  } catch (error) {
    console.error('[ABC网课-精确] 错误:', error);
    res.json({
      code: 0,
      msg: '服务器错误: ' + error.message,
      data: { answer: [], remainCount: 0 }
    });
  }
});

// 模糊搜索接口
app.post('/question/fuzzySearch', async (req, res) => {
  try {
    const { question, options, type, token } = req.body;
    
    console.log(`[ABC网课-模糊] 收到请求:`, { question, type, options: options ? '已提供' : '未提供', token: token ? token.substring(0, 8) + '...' : '未提供' });
    
    // 验证token
    if (token && token !== API_KEY) {
      console.log(`[ABC网课-模糊] Token验证失败 - 收到: ${token ? token.substring(0, 8) + '...' : '无'}, 期望: ${API_KEY.substring(0, 8)}...`);
      return res.json({
        code: 0,
        msg: 'Token验证失败',
        data: { answer: [], remainCount: 0 }
      });
    }

    // 调用答题逻辑
    const answer = await getAnswerForChaoxing(question, options, type);
    
    console.log(`[ABC网课-模糊] 返回答案:`, answer);

    res.json({
      code: 1,
      msg: '查询成功',
      data: {
        answer: answer,
        remainCount: 999
      }
    });
  } catch (error) {
    console.error('[ABC网课-模糊] 错误:', error);
    res.json({
      code: 0,
      msg: '服务器错误: ' + error.message,
      data: { answer: [], remainCount: 0 }
    });
  }
});

// ==================== AI答题逻辑 ====================

// 调用OpenAI API（带重试机制）
async function callOpenAI(prompt, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(`${OPENAI_API_URL}/v1/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [{
            role: 'user',
            content: prompt
          }],
          temperature: 0.3,
          max_tokens: 100
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`OpenAI API错误 (尝试 ${i + 1}/${retries}): ${response.status} - ${errorText}`);
        
        // 如果是429或503，等待后重试
        if ((response.status === 429 || response.status === 503) && i < retries - 1) {
          const waitTime = (i + 1) * 2000; // 2秒、4秒、6秒
          console.log(`等待 ${waitTime}ms 后重试...`);
          await new Promise(resolve => setTimeout(resolve, waitTime));
          continue;
        }
        
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error(`OpenAI API调用失败 (尝试 ${i + 1}/${retries}):`, error.message);
      
      // 最后一次尝试失败，返回null
      if (i === retries - 1) {
        return null;
      }
      
      // 等待后重试
      const waitTime = (i + 1) * 2000;
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }
  return null;
}

// 超星学习通答题逻辑
async function getAnswerForChaoxing(question, options, type) {
  console.log('处理超星题目:', { question, type, options: options ? (typeof options === 'string' ? options.substring(0, 50) + '...' : typeof options) : 'undefined' });
  
  // 类型映射
  const typeMap = {
    '0': '单选题',
    '1': '多选题',
    '2': '填空题',
    '3': '判断题',
    '4': '简答题',
    '5': '名词解释',
    '6': '论述题',
    '单选题': '单选题',
    '多选题': '多选题',
    '填空题': '填空题',
    '判断题': '判断题',
    '简答题': '简答题',
    '名词解释': '名词解释',
    '论述题': '论述题'
  };
  const questionType = typeMap[type] || '单选题';
  
  // 解析选项为数组
  let optionsList = [];
  if (options !== undefined && options !== null && options !== '') {
    if (typeof options === 'string') {
      // 尝试按行分割选项
      optionsList = options.split('\n').filter(opt => opt.trim());
    } else if (Array.isArray(options)) {
      optionsList = options;
    }
  }
  
  // 构造提示词
  let prompt = `请回答以下${questionType}：\n\n${question}\n\n`;
  
  if (optionsList.length > 0) {
    prompt += `选项：\n${optionsList.map((opt, idx) => `${String.fromCharCode(65 + idx)}. ${opt}`).join('\n')}\n\n`;
  }
  
  if (questionType === '单选题') {
    prompt += '请只返回正确答案的选项字母（如：A）';
  } else if (questionType === '多选题') {
    prompt += '请只返回正确答案的选项字母，多个答案用逗号分隔（如：A,B,C）';
  } else if (questionType === '判断题') {
    prompt += '请只返回"对"或"错"';
  } else if (questionType === '填空题') {
    prompt += '请只返回答案内容，不要有多余的解释';
  } else {
    prompt += '请提供详细的答案';
  }
  
  // 调用AI
  const aiAnswer = await callOpenAI(prompt);
  
  if (!aiAnswer) {
    // AI调用失败，返回默认答案
    if (questionType === '判断题') return ['对'];
    if (questionType === '单选题') return ['A'];
    if (questionType === '多选题') return ['A', 'B'];
    return ['答案'];
  }
  
  // 解析AI返回的答案
  if (questionType === '单选题') {
    // 提取选项字母并转换为选项文本
    const match = aiAnswer.match(/[A-Z]/);
    if (match && optionsList.length > 0) {
      const index = match[0].charCodeAt(0) - 65; // A=0, B=1, C=2...
      if (index >= 0 && index < optionsList.length) {
        return [optionsList[index]];
      }
    }
    // 如果没有选项列表或匹配失败，返回字母
    return match ? [match[0]] : ['A'];
  }
  
  if (questionType === '多选题') {
    // 提取选项字母并转换为选项文本
    const matches = aiAnswer.match(/[A-Z]/g);
    if (matches && matches.length > 0 && optionsList.length > 0) {
      const result = [];
      for (const letter of matches) {
        const index = letter.charCodeAt(0) - 65;
        if (index >= 0 && index < optionsList.length) {
          result.push(optionsList[index]);
        }
      }
      if (result.length > 0) return result;
    }
    // 如果没有选项列表或匹配失败，返回字母
    return matches && matches.length > 0 ? matches : ['A', 'B'];
  }
  
  if (questionType === '判断题') {
    // 判断题返回"对"或"错"
    if (aiAnswer.includes('对') || aiAnswer.includes('正确') || aiAnswer.includes('√') || aiAnswer.toLowerCase().includes('true')) {
      return ['对'];
    }
    return ['错'];
  }
  
  if (questionType === '填空题') {
    // 填空题返回答案内容
    return [aiAnswer];
  }
  
  // 简答题、名词解释、论述题等
  return [aiAnswer];
}

// 九九助手答题逻辑
async function getAnswerForJiujiu(question, type, options) {
  console.log('处理九九助手题目:', { question, type, options: options ? options.length + '个选项' : '无' });
  
  // 构造提示词
  let prompt = `请回答以下${type}：\n\n${question}\n\n`;
  
  if (options && Array.isArray(options) && options.length > 0) {
    prompt += `选项：\n${options.map((opt, idx) => `${String.fromCharCode(65 + idx)}. ${opt}`).join('\n')}\n\n`;
  }
  
  if (type === '单选题') {
    prompt += '请只返回正确答案的选项字母（如：A）';
  } else if (type === '多选题') {
    prompt += '请只返回正确答案的选项字母，多个答案直接连在一起（如：ABC）';
  } else if (type === '判断题') {
    prompt += '请只返回"对"或"错"';
  } else if (type === '填空题') {
    prompt += '请只返回答案内容，多个空用#!#分隔（如：答案1#!#答案2）';
  }
  
  // 调用AI
  const aiAnswer = await callOpenAI(prompt);
  
  if (!aiAnswer) {
    console.log('[九九助手] AI调用失败，返回默认答案');
    // AI调用失败，返回默认答案
    if (type === '判断题') return '对';
    if (type === '单选题' && options && options.length > 0) return options[0];
    if (type === '多选题' && options && options.length >= 2) return options[0] + options[1];
    return '答案';
  }
  
  console.log('[九九助手] AI原始返回:', aiAnswer);
  
  // 解析AI返回的答案
  let finalAnswer = '';
  
  if (type === '单选题') {
    // 提取选项字母并转换为选项文本
    const match = aiAnswer.match(/[A-Z]/);
    if (match && options && options.length > 0) {
      const index = match[0].charCodeAt(0) - 65; // A=0, B=1, C=2...
      if (index >= 0 && index < options.length) {
        finalAnswer = options[index];
      } else {
        finalAnswer = options[0]; // 默认第一个选项
      }
    } else {
      finalAnswer = options && options.length > 0 ? options[0] : 'A';
    }
  } else if (type === '多选题') {
    // 提取选项字母并转换为选项文本，然后连接
    const matches = aiAnswer.match(/[A-Z]/g);
    if (matches && matches.length > 0 && options && options.length > 0) {
      const selectedOptions = [];
      for (const letter of matches) {
        const index = letter.charCodeAt(0) - 65;
        if (index >= 0 && index < options.length) {
          selectedOptions.push(options[index]);
        }
      }
      if (selectedOptions.length > 0) {
        // 九九助手期望多选答案是选项文本连接（不是字母）
        finalAnswer = selectedOptions.join('');
      } else {
        finalAnswer = options[0] + (options[1] || '');
      }
    } else {
      finalAnswer = options && options.length >= 2 ? options[0] + options[1] : 'AB';
    }
  } else if (type === '判断题') {
    if (aiAnswer.includes('对') || aiAnswer.includes('正确') || aiAnswer.includes('√') || aiAnswer.toLowerCase().includes('true')) {
      finalAnswer = '对';
    } else {
      finalAnswer = '错';
    }
  } else if (type === '填空题') {
    // 填空题：直接返回答案内容
    finalAnswer = aiAnswer;
  } else {
    finalAnswer = aiAnswer;
  }
  
  console.log('[九九助手] 最终答案:', finalAnswer);
  return finalAnswer;
}

// ABC网课助手答题逻辑
async function getAnswerForABC(question, type, options) {
  console.log('处理ABC题目:', { question, type });
  
  // 复用超星逻辑
  const result = await getAnswerForChaoxing(question, options, type);
  return result.join(',');
}

app.listen(PORT, () => {
  console.log(`===========================================`);
  console.log(`答题API服务运行在 http://localhost:${PORT}`);
  console.log(`===========================================`);
  console.log(`接口列表:`);
  console.log(`  - POST /search                      (超星学习通)`);
  console.log(`  - POST /api/query                   (九九助手)`);
  console.log(`  - GET  /api/status                  (九九助手状态)`);
  console.log(`  - POST /question/accurateSearch     (ABC精确搜索)`);
  console.log(`  - POST /question/fuzzySearch        (ABC模糊搜索)`);
  console.log(`  - POST /api/answer                  (ABC通用)`);
  console.log(`  - GET  /health                      (健康检查)`);
  console.log(`===========================================`);
  console.log(`API密钥: ${API_KEY.substring(0, 8)}...${API_KEY.substring(API_KEY.length - 4)}`);
  console.log(`===========================================`);
  console.log(`✅ AI答题已启用`);
  console.log(`   API: ${OPENAI_API_URL}`);
  console.log(`   模型: ${MODEL}`);
  console.log(`===========================================`);
});
