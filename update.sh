#!/bin/bash
set -e  # Exit on error

# Configuration
PROJECT_DIR="$HOME/src/myhtml/angularnineteen.github.io"
LOG_PREFIX="[$(date '+%Y-%m-%d %H:%M:%S')]"

log() {
    echo "$LOG_PREFIX $1"
}

log "Starting update process"

# Load NVM
. ~/.nvm/nvm.sh

# Navigate to project directory
cd "$PROJECT_DIR" || exit 1

# Ensure we're on the latest LTS Node
nvm install --lts
nvm use --lts

# Check for uncommitted changes first
if ! git diff-index --quiet HEAD --; then
    log "WARNING: Uncommitted changes detected. Stashing them."
    git stash push -m "Automated stash before update $(date '+%Y-%m-%d %H:%M')"
fi

# Pull latest changes once
log "Pulling latest changes"
git fetch origin
git pull --rebase origin master --strategy-option=theirs

# Install/update dependencies only if package.json changed
if git diff HEAD@{1} --name-only | grep -q "package.json"; then
    log "package.json changed, updating dependencies"
    yarn install
fi

# Update Angular CLI and core if needed
log "Checking for Angular updates"
yarn run ng update @angular/core @angular/cli --force

# Build the project
log "Building project"
yarn run ng build --configuration=production

# Update browserslist if needed
if command -v npx &> /dev/null; then
    echo y | npx update-browserslist-db@latest
fi

# Commit and push all changes if any
if ! git diff-index --quiet HEAD --; then
    log "Committing changes"
    git add .
    git commit -m "Automated update: $(date '+%Y-%m-%d %H:%M')"
fi

# Check if there are unpushed commits and push them
if [ $(git rev-list --count @{u}..HEAD) -gt 0 ]; then
    log "Pushing unpushed commits to remote"
    git push origin master
else
    log "No changes to push"
fi

# Check if we had stashed changes and notify
if git stash list | grep -q "Automated stash before update"; then
    log "WARNING: There are stashed changes. Run 'git stash pop' to restore them."
fi

log "Update process completed"
