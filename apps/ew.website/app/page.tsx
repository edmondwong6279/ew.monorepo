import LandingPageHeader from "@/components/LandingPageHeader";
import { CTA } from "@repo/ui/cta";
import { getData } from "@/utils";

export default async function Home(): Promise<JSX.Element> {
  const result = await getData("home-page?populate=deep");

  console.log(result);

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
        <div>{JSON.stringify(result)}</div>
      </section>
    </>
  );
}
