import Header from "@/app/components/Header";
import { getPost } from "@/app/create_blogpost/functions/blogpost";
import { Blogpost } from "@/app/types/blogpost";
import ReactMarkdown from "react-markdown";

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
  const date = new Date(blogpost.created_at).toLocaleDateString("en-EN");
  return (
    <div className="">
      <Header />
      <div className="flex flex-col items-center">
        <div className="flex flex-col space-y-6 w-1/2 items-center content-center">
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
          <p className="text-sm">Written on: {date}</p>
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
            <div
              style={{ whiteSpace: "pre-line" }}
              className="playfair prose text-black prose-headings:text-black"
            >
              <ReactMarkdown>{blogpost.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
