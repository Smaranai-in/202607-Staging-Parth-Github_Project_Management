import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rxpskobrqhcczohijysp.supabase.co";

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4cHNrb2JycWhjY3pvaGlqeXNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI4NzI3NzksImV4cCI6MjA5ODQ0ODc3OX0.u4SocAHQiOBuYpk5CNZaab7kMEexOVrvf2uEu_MIGxs";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
