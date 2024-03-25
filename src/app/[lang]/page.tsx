import { HomeIcon } from "lucide-react";
import LogoCarousel from "./components/carousel";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero";
import LinkEncoded from "./components/hero/LinkEncoded";

import { Locale } from "@/configs/i18n.config";
import Switcher from "./components/hero/Switcher";
import { getDictionary } from "@/configs/dictionary";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { navbar } = await getDictionary(lang);

  return (
    <div className="h-screen overflow-y-scroll scroll-smooth">
      <nav className="flex items-center gap-2 absolute z-[100] right-3 top-4 lg:right-20 lg:top-8 bg-[#514830]/10 backdrop-blur-sm px-2 lg:px-4 py-1 lg:py-2 rounded-3xl">
        <Switcher />
        <a className="hover:-translate-y-[3px] hover:shadow-lg transition-transform duration-300" href="#1">
          <HomeIcon className="stroke-primary fill-white/80" />
        </a>

        <a
          href="#3"
          className="text-xs lg:text-base flex items-center text-primary font-semibold bg-secondary border-2 border-primary px-2 rounded-2xl hover:-translate-y-[3px] hover:shadow-lg transition-transform duration-300"
        >
          {navbar.contact}
        </a>
        <LinkEncoded />
      </nav>

      <Hero lang={lang} />
      <LogoCarousel />
      <Footer lang={lang} />
    </div>
  );
}

export const runtime = "edge";
