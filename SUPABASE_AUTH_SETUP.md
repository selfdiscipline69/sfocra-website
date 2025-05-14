# Setting Up Supabase Auth for Email Verification

This guide explains how to configure Supabase Auth to handle email verification for your waitlist signups.

## Overview

The website now uses Supabase's built-in authentication system to:
1. Store email addresses in the `waitlist_signups` table
2. Send a verification email (magic link) using Supabase Auth
3. Verify the user when they click the email link
4. Redirect to a thank you page

## Configuration Steps

### 1. Set Up Supabase Email Templates

1. Go to your [Supabase Dashboard](https://app.supabase.com/)
2. Select your project (with ID: `agftinyffdhfdjawmgaz`)
3. Navigate to **Authentication** → **Email Templates**
4. Customize the **Magic Link** template:
   - Update the subject line (e.g., "Verify your SFOCRA Waitlist Signup")
   - Customize the email content to mention joining the waitlist
   - Make sure the design matches your brand

### 2. Configure Site URL and Redirect URLs

1. Go to **Authentication** → **URL Configuration**
2. Set the **Site URL** to your production domain (e.g., `https://sfocra.com`)
3. Add the following **Redirect URLs**:
   - `https://sfocra.com/thankyou`
   - `http://localhost:3000/thankyou` (for local development)

### 3. Email Provider Configuration

1. Go to **Authentication** → **Email**
2. Configure your email provider:
   - For production, consider using a service like SendGrid, Mailgun, or Postmark
   - For testing, you can use Supabase's default email provider (limited to 10 emails/hour)

### 4. Testing the Setup

1. Run your application locally (`npm start`)
2. Go to the homepage and submit an email to the waitlist
3. Check your email for the verification link
4. Click the link and verify you're redirected to the thank you page

## How It Works

1. **User Submits Email**: When a user submits their email on the homepage waitlist form
2. **Database Entry**: The email is saved to the `waitlist_signups` table
3. **Auth Magic Link**: Supabase Auth sends a magic link email to the user
4. **Verification**: When the user clicks the link, Supabase verifies them
5. **Redirect**: The user is redirected to `/thankyou`
6. **Session Capture**: The thank you page captures the auth tokens and confirms the verification

## Monitoring and Troubleshooting

1. **Auth Logs**: Check **Authentication** → **Users** to see verified users
2. **Email Deliverability**: If emails aren't being received, check:
   - Spam folders
   - Email delivery limits
   - Email provider configuration

## Customizing Further

1. **Verified Status**: You could add a `verified` column to your `waitlist_signups` table and update it when users verify
2. **Additional Data**: Collect additional data after verification on the thank you page
3. **Rewards**: Offer special rewards or early access to verified waitlist members

## Security Notes

- Supabase Auth is handling email sending securely
- No SMTP credentials are exposed in your frontend code
- The authentication flow follows industry standards 