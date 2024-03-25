import "./globals.css";
import type { Metadata } from "next";
import { Locale, i18n } from "@/configs/i18n.config";

export const metadata: Metadata = {
  title: "Art Experience",
  description: "Event Art Experience",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <head>
        <link rel="icon" href="/bg-black-logo-goma.png" sizes="any" />
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
        <link rel="apple-touch-icon" href="/apple-icon?<generated>" type="image/<generated>" sizes="<generated>" />
      </head>
      <body>{children}</body>
    </html>
  );
}

export const runtime = "nodejs";
export const dynamic = "force-static";
