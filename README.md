# kerjao.id - Surat Resign Generator

Aplikasi web *client-side* tanpa *state* (stateless) untuk membuat draf Surat Pengunduran Diri (Resign) secara instan. Dibangun menggunakan **Svelte 5** dan **SvelteKit** yang dioptimalkan dengan **TailwindCSS v4**, tanpa database dan tanpa penyimpanan data pengguna di server, memastikan privasi 100%.

## Fitur Utama

- **Pembuatan Cepat:** Perubahan pada input formulir akan seketika terlihat pada pratinjau surat (menggunakan kereaktifan Svelte 5 Runes).
- **Beragam Pola Bahasa:** Menyediakan 3 gaya bahasa penulisan (Formal, Profesional, Santai).
- **Privasi Terjamin:** Semua proses penyusunan teks terjadi langsung di perangkat (*browser*) pengguna. Tidak ada data yang dikirim maupun disimpan pada basis data (*database*).
- **Tanpa Login:** Langsung bisa digunakan secara gratis.
- **Salin dan Cetak:** Salin teks langsung ke *clipboard* atau cetak ke dokumen format PDF menggunakan fungsi cetak bawaan *browser* (*print layout* telah disesuaikan agar bersih).
- **SEO Ready:** Disematkan atribut meta dan dukungan konten artikel statis untuk meningkatkan pengindeksan organik pencarian.

## Stack Teknologi

- **Framework:** Svelte 5 & SvelteKit
- **Styling:** Tailwind CSS v4 (termasuk *Typography* & *Forms*)
- **Linting & Formatting:** ESLint & Prettier
- **Testing:** Vitest & Playwright

## Pengembangan Lokal

Setelah proyek dikloning, pastikan `pnpm` terpasang. Instal dependensi dengan perintah:

```sh
pnpm install
```

Mulai *development server*:

```sh
pnpm run dev

# atau jalankan dan langsung buka halaman aplikasi di peramban
pnpm run dev -- --open
```

Buka halaman rute `/surat-resign` untuk memuat fitur generator surat resign.

## Membangun Produksi (Build)

Untuk memaketkan versi siap rilis (*production*) menggunakan Vercel Adapter:

```sh
pnpm run build
```

Pratinjau hasil *build* lokal dengan:

```sh
pnpm run preview
```
