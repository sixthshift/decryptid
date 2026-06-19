# Decryptid Development Container
#
# Static React app (Vite + Bun). Node 22 LTS runs the Vite/Vitest toolchain;
# Bun is the package manager. LSP tooling is included so Claude Code
# can use language-server features. Base image provides git, sudo, vscode user.

FROM mcr.microsoft.com/devcontainers/base:bookworm

# Add apt repos: Node.js 22 LTS, GitHub CLI
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg \
        | dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" \
        | tee /etc/apt/sources.list.d/github-cli.list > /dev/null

# Install Node.js + GitHub CLI
RUN apt-get update \
    && apt-get install -y --no-install-recommends nodejs gh \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# typescript-language-server powers LSP for JS/JSX (TS server serves JS too)
RUN npm install -g typescript typescript-language-server

# Install Go (for mcp-language-server)
RUN curl -fsSL https://go.dev/dl/go1.23.4.linux-$(dpkg --print-architecture).tar.gz | tar -C /usr/local -xzf -
ENV GOPATH="/usr/local/gopath"
ENV PATH="/usr/local/go/bin:${GOPATH}/bin:${PATH}"

# mcp-language-server bridges the language server to Claude Code
RUN go install github.com/isaacphi/mcp-language-server@latest

# Ensure vscode user owns the shared Bun install dir
RUN mkdir -p /usr/local/share/bun-global && chown -R vscode:vscode /usr/local/share

USER vscode

# Install Bun (package manager)
ENV BUN_INSTALL="/usr/local/share/bun-global"
ENV PATH="$BUN_INSTALL/bin:${PATH}"
RUN curl -fsSL https://bun.sh/install | bash

# Install Claude Code CLI
RUN curl -fsSL https://claude.ai/install.sh | bash
ENV PATH="/home/vscode/.local/bin:${PATH}"

# Setup shell configuration
COPY --chown=vscode:vscode shell-config.sh /home/vscode/.shell-config.sh
RUN echo 'source /home/vscode/.shell-config.sh' >> /home/vscode/.bashrc
