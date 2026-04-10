import { Building2 } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="section-container relative z-10">
        <div className="glass-card p-8 lg:p-12 text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
            Trusted by industrial teams
          </p>
          <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
            Pilot deployments in manufacturing and logistics environments.
          </p>

          {/* Logo placeholder strip */}
          <div className="mt-8 flex items-center justify-center gap-10 flex-wrap">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-muted-foreground/40"
              >
                <Building2 className="h-6 w-6" strokeWidth={1.2} />
                <span className="text-sm font-medium tracking-wide">
                  Partner {i}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground/50">
            Customer logos coming soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
