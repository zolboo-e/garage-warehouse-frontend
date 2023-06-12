"use client";

import { useSelectedLayoutSegment } from "next/navigation";

export const HeaderTitle: React.FC<React.Translations<"sidebar">> = ({
  translations,
}) => {
  const segment = useSelectedLayoutSegment();

  const segmentToTitle = (segment: string | null) => {
    if (segment === null || segment === "parts") {
      return translations.sidebar.parts;
    }
    if (segment === "purchases") {
      return translations.sidebar.purchases;
    }
    if (segment === "sales") {
      return translations.sidebar.sales;
    }

    return "UNKNOWN";
  };

  return <div className="">{segmentToTitle(segment)}</div>;
};
