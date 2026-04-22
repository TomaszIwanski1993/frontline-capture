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
              <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">{"\n"}</p>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
                {t.faq.titleA}<br />{t.faq.titleB}<br />{t.faq.titleC}
              </h2>
            </div>
          </ScrollReveal>

          <div>
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
