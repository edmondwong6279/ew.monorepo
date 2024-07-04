import LandingPageHeader from "@/components/LandingPageHeader";

export default function Home(): JSX.Element {
  return (
    <>
      <LandingPageHeader supertitle="My name is" title="Ed Wong" />
      <LandingPageHeader supertitle="I am a" title="Full Stack Dev" />
    </>
  );
}
