# 📧 EmailJS Setup - Super Simple!

EmailJS is the easiest way to send emails from your contact form. No backend, no API keys to manage, just a few simple steps.

## 🚀 5-Minute Setup:

### Step 1: Sign up (Free)

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Click "Sign Up" (it's free for 200 emails/month)
3. Verify your email

### Step 2: Connect Your Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your email provider)
4. Click "Connect Account" and authorize
5. Copy the **Service ID** (something like `service_abc123`)

### Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Save and copy the **Template ID** (something like `template_xyz789`)

### Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Copy your **Public Key** (something like `user_abcdefghijk`)

### Step 5: Update Your Code

In `src/components/ContactForm.tsx`, replace these placeholders:

```typescript
await emailjs.send(
  "service_abc123", // Your Service ID
  "template_xyz789", // Your Template ID
  {
    from_name: data.name,
    from_email: data.email,
    message: data.message,
    to_email: "your-email@gmail.com", // Your actual email
  },
  "user_abcdefghijk" // Your Public Key
);
```

## ✅ That's It!

- No environment variables
- No API keys to hide
- No backend setup
- Works entirely from the browser
- Free for 200 emails/month (perfect for contact forms)

Your contact form will now send emails directly to your inbox! 🎉

## 🔒 Security Note:

EmailJS is safe because:

- Your email credentials stay with EmailJS
- No sensitive data in your code
- Rate limiting built-in
- Only works from your domain (in production)

## 📊 Benefits:

- ✅ No server required
- ✅ No API keys to manage
- ✅ Works on static sites
- ✅ Real-time email delivery
- ✅ Free tier is generous
- ✅ Setup takes 5 minutes
