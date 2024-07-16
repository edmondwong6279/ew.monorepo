import type { MouseEventHandler, ReactNode } from "react";

export function CTA({
  children,
  onClick,
  props,
  className,
  isLoading = false,
}: {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  props?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  isLoading?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <button
      className={`ui-group ui-block ui-relative ui-rounded-lg ui-px-5 ui-py-4 ui-text-2xl ui-text-center ui-drop-shadow-3xl hover:ui-cursor-pointer disabled:ui-grayscale disabled:hover:ui-cursor-not-allowed ${className ? className : ""}`}
      onClick={onClick}
      type="submit"
      {...props}
    >
      <div className="ui-flex ui-gap-2 ui-items-center ui-justify-center ui-pointer-events-none ui-relative ui-z-10 ui-text-gray group-hover:ui-text-off-white ui-transition-colors">
        {isLoading ? (
          <svg
            className="ui-animate-spin-fast ui-h-5 ui-w-5 ui-text-white  ui-stroke-gray"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="ui-opacity-25"
              cx="12"
              cy="12"
              r="10"
              strokeWidth="4"
            />
            <path
              className="ui-opacity-75 ui-fill-gray"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : null}
        {children}
      </div>
      <div className="ui-pointer-events-none ui-rounded-lg ui-overflow-hidden ui-absolute ui-left-0 ui-top-0 ui-w-full ui-h-full ui-bg-off-white-translucent-2 group-hover:ui-bg-transparent ui-transition-all">
        <div className="ui-absolute ui-bg-gradient-to-b ui-from-[#ee6565] ui-to-[#5943e7] -ui-z-20 ui-left-0 ui-right-0 ui-top-0 ui-bottom-0 ui-m-auto ui-animate-spin-medium ui-aspect-square" />
      </div>
    </button>
  );
}
