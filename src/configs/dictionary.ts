import "server-only";
import type { Locale } from "@/configs/i18n.config";

const dictionaries = {
  en: () => import("../../dictionaries/en.json").then((r) => r.default),
  es: () => import("../../dictionaries/es.json").then((r) => r.default),
};

export const getDictionary = async (locale: Locale) => dictionaries?.[locale]?.() ?? dictionaries.en();
