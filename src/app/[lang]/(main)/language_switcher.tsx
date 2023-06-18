"use client";

import { usePathname, useRouter } from "next/navigation";

import { useGlobalTransition } from "@/hooks";
import { config } from "@/i18n";
import { ChevronDown } from "@/icons/1.0x/chevron_down";
import { Button } from "@/shared/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/shared/dropdown_menu";

export const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { startTransition } = useGlobalTransition();

  const locale =
    config.locales.find(
      (locale) =>
        pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    ) ?? config.defaultLocale;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          Language
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(value) => {
            if (value === locale) {
              return;
            }
            startTransition(() => {
              if (value === config.defaultLocale) {
                router.push(pathname.replace(locale, value));
                return;
              }

              if (locale) router.push(`/${value}${pathname}`);
            });
          }}
        >
          {config.locales.map((locale) => {
            return (
              <DropdownMenuRadioItem key={locale} value={locale}>
                {locale}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
