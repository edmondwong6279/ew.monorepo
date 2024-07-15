import { SkillsGraph } from "@/app/_components/BarCharts";
import { getData } from "@/utils";

export default async function Proficiences() {
  const {
    attributes: { description, skillGroups },
  } = await getData("skills-page?populate=deep");

  return (
    <section className="flex min-h-[calc(100svh-13.5rem)] flex-col items-center justify-between mb-4">
      {/* <h2 className="my-12 self-start text-xl">{title}</h2> */}
      <p className="my-12 self-start">{description}</p>
      <SkillsGraph skillGroups={skillGroups} />
    </section>
  );
}
