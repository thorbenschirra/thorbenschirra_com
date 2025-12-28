import Header from "@/app/components/Header";

export default function blog() {
  return (
    <div>
      <Header />
      <div className="mx-12 space-y-14">
        <div className="space-y-4">
          <p className="text-xl font-semibold">
            Note: This is my blog. That means these are my beliefs, opinions and
            interests...
          </p>
          <p>If you are not interested by my posts, feel free to leave.</p>
        </div>
        <div className="text-3xl font-semibold">
          <h1 className="text-4xl font-semibold">Recent blogposts</h1>
        </div>
        <div className="space-y-4 max-w-2/3">
          <h2 /* Post header */ className="text-3xl font-semibold">
            My first blogpost
          </h2>
          <p /* post description */ className="border-t py-8">
            What is the motivation for creating this blog? I want to share:
            where my interests lie a few of the topics that you can expect to
            see here and describe what you can expect from this blog. Future
            updates will follow...
          </p>
        </div>
      </div>
    </div>
  );
}
