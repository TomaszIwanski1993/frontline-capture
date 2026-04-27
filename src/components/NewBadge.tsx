import { cn } from "@/lib/utils";

interface NewBadgeProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Inline badge that highlights the word "NEW" (or any short tag) with the
 * brand primary color, a soft glow and a subtle pulse — consistent with the
 * site's design tokens.
 */
const NewBadge = ({ className, children = "NEW" }: NewBadgeProps) => {
  return (
    <span
      className={cn(
        "relative inline-flex items-center px-2 py-0.5 mx-1 rounded-md",
        "text-[0.7em] font-bold tracking-[0.15em] uppercase leading-none",
        "bg-primary text-primary-foreground",
        "shadow-[0_0_12px_hsl(var(--primary)/0.55)]",
        "animate-pulse",
        "align-middle",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default NewBadge;
