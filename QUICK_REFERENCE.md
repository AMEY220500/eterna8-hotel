# 🎯 Quick Reference Guide

## 📱 Commands Cheat Sheet

### Development

```bash
# Install dependencies (first time only)
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Using Yarn (Alternative)

```bash
yarn install
yarn dev
yarn build
yarn preview
```

## 🎨 Key Files to Customize

### 1. Hotel Name & Branding

```
src/components/Header.jsx    → Line 17 (logo text)
src/components/Footer.jsx    → Line 14 (footer branding)
index.html                   → Line 9 (page title)
```

### 2. Contact Information

```
src/pages/Contact.jsx        → Lines 40-80 (all contact info)
src/components/Footer.jsx    → Lines 50-70 (footer contacts)
src/components/Header.jsx    → Line 48 (call button)
```

### 3. Colors & Theme

```
src/index.css                → Lines 8-14 (CSS variables)
```

```css
--primary-color: #2c3e50; /* Main brand color */
--secondary-color: #e74c3c; /* Buttons & accents */
--accent-color: #f39c12; /* Highlights */
```

### 4. Room Information

```
src/pages/Rooms.jsx          → Lines 8-60 (allRooms array)
src/pages/Home.jsx           → Lines 10-35 (featuredRooms)
```

### 5. Images

```
Replace all Unsplash URLs:
https://images.unsplash.com/photo-...

With your own images:
/images/your-image.jpg
or
https://your-domain.com/images/your-image.jpg
```

## 📄 Page URLs (After Deployment)

```
https://your-domain.com/           → Home Page
https://your-domain.com/rooms      → Rooms Catalog
https://your-domain.com/amenities  → Amenities
https://your-domain.com/about      → About Us
https://your-domain.com/contact    → Contact Form
```

## 🚀 Deployment Quick Steps

### Vercel (Easiest)

```bash
1. Push code to GitHub
2. Go to vercel.com
3. Import repository
4. Click Deploy
✅ Done!
```

### Netlify

```bash
1. Push code to GitHub
2. Go to netlify.com
3. New site from Git
4. Select repo
5. Deploy
✅ Done!
```

## 🔧 Common Customizations

### Change Logo

```javascript
// src/components/Header.jsx (Line 17)
<h1>Your Hotel Name</h1>

// Or use an image:
<img src="/logo.png" alt="Hotel Logo" />
```

### Add More Rooms

```javascript
// src/pages/Rooms.jsx
const allRooms = [
  // ... existing rooms
  {
    id: 7,
    name: "Your New Room",
    description: "Room description",
    image: "/images/room.jpg",
    price: 180,
    beds: "1 King Bed",
    guests: 2,
    category: "deluxe",
  },
];
```

### Update Amenities

```javascript
// src/pages/Amenities.jsx (Line 10+)
const amenitiesData = [
  {
    category: "Your Category",
    items: [
      {
        icon: <FaYourIcon />,
        title: "Amenity Name",
        description: "Description",
      },
    ],
  },
];
```

### Change Form Fields

```javascript
// src/components/ContactForm.jsx
// Add new field in formData (Line 8)
// Add input in render (Line 120+)
```

## 🎨 Color Schemes (Examples)

### Elegant Blue & Gold

```css
--primary-color: #1a3a52;
--secondary-color: #d4af37;
--accent-color: #f4e4c1;
```

### Modern Green & White

```css
--primary-color: #2d5f3f;
--secondary-color: #6ab187;
--accent-color: #ffd700;
```

### Luxury Purple & Silver

```css
--primary-color: #4a3764;
--secondary-color: #9b7bb8;
--accent-color: #c0c0c0;
```

### Classic Brown & Cream

```css
--primary-color: #5d4e37;
--secondary-color: #8b7355;
--accent-color: #f5deb3;
```

## 📊 Performance Tips

### Optimize Images

```bash
# Use WebP format for smaller file sizes
# Recommended dimensions:
- Hero images: 1920x1080px
- Room images: 800x600px
- Team photos: 400x400px
- Icons: 100x100px
```

### Lazy Loading

```javascript
// Add to image tags:
<img src="..." alt="..." loading="lazy" />
```

## 🐛 Quick Fixes

### Port Already in Use

```javascript
// vite.config.js
export default defineConfig({
  server: {
    port: 3001, // Change to any free port
  },
});
```

### Form Not Submitting

```javascript
// src/components/ContactForm.jsx
// Add your email service API in handleSubmit (Line 60)
```

### Images Not Loading

```
1. Check internet connection (if using Unsplash)
2. Verify image URLs are correct
3. Use local images in /public folder
```

## 📱 Testing Checklist

Before deploying:

- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile devices
- [ ] Fill out and submit contact form
- [ ] Click all navigation links
- [ ] Filter rooms by category
- [ ] Sort rooms by price
- [ ] Check phone numbers dial correctly
- [ ] Verify email links open email client
- [ ] Test on different screen sizes
- [ ] Check all images load
- [ ] Verify no console errors

## 🆘 Getting Help

### Files to Check First

1. `README.md` - Complete documentation
2. `GETTING_STARTED.md` - Installation help
3. `DEPLOYMENT.md` - Deployment guide
4. `PROJECT_SUMMARY.md` - Project overview

### Common Error Messages

```
"Port 3000 already in use"
→ Change port in vite.config.js

"Module not found"
→ Run: npm install

"esbuild error"
→ Delete node_modules and run: npm install

"Cannot find module"
→ Check import paths
```

## 💡 Pro Tips

1. **Use Git**: Commit changes frequently
2. **Test Mobile**: Use browser dev tools
3. **Backup**: Keep original files
4. **Comments**: Add notes for future you
5. **Images**: Compress before uploading
6. **SEO**: Update meta tags in index.html
7. **Analytics**: Add Google Analytics later
8. **SSL**: Free with Vercel/Netlify
9. **Domain**: Connect custom domain in hosting settings
10. **Updates**: Keep dependencies updated

---

## 📞 Quick Contact Setup

Replace these placeholders everywhere:

| Placeholder         | Your Info         |
| ------------------- | ----------------- |
| +1234567890         | Your phone number |
| info@grandhotel.com | Your email        |
| 123 Hotel Street    | Your address      |
| Grand Hotel         | Your hotel name   |

**Files to update:**

- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

---

**Keep this file handy for quick reference!** 🚀
