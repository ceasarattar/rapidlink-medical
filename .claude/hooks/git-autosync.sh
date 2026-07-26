#!/usr/bin/env bash
# UserPromptSubmit hook — keep the local branch in sync with origin, SAFELY.
#
# Behavior:
#   • behind + clean tree  -> fast-forward pull, then report what changed
#   • behind + dirty tree  -> pull NOTHING, print a clear warning
#   • already up to date   -> stay completely silent (no output)
#
# Safety: this script only ever runs `git fetch` and `git merge --ff-only`.
# It NEVER runs `git reset`, `git checkout --force`, `git stash drop`, or
# anything else that could discard uncommitted work. A fast-forward merge
# cannot overwrite local changes — git refuses it if the tree isn't clean.
#
# The hook never blocks the prompt: every path exits 0.
set -uo pipefail

# Emit a message to the user via the hook JSON protocol, then exit cleanly.
emit() {
  printf '%s' "$1" | jq -Rs '{systemMessage: .}'
  exit 0
}

# Operate on THIS script's repository, regardless of the caller's cwd.
repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")" 2>/dev/null && git rev-parse --show-toplevel 2>/dev/null)" || exit 0
[ -z "$repo_root" ] && exit 0
cd "$repo_root" || exit 0

# Must be on a real branch (not detached HEAD).
branch="$(git symbolic-ref --quiet --short HEAD 2>/dev/null)" || exit 0
[ -z "$branch" ] && exit 0

# Must have an upstream configured, else there's nothing to sync against.
upstream="$(git rev-parse --abbrev-ref --symbolic-full-name '@{u}' 2>/dev/null)" || exit 0
[ -z "$upstream" ] && exit 0

# Fetch. On network failure, stay silent — don't nag on every prompt.
git fetch --quiet origin 2>/dev/null || exit 0

# How far behind upstream are we?
behind="$(git rev-list --count "HEAD..$upstream" 2>/dev/null)" || exit 0
[ -z "$behind" ] && exit 0

# Up to date -> silent happy path.
[ "$behind" -eq 0 ] && exit 0

# Behind. Decide based on working-tree cleanliness.
# "Dirty" = uncommitted changes to TRACKED files (staged or unstaged). Untracked
# files are ignored on purpose: they are not "work in progress on a commit," a
# fast-forward can never silently overwrite them (git aborts if it would), and
# this repo keeps '.claude/' permanently untracked — counting it would wedge the
# hook into warn-mode on every prompt.
if [ -n "$(git status --porcelain --untracked-files=no 2>/dev/null)" ]; then
  # DIRTY: do not pull. Warn only.
  emit "⚠️  Branch '${branch}' is ${behind} commit(s) behind ${upstream}, but you have uncommitted local changes. No pull was performed — commit or stash your work, then pull manually."
fi

# CLEAN: fast-forward only. --ff-only cannot create a merge commit or
# discard anything; if a real merge were required, it fails and we stay quiet.
before="$(git rev-parse HEAD)"
if git merge --ff-only "$upstream" >/dev/null 2>&1; then
  stat="$(git diff --shortstat "$before" HEAD 2>/dev/null | sed 's/^[[:space:]]*//')"
  files="$(git diff --name-status "$before" HEAD 2>/dev/null | sed 's/^/  /')"
  emit "$(printf '🔄 Fast-forwarded %s: pulled %s new commit(s).\n%s\n%s' "$branch" "$behind" "$stat" "$files")"
fi

# Fast-forward wasn't possible (diverged) — stay silent; nothing was changed.
exit 0
