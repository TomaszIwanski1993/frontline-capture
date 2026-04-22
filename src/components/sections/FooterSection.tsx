import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { useT } from "@/hooks/useT";

const FooterSection = () => {
  const t = useT();
  return (
    <footer className="relative z-10 border-t border-border/50 py-16 bg-background">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo surface="light" variant="icon" className="h-8 w-auto" />
              <span className="text-lg font-bold text-foreground">Quantum</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.footer.legalName}<br />
              {t.footer.addressLine1}<br />
              {t.footer.addressLine2}
            </p>
            <p className="text-sm text-muted-foreground mt-3">info@quantummaking.com</p>
            <a
              href="https://www.linkedin.com/company/quantummaking"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors mt-1 inline-block"
            >
              LinkedIn
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.company}</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">{t.footer.links.about}</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">{t.footer.links.contact}</a></li>
              <li><a href="#resources" className="hover:text-foreground transition-colors">{t.footer.links.resources}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.solutions}</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">{t.footer.links.howItWorks}</a></li>
              <li><a href="#industries" className="hover:text-foreground transition-colors">{t.footer.links.industries}</a></li>
              <li><a href="#outcomes" className="hover:text-foreground transition-colors">{t.footer.links.outcomes}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">{t.footer.links.privacy}</Link></li>
              <li><Link to="/cookies" className="hover:text-foreground transition-colors">{t.footer.links.cookies}</Link></li>
            </ul>
          </div>
        </div>

        <div className="subtle-divider mt-12 mb-8" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Quantum Making. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
