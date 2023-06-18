import { PageLayout } from "../page_layout";
import { Test } from "./test";

const DashboardPage: React.Page = () => {
  return (
    <PageLayout>
      <main>
        Dashboard Page
        <Test />
      </main>
    </PageLayout>
  );
};
export default DashboardPage;
