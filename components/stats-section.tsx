"use client"

import { useEffect, useState } from "react"

function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return count
}

export function StatsSection() {
  const yearsCount = useCounter(15)
  const clientsCount = useCounter(500)
  const countriesCount = useCounter(50)

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-6xl font-bold text-primary mb-4">{yearsCount}+</div>
            <div className="text-white text-xl">Years</div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-primary mb-4">{clientsCount}+</div>
            <div className="text-white text-xl">Clients</div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-primary mb-4">{countriesCount}+</div>
            <div className="text-white text-xl">Countries</div>
          </div>
        </div>
      </div>
    </section>
  )
}
