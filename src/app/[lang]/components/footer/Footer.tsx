import React from "react";
import ContactInfo from "./ContactInfo";
import Social from "./Social";
import { Locale } from "@/configs/i18n.config";

const Footer = ({ lang }: { lang: Locale }) => {
  return (
    <section id="3" className="relative h-72 w-full overflow-hidden">
      <div className="absolute z-30 top-8 left-3 lg:left-12">
        <ContactInfo lang={lang} />
      </div>
      <div className="absolute z-30 bottom-4 left-0 lg:left-auto right-0 lg:top-32 lg:right-32">
        <Social />
      </div>
      <div className="absolute -z-10 bg-primary backdrop-blur-xl h-full w-full"></div>
    </section>
  );
};

export default Footer;
