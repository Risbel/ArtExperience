import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Art Experience",
  description: "Event Art Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-white.svg" sizes="any" />
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
        <link rel="Art Experience" href="/apple-icon?<generated>" type="image/<generated>" sizes="<generated>" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export const runtime = "nodejs";
export const dynamic = "force-static";
