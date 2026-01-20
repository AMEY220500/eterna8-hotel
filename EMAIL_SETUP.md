# Email Setup Instructions for Contact Form

Your contact form is now configured to send emails to **ameyv.chavan22@gmail.com** when customers submit inquiries.

## Step-by-Step Setup:

### 1. Sign up for EmailJS (Free)

- Go to https://www.emailjs.com/
- Click "Sign Up" and create a free account
- Verify your email address

### 2. Add Email Service

- Go to "Email Services" in the dashboard
- Click "Add New Service"
- Select "Gmail"
- Click "Connect Account" and sign in with **ameyv.chavan22@gmail.com**
- Note down your **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

- Go to "Email Templates"
- Click "Create New Template"
- Use this template content:

```
Subject: New Booking Inquiry from {{from_name}}

You have received a new booking inquiry:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Booking Details:
- Check-in: {{check_in}}
- Check-out: {{check_out}}
- Guests: {{guests}}
- Room Type: {{room_type}}

Special Requests:
{{message}}

---
This inquiry was sent via ETERNA 8 Hotel website contact form.
```

- Save the template
- Note down your **Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key

- Go to "Account" → "General"
- Find your **Public Key** (e.g., `abcdefghijk123`)

### 5. Update Your Code

Open `src/simple-app.jsx` and find these lines (around line 381):

```javascript
const serviceID = "YOUR_SERVICE_ID";
const templateID = "YOUR_TEMPLATE_ID";
const publicKey = "YOUR_PUBLIC_KEY";
```

Replace them with your actual values:

```javascript
const serviceID = "service_abc123"; // Your Service ID
const templateID = "template_xyz789"; // Your Template ID
const publicKey = "abcdefghijk123"; // Your Public Key
```

### 6. Test the Form

1. Save the file
2. Push changes to GitHub:
   ```bash
   git add -A
   git commit -m "Add EmailJS integration for contact form"
   git push
   ```
3. Wait for Netlify to deploy (~1-2 minutes)
4. Go to your website and test the contact form
5. Check `ameyv.chavan22@gmail.com` for the email!

## Free Tier Limits:

- 200 emails per month
- Perfect for a hotel website!

## Troubleshooting:

- **No email received?** Check spam folder
- **Error on submit?** Check browser console (F12) for error messages
- **Credentials wrong?** Double-check Service ID, Template ID, and Public Key

---

Need help? Let me know!
