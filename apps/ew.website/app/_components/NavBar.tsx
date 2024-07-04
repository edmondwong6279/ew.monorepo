import Link from "next/link";

export default function NavBar({
  navItems,
}: {
  navItems: { title: string; link: string; active: boolean }[];
}) {
  return (
    <nav className="sticky top-0">
      {navItems.map((item, idx) => (
        <Link
          key={idx}
          className="text-off-white text-sm font-medium"
          href={item.link}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
