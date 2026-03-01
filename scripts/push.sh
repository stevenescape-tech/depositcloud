#!/usr/bin/env bash
set -euo pipefail

# ---------- config ----------
EXPECTED_REMOTE_REGEX='stevenescape-tech/depositcloud-v1(\.git)?$'
EXPECTED_BRANCH='main'
# ---------------------------

msg="${1:-}"

# Ensure we're in a git repo
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Not inside a git repository."
  exit 1
fi

# Ensure correct branch
branch="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$branch" != "$EXPECTED_BRANCH" ]]; then
  echo "Refusing to push: current branch is '$branch' (expected '$EXPECTED_BRANCH')."
  echo "Switch with: git checkout $EXPECTED_BRANCH"
  exit 1
fi

# Ensure correct remote
remote_url="$(git remote get-url origin 2>/dev/null || true)"
if [[ -z "$remote_url" ]]; then
  echo "No 'origin' remote found."
  exit 1
fi

if ! echo "$remote_url" | grep -E "$EXPECTED_REMOTE_REGEX" >/dev/null 2>&1; then
  echo "Refusing to push: origin remote does not look like depositcloud-v1."
  echo "origin = $remote_url"
  exit 1
fi

# Show status
echo "Repo:  $remote_url"
echo "Branch: $branch"
echo
git status --porcelain=v1 || true

# Stage everything
git add -A

# If nothing changed, still allow push (in case you have local commits)
if git diff --cached --quiet; then
  echo
  echo "No new staged changes."
else
  # Commit message
  if [[ -z "$msg" ]]; then
    msg="chore: update $(date '+%Y-%m-%d %H:%M')"
  fi
  git commit -m "$msg"
fi

# Push
echo
echo "Pushing to origin/$EXPECTED_BRANCH..."
git push origin "$EXPECTED_BRANCH"

echo
echo "Done."
