import "./globals.css";
import type { Metadata } from "next";
import { Locale, i18n } from "@/configs/i18n.config";
import DictionaryProvider from "@/providers/DictionaryProvider";
import { getDictionary } from "@/configs/dictionary";

export const metadata: Metadata = {
  title: "ArtExperince",
  keywords: ["art experience", "Art Goma", "Arte en Tenerife", "arte contemporáneo"],
  authors: [{ name: "Karen" }],
  creator: "Karen",
  description: "Estás invitado a ArtExperice, una experiencia unica donde se fusionan Arte y Arquitectura.",
  openGraph: {
    title: "ArtExperience",
    description: "Evento ArtExperice, experiencia única donde se fusionan Arte y Arquitectura.",
    url: "https://art-experience.pages.dev",
    siteName: "Art Experince",
    images: [
      {
        url: "https://art-experience.pages.dev/logo-ArtExperince-og.jpg",
        width: 800,
        height: 800,
        alt: "ArtExperience",
      },
    ],
    type: "website",
    locale: "es",
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body>
        <DictionaryProvider dictionary={dictionary}>{children}</DictionaryProvider>
      </body>
    </html>
  );
}

export const runtime = "nodejs";
export const dynamic = "force-static";
