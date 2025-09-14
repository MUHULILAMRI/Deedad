import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/wide-shot-of-modern-hydroponic-greenhouse-with-row.jpg"
          alt="Modern Hydroponic Greenhouse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Siap Memulai Perjalanan Hidroponik Anda?
          </h2>

          <p className="text-xl sm:text-2xl mb-8 text-green-100 max-w-2xl mx-auto text-pretty">
            Bergabunglah dengan ratusan petani sukses yang telah merasakan manfaat teknologi hidroponik modern bersama
            Deedad
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold group">
              Konsultasi
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold bg-transparent"
            >
              Download Katalog
            </Button>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30">
              <Phone className="w-6 h-6 text-green-200" />
              <div className="text-left">
                <div className="font-semibold text-white">Hubungi Kami</div>
                <div className="text-green-200">+628142985439</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 p-4 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30">
              <Mail className="w-6 h-6 text-green-200" />
              <div className="text-left">
                <div className="font-semibold text-white">Email Kami</div>
                <div className="text-green-200">info@deedadhidroponik.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
