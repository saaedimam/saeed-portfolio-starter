# PowerShell script to push Saaed Imam's portfolio to GitHub
# This script will clone the repo, copy the project files, and push to main branch

Write-Host "🚀 Starting deployment of Saaed Imam's portfolio..." -ForegroundColor Green

# Configuration
$REPO_URL = "https://github.com/saaedimam/portfolio_site.git"
$REPO_DIR = "repo"
$BRANCH = "main"

# Function to check if command exists
function Test-Command($cmdname) {
    return [bool](Get-Command -Name $cmdname -ErrorAction SilentlyContinue)
}

# Check if git is installed
if (-not (Test-Command "git")) {
    Write-Host "❌ Git is not installed. Please install Git first." -ForegroundColor Red
    exit 1
}

# Remove existing repo directory if it exists
if (Test-Path $REPO_DIR) {
    Write-Host "🗑️  Removing existing repo directory..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force $REPO_DIR
}

# Clone the repository
Write-Host "📥 Cloning repository..." -ForegroundColor Blue
git clone $REPO_URL $REPO_DIR
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to clone repository. Please check your GitHub access." -ForegroundColor Red
    exit 1
}

# Navigate to repo directory
Set-Location $REPO_DIR

# Switch to main branch
Write-Host "🌿 Switching to main branch..." -ForegroundColor Blue
git checkout $BRANCH
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to switch to main branch." -ForegroundColor Red
    exit 1
}

# Remove all existing files (except .git)
Write-Host "🧹 Cleaning repository..." -ForegroundColor Blue
Get-ChildItem -Path . -Exclude .git | Remove-Item -Recurse -Force

# Copy project files (excluding repo directory and push scripts)
Write-Host "📁 Copying project files..." -ForegroundColor Blue
$EXCLUDE_PATTERNS = @(
    "repo",
    "push.ps1",
    "push.sh",
    ".git",
    "node_modules",
    ".next",
    ".contentlayer"
)

# Get all files from parent directory
$SOURCE_DIR = ".."
Get-ChildItem -Path $SOURCE_DIR -Recurse | ForEach-Object {
    $relativePath = $_.FullName.Substring((Resolve-Path $SOURCE_DIR).Path.Length + 1)
    $shouldExclude = $false
    
    foreach ($pattern in $EXCLUDE_PATTERNS) {
        if ($relativePath -like "$pattern*" -or $relativePath -like "*\$pattern*") {
            $shouldExclude = $true
            break
        }
    }
    
    if (-not $shouldExclude) {
        $destPath = Join-Path "." $relativePath
        
        if ($_.PSIsContainer) {
            # Create directory
            if (-not (Test-Path $destPath)) {
                New-Item -ItemType Directory -Path $destPath -Force | Out-Null
            }
        } else {
            # Copy file
            $destDir = Split-Path $destPath -Parent
            if (-not (Test-Path $destDir)) {
                New-Item -ItemType Directory -Path $destDir -Force | Out-Null
            }
            Copy-Item $_.FullName $destPath -Force
        }
    }
}

# Add all files to git
Write-Host "➕ Adding files to git..." -ForegroundColor Blue
git add -A

# Commit changes
Write-Host "💾 Committing changes..." -ForegroundColor Blue
$COMMIT_MESSAGE = "feat: init portfolio (EN, green theme, images in all sections)

- Modern Next.js 14 portfolio with green palette
- Responsive design with dark mode support
- Framer Motion animations and smooth transitions
- All sections include images/SVGs as required
- Contact form with honeypot protection
- SEO optimized with sitemap, robots.txt, RSS
- PWA ready with manifest and icons
- Ready for Vercel deployment"

git commit -m $COMMIT_MESSAGE

# Push to remote
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Blue
git push origin $BRANCH

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully deployed portfolio to GitHub!" -ForegroundColor Green
    Write-Host "🌐 Repository: $REPO_URL" -ForegroundColor Cyan
    Write-Host "📱 Ready for Vercel import!" -ForegroundColor Cyan
} else {
    Write-Host "❌ Failed to push to GitHub. Please check your credentials." -ForegroundColor Red
    exit 1
}

# Go back to parent directory
Set-Location ..

Write-Host "🎉 Deployment complete! Your portfolio is now on GitHub." -ForegroundColor Green
Write-Host "💡 Next step: Import to Vercel from $REPO_URL" -ForegroundColor Yellow
