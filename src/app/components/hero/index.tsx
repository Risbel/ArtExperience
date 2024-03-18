import H1Title from "./H1Title";
import H3Ribbon from "./H3Ribbon";
import H2Caption from "./H2Caption";
import H4Date from "./H4Date";
import ButtonSuscribe from "./ButtonSuscribe";
import Pattern1 from "./Pattern1";
import Pattern2 from "./Pattern2";
import CircularPattern from "./CircularPattern";

const Hero = () => {
  return (
    <div className="flex flex-col bg-secondary">
      <div className="relative mx-6 mt-4 lg:mx-12 lg:mt-8 border-4 border-dotted border-[#ccc4aa] border-b-0 overflow-hidden">
        <CircularPattern className={"-translate-x-36 -translate-y-36"} />

        <Pattern1 />
        <div className="flex justify-center relative z-20 p-6 md:p-2">
          <H1Title />
        </div>
      </div>
      <H3Ribbon />
      <div className="relative flex flex-col gap-4 mx-6 mb-4 lg:mx-12 lg:mb-8 border-4 border-dotted border-[#ccc4aa] border-t-0 overflow-hidden">
        <Pattern2 />
        <div className="flex flex-col gap-6 lg:gap-8 relative z-50">
          <H2Caption />
          <H4Date />
          <div className="flex justify-center py-4 lg:py-6">
            <ButtonSuscribe />
          </div>
        </div>
        <div className="flex w-full h-full justify-end">
          <CircularPattern justify="end" diameter={96} className={"translate-x-8 -translate-y-48"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
