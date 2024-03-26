"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

import { i18n } from "@/configs/i18n.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDictionary } from "@/providers/DictionaryProvider";
import * as flagsObj from "./flags.json";

const NavbarDropdown = () => {
  const pathName = usePathname();
  const { dropdown } = useDictionary();
  const { flags } = flagsObj;

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image
          className="bg-secondary rounded-md"
          src={"/language-translate-icon.svg"}
          height={30}
          width={30}
          alt="language translate icon"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="translate-x-4 rounded-xl">
        <DropdownMenuLabel>{dropdown.title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {i18n.locales.map((locale, i) => {
          return (
            <DropdownMenuItem key={locale}>
              <Link
                key={locale}
                href={redirectedPathName(locale)}
                className="flex w-full gap-2 text-xs items-center rounded-xl border hover:sshadow-xl hover:scale-105 transition-transform p-2 py-1 text-primary bg-white"
              >
                <Image src={flags[i].src} width={flags[i].width} height={flags[i].height} alt={flags[i].alt} />
                {dropdown.languages[i]}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarDropdown;
