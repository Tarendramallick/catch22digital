import { Button } from "@/components/ui/button"

function Header() {
  return (
    <header className="border-b border-white/20 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-medium text-white">CATCH22</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-[#004aad] transition-colors font-medium">
            About
          </a>
          <a href="#services" className="text-white hover:text-[#004aad] transition-colors font-medium">
            Services
          </a>
          <a href="#work" className="text-white hover:text-[#004aad] transition-colors font-medium">
            Work
          </a>
          <a href="#insights" className="text-white hover:text-[#004aad] transition-colors font-medium">
            Insights
          </a>
        </nav>

        <Button className="bg-white text-[#004aad] hover:bg-white/90 rounded-full px-6 font-medium">
          Get in touch
        </Button>
      </div>
    </header>
  )
}

export { Header }
export default Header
