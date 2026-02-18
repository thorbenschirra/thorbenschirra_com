"use server"

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

function getEnvVariables() {
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

        return { supabaseUrl, supabaseAnonKey }
}

export async function createSupabaseServerClient() {
    const cookieStore = await cookies();
    const { supabaseUrl, supabaseAnonKey } = getEnvVariables();

    return createServerClient(supabaseUrl, supabaseAnonKey, {
        cookies: {
            getAll() {
                return cookieStore.getAll();
            },
            setAll(cookiesToSet) {
                try {
                    cookiesToSet.forEach(({name, value, options}) => 
                        cookieStore.set(name, value, options)
                    );
                } catch (error) {
                    console.log(error);
                }
            }
        }
    })
}