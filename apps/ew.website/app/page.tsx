import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { CTA } from "@repo/ui/cta";
import { Card } from "@repo/ui/card";

import { getData } from "@/utils";

import LandingPageHeader from "@/components/LandingPageHeader";

export default async function Home(): Promise<JSX.Element> {
  const { attributes } = await getData("home-page?populate=deep");

  return (
    <>
      <header className="relative flex flex-col h-[calc(100svh-4rem)] justify-center md:pb-8 mb-7">
        <LandingPageHeader
          supertitle="My name is"
          title="Ed Wong"
          className="mb-10"
        />
        <LandingPageHeader supertitle="I am a" title="Full Stack Dev" />
        <div className="max-w-60 self-center absolute bottom-14">
          <CTA href="#more-info">Continue</CTA>
        </div>
      </header>
      <section id="more-info">
        <div className="my-10 text-center">
          <p className="text-2xl italic">{attributes.tagline}</p>
        </div>
        <div className="my-10">
          <Card className="p-0 flex">
            <div className="p-5">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {attributes.description}
              </ReactMarkdown>
              <ul>
                {attributes.contactItems.map((item, idx) => (
                  <li key={idx}>
                    {item.name} {item.link}
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src={attributes.mediaUrl}
              alt={"Image of Ed"}
              width={0}
              height={0}
              sizes="(max-width: 768px) 300px, 400px"
              className="w-1/3"
            />
          </Card>
        </div>

        <div className="my-10">
          <Card className="p-0 flex">
            <div className="p-5">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {attributes.description}
              </ReactMarkdown>
              <ul>
                {attributes.contactItems.map((item, idx) => (
                  <li key={idx}>
                    {item.name} {item.link}
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src={attributes.mediaUrl}
              alt={"Image of Ed"}
              width={0}
              height={0}
              sizes="(max-width: 768px) 300px, 400px"
              className="w-1/3"
            />
          </Card>
        </div>
      </section>
    </>
  );
}
