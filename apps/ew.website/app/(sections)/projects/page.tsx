import { getData } from "@/utils";

export default async function Projects() {
  const {
    attributes: { title, description, portfolioItems },
  } = await getData("portfolio-page?populate=deep");

  return (
    <section className="flex min-h-[calc(100svh-4rem)] flex-col items-center justify-between">
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {portfolioItems.map((item, idx) => (
          <li key={idx}>{item.title}</li>
        ))}
      </ul>
    </section>
  );
}
