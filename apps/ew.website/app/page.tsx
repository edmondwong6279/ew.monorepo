import LandingPageHeader from "@/components/LandingPageHeader";
import { CTA } from "@repo/ui/cta";

export default function Home(): JSX.Element {
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
        <div>
          <p className="h-64">Some stuff about some stuff</p>
          <p className="h-64">Some stuff about some stuff</p>
          <p className="h-64">Some stuff about some stuff</p>
          <p className="h-64">Some stuff about some stuff</p>
          <p className="h-64">Some stuff about some stuff</p>
        </div>
      </section>
    </>
  );
}
