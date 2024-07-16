import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hi, I'm Edo | Portfolio",
  description:
    "A simply and minimal portfolio, where I show what I knwo and what technologies I use",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
