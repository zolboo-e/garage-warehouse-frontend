"use client";

//
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";
import * as React from "react";

//
import { ChevronDown } from "@/assets/icons/1.0x/chevron_down";
import { Stock } from "@/db/schemas/stock";
import { Button } from "@/shared/button";
import { Checkbox } from "@/shared/checkbox";
import { DataTable } from "@/shared/data_table";
import { DataTableColumnHeader } from "@/shared/data_table_column_header";
import { DataTablePagination } from "@/shared/data_table_pagination";
import { DataTableViewOptions } from "@/shared/data_table_view_options";
import { classNames } from "@/utils/class_names";

//
import { StockTableFilter } from "./stocks_table_filter";

//
// import { StockDetailsSheet } from "./stock_details_sheet";

const columns: ColumnDef<Stock>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const image = row.getValue<string | null>("image");

      // TODO: default image
      if (!image) {
        return <div className="h-6 w-6 bg-red-400" />;
      }

      return <Image src={image} height={24} width={24} alt="" />;
    },
  },
  // {
  //   accessorKey: "category",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Category
  //         <ChevronDown className="ml-2 h-4 w-4" />
  //       </Button>
  //     );
  //   },

  //   cell: ({ row }) => {
  //     const image = row.getValue<string>("image");

  //     return <Image src={image} height={24} width={24} alt="" />;
  //   },
  // },
  // {
  //   accessorKey: "brand",
  //   header: "Brand",
  // },
  {
    accessorKey: "name",
    header: "Name",
  },
  // {
  //   accessorKey: "condition",
  //   header: "Condition",
  //   cell: ({ row }) => {
  //     const condition = row.getValue<"old" | "new">("condition");

  //     return <div>{condition.toUpperCase()}</div>;
  //   },
  // },
  // {
  //   accessorKey: "in_stock",
  //   header: "In stock",
  //   cell: ({ row }) => {
  //     const inStock = row.getValue<number>("in_stock");

  //     return <div className="text-right">{inStock}</div>;
  //   },
  // },
  // {
  //   accessorKey: "min_stock",
  //   header: "Min stock",
  //   cell: ({ row }) => {
  //     const minStock = row.getValue<number>("min_stock");

  //     return <div className="text-right">{minStock ?? "-"}</div>;
  //   },
  // },
  // {
  //   accessorKey: "service_price",
  //   header: () => <div className="text-right">Service price</div>,
  //   cell: ({ row }) => {
  //     const price = row.getValue<number | undefined>("service_price");

  //     return (
  //       <div className="text-right">
  //         {typeof price === "undefined" ? "-" : price}
  //       </div>
  //     );
  //   },
  // },
  // {
  //   accessorKey: "store_price",
  //   header: () => <div className="text-right">Store price</div>,
  //   cell: ({ row }) => {
  //     const price = row.getValue<number>("store_price");

  //     return <div className="text-right">{price}</div>;
  //   },
  // },
  // {
  //   accessorKey: "hasWarranty",
  //   header: "Warranty",
  //   cell: ({ row }) => {
  //     const hasWarranty = row.getValue<boolean>("hasWarranty");

  //     return (
  //       <div
  //         className={classNames(
  //           "h-4 w-4 bg-error",
  //           hasWarranty && "bg-success"
  //         )}
  //       />
  //     );
  //   },
  // },

  // {
  //   id: "details",
  //   cell: ({ row }) => {
  //     const name = row.getValue<string>("name");

  //     return <StockDetailsSheet id={row.original.id} name={name} />;
  //   },
  // },
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const payment = row.original;

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="success" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             {/* <MoreHorizontal className="h-4 w-4" /> */}
  //             <div className="h-4 w-4 bg-red-400" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];
// type Stock = {
//   id: string;
//   category: string;
//   brand?: string;
//   image?: string;
//   name: string;
//   condition: "old" | "new";
//   in_stock: number;
//   min_stock?: number;
//   store_price: number;
//   service_price?: number;
//   status: "pending" | "processing" | "success" | "failed";
//   hasWarranty: boolean;
// };

interface StocksTableProps {
  data: Stock[];
}
export const StocksTable: React.FC<StocksTableProps> = ({ data }) => {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    columns,
    data,
    state: {
      columnFilters,
      columnVisibility,
      sorting,
      rowSelection,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
  });

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-end justify-between">
        <StockTableFilter />
        <DataTableViewOptions table={table} />
      </div>
      <DataTable columns={columns} table={table} />
      <DataTablePagination table={table} />
    </div>
  );
};
