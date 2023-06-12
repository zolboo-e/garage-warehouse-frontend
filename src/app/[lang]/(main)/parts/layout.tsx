//

//
import { PageLayout } from "../page_layout";
import { PartsTabs } from "./tabs";

const InventoriesLayout: React.Layout = ({ children, params }) => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-y-4">
        <PartsTabs lang={params.lang} />
        <div className="w-full border border-[#E8E8E8]" />
        {children}
      </div>
    </PageLayout>
  );
};
export default InventoriesLayout;
