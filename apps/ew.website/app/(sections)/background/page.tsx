import CustomCard from "@/app/_components/CustomCard";
import { getData } from "@/utils";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default async function Background() {
  const {
    attributes: { title, description, aboutGroups },
  } = await getData("about-page?populate=deep");

  return (
    <section className="flex  min-h-[calc(100svh-4.5rem)] flex-col items-center justify-between">
      <h1>{title}</h1>
      <p>{description}</p>
      <ul className="flex flex-col gap-5">
        {aboutGroups.map((group, idx) => (
          <>
            <li key={idx}>
              <h2>{group.groupTitle}</h2>
              {group.aboutItems.map((item, idx) => (
                <div key={idx} className="my-5">
                  <CustomCard
                    image={
                      item.mediaUrl
                        ? { url: item.mediaUrl, alt: item.title }
                        : undefined
                    }
                  >
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                      {item.description}
                    </ReactMarkdown>
                  </CustomCard>
                </div>
              ))}
            </li>
          </>
        ))}
      </ul>
    </section>
  );
}
