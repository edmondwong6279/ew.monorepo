import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import CustomCard from "@/components/CustomCard";
import { getData } from "@/utils";

export default async function Background() {
  const {
    attributes: { description, aboutGroups },
  } = await getData("about-page?populate=deep");

  return (
    <div className="flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-between">
      <p className="my-12 self-start">{description}</p>
      <div className="flex flex-col gap-5">
        {aboutGroups.map((group, idx) => (
          <section key={idx}>
            <h2 className="text-2xl md:text-3xl leading-8 md:leading-3xl self-start">
              {group.groupTitle}
            </h2>
            {group.aboutItems.map((item, idx) => (
              <div key={idx} className="my-5 list-disc">
                <CustomCard
                  image={
                    item.mediaUrl
                      ? { url: item.mediaUrl, alt: item.title }
                      : undefined
                  }
                >
                  <header className="mb-4">
                    <h3 className="text-2xl">{item.title}</h3>
                    <h4 className="text-sm text-gray-1">{item.subtitle}</h4>
                  </header>
                  <ReactMarkdown
                    className="list-disc"
                    rehypePlugins={[rehypeRaw]}
                  >
                    {item.description}
                  </ReactMarkdown>
                </CustomCard>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
