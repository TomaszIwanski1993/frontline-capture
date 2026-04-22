import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { useT } from "@/hooks/useT";

const FooterSection = () => {
  const t = useT();
  return (
    <footer className="relative z-10 border-t border-border/50 pt-20 pb-10 bg-background">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center mb-6 -ml-3">
              <Logo surface="light" variant="full" className="h-32 lg:h-36 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {t.footer.legalName}<br />
              {t.footer.addressLine1}<br />
              {t.footer.addressLine2}
            </p>
            <div className="mt-5 flex flex-col gap-1.5">
              <a
                href="mailto:info@quantummaking.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                info@quantummaking.com
              </a>
              <a
                href="https://www.linkedin.com/company/quantummaking"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.company}</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">{t.footer.links.about}</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">{t.footer.links.contact}</a></li>
              <li><a href="#resources" className="hover:text-foreground transition-colors">{t.footer.links.resources}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.solutions}</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">{t.footer.links.howItWorks}</a></li>
              <li><a href="#outcomes" className="hover:text-foreground transition-colors">{t.footer.links.outcomes}</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">{t.footer.links.privacy}</Link></li>
              <li><Link to="/cookies" className="hover:text-foreground transition-colors">{t.footer.links.cookies}</Link></li>
            </ul>
          </div>
        </div>

        <div className="subtle-divider mt-14 mb-6" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Quantum Making. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
