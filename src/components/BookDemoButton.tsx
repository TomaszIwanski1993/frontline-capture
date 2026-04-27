import { forwardRef } from "react";
import { useBookDemo } from "@/contexts/BookDemoContext";
import { cn } from "@/lib/utils";

interface BookDemoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

const BookDemoButton = forwardRef<HTMLButtonElement, BookDemoButtonProps>(
  ({ className, variant = "primary", onClick, type = "button", children, ...props }, ref) => {
    const { openDialog } = useBookDemo();
    const base = variant === "outline" ? "btn-outline" : "cta-button";
    return (
      <button
        ref={ref}
        type={type}
        onClick={(e) => {
          openDialog();
          onClick?.(e);
        }}
        className={cn(base, "inline-block", className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);
BookDemoButton.displayName = "BookDemoButton";

export default BookDemoButton;
