export function GlassBackground({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <div className="absolute z-[-20] w-full h-full bg-gradient-to-b from-[rgba(239, 218, 218, 0.1)] via-[rgba(237, 237, 237, 0.1)] to-[rgba(135, 135, 135, 0.1)] backdrop-blur-[40px] opacity-50" />
      {children}
      <div className="sticky top-0 bottom-0 h-screen overflow-hidden -z-10">
        <div className="absolute z-[-20] w-[1100px] h-[1100px] left-[-100%] bottom-[-50%] bg-gradient-to-b from-[#9F8383] to-[#706C8A] blur-[450px] rounded-full transform-[matrix(-0.42, -0.91, 0.89, -0.45, 0, 0)]" />
        <div className="absolute z-[-20] right-[9%] top-[30%] w-[295px] h-[280px] rounded-full animate-spin-slow bg-gradient-to-b from-[#D37373] to-[#2F14D7] blur-[55.7px] transform-[matrix(0.45, 0.89, -0.9, 0.43, 0, 0)]" />
        <div className="absolute h-[30%] w-[30%] right-[-400px] bottom-[-260px] bg-gradient-to-b from-[#9F8383] to-[#706C8A] blur-[142.05px] rotate-30" />
      </div>
    </>
  );
}
