import { ChevronDown } from "@/assets/icons/1.0x/chevron_down";
import { Glass } from "@/assets/icons/1.0x/glass";
import { MessageQuestion } from "@/assets/icons/1.0x/message_question";
import { getTranslations } from "@/i18n/server";
import { Button } from "@/shared/button";
import { SearchInput } from "@/shared/search_input";

import { HeaderTitle } from "./header_title";
import { LanguageSwitcher } from "./language_switcher";

export const Header: React.FC = () => {
  const translations = getTranslations();

  return (
    <header className="flex items-center justify-between bg-white px-4 py-2">
      <HeaderTitle translations={{ sidebar: translations.sidebar }} />
      <div className="flex items-center gap-x-4">
        <SearchInput
          placeholder={translations.header.search}
          className="max-w-xs"
        />
        <Button className="whitespace-nowrap">
          <Glass className="mr-2 h-4 w-4" />
          {translations.header.instructions}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
        <Button>
          <MessageQuestion className="mr-2 h-4 w-4" />
          {translations.header.help}
        </Button>
        <LanguageSwitcher />
      </div>
    </header>
  );
};
