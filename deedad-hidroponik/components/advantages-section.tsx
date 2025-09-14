import { Card, CardContent } from "@/components/ui/card"
import { Droplets, Award, Building, Leaf } from "lucide-react"

export function AdvantagesSection() {
  const advantages = [
    {
      icon: Droplets,
      title: "Hemat Air",
      description:
        "Menggunakan sistem sirkulasi tertutup yang menghemat hingga 90% penggunaan air dibanding pertanian konvensional",
      stat: "90%",
      statLabel: "Lebih Hemat Air",
    },
    {
      icon: Award,
      title: "Hasil Berkualitas",
      description:
        "Produk organik bebas pestisida dengan nutrisi terkontrol menghasilkan sayuran dan buah berkualitas premium",
      stat: "100%",
      statLabel: "Organik Alami",
    },
    {
      icon: Building,
      title: "Cocok untuk Perkotaan",
      description:
        "Sistem vertikal dan kompak memungkinkan bercocok tanam di lahan terbatas seperti rooftop dan balkon",
      stat: "5x",
      statLabel: "Lebih Efisien Lahan",
    },
    {
      icon: Leaf,
      title: "Ramah Lingkungan",
      description: "Mengurangi jejak karbon dengan produksi lokal, tanpa pestisida, dan sistem energi terbarukan",
      stat: "70%",
      statLabel: "Kurangi Emisi CO₂",
    },
  ]

  return (
    <section id="keunggulan" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Keunggulan Hidroponik Modern
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Teknologi hidroponik memberikan solusi pertanian yang lebih efisien, berkelanjutan, dan menguntungkan untuk
            masa depan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <advantage.icon className="w-8 h-8 text-primary" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3 text-balance">{advantage.title}</h3>
                    <p className="text-muted-foreground mb-4 text-pretty">{advantage.description}</p>

                    <div className="flex items-center space-x-2">
                      <div className="text-2xl font-bold text-primary">{advantage.stat}</div>
                      <div className="text-sm text-muted-foreground">{advantage.statLabel}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">365</div>
            <div className="text-muted-foreground">Hari Panen/Tahun</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">30%</div>
            <div className="text-muted-foreground">Lebih Cepat Tumbuh</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">0</div>
            <div className="text-muted-foreground">Pestisida</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  )
}
