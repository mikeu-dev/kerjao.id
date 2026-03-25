# Kerjao.id - Kumpulan Alat Karir & Bisnis Profesional Indonesia

Aplikasi web _client-side_ tanpa _state_ (stateless) yang menyediakan 15 perkakas (tools) profesional untuk mempermudah urusan karir, HRD, bisnis, dan keuangan di Indonesia. Dibangun menggunakan **Svelte 5** dan **SvelteKit** yang dioptimalkan dengan elegan menggunakan **Tailwind CSS v4**. Aplikasi berjalan 100% tanpa database dan tanpa penyimpanan riwayat data pengguna di server, menjamin privasi secara mutlak.

## 🧰 15 Koleksi Perkakas Kerjao

Saat ini platform memuat rangkaian aplikasi mikro gratis berikut:

**Surat & Karir:**

1. Surat Lamaran Kerja (Cover Letter)
2. Surat Pengunduran Diri (Resign)
3. Surat Kuasa
4. Surat Keterangan Kerja (Paklaring)
5. Surat Izin Cuti

**Bisnis & HR:** 6. Kontrak Kerja Freelance (MoU / Perjanjian) 7. Surat Peringatan Karyawan (SP 1, 2, 3) 8. Surat Perjanjian Hutang Piutang 9. Surat Jalan (Delivery Note) 10. Surat Penawaran Harga B2B (Quotation) 11. Purchase Order (PO)

**Keuangan:** 12. Kalkulator Gaji & THP 13. Invoice Generator Digital 14. Kwitansi Digital 15. Slip Gaji (Pay Slip)

## ✨ Fitur Utama

- **Pembuatan Cepat:** Masukkan data di form dan surat akan diperbarui seketika menggunakan kereaktifan tinggi dari _Svelte 5 Runes_.
- **Privasi Terjamin:** Semua proses penyusunan teks dan kalkulasi data terjadi mutlak di _browser_ milik pengguna. Tidak ada transmisi informasi pribadi apa pun ke server.
- **Standar Estetik Premium:** _Glassmorphic design_ dengan antarmuka pengguna _(UI)_ dan _User Experience (UX)_ setara kelas bisnis (SaaS profesional modern). Output cetak PDF dikalibrasi ketat ke standar kertas _portrait_ dan _landscape_ ukuran A4/A5 resmi.
- **Tanpa Login & Berlangganan:** Digunakan secara instan di peramban, gratis 100% dan bebas dari gangguan birokrasi pendaftaran asuransi/akun.
- **Salin dan Cetak:** Ekspor surat dan hasil generator dengan menyimpan halaman web sebagai dokumen PDF, memanfaatkan manipulasi model tata letak cetak (_print-friendly_ CSS) dari utilitas internal antarmuka.

## 🛠 Stack Teknologi

- **Framework:** Svelte 5 & SvelteKit
- **Styling:** Tailwind CSS v4 (termasuk modul plugin _Typography_ & _Forms_)
- **Linting & Formatting:** ESLint & Prettier
- **Testing:** Vitest & Playwright

## 🚀 Pengembangan Lokal

Setelah proyek dikloning, pastikan **Node.js** dan manajemen paket `pnpm` sudah terpasang. Instal seluruh dependensi dengan menjalankan:

```sh
pnpm install
```

Mulai _development server_ lokal Svelte:

```sh
pnpm run dev

# atau jalankan dan instruksikan server SvelteKit untuk langsung membuka tab di peramban otomatis dengan:
pnpm run dev -- --open
```

Buka halaman rute utama (`/`) untuk mengeksplorasi panel _Mega Menu Header_ yang mewadahi seluk-beluk seluruh navigasi generator mandiri di Kerjao.id.

## 📦 Panduan Build Production

Untuk memaketkan versi mandiri yang siap diangkat ke arsitektur produksi (_production server/edge computing_), seperti Vercel dan kawanannya:

```sh
pnpm run build
```

Pratinjau (_preview_) hasil proses _build_ kompilasi statis secara lokal dengan perintah terminal:

```sh
pnpm run preview
```
