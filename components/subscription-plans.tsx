import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for small businesses getting started with digital marketing",
    features: [
      "Basic SEO Optimization",
      "Social Media Management (2 platforms)",
      "Monthly Analytics Report",
      "Email Support",
      "Basic Website Maintenance",
      "Content Creation (4 posts/month)",
    ],
    popular: false,
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
  },
  {
    name: "Professional",
    price: "$599",
    period: "/month",
    description: "Comprehensive digital marketing solution for growing businesses",
    features: [
      "Advanced SEO & Technical Audit",
      "Multi-Platform Social Media (5 platforms)",
      "PPC Campaign Management",
      "Weekly Analytics & Reports",
      "Priority Support",
      "Custom Website Development",
      "Content Creation (12 posts/month)",
      "Email Marketing Campaigns",
      "Conversion Rate Optimization",
    ],
    popular: true,
    buttonText: "Most Popular",
    buttonVariant: "default" as const,
  },
  {
    name: "Enterprise",
    price: "$1,299",
    period: "/month",
    description: "Full-scale digital transformation for established enterprises",
    features: [
      "Complete SEO & Marketing Suite",
      "Unlimited Social Media Management",
      "Advanced PPC & Display Advertising",
      "Real-time Analytics Dashboard",
      "24/7 Dedicated Support",
      "Custom Web Applications",
      "Unlimited Content Creation",
      "Marketing Automation",
      "AI-Powered Optimization",
      "Dedicated Account Manager",
      "Monthly Strategy Consultations",
    ],
    popular: false,
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
  },
]

export function SubscriptionPlans() {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Choose Your Plan</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible subscription plans designed to scale with your business growth and digital marketing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-card border-border hover:shadow-xl transition-all duration-300 ${
                plan.popular ? "ring-2 ring-blue-500 scale-105" : "hover:-translate-y-1"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-card-foreground">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="mt-4 text-muted-foreground leading-relaxed">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.buttonVariant}
                  className={`w-full py-6 text-base font-semibold ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                      : "hover:bg-blue-50 hover:border-blue-300"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include a 30-day money-back guarantee and can be cancelled anytime.
          </p>
          <p className="text-sm text-muted-foreground">
            Need a custom solution?{" "}
            <Button variant="link" className="p-0 h-auto text-blue-600">
              Contact our team
            </Button>{" "}
            for enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  )
}
