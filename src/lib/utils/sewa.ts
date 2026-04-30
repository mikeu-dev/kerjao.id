export interface PihakSewa {
	nama: string;
	nik: string;
	alamat: string;
	telepon: string;
}

export interface SewaData {
	pihak1: PihakSewa; // Pemilik
	pihak2: PihakSewa; // Penyewa
	properti: {
		alamat: string;
		jenis: 'Rumah' | 'Ruko' | 'Apartemen' | 'Kost';
		fasilitas: string;
	};
	kontrak: {
		nilaiSewa: number;
		durasi: number;
		satuanDurasi: 'Tahun' | 'Bulan';
		tanggalMulai: string;
		tanggalSelesai: string;
		uangJaminan: number;
	};
	pembayaran: {
		metode: string;
		tahapan: string;
	};
}

export function generateSewaId() {
	return Math.random().toString(36).substring(2, 9);
}

export function calculateEndDate(
	startDate: string,
	duration: number,
	unit: 'Tahun' | 'Bulan'
): string {
	if (!startDate) return '';
	const date = new Date(startDate);
	if (unit === 'Tahun') {
		date.setFullYear(date.getFullYear() + duration);
	} else {
		date.setMonth(date.getMonth() + duration);
	}
	// Subtract 1 day to make it "1 year minus 1 day" standard
	date.setDate(date.getDate() - 1);
	return date.toISOString().split('T')[0];
}
