# Contact Form Setup Guide

## Overview

This document provides all the necessary SQL queries and setup instructions for the contact form feature that saves submissions to Supabase.

## Step 1: Create the Contacts Table in Supabase

Run the following SQL in your Supabase SQL Editor (https://app.supabase.com):

### SQL Schema

```sql
-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster queries
CREATE INDEX IF NOT EXISTS contacts_email_idx ON contacts(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS contacts_created_at_idx ON contacts(created_at DESC);

-- Enable RLS (Row Level Security)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow unauthenticated inserts (for contact form submissions)
CREATE POLICY "Enable insert for unauthenticated users" ON contacts
  FOR INSERT WITH CHECK (true);

-- Allow authenticated users to read all contacts
CREATE POLICY "Enable read for authenticated users" ON contacts
  FOR SELECT USING (auth.role() = 'authenticated');
```

### Create a View for Contact Statistics

```sql
CREATE OR REPLACE VIEW contact_stats AS
SELECT
  COUNT(*) as total_contacts,
  COUNT(DISTINCT email) as unique_emails,
  MAX(created_at) as latest_contact
FROM contacts;
```

## Step 2: Environment Variables

Add the following to `.env`:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

**Where to find these:**

1. Go to https://app.supabase.com
2. Select your project
3. Go to Settings → API
4. Copy the Project URL and anon/public key

## Step 3: API Endpoints

### Submit Contact Form

**Endpoint:** `POST /api/contact`

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'm interested in your services..."
}
```

**Response (Success):**

```json
{
  "success": true,
  "message": "Thank you! We've received your message and will get back to you shortly."
}
```

**Response (Error):**

```json
{
  "success": false,
  "error": "Validation failed",
  "details": [...]
}
```

## Step 4: Query the Submissions in Supabase

### Get All Contacts

```sql
SELECT * FROM contacts ORDER BY created_at DESC;
```

### Get Contacts from Last 7 Days

```sql
SELECT * FROM contacts
WHERE created_at >= NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;
```

### Get Contact Statistics

```sql
SELECT * FROM contact_stats;
```

### Get Contacts by Email

```sql
SELECT * FROM contacts WHERE email = 'example@email.com';
```

### Count Submissions by Day

```sql
SELECT
  DATE(created_at) as submission_date,
  COUNT(*) as count
FROM contacts
GROUP BY DATE(created_at)
ORDER BY submission_date DESC;
```

### Get Contacts Containing Specific Keyword

```sql
SELECT * FROM contacts
WHERE message ILIKE '%keyword%'
OR subject ILIKE '%keyword%'
ORDER BY created_at DESC;
```

## Step 5: Frontend Implementation

The contact form is already integrated in `client/pages/Index.tsx`:

```typescript
const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    }),
  });

  if (response.ok) {
    toast.success("Thank you! We'll get back to you shortly.");
    e.currentTarget.reset();
  }
};
```

## Step 6: Useful RLS Policies

### If you want to add more security, you can add these policies:

```sql
-- Allow only admins to delete contacts
CREATE POLICY "Enable delete for admin users" ON contacts
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE id = auth.uid()
      AND email LIKE '%@admin.com'
    )
  );

-- Limit rate limiting per email (optional)
-- This would require a stored procedure for implementation
```

## Complete Data Structure

```
Table: contacts
├── id (BIGINT) - Primary key, auto-incremented
├── name (VARCHAR 255) - Contact name
├── email (VARCHAR 255) - Contact email
├── subject (VARCHAR 255) - Message subject
├── message (TEXT) - Full message content
├── created_at (TIMESTAMP) - Creation timestamp
└─��� updated_at (TIMESTAMP) - Last update timestamp

Indexes:
├── contacts_email_idx - For searching by email
└── contacts_created_at_idx - For sorting by date

Policies:
├── INSERT: Allowed for unauthenticated users
└── SELECT: Allowed for authenticated users
```

## Testing the Contact Form

1. Go to the contact section on the website
2. Fill out the form with:
   - Name: John Doe
   - Email: john@example.com
   - Subject: Test Submission
   - Message: This is a test message
3. Click "Send Message"
4. You should see a success toast notification
5. Check your Supabase database to confirm the submission was saved

## Troubleshooting

### "Failed to save contact submission"

- Check that the `contacts` table exists in Supabase
- Verify RLS policies are correctly set
- Check browser console for detailed error messages

### "Validation failed"

- Ensure all required fields are filled
- Message must be at least 10 characters
- Email must be a valid format

### Environment Variables Not Found

- Make sure `.env` file exists in project root
- Restart the dev server after adding variables
- Use `DevServerControl` tool to set sensitive variables

## Production Deployment

For production, it's recommended to:

1. Use environment secrets for sensitive keys (never commit to git)
2. Add email notifications when new contacts arrive
3. Implement rate limiting on the `/api/contact` endpoint
4. Add CAPTCHA for additional spam protection
5. Set up automated email responses
