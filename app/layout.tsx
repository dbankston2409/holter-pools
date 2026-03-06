import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Holter Pools - Premium Pool Construction",
  description: "Transform your backyard into a paradise with Holter Pools. Expert pool design and construction services.",
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
