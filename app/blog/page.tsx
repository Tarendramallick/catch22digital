import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Marketing: AI and Automation",
      excerpt:
        "Discover how artificial intelligence is revolutionizing digital marketing strategies and what it means for your business.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Digital Strategy",
      image: "/business-analytics-dashboard-on-multiple-screens-s.jpg",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Social Media Trends That Will Dominate 2024",
      excerpt:
        "Stay ahead of the curve with these emerging social media trends that are reshaping how brands connect with audiences.",
      author: "Mike Chen",
      date: "March 12, 2024",
      category: "Social Media",
      image: "/professional-woman-using-smartphone-with-digital-i.jpg",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Maximizing ROI with Data-Driven Marketing",
      excerpt:
        "Learn how to leverage analytics and data insights to optimize your marketing campaigns and drive better results.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      category: "Analytics",
      image: "/diverse-team-collaborating-on-digital-marketing-st.jpg",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Building Brand Authority Through Content Marketing",
      excerpt:
        "Explore proven strategies for creating compelling content that establishes your brand as an industry leader.",
      author: "Sarah Johnson",
      date: "March 8, 2024",
      category: "Content Marketing",
      image: "/healthcare-professional-using-digital-tablet-with-.jpg",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "The Complete Guide to SEO in 2024",
      excerpt:
        "Master the latest SEO techniques and algorithm updates to improve your website's search engine rankings.",
      author: "Mike Chen",
      date: "March 5, 2024",
      category: "SEO",
      image: "/professional-digital-marketing-team-working-togeth.jpg",
      readTime: "10 min read",
    },
    {
      id: 6,
      title: "Email Marketing Best Practices for Higher Engagement",
      excerpt:
        "Discover proven tactics to increase open rates, click-through rates, and conversions in your email campaigns.",
      author: "Emily Rodriguez",
      date: "March 3, 2024",
      category: "Email Marketing",
      image: "/business-analytics-dashboard-on-multiple-screens-s.jpg",
      readTime: "4 min read",
    },
  ]

  const categories = [
    "All",
    "Digital Strategy",
    "Social Media",
    "Analytics",
    "Content Marketing",
    "SEO",
    "Email Marketing",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageHero
        title="Marketing Insights"
        subtitle="Stay ahead of the curve with expert insights, industry trends, and actionable strategies to grow your business in the digital age."
      />

      {/* Categories Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={`rounded-full px-6 font-medium ${
                  category === "All"
                    ? "bg-[#004aad] hover:bg-[#003a8c] text-white"
                    : "border-[#e5e7eb] text-gray-600 hover:bg-[#004aad] hover:text-white hover:border-[#004aad]"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="border-[#e5e7eb] hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#004aad] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-medium text-black mb-3 group-hover:text-[#004aad] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-[#004aad] font-medium group-hover:gap-2 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e5e7eb]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-black mb-6">Stay Updated with Our Latest Insights</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get weekly marketing tips, industry news, and exclusive content delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
            />
            <Button className="bg-[#004aad] hover:bg-[#003a8c] text-white px-8 py-3 rounded-lg font-medium">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
