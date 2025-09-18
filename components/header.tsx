"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hasBackground, setHasBackground] = useState(false)

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY

      setHasBackground(currentScrollY > 50)

      // Show header when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true)
      }
      // Hide header when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlHeader)
    return () => window.removeEventListener("scroll", controlHeader)
  }, [lastScrollY])

  return (
    <header
      className={`border-b border-white/20 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${hasBackground ? "bg-white/95 backdrop-blur-md shadow-lg" : ""}`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className={`text-2xl font-medium transition-colors ${hasBackground ? "text-[#004aad]" : "text-white"}`}>
            CATCH22
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="/about"
            className={`hover:text-[#004aad] transition-colors font-medium ${
              hasBackground ? "text-gray-800" : "text-white"
            }`}
          >
            About
          </a>
          <a
            href="/services"
            className={`hover:text-[#004aad] transition-colors font-medium ${
              hasBackground ? "text-gray-800" : "text-white"
            }`}
          >
            Services
          </a>
          <a
            href="/work"
            className={`hover:text-[#004aad] transition-colors font-medium ${
              hasBackground ? "text-gray-800" : "text-white"
            }`}
          >
            Work
          </a>
          <a
            href="/insights"
            className={`hover:text-[#004aad] transition-colors font-medium ${
              hasBackground ? "text-gray-800" : "text-white"
            }`}
          >
            Insights
          </a>
          <a
            href="/contact"
            className={`hover:text-[#004aad] transition-colors font-medium ${
              hasBackground ? "text-gray-800" : "text-white"
            }`}
          >
            Contact
          </a>
        </nav>

        <Button className="bg-[#004aad] text-white hover:bg-[#004aad]/90 rounded-full px-6 font-medium">
          <a href="/contact">Get in touch</a>
        </Button>
      </div>
    </header>
  )
}

export { Header }
export default Header
