import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { getData } from "@/utils";

import CustomCard from "@/components/CustomCard";
import { CTA } from "@repo/ui/cta-anchor";

export default async function MoreInfo(): Promise<JSX.Element> {
  const { attributes } = await getData("home-page?populate=deep");

  const length = attributes.mediaUrls.length;
  const selectedMedia =
    attributes.mediaUrls[Math.floor(length * Math.random())].mediaUrl;

  return (
    <>
      <div className="my-4 text-center">
        <p className="text-2xl italic">{attributes.tagline}</p>
      </div>
      <div className="my-10">
        <CustomCard image={{ url: selectedMedia, alt: "Image of Ed" }}>
          <>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {attributes.description}
            </ReactMarkdown>
            <br />
            <ul className=" flex-1 items-center grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto">
              {attributes.contactItems.map((item, idx) => (
                <li key={idx} className="list-none">
                  <CTA href={item.link} newTab>
                    {item.name}
                  </CTA>
                </li>
              ))}
            </ul>
          </>
        </CustomCard>
      </div>
    </>
  );
}
