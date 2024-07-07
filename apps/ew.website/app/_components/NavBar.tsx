"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../_context";
import { useWindowSize } from "../_hooks";

export default function NavBar({
  navItems,
}: {
  navItems: { title: string; link: string }[];
}) {
  const mdBreakpoint = 768;
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  // TODO add light mode
  const pathname = usePathname();
  const size = useWindowSize();
  const { theme } = useContext(ThemeContext);

  const [viewIsMobile, setviewIsMobile] = useState(size.width < mdBreakpoint);

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
    setviewIsMobile(size.width < mdBreakpoint);
    if (!(size.width < mdBreakpoint)) {
      setMobileMenuIsOpen(false);
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

  return (
    <nav
      className={`flex justify-center sticky top-0 w-full py-5 px-10 z-50 transition-all ${scrolled ? "bg-[#0a0a0a]" : "bg-transparent"}`}
    >
      <ul className="justify-between md:flex hidden w-full max-w-screen-xl ">
        {navItems.map((item, idx) => (
          <li className="relative" key={`${idx}`}>
            <Link
              className={`bg-start animate-bg-spin bg-[length:200px_100px] text-2xl tracking-widest font-medium transition-all bg-clip-text after:transition-all after:rounded-md after:content-[''] after:absolute after:-bottom-2 after:w-0 after:left-1/2 after:h-1 hover:after:w-full hover:after:left-0 bg-gradient-to-r from-[#F77373] to-[#A193F5] ${(item.link !== "/" ? path.startsWith(item.link) : path === item.link) ? "text-transparent font-bold after:bg-gradient-to-r after:from-[#F77373] after:to-[#A193F5]" : "text-off-white after:bg-white"}`}
              href={item.link}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
