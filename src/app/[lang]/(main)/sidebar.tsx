import { Boxes } from "@/assets/icons/solid/boxes";
import { Cart } from "@/assets/icons/solid/cart";
import { Money } from "@/assets/icons/solid/money";
import { localizedPathname } from "@/i18n";
import { getLocale, getTranslations } from "@/i18n/server";

import { SidebarItem } from "./sidebar_item";

export const Sidebar: React.FC = () => {
  const locale = getLocale();
  const translations = getTranslations();

  const sidebarItems = [
    {
      href: "/parts",
      icon: <Boxes className="h-full w-full" />,
      key: "parts",
      label: translations.sidebar.parts,
    },
    {
      href: "/purchases",
      icon: <Cart className="h-full w-full" />,
      key: "purchases",
      label: translations.sidebar.purchases,
    },
    {
      href: "/sales",
      icon: <Money className="h-full w-full" />,
      key: "sales",
      label: translations.sidebar.sales,
    },
  ];

  return (
    <aside className="h-full bg-primary">
      <div className=" bg-primary px-2 py-4 text-center text-xs text-primary-foreground">
        Garage.mn
      </div>
      <ul>
        {sidebarItems.map(({ key, href, ...props }) => {
          return (
            <li key={key}>
              <SidebarItem
                {...props}
                href={localizedPathname(locale, href)}
                _key={key}
              />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
