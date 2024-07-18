import { SkillsGraph } from "@/components/BarCharts";
import { getData } from "@/utils";

export default async function Proficiences() {
  const {
    attributes: { description, skillGroups },
  } = await getData("skills-page?populate=deep");

  return (
    <>
      <p className="my-12 self-start">{description}</p>
      <SkillsGraph skillGroups={skillGroups} />
    </>
  );
}
