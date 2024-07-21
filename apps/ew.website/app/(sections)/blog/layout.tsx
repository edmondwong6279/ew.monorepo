import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { CardSkeleton } from "@repo/ui/card-skeleton";

export default async function Blog({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-filled flex-col items-center justify-start w-full animate-slideup opacity-0 mb-8">
      <Suspense
        fallback={
          <>
            <div className="w-full md:w-1/2">
              <Skeleton className="opacity-50" width={"100%"} />
            </div>
            <div className="flex w-full gap-4">
              {new Array(3).fill(undefined).map((_, idx) => (
                <div key={idx} className="w-full md:w-1/3">
                  <CardSkeleton />
                </div>
              ))}
            </div>
            <div className="w-full md:w-1/3 self-start">
              <CardSkeleton />
            </div>
          </>
        }
      >
        {children}
      </Suspense>
    </section>
  );
}
