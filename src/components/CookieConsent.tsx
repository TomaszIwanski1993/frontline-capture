import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-3xl mx-auto rounded-xl border border-border bg-card/95 backdrop-blur-xl shadow-lg p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-sm text-muted-foreground leading-relaxed">
          We use essential cookies to ensure our website functions properly. Analytics cookies are optional.{" "}
          <Link to="/cookies" className="text-foreground underline underline-offset-2 hover:text-primary transition-colors">
            Cookie Policy
          </Link>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button onClick={decline} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg border border-border hover:border-border/80">
            Decline
          </button>
          <button onClick={accept} className="px-4 py-2 text-sm font-medium text-primary-foreground rounded-lg transition-all duration-300" style={{ background: "var(--gradient-cta)" }}>
            Accept
          </button>
        </div>
        <button onClick={decline} className="absolute top-3 right-3 sm:hidden text-muted-foreground hover:text-foreground">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
