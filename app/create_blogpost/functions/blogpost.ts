"use server"

import cookies from "next/headers";
import { Blogpost, StoreBlogpost } from "@/app/types/blogpost";
import { supabaseClient } from "@/app/clients/supabase";

const supabase = await supabaseClient();

export async function getPosts() {
    try {

        const {data, error} = await supabase.from("posts").select();
        if (error) {
            return {
                body: `An error occurred: ${error.message}`,
                status: error.code
            }
        }
        const posts = JSON.stringify(data);

        return {
            body: posts,
            status: 200
        }
    } catch (error) {
        return {
            body: `An error occurred: ${error}`,
            status: 500
        }
    }
}

export async function getPost(id: Blogpost) {
    try {
        const response = await fetch(`${process.env.SUPABASE_API_URL}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${process.env.SUPABASE_ACCESS_TOKEN}`
            },
            body: JSON.stringify(id)
        })

        if (!response.ok) {
            return {
                body: "An error occured!",
                status: 500
            }
        }

        const blogpost = response.body;

        return {
            body: blogpost,
            status: 200
        }
    } catch (error) {
        console.log(error)
        return {
            body: `An error occurred: ${error}`,
            status: 500
        }
    }
}

export async function storePost(blogpost: StoreBlogpost) {
    try {
        const response = await supabase.from("posts").insert({
            header: blogpost.header,
            description: blogpost.description,
            content: blogpost.content,
            keywords: blogpost.keywords
        })

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