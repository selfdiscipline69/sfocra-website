import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase URL and anon key
// In a production environment, these should be stored in environment variables
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase; 