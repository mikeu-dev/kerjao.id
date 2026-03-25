export interface PihakSPK {
	nama: string;
	jabatan: string;
	perusahaan: string;
	alamat: string;
	kontak: string;
}

export interface SPKData {
	nomorSpk: string;
	tanggalSpk: string;
	pemberiKerja: PihakSPK;
	pelaksana: PihakSPK;
	proyek: {
		nama: string;
		lokasi: string;
		deskripsi: string;
		ruangLingkup: string[];
	};
	waktu: {
		mulai: string;
		selesai: string;
	};
	biaya: {
		nominal: number;
		terbilang: string;
		catatan: string;
	};
}

export function generateSpkNumber() {
	const year = new Date().getFullYear();
	const random = Math.floor(Math.random() * 9000) + 1000;
	return `${random}/SPK/KJ/${year}`;
}
