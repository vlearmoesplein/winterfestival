# Winterfestival Hugo Site Makefile

# Variables
PUBLIC_DIR := public
BASEURL := https://winterfestival.vlearmoesplein.nl/
DEV_PORT := 1313

# Default target
.PHONY: help
help:
	@echo "Winterfestival Hugo Site Commands:"
	@echo "  dev           Start development server (with local config)"
	@echo "  build         Build site for production"
	@echo "  build-local   Build site for local testing"
	@echo "  clean         Clean generated files"
	@echo "  clean-cache   Clear Hugo cache"
	@echo "  deploy        Build and prepare for deployment"
	@echo "  deploy-github Deploy to GitHub Pages (commit and push)"
	@echo "  deploy-local  Build with GitHub Pages base URL"
	@echo "  check         Check Hugo version and config"
	@echo "  prettier      Run Prettier formatting via npm"

# Development commands
.PHONY: dev
dev:
	hugo server --config hugo.dev.toml --bind 0.0.0.0 --port $(DEV_PORT) --buildDrafts --buildFuture --disableFastRender

.PHONY: serve
serve: dev

# Build commands
.PHONY: build
build: clean
	hugo --minify --environment production

.PHONY: build-dev
build-dev: clean
	hugo --config hugo.dev.toml --buildDrafts --buildFuture

.PHONY: build-local
build-local: clean
	hugo --config hugo.dev.toml --minify

# Clean commands
.PHONY: clean
clean:
	rm -rf $(PUBLIC_DIR)
	rm -rf resources/_gen

.PHONY: clean-cache
clean-cache:
	hugo --gc
	rm -rf resources/_gen

# Deployment commands
.PHONY: deploy
deploy: build
	@echo "Site built in $(PUBLIC_DIR)/ - ready for deployment"

.PHONY: deploy-github
deploy-github: build ## Deploy to GitHub Pages (commit and push)
	git add .
	git commit -m "Deploy site updates"
	git push origin main

.PHONY: deploy-local
deploy-local: build ## Build for GitHub Pages with correct base URL
	hugo --gc --minify --baseURL "$(BASEURL)"

# Utility commands
.PHONY: check
check:
	hugo version
	hugo config

.PHONY: version
version:
	hugo version

# Code formatting (Prettier via npm)
.PHONY: prettier
prettier:
	npm run format

# Shortcuts
.PHONY: s
s: serve

.PHONY: b
b: build

.PHONY: c
c: clean

.PHONY: d
d: deploy
