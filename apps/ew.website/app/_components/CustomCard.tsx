import Image from "next/image";
import React from "react";

import { Card } from "@repo/ui/card";

export default function CustomCard({
  children,
  image,
  className,
}: {
  children: React.ReactNode;
  image?: { url: string; alt: string };
  className?: string;
}) {
  return (
    <Card
      className={`p-0 flex flex-col sm:flex-row ${className ? className : ""}`}
    >
      <div
        className={`p-5 flex flex-col items-start justify-start gap-4 ${image ? "sm:w-2/3" : "w-full"}`}
      >
        {children}
      </div>
      {image && (
        <Image
          src={image.url}
          alt={image.alt}
          width={0}
          height={0}
          sizes="(max-width: 768px) 300px, 400px"
          className="h-[300px] sm:h-auto w-full sm:w-1/3 object-cover"
        />
      )}
    </Card>
  );
}
