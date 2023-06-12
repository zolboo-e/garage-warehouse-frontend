"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

import { type Locale } from "@/i18n";
import { ChevronDown } from "@/assets/icons/1.5x/chevron_down";
import { classNames } from "@/utils/class_names";

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  _key: string;
}
export const SidebarItem: React.FC<SidebarItemProps> = ({
  href,
  icon,
  label,
  _key,
}) => {
  const segments = useSelectedLayoutSegments();

  return (
    <Link
      className={classNames(
        "relative flex items-center gap-x-2 px-2 py-4 text-sm font-semibold text-primary-foreground",
        "hover:bg-ghost-white hover:text-ghost-white-foreground",
        segments[0] === _key && "bg-ghost-white text-ghost-white-foreground"
      )}
      href={href}
    >
      <div className={classNames("h-4 w-4", "hover:text-primary")}>{icon}</div>
      <p className="w-full">{label}</p>
      <ChevronDown className="h-4 w-4 shrink-0 text-primary" />
    </Link>
  );
};
