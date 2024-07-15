"use client";

import Hamburger from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useContext, useEffect, useMemo } from "react";

import { ThemeContext } from "@/context";
import { useWindowSize } from "@/hooks";

export default function NavBar({
  navItems,
}: {
  navItems: { title: string; link: string }[];
}) {
  const mdBreakpoint = 768;
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const size = useWindowSize();
  // TODO add light mode
  const { theme } = useContext(ThemeContext);

  const [viewIsMobile, setviewIsMobile] = useState(
    size.width ? size.width < mdBreakpoint : false
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);

    // immediately call it to see if the client has scrolled or not yet
    setScrolled(window.scrollY > 0);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (size.width) {
      setviewIsMobile(size.width < mdBreakpoint);
      if (!(size.width < mdBreakpoint)) {
        setMobileMenuIsOpen(false);
      }
    }
  }, [viewIsMobile, size]);

  // for freezing the body
  if (typeof window !== "undefined") {
    if (mobileMenuIsOpen) {
      document.body.style.height = "100%";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "unset";
      document.body.style.overflow = "unset";
    }
  }

  const activeNavItem = useMemo(() => {
    return navItems.filter(({ link }) =>
      link !== "/" ? path.startsWith(link) : path === link
    )[0];
  }, [navItems, path]);

  return (
    <nav
      className={`sticky flex flex-col items-center top-0 w-full py-5 px-10 z-50 transition-all ${scrolled || mobileMenuIsOpen ? "bg-[#0a0a0a]" : "bg-transparent"} ${mobileMenuIsOpen ? "h-screen justify-start" : "justify-center"} ${viewIsMobile ? "py-2 px-5" : "py-5 px-10"}`}
    >
      {viewIsMobile ? (
        <header className="flex justify-between items-center w-full">
          <div className="relative">
            <h1
              className={`bg-start animate-bg-spin bg-[length:200px_100px] text-2xl tracking-widest transition-all bg-clip-text bg-gradient-to-r from-[#F77373] to-[#A193F5] text-transparent font-bold after:transition-all after:rounded-md after:content-[''] after:absolute after:-bottom-1 after:h-1 after:w-full after:left-0 after:bg-gradient-to-r after:from-[#F77373] after:to-[#A193F5] ${mobileMenuIsOpen ? "opacity-0" : "opacity-100"}`}
            >
              {activeNavItem?.title || navItems[0].title}
            </h1>
          </div>
          <Hamburger
            toggled={mobileMenuIsOpen}
            onToggle={setMobileMenuIsOpen}
            color="linear-gradient(to right, #F77373, #A193F5"
          />
        </header>
      ) : null}
      <ol
        className={`justify-between flex flex-col md:flex-row items-center w-full max-w-screen-xl transition-all ${viewIsMobile && (mobileMenuIsOpen ? "h-3/4 flex-col justify-between" : "opacity-0 max-h-0 overflow-hidden")}`}
      >
        {navItems.map(({ link, title }, idx) => (
          <li className="relative" key={`${idx}`}>
            <Link
              className={`bg-start animate-bg-spin bg-[length:200px_100px] text-2xl tracking-widest transition-all bg-clip-text after:transition-all after:rounded-md after:content-[''] after:absolute after:-bottom-2 after:w-0 after:left-1/2 after:h-1 hover:after:w-full hover:after:left-0 bg-gradient-to-r from-[#F77373] to-[#A193F5] ${(link !== "/" ? path.startsWith(link) : path === link) ? "text-transparent font-bold after:bg-gradient-to-r after:from-[#F77373] after:to-[#A193F5]" : " font-medium text-off-white after:bg-white"}`}
              href={link}
              onClick={() => setMobileMenuIsOpen(false)}
            >
              {title}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
