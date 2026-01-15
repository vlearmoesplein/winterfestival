# GitHub Pages + Cloudflare Deployment Guide

This guide explains how to deploy the Vlearmoesplein Hugo site to GitHub Pages with Cloudflare CDN for optimal performance and custom domain support.

## Overview

**Deployment Stack:**
- **GitHub Pages** - Static site hosting
- **GitHub Actions** - Automated build and deployment
- **Cloudflare** - CDN, SSL, and custom domain
- **Hugo** - Static site generator

## Prerequisites

- GitHub account
- Cloudflare account  
- Domain name (winterfestival.vlearmoesplein.nl)
- Git repository with Hugo site

## Step 1: GitHub Repository Setup

### 1.1 Create Repository
```bash
# Create new repository on GitHub
# Repository name: winterfestival-website
# Make it public for GitHub Pages
```

### 1.2 Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Winterfestival Hugo site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/winterfestival-website.git
git push -u origin main
```

### 1.3 Enable GitHub Pages
1. Go to repository Settings
2. Navigate to "Pages" in sidebar
3. Select Source: "GitHub Actions"
4. The workflow will automatically deploy on push to main

## Step 2: GitHub Actions Workflow

The site includes a pre-configured workflow at `.github/workflows/hugo.yml`:

### Features:
- **Hugo Version**: 0.128.0 extended
- **Auto-deploy**: Triggers on push to main/master
- **Manual deploy**: Can be triggered manually
- **Optimized build**: Minified output with garbage collection

### Workflow Overview:
```yaml
# Triggers
on:
  push:
    branches: [main, master]
  workflow_dispatch:

# Build and Deploy
jobs:
  build:    # Install Hugo, build site
  deploy:   # Deploy to GitHub Pages
```

## Step 3: Cloudflare Setup

### 3.1 Add Domain to Cloudflare
1. Login to Cloudflare
2. Click "Add a Site"
3. Enter: `winterfestival.vlearmoesplein.nl`
4. Select plan (Free is sufficient)
5. Update nameservers at domain registrar

### 3.2 DNS Configuration
Create these DNS records in Cloudflare:

```
Type    Name                Value                           Proxy
CNAME   www                 YOUR_USERNAME.github.io        🟠 Proxied
CNAME   @                   YOUR_USERNAME.github.io        🟠 Proxied
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

### 3.3 Page Rules (Optional)
Create page rule for www redirect:
- URL: `www.winterfestival.vlearmoesplein.nl/*`
- Setting: Forwarding URL (301 - Permanent Redirect)
- Destination: `https://winterfestival.vlearmoesplein.nl/$1`

## Step 4: Custom Domain Configuration

### 4.1 Update Hugo Configuration
Update `hugo.toml`:
```toml
baseURL = 'https://winterfestival.vlearmoesplein.nl'
```

### 4.2 GitHub Pages Custom Domain
1. Go to repository Settings → Pages
2. Add custom domain: `winterfestival.vlearmoesplein.nl`
3. Enable "Enforce HTTPS"
4. GitHub will create `CNAME` file in repository

## Step 5: SSL/TLS Configuration

### 5.1 Cloudflare SSL Settings
1. Go to SSL/TLS tab in Cloudflare
2. Set encryption mode to "Full (strict)"
3. Enable "Always Use HTTPS"
4. Enable "Automatic HTTPS Rewrites"

### 5.2 Security Headers
In Cloudflare → Security → Settings:
- Enable "Security Level: Medium"
- Enable "Bot Fight Mode"
- Configure "Browser Integrity Check"

## Step 6: Performance Optimization

### 6.1 Cloudflare Caching
1. Go to Caching tab
2. Set "Caching Level: Standard"
3. Set "Browser Cache TTL: 4 hours"
4. Enable "Auto Minify" for HTML, CSS, JS

