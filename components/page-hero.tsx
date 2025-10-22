"use client"

import { useEffect, useState } from "react"

interface PageHeroProps {
  title: string
  subtitle?: string
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-[#004aad] via-[#0066cc] to-[#004aad] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 border border-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/2 w-32 h-32 border border-white/5 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl text-white text-center">
          <h1
            className={`text-5xl lg:text-6xl font-light mb-6 text-balance leading-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`text-xl text-white/90 max-w-2xl mx-auto text-pretty leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default PageHero
