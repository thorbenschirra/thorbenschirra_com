import Header from "@/app/components/Header";
import { getPost } from "@/app/create_blogpost/functions/blogpost";
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

  const blogpost = response.body;

  return (
    <div className="">
      <Header />
      <div className="m-20 space-y-4">
        <Link
          href="/blog"
          className="btn btn-xs bg-white shadow-none text-black border-none space-x-4"
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
        <h2 className="text-4xl font-semibold border-b border-gray-200 p-2">
          {blogpost.header}
        </h2>
        <div>
          {blogpost.keywords.map((keyword: string, index: number) => (
            <div
              key={index}
              className="p-2 border border-gray-200 rounded-box w-min"
            >
              {keyword}
            </div>
          ))}
        </div>
        <div>{blogpost.description}</div>
        <div>{blogpost.content}</div>
      </div>
    </div>
  );
}
