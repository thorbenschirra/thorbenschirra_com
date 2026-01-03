"use server"

import { StoreBlogpost } from "@/app/types/blogpost";
import { createSupabaseServerClient } from "@/app/lib/supabase/server-client";

export async function getPosts() {
    const supabase = await createSupabaseServerClient();
    try {
        const {data, error} = await supabase.from("posts").select();
        if (error) {
            return {
                body: `An error occurred: ${error.message}`,
                status: error.code
            }
        }
        
        console.log("blogposts", data);

        return {
            body: data,
            status: 200
        }
    } catch (error) {
        return {
            body: `An error occurred: ${error}`,
            status: 500
        }
    }
}

export async function getPost(id: string) {
    const supabase = await createSupabaseServerClient();
    try {
        const {data, error} = await supabase
            .from("posts")
            .select()
            .eq("id", id)
            .single();

        if (error) {
            return {
                body: `An error occurred: ${error.message}`,
                status: error.code
            }
        }

        return {
            body: data,
            status: 200
        }
    } catch (error) {
        return {
            body: `An error occurred retrieving the post: ${error}`,
            status: 500
        }
    }
}

export async function storePost(blogpost: StoreBlogpost) {
    const supabase = await createSupabaseServerClient();

    try {
        const response = await supabase
            .from("posts")
            .insert({
                header: blogpost.header,
                description: blogpost.description,
                content: blogpost.content,
                keywords: blogpost.keywords
            })
            .select();

        console.log("storePost response:", response);

        if (response.error) {
            return {
                body: `An error occurred ${response.error.message}`,
                status: response.error.code
            }
        }
    
        return {
            body: response.statusText,
            status: 200
        }

    } catch (error) {
        console.log(error);
        return {
            body: `An error occured: ${error}!`,
            status: 500
        };
}
}

export async function updatePost() {

}

export async function deletePost() {

}