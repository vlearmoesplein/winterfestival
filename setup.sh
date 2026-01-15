#!/bin/bash

# Winterfestival Neede Website Setup Script
# This script helps you get started with the Hugo site

set -e

echo "🎪 Winterfestival Neede Website Setup"
echo "======================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

# Check if Hugo is installed
check_hugo() {
    if command -v hugo >/dev/null 2>&1; then
        HUGO_VERSION=$(hugo version | grep -o 'v[0-9]\+\.[0-9]\+\.[0-9]\+' | head -1)
        print_status "Hugo is installed (${HUGO_VERSION})"

        # Check if version is sufficient
        REQUIRED_VERSION="0.110.0"
        if [[ "$(printf '%s\n' "$REQUIRED_VERSION" "$HUGO_VERSION" | sort -V | head -n1)" = "$REQUIRED_VERSION" ]]; then
            print_status "Hugo version is compatible"
        else
            print_warning "Hugo version might be too old (required: v$REQUIRED_VERSION)"
        fi
    else
        print_error "Hugo is not installed!"
        echo ""
        echo "Please install Hugo Extended from: https://gohugo.io/installation/"
        echo "Or using Homebrew: brew install hugo"
        echo "Or using Snap: snap install hugo"
        exit 1
    fi
}

# Check if Git is installed
check_git() {
    if command -v git >/dev/null 2>&1; then
        print_status "Git is installed"
    else
        print_warning "Git is not installed (optional for development)"
    fi
}

# Check if Node.js is installed (optional)
check_node() {
    if command -v node >/dev/null 2>&1; then
        NODE_VERSION=$(node --version)
        print_status "Node.js is installed (${NODE_VERSION})"

        if command -v npm >/dev/null 2>&1; then
            print_status "npm is available"
        fi
    else
        print_info "Node.js is not installed (optional for development tools)"
    fi
}

# Install npm dependencies if package.json exists and node is available
install_dependencies() {
    if [[ -f "package.json" ]] && command -v npm >/dev/null 2>&1; then
        print_info "Installing development dependencies..."
        npm install
        print_status "Dependencies installed"
    else
        print_info "Skipping npm dependencies (Node.js not available or no package.json)"
    fi
}

# Build the site
build_site() {
    print_info "Building the Hugo site..."
    if hugo --minify; then
        print_status "Site built successfully"
    else
        print_error "Failed to build site"
        exit 1
    fi
}

# Start development server
start_server() {
    echo ""
    print_info "Starting development server..."
    echo ""
    echo "The site will be available at:"
    echo "  → Local:   http://localhost:1313"
    echo "  → Network: http://$(hostname -I | awk '{print $1}' 2>/dev/null || hostname):1313"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""

    # Start Hugo server
    hugo server -D --bind 0.0.0.0
}

# Main setup process
main() {
    echo "Checking system requirements..."
    echo ""

    check_hugo
    check_git
    check_node

    echo ""
    echo "System check complete!"
    echo ""

    # Ask what to do
    echo "What would you like to do?"
    echo "1) Install dependencies and build site"
    echo "2) Start development server"
    echo "3) Build for production"
    echo "4) Show available commands"
    echo "5) Exit"
    echo ""

    read -p "Choose an option (1-5): " choice

    case $choice in
        1)
            install_dependencies
            build_site
            echo ""
            print_status "Setup complete! Your site is ready."
            print_info "Run './setup.sh' and choose option 2 to start the development server"
            ;;
        2)
            install_dependencies
            start_server
            ;;
        3)
            install_dependencies
            print_info "Building for production..."
            hugo --minify
            print_status "Production build complete! Files are in the 'public' directory"
            ;;
        4)
            show_commands
            ;;
        5)
            echo "Goodbye! 👋"
            exit 0
            ;;
        *)
            print_error "Invalid choice. Please run the script again."
            exit 1
            ;;
    esac
}

# Show available commands
show_commands() {
    echo ""
    echo "🛠️  Available Commands"
    echo "===================="
    echo ""
    echo "Development:"
    echo "  hugo server -D              Start development server"
    echo "  hugo server -D --bind 0.0.0.0  Start server accessible from network"
    echo ""
    echo "Building:"
    echo "  hugo                        Build site"
    echo "  hugo --minify              Build and minify for production"
    echo "  hugo --buildDrafts         Include draft content"
    echo ""
    echo "Content:"
    echo "  hugo new content/page.md   Create new page"
    echo "  hugo list drafts           List draft content"
    echo ""
    echo "If you have npm installed:"
    echo "  npm run dev                Start development server"
    echo "  npm run build              Build for production"
    echo "  npm run clean              Clean build files"
    echo ""
    echo "Useful Hugo flags:"
    echo "  -D, --buildDrafts          Include draft content"
    echo "  -F, --buildFuture          Include future-dated content"
    echo "  --minify                   Minify output"
    echo "  --gc                       Run garbage collection"
    echo ""
}

# Handle command line arguments
if [[ $# -gt 0 ]]; then
    case $1 in
        --build|-b)
            print_info "Building site..."
            hugo --minify
            print_status "Build complete!"
            ;;
        --serve|-s)
            print_info "Starting development server..."
            hugo server -D --bind 0.0.0.0
            ;;
        --help|-h)
            echo "Winterfestival Neede Website Setup"
            echo ""
            echo "Usage: $0 [option]"
            echo ""
            echo "Options:"
            echo "  --build, -b     Build the site for production"
            echo "  --serve, -s     Start development server"
            echo "  --help, -h      Show this help message"
            echo ""
            echo "Run without arguments for interactive setup"
            ;;
        *)
            print_error "Unknown option: $1"
            echo "Use --help for available options"
            exit 1
            ;;
    esac
else
    main
fi
