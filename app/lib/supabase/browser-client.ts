"use client"

import { createBrowserClient } from "@supabase/ssr";
import type {SupabaseClient} from "@supabase/supabase-js";

type SupabaseSchema = Record<string, never>;

let client: SupabaseClient<SupabaseSchema> | null = null;

export async function getSupabaseBrowserClient() {
    if (client) {
        return client;
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (
        !supabaseUrl || 
        !supabaseAnonKey || 
        supabaseAnonKey === undefined || 
        supabaseUrl === undefined
    ) {
        throw new Error("supabase credentials are missing");
    }

    client = createBrowserClient<SupabaseSchema>(supabaseUrl, supabaseAnonKey);
    return client;
}