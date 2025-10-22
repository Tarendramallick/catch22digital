import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageHero
        title="Marketing Insights"
        subtitle="Stay ahead of the curve with our latest insights, trends, and strategies in digital marketing and business growth."
      />

      {/* Featured Article */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <Card className="border-[#e5e7eb] overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src="/professional-digital-marketing-team-working-togeth.jpg"
                    alt="Featured article"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="bg-[#004aad] text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4 w-fit">
                    Featured
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium text-black mb-4">
                    The Future of AI in Digital Marketing: 2024 Trends
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Discover how artificial intelligence is revolutionizing digital marketing strategies and what it
                    means for businesses in 2024 and beyond.
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">March 15, 2024</span>
                    <User className="w-4 h-4 mr-2" />
                    <span>Sarah Johnson</span>
                  </div>
                  <Button className="bg-[#004aad] hover:bg-[#003a8c] text-white w-fit">
                    Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "10 SEO Strategies That Actually Work in 2024",
                excerpt:
                  "Cut through the noise with proven SEO tactics that deliver real results for modern businesses.",
                category: "SEO",
                date: "March 12, 2024",
                author: "Mike Chen",
                image: "/professional-woman-using-smartphone-with-digital-i.jpg",
              },
              {
                title: "Social Media ROI: How to Measure What Matters",
                excerpt:
                  "Learn the key metrics and tools to accurately measure your social media marketing return on investment.",
                category: "Social Media",
                date: "March 10, 2024",
                author: "Emily Rodriguez",
                image: "/professional-digital-marketing-team-working-togeth.jpg",
              },
              {
                title: "PPC Optimization: Advanced Bidding Strategies",
                excerpt:
                  "Master advanced bidding techniques to maximize your pay-per-click advertising performance and reduce costs.",
                category: "PPC",
                date: "March 8, 2024",
                author: "David Kim",
                image: "/professional-woman-using-smartphone-with-digital-i.jpg",
              },
              {
                title: "Email Marketing Automation That Converts",
                excerpt:
                  "Build email workflows that nurture leads and drive conversions with personalized, timely messaging.",
                category: "Email Marketing",
                date: "March 5, 2024",
                author: "Lisa Wang",
                image: "/professional-digital-marketing-team-working-togeth.jpg",
              },
              {
                title: "Content Marketing Strategy for B2B Success",
                excerpt:
                  "Create compelling content that resonates with business decision-makers and drives qualified leads.",
                category: "Content Marketing",
                date: "March 3, 2024",
                author: "Sarah Johnson",
                image: "/professional-woman-using-smartphone-with-digital-i.jpg",
              },
              {
                title: "Local SEO: Dominate Your Geographic Market",
                excerpt:
                  "Optimize your online presence to capture local customers and outrank competitors in your area.",
                category: "Local SEO",
                date: "March 1, 2024",
                author: "Mike Chen",
                image: "/professional-digital-marketing-team-working-togeth.jpg",
              },
            ].map((article, index) => (
              <Card key={index} className="border-[#e5e7eb] hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="bg-[#004aad] text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-medium text-black mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{article.date}</span>
                    <User className="w-4 h-4 mr-2" />
                    <span>{article.author}</span>
                  </div>
                  <Button
                    variant="outline"
                    className="border-[#004aad] text-[#004aad] hover:bg-[#004aad] hover:text-white w-full bg-transparent"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e5e7eb]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-black mb-6">Stay Updated with Our Newsletter</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest marketing insights, tips, and strategies delivered directly to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad]"
            />
            <Button className="bg-[#004aad] hover:bg-[#003a8c] text-white px-6 py-3">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
