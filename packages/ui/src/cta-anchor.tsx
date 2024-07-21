import { type ReactNode } from "react";

export function CTA({
  children,
  href,
  props,
  newTab = false,
}: {
  children: ReactNode;
  href?: string;
  props?: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;
  isButton?: boolean;
  newTab?: boolean;
}): JSX.Element {
  return (
    <a
      className="ui-group ui-block ui-relative ui-rounded-lg ui-px-5 ui-py-4 ui-text-2xl ui-text-center ui-drop-shadow-3xl hover:ui-cursor-pointer"
      href={href}
      rel={newTab ? "noreferrer" : ""}
      target={newTab ? "_blank" : ""}
      {...props}
    >
      <div className="ui-pointer-events-none ui-relative ui-z-10 ui-text-gray group-hover:ui-text-off-white ui-transition-colors ui-flex ui-justify-center ui-items-center ui-gap-1">
        {children}{" "}
        {newTab ? (
          <svg
            className="ui-transition-colors group-hover:ui-fill-off-white"
            height="20"
            viewBox="0 0 24 24"
            width="20"
            x="0px"
            xmlns="http://www.w3.org/2000/svg"
            y="0px"
          >
            <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z" />
          </svg>
        ) : null}
      </div>
      <div className="ui-pointer-events-none ui-rounded-lg ui-overflow-hidden ui-absolute ui-left-0 ui-top-0 ui-w-full ui-h-full ui-bg-off-white-translucent-2 group-hover:ui-bg-transparent ui-transition-all">
        <div className="ui-absolute ui-bg-gradient-to-b ui-from-accent-red-faded ui-to-accent-blue-faded -ui-z-20 ui-left-0 ui-right-0 ui-top-0 ui-bottom-0 ui-m-auto ui-animate-spin-medium ui-aspect-square" />
      </div>
    </a>
  );
}
