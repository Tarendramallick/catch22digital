"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#004aad] via-[#0066cc] to-[#004aad] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 border border-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/2 w-32 h-32 border border-white/5 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1
            className={`text-6xl lg:text-7xl font-light mb-6 text-balance leading-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span
              className={`inline-block transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Designing
            </span>
            <br />
            <span
              className={`inline-block transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              for People
            </span>
          </h1>
          <p
            className={`text-xl text-white/90 mb-8 max-w-xl text-pretty leading-relaxed transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            We pioneer in media to build modern businesses by getting brands closer to the people that matter.
          </p>
          <div
            className={`transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              className="bg-white text-[#004aad] hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium"
            >
              Connect with us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
