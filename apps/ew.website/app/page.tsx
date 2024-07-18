import { Suspense } from "react";

import { CTA } from "@repo/ui/cta-anchor";

import Header from "@/components/LandingPage/Header";
import MoreInfo from "@/components/LandingPage/MoreInfo";
import { Loading } from "@/components/Loading";

export default function Home(): JSX.Element {
  return (
    <>
      <header className="relative flex flex-col min-h-[calc(100svh-4rem)] justify-center md:pb-8">
        <Header supertitle="My name is" title="Ed Wong" delay={0} />
        <Header supertitle="I am a" title="Full Stack Dev" delay={200} />
        <div className="max-w-60 self-center opacity-0 animate-slideup ">
          <CTA href="#more-info">Continue</CTA>
        </div>
      </header>
      <section className="pt-[88px] w-full" id="more-info">
        <Suspense fallback={<Loading withImage={true} />}>
          <MoreInfo />
        </Suspense>
      </section>
    </>
  );
}
