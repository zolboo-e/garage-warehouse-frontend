import { Check } from "@/assets/icons/1.5x/check";
import { Trash } from "@/assets/icons/1.5x/trash";
import { Button } from "@/shared/button";
import { Input } from "@/shared/input";
import { Label } from "@/shared/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/tabs";

type StockDetailsSheetProps = {
  id: number;
};
export const StockDetailsSheet: React.FC<StockDetailsSheetProps> = ({ id }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Details</Button>
      </SheetTrigger>
      <SheetContent className="p-0" size="lg">
        <Tabs defaultValue="general">
          <SheetHeader className="border-b">
            <div className="p-4 ">
              <SheetTitle>{id}</SheetTitle>
              <TabsList className="mt-2 flex justify-start overflow-auto">
                {items.map(({ key, label }) => {
                  return (
                    <TabsTrigger key={key} value={key}>
                      {label}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>
          </SheetHeader>
          <div className="p-4">
            {items.map(({ content, key, label }) => {
              return (
                <TabsContent key={key} value={key}>
                  {content}
                </TabsContent>
              );
            })}
          </div>
          <SheetFooter className="fixed bottom-0 w-full border-t">
            <div className="flex w-full justify-between p-4">
              <Button variant="success">
                <Check className="mr-2 h-4 w-4" />
                Save
              </Button>
              <SheetClose asChild>
                <Button type="submit" variant="error">
                  <Trash className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </SheetClose>
            </div>
          </SheetFooter>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};

interface TabItem {
  content: React.ReactNode;
  key: string;
  label: string;
}
const items: TabItem[] = [
  {
    content: <div>General</div>,
    key: "general",
    label: "General",
  },
  {
    content: <div>Orders</div>,
    key: "orders",
    label: "Orders",
  },
  {
    content: <div>Sales</div>,
    key: "sales",
    label: "Sales",
  },
  {
    content: <div>Stock</div>,
    key: "stock",
    label: "Stock",
  },
  {
    content: <div>Compatible</div>,
    key: "compatible",
    label: "Compatible",
  },
  {
    content: <div>Detail</div>,
    key: "detail",
    label: "Detail",
  },
];
