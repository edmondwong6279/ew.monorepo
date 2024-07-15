import { getData } from "@/utils";
import { Card } from "@repo/ui/card";
import { CTA } from "@repo/ui/cta-button";
import Link from "next/link";
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

  const date = new Date(postDate).toLocaleDateString("en-GB");

  return (
    <div className="min-h-[calc(100svh-13.5rem)] ">
      <header className="flex justify-between flex-col w-full text-left mb-5 gap-4">
        <div className="w-fit">
          <Link href="/blog">
            <CTA>Back to Blogs</CTA>
          </Link>
        </div>
        <time
          className="text-sm text-gray-1 tracking-[0.8rem]"
          dateTime={date}
          title={date}
        >
          {date}
        </time>
        <h1 className="text-2xl md:leading-3xl md:text-3xl">{title}</h1>
      </header>
      <section className="flex flex-col items-center justify-start gap-8">
        <Card className="flex flex-col gap-2">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
        </Card>
      </section>
    </div>
  );
}
