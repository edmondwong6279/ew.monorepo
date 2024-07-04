import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";

import "./globals.css";
import "@repo/ui/styles.css";

const font = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ed Wong",
  description: "Ed Wong's portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`${font.className} flex flex-col items-center relative bg-gray bg-noise`}
      >
        <main className="max-w-screen-xl">{children}</main>
        {/* The below is for the blurry blob background */}
        <div className="absolute z-[-20] w-full h-full bg-gradient-to-b from-[rgba(239, 218, 218, 0.1)] via-[rgba(237, 237, 237, 0.1)] to-[rgba(135, 135, 135, 0.1)] backdrop-blur-[40px] opacity-50 pointer-events-none" />
        <div className="absolute h-full w-full pointer-events-none">
          <div className="sticky top-0 bottom-0 h-screen overflow-hidden -z-10">
            <div className="absolute z-[-20] w-[1100px] h-[1100px] left-[-1100px] bottom-[-50%] bg-gradient-to-b from-[#9F8383] to-[#706C8A] blur-[450px] rounded-full transform-[matrix(-0.42, -0.91, 0.89, -0.45, 0, 0)]" />
            <div className="absolute z-[-20] right-[0] md:right-[9%] top-[30%] w-[295px] h-[280px] rounded-full animate-spin-slow bg-gradient-to-b from-[#D37373] to-[#2F14D7] blur-[55.7px] transform-[matrix(0.45, 0.89, -0.9, 0.43, 0, 0)]" />
            <div className="absolute h-[30%] w-[30%] right-[-400px] bottom-[-260px] bg-gradient-to-b from-[#9F8383] to-[#706C8A] blur-[142.05px] rotate-30" />
          </div>
        </div>
      </body>
    </html>
  );
}
