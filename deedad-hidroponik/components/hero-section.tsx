import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-hydroponic-farm-with-green-leafy-vegetables.jpg"
          alt="Modern Hydroponic Farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-balance leading-tight">
            <span className="text-white drop-shadow-lg font-bold">Deedad Hidroponik:</span>
            <span className="block mt-2 text-green-300 font-black tracking-wide drop-shadow-2xl">
              Solusi Pertanian Masa Depan
            </span>
          </h1>

          <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto text-pretty">
            Panen lebih sehat, hemat lahan, ramah lingkungan dengan teknologi hidroponik modern terdepan
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group"
            >
              Mulai Bersama Kami
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold bg-transparent"
            >
              <Play className="mr-2 w-5 h-5" />
              Lihat Video
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Petani Mitra</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300">Hemat Air</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">3x</div>
              <div className="text-gray-300">Hasil Panen</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
