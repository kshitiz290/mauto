@echo off
setlocal enabledelayedexpansion

REM Codifye Website Deployment Script for Hostinger (Windows)
REM This script prepares the website for production deployment

echo.
echo 🚀 Starting Codifye Website Deployment Process...
echo.

REM Step 1: Clean previous builds
echo 📁 Cleaning previous builds...
call npm run clean
if errorlevel 1 (
    echo ❌ Failed to clean previous builds
    pause
    exit /b 1
)

REM Step 2: Check dependencies
echo 📦 Checking dependencies...
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo ❌ Failed to install dependencies
        pause
        exit /b 1
    )
)

REM Step 3: Run TypeScript check
echo 🔍 Running TypeScript checks...
call npm run typecheck
if errorlevel 1 (
    echo ❌ TypeScript check failed. Please fix errors before deploying.
    pause
    exit /b 1
)

REM Step 4: Build for production
echo 🔨 Building for production...
call npm run build:production
if errorlevel 1 (
    echo ❌ Production build failed
    pause
    exit /b 1
)

REM Step 5: Verify build output
echo ✅ Verifying build output...
if not exist "build\index.html" (
    echo ❌ Build verification failed - index.html not found
    pause
    exit /b 1
)

if not exist "build\.htaccess" (
    echo ❌ Build verification failed - .htaccess not found
    pause
    exit /b 1
)

REM Step 6: Display build information
echo.
echo ✅ Build completed successfully!
echo 📊 Build Information:
echo Build directory: .\build\
echo.

REM Step 7: Git preparation
echo 🌐 Preparing for Git deployment...
git add build/
echo.

echo 🎉 Deployment preparation complete!
echo.
echo 📋 Next Steps:
echo 1. Review the build output in the 'build' directory
echo 2. Commit changes: git add . ^&^& git commit -m "Deploy: Production build"
echo 3. Push to your Hostinger repository: git push origin main
echo.
echo 📁 Build files are ready in: .\build\
echo 🌐 Upload the contents of the 'build' directory to your Hostinger public_html folder
echo.
pause 