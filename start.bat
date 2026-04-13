@echo off
chcp 65001 >nul 2>&1
echo.
echo ========================================
echo   Peynir Atolyesi - Kurulum ve Baslatma
echo ========================================
echo.

echo [1/2] Flask kuruluyor...
pip install flask --quiet
if errorlevel 1 (
    echo.
    echo HATA: Flask kurulamadi! Python ve pip'in yuklu oldugundan emin olun.
    pause
    exit /b 1
)

echo [2/2] Sunucu baslatiliyor...
echo.
python server.py
pause
