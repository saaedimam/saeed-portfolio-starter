#!/bin/bash

# Bash script to push Saaed Imam's portfolio to GitHub
# This script will clone the repo, copy the project files, and push to main branch

echo "🚀 Starting deployment of Saaed Imam's portfolio..."

# Configuration
REPO_URL="https://github.com/saaedimam/portfolio_site.git"
REPO_DIR="repo"
BRANCH="main"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Remove existing repo directory if it exists
if [ -d "$REPO_DIR" ]; then
    echo "🗑️  Removing existing repo directory..."
    rm -rf "$REPO_DIR"
fi

# Clone the repository
echo "📥 Cloning repository..."
if ! git clone "$REPO_URL" "$REPO_DIR"; then
    echo "❌ Failed to clone repository. Please check your GitHub access."
    exit 1
fi

# Navigate to repo directory
cd "$REPO_DIR"

# Switch to main branch
echo "🌿 Switching to main branch..."
if ! git checkout "$BRANCH"; then
    echo "❌ Failed to switch to main branch."
    exit 1
fi

# Remove all existing files (except .git)
echo "🧹 Cleaning repository..."
find . -mindepth 1 -not -path "./.git*" -delete

# Copy project files (excluding repo directory and push scripts)
echo "📁 Copying project files..."
EXCLUDE_PATTERNS=("repo" "push.ps1" "push.sh" ".git" "node_modules" ".next" ".contentlayer")

# Function to check if path should be excluded
should_exclude() {
    local path="$1"
    for pattern in "${EXCLUDE_PATTERNS[@]}"; do
        if [[ "$path" == *"$pattern"* ]]; then
            return 0  # true, should exclude
        fi
    done
    return 1  # false, should not exclude
}

# Copy files from parent directory
cd ..
find . -mindepth 1 -not -path "./$REPO_DIR*" | while read -r item; do
    if [ -e "$item" ] && ! should_exclude "$item"; then
        relative_path="${item#./}"
        dest_path="$REPO_DIR/$relative_path"
        
        if [ -d "$item" ]; then
            # Create directory
            mkdir -p "$dest_path"
        else
            # Copy file
            dest_dir=$(dirname "$dest_path")
            mkdir -p "$dest_dir"
            cp "$item" "$dest_path"
        fi
    fi
done

# Navigate back to repo directory
cd "$REPO_DIR"

# Add all files to git
echo "➕ Adding files to git..."
git add -A

# Commit changes
echo "💾 Committing changes..."
COMMIT_MESSAGE="feat: init portfolio (EN, green theme, images in all sections)

- Modern Next.js 14 portfolio with green palette
- Responsive design with dark mode support
- Framer Motion animations and smooth transitions
- All sections include images/SVGs as required
- Contact form with honeypot protection
- SEO optimized with sitemap, robots.txt, RSS
- PWA ready with manifest and icons
- Ready for Vercel deployment"

git commit -m "$COMMIT_MESSAGE"

# Push to remote
echo "🚀 Pushing to GitHub..."
if git push origin "$BRANCH"; then
    echo "✅ Successfully deployed portfolio to GitHub!"
    echo "🌐 Repository: $REPO_URL"
    echo "📱 Ready for Vercel import!"
else
    echo "❌ Failed to push to GitHub. Please check your credentials."
    exit 1
fi

# Go back to parent directory
cd ..

echo "🎉 Deployment complete! Your portfolio is now on GitHub."
echo "💡 Next step: Import to Vercel from $REPO_URL"
