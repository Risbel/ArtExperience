import LogoCarousel from "./components/carousel";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero";

import { Locale } from "@/configs/i18n.config";
import { Navbar } from "./components/navbar";
import ContactByWhatsapp from "./components/navbar/ContactByWhatsapp";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  return (
    <main className="h-screen overflow-y-scroll scroll-smooth">
      <ContactByWhatsapp />
      <Navbar lang={lang} />
      <Hero lang={lang} />
      <LogoCarousel />
      <Footer lang={lang} />
    </main>
  );
}

export const runtime = "edge";
