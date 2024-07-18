import { CardSkeleton } from "@repo/ui/card-skeleton";
import React, { Suspense } from "react";

export default async function Proficiences({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-[calc(100svh-13.5rem)] flex-col items-center justify-between mb-4 w-full animate-slideup opacity-0">
      <Suspense
        fallback={new Array(4).fill(undefined).map((_, idx) => (
          <CardSkeleton key={idx} withImage={true} />
        ))}
      >
        {children}
      </Suspense>
    </section>
  );
}
