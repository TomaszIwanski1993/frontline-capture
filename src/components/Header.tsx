import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import wordmarkQuantum from "@/assets/wordmark-quantum.svg";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitch from "@/components/LanguageSwitch";
import { useT } from "@/hooks/useT";

const Header = () => {
  const [open, setOpen] = useState(false);
  const t = useT();

  const navLinks = [
    { label: t.nav.problem, href: "#problem" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.outcomes, href: "#outcomes" },
    { label: t.nav.whyQuantum, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-lg bg-background/90 h-16 lg:h-20">
      <div className="section-container flex items-center justify-between h-full overflow-visible">
        <a href="/" className="flex items-center shrink-0 overflow-visible">
          <Logo alt="Quantum" className="h-44 lg:h-52 w-auto -my-14 lg:-my-16" />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitch />
          <ThemeToggle />
          <a href="#pilot" className="cta-button text-sm px-6 py-2.5 inline-block">
            {t.nav.bookDemo}
          </a>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={t.nav.toggleMenu}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <nav className="section-container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <LanguageSwitch />
              <ThemeToggle />
            </div>
            <a href="#pilot" onClick={() => setOpen(false)} className="cta-button text-sm px-6 py-2.5 text-center mt-2">
              {t.nav.bookDemo}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
