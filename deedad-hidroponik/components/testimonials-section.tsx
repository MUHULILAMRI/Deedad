import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Petani Urban",
      location: "Bantaeng",
      image: "/placeholder-x71eb.png",
      rating: 5,
      text: "Sejak menggunakan sistem hidroponik Deedad, hasil panen sayuran saya meningkat 3x lipat. Tim support mereka sangat membantu dari awal instalasi hingga panen pertama.",
    },
    {
      name: "Sari Dewi",
      role: "Pengusaha Restoran",
      location: "Bulukumba",
      image: "/placeholder-fl4ps.png",
      rating: 5,
      text: "Kualitas sayuran organik dari sistem hidroponik ini luar biasa. Pelanggan restoran saya sangat puas dengan kesegaran dan rasa sayuran yang kami sajikan.",
    },
    {
      name: "Ahmad Rizki",
      role: "Mahasiswa Pertanian",
      location: "Maros",
      image: "/placeholder-ior7u.png",
      rating: 5,
      text: "Program pelatihan hidroponik Deedad sangat komprehensif. Sekarang saya bisa menjalankan bisnis hidroponik sendiri dengan percaya diri.",
    },
    {
      name: "Ibu Ratna",
      role: "Ibu Rumah Tangga",
      location: "Makassar",
      image: "/placeholder-mq58s.png",
      rating: 5,
      text: "Dengan sistem hidroponik mini di balkon, keluarga saya bisa menikmati sayuran segar setiap hari. Hemat belanja dan lebih sehat!",
    },
  ]

  return (
    <section id="testimoni" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Testimoni Pelanggan</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Dengarkan pengalaman nyata dari para petani dan pelanggan yang telah merasakan manfaat teknologi hidroponik
            Deedad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 relative">
              <CardContent className="p-8">
                <div className="absolute top-6 right-6 text-primary/20">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 text-pretty italic">"{testimonial.text}"</p>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent> 
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Pelanggan Puas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">Rating Kepuasan</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Tingkat Keberhasilan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
