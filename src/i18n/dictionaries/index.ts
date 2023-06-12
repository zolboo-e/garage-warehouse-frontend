import "server-only";

import { type Locale } from "@/i18n";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  mn: () => import("./mn.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale = "mn") =>
  dictionaries[locale]();
export type Translations = Awaited<ReturnType<typeof getDictionary>>;
