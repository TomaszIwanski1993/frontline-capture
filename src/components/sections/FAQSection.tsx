import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";
import { useT } from "@/hooks/useT";

const FAQSection = () => {
  const t = useT();
  return (
    <section id="faq" className="relative section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          <ScrollReveal>
            <div className="lg:sticky lg:top-24">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground tracking-tight leading-[1.1]">
                {`${t.faq.titleA}\n${t.faq.titleB} ${t.faq.titleC}`.split("\n").map((line, idx) => (
                  <span key={idx} className="block">{line}</span>
                ))}
              </h2>
            </div>
          </ScrollReveal>

          <div className="text-foreground">
            <Accordion type="single" collapsible className="space-y-3">
              {t.faq.items.map((faq, i) => (
                <ScrollReveal key={i} delay={0.05 * i}>
                  <AccordionItem value={`item-${i}`} className="glass-card px-6 border-border/50">
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
