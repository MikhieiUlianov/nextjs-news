"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function NavLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  const activePath = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={`${activePath.startsWith(href) ? "active" : undefined}`}
      >
        {children}
      </Link>
    </li>
  );
}
