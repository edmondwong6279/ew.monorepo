import type { MouseEventHandler, ReactNode } from "react";

export function CTA({
  children,
  onClick,
  props,
  className,
}: {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  props?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  className?: string;
}): JSX.Element {
  return (
    <button
      className={`ui-group ui-block ui-relative ui-rounded-lg ui-px-5 ui-py-4 ui-text-2xl ui-text-center ui-drop-shadow-3xl hover:ui-cursor-pointer disabled:ui-grayscale disabled:hover:ui-cursor-not-allowed ${className ? className : ""}`}
      onClick={onClick}
      type="submit"
      {...props}
    >
      <div className="ui-pointer-events-none ui-relative ui-z-10 ui-text-gray group-hover:ui-text-off-white ui-transition-colors">
        {children}
      </div>
      <div className="ui-pointer-events-none ui-rounded-lg ui-overflow-hidden ui-absolute ui-left-0 ui-top-0 ui-w-full ui-h-full ui-bg-off-white-translucent-2 group-hover:ui-bg-transparent ui-transition-all">
        <div className="ui-absolute ui-bg-gradient-to-b ui-from-[#ee6565] ui-to-[#5943e7] -ui-z-20 ui-left-0 ui-right-0 ui-top-0 ui-bottom-0 ui-m-auto ui-animate-spin-medium ui-aspect-square" />
      </div>
    </button>
  );
}
