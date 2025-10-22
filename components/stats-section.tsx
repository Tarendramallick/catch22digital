"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const items = [
  "Web Development",
  "LLM Optimization",
  "Search Engine Optimization",
  "Marketing Strategies",
  "Data Analysis",
]

export function StatsSection() {
  const [index, setIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(2)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(4)
      else if (window.innerWidth >= 768) setItemsPerView(3)
      else setItemsPerView(2)
    }
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const next = () => setIndex((prev) => (prev + 1) % items.length)
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length)

  // compute window of chips
  const visible = Array.from({ length: itemsPerView }, (_, i) => items[(index + i) % items.length])

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white/90 text-xl font-normal">What we excel at</h3>
            <div className="hidden md:flex gap-2">
              <button
                aria-label="Previous"
                onClick={prev}
                className="size-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              >
                <ChevronLeft className="w-5 h-5 mx-auto" />
              </button>
              <button
                aria-label="Next"
                onClick={next}
                className="size-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              >
                <ChevronRight className="w-5 h-5 mx-auto" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {visible.map((label, i) => (
              <div
                key={`${index}-${i}-${label}`}
                className="rounded-full px-4 py-3 bg-white/10 text-white/90 text-sm backdrop-blur border border-white/10"
              >
                {label}
              </div>
            ))}
          </div>

          <div className="mt-6 flex md:hidden justify-center gap-2">
            <button
              aria-label="Previous"
              onClick={prev}
              className="size-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            >
              <ChevronLeft className="w-5 h-5 mx-auto" />
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="size-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            >
              <ChevronRight className="w-5 h-5 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
