export interface PihakJualBeli {
	nama: string;
	nik: string;
	alamat: string;
	pekerjaan: string;
}

export interface JualBeliData {
	pihak1: PihakJualBeli; // Penjual
	pihak2: PihakJualBeli; // Pembeli
	barang: {
		jenis: 'Kendaraan' | 'Elektronik' | 'Lainnya';
		nama: string;
		merk: string;
		type: string;
		tahun: string;
		warna: string;
		nomorPolisi?: string;
		nomorRangka?: string;
		nomorMesin?: string;
		nomorSeri?: string;
		kondisi: string;
	};
	transaksi: {
		harga: number;
		metode: string;
		tanggal: string;
		lokasi: string;
	};
	saksi1: string;
	saksi2: string;
}

export function generateSJBId() {
	return Math.random().toString(36).substring(2, 9).toUpperCase();
}
