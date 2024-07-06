import { type ReactNode } from "react";

export function CTA({
  children,
  href,
  props,
}: {
  children: ReactNode;
  href: string;
  props?: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;
}): JSX.Element {
  return (
    <a
      className="ui-group ui-block ui-relative ui-rounded-lg ui-px-5 ui-py-4 ui-text-2xl ui-text-center ui-overflow-hidden ui-text-off-white  ui-backdrop-blur-xl"
      href={href}
      {...props}
    >
      {children}
      <div className="ui-absolute ui-left-0 ui-top-0 ui-w-full ui-h-full ui-bg-off-white ui-opacity-40 -ui-z-10 group-hover:ui-opacity-70 ui-group-hover:ui-text-white ui-transition-opacity  ui-backdrop-blur-xl ui-blur-[35px]">
        <div className="ui-absolute -ui-left-16 -ui-bottom-11 ui-w-20 ui-h-20 ui-rounded-full ui-bg-[#b8a4a4] -ui-z-20" />
        <div className="ui-absolute -ui-right-24 -ui-top-4 ui-w-20 ui-h-20 ui-rounded-full ui-blur-[50px] ui-bg-[#5D2FBA] -ui-z-20" />
      </div>
    </a>
  );
}
