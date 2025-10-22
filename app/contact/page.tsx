import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <PageHero
        title="Get In Touch"
        subtitle="Ready to grow your business? Let's discuss how our digital marketing expertise can help you achieve your goals."
      />

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-[#e5e7eb]">
              <CardContent className="p-8">
                <h2 className="text-2xl font-medium text-black mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad]">
                      <option>Select a service</option>
                      <option>Search Engine Optimization</option>
                      <option>Pay-Per-Click Advertising</option>
                      <option>Social Media Marketing</option>
                      <option>Email Marketing</option>
                      <option>Web Development</option>
                      <option>Full Digital Strategy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004aad]"
                      placeholder="Tell us about your project and goals..."
                    ></textarea>
                  </div>

                  <Button className="bg-[#004aad] hover:bg-[#003a8c] text-white w-full py-3">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-medium text-black mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you succeed. Reach out to us through any of these channels and we'll get back to
                  you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-[#e5e7eb]">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-[#004aad] mt-1" />
                    <div>
                      <h3 className="font-medium text-black mb-1">Office Address</h3>
                      <p className="text-gray-600">
                        123 Digital Avenue
                        <br />
                        Marketing District
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#e5e7eb]">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-[#004aad] mt-1" />
                    <div>
                      <h3 className="font-medium text-black mb-1">Phone Number</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#e5e7eb]">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-[#004aad] mt-1" />
                    <div>
                      <h3 className="font-medium text-black mb-1">Email Address</h3>
                      <p className="text-gray-600">hello@catch22digital.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#e5e7eb]">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-[#004aad] mt-1" />
                    <div>
                      <h3 className="font-medium text-black mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Response Promise */}
              <Card className="border-[#004aad] bg-[#004aad]/5">
                <CardContent className="p-6 text-center">
                  <h3 className="font-medium text-[#004aad] mb-2">Quick Response Guarantee</h3>
                  <p className="text-gray-600">
                    We respond to all inquiries within 24 hours during business days. For urgent matters, call us
                    directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-black mb-6">Visit Our Office</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of the digital marketing district, we're easy to find and always ready to meet.
            </p>
          </div>

          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Interactive Map Placeholder</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
