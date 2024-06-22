export function GlassBackground(): JSX.Element {
  return (
    <div className="ui-absolute ui-top-0 ui-h-screen ui-w-screen ui-overflow-hidden ui--z-10">
      <div className="ui-absolute ui-z-[-20] ui-w-full ui-h-full ui-bg-gradient-to-b ui-from-[rgba(239, 218, 218, 0.1)] ui-via-[rgba(237, 237, 237, 0.1)] ui-to-[rgba(135, 135, 135, 0.1)] ui-backdrop-blur-[40px] ui-opacity-50"></div>
      <div className="ui-absolute ui-z-[-20] ui-w-full ui-h-full ui-bg-noise ui-opacity-50"></div>
      <div className="ui-absolute ui-z-[-20] ui-w-[1100px] ui-h-[1100px] ui-left-[-100%] ui-bottom-[-50%] ui-bg-gradient-to-b ui-from-[#9F8383] ui-to-[#706C8A] ui-blur-[450px] ui-rounded-full ui-transform-[matrix(-0.42, -0.91, 0.89, -0.45, 0, 0)]"></div>
      <div className="ui-absolute ui-z-[-20] ui-right-[9%] ui-top-[30%] ui-w-[295px] ui-h-[280px] ui-rounded-full ui-animate-spin-slow ui-bg-gradient-to-b ui-from-[#D37373] ui-to-[#2F14D7] ui-blur-[55.7px] ui-transform-[matrix(0.45, 0.89, -0.9, 0.43, 0, 0)]"></div>
      <div className="ui-absolute ui-h-[30%] ui-w-[30%] ui-right-[-400px] ui-bottom-[-260px] ui-bg-gradient-to-b ui-from-[#9F8383] ui-to-[#706C8A] ui-blur-[142.05px] ui-rotate-30"></div>
    </div>
  );
}
