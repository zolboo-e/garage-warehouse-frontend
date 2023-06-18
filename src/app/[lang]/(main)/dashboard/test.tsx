import { use } from "react";

import { getLocale } from "@/i18n/server";
import { getDictionary } from "@/i18n/dictionaries";

export const Test: React.FC = () => {
  const locale = getLocale();
  const dict = use(getDictionary(locale));

  return (
    <div>
      <div>{`Locale: ${locale}`}</div>
      {JSON.stringify(dict)}
    </div>
  );
};
