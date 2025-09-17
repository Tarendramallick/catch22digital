import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes Catch22 Digital different from other agencies?",
    answer:
      "We combine cutting-edge technology with proven strategies, offering personalized solutions that break traditional digital marketing barriers. Our team focuses on data-driven results and long-term partnerships.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long-term strategy. While some improvements can be seen within 3-6 months, significant results typically occur within 6-12 months depending on competition and current website status.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Yes, we work with startups, small businesses, and enterprise companies. Our flexible approach allows us to scale our services to meet your specific needs and budget.",
  },
  {
    question: "What's included in your monthly reports?",
    answer:
      "Our comprehensive reports include keyword rankings, traffic analysis, conversion tracking, competitor analysis, and actionable recommendations for continued improvement.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">FAQ</h2>
          <p className="text-xl text-muted-foreground">Frequently asked questions about our services</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
