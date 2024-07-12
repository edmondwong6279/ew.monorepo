import { CTA } from "@repo/ui/cta-button";
import Link from "next/link";

export default function BlogPageLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div>
      <div className="w-1/4">
        <Link href="/blog" className="w-80">
          <CTA>Back to blogs</CTA>
        </Link>
      </div>
      {children}
    </div>
  );
}
