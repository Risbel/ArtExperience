import { getDictionary } from "@/configs/dictionary";
import { Locale } from "@/configs/i18n.config";
import Image from "next/image";

const contactInfo = [
  {
    imageUrl: "/locate-svgrepo-com.svg",
    alt: "locate",
    width: 30,
    height: 30,
    text: (
      <span>
        Ave. Juan Carlos I, 20 Edf. Royal Local A2, <br /> 38650 Los Cristianos, Santa Cruz de Tenerife
      </span>
    ),
    textSize: "",
    redirect:
      "https://www.google.com/maps/place/Dam+Tenerife+S.L.U./@28.054358,-16.712768,15z/data=!4m6!3m5!1s0xc6a9766e50ef003:0xf4ea759faa8775a4!8m2!3d28.054358!4d-16.712768!16s%2Fg%2F11y31g9sc?entry=ttu",
  },
  {
    imageUrl: "/mail-svgrepo-com.svg",
    alt: "mail",
    width: 30,
    height: 30,
    text: "anastasia@dam-tenerife.es",
    textSize: "",
    redirect: "mailto:anastasia@dam-tenerife.es",
  },
  {
    imageUrl: "/phone-flip-svgrepo-com.svg",
    alt: "phone",
    width: 30,
    height: 30,
    text: "+34 671 371 877",
    textSize: "",
    redirect: "tel:+34 671 371 877",
  },
  {
    imageUrl: "/worldwide-internet-svgrepo-com.svg",
    alt: "worldwide",
    width: 30,
    height: 30,
    text: "dam-tenerife.es",
    textSize: "",
    redirect: "https://dam-tenerife.es/",
  },
];

const ContactInfo = async ({ lang }: { lang: Locale }) => {
  const { footer } = await getDictionary(lang);

  return (
    <div>
      <div className="bg-white/20 backdrop-blur-sm w-12 h-72 absolute -z-0 rounded-t-xl"></div>
      <div className="translate-y-4 flex flex-col gap-3">
        {contactInfo.map(
          (item, i) =>
            item.redirect && (
              <a
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                href={`${item.redirect}`}
                className="flex gap-5 relative z-20 pl-2 group"
              >
                <Image
                  className="scale-75 group-hover:scale-90"
                  src={item.imageUrl}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                />

                <span className="text-white text-md lg:text-xl font-light group-hover:translate-x-2 transition-transform">
                  {item.text}
                </span>
              </a>
            )
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
