export interface PihakNDA {
	nama: string;
	perusahaan: string;
	alamat: string;
	jabatan: string;
}

export interface NDAData {
	pihak1: PihakNDA; // Disclosing Party
	pihak2: PihakNDA; // Receiving Party
	tujuan: string; // Tujuan pembukaan rahasia (misal: diskusi proyek X)
	jangkaWaktu: string; // Masa berlaku kerahasiaan (misal: 2 tahun)
	tanggal: string;
	lokasi: string;
	ttdPihak1?: string;
	ttdPihak2?: string;
	lang?: 'id' | 'en';
}

export function generateNDANumber() {
	const year = new Date().getFullYear();
	const random = Math.floor(Math.random() * 900) + 100;
	return `${random}/NDA/KJ/${year}`;
}
