import Breadcrumb from "@/app/components/Breadcrumb";
import "../../globals.css";

import Nav from "@/app/components/Nav";

export const metadata = {
  icons: {
    icon: "/flag.ico",
  },
};

export default function RootLayout({ children, params: { lang } }) {
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
