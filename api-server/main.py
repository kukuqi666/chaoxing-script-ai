import os
import json
import re
import asyncio
from typing import List, Optional, Any
from datetime import datetime
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
import aiohttp
import time

load_dotenv()

app = Flask(__name__)
CORS(app)

# 配置
PORT = int(os.getenv('PORT', 3000))
API_KEY = os.getenv('API_KEY', 'b1k1ntthvgrspz76wotvacm0gu1ey1eh')
OPENAI_API_URL = os.getenv('OPENAI_API_URL', 'https://api.openai.com')
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')


async def call_openai(prompt: str, retries: int = 3) -> Optional[str]:
    """调用OpenAI API（带重试机制）"""
    for i in range(retries):
        try:
            async with aiohttp.ClientSession() as session:
                async with session.post(
                    f'{OPENAI_API_URL}/v1/chat/completions',
                    headers={
                        'Content-Type': 'application/json',
                        'Authorization': f'Bearer {OPENAI_API_KEY}'
                    },
                    json={
                        'model': 'gpt-4o-mini',
                        'messages': [{'role': 'user', 'content': prompt}],
                        'temperature': 0.3,
                        'max_tokens': 100
                    },
                    timeout=aiohttp.ClientTimeout(total=30)
                ) as response:
                    if response.status != 200:
                        error_text = await response.text()
                        print(f'[OpenAI] API错误 (尝试 {i + 1}/{retries}): {response.status} - {error_text}')
                        
                        # 如果是429或503，等待后重试
                        if (response.status in [429, 503]) and i < retries - 1:
                            wait_time = (i + 1) * 2
                            print(f'等待 {wait_time}s 后重试...')
                            await asyncio.sleep(wait_time)
                            continue
                        
                        raise Exception(f'OpenAI API error: {response.status}')
                    
                    data = await response.json()
                    return data['choices'][0]['message']['content'].strip()
        except Exception as error:
            print(f'[OpenAI] API调用失败 (尝试 {i + 1}/{retries}): {str(error)}')
            
            if i == retries - 1:
                return None
            
            wait_time = (i + 1) * 2
            await asyncio.sleep(wait_time)
    
    return None


def get_answer_for_chaoxing(question: str, options: Any, question_type: str) -> List[str]:
    """超星学习通答题逻辑"""
    print(f'处理超星题目: question={question}, type={question_type}, options={type(options)}')
    
    # 类型映射
    type_map = {
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
    }
    actual_type = type_map.get(question_type, '单选题')
    
    # 解析选项为列表
    options_list = []
    if options is not None and options != '':
        if isinstance(options, str):
            options_list = [opt.strip() for opt in options.split('\n') if opt.strip()]
        elif isinstance(options, list):
            options_list = options
    
    # 构造提示词
    prompt = f'请回答以下{actual_type}：\n\n{question}\n\n'
    
    if options_list:
        prompt += '选项：\n'
        for idx, opt in enumerate(options_list):
            prompt += f'{chr(65 + idx)}. {opt}\n'
        prompt += '\n'
    
    if actual_type == '单选题':
        prompt += '请只返回正确答案的选项字母（如：A）'
    elif actual_type == '多选题':
        prompt += '请只返回正确答案的选项字母，多个答案用逗号分隔（如：A,B,C）'
    elif actual_type == '判断题':
        prompt += '请只返回"对"或"错"'
    elif actual_type == '填空题':
        prompt += '请只返回答案内容，不要有多余的解释'
    else:
        prompt += '请提供详细的答案'
    
    # 调用AI
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    ai_answer = loop.run_until_complete(call_openai(prompt))
    loop.close()
    
    if not ai_answer:
        # AI调用失败，返回默认答案
        if actual_type == '判断题':
            return ['对']
        if actual_type == '单选题':
            return ['A']
        if actual_type == '多选题':
            return ['A', 'B']
        return ['答案']
    
    # 解析AI返回的答案
    if actual_type == '单选题':
        match = re.search(r'[A-Z]', ai_answer)
        if match and options_list:
            index = ord(match.group(0)) - 65
            if 0 <= index < len(options_list):
                return [options_list[index]]
        return [match.group(0)] if match else ['A']
    
    if actual_type == '多选题':
        matches = re.findall(r'[A-Z]', ai_answer)
        if matches and options_list:
            result = []
            for letter in matches:
                index = ord(letter) - 65
                if 0 <= index < len(options_list):
                    result.append(options_list[index])
            if result:
                return result
        return matches if matches else ['A', 'B']
    
    if actual_type == '判断题':
        if any(x in ai_answer for x in ['对', '正确', '√']) or 'true' in ai_answer.lower():
            return ['对']
        return ['错']
    
    if actual_type == '填空题':
        return [ai_answer]
    
    return [ai_answer]


