import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const CareersSection = () => {
  return (
    <section id="careers" className="relative section-padding">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Careers</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Join Our Team
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center text-center py-12 px-6 rounded-2xl border border-border/50 bg-card/50"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            No open roles at the moment
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-md">
            We're not actively hiring right now, but we're always interested in hearing from talented people. Feel free to reach out at{" "}
            <a href="mailto:info@quantummaking.com" className="text-primary hover:underline">
              info@quantummaking.com
            </a>
            .
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default CareersSection;
