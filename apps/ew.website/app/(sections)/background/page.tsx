import { getData } from "@/utils";

export default async function Background() {
  const {
    attributes: { title, description, aboutGroups },
  } = await getData("about-page?populate=deep");

  return (
    <main className="flex  min-h-[calc(100svh-4.5rem)] flex-col items-center justify-between p-24">
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {aboutGroups.map((group, idx) => (
          <li key={idx}>
            <p>{group.groupTitle}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
