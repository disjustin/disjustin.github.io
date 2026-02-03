# Setting up a Linux Development Environment

*Last updated: January 1, 2026*

This guide will walk you through setting up a productive Linux development environment from scratch.

## Table of Contents

1. [Choosing a Distribution](#choosing-a-distribution)
2. [Initial Setup](#initial-setup)
3. [Installing Development Tools](#installing-development-tools)
4. [Configuring Your Shell](#configuring-your-shell)
5. [Text Editor Setup](#text-editor-setup)

## Choosing a Distribution

For development, I recommend:

- **Ubuntu/Debian**: Great for beginners, excellent package management
- **Fedora**: Cutting-edge packages, good balance of stability and newness
- **Arch Linux**: For those who want full control and latest packages

## Initial Setup

After installing your distribution:

```bash
# Update package lists
sudo apt update && sudo apt upgrade -y  # Ubuntu/Debian
sudo dnf upgrade -y                      # Fedora

# Install essential build tools
sudo apt install build-essential git curl wget  # Ubuntu/Debian
sudo dnf groupinstall "Development Tools"       # Fedora
```

## Installing Development Tools

### Version Control

```bash
# Git
sudo apt install git
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Programming Languages

```bash
# Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs

# Python
sudo apt install python3 python3-pip python3-venv

# Go
wget https://go.dev/dl/go1.21.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.21.linux-amd64.tar.gz
```

### Docker

```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add user to docker group
sudo usermod -aG docker $USER
```

## Configuring Your Shell

### Install Zsh and Oh My Zsh

```bash
# Install Zsh
sudo apt install zsh

# Install Oh My Zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Recommended plugins
# Edit ~/.zshrc and add:
plugins=(git docker node npm python)
```

### Useful Aliases

Add to your `~/.bashrc` or `~/.zshrc`:

```bash
# Navigation
alias ..="cd .."
alias ...="cd ../.."
alias ll="ls -lah"

# Git shortcuts
alias gs="git status"
alias ga="git add"
alias gc="git commit"
alias gp="git push"

# Safety
alias rm="rm -i"
alias mv="mv -i"
alias cp="cp -i"
```

## Text Editor Setup

### Vim/Neovim

```bash
# Install Neovim
sudo apt install neovim

# Install vim-plug
curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

### VS Code

```bash
# Download and install
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt update
sudo apt install code
```

## Terminal Multiplexer

### tmux

```bash
# Install tmux
sudo apt install tmux

# Basic tmux config (~/.tmux.conf)
set -g mouse on
set -g history-limit 10000
set -g base-index 1
```

## Monitoring Tools

```bash
# System monitoring
sudo apt install htop iotop nethogs

# Disk usage
sudo apt install ncdu

# Network tools
sudo apt install net-tools traceroute
```

## Final Tips

1. **Backup your dotfiles**: Keep your configuration files in a Git repository
2. **Document your setup**: Maintain a script to recreate your environment
3. **Learn keyboard shortcuts**: They'll save you hours of work
4. **Customize gradually**: Don't overwhelm yourself with configurations

Your development environment will evolve over time. Start simple and add tools as you need them!
