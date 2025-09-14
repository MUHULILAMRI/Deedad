# Deedad Hidroponik

Ini adalah aplikasi web untuk Deedad Hidroponik, yang dibangun dengan Next.js dan TypeScript.

## Tentang Proyek

Proyek ini adalah situs web modern dan responsif untuk bisnis hidroponik. Situs ini menampilkan produk, keunggulan, dan testimoni pelanggan perusahaan.

### Dibangun Dengan

*   [Next.js](https://nextjs.org/) - Kerangka Kerja React untuk Produksi
*   [React](https://reactjs.org/) - Pustaka JavaScript untuk membangun antarmuka pengguna
*   [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript yang diketik
*   [Tailwind CSS](https://tailwindcss.com/) - Kerangka kerja CSS yang mengutamakan utilitas
*   [pnpm](https://pnpm.io/) - Manajer paket yang cepat dan hemat ruang disk

## Memulai

Untuk menjalankan salinan lokal, ikuti langkah-langkah sederhana ini.

### Prasyarat

Anda harus menginstal [Node.js](https://nodejs.org/) dan [pnpm](https://pnpm.io/installation) di mesin Anda.

### Instalasi

1.  Kloning repo
    ```sh
    git clone https://github.com/nama_pengguna_anda/deedad-hidroponik.git
    ```
2.  Instal paket PNPM
    ```sh
    pnpm install
    ```

### Menjalankan Aplikasi

Untuk menjalankan aplikasi di lingkungan pengembangan, gunakan perintah berikut:

```sh
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) dengan browser Anda untuk melihat hasilnya.

## Skrip yang Tersedia

Di direktori proyek, Anda dapat menjalankan:

-   `pnpm dev`: Menjalankan aplikasi dalam mode pengembangan.
-   `pnpm build`: Membangun aplikasi untuk produksi ke folder `.next`.
-   `pnpm start`: Memulai server produksi Next.js.
-   `pnpm lint`: Menjalankan ESLint untuk semua file di direktori `src`.

## Struktur Proyek

-   `app/`: Berisi file inti aplikasi, termasuk halaman dan tata letak.
-   `components/`: Berisi komponen React yang dapat digunakan kembali.
-   `lib/`: Berisi fungsi utilitas.
-   `public/`: Berisi aset statis seperti gambar.

## Struktur Landing Page

Halaman utama (landing page) dirancang untuk menjadi pengenalan yang komprehensif dan menarik bagi bisnis "Deedad Hidroponik". Halaman ini terdiri dari beberapa bagian utama yang disusun secara strategis untuk memandu pengunjung.

Berikut adalah penjelasan untuk setiap bagiannya:

1.  **Header:** Ini adalah bagian paling atas halaman yang biasanya berisi logo perusahaan, menu navigasi utama (seperti Beranda, Tentang Kami, Produk, Kontak), dan mungkin tombol ajakan bertindak (call-to-action) utama.

2.  **Hero Section:** Ini adalah bagian pertama yang dilihat pengunjung. Tujuannya adalah untuk menarik perhatian dengan gambar yang kuat atau slogan yang menarik tentang hidroponik. Biasanya berisi judul utama yang menyoroti nilai jual unik dari Deedad Hidroponik.

3.  **About Section:** Bagian ini menjelaskan lebih dalam tentang "Siapa Deedad Hidroponik". Ini bisa berisi cerita di balik berdirinya usaha, misi dan visi perusahaan, dan apa yang membuat bisnis Anda spesial.

4.  **Products Section:** Di sini Anda memamerkan produk-produk yang Anda tawarkan. Setiap produk dapat ditampilkan dengan gambar, nama, deskripsi singkat, dan mungkin harga. Tujuannya adalah untuk menunjukkan secara konkret apa yang bisa didapatkan pelanggan.

5.  **Advantages Section:** Bagian ini menyoroti keunggulan atau manfaat dari produk atau metode hidroponik yang Anda gunakan. Misalnya, "Lebih Sehat", "Ramah Lingkungan", "Panen Lebih Cepat". Ini membantu meyakinkan calon pelanggan tentang kualitas dan keunggulan produk Anda.

6.  **Testimonials Section:** Bagian ini berisi kutipan atau ulasan dari pelanggan yang sudah puas. Testimoni adalah bukti sosial yang sangat kuat untuk membangun kepercayaan dengan pengunjung baru.

7.  **CTA (Call-to-Action) Section:** Ini adalah bagian yang sangat penting yang bertujuan untuk mendorong pengunjung melakukan tindakan tertentu. Misalnya, "Hubungi Kami Sekarang!", "Dapatkan Penawaran", atau "Mulai Bertani Hidroponik Hari Ini!". Biasanya berisi tombol yang jelas dan menonjol.

8.  **Footer:** Bagian paling bawah halaman yang berisi informasi tambahan seperti detail kontak, tautan ke media sosial, peta lokasi, dan tautan penting lainnya.

Secara keseluruhan, alur halaman ini dirancang untuk membawa pengunjung dari pengenalan awal (Hero), membangun minat dan kepercayaan (About, Advantages, Testimonials), menunjukkan apa yang Anda tawarkan (Products), dan akhirnya mendorong mereka untuk mengambil langkah selanjutnya (CTA).
