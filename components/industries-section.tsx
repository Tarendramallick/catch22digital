"use client"

import { Cloud, Building2, ShoppingCart, DollarSign } from "lucide-react"

const industries = [
  {
    id: "saas",
    name: "SaaS",
    description:
      "Your software solves problems — let's make sure the world knows it. We craft campaigns that demonstrate user acquisition, churn, and scale subscriptions.",
    icon: Cloud,
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-500/20 to-blue-600/20",
  },
  {
    id: "fintech",
    name: "Fintech",
    description:
      "We engineer campaigns that convert skeptics into customers. Regulatory-compliant ads, high ROI funnels, and storytelling that turns complex tech into irresistible value.",
    icon: Building2,
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-500/20 to-purple-600/20",
  },
  {
    id: "ecommerce",
    name: "eCommerce",
    description:
      "We build marketing that doesn't just drive traffic — it drives sales. Dynamic ads, AI-powered retargeting, and checkout flows smoother than your best-selling product.",
    icon: ShoppingCart,
    gradient: "from-red-500 to-red-600",
    bgGradient: "from-red-500/20 to-red-600/20",
  },
  {
    id: "financial",
    name: "Financial",
    description:
      "High-trust marketing for high-stakes industries. We build compliant strategies that turn cold leads into long-term clients. Trust wealth management ads that perform as well as your funds.",
    icon: DollarSign,
    gradient: "from-orange-500 to-orange-600",
    bgGradient: "from-orange-500/20 to-orange-600/20",
  },
]

export function IndustriesSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 text-balance">
            Any Industry. Any Goal. We Make Performance Marketing Work for You
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We don't need to compromise on quality for short-term profit because our subscription model is built on
            long-term, mutually beneficial partnerships with hourly billing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <div
                key={industry.id}
                className={`bg-gradient-to-br ${industry.bgGradient} border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 group`}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`bg-gradient-to-br ${industry.gradient} p-4 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-medium mb-3 bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent`}
                    >
                      {industry.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{industry.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
