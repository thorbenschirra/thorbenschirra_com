"use server"

import { createClient } from '@supabase/supabase-js';
import { createBrowserClient } from '@supabase/ssr';

export async function supabaseClient() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabasePubKey = process.env.SUPABASE_PUBLISHABLE_KEY;

    if (
        !supabaseUrl || 
        !supabasePubKey || 
        supabasePubKey === undefined || 
        supabaseUrl === undefined
    ) {
        throw new Error("supabase credentials are missing");
    }

    return createClient(
        supabaseUrl,
        supabasePubKey
    )
}

export async function supabaseBrowserClient() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabasePubKey = process.env.SUPABASE_PUBLISHABLE_KEY;

    if (
        !supabaseUrl || 
        !supabasePubKey || 
        supabasePubKey === undefined || 
        supabaseUrl === undefined
    ) {
        throw new Error("supabase credentials are missing");
    }

    return createBrowserClient(
        supabaseUrl,
        supabasePubKey
    )
}