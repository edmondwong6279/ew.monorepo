import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";

import { GlassBackground } from "@/components/GlassBackground";

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
      <body className={`${font.className} relative bg-gray bg-noise`}>
        <GlassBackground>
          <main className="flex min-h-screen flex-col justify-between p-24 max-w-screen-xl">
            {children}
          </main>
        </GlassBackground>
      </body>
    </html>
  );
}
