import React from "react";
import ContactInfo from "./ContactInfo";

const Footer = () => {
  return (
    <div className="relative h-72 w-full overflow-hidden">
      <div className="absolute z-30 top-8 left-3 lg:left-12">
        <ContactInfo />
      </div>

      <div className="absolute -z-10 bg-primary backdrop-blur-xl h-full w-full"></div>
    </div>
  );
};

export default Footer;
