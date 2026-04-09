import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="section-container py-16 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <h1 className="text-3xl font-bold tracking-tight mb-8">Cookie Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: April 2026</p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">1. What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your experience.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">2. How We Use Cookies</h2>
            <p>We use essential cookies to ensure the website functions correctly, and analytics cookies to understand how visitors interact with our site. We do not use advertising or tracking cookies.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">3. Types of Cookies</h2>
            <p><strong className="text-foreground">Essential cookies:</strong> Required for the website to function. Cannot be disabled.</p>
            <p className="mt-2"><strong className="text-foreground">Analytics cookies:</strong> Help us understand website usage patterns. These are only set with your consent.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">4. Managing Cookies</h2>
            <p>You can control cookies through your browser settings. Disabling certain cookies may affect website functionality.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">5. Contact</h2>
            <p>For questions about our cookie practices, contact us at: info@quantummaking.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
