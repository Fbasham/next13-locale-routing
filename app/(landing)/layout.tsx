import "../globals.css";

export default function RootLayout({ children, params }) {
  let lang = params.lang;
  if (!/^(en|fr)$/.test(lang)) lang = "en";
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
