"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import logo from "../../public/logo-large.svg";

export default function Nav() {
  let lang = useParams().lang;
  let path = usePathname();

  return (
    <nav className="flex justify-between marker p-2 md:p-10 mb-5 md:mb-10 border-b min-h-[3rem] border-b">
      <Image
        src={logo}
        alt=""
        className="max-h-[1.5rem] md:max-h-[2rem]"
        height={0}
        width={0}
      />
      <Link
        className="grow underline text-right"
        href={`/${lang === "en" ? "fr" : "en"}/${path
          .split("/")
          .slice(2)
          .join("/")}`}
      >
        {lang === "en" ? "FR" : "EN"}
      </Link>
    </nav>
  );
}
