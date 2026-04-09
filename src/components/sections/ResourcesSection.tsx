import { motion } from "framer-motion";
import { FileText, ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "The hidden cost of knowledge loss in manufacturing",
    category: "Insight",
    description: "Why tacit knowledge is the most undervalued asset in industrial operations, and what happens when it disappears.",
  },
  {
    title: "Rethinking onboarding for frontline operators",
    category: "Perspective",
    description: "Traditional onboarding programs weren't designed for the pace and complexity of modern operations. A better approach exists.",
  },
  {
    title: "AI in operations: beyond automation",
    category: "Analysis",
    description: "How AI can support, not replace, human expertise in industrial environments. A practical framework.",
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="relative section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Resources</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Insights & perspectives
          </h2>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-7 group cursor-pointer hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">{article.category}</span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">{article.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{article.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">More articles coming soon.</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default ResourcesSection;
