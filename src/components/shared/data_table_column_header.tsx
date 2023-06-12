//
import { type Column } from "@tanstack/react-table";
// import { ChevronsUpDown, EyeOff, SortAsc, SortDesc } from "lucide-react";
import * as React from "react";

//
import { Button } from "@/shared/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/dropdown_menu";
import { classNames } from "@/utils/class_names";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export const DataTableColumnHeader = <TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) => {
  if (!column.getCanSort()) {
    return <div className={classNames(className)}>{title}</div>;
  }

  return (
    <div className={classNames("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="-ml-3 h-8 data-[state=open]:bg-accent">
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              // <SortDesc className="ml-2 h-4 w-4" />
              <div className="ml-2 h-4 w-4 bg-red-400" />
            ) : column.getIsSorted() === "asc" ? (
              // <SortAsc className="ml-2 h-4 w-4" />
              <div className="ml-2 h-4 w-4 bg-red-400" />
            ) : (
              // <ChevronsUpDown className="ml-2 h-4 w-4" />
              <div className="ml-2 h-4 w-4 bg-red-400" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            {/* <SortAsc className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" /> */}
            <div className="mr-2 h-3.5 w-3.5 bg-red-400 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            {/* <SortDesc className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" /> */}
            <div className="mr-2 h-3.5 w-3.5 bg-red-400 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            {/* <EyeOff className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" /> */}
            <div className="mr-2 h-3.5 w-3.5 bg-red-400 text-muted-foreground/70" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
