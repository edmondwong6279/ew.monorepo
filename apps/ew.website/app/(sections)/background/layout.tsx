import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { CardSkeleton } from "@repo/ui/card-skeleton";

export default async function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100svh-13.5rem)] flex-col items-center justify-between w-full animate-slideup opacity-0">
      <Suspense
        fallback={
          <div className="w-full mt-20 flex flex-col gap-12">
            <div className="w-full md:w-1/2">
              <Skeleton className="opacity-50" width={"100%"} />
              <Skeleton className="opacity-50" width={"100%"} height={100} />
            </div>
            {new Array(4).fill(undefined).map((_, idx) => (
              <CardSkeleton key={idx} withImage={true} />
            ))}
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
}
