import { Loading } from "@/app/_components/Loading";
import { CTA } from "@repo/ui/cta-button";
import Link from "next/link";
import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

export default async function BlobPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col w-full items-center justify-start min-h-[calc(100svh-13.5rem)] gap-8">
      <Link href="/blog" className="self-start">
        <CTA>Back to Blogs</CTA>
      </Link>

      <Suspense
        fallback={
          <>
            <div style={{ width: "100%" }}>
              <Skeleton width={200} />
              <Skeleton height={100} />
              <Loading />
            </div>
          </>
        }
      >
        {children}
      </Suspense>
    </section>
  );
}
