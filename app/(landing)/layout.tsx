import "../globals.css";

export const metadata = {
  icons: {
    icon: "/flag.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
