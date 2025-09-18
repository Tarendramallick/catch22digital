function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">CATCH22DIGITAL</h3>
            <p className="text-white/80">
              Breaking digital barriers with innovative solutions and strategic expertise.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>SEO Optimization</li>
              <li>Marketing Strategy</li>
              <li>Data Analysis</li>
              <li>Web Development</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-white/80">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Case Studies</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <ul className="space-y-2 text-white/80">
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Catch22 Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
export default Footer
