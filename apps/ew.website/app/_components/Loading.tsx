import { Card } from "@repo/ui/card";
import Skeleton from "react-loading-skeleton";

export function Loading({ withImage = false }: { withImage?: boolean }) {
  return (
    <Card className="my-3 flex gap-2 flex-col md:flex-row">
      <Skeleton
        count={5}
        style={{ display: "flex", gap: 40 }}
        containerClassName="flex flex-col flex-1 opacity-50 w-full justify-center items-center"
      />
      {withImage && (
        <Skeleton height={400} containerClassName="flex-1 opacity-50 w-full" />
      )}
    </Card>
  );
}
