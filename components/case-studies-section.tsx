import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CaseStudiesSection() {
  return (
    <section id="work" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">How we perform & transform</h2>
          </div>
          <div>
            <p className="text-lg text-muted-foreground">
              For scaled brands looking for a global marketing and media buying agency, Catch22 is the gateway to
              destiny. With our bespoke approach to client partnerships, we innovate to drive both immediate performance
              and longer-term transformation.
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/diverse-team-collaborating-on-digital-marketing-st.jpg"
                alt="Team collaboration"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 bg-primary text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Using AI to Revolutionize E-commerce Marketing</h3>
              <p className="text-white/90 mb-6">Co-op E-commerce</p>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                Case study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-secondary text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Creating a Digital Transformation Strategy for Healthcare</h3>
              <p className="text-white/90 mb-6">HealthTech Solutions</p>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-secondary"
              >
                Case study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div>
              <img
                src="/healthcare-professional-using-digital-tablet-with-.jpg"
                alt="Healthcare digital transformation"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/business-analytics-dashboard-on-multiple-screens-s.jpg"
                alt="Data analytics dashboard"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 bg-accent text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Using Data and Social to Elevate Fintech into a Growth Movement
              </h3>
              <p className="text-white/90 mb-6">FinTech Innovators</p>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-accent"
              >
                Case study <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
            View all
          </Button>
        </div>
      </div>
    </section>
  )
}
