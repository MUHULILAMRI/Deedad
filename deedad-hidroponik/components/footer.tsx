import { Leaf, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Produk", href: "#produk" },
    { name: "Keunggulan", href: "#keunggulan" },
  ]

  const products = [
    { name: "Sistem NFT", href: "#" },
    { name: "Sistem DWC", href: "#" },
    { name: "Bibit Unggul", href: "#" },
    { name: "Nutrisi Tanaman", href: "#" },
  ]

  return (
    <footer id="kontak" className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-800">Deedad Hidroponik</span>
            </div>
            <p className="text-slate-600 mb-8 text-pretty leading-relaxed">
              Solusi pertanian masa depan dengan teknologi hidroponik modern untuk hasil panen yang lebih sehat dan
              berkelanjutan.
            </p>

            <div className="flex space-x-3">
              <a
                href="#"
                className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 shadow-sm"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 shadow-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 shadow-sm"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-6">Navigasi</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-emerald-600 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-6">Produk & Layanan</h3>
            <ul className="space-y-4">
              {products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    className="text-slate-600 hover:text-emerald-600 transition-colors duration-200 font-medium"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-6">Hubungi Kami</h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="text-slate-600 leading-relaxed">
                  <div className="font-medium text-slate-800 mb-1">Alamat</div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Kebun+sayur,+Jl.+Dg.+Ngadde+No.26,+Parang+Tambung,+Kec.+Tamalate,+Kota+Makassar,+Sulawesi+Selatan+90223"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-600 transition-colors duration-200"
                  >
                    Kebun sayur, Jl. Dg. Ngadde No.26, Parang Tambung, Kec. Tamalate, Kota Makassar, Sulawesi Selatan 90223
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-medium text-slate-800 mb-1">Telepon</div>
                  <a href="tel:+6281234567890" className="text-slate-600 hover:text-emerald-600 transition-colors">
                    +62 812-3456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-medium text-slate-800 mb-1">Email</div>
                  <a
                    href="mailto:info@deedadhidroponik.com"
                    className="text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    info@deedadhidroponik.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-16 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-slate-600 text-sm font-medium">
              ©2024 MUH. ULIL AMRI. Semua hak cipta dilindungi.
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-slate-600 hover:text-emerald-600 text-sm font-medium transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-slate-600 hover:text-emerald-600 text-sm font-medium transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
