# PowerShell script to push portfolio to GitHub
param(
    [string]$RepoUrl = "https://github.com/saaedimam/portfolio_site.git"
)

Write-Host "🚀 Pushing portfolio to GitHub..." -ForegroundColor Green

# Clone the repository
Write-Host "📥 Cloning repository..." -ForegroundColor Yellow
git clone $RepoUrl repo

# Copy all files except the repo folder and push scripts
Write-Host "📋 Copying files..." -ForegroundColor Yellow
Get-ChildItem -Path . -Exclude "repo", "push.ps1", "push.sh" | Copy-Item -Destination ".\repo" -Recurse -Force

# Navigate to repo directory
Set-Location repo

# Clean and add all files
Write-Host "🧹 Cleaning repository..." -ForegroundColor Yellow
git rm -rf . 2>$null
git clean -fdx 2>$null

# Copy files again after cleaning
Write-Host "📋 Copying files after clean..." -ForegroundColor Yellow
Get-ChildItem -Path ".." -Exclude "repo", "push.ps1", "push.sh" | Copy-Item -Destination "." -Recurse -Force

# Add all files
Write-Host "➕ Adding files to git..." -ForegroundColor Yellow
git add -A

# Commit with conventional commit message
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git commit -m "feat: init portfolio (Next.js 14, MDX, EN-only, SEO/OG)"

# Push to main branch
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "✅ Portfolio successfully pushed to GitHub!" -ForegroundColor Green
Write-Host "🌐 Ready for Vercel deployment at: $RepoUrl" -ForegroundColor Cyan

# Navigate back to original directory
Set-Location ..
