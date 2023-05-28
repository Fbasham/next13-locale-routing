"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/logo-large.svg";

export default function Nav({ lang }) {
  let path = usePathname();

  return (
    <nav className="flex justify-between marker p-2 md:p-10 border-b min-h-[3rem] items-center">
      <Image
        src={logo}
        alt=""
        className="max-h-[1.2rem] md:max-h-[2rem]"
        height={0}
        width={0}
      />
      <Link
        className="grow underline text-right"
        lang={lang == "en" ? "fr" : "en"}
        href={`/${lang === "en" ? "fr" : "en"}/${path
          .split("/")
          .slice(2)
          .join("/")}`}
      >
        <span className="md:hidden">{lang === "en" ? "FR" : "EN"}</span>
        <span className="hidden md:block">
          {lang === "en" ? "Français" : "English"}
        </span>
      </Link>
    </nav>
  );
}
