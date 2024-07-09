import { getData } from "@/utils";

export default async function Proficiences() {
  const {
    attributes: { description, skillGroups },
  } = await getData("skills-page?populate=deep");

  return (
    <section className="flex  min-h-[calc(100svh-4.5rem)] flex-col items-center justify-between p-24">
      {/* <h2 className="my-12 self-start text-xl">{title}</h2> */}
      <p className="my-12 self-start">{description}</p>
      <div className="flex flex-col gap-5">
        {skillGroups.map((group, idx) => (
          <section key={idx}>
            <h2 className="text-2xl md:text-3xl leading-8 md:leading-3xl self-start">
              {group.groupName}
            </h2>
            {group.skills.map((item, idx) => (
              <div key={idx}>
                {item.title} {item.value}
              </div>
            ))}
          </section>
        ))}
      </div>
    </section>
  );
}
