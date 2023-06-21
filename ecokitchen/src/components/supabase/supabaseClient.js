// We import createClient from supabase to connect to our database
import { createClient } from "@supabase/supabase-js";

// We create a new client with our supabaseUrl and supabaseKey
// Using the env file to store our keys securely
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_ANON_KEY;

// We export the client to use it in other files

export const supabase = createClient(supabaseUrl, supabaseKey);
