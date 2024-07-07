import { getData } from "@/utils";

export default async function Proficiences() {
  const {
    attributes: { title, description, skillGroups },
  } = await getData("skills-page?populate=deep");

  return (
    <main className="flex  min-h-[calc(100svh-4.5rem)] flex-col items-center justify-between p-24">
      <h1>{title} (Proficiencies)</h1>
      <p>{description}</p>
      <ul>
        {skillGroups.map((group, idx) => (
          <li key={idx}>{group.groupName}</li>
        ))}
      </ul>
    </main>
  );
}
