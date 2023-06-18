import "server-only";

import { headers } from "next/headers";

import { type Locale, config } from ".";

export const getLocale = (): Locale => {
  const pathname = headers().get("x-invoke-path");
  const locale =
    config.locales.find((locale) => pathname?.startsWith(`/${locale}`)) ??
    config.defaultLocale;

  return locale;
};
