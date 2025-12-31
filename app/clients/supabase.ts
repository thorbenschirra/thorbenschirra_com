import { createClient } from '@supabase/supabase-js';

export async function supabaseClient() {
    return createClient(
        `${process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY}`, 
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}`
    );
}