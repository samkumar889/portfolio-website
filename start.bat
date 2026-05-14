@echo off
echo ================================
echo  Sameer Kumar Portfolio
echo  Starting Development Servers
echo ================================
echo.
echo Starting Backend Server (Port 3001)...
start "Backend Server" cmd /k "powershell -ExecutionPolicy Bypass -Command \"npm run server\""
timeout /t 3 /nobreak > nul
echo.
echo Starting Frontend Server (Port 3000)...
start "Frontend Server" cmd /k "powershell -ExecutionPolicy Bypass -Command \"npm run dev\""
echo.
echo ================================
echo  Servers are starting...
echo  Frontend: http://localhost:3000
echo  Backend:  http://localhost:3001
echo ================================
echo.
echo Press any key to open the browser...
pause > nul
start http://localhost:3000
