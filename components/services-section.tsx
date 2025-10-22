"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useMemo, useRef } from "react"

const services = [
  {
    title: "Strategy",
    description:
      "We develop full-funnel marketing strategies tailored to your goals, audience, and business model — with a clear focus on growth, not guesswork.",
    pills: [
      "Go-to-Market",
      "Channel Planning",
      "Growth Mapping",
      "Funnel Architecture",
      "KPI Alignment",
      "Budget Modeling",
      "Execution Roadmaps",
    ],
  },
  {
    title: "Digital",
    description:
      "From paid media to lifecycle programs, we orchestrate full-funnel campaigns that compound results and reduce CAC.",
    pills: ["SEO & PPC", "Paid Social", "Email & CRM", "Attribution", "Experimentation"],
  },
  {
    title: "Web Development",
    description:
      "High-performance web and app experiences that convert — built with modern stacks and measured by outcomes.",
    pills: ["Next.js", "E‑commerce", "Performance", "Accessibility", "CMS"],
  },
  {
    title: "LLM Optimization",
    description:
      "Grounded AI systems, retrieval, evaluation and guardrails that make your AI features reliable and useful.",
    pills: ["RAG", "Evaluation", "Guardrails", "Prompting", "Agents"],
  },
]

export function ServicesSection() {
  // Build cloned slides for seamless infinite loop: [last, ...items, first]
  const slides = useMemo(() => {
    if (services.length < 2) return services
    return [services[services.length - 1], ...services, services[0]]
  }, [])

  // start on index 1 (the real first slide)
  const [slideIndex, setSlideIndex] = useState(1)
  const [isAnimating, setIsAnimating] = useState(true)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<number | null>(null)

  // Autoplay with pause on hover/touch
  useEffect(() => {
    if (paused) return
    intervalRef.current = window.setInterval(() => {
      setSlideIndex((i) => i + 1)
      setIsAnimating(true)
    }, 4000)
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [paused])

  const goNext = () => {
    setSlideIndex((i) => i + 1)
    setIsAnimating(true)
  }
  const goPrev = () => {
    setSlideIndex((i) => i - 1)
    setIsAnimating(true)
  }

  // When animation ends, jump from clones to real slides without animation
  const handleTransitionEnd = () => {
    if (slideIndex === slides.length - 1) {
      // at cloned last (first item clone) -> jump to real first (index 1)
      setIsAnimating(false)
      setSlideIndex(1)
    } else if (slideIndex === 0) {
      // at cloned first (last item clone) -> jump to real last (index slides.length - 2)
      setIsAnimating(false)
      setSlideIndex(slides.length - 2)
    }
  }

  // Re-enable animation after an instantaneous jump
  useEffect(() => {
    if (!isAnimating) {
      const t = window.setTimeout(() => setIsAnimating(true), 20)
      return () => window.clearTimeout(t)
    }
  }, [isAnimating])

  // A11y: keyboard navigation
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") goPrev()
    if (e.key === "ArrowRight") goNext()
  }

  return (
    <section
      id="services"
      className="py-24 bg-black text-white"
      aria-label="Services carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-normal text-white mb-12 text-balance">
          {"Every marketing service you could wish for — all under one roof"}
        </h2>

        <div
          className="relative mx-auto max-w-6xl"
          role="region"
          aria-roledescription="carousel"
          aria-live="polite"
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          {/* circular arrow controls */}
          <button
            aria-label="Previous service"
            onClick={goPrev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition focus:outline-none focus:ring-2 focus:ring-white/50 z-10"
          >
            <ChevronLeft className="w-5 h-5 mx-auto" />
          </button>

          <button
            aria-label="Next service"
            onClick={goNext}
            className="absolute -right-6 top-1/2 -translate-y-1/2 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white transition focus:outline-none focus:ring-2 focus:ring-white/50 z-10"
          >
            <ChevronRight className="w-5 h-5 mx-auto" />
          </button>

          {/* Slider viewport with subtle side fade to mimic ghost cards */}
          <div className="overflow-hidden rounded-[28px] relative">
            {/* spotlight background like reference */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_300px_at_30%_-10%,rgba(255,255,255,0.08),transparent_60%)]" />

            <div
              className="flex items-stretch"
              style={{
                transform: `translateX(-${slideIndex * 100}%)`,
                transition: isAnimating ? "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)" : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((svc, i) => {
                const isActive = i === slideIndex
                return (
                  <div key={`${svc.title}-${i}`} className="px-2 md:px-3 flex-[0_0_100%]">
                    <Card
                      className={`bg-white/5 text-white ring-1 ring-white/10 backdrop-blur rounded-3xl overflow-hidden relative transition-all duration-500 h-[380px] md:h-[420px] lg:h-[440px] flex flex-col ${
                        isActive ? "scale-[1.00] opacity-100" : "scale-[0.96] opacity-60"
                      }`}
                    >
                      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(1200px_500px_at_20%_-10%,rgba(255,255,255,0.08),transparent_60%)]" />
                      <CardHeader className="relative p-8 md:p-10 grow">
                        <div className="flex items-start justify-between gap-6">
                          <div className="max-w-3xl">
                            <CardTitle className="text-3xl md:text-4xl font-medium">{svc.title}</CardTitle>
                            <CardDescription className="mt-3 text-white/80 text-base leading-relaxed">
                              {svc.description}
                            </CardDescription>
                          </div>
                          <div className="hidden sm:block shrink-0">
                            <div className="size-24 md:size-28 rounded-full border border-white/15 grid place-items-center">
                              <div className="size-14 rounded-full border border-white/15" />
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="relative px-8 md:px-10 pb-10">
                        <div className="flex flex-wrap gap-3 max-h-24 md:max-h-28 overflow-hidden">
                          {svc.pills.map((p) => (
                            <span
                              key={p}
                              className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/90 text-sm hover:bg-white/15 transition-colors"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
