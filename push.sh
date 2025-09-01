#!/bin/bash

# Bash script to push portfolio to GitHub
REPO_URL=${1:-"https://github.com/saaedimam/portfolio_site.git"}

echo "🚀 Pushing portfolio to GitHub..."

# Clone the repository
echo "📥 Cloning repository..."
git clone $REPO_URL repo

# Copy all files except the repo folder and push scripts
echo "📋 Copying files..."
rsync -av --exclude repo --exclude push.sh --exclude push.ps1 ./ repo/

# Navigate to repo directory
cd repo

# Clean and add all files
echo "🧹 Cleaning repository..."
git rm -rf . 2>/dev/null || true
git clean -fdx 2>/dev/null || true

# Copy files again after cleaning
echo "📋 Copying files after clean..."
rsync -av --exclude repo --exclude push.sh --exclude push.ps1 ../ repo/

# Add all files
echo "➕ Adding files to git..."
git add -A

# Commit with conventional commit message
echo "💾 Committing changes..."
git commit -m "feat: init portfolio (Next.js 14, MDX, EN-only, SEO/OG)"

# Push to main branch
echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Portfolio successfully pushed to GitHub!"
echo "🌐 Ready for Vercel deployment at: $REPO_URL"

# Navigate back to original directory
cd ..
