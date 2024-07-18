import { getData } from "@/utils";
import { Card } from "@repo/ui/card";
import { CTA } from "@repo/ui/cta-anchor";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default async function Projects() {
  const {
    attributes: { description, portfolioItems },
  } = await getData("portfolio-page?populate=deep");

  return (
    <>
      <p className="my-12 self-start">{description}</p>
      <section className="flex flex-col gap-5">
        {portfolioItems.map((item, idx) => (
          <div key={idx} className="my-5 list-disc">
            <Card className="p-0 flex flex-col sm:flex-row">
              <div
                className={`p-5 flex flex-col flex-1 items-start justify-start gap-4`}
              >
                <header className="mb-4">
                  <h3 className="text-2xl">{item.title}</h3>
                </header>
                <ReactMarkdown
                  className="list-disc"
                  rehypePlugins={[rehypeRaw]}
                >
                  {item.description}
                </ReactMarkdown>
                {(item.repositoryUrl || item.projectUrl) && (
                  <div className="w-full flex justify-center gap-4 flex-col sm:flex-row">
                    {item.repositoryUrl && (
                      <CTA newTab href={item.repositoryUrl}>
                        Code Repo
                      </CTA>
                    )}
                    {item.projectUrl && (
                      <CTA newTab href={item.projectUrl}>
                        Project
                      </CTA>
                    )}
                  </div>
                )}
              </div>
              <div className="sm:max-w-[400px]">
                <video
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  autoPlay
                  loop
                  poster={"/loader.gif"}
                >
                  <source src={item.mediaUrl} type={"video/mp4"} />
                </video>
              </div>
            </Card>
          </div>
        ))}
      </section>
    </>
  );
}
