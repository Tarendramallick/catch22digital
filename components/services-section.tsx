import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, TrendingUp, BarChart3, Code, Brain, Users } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Increase organic visibility through technical SEO audits, keyword research, content optimization, and link building strategies that deliver measurable results.",
    features: ["Technical SEO Audit", "Keyword Strategy", "Content Optimization", "Link Building"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing Strategy",
    description:
      "Comprehensive marketing solutions including PPC campaigns, social media management, email marketing, and conversion rate optimization.",
    features: ["PPC Management", "Social Media", "Email Campaigns", "CRO"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Advanced data analytics, custom dashboard creation, performance tracking, and detailed reporting to measure campaign effectiveness.",
    features: ["Custom Dashboards", "Performance Tracking", "ROI Analysis", "Monthly Reports"],
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom website development, e-commerce solutions, mobile optimization, and ongoing maintenance with modern technologies.",
    features: ["Custom Development", "E-commerce", "Mobile Optimization", "Maintenance"],
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description:
      "Implement AI-powered solutions, chatbots, automated workflows, and machine learning models to streamline business processes.",
    features: ["AI Integration", "Chatbots", "Workflow Automation", "ML Models"],
  },
  {
    icon: Users,
    title: "Consulting & Strategy",
    description:
      "Strategic business consulting, digital transformation planning, competitive analysis, and growth strategy development.",
    features: ["Business Strategy", "Digital Transformation", "Competitive Analysis", "Growth Planning"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#e5e7eb]/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            We deliver comprehensive digital solutions that drive growth, enhance online presence, and maximize your
            business potential through proven strategies and cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white border-[#e5e7eb] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-[#004aad] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-black text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-black/70 leading-relaxed">{service.description}</CardDescription>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-black">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-black/70">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-[#004aad] rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="outline"
                  className="w-full bg-transparent border-[#004aad] text-[#004aad] hover:bg-[#004aad] hover:text-white transition-colors"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
