import { getData } from "@/utils";
import { Card } from "@repo/ui/card";
import { CTA } from "@repo/ui/cta-button";
import Link from "next/link";

export default async function Blog() {
  const [
    {
      attributes: { description },
    },
    blogs,
  ] = await Promise.all([
    getData("blog-page?populate=deep"),
    getData("blogs?sort[0]=postDate:desc&populate=deep"),
  ]);

  return (
    <section className="flex min-h-[calc(100svh-13.5rem)] flex-col items-center justify-between">
      <p className="text-left w-full p-6">{description}</p>
      <ul className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-0">
        {blogs.map((blog, idx) => {
          const date = new Date(blog.attributes.publishedAt).toLocaleDateString(
            "en-GB"
          );

          return (
            <Card key={idx} className="m-3 p-10 flex flex-col gap-4">
              <header className="mb-4">
                <h2 className="text-2xl">{blog.attributes.title}</h2>
                <h4 className="text-sm text-gray-1">{date}</h4>
              </header>
              <p>{blog.attributes.description}</p>
              <div className="max-w-48 self-center">
                <Link href={`/blog/${blog.attributes.slug}`}>
                  <CTA>Read more</CTA>
                </Link>
              </div>
            </Card>
          );
        })}
      </ul>
    </section>
  );
}
