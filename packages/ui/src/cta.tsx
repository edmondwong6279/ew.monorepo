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
      className="ui-group ui-relative ui-drop-shadow-lg"
      href={href}
      {...props}
    >
      <div className="ui-px-5 ui-py-4 ui-text-lg ui-w-full ui-text-center">
        {children}
      </div>
      <div className="ui-absolute ui-left-0 ui-top-0 ui-w-full ui-h-full ui-rounded-lg ui-bg-off-white ui-opacity-50 -ui-z-10 group-hover:ui-opacity-90 ui-group-hover:ui-text-white ui-transition-opacity" />
    </a>
  );
}
