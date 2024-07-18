import { type ReactNode } from "react";

export function Card({
  children,
  props,
  className,
}: {
  children: ReactNode;
  props?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  className?: string;
}): JSX.Element {
  // Note there was also ui-backdrop-blur-sm added to the wrapping div but it takes a hit on performance for browsers on lower specced systems booo
  return (
    <div
      className={`ui-relative ui-rounded-lg ui-px-5 ui-py-4 ui-overflow-hidden ui-text-off-white ui-drop-shadow-lg ${className}`}
      {...props}
    >
      {children}
      <div className="ui-absolute ui-left-0 ui-top-0 ui-w-full ui-h-full ui-bg-gradient-to-b ui-from-[#EFDADA] ui-via-[#EDEDED] ui-to-[#878787] ui-opacity-10 -ui-z-10" />
    </div>
  );
}
