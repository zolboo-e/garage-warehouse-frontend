//
import { ChevronDown } from "@/assets/icons/1.0x/chevron_down";
import { Import } from "@/assets/icons/1.0x/import";
import { Button } from "@/shared/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/dropdown_menu";
import { SearchInput } from "@/shared/search_input";
import { classNames } from "@/utils/class_names";

export const StockTableFilter: React.FC = () => {
  return (
    <div className="flex items-end justify-between">
      <div className="flex items-end gap-x-4">
        <div className="flex gap-x-2">
          <div>
            <label className="mb-1 text-xs">Warehouse</label>
            <WarehouseFilter />
          </div>
          <div>
            <label className="mb-1 text-xs">Category</label>
            <CategoriesFilter />
          </div>
          <div>
            <label className="mb-1 text-xs">Filter</label>

            <AdvancedFilter />
          </div>
        </div>
        <SearchInput placeholder={`Search`} className="max-w-xs" />
        <div className="h-9 border border-[#E8E8E8]" />
        <Button>
          <Import className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>
    </div>
  );
};

const WarehouseFilter: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          My Warehouse
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuRadioGroup value="1" onValueChange={(value) => {}}>
          {[
            { id: "1", name: "Warehouse 1" },
            { id: "2", name: "Warehouse 2" },
          ].map((column) => {
            return (
              <DropdownMenuRadioItem key={column.id} value={column.id}>
                {column.name}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const CategoriesFilter: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          All Categories
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuRadioGroup value="1" onValueChange={(value) => {}}>
          {[
            { id: "1", name: "Category 1" },
            { id: "2", name: "Category 2" },
          ].map((column) => {
            return (
              <DropdownMenuRadioItem key={column.id} value={column.id}>
                {column.name}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const AdvancedFilter: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          All
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuRadioGroup value="1" onValueChange={(value) => {}}>
          {[
            { id: "1", name: "Filter 1" },
            { id: "2", name: "Filter 2" },
          ].map((column) => {
            return (
              <DropdownMenuRadioItem key={column.id} value={column.id}>
                {column.name}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
