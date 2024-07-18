import React from "react";
import Skeleton from "react-loading-skeleton";
import { Card } from "@repo/ui/card";

export function CardSkeleton({
  withImage = false,
}: {
  withImage?: boolean;
}): React.ReactNode {
  return (
    <Card className="ui-my-3 ui-flex ui-gap-2 ui-flex-col md:ui-flex-row ui-w-full">
      <Skeleton
        containerClassName="ui-flex ui-flex-col ui-flex-1 ui-opacity-50 ui-w-full ui-justify-center ui-items-center"
        count={5}
        style={{ display: "flex", gap: 40 }}
      />
      {withImage ? (
        <Skeleton
          containerClassName="ui-flex-1 ui-opacity-50 ui-w-full"
          height={400}
        />
      ) : null}
    </Card>
  );
}
