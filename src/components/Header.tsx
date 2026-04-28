import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import headerLogo from "@/assets/logo-quantum-header-light.svg";

import LanguageSwitch from "@/components/LanguageSwitch";
import BookDemoButton from "@/components/BookDemoButton";
import { useT } from "@/hooks/useT";

const Header = () => {
  const [open, setOpen] = useState(false);
  const t = useT();

  const navLinks = [
    { label: t.nav.problem, href: "/#problem", type: "anchor" as const },
    { label: t.nav.whyQuantum, href: "/#about", type: "anchor" as const },
    { label: t.nav.howItWorks, href: "/#how-it-works", type: "anchor" as const },
    { label: t.nav.outcomes, href: "/#outcomes", type: "anchor" as const },
    { label: t.nav.contact, href: "/#contact", type: "anchor" as const },
  ];

  const renderLink = (link: typeof navLinks[number], onClick?: () => void) => {
    const className =
      "text-sm text-muted-foreground hover:text-foreground transition-colors duration-200";
    return (
      <a key={link.href} href={link.href} className={className} onClick={onClick}>
        {link.label}
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-lg bg-background/90 h-24 lg:h-28">
      <div className="section-container flex items-center justify-between h-full">
        <Link
          to="/"
          aria-label="Go to homepage"
          onClick={(e) => {
            e.preventDefault();
            if (window.location.pathname !== "/") {
              window.history.pushState({}, "", "/");
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
            document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
            document.body.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="relative z-10 flex items-center shrink-0 h-full overflow-visible cursor-pointer pointer-events-auto"
        >
          <img
            src={headerLogo}
            alt="Quantum Making"
            loading="eager"
            className="h-[120px] lg:h-[160px] w-auto block origin-left -my-8 pointer-events-none"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => renderLink(link))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <LanguageSwitch />
          <BookDemoButton className="text-sm px-6 py-2.5">
            {t.nav.bookDemo}
          </BookDemoButton>
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
            {navLinks.map((link) => renderLink(link, () => setOpen(false)))}
            <div className="flex items-center gap-3 pt-2">
              <LanguageSwitch />
            </div>
            <BookDemoButton onClick={() => setOpen(false)} className="text-sm px-6 py-2.5 text-center mt-2 w-full">
              {t.nav.bookDemo}
            </BookDemoButton>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