def get_answer_for_jiujiu(question: str, question_type: str, options: List[str]) -> str:
    """九九助手答题逻辑"""
    print(f'处理九九助手题目: question={question}, type={question_type}, options={len(options) if options else 0}')
    
    # 构造提示词
    prompt = f'请回答以下{question_type}：\n\n{question}\n\n'
    
    if options and len(options) > 0:
        prompt += '选项：\n'
        for idx, opt in enumerate(options):
            prompt += f'{chr(65 + idx)}. {opt}\n'
        prompt += '\n'
    
    if question_type == '单选题':
        prompt += '请只返回正确答案的选项字母（如：A）'
    elif question_type == '多选题':
        prompt += '请只返回正确答案的选项字母，多个答案直接连在一起（如：ABC）'
    elif question_type == '判断题':
        prompt += '请只返回"对"或"错"'
    elif question_type == '填空题':
        prompt += '请只返回答案内容，多个空用#!#分隔（如：答案1#!#答案2）'
    
    # 调用AI
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    ai_answer = loop.run_until_complete(call_openai(prompt))
    loop.close()
    
    if not ai_answer:
        print('[九九助手] AI调用失败，返回默认答案')
        if question_type == '判断题':
            return '对'
        if question_type == '单选题' and options and len(options) > 0:
            return options[0]
        if question_type == '多选题' and options and len(options) >= 2:
            return options[0] + options[1]
        return '答案'
    
    print(f'[九九助手] AI原始返回: {ai_answer}')
    
    # 解析AI返回的答案
    final_answer = ''
    
    if question_type == '单选题':
        match = re.search(r'[A-Z]', ai_answer)
        if match and options and len(options) > 0:
            index = ord(match.group(0)) - 65
            if 0 <= index < len(options):
                final_answer = options[index]
            else:
                final_answer = options[0]
        else:
            final_answer = options[0] if options and len(options) > 0 else 'A'
    elif question_type == '多选题':
        matches = re.findall(r'[A-Z]', ai_answer)
        if matches and options and len(options) > 0:
            selected_options = []
            for letter in matches:
                index = ord(letter) - 65
                if 0 <= index < len(options):
                    selected_options.append(options[index])
            if selected_options:
                final_answer = ''.join(selected_options)
            else:
                final_answer = options[0] + (options[1] if len(options) > 1 else '')
        else:
            final_answer = options[0] + (options[1] if options and len(options) >= 2 else '') if options else 'AB'
    elif question_type == '判断题':
        if any(x in ai_answer for x in ['对', '正确', '√']) or 'true' in ai_answer.lower():
            final_answer = '对'
        else:
            final_answer = '错'
    elif question_type == '填空题':
        final_answer = ai_answer
    else:
        final_answer = ai_answer
    
    print(f'[九九助手] 最终答案: {final_answer}')
    return final_answer


def get_answer_for_abc(question: str, question_type: str, options: Any) -> str:
    """ABC网课助手答题逻辑"""
    print(f'处理ABC题目: question={question}, type={question_type}')
    result = get_answer_for_chaoxing(question, options, question_type)
    return ','.join(result)


