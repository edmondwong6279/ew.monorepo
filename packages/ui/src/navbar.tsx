export function NavBar({
  links,
}: {
  links: { title: string; href: string }[];
}): JSX.Element {
  return (
    <div>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
