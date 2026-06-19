#!/bin/bash
# Decryptid Development Shell Aliases

# File listing
alias ll='ls -lah'
alias la='ls -A'

# Git shortcuts
alias gs='git status'
alias gp='git pull'
alias gd='git diff'
alias gl='git log --oneline --graph --decorate'

# Bun shortcuts
alias bi='bun install'
alias br='bun run'
alias bt='bun run test'
alias dev='bun run serve'
alias build='bun run build'
alias serve='bun run serve'

# Claude-specific shortcuts
alias clauded='claude --dangerously-skip-permissions'
