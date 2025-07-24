#!/bin/bash

# Codifye Website Deployment Script for Hostinger
# This script prepares the website for production deployment

echo "🚀 Starting Codifye Website Deployment Process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Step 1: Clean previous builds
echo -e "${YELLOW}📁 Cleaning previous builds...${NC}"
npm run clean
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Failed to clean previous builds${NC}"
    exit 1
fi

# Step 2: Install dependencies (if needed)
echo -e "${YELLOW}📦 Checking dependencies...${NC}"
if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}Installing dependencies...${NC}"
    npm install
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Failed to install dependencies${NC}"
        exit 1
    fi
fi

# Step 3: Run TypeScript check
echo -e "${YELLOW}🔍 Running TypeScript checks...${NC}"
npm run typecheck
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ TypeScript check failed. Please fix errors before deploying.${NC}"
    exit 1
fi

# Step 4: Build for production
echo -e "${YELLOW}🔨 Building for production...${NC}"
npm run build:production
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Production build failed${NC}"
    exit 1
fi

# Step 5: Verify build output
echo -e "${YELLOW}✅ Verifying build output...${NC}"
if [ ! -f "build/index.html" ]; then
    echo -e "${RED}❌ Build verification failed - index.html not found${NC}"
    exit 1
fi

if [ ! -f "build/.htaccess" ]; then
    echo -e "${RED}❌ Build verification failed - .htaccess not found${NC}"
    exit 1
fi

# Step 6: Display build information
echo -e "${GREEN}✅ Build completed successfully!${NC}"
echo -e "${BLUE}📊 Build Information:${NC}"
echo "Build directory: ./build/"
echo "Total files: $(find build -type f | wc -l)"
echo "Build size: $(du -sh build | cut -f1)"

# Step 7: Git preparation
echo -e "${YELLOW}🌐 Preparing for Git deployment...${NC}"

# Check if build directory is tracked by git
if ! git ls-files --error-unmatch build/ >/dev/null 2>&1; then
    echo -e "${BLUE}Adding build directory to Git...${NC}"
    git add build/
fi

echo -e "${GREEN}🎉 Deployment preparation complete!${NC}"
echo -e "${BLUE}📋 Next Steps:${NC}"
echo "1. Review the build output in the 'build' directory"
echo "2. Commit changes: git add . && git commit -m 'Deploy: Production build'"
echo "3. Push to your Hostinger repository: git push origin main"
echo ""
echo -e "${YELLOW}📁 Build files are ready in: ./build/${NC}"
echo -e "${YELLOW}🌐 Upload the contents of the 'build' directory to your Hostinger public_html folder${NC}" 