import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-quantum.svg";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
      <div className="section-container flex items-center justify-between h-16 lg:h-20">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="Quantum" className="h-10 lg:h-12" />
          <span className="text-xl lg:text-2xl font-bold tracking-tight text-foreground font-display">Quantum</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <a href="#pilot" className="cta-button text-sm px-6 py-2.5 inline-block">
            Book a Demo
          </a>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <nav className="section-container py-6 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
            <a href="#pilot" onClick={() => setOpen(false)} className="cta-button text-sm px-6 py-2.5 text-center mt-2">
              Book a Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
