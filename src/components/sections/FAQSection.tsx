import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who is Quantum built for?",
    a: "Quantum is built for companies that rely on frontline operators: manufacturing plants, FMCG production lines, warehouses, construction sites, and field service teams. If your operations depend on experienced people whose knowledge isn't formally documented, Quantum is built for you.",
  },
  {
    q: "Can this work in any factory environment?",
    a: "Yes. Quantum is designed for real operational conditions: production floors, cleanrooms, outdoor sites, and heavy industry. We work within your existing workflows and don't require specialized infrastructure or changes to your production setup.",
  },
  {
    q: "What exactly do you capture?",
    a: "We capture task demonstrations performed by experienced operators: the specific steps, sequences, adjustments, and decision points that make up real operational knowledge. This is the tacit know-how that traditional documentation misses. How to feel when a machine is running right, which adjustments to make during a changeover, and what to watch for during quality checks.",
  },
  {
    q: "How do you handle data security and GDPR?",
    a: "Data security is built into our architecture. All data is encrypted in transit and at rest, stored in EU-based infrastructure, and processed in full GDPR compliance. We do not capture personal data or monitor individual performance. We sign data processing agreements with all clients and can meet specific security requirements from your IT and compliance teams.",
  },
  {
    q: "What results can we realistically expect?",
    a: "Clients typically see 30 to 40% faster time-to-proficiency for new operators and measurably more consistent task execution across shifts. Results depend on the specific process and environment, but the pattern is consistent: when operational knowledge is structured and accessible, onboarding accelerates and execution quality improves.",
  },
  {
    q: "How is Quantum different from a knowledge management tool or wiki?",
    a: "Most knowledge tools are built for office work: documents, wikis, search. Quantum is built specifically for frontline operations. We capture knowledge through operator demonstrations, not documentation. The result is practical, task-level guidance that operators actually use on the floor, not another system they ignore.",
  },
  {
    q: "Can we try before making a commitment?",
    a: "Always. We start every engagement with a short pilot, typically 2 to 4 weeks, focused on a single process or production line. There's no long-term commitment required. The pilot gives you concrete, measurable results to evaluate before deciding on broader deployment.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="relative section-padding">
      <div className="section-container max-w-3xl">
        <div>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Common questions
          </h2>
        </div>

        <div className="mt-12">
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
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default FAQSection;
