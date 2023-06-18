import "server-only";

import { headers } from "next/headers";
import { use } from "react";

import { type Locale, config } from ".";
import { getDictionary } from "./dictionaries";

export const getLocale = (): Locale => {
  const pathname = headers().get("x-invoke-path");
  const locale =
    config.locales.find((locale) => pathname?.startsWith(`/${locale}`)) ??
    config.defaultLocale;

  return locale;
};
export const getTranslations = () => {
  const locale = getLocale();
  const dict = use(getDictionary(locale));

  return dict;
};