# ==================== 超星学习通接口 ====================
@app.route('/search', methods=['POST'])
def search():
    try:
        data = request.get_json() or {}
        question = data.get('question')
        options = data.get('options')
        question_type = data.get('type')
        key = data.get('key')
        
        print(f'[超星学习通] 收到请求: question={question}, type={question_type}, key={"已提供" if key else "未提供"}')
        
        # 验证token
        if key and key != API_KEY:
            print(f'[超星学习通] Token验证失败 - 收到: {key[:8]}..., 期望: {API_KEY[:8]}...')
            return jsonify({
                'code': 10003,
                'msg': 'Token验证失败',
                'data': {'answer': [], 'num': '0', 'usenum': '0'}
            })
        
        # 调用答题逻辑
        answer = get_answer_for_chaoxing(question, options, question_type)
        
        print(f'[超星学习通] 返回答案: {answer}')
        
        return jsonify({
            'code': 200,
            'msg': '查询成功',
            'data': {
                'answer': answer,
                'num': '999',
                'usenum': '1'
            }
        })
    except Exception as error:
        print(f'[超星学习通] 错误: {str(error)}')
        return jsonify({
            'code': 10003,
            'msg': f'服务器错误: {str(error)}',
            'data': {'answer': [], 'num': '0', 'usenum': '0'}
        })


# ==================== 九九助手接口 ====================
@app.route('/api/query', methods=['POST'])
def api_query():
    try:
        token = request.args.get('token') or request.get_json().get('token')
        data = request.get_json() or {}
        tm = data.get('tm')
        question_type = data.get('type')
        wid = data.get('wid')
        answernum = data.get('answernum')
        cid = data.get('cid')
        options = data.get('options')
        
        print(f'[九九助手] 收到请求: tm={tm}, type={question_type}, token={"未提供" if not token else token[:8] + "..."}')
        
        # 九九助手token验证
        is_jiujiu_token = token and re.match(r'^[0-9a-z]{32}$', token, re.IGNORECASE)
        if token and token != API_KEY and not is_jiujiu_token:
            print(f'[九九助手] Token验证失败 - 收到: {token[:8] if token else "无"}..., 期望: {API_KEY[:8]}... 或九九助手32位token')
            return jsonify({
                'code': 0,
                'msg': 'Token验证失败',
                'data': None,
                'left': 0
            })
        
        print(f'[九九助手] 题目: {tm}, 类型: {question_type}')
        
        # 类型映射
        type_map = {
            '0': '单选题',
            '1': '多选题',
            '2': '填空题',
            '3': '判断题'
        }
        
        # 解析选项
        options_list = []
        if options:
            try:
                options_list = json.loads(options) if isinstance(options, str) else options
            except Exception as e:
                print(f'选项解析失败: {str(e)}')
        
        # 调用答题逻辑
        answer = get_answer_for_jiujiu(tm, type_map.get(question_type, '单选题'), options_list)
        
        print(f'[九九助手] 返回答案: {answer}')
        
        return jsonify({
            'code': 1,
            'msg': '查询成功',
            'data': answer,
            'left': 999
        })
    except Exception as error:
        print(f'[九九助手] 错误: {str(error)}')
        return jsonify({
            'code': 0,
            'msg': '服务器错误',
            'data': None,
            'left': 0
        })


# ==================== 九九助手状态检查 ====================
@app.route('/api/status', methods=['GET'])
def api_status():
    version = request.args.get('version', '1.0')
    return jsonify({
        'status': 't',
        'info': '服务正常',
        'version': version
    })


# ==================== ABC网课助手接口 ====================
@app.route('/api/answer', methods=['POST'])
def api_answer():
    try:
        data = request.get_json() or {}
        question = data.get('question')
        question_type = data.get('type')
        options = data.get('options')
        token = data.get('token')
        
        print(f'[ABC网课-通用] 收到请求: question={question}, type={question_type}, token={"未提供" if not token else token[:8] + "..."}')
        
        # 验证token
        if token and token != API_KEY:
            print(f'[ABC网课-通用] Token验证失败 - 收到: {token[:8] if token else "无"}..., 期望: {API_KEY[:8]}...')
            return jsonify({
                'success': False,
                'message': 'Token验证失败',
                'answer': None
            })
        
        # 调用答题逻辑
        answer = get_answer_for_abc(question, question_type, options)
        
        print(f'[ABC网课-通用] 返回答案: {answer}')
        
        return jsonify({
            'success': True,
            'message': '查询成功',
            'answer': answer,
            'remaining': 999
        })
    except Exception as error:
        print(f'[ABC网课-通用] 错误: {str(error)}')
        return jsonify({
            'success': False,
            'message': '服务器错误',
            'answer': None
        })


