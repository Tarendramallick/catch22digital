import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Target, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <PageHero
        title="About Catch22Digital"
        subtitle="We're a team of digital marketing experts passionate about helping businesses grow through innovative strategies and data-driven results."
      />

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-black mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2018, Catch22Digital emerged from a simple belief: every business deserves exceptional
                digital marketing that drives real results. We started as a small team of passionate marketers and have
                grown into a full-service agency serving clients worldwide.
              </p>
              <p className="text-gray-600 mb-8">
                Our name reflects our approach - we break the catch-22 cycle where businesses need results to invest in
                marketing, but need marketing to get results. We provide the expertise and strategy to break through and
                achieve sustainable growth.
              </p>
              <Button className="bg-[#004aad] hover:bg-[#003a8c] text-white">Get Started Today</Button>
            </div>
            <div className="relative">
              <img
                src="/professional-digital-marketing-team-working-togeth.jpg"
                alt="Catch22Digital team working together"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-black mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-[#e5e7eb] hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-[#004aad] mx-auto mb-4" />
                <h3 className="text-xl font-medium text-black mb-3">Transparency</h3>
                <p className="text-gray-600">Clear communication and honest reporting on all campaigns and results.</p>
              </CardContent>
            </Card>

            <Card className="border-[#e5e7eb] hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-[#004aad] mx-auto mb-4" />
                <h3 className="text-xl font-medium text-black mb-3">Partnership</h3>
                <p className="text-gray-600">
                  We work as an extension of your team, invested in your long-term success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#e5e7eb] hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-[#004aad] mx-auto mb-4" />
                <h3 className="text-xl font-medium text-black mb-3">Results-Driven</h3>
                <p className="text-gray-600">Every strategy is designed with measurable outcomes and ROI in mind.</p>
              </CardContent>
            </Card>

            <Card className="border-[#e5e7eb] hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-[#004aad] mx-auto mb-4" />
                <h3 className="text-xl font-medium text-black mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We continuously improve and stay ahead of industry trends and best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-black mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in digital marketing, strategy, and
              business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image: "/professional-woman-using-smartphone-with-digital-i.jpg",
              },
              {
                name: "Mike Chen",
                role: "Head of Strategy",
                image: "/professional-woman-using-smartphone-with-digital-i.jpg",
              },
              {
                name: "Emily Rodriguez",
                role: "Creative Director",
                image: "/professional-woman-using-smartphone-with-digital-i.jpg",
              },
            ].map((member, index) => (
              <Card key={index} className="border-[#e5e7eb] hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-medium text-black mb-2">{member.name}</h3>
                  <p className="text-[#004aad] font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
