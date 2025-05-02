
import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client with the correct credentials
const supabaseUrl = 'https://qpookkgjqwhromusnsur.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwb29ra2dqcXdocm9tdXNuc3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxMTIwNDksImV4cCI6MjA2MTY4ODA0OX0.SBrftkk59PcAS8MHfiIdse7HELLPYAJqFWt47oTk-nM';

// Initialize the Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
