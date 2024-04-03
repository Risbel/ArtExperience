import Image from "next/image";
import React from "react";

const ContactByWhatsapp = () => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={"https://wa.me/+34 671 371 877"}
      className="fixed right-2 lg:right-12 z-[40] top-12 rounded-xl overflow-hidden lg:hover:scale-125 lg:transition-transform lg:hidden"
    >
      <Image className="h-8 w-8" src={"/whatsapp-icon.svg"} height={50} width={50} alt="facebook icon" />
    </a>
  );
};

export default ContactByWhatsapp;
