import { HomeIcon } from "lucide-react";
import LinkEncoded from "../hero/LinkEncoded";
import { Locale } from "@/configs/i18n.config";
import { getDictionary } from "@/configs/dictionary";
import NavbarDropdown from "./NavbarDropdown";

const Navbar = async ({ lang }: { lang: Locale }) => {
  const { navbar } = await getDictionary(lang);

  return (
    <nav className="fixed w-full flex justify-between items-start z-[100] py-1 px-2 lg:px-4 mt-1">
      <NavbarDropdown />

      <div className="flex lg:gap-2 lg:mr-8 bg-[#514830]/10 backdrop-blur-sm rounded-xl px-2 py-1">
        <a className="hover:-translate-y-[3px] hover:shadow-lg transition-transform duration-300" href="#1">
          <HomeIcon className="stroke-primary fill-white/80" />
        </a>

        <LinkEncoded />
      </div>
    </nav>
  );
};

export default Navbar;
