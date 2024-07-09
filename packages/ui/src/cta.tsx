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
      className="ui-group ui-block ui-relative ui-rounded-lg ui-px-5 ui-py-4 ui-text-2xl ui-text-center ui-drop-shadow-3xl"
      href={href}
      {...props}
    >
      <div className="ui-relative ui-z-10 ui-text-gray group-hover:ui-text-off-white ui-transition-colors">
        {children}
      </div>
      <div className="ui-rounded-lg ui-overflow-hidden ui-absolute ui-left-0 ui-top-0 ui-w-full ui-h-full ui-bg-off-white-translucent-2 group-hover:ui-bg-transparent ui-transition-all">
        <div className="ui-absolute ui-rounded-full ui-bg-gradient-to-b ui-from-[#ee6565] ui-to-[#5943e7] -ui-z-20 ui-animate-spin-medium ui-w-[200%] ui-aspect-square -ui-left-1/2 -ui-top-1/2 ui-blur-md" />
      </div>
    </a>
  );
}
