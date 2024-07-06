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
  return (
    <div
      className={`ui-block ui-relative ui-rounded-lg ui-px-5 ui-py-4 ui-overflow-hidden ui-text-off-white ui-backdrop-blur-xl ${className}`}
      {...props}
    >
      {children}
      <div className="ui-absolute ui-left-0 ui-top-0 ui-w-full ui-h-full ui-bg-off-white ui-opacity-20 -ui-z-10">
        <div className="ui-absolute -ui-left-16 -ui-bottom-11 ui-w-20 ui-h-20 ui-rounded-full ui-bg-[#ebd1d1] -ui-z-20" />
        <div className="ui-absolute -ui-right-24 -ui-top-4 ui-w-20 ui-h-20 ui-rounded-full ui-blur-[50px] ui-bg-[#8ab3ed] -ui-z-20" />
      </div>
    </div>
  );
}

// /* Rectangle 2 */

// position: absolute;
// left: 0%;
// right: 0%;
// top: 0%;
// bottom: 0%;

// background: linear-gradient(180deg, rgba(239, 218, 218, 0.1) 0%, rgba(237, 237, 237, 0.1) 53.5%, rgba(135, 135, 135, 0.1) 100%);
// backdrop-filter: blur(40px);
// /* Note: backdrop-filter has minimal browser support */
// border-radius: 8px;
