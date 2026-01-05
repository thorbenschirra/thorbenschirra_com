import Header from "../components/Header";
import BlogpostForm from "./components/BlogPostForm";
import Link from "next/link";
import { createSupabaseServerClient } from "../lib/supabase/server-client";

export default async function create_blogpost() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.aud !== "authenticated") {
    return (
      <div>
        <Header />
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Unauthorized</h1>
              <p className="py-6">
                You are not authorized to view this page. <br />
                Please login if you have an account.
              </p>
              <Link href="/login" className="btn">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div className="flex flex-col m-20 space-y-8">
        <h1 className="text-4xl font-semibold">Create a new blogpost</h1>
        <BlogpostForm />
      </div>
    </div>
  );
}
