# 🏨 Quick Deployment Guide

## Deploy to Vercel (Easiest & Free)

### Option 1: Using Vercel Website (Recommended)

1. **Push your code to GitHub**:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect settings
   - Click "Deploy"
   - Done! Your site will be live at `https://your-project.vercel.app`

### Option 2: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy (run from project directory)
vercel

# Follow the prompts
# Your site will be deployed!
```

## Deploy to Netlify (Also Free & Easy)

### Using Netlify Website

1. **Push code to GitHub** (same as above)

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repo
   - Settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"
   - Live at `https://your-site.netlify.app`

### Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod

# Follow the prompts
```

## Before Deployment Checklist

✅ Update hotel information:

- [ ] Change "Grand Hotel" to your hotel name
- [ ] Update phone numbers in Contact page
- [ ] Update email addresses
- [ ] Update hotel address
- [ ] Replace placeholder images with your photos

✅ Test locally:

```bash
npm install
npm run dev
# Check http://localhost:3000
```

✅ Build and preview:

```bash
npm run build
npm run preview
```

## Custom Domain (Optional)

### On Vercel:

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS settings at your domain registrar

### On Netlify:

1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS

## Environment Variables (If Needed)

If you add any API keys or secrets:

**Vercel**: Project Settings → Environment Variables
**Netlify**: Site settings → Build & deploy → Environment

---

**Need Help?** Check the full README.md for detailed instructions!
