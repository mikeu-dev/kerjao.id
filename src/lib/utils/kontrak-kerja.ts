export interface PihakKontrak {
	nama: string;
	alamat: string;
	jabatan: string;
	perusahaan?: string;
}

export type TipeKontrak = 'PKWT' | 'PKWTT';

export interface KontrakData {
	perusahaan: {
		nama: string;
		alamat: string;
		wakil: string;
		jabatanWakil: string;
	};
	karyawan: {
		nama: string;
		nik: string;
		tempatLahir: string;
		tanggalLahir: string;
		alamat: string;
		jabatan: string;
	};
	tipe: TipeKontrak;
	masaKerja?: string; // Untuk PKWT (misal: 12 bulan)
	tanggalMulai: string;
	tanggalSelesai?: string; // Untuk PKWT
	gajiPokok: number;
	tunjanganTetap: number;
	lokasiKerja: string;
	tanggalTtd: string;
	nomorSurat: string;
	ttdPengusaha?: string;
	ttdKaryawan?: string;
}

export function generateKontrakNumber() {
	const year = new Date().getFullYear();
	const random = Math.floor(Math.random() * 900) + 100;
	return `${random}/HR-PK/${year}`;
}
