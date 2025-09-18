import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, TrendingUp } from "lucide-react"

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-medium text-black mb-6">
              Our <span className="text-[#004aad]">Work</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful digital marketing campaigns and the measurable results we've achieved
              for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-[#e5e7eb] hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video bg-[#e5e7eb] relative">
                <img
                  src="/professional-digital-marketing-team-working-togeth.jpg"
                  alt="E-commerce case study"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#004aad] text-white px-3 py-1 rounded-full text-sm font-medium">
                  E-commerce
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-medium text-black mb-4">Fashion Retailer Increases Revenue by 340%</h3>
                <p className="text-gray-600 mb-6">
                  Complete digital transformation including SEO optimization, PPC campaigns, and social media strategy
                  for a growing fashion brand.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-medium text-[#004aad]">340%</div>
                    <div className="text-sm text-gray-600">Revenue Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-medium text-[#004aad]">250%</div>
                    <div className="text-sm text-gray-600">Traffic Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-medium text-[#004aad]">180%</div>
                    <div className="text-sm text-gray-600">Conversion Rate</div>
                  </div>
                </div>
                <Button className="bg-[#004aad] hover:bg-[#003a8c] text-white w-full">
                  View Case Study <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-[#e5e7eb] hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video bg-[#e5e7eb] relative">
                <img
                  src="/professional-woman-using-smartphone-with-digital-i.jpg"
                  alt="SaaS case study"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#004aad] text-white px-3 py-1 rounded-full text-sm font-medium">
                  SaaS
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-medium text-black mb-4">SaaS Startup Achieves 500% Lead Growth</h3>
                <p className="text-gray-600 mb-6">
                  Strategic content marketing and lead generation campaign that transformed a startup into an industry
                  leader.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-medium text-[#004aad]">500%</div>
                    <div className="text-sm text-gray-600">Lead Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-medium text-[#004aad]">85%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-medium text-[#004aad]">12x</div>
                    <div className="text-sm text-gray-600">ROI Improvement</div>
                  </div>
                </div>
                <Button className="bg-[#004aad] hover:bg-[#003a8c] text-white w-full">
                  View Case Study <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* More Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Local Restaurant Chain",
                category: "Local Business",
                metric: "400% Online Orders",
                description: "Multi-location SEO and social media strategy",
              },
              {
                title: "Healthcare Provider",
                category: "Healthcare",
                metric: "300% Patient Leads",
                description: "Comprehensive digital presence overhaul",
              },
              {
                title: "B2B Manufacturing",
                category: "Manufacturing",
                metric: "250% Qualified Leads",
                description: "LinkedIn and content marketing strategy",
              },
            ].map((study, index) => (
              <Card key={index} className="border-[#e5e7eb] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-[#004aad] text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                    {study.category}
                  </div>
                  <h3 className="text-xl font-medium text-black mb-3">{study.title}</h3>
                  <div className="flex items-center mb-3">
                    <TrendingUp className="w-5 h-5 text-[#004aad] mr-2" />
                    <span className="text-[#004aad] font-semibold">{study.metric}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <Button
                    variant="outline"
                    className="border-[#004aad] text-[#004aad] hover:bg-[#004aad] hover:text-white w-full bg-transparent"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-black mb-6">Results That Speak for Themselves</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our data-driven approach consistently delivers measurable results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-medium text-[#004aad] mb-2">250+</div>
              <div className="text-gray-600">Successful Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-medium text-[#004aad] mb-2">$50M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-medium text-[#004aad] mb-2">300%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-medium text-[#004aad] mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
