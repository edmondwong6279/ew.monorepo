import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { CTA } from "@repo/ui/cta";

import { getData } from "@/utils";

import LandingPageHeader from "@/components/LandingPageHeader";
import CustomCard from "@/components/CustomCard";

export default async function Home(): Promise<JSX.Element> {
  const { attributes } = await getData("home-page?populate=deep");

  return (
    <>
      <header className="relative flex flex-col min-h-[calc(100svh-4rem)] justify-center md:pb-8">
        <LandingPageHeader supertitle="My name is" title="Ed Wong" />
        <LandingPageHeader supertitle="I am a" title="Full Stack Dev" />
        <div className="max-w-60 self-center">
          <CTA href="#more-info">Continue</CTA>
        </div>
      </header>
      <section className="pt-[88px]" id="more-info">
        <div className="my-4 text-center">
          <p className="text-2xl italic">{attributes.tagline}</p>
        </div>
        <div className="my-10">
          <CustomCard image={{ url: attributes.mediaUrl, alt: "Image of Ed" }}>
            <>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {attributes.description}
              </ReactMarkdown>
              <br />
              <p>Contact details and links:</p>
              <br />
              <ul className="ml-8 list-disc">
                {attributes.contactItems.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.link} target="_blank">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          </CustomCard>
        </div>
      </section>
    </>
  );
}
