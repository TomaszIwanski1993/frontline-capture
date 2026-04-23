import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import Logo from "@/components/Logo";
import { useT } from "@/hooks/useT";

const FooterSection = () => {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-foreground text-background pt-24 lg:pt-32 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-14 items-start">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-5">
            <Logo surface="dark" variant="full" className="h-14 lg:h-16 w-auto block -ml-1" />
            <p className="mt-8 text-sm text-background/60 leading-relaxed">
              {t.footer.legalName}<br />
              {t.footer.addressLine1}<br />
              {t.footer.addressLine2}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:info@quantummaking.com"
                className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4" strokeWidth={1.75} />
                info@quantummaking.com
              </a>
              <a
                href="https://www.linkedin.com/company/quantummaking"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Quantum on LinkedIn"
                className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.75} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-sm font-semibold text-background mb-5 tracking-wide">
              {t.footer.company}
            </h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><a href="#about" className="hover:text-background transition-colors">{t.footer.links.about}</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">{t.footer.links.contact}</a></li>
              <li><a href="/resources" className="hover:text-background transition-colors">{t.footer.links.resources}</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-background mb-5 tracking-wide">
              {t.footer.solutions}
            </h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><a href="#how-it-works" className="hover:text-background transition-colors">{t.footer.links.howItWorks}</a></li>
              <li><a href="#outcomes" className="hover:text-background transition-colors">{t.footer.links.outcomes}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-background mb-5 tracking-wide">
              {t.footer.legal}
            </h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><Link to="/privacy" className="hover:text-background transition-colors">{t.footer.links.privacy}</Link></li>
              <li><Link to="/cookies" className="hover:text-background transition-colors">{t.footer.links.cookies}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-background/10">
          <p className="text-xs text-background/50">
            © {year} Quantum Making. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
