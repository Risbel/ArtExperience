import Image from "next/image";

const contactInfo = [
  {
    imageUrl: "/locate-svgrepo-com.svg",
    alt: "locate",
    width: 30,
    height: 30,
    text: "822 665 374 / 605 620 857",
    textSize: "",
  },
  {
    imageUrl: "/mail-svgrepo-com.svg",
    alt: "mail",
    width: 30,
    height: 30,
    text: "info@roca.es",
    textSize: "",
  },
  {
    imageUrl: "/phone-flip-svgrepo-com.svg",
    alt: "phone",
    width: 30,
    height: 30,
    text: "www.roca.es",
    textSize: "",
  },
  {
    imageUrl: "/worldwide-internet-svgrepo-com.svg",
    alt: "worldwide",
    width: 30,
    height: 30,
    text: (
      <span>
        Calle Tagara 16 Res <br /> Las Torres Local 7,38670 Adeje, TF.
      </span>
    ),
    textSize: "",
  },
];

const ContactInfo = () => {
  return (
    <div>
      <div className="bg-white/20 backdrop-blur-sm w-12 h-72 absolute -z-0 rounded-t-xl"></div>
      <div className="translate-y-4 flex flex-col gap-3">
        {contactInfo.map((item, i) => (
          <div className="flex gap-5 relative z-20 pl-2" key={i}>
            <Image className="scale-75" src={item.imageUrl} alt={item.alt} width={item.width} height={item.height} />
            <p className="text-white text-md lg:text-xl font-light">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
