import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { type NextRequest } from "next/server";

export const config = {
  defaultLocale: "mn",
  locales: ["en", "mn"],
} as const;

// export const getLocale = (request: NextRequest) => {
//   const headers = Object.fromEntries(request.headers.entries());
//   const languages = new Negotiator({ headers }).languages();

//   // @ts-ignore
//   return match(languages, config.locales, config.defaultLocale);
// };
export const localizedPathname = (lang: Locale, href: string) => {
  // ignore default locale
  return lang === config.defaultLocale ? `${href}` : `/${lang}${href}`;
};
export type Locale = (typeof config)["locales"][number];
