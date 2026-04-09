import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative section-padding">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">About</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            We've seen this problem first-hand
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 space-y-6 text-muted-foreground leading-relaxed"
        >
          <p>
            Quantum was founded by a team with deep experience in industrial operations,
            manufacturing systems, and applied AI. We've spent years on factory floors,
            in control rooms, and alongside frontline teams - and we've watched critical
            knowledge disappear when experienced operators moved on.
          </p>
          <p>
            We built Quantum because we believe the most valuable knowledge in any
            operation isn't in a manual or a database. It's in the hands and minds of
            the people doing the work. Our mission is to make that knowledge permanent,
            accessible, and useful - so it serves the next generation of operators just
            as effectively as it served the last.
          </p>
          <p>
            We're not trying to replace human expertise. We're building the tools to
            preserve it.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default AboutSection;
