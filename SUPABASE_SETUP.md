# Supabase Setup for SFOCRA Website

This guide will help you set up the Supabase backend for the SFOCRA website's email collection features.

## 1. Create a Supabase Account

1. Go to [Supabase](https://supabase.com/) and sign up for an account
2. Create a new project

## 2. Configure Environment Variables

1. Copy your Supabase project URL and anon key from the API settings page
2. Create a `.env` file in the root of the project with the following variables:
   ```
   REACT_APP_SUPABASE_URL=your_supabase_url_here
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

## 3. Create Database Tables

Run the following SQL in the Supabase SQL Editor:

```sql
-- Table for waitlist signups from the hero section
CREATE TABLE waitlist_signups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source TEXT, -- to track where the signup came from
  CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Table for contact form submissions
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name TEXT,
  last_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  inquiry_type TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  subscribed_to_newsletter BOOLEAN DEFAULT TRUE,
  CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Create appropriate policies to control access
-- For contact submissions (insert only, no select/update/delete from client)
CREATE POLICY "Allow anonymous contact submissions" 
  ON contact_submissions 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- For waitlist signups (insert only, no select/update/delete from client)
CREATE POLICY "Allow anonymous waitlist signups" 
  ON waitlist_signups 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);
```

## 4. Email Export (Optional)

To export the emails for marketing:

1. Go to the Supabase Table Editor
2. Select the relevant table
3. Click "Export" and choose CSV format
4. Import the CSV into your preferred email marketing tool

## 5. Setting Up Email Notifications (Optional)

You can set up email notifications using Supabase Edge Functions:

1. Install Supabase CLI
2. Create a new Edge Function that sends email notifications when new entries are created
3. Deploy the function with `supabase functions deploy`
4. Set up a database trigger to call the function when a new record is inserted

For more information, see the [Supabase documentation](https://supabase.com/docs). 