"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ lang }) {
  let crumbs = usePathname().split("/").slice(2, -1);
  return (
    <nav className="breadcrumb my-2 md:my-5">
      <ol className="flex flex-wrap">
        <li>
          <Link href="https://www.canada.ca">canada.ca</Link>
        </li>
        <li>
          <Link href={`/${lang}/home`}>home</Link>
        </li>
        {crumbs.map((crumb) => (
          <li key={crumb}>{crumb}</li>
        ))}
      </ol>
    </nav>
  );
}
