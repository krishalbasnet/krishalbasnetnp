@echo off
echo Starting Nepal Election 2082 Dashboard...
start "" "http://localhost:8082"
powershell -ExecutionPolicy Bypass -File server.ps1
pause
