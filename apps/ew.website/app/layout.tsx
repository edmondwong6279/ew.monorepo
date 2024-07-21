import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";

import "@repo/ui/styles.css";
import "react-loading-skeleton/dist/skeleton.css";
import "./globals.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SkeletonTheme } from "react-loading-skeleton";
import Background from "@/components/Background";

const font = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ed-wong.dev"),
  title: "Ed Wong",
  description: "Ed Wong's portfolio website",
  openGraph: {
    title: "Ed Wong",
    description: "Ed Wong's portfolio website",
    images: "/opengraph-image.jpg",
  },
  twitter: {
    title: "Ed Wong",
    description: "Ed Wong's portfolio website",
    card: "summary_large_image",
    images: "/twitter-image.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`${font.className} min-h-screen flex flex-col items-center relative bg-gray  text-off-white [--slideup-delay:0ms]`}
        style={{
          backgroundImage: `url(/noise.png)`,
          height: "unset",
          overflow: "unset",
        }}
      >
        <NavBar
          navItems={[
            { title: "Home", link: "/" },
            { title: "Background", link: "/background" },
            { title: "Proficiences", link: "/proficiences" },
            { title: "Projects", link: "/projects" },
            { title: "Blog", link: "/blog" },
          ]}
        />
        <main className="max-w-screen-xl flex flex-col items-center mx-2 w-full px-2">
          <SkeletonTheme baseColor="#212121" highlightColor="#ededed">
            {children}
          </SkeletonTheme>
        </main>
        <Footer />
        <Background />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
