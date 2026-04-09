import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who is Quantum built for?",
    a: "Quantum is built for companies with frontline operations — manufacturing plants, warehouses, FMCG production lines, field service teams, and construction sites. If your business relies on experienced operators whose knowledge isn't fully documented, Quantum is relevant.",
  },
  {
    q: "Can this work in any factory environment?",
    a: "Yes. Quantum is designed to be environment-agnostic. Whether you operate in cleanrooms, heavy industry, or outdoor field conditions, the system adapts. We work within your existing processes — no specialized infrastructure required.",
  },
  {
    q: "What data do you capture?",
    a: "We capture task demonstrations performed by your operators — the steps, sequences, adjustments, and decision points that make up real operational knowledge. We do not capture personal data or monitor individual performance.",
  },
  {
    q: "How do you handle data security and GDPR?",
    a: "Data security is foundational to how we operate. All data is encrypted in transit and at rest, stored in EU-based infrastructure, and processed in full compliance with GDPR. We sign data processing agreements with all clients and can accommodate specific security requirements.",
  },
  {
    q: "What results can we expect?",
    a: "Clients typically see meaningful reductions in onboarding time and improved consistency in task execution within the first pilot. Results vary by context, but the pattern is consistent: when knowledge is structured and accessible, operations improve.",
  },
  {
    q: "How is Quantum different from other knowledge management tools?",
    a: "Most knowledge management tools are built for office work — documents, wikis, search. Quantum is built specifically for frontline operations. We capture knowledge through demonstration, not documentation. The result is practical, task-level guidance that operators actually use.",
  },
  {
    q: "Can we try before committing?",
    a: "Absolutely. We always start with a short pilot — typically 2 to 4 weeks, focused on a single process or line. There's no long-term commitment required. The pilot gives you concrete results to evaluate before deciding on a broader rollout.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="relative section-padding">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Common questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card px-6 border-border/50"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5 text-base font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default FAQSection;
