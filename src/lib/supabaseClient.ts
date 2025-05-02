
import { createClient } from '@supabase/supabase-js';

// These would typically be environment variables
// For this example, they're directly included
// In a real app, use .env files or other secure methods
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseAnonKey = 'your-anon-key';

// Initialize the Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
