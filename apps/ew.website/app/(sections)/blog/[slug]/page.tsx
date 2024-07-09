import { getData } from "@/utils";
import { notFound } from "next/navigation";

export default async function BlobPage({
  params,
}: {
  params: { slug: string };
}) {
  const blogResult = await getData(
    `blogs?filters[slug][$eq]=${params.slug}&populate=deep`,
  );

  if (blogResult.length === 0) {
    return notFound();
  }

  const {
    attributes: { title, postDate, content },
  } = blogResult[0];

  return (
    <section className="flex  min-h-[calc(100svh-4.5rem)] flex-col items-center justify-between p-24">
      <h1>Blog Page</h1>
      <h1>{title}</h1>
      <time dateTime={postDate}>{postDate}</time>
      <p>{content}</p>
    </section>
  );
}
