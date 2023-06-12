"use client";

import { type Route } from "next";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";

import { localizedPathname, type Locale } from "@/i18n";
import { Tabs, TabsList, TabsTrigger } from "@/shared/tabs";

interface PartsTabsProps {
  lang: Locale;
}
export const PartsTabs: React.FC<PartsTabsProps> = ({ lang }) => {
  const segment = useSelectedLayoutSegment();
  const router = useRouter();

  return (
    <Tabs
      value={segment ?? undefined}
      onValueChange={(value) => {
        const href = items.find(({ key }) => key === value)?.href;

        router.push(localizedPathname(lang, href!));
      }}
    >
      <TabsList className="flex justify-start overflow-auto">
        {items.map(({ key, label }) => {
          return (
            <TabsTrigger key={key} value={key}>
              {label}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
};

interface TabItem {
  href: Route;
  key: string;
  label: string;
}
const items: TabItem[] = [
  {
    href: "/parts",
    key: "stocks",
    label: "Stock",
  },
  {
    href: "/parts/postings",
    key: "postings",
    label: "Postings",
  },
  {
    href: "/parts/write_offs",
    key: "write_offs",
    label: "Write-offs",
  },
  {
    href: "/parts/transfers",
    key: "transfers",
    label: "Transfers",
  },
  {
    href: "/parts/stock_takes",
    key: "stock_takes",
    label: "Stock takes",
  },
  {
    href: "/parts/products",
    key: "products",
    label: "Categories and Products",
  },
];
