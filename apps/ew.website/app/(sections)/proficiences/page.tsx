import { getData } from "@/utils";

export default async function Proficiences() {
  const {
    attributes: { title, description, skillGroups },
  } = await getData("skills-page?populate=deep");

  return (
    <section className="flex  min-h-[calc(100svh-4.5rem)] flex-col items-center justify-between p-24">
      <h1>{title} (Proficiencies)</h1>
      <p>{description}</p>
      <h1>TODO make a cool visualisation here</h1>
      <ul>
        {skillGroups.map((group, idx) => (
          <li key={idx}>{group.groupName}</li>
        ))}
      </ul>
    </section>
  );
}
