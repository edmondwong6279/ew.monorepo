export default function LandingPageHeader({
  supertitle,
  title,
  className,
}: {
  supertitle: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`sm:mb-10 ${className || ""}`}>
      <h2 className="text-off-white text-xs md:text-sm opacity-50 tracking-[1rem] font-light ml-3">
        {supertitle}
      </h2>
      <h1 className="text-off-white text-3xl leading-3xl sm:text-4xl sm:leading-4xl md:text-5xl font-medium md:leading-5xl pb-12">
        {title}
      </h1>
    </div>
  );
}
