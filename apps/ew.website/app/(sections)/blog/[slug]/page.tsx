import { getData } from "@/utils";
import { Card } from "@repo/ui/card";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default async function BlobPage({
  params,
}: {
  params: { slug: string };
}) {
  const blogResult = await getData(
    `blogs?filters[slug][$eq]=${params.slug}&populate=deep`
  );

  if (blogResult.length === 0) {
    return notFound();
  }

  const {
    attributes: { title, postDate, content },
  } = blogResult[0];

  return (
    <section className="flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-start gap-8">
      <header className="w-full text-left">
        <h1 className="text-2xl">{title}</h1>
        <time className="text-sm text-gray-1" dateTime={postDate}>
          {postDate}
        </time>
      </header>
      <Card className="flex flex-col gap-2">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
      </Card>
    </section>
  );
}