### 6.2 Speed Optimizations
- Enable "Brotli" compression
- Enable "HTTP/2" and "HTTP/3"
- Use "Auto Minify" for static assets
- Enable "Mirage" for image optimization

## Step 7: Deployment Commands

### Local Development
```bash
# Start development server
make dev

# Build for production
make build

# Deploy to GitHub (triggers workflow)
make deploy-github
```

### Manual Deployment
```bash
# Build and commit changes
git add .
git commit -m "Update site content"
git push origin main

# GitHub Actions will automatically deploy
```

## Step 8: Monitoring and Maintenance

### 8.1 GitHub Actions Monitoring
- Check workflow status in repository "Actions" tab
- Monitor build logs for errors
- Setup email notifications for failed deployments

### 8.2 Cloudflare Analytics
- Monitor traffic in Cloudflare Analytics
- Check cache hit ratios
- Review security events

### 8.3 Performance Monitoring
- Use Cloudflare Web Analytics
- Monitor Core Web Vitals
- Check PageSpeed Insights regularly

## Troubleshooting

### Common Issues

**Build Fails:**
```bash
# Check Hugo version in workflow
# Verify all markdown files are valid
# Check for missing dependencies
```

**Domain Not Working:**
```bash
# Verify DNS propagation: dig winterfestival.vlearmoesplein.nl
# Check Cloudflare DNS settings
# Verify GitHub Pages custom domain setting
```

**SSL Errors:**
```bash
# Check Cloudflare SSL mode is "Full (strict)"
# Verify GitHub Pages has HTTPS enabled
# Clear browser cache
```

**Images Not Loading:**
```bash
# Check image paths in content files
# Verify images exist in static/images/
# Check for case-sensitive file names
```

### Debug Commands
```bash
# Check DNS
dig winterfestival.vlearmoesplein.nl
nslookup winterfestival.vlearmoesplein.nl

# Test SSL
curl -I https://winterfestival.vlearmoesplein.nl

# Validate Hugo site
hugo --printI18nWarnings --printPathWarnings
```

## Security Best Practices

### Repository Security
- Use branch protection rules
- Require pull request reviews
- Enable dependency scanning
- Use secrets for sensitive data

### Cloudflare Security
- Enable "Under Attack Mode" if needed
- Use "Challenge Passage" for suspicious traffic
- Configure firewall rules
- Enable "Bot Fight Mode"

## Backup Strategy

### Content Backup
- Repository is automatically backed up on GitHub
- Create periodic exports of configuration
- Backup media files separately if large

### Configuration Backup
```bash
# Backup Hugo config
cp hugo.toml hugo.toml.backup.$(date +%Y%m%d)

# Export DNS settings from Cloudflare
# Use Cloudflare API or manual documentation
```

## Performance Metrics

### Target Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.0s

### Optimization Checklist
- [ ] Images optimized and compressed
- [ ] CSS and JS minified
- [ ] Cloudflare caching enabled
- [ ] HTTP/2 and HTTP/3 enabled
- [ ] Gzip/Brotli compression active
- [ ] Critical CSS inlined (if needed)

## Cost Overview

**GitHub Pages**: Free for public repositories
**Cloudflare**: Free plan sufficient for most needs
**Domain**: Annual registration fee only

**Total Monthly Cost**: ~€0 (excluding domain registration)

## Support Resources

- **Hugo Documentation**: https://gohugo.io/documentation/
- **GitHub Pages Docs**: https://pages.github.com/
- **Cloudflare Support**: https://support.cloudflare.com/
- **GitHub Actions**: https://docs.github.com/en/actions

## Maintenance Schedule

### Weekly
- Monitor site performance
- Check for broken links
- Review analytics data

### Monthly  
- Update Hugo version if needed
- Review and optimize images
- Check security settings

### Quarterly
- Full content audit
- Performance optimization review
- Backup verification
- Security assessment

---

**Your Winterfestival website is now deployed with enterprise-grade performance and security!**
