import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Droplets, Zap, Users } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Leaf,
      title: "Teknologi Modern",
      description: "Sistem hidroponik canggih dengan kontrol otomatis untuk hasil optimal",
    },
    {
      icon: Droplets,
      title: "Hemat Air",
      description: "Menggunakan 90% lebih sedikit air dibanding pertanian konvensional",
    },
    {
      icon: Zap,
      title: "Efisien Energi",
      description: "Sistem LED dan pompa hemat energi untuk operasional berkelanjutan",
    },
    {
      icon: Users,
      title: "Dukungan Penuh",
      description: "Tim ahli siap membantu dari instalasi hingga panen pertama",
    },
  ]

  return (
    <section id="tentang" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Tentang Deedad Hidroponik
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Kami adalah pionir teknologi hidroponik modern di Indonesia, berkomitmen menghadirkan solusi pertanian
            berkelanjutan untuk masa depan yang lebih hijau dan produktif.
          </p>
        </div>

        <div className="bg-card rounded-lg p-8 mb-16 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Sejarah Singkat Deedad</h3>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              <strong>Usahatani Deedad Hidroponik</strong> didirikan pada tahun 2017 oleh Bapak Nur Ikshan Arifin (Pak
              Ikhsan). Usaha ini berawal dari ketertarikan beliau dalam bidang pertanian modern. Pada dua tahun awal,
              usaha ini masih dalam skala hobi belum dalam skala bisnis komersial.
            </p>
            <p className="mb-4">
              Seiring berjalannya waktu, Pak Ikhsan mulai menambah ilmu dan pengalamannya secara otodidak. Beliau juga
              bergabung dengan <strong>Komunitas Hidroponik Makassar</strong> untuk menambah pengetahuan, memperluas
              relasi, dan bertukar pengalaman dengan sesama petani hidroponik di Makassar.
            </p>
            <p className="mb-4">
              Pada tahun 2019, Pak Ikhsan mulai serius mengembangkan bisnis Usahatani Deedad Hidroponik. Pada tahun ini
              beliau mengembangkan usahanya dalam skala bisnis dengan <strong>1.000 Lubang Tanam (LT)</strong>. Sistem
              hidroponik yang digunakan adalah model <strong>Nutrient Film Technique (NFT)</strong>.
            </p>
            <p className="mb-4">
              Sistem NFT merupakan cara budidaya tanaman dengan akar tanaman yang tumbuh pada lapisan nutrisi dangkal
              dan tersirkulasi, sehingga tanaman memperoleh cukup air, nutrisi, dan oksigen. Dengan demikian, tanaman
              tumbuh seragam dengan distribusi nutrisi Part Per Million (PPM) yang merata, menghasilkan pertumbuhan yang
              cepat dan maksimal.
            </p>
            <p>
              Komoditi yang dibudidayakan meliputi{" "}
              <strong>selada hijau, daun mint, kangkung, pakcoy, daun kari, basil, dan seledri</strong>. Hingga tahun
              2023, Usahatani Deedad Hidroponik terus bertahan dan semakin dikenal oleh masyarakat luas sebagai pelopor
              pertanian hidroponik modern di wilayah Makassar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-balance">
              Apa itu Hidroponik Modern?
            </h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              Hidroponik adalah metode bercocok tanam tanpa menggunakan tanah, melainkan menggunakan larutan nutrisi
              yang kaya akan mineral. Teknologi modern kami mengintegrasikan sensor IoT, sistem otomatis, dan monitoring
              real-time.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Tanaman tumbuh 30-50% lebih cepat
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Hasil panen hingga 3x lipat lebih banyak
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Bebas pestisida dan bahan kimia berbahaya
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                Dapat ditanam di lahan terbatas
              </li>
            </ul>
          </div>

          <div className="relative">
            <img
              src="/close-up-of-hydroponic-lettuce-growing-in-nft-syst.jpg"
              alt="Hydroponic System Close-up"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
              100%
              <br />
              Organik
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
