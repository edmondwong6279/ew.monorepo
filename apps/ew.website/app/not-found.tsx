import { CTA } from "@repo/ui/cta-button";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <div className="relative flex flex-col min-h-filled justify-center m-4 items-center gap-8">
      <h1 className="font-bold text-3xl">404</h1>
      <p>
        Sorry but whatever you were looking for doesn&apos;t seem to exist🤷
      </p>
      <p>
        If you think this is a bug, please let me know by getting in touch by
        clicking &quot;Contact me&quot; down below.
      </p>
      <Link href="/">
        <CTA>Back home</CTA>
      </Link>
    </div>
  );
}
