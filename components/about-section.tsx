import { Button } from "@/components/ui/button"
export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Modern businesses are built in media around people</h2>
            <p className="text-lg text-white/90 mb-6">
              As a global media buying agency, we put people at the centre of everything we do. Identifying and
              optimizing touchpoints to deliver client outcomes. We are experience designers, not simply media planners.
              We build existing experiences by going deeper and consumer empathy and further into understanding their
              journey.
            </p>
            <p className="text-lg text-white/90 mb-8">
              We don't do black box. We pioneer in media, positively advocating for people, business and society in
              everything that we do.
            </p>
            <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8">
              Discover our approach
            </Button>
          </div>
          <div>
            <img
              src="/professional-diverse-team-in-modern-office-discuss.jpg"
              alt="Catch22 Digital team"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
