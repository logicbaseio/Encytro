# EmailJS Setup Instructions

The contact form uses EmailJS to send emails to `sales@encytro.com`. Follow these steps to configure it:

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID**

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} <{{from_email}}>
Company: {{company}}
Phone: {{phone}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Set the **To Email** field to: `sales@encytro.com`
5. Copy your **Template ID**

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key**

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root directory (if it doesn't exist)
2. Add the following variables:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual credentials

## Step 6: Restart Development Server

After adding the environment variables, restart your dev server:

```bash
npm run dev
```

## Alternative: Direct Configuration

If you prefer not to use environment variables, you can directly edit `src/components/ContactFormSection.jsx` and replace the placeholder values:

```javascript
const serviceId = 'your_service_id_here';
const templateId = 'your_template_id_here';
const publicKey = 'your_public_key_here';
```

## Testing

1. Fill out the contact form
2. Submit it
3. Check `sales@encytro.com` inbox for the email

## Troubleshooting

- Make sure all three credentials are correctly set
- Verify your EmailJS template has the correct variable names
- Check browser console for any error messages
- Ensure your email service is properly connected in EmailJS dashboard
