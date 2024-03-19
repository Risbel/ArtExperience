import Image from "next/image";
import Link from "next/link";

const Social = () => {
  return (
    <div className="flex justify-center pt-6 md:pt-0">
      <div className="flex items-center gap-4">
        <Link href={"/#"} className="hover:scale-105">
          <Image
            className="h-6 w-6 lg:h-12 lg:w-12"
            src={"/facebook-icon.svg"}
            height={50}
            width={50}
            alt="facebook icon"
          />
        </Link>
        <Link href={"/#"} className="hover:scale-105">
          <Image
            className="h-6 w-6 lg:h-12 lg:w-12"
            src={"/instagram-icon.svg"}
            height={50}
            width={50}
            alt="instagram icon"
          />
        </Link>
        <Link href={"/#"} className="hover:scale-105">
          <Image
            className="h-6 w-6 lg:h-12 lg:w-12"
            src={"/twitter-icon.svg"}
            height={50}
            width={50}
            alt="twiter icon"
          />
        </Link>
        <Link href={"/#"} className="hover:scale-105">
          <Image
            className="h-6 w-6 lg:h-12 lg:w-12"
            src={"/youtube-icon.svg"}
            height={50}
            width={50}
            alt="youtube icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default Social;
