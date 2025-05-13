import { createClient } from '@supabase/supabase-js'

// Initialize the Supabase client
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

// Debug information
console.log('Supabase URL from env:', supabaseUrl);

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase credentials missing. Set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY in your .env file.')
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase 