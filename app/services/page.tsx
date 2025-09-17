import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, MousePointer, Share2, BarChart3, Mail, Smartphone } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Our <span className="text-[#004aad]">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to grow your business and maximize your online
              presence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-[#e5e7eb] hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Search className="w-12 h-12 text-[#004aad] mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">Search Engine Optimization</h3>
                <p className="text-gray-600 mb-6">
                  Improve your website's visibility and ranking on search engines with our comprehensive SEO strategies.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Keyword Research & Analysis</li>
                  <li>• On-Page Optimization</li>
                  <li>• Technical SEO Audits</li>
                  <li>• Link Building Campaigns</li>
                </ul>
                <Button className="bg-[#004aad] hover:bg-[#003a8c] text-white w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-[#e5e7eb] hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <MousePointer className="w-12 h-12 text-[#004aad] mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">Pay-Per-Click Advertising</h3>
                <p className="text-gray-600 mb-6">
                  Drive immediate traffic and conversions with targeted PPC campaigns across Google, Bing, and social
                  platforms.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Google Ads Management</li>
                  <li>• Bing Ads Campaigns</li>
                  <li>• Landing Page Optimization</li>
                  <li>• Conversion Tracking</li>
                </ul>
                <Button className="bg-[#004aad] hover:bg-[#003a8c] text-white w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-[#e5e7eb] hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Share2 className="w-12 h-12 text-[#004aad] mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">Social Media Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Build your brand presence and engage with your audience across all major social media platforms.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Content Strategy & Creation</li>
                  <li>• Community Management</li>
                  <li>• Social Media Advertising</li>
                  <li>• Influencer Partnerships</li>
                </ul>
                <Button className="bg-[#004aad] hover:bg-[#003a8c] text-white w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-[#e5e7eb] hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <BarChart3 className="w-12 h-12 text-[#004aad] mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">Analytics & Reporting</h3>
                <p className="text-gray-600 mb-6">
                  Make data-driven decisions with comprehensive analytics and detailed performance reporting.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Google Analytics Setup</li>
                  <li>• Custom Dashboard Creation</li>
                  <li>• Performance Monitoring</li>
                  <li>• ROI Analysis</li>
                </ul>
                <Button className="bg-[#004aad] hover:bg-[#003a8c] text-white w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-[#e5e7eb] hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 text-[#004aad] mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">Email Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Nurture leads and retain customers with personalized email campaigns that drive results.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Email Campaign Design</li>
                  <li>• List Segmentation</li>
                  <li>• Automation Workflows</li>
                  <li>• A/B Testing</li>
                </ul>
                <Button className="bg-[#004aad] hover:bg-[#003a8c] text-white w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="border-[#e5e7eb] hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Smartphone className="w-12 h-12 text-[#004aad] mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">Web Development</h3>
                <p className="text-gray-600 mb-6">
                  Create fast, responsive, and conversion-optimized websites that represent your brand perfectly.
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Responsive Web Design</li>
                  <li>• E-commerce Development</li>
                  <li>• CMS Integration</li>
                  <li>• Performance Optimization</li>
                </ul>
                <Button className="bg-[#004aad] hover:bg-[#003a8c] text-white w-full">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e5e7eb]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our services can help grow your business. Get a free consultation today.
          </p>
          <Button className="bg-[#004aad] hover:bg-[#003a8c] text-white text-lg px-8 py-3">
            Schedule Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
