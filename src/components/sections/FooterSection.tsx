import { Link } from "react-router-dom";
import logo from "@/assets/logo-quantum.svg";

const FooterSection = () => {
  return (
    <footer className="relative z-10 border-t border-border/50 py-16 bg-background">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Quantum" className="h-8" />
              <span className="text-lg font-bold text-foreground">Quantum</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI for operational knowledge retention.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              info@quantummaking.com
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#resources" className="hover:text-foreground transition-colors">Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="#industries" className="hover:text-foreground transition-colors">Industries</a></li>
              <li><a href="#outcomes" className="hover:text-foreground transition-colors">Outcomes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="subtle-divider mt-12 mb-8" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Quantum Making. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
