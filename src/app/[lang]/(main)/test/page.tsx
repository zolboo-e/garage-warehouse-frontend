import { Button } from "@/shared/button";
import { ChevronDown } from "@/assets/icons/1.5x/chevron_down";
import { Input } from "@/shared/input";
import { SearchInput } from "@/shared/search_input";
import { MessageQuestion } from "@/assets/icons/1.0x/message_question";

const TestPage: React.Page = () => {
  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
      <Button>Default</Button>
      <Button variant="error">Error</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>

      {/* <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button> */}

      <Button>
        <MessageQuestion className="mr-2 h-4 w-4" />
        Leading icon
      </Button>
      <Button>
        Trailing icon
        <ChevronDown className="ml-2 h-4 w-4" />
      </Button>

      <Input placeholder="Search" className="max-w-xs" />
      <SearchInput placeholder="Search" className="max-w-xs" />
    </main>
  );
};
export default TestPage;
