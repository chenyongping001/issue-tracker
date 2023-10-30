"use client";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  return (
    <nav className="flex space-x-6 border-b px-5 h-14 items-center mb-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li
            key={link.href}
            className={classNames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
      {status === "authenticated" && (
        <Link href="/api/auth/signout">Logout</Link>
      )}
    </nav>
  );
};

export default NavBar;
