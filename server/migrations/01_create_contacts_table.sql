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

-- Enable RLS (Row Level Security) if desired
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow unauthenticated inserts (for contact form submissions)
CREATE POLICY "Enable insert for unauthenticated users" ON contacts
  FOR INSERT WITH CHECK (true);

-- Allow authenticated users to read all contacts
CREATE POLICY "Enable read for authenticated users" ON contacts
  FOR SELECT USING (auth.role() = 'authenticated');

-- Optional: Create a view for authenticated users to see contact stats
CREATE OR REPLACE VIEW contact_stats AS
SELECT 
  COUNT(*) as total_contacts,
  COUNT(DISTINCT email) as unique_emails,
  MAX(created_at) as latest_contact
FROM contacts;
