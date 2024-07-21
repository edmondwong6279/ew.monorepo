// Not to be confused with the background section of the website

export default function Background(): JSX.Element {
  return (
    <>
      <div className="absolute -z-20 w-full h-full bg-gradient-to-b from-[rgba(239, 218, 218, 0.1)] via-[rgba(237, 237, 237, 0.1)] to-[rgba(135, 135, 135, 0.1)] opacity-50 pointer-events-none" />
      <div className="absolute h-full w-full pointer-events-none">
        <div className="animate-slideup opacity-0 sticky top-0 bottom-0 h-screen overflow-hidden -z-10">
          <div className="absolute -z-20 w-[1100px] h-[1100px] left-[-1100px] bottom-[-50%] bg-gradient-to-b from-background-1 to-background-2 blur-[450px] rounded-full transform-[matrix(-0.42, -0.91, 0.89, -0.45, 0, 0)]" />
          <div className="absolute -z-20 right-[0] md:right-[calc(50%-500px)] top-[30%] w-[280px] h-[280px] md:w-[295px] md:h-[280px] rounded-full animate-spin-slow bg-gradient-to-b from-accent-red to-accent-blue blur-[55px]" />
          <div className="absolute h-[400px] w-[500px] right-[-400px] bottom-[-260px] bg-gradient-to-b from-background-1 to-background-2 blur-[142.05px] rotate-30" />
        </div>
      </div>
    </>
  );
}
