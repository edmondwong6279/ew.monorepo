"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar({
  navItems,
}: {
  navItems: { title: string; link: string }[];
}) {
  const path = usePathname();

  // TODO if scrolled, make opaque
  return (
    <nav className="sticky top-0 max-w-screen-xl w-full  justify-between p-5 z-50 md:flex hidden">
      {navItems.map((item, idx) => (
        <Link
          key={idx}
          className={`bg-start hover:bg-end bg-[length:200px_100px] text-2xl tracking-widest font-medium transition-all bg-clip-text ${path === item.link ? "bg-gradient-to-r from-[#F77373] from-45% to-[#A193F5] text-transparent font-bold" : "text-off-white "}`}
          href={item.link}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
