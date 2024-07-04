import LandingPageHeader from "@/components/LandingPageHeader";
import { CTA } from "@repo/ui/cta";

export default function Home(): JSX.Element {
  return (
    <>
      <div className="flex flex-col justify-center min-h-screen md:p-24 p-10">
        <LandingPageHeader
          supertitle="My name is"
          title="Ed Wong"
          className="mb-10"
        />
        <LandingPageHeader supertitle="I am a" title="Full Stack Dev" />
        <div className="max-w-60">
          <CTA href="#">Continue</CTA>
        </div>
      </div>

      {/* <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p>
      <p>Some other crap I guess blah blah</p> */}
    </>
  );
}
