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
  const yearsCount = useCounter(54)
  const clientsCount = useCounter(12000)
  const countriesCount = useCounter(100)

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#004aad] p-8 rounded-lg text-center">
            <div className="text-6xl font-light text-white mb-4">{yearsCount}</div>
            <div className="text-white text-xl font-light">Years</div>
          </div>
          <div className="bg-[#004aad] p-8 rounded-lg text-center">
            <div className="text-6xl font-light text-white mb-4">{clientsCount.toLocaleString()}</div>
            <div className="text-white text-xl font-light">Experts</div>
          </div>
          <div className="bg-[#004aad] p-8 rounded-lg text-center">
            <div className="text-6xl font-light text-white mb-4">{countriesCount}+</div>
            <div className="text-white text-xl font-light">Countries</div>
          </div>
        </div>
      </div>
    </section>
  )
}
