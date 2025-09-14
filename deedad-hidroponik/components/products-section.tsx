import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Package, Heading as Seedling, Beaker, MessageCircle } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      icon: Package,
      title: "Paket Selada 1 Pack",
      description: "Formula nutrisi khusus untuk pertumbuhan optimal tanaman hidroponik",
      features: ["AB Mix", "Nutrisi Organik", "pH Buffer", "Suplemen"],
      price: "Mulai dari Rp 25.000",
      badge: "Terlaris",
    },
    {
      icon: Seedling,
      title: "Paket Selada 1 Kg",
      description: "Formula nutrisi khusus untuk pertumbuhan optimal tanaman hidroponik",
      features: ["AB Mix", "Nutrisi Organik", "pH Buffer", "Suplemen"],
      price: "Mulai dari Rp 60.000",
      badge: "Organik",
    },
    {
      icon: Beaker,
      title: "Pakcoi",
      description: "Formula nutrisi khusus untuk pertumbuhan optimal tanaman hidroponik",
      features: ["AB Mix", "Nutrisi Organik", "pH Buffer", "Suplemen"],
      price: "Mulai dari Rp 40.000",
      badge: "Premium",
    },
    {
      icon: MessageCircle,
      title: "Selada Merah",
      description: "Formula nutrisi khusus untuk pertumbuhan optimal tanaman hidroponik",
      features: ["AB Mix", "Nutrisi Organik", "pH Buffer", "Suplemen"],
      price: "Mulai dari Rp 40.000",
      
      badge: "Eksklusif",
    },
  ]

  return (
    <section id="produk" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Produk & Layanan Kami</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Solusi lengkap untuk memulai perjalanan hidroponik Anda, dari sistem hingga konsultasi ahli
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  {product.badge}
                </Badge>
              </div>

              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground text-balance">{product.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-pretty">{product.description}</p>

                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border">
                  <div className="text-lg font-bold text-primary mb-4">{product.price}</div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Pelajari Lebih Lanjut
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Lihat Semua Produk
          </Button>
        </div>
      </div>
    </section>
  )
}
