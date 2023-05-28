import "../../globals.css";
import Image from "next/image";

import logo from "../../../public/logo-large.svg";
import Link from "next/link";
import Nav from "@/app/components/Nav";

export default function RootLayout({ children, params }) {
  let lang = params.lang;
  if (!/^(en|fr)$/.test(lang)) lang = "en";
  return (
    <html lang={lang}>
      <body>
        <Nav />
        <main className="m-2 md:m-10 max-w-7xl">{children}</main>
      </body>
    </html>
  );
}
