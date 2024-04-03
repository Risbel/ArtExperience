import Image from "next/image";
import React from "react";

const ContactByWhatsapp = () => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={"https://wa.me/+34 671 371 877"} className="hover:scale-105">
      <Image className="h-8 w-8" src={"/whatsapp-icon.svg"} height={50} width={50} alt="facebook icon" />
    </a>
  );
};

export default ContactByWhatsapp;
