"use client";

import { i18n } from "@/configs/i18n.config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Switcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className="flex items-center gap-1">
      {i18n.locales.map((locale) => {
        return (
          <Link
            key={locale}
            href={redirectedPathName(locale)}
            className="flex items-center rounded-xl border bg-primary shadow-xl scale-125 px-1 py-1 text-white"
          >
            {locale}
          </Link>
        );
      })}
    </ul>
  );
}
