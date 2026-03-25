export interface IzinOrtuData {
	namaAnak: string;
	nikAnak: string;
	tempatLahirAnak: string;
	tanggalLahirAnak: string;
	alamatAnak: string;
	namaOrtu: string;
	nikOrtu: string;
	pekerjaanOrtu: string;
	alamatOrtu: string;
	tujuanIzin: string; // Misal: Izin Kerja, Izin Mengikuti Kegiatan
	lokasi: string;
	tanggal: string;
}

export interface RtRwData {
	nama: string;
	nik: string;
	tempatLahir: string;
	tanggalLahir: string;
	pekerjaan: string;
	agama: string;
	alamat: string;
	rt: string;
	rw: string;
	keperluan: string; // Misal: Pengurusan KTP
	nomorSurat: string;
	tanggal: string;
	ketuaRt: string;
	ketuaRw: string;
}

export interface PernyataanData {
	nama: string;
	nik: string;
	alamat: string;
	judul: string;
	isi: string;
	tanggal: string;
	lokasi: string;
}

export function generateDocNumber(prefix: string) {
	const year = new Date().getFullYear();
	const random = Math.floor(Math.random() * 900) + 100;
	return `${random}/${prefix}/${year}`;
}
