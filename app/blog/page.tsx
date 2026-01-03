import Header from "@/app/components/Header";
import { getPosts } from "../create_blogpost/functions/blogpost";
import { Blogpost } from "../types/blogpost";
import Link from "next/link";

export default async function blog() {
  const response = await getPosts();

  if (response.status !== 200 || typeof response.body == "string") {
    throw new Error("An error occurred loading the blogposts!");
  }

  const blogposts = response.body;

  return (
    <div>
      <Header />
      <div className="mx-12 space-y-14">
        <div className="space-y-4">
          <p className="text-xl font-semibold">
            Note: This is my blog. That means these are my beliefs, opinions and
            interests...
          </p>
          <p>
            If you are not interested in my posts or feel offended any way, feel
            free to leave. <br />
            In case you have constructive feedback, I would highly appreciate if
            you let me know.
          </p>
        </div>
        <div className="text-3xl font-semibold">
          <h1 className="text-4xl font-semibold">Recent blogposts</h1>
        </div>
        {blogposts.map((post, index) => {
          const keywords = post.keywords;
          return (
            <Link key={index} href={`/blog/${post.id}`}>
              <div className="flex flex-col items-end space-y-4 border border-gray-200 p-4">
                <h2 className="text-2xl font-semibold border-b border-gray-200 w-full">
                  {post.header}
                </h2>
                <div className="flex flex-row justify-start w-full">
                  {keywords.map((keyword: string, index: number) => (
                    <div className="p-2 bg-black rounded-box" key={index}>
                      {keyword}
                    </div>
                  ))}
                </div>
                <p className="w-full">{post.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
