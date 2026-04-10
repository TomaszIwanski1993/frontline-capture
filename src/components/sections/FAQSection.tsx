import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    q: "Who is Quantum built for?",
    a: "Quantum serves companies that depend on frontline operators: manufacturing plants, FMCG production lines, warehouses, construction sites, and field service teams. If your operations rely on experienced people whose knowledge isn't documented, Quantum solves that problem.",
  },
  {
    q: "Does this work in any factory environment?",
    a: "Yes. Quantum operates in real industrial conditions: production floors, cleanrooms, outdoor sites, and heavy industry. It integrates with your existing workflows and requires no specialized infrastructure or changes to your production setup.",
  },
  {
    q: "What exactly does Quantum capture?",
    a: "Quantum captures task demonstrations from experienced operators: the specific steps, sequences, adjustments, and decision points that define real operational knowledge. This is the tacit expertise that traditional documentation misses — how to feel when a machine runs correctly, which adjustments to make during changeover, what to watch for during quality checks.",
  },
  {
    q: "How do you handle data security and GDPR?",
    a: "Security is built into the architecture. All data is encrypted in transit and at rest, stored in EU-based infrastructure, and processed in full GDPR compliance. Quantum does not capture personal data or monitor individual performance. We sign data processing agreements with every client and meet specific requirements from IT and compliance teams.",
  },
  {
    q: "What results should we expect?",
    a: "Quantum reduces time-to-proficiency by 30-40% and delivers measurably more consistent task execution across shifts. When operational knowledge is structured and accessible, onboarding accelerates and execution quality improves. Every deployment confirms this pattern.",
  },
  {
    q: "How is Quantum different from a knowledge management tool?",
    a: "Knowledge tools are built for office work: documents, wikis, search. Quantum is built for frontline operations. It captures knowledge through operator demonstrations, not documentation. The result is practical, task-level guidance that operators actually use on the floor — not another system they ignore.",
  },
  {
    q: "Can we try before committing?",
    a: "Every engagement starts with a pilot: 2-4 weeks, focused on a single process or line. No long-term commitment. The pilot delivers concrete, measurable results you evaluate before deciding on broader deployment.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="relative section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          <ScrollReveal>
            <div className="lg:sticky lg:top-24">
              <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">FAQ</p>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
                Common<br />Questions<br />&amp; Answers
              </h2>
            </div>
          </ScrollReveal>

          <div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={0.05 * i}>
                  <AccordionItem
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
                </ScrollReveal>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default FAQSection;
