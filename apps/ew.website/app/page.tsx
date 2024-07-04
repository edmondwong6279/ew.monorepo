import LandingPageHeader from "@/components/LandingPageHeader";
import { CTA } from "@repo/ui/cta";

export default function Home(): JSX.Element {
  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen md:p-24 p-10">
        <LandingPageHeader
          supertitle="My name is"
          title="Ed Wong"
          className="mb-10"
        />
        <LandingPageHeader supertitle="I am a" title="Full Stack Dev" />
        <div className="max-w-60 self-center absolute bottom-12">
          <CTA href="#">Continue</CTA>
        </div>
      </div>
    </>
  );
}
