export default function Header({
  supertitle,
  title,
  className,
  delay = 0,
}: {
  supertitle: string;
  title: string;
  className?: string;
  delay?: 0 | 200;
}) {
  return (
    <div className={`sm:mb-10 ${className || ""}`}>
      <h2
        className={`opacity-0 text-off-white text-xs md:text-sm tracking-[1rem] font-light ml-3 animate-slideup-to-half [--slideup-delay:${delay}ms]`}
      >
        {supertitle}
      </h2>
      <h1
        className={`opacity-0 text-off-white text-3xl leading-3xl sm:text-4xl sm:leading-4xl md:text-5xl font-medium md:leading-5xl pb-12 animate-slideup [--slideup-delay:${delay + 100}ms]`}
      >
        {title}
      </h1>
    </div>
  );
}
