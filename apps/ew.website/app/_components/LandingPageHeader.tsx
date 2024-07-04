export default function LandingPageHeader({
  supertitle,
  title,
}: {
  supertitle: string;
  title: string;
}) {
  return (
    <div>
      <h2 className="text-off-white text-sm opacity-50 tracking-widest font-light ml-3">
        {supertitle}
      </h2>
      <h1 className="text-off-white text-3xl font-medium leading-3xl pb-12">
        {title}
      </h1>
    </div>
  );
}
