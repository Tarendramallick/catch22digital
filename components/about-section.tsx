import { Button } from "@/components/ui/button"
export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-normal mb-6">Why do I need digital marketing for my products?</h2>
          <p className="text-lg text-white/90 leading-relaxed">
            {
              "we help your Business stand out where it matters most, in search results and in front of your ideal customers. Our data-driven strategies boost your visibility, attract high-quality leads, and position your brand for sustainable growth. From targeted campaigns that amplify your product’s value to long-term SEO systems that keep delivering results, we handle the hard stuff so you can focus on scaling your business."
            }
          </p>
          <div className="mt-8">
            <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8">
              Discover our approach
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
