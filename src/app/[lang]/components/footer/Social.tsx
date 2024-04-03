import Image from "next/image";
import Link from "next/link";

const Social = () => {
  return (
    <div className="flex justify-center pt-6 md:pt-0">
      <div className="flex items-center gap-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.facebook.com/damtenerife.tenerife"}
          className="hover:scale-105"
        >
          <Image
            className="h-6 w-6 lg:h-12 lg:w-12"
            src={"/facebook-icon.svg"}
            height={50}
            width={50}
            alt="facebook icon"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.instagram.com/damtenerife/"}
          className="hover:scale-105"
        >
          <Image
            className="h-6 w-6 lg:h-12 lg:w-12"
            src={"/instagram-icon.svg"}
            height={50}
            width={50}
            alt="instagram icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Social;
