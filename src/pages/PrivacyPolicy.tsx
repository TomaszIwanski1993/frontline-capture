import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="section-container py-16 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <h1 className="text-3xl font-bold tracking-tight mb-8">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: April 2026</p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">1. Introduction</h2>
            <p>Quantum Making ("Quantum", "we", "us") is committed to protecting your privacy. This policy explains how we collect, use, and protect personal data when you visit our website or use our services.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">2. Data We Collect</h2>
            <p>We may collect: contact information (name, email, company) submitted through our forms; usage data including IP address, browser type, and pages visited; and cookies as described in our Cookie Policy.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">3. How We Use Your Data</h2>
            <p>We use your data to respond to inquiries, improve our website and services, send relevant communications (with your consent), and comply with legal obligations.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">4. Legal Basis (GDPR)</h2>
            <p>We process personal data based on: your consent, legitimate business interests, performance of a contract, or compliance with legal obligations.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">5. Data Retention</h2>
            <p>We retain personal data only as long as necessary for the purposes described in this policy, or as required by law.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">6. Your Rights</h2>
            <p>Under GDPR, you have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data. Contact us at info@quantummaking.com to exercise these rights.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">7. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">8. Contact</h2>
            <p>For privacy-related inquiries, contact us at: info@quantummaking.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