# ==================== ABC网课助手精确/模糊搜索接口 ====================
@app.route('/question/accurateSearch', methods=['POST'])
def accurate_search():
    try:
        data = request.get_json() or {}
        question = data.get('question')
        options = data.get('options')
        question_type = data.get('type')
        token = data.get('token')
        
        print(f'[ABC网课-精确] 收到请求: question={question}, type={question_type}, options={"已提供" if options else "未提供"}, token={"未提供" if not token else token[:8] + "..."}')
        
        # 验证token
        if token and token != API_KEY:
            print(f'[ABC网课-精确] Token验证失败 - 收到: {token[:8] if token else "无"}..., 期望: {API_KEY[:8]}...')
            return jsonify({
                'code': 0,
                'msg': 'Token验证失败',
                'data': {'answer': [], 'remainCount': 0}
            })
        
        # 调用答题逻辑
        answer = get_answer_for_chaoxing(question, options, question_type)
        
        print(f'[ABC网课-精确] 返回答案: {answer}')
        
        return jsonify({
            'code': 1,
            'msg': '查询成功',
            'data': {
                'answer': answer,
                'remainCount': 999
            }
        })
    except Exception as error:
        print(f'[ABC网课-精确] 错误: {str(error)}')
        return jsonify({
            'code': 0,
            'msg': f'服务器错误: {str(error)}',
            'data': {'answer': [], 'remainCount': 0}
        })


@app.route('/question/fuzzySearch', methods=['POST'])
def fuzzy_search():
    try:
        data = request.get_json() or {}
        question = data.get('question')
        options = data.get('options')
        question_type = data.get('type')
        token = data.get('token')
        
        print(f'[ABC网课-模糊] 收到请求: question={question}, type={question_type}, options={"已提供" if options else "未提供"}, token={"未提供" if not token else token[:8] + "..."}')
        
        # 验证token
        if token and token != API_KEY:
            print(f'[ABC网课-模糊] Token验证失败 - 收到: {token[:8] if token else "无"}..., 期望: {API_KEY[:8]}...')
            return jsonify({
                'code': 0,
                'msg': 'Token验证失败',
                'data': {'answer': [], 'remainCount': 0}
            })
        
        # 调用答题逻辑
        answer = get_answer_for_chaoxing(question, options, question_type)
        
        print(f'[ABC网课-模糊] 返回答案: {answer}')
        
        return jsonify({
            'code': 1,
            'msg': '查询成功',
            'data': {
                'answer': answer,
                'remainCount': 999
            }
        })
    except Exception as error:
        print(f'[ABC网课-模糊] 错误: {str(error)}')
        return jsonify({
            'code': 0,
            'msg': f'服务器错误: {str(error)}',
            'data': {'answer': [], 'remainCount': 0}
        })


# ==================== 健康检查 ====================
@app.route('/health', methods=['GET'])
def health():
    return jsonify({
        'status': 'ok',
        'timestamp': datetime.now().isoformat(),
        'endpoints': ['/search', '/api/query', '/api/answer']
    })


if __name__ == '__main__':
    print('=' * 47)
    print(f'答题API服务运行在 http://localhost:{PORT}')
    print('=' * 47)
    print('接口列表:')
    print('  - POST /search                      (超星学习通)')
    print('  - POST /api/query                   (九九助手)')
    print('  - GET  /api/status                  (九九助手状态)')
    print('  - POST /question/accurateSearch     (ABC精确搜索)')
    print('  - POST /question/fuzzySearch        (ABC模糊搜索)')
    print('  - POST /api/answer                  (ABC通用)')
    print('  - GET  /health                      (健康检查)')
    print('=' * 47)
    print(f'API密钥: {API_KEY[:8]}...{API_KEY[-4:]}')
    print('=' * 47)
    print('✅ AI答题已启用')
    print(f'   API: {OPENAI_API_URL}')
    print('   模型: gpt-4o-mini')
    print('=' * 47)
    
    app.run(host='0.0.0.0', port=PORT, debug=False)
