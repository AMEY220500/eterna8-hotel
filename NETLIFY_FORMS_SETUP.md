# Netlify Forms Setup - Contact Form Notifications

Your contact form is now using **Netlify Forms** (built-in, no signup needed!) to capture submissions.

## ✅ What's Already Done:

- ✅ Form configured with `data-netlify="true"`
- ✅ Spam protection enabled with honeypot
- ✅ Form submissions will appear in your Netlify dashboard

## 📧 Enable Email Notifications (Optional):

### Step 1: Push Code to GitHub

```bash
cd "d:\Hotel Management"
git add -A
git commit -m "Switch to Netlify Forms for contact submissions"
git push
```

### Step 2: Configure Email Notifications in Netlify

1. Go to https://app.netlify.com
2. Select your site (eterna8)
3. Go to **Site settings** → **Forms**
4. Click **Form notifications**
5. Click **Add notification** → **Email notification**
6. Enter your email: **ameyv.chavan22@gmail.com**
7. Click **Save**

### Step 3: Test the Form

1. Wait for Netlify to deploy (~1-2 minutes)
2. Visit https://eterna8.netlify.app
3. Go to Contact page and submit a test inquiry
4. Check your email for the notification!

## 📊 View Submissions:

All form submissions are stored in Netlify:

1. Go to https://app.netlify.com
2. Select your site (eterna8)
3. Click **Forms** in the left sidebar
4. View all submissions with full details

## 🎯 Benefits of Netlify Forms:

✅ **No API keys needed** - Works automatically  
✅ **Built-in spam protection** - Honeypot field included  
✅ **Free tier:** 100 submissions/month  
✅ **Secure storage** - All submissions saved in dashboard  
✅ **Email notifications** - Get instant alerts  
✅ **Export data** - Download as CSV anytime

## 🔄 Upgrade if Needed:

- **Free plan:** 100 submissions/month
- **Pro plan ($19/mo):** 1,000 submissions/month
- Perfect for small to medium hotel websites!

## 📝 Form Data Captured:

Each submission includes:

- Name
- Email
- Phone
- Check-in date
- Check-out date
- Number of guests
- Room type preference
- Special requests/message

---

**That's it!** No complicated setup, no API keys, just push and it works! 🎉
