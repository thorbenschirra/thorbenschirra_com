import Header from "@/app/components/Header";
import { getPost } from "@/app/create_blogpost/functions/blogpost";
import { Blogpost } from "@/app/types/blogpost";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await getPost(slug);

  if (response.status !== 200 || typeof response.body === "string") {
    return (
      <div>
        <Header />
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Post could not be found!</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const blogpost: Blogpost = response.body;
  return (
    <div className="">
      <Header />
      <div className="flex flex-col w-1/2 mx-48 space-y-6">
        <Link
          href="/blog"
          className="justify-start btn btn-md bg-white shadow-none text-black border-none space-x-4"
        >
          <p>Back to the blog</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </Link>
        <div className="">
          <h2 className="text-4xl font-semibold border-b border-gray-200 p-2">
            {blogpost.header}
          </h2>
          <div className="flex flex-row space-x-2">
            {blogpost.keywords.map((keyword: string, index: number) => (
              <div key={index} className="text-sm p-2 border border-gray-200">
                {keyword}
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-2xl border-b border-gray-200">
              Description / Intro
            </h3>
            <p style={{ whiteSpace: "pre-line" }} className="playfair">
              {blogpost.description}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-2xl border-b border-gray-200">
              Content
            </h3>
            <p style={{ whiteSpace: "pre-line" }} className="playfair prose">
              {blogpost.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
