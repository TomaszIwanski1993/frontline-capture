import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import { useT } from "@/hooks/useT";

const CookieConsent = () => {
  const t = useT();
  const [visible, setVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    } else {
      setShowButton(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    setShowButton(true);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
    setShowButton(true);
  };

  const reopen = () => {
    setVisible(true);
    setShowButton(false);
  };

  return (
    <>
      {showButton && !visible && (
        <button
          onClick={reopen}
          className="fixed bottom-6 left-6 z-40 h-11 w-11 rounded-full border border-border bg-card/90 backdrop-blur-sm shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 hover:shadow-lg transition-all duration-300"
          aria-label={t.cookies.reopen}
          title={t.cookies.reopen}
        >
          <Cookie className="h-4 w-4" />
        </button>
      )}

      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-4 duration-500">
          <div className="max-w-3xl mx-auto rounded-xl border border-border bg-card/95 backdrop-blur-xl shadow-lg p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1 text-sm text-muted-foreground leading-relaxed">
              {t.cookies.message}{" "}
              <Link to="/cookies" className="text-foreground underline underline-offset-2 hover:text-primary transition-colors">
                {t.cookies.policy}
              </Link>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button onClick={decline} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg border border-border hover:border-border/80">
                {t.cookies.decline}
              </button>
              <button onClick={accept} className="px-4 py-2 text-sm font-medium text-primary-foreground rounded-lg transition-all duration-300" style={{ background: "var(--gradient-cta)" }}>
                {t.cookies.accept}
              </button>
            </div>
            <button onClick={decline} className="absolute top-3 right-3 sm:hidden text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
