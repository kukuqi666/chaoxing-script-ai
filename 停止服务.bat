@echo off
chcp 65001 >nul
echo ========================================
echo 停止答题服务
echo ========================================
echo.

echo 正在查找Node.js进程...
tasklist | findstr "node.exe"

if %ERRORLEVEL% EQU 0 (
    echo.
    echo 正在停止所有Node.js进程...
    taskkill /F /IM node.exe
    echo.
    echo ✅ 服务已停止
) else (
    echo.
    echo ℹ️  没有运行中的Node.js进程
)

echo.
pause
