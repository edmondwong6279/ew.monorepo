import Link from "next/link";

import { getData } from "@/utils";

export default async function Blog() {
  const [
    {
      attributes: { title, description },
    },
    blogs,
  ] = await Promise.all([
    getData("blog-page?populate=deep"),
    getData("blogs?sort[0]=postDate:desc&populate=deep"),
  ]);

  return (
    <section className="flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-between">
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {blogs.map((blog, idx) => (
          <li key={idx}>
            <Link href={`/blog/${blog.attributes.slug}`}>
              {blog.attributes.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
