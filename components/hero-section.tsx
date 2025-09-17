import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url(/professional-woman-using-smartphone-with-digital-i.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            Designing
            <br />
            for People
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            We pioneer in media to build modern businesses by getting brands closer to the people that matter.
          </p>
          <Button
            size="lg"
            className="bg-[#004aad] text-white hover:bg-[#004aad]/90 rounded-full px-8 py-6 text-lg font-semibold"
          >
            Connect with us
          </Button>
        </div>
      </div>
    </section>
  )
}
