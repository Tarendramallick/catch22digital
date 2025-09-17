import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { SubscriptionPlans } from "@/components/subscription-plans"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <SubscriptionPlans />
      <CaseStudiesSection />
      <Footer />
    </main>
  )
}
