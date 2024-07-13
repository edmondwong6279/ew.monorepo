import { getData } from "@/utils";
import { Card } from "@repo/ui/card";
import { CTA } from "@repo/ui/cta-anchor";

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
    <section className="flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-between">
      <p className="text-left w-full p-6">{description}</p>
      <ul className="grid grid-flow-row grid-cols-3 m-0">
        {blogs.map((blog, idx) => {
          const date = new Date(blog.attributes.publishedAt).toLocaleDateString(
            "en-GB"
          );

          return (
            <Card key={idx} className="m-6 p-10 flex flex-col gap-4">
              <header className="mb-4">
                <h2 className="text-2xl">{blog.attributes.title}</h2>
                <h4 className="text-sm text-gray-1">{date}</h4>
              </header>
              <p>{blog.attributes.description}</p>
              <CTA href={`/blog/${blog.attributes.slug}`}>Read more</CTA>
            </Card>
          );
        })}
      </ul>
    </section>
  );
}
