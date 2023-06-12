import * as React from "react";

import { classNames } from "@/utils/class_names";

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={classNames(
          "flex h-10 w-full rounded-md border border-input bg-white px-4 py-2 text-sm ring-offset-background",
          "bg-[url('/search.svg')] bg-right bg-no-repeat bg-origin-content",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
SearchInput.displayName = "SearchInput";

export { SearchInput };
