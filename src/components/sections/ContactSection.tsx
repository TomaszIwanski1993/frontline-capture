import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">Contact</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
              Let's talk
            </h2>
            <p className="mt-3 text-muted-foreground text-base">
              We respond within one business day.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <div>

            <ScrollReveal delay={0.1}>
              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <a href="mailto:info@quantummaking.com" className="hover:text-foreground transition-colors">
                    info@quantummaking.com
                  </a>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                  <span>Grzegórzecka 69D/46<br />31-559 Kraków, Poland</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-8 glass-card overflow-hidden rounded-xl h-48">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.5!2d19.9445!3d50.0614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b1a3a3e3c3d%3A0x0!2sGrzeg%C3%B3rzecka%2069D%2C%2031-559%20Krak%C3%B3w!5e0!3m2!1sen!2spl!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.08}>
            <div>
              {submitted ? (
                <div className="glass-card p-10 text-center h-full flex flex-col items-center justify-center">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Thank you</h3>
                  <p className="text-muted-foreground">We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-8 lg:p-10 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      maxLength={100}
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                  <button type="submit" className="cta-button w-full text-base py-4">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default ContactSection;
