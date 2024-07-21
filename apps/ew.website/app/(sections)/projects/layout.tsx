import { CardSkeleton } from "@repo/ui/card-skeleton";
import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

export default async function Projects({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-filled flex-col items-center justify-between w-full animate-slideup opacity-0">
      <Suspense
        fallback={
          <div className="w-full mt-20 flex flex-col gap-12">
            <div className="w-full md:w-1/2">
              <Skeleton className="opacity-50" width={"100%"} />
            </div>
            {new Array(4).fill(undefined).map((_, idx) => (
              <CardSkeleton key={idx} withImage={true} />
            ))}
          </div>
        }
      >
        {children}
      </Suspense>
    </section>
  );
}
