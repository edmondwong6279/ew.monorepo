import React from "react";

export default function Tooltip({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`block relative rounded-lg px-5 py-4 overflow-hidden text-off-white drop-shadow-lg backdrop-blur-md ${className}`}
    >
      {children}
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-[#EFDADA] via-[#EDEDED] to-[#878787] opacity-20 -z-10" />
    </div>
  );
}
