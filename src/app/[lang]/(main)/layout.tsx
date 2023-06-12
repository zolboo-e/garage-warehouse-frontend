import { use } from "react";

import { getDictionary } from "@/i18n/dictionaries";
import { classNames } from "@/utils/class_names";

import { Header } from "./header";
import { Sidebar } from "./sidebar";

const MainLayout: React.Layout = ({ children, params }) => {
  const dict = use(getDictionary(params.lang));

  return (
    <div className="grid h-screen w-screen grid-cols-[160px,1fr]">
      <div className="row-span-2">
        <Sidebar lang={params.lang} translations={{ sidebar: dict.sidebar }} />
      </div>
      <div className="grid h-screen w-full grid-rows-[52px,1fr]">
        <Header translations={{ header: dict.header, sidebar: dict.sidebar }} />
        <div className="relative h-full overflow-auto">{children}</div>
      </div>
    </div>
  );
};
export default MainLayout;
