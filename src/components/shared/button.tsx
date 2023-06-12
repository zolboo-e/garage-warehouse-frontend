import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { classNames } from "@/utils/class_names";

const buttonVariants = cva(
  classNames(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors ring-offset-background whitespace-nowrap",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none"
  ),
  {
    variants: {
      variant: {
        default: classNames(
          "bg-ghost-white text-ghost-white-foreground",
          "hover:bg-[#D3D3D3]/50",
          "active:bg-primary active:text-primary-foreground"
        ),
        error: classNames(
          "bg-error text-primary-foreground",
          "hover:drop-shadow-[0_4px_8px_rgba(255,89,94,0.5)]"
        ),
        success: classNames(
          "bg-success text-primary-foreground",
          "hover:drop-shadow-[0_4px_8px_rgba(138,201,38,0.5)]"
        ),
        warning: classNames(
          "bg-warning text-primary-foreground",
          "hover:drop-shadow-[0_4px_8px_rgba(255,202,58,0.5)]"
        ),

        // default: "",
        // ghost: "",
        // link: "",
        // outline: "",

        // default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // destructive:
        //   "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // outline:
        //   "border border-input hover:bg-accent hover:text-accent-foreground",
        // secondary:
        //   "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // ghost: "hover:bg-accent hover:text-accent-foreground",
        // link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-9 py-2 px-4",
        // sm: "h-9 px-3 rounded-md",
        // lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={classNames(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
