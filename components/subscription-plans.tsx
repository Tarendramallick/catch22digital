"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3)
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2)
      } else {
        setItemsPerView(1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerView >= plans.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, plans.length - itemsPerView) : prev - 1))
  }

  const visiblePlans = plans.slice(currentIndex, currentIndex + itemsPerView)
  if (visiblePlans.length < itemsPerView) {
    visiblePlans.push(...plans.slice(0, itemsPerView - visiblePlans.length))
  }

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-foreground mb-4">Choose Your Plan</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible subscription plans designed to scale with your business growth and digital marketing needs.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-8"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {visiblePlans.map((plan, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 2}rem/${itemsPerView})` }}
                >
                  <Card
                    className={`relative bg-card border-border hover:shadow-xl transition-all duration-300 h-full ${
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
                      <CardTitle className="text-2xl font-medium text-card-foreground">{plan.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-medium text-foreground">{plan.price}</span>
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
                        className={`w-full py-6 text-base font-medium ${
                          plan.popular
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                            : "hover:bg-blue-50 hover:border-blue-300"
                        }`}
                      >
                        {plan.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-[#004aad]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            disabled={currentIndex + itemsPerView >= plans.length}
          >
            <ChevronRight className="w-6 h-6 text-[#004aad]" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(plans.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  Math.floor(currentIndex / itemsPerView) === index ? "bg-[#004aad]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
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
