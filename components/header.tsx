"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hasBackground, setHasBackground] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY

      // ensure background on non-home pages OR when scrolled
      const shouldBg = currentScrollY > 50 || pathname !== "/"
      setHasBackground(shouldBg)

      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    controlHeader()
    window.addEventListener("scroll", controlHeader)
    return () => window.removeEventListener("scroll", controlHeader)
  }, [lastScrollY, pathname])

  return (
    <header
      className={`border-b border-white/20 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${hasBackground ? "bg-white/95 backdrop-blur-md shadow-lg" : ""}`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" aria-label="Go to homepage">
          <h1 className={`text-2xl font-medium transition-colors ${hasBackground ? "text-[#004aad]" : "text-white"}`}>
            CATCH22
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/about"
            className={`hover:text-[#004aad] transition-colors font-medium ${
              hasBackground ? "text-gray-800" : "text-white"
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`hover:text-[#004aad] transition-colors font-medium ${
              hasBackground ? "text-gray-800" : "text-white"
            }`}
          >
            Services
          </Link>
          <Link
            href="/work"
            className={`hover:text-[#004aad] transition-colors font-medium ${
              hasBackground ? "text-gray-800" : "text-white"
            }`}
          >
            Work
          </Link>
          <Link
            href="/blog"
            className={`hover:text-[#004aad] transition-colors font-medium ${
              hasBackground ? "text-gray-800" : "text-white"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/insights"
            className={`hover:text-[#004aad] transition-colors font-medium ${
              hasBackground ? "text-gray-800" : "text-white"
            }`}
          >
            Insights
          </Link>
          <Link
            href="/contact"
            className={`hover:text-[#004aad] transition-colors font-medium ${
              hasBackground ? "text-gray-800" : "text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button className="hidden md:block bg-[#004aad] text-white hover:bg-[#004aad]/90 rounded-full px-6 font-medium">
            <Link href="/contact">Get in touch</Link>
          </Button>

          <button
            className={`md:hidden p-2 transition-colors ${hasBackground ? "text-gray-800" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <nav id="mobile-nav" className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/about"
              className="text-gray-800 hover:text-[#004aad] transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:text-[#004aad] transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/work"
              className="text-gray-800 hover:text-[#004aad] transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/blog"
              className="text-gray-800 hover:text-[#004aad] transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/insights"
              className="text-gray-800 hover:text-[#004aad] transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-[#004aad] transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              className="bg-[#004aad] text-white hover:bg-[#004aad]/90 rounded-full px-6 font-medium mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href="/contact">Get in touch</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export { Header }
export default Header
