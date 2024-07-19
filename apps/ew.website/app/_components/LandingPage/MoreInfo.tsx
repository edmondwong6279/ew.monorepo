import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { getData } from "@/utils";

import CustomCard from "@/components/CustomCard";

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
            <p>Contact details and links:</p>
            <br />
            <ul>
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
    </>
  );
}
