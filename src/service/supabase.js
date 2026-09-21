import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

const supabaseURL = process.env.SUPABASE_PUBLIC_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseURL, supabaseKey);