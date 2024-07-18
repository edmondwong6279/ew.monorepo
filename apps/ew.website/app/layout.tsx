import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";

// TODO remove the ui package tailwind
import "@repo/ui/styles.css";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SkeletonTheme } from "react-loading-skeleton";
import Background from "@/components/Background";

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
        className={`${font.className} min-h-screen flex flex-col items-center relative bg-gray text-off-white [--slideup-delay:100ms] [--slideup-delay:200ms] [--slideup-delay:300ms] [--slideup-delay:0ms] `}
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
      </body>
    </html>
  );
}
