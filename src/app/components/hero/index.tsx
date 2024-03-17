import H1Title from "./H1Title";
import H3Ribbon from "./H3Ribbon";
import H2Caption from "./H2Caption";
import H4Date from "./H4Date";
import ButtonSuscribe from "./ButtonSuscribe";

const Hero = () => {
  return (
    <div className="bg-secondary">
      <div className="flex flex-col justify-between">
        <div className="mx-12 mt-8 border-4 border-dotted border-primary border-b-0">
          <H1Title />
        </div>

        <H3Ribbon />
        <div className="mx-12 mb-8 border-4 border-dotted border-primary border-t-0">
          <H2Caption />
          <H4Date />
          <div className="flex justify-center py-8">
            <ButtonSuscribe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
