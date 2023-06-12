import { type Locale } from "@/i18n";
import { type Translations as _Translations } from "@/i18n/dictionaries";

declare module "react" {
  export declare type FCC<P = {}> = FC<P & { children?: ReactNode }>;
  export declare type Page<P = {}, SP = {}> = FC<RouterParams<P, SP>>;
  export declare type Layout<P = {}, SP = {}> = FCC<RouterParams<P, SP>>;
  export declare type Translations<T extends keyof _Translations> = {
    translations: Pick<_Translations, T>;
  };
}

declare type RouterParams<P = {}, SP = {}> = {
  params: P & {
    lang: Locale;
  };
  searchParams: SP;
};
