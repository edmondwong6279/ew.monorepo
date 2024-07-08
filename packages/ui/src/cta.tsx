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
  // TODO get this to match the styling of the cards, also redesign so it's clear this is clickable whereas cards are not
  return (
    <a
      className="ui-group ui-block ui-relative ui-rounded-lg ui-px-5 ui-py-4 ui-text-2xl ui-text-center ui-text-off-white ui-drop-shadow-3xl"
      href={href}
      {...props}
    >
      {children}
      <div className="ui-rounded-lg ui-overflow-hidden ui-absolute ui-left-0 ui-top-0 ui-w-full ui-h-full -ui-z-10 group-hover:ui-opacity-100 ui-group-hover:ui-text-white ui-bg-off-white-translucent ui-transition-opacity ui-backdrop-blur-md ">
        <div className="ui-absolute -ui-left-16 -ui-bottom-11 ui-w-20 ui-h-20 ui-rounded-full ui-bg-[#b8a4a4] -ui-z-20" />
        <div className="ui-absolute ui-right-1 -ui-top-4 ui-w-20 ui-h-20 ui-rounded-full ui-blur-[50px] ui-bg-[#5D2FBA] -ui-z-20" />
      </div>
    </a>
  );
}
