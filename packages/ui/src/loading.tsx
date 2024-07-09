import { ReactNode } from "react";

// Add something for react suspense? Or it should be dealt with in the parent component
export function Loading({
  children,
  className,
  props,
}: {
  children: ReactNode;
  className?: string;
  props?: any;
}): JSX.Element {
  return (
    <div
      className={`ui-block ui-relative ui-rounded-lg ui-px-5 ui-py-4 ui-overflow-hidden ui-text-off-white ui-drop-shadow-lg ui-w-full ui-h-full ${className}`}
      {...props}
    >
      {children}
      <div className="ui-absolute ui-left-0 ui-top-0 ui-w-full ui-h-full ui-bg-gradient-to-b ui-from-[#EFDADA] ui-via-[#EDEDED] ui-to-[#878787] ui-opacity-10 -ui-z-10" />
    </div>
  );
}
