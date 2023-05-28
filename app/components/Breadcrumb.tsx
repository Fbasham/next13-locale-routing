"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ lang }) {
  let path = usePathname();
  let crumbs = path.split("/").slice(2, -1);

  return (
    <nav className="breadcrumb my-2 md:my-5">
      <ol className="flex flex-wrap">
        <li>
          <Link href="https://www.canada.ca">canada.ca</Link>
        </li>
        {crumbs.length < 1 && !/\/home$/.test(path) && (
          <li>
            <Link href={`/${lang}/home`}>home</Link>
          </li>
        )}
        {crumbs.map((crumb, i) => (
          <li key={crumb}>
            <Link href={`/${lang}/${crumbs.slice(0, i + 1).join("/")}`}>
              {crumb}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
