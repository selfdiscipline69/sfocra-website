# Supabase Authentication Setup

This project uses Supabase for authentication. Follow these steps to set up Supabase authentication for this application:

## 1. Set up Supabase project

1. Create a Supabase account at [https://supabase.com](https://supabase.com) and create a new project
2. Navigate to Authentication > Settings in your Supabase dashboard
3. Configure the authentication providers you want to use (Email, OAuth, etc.)

## 2. Configure Site URL and Redirect URLs

1. In the Supabase dashboard, go to Authentication > URL Configuration
2. Set Site URL to your production URL (e.g., `https://yourdomain.com`) or localhost for development (e.g., `http://localhost:3000`)
3. Add Redirect URLs:
   - For email confirmations: `https://yourdomain.com/auth/callback` (or `http://localhost:3000/auth/callback` for local development)

## 3. Configure Environment Variables

Create a `.env` file in the project root with the following variables:

```
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace `your_supabase_url` and `your_supabase_anon_key` with the actual values from your Supabase project settings.

## 4. Test Authentication Flow

1. Make sure the application is running
2. Go to your sign-up page and register with an email
3. Check your email for the confirmation link
4. Click the link and you should be redirected to the `/auth/callback` page
5. The page will handle the email confirmation process and redirect to the home page upon success

## Troubleshooting

- Make sure your Site URL and Redirect URLs are correctly configured in Supabase
- Check browser console for any errors
- Verify that environment variables are correctly set and accessible
- Ensure that the callback route is properly defined in your application 