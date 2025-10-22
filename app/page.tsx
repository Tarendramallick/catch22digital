import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { IndustriesSection } from "@/components/industries-section"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { SubscriptionPlans } from "@/components/subscription-plans"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <AboutSection />
      <StatsSection />
      <CaseStudiesSection />
      <SubscriptionPlans />
      <Footer />
    </main>
  )
}
