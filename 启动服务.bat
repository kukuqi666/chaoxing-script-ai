@echo off
chcp 65001 >nul
echo ========================================
echo 网课答题助手 - AI自动答题版 by 琪大大
echo ========================================
echo.

REM 检查是否有旧进程
echo 正在检查旧进程...
for /f "tokens=2" %%i in ('tasklist ^| findstr "node.exe"') do (
    echo 发现旧进程，正在关闭...
    taskkill /F /PID %%i >nul 2>&1
)

echo 正在检查依赖...
cd api-server

if not exist node_modules (
    echo 首次运行，正在安装依赖...
    call yarn install
)

if not exist .env (
    echo 创建配置文件...
    copy .env.example .env >nul
    echo.
    echo ⚠️  请编辑 api-server\.env 文件，设置你的API_KEY
    echo.
    pause
)

echo 启动代理服务...
echo.
node index.js

pause
