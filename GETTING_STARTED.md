# 🚀 Getting Started - Installation Guide

## ⚠️ If You're Getting Installation Errors

If you see errors during `npm install`, follow these steps:

### Step 1: Close All Applications

Close any applications that might be accessing the project folder:

- VS Code
- File Explorer windows
- Terminal/PowerShell windows
- Any antivirus software temporarily

### Step 2: Clean Installation

Open a **NEW** PowerShell or Command Prompt window and run:

```powershell
# Navigate to project
cd "d:\Hotel Management"

# Remove node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue

# Wait a moment, then install
npm install
```

### Step 3: Alternative - Use Yarn

If npm continues to have issues, try using Yarn instead:

```powershell
# Install Yarn globally (if not installed)
npm install -g yarn

# Install dependencies with Yarn
yarn install
```

### Step 4: Run with Yarn

```powershell
# Start development server
yarn dev

# Build for production
yarn build
```

## ✅ Quick Start (After Successful Installation)

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The website will open at: **http://localhost:3000**

### 3. Make Changes

- Update hotel name in `src/components/Header.jsx`
- Update contact info in `src/pages/Contact.jsx`
- Replace images with your own
- Customize colors in `src/index.css`

### 4. Build for Production

```bash
npm run build
```

### 5. Test Production Build

```bash
npm run preview
```

## 📂 Project Structure Overview

```
d:\Hotel Management\
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Main pages (Home, Rooms, etc.)
│   ├── App.jsx        # Main app
│   └── main.jsx       # Entry point
├── public/            # Static files
├── index.html         # HTML template
└── package.json       # Dependencies
```

## 🎨 Quick Customization

### Change Colors

Edit `src/index.css`:

```css
:root {
  --primary-color: #2c3e50; /* Dark blue-grey */
  --secondary-color: #e74c3c; /* Red accent */
  --accent-color: #f39c12; /* Orange/gold */
}
```

### Update Hotel Name

Find and replace "Grand Hotel" in:

- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `index.html`
- `README.md`

### Update Contact Information

Edit `src/pages/Contact.jsx` and `src/components/Footer.jsx`

## 🌐 Deploy Online

See `DEPLOYMENT.md` for detailed deployment instructions to:

- Vercel (Recommended)
- Netlify
- GitHub Pages

## 🆘 Need Help?

### Common Issues

**Issue**: Port 3000 is already in use
**Solution**: Either stop the other application or change the port in `vite.config.js`

**Issue**: Images not loading
**Solution**: Check your internet connection (using Unsplash URLs) or replace with local images

**Issue**: Build errors
**Solution**: Make sure all dependencies are installed: `npm install`

### Contact

If you need assistance:

- Check README.md for detailed documentation
- Review DEPLOYMENT.md for hosting instructions
- Ensure Node.js version 14+ is installed: `node --version`

## 📋 Checklist Before Going Live

- [ ] Replace "Grand Hotel" with your hotel name
- [ ] Update all contact information
- [ ] Replace placeholder images
- [ ] Test all pages and forms
- [ ] Test on mobile devices
- [ ] Update meta tags in `index.html`
- [ ] Test booking form
- [ ] Verify all links work
- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`

---

**You're all set! Start customizing your hotel website! 🎉**
