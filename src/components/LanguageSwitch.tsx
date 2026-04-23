import { Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const options: { value: Language; label: string }[] = [
  { value: "en", label: "English" },
  { value: "pl", label: "Polski" },
];

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();
  const current = language ?? "en";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        aria-label="Select language"
      >
        <Globe className="h-3.5 w-3.5" strokeWidth={1.75} />
        <span className="uppercase tracking-wide">{current}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[8rem]">
        {options.map((opt) => (
          <DropdownMenuItem
            key={opt.value}
            onClick={() => setLanguage(opt.value)}
            className="text-sm cursor-pointer flex items-center justify-between"
          >
            <span>{opt.label}</span>
            {current === opt.value && <Check className="h-3.5 w-3.5 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitch;
