import H1Title from "./H1Title";
import H3Ribbon from "./H3Ribbon";
import H2Caption from "./H2Caption";
import H4Date from "./H4Date";
import ButtonSuscribe from "./ButtonSuscribe";
import Pattern1 from "./Pattern1";
import Pattern2 from "./Pattern2";
import CircularPattern from "./CircularPattern";
import H3Caption from "./H3Caption";
import { Locale } from "@/configs/i18n.config";
import { getDictionary } from "@/configs/dictionary";
import H3Ribbon2 from "./H3Ribon2";

const Hero = async ({ lang }: { lang: Locale }) => {
  const { home } = await getDictionary(lang);

  return (
    <section id="1" className="flex flex-col bg-secondary">
      <div className="relative flex flex-col mx-6 mt-4 lg:mx-12 lg:mt-8 border-4 border-dotted border-[#e7dfc9] rounded-2xl rounded-b-none border-b-0 overflow-hidden">
        <Pattern1 />
        <CircularPattern className={"-translate-x-36 -translate-y-36"} />

        <div className="flex justify-center relative z-20 p-2">
          <H1Title />
        </div>
      </div>
      <H3Ribbon lang={home.h3Ribbon} />
      <div className="relative flex flex-col gap-4 mx-6 lg:mx-12 mb-2 border-4 border-dotted border-[#e7dfc9] border-y-0 overflow-hidden">
        <Pattern2 />
        <div className="flex flex-col lg:gap-4 relative z-50">
          <H2Caption lang={home.caption1} />
          <H3Caption lang={home.caption2} />

          <div className="flex justify-center mb-2">
            <ButtonSuscribe />
          </div>
          <H4Date lang={home.date} />
        </div>
        <div className="flex w-full h-full justify-end">
          <CircularPattern justify="end" diameter={96} className={"translate-x-8 -translate-y-48"} />
        </div>
      </div>
      <H3Ribbon2 lang={home.h3Ribon2} />
    </section>
  );
};

export default Hero;
