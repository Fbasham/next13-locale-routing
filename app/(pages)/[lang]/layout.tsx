import Breadcrumb from "@/app/components/Breadcrumb";
import "../../globals.css";

import Nav from "@/app/components/Nav";

export default function RootLayout({ children, params }) {
  let lang = params.lang;
  if (!/^(en|fr)$/.test(lang)) lang = "en";
  return (
    <html lang={lang}>
      <body>
        <Nav lang={lang} />
        <main className="mx-2 md:mx-10 max-w-7xl">
          <Breadcrumb lang={lang} />
          {children}
        </main>
      </body>
    </html>
  );
}
