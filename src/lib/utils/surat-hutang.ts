export interface HutangData {
	// Pihak Pertama (Pemberi Pinjaman / Kreditor)
	lenderName: string;
	lenderNik: string;
	lenderAddress: string;
	lenderJob: string;

	// Pihak Kedua (Peminjam / Debitur)
	borrowerName: string;
	borrowerNik: string;
	borrowerAddress: string;
	borrowerJob: string;

	// Detail Finansial Pinjaman
	loanAmount: number;
	loanPurpose: string; // Misal: "Modal Kerja Warung Kopi"

	// Detail Waktu
	loanDate: string; // Tanggal diserahkan
	dueDate: string; // Jatuh tempo
	handoverMethod: string; // "Tunai" atau "Transfer Bank BCA 1234..."

	// Skema & Jaminan
	collateral: string; // BPKB / Emas / Sertifikat (Opsional)
	latePenalty: string; // Denda keterlambatan (Opsional)

	// Saksi (Opsional)
	witness1: string;
	witness2: string;

	// Properti Kop
	city: string; // Kota pembuatan surat
}

export function formatTanggalLengkap(dateString: string): string {
	if (!dateString) return '..........';
	return new Date(dateString).toLocaleDateString('id-ID', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

export function formatTanggal(dateString: string): string {
	if (!dateString) return '..........';
	return new Date(dateString).toLocaleDateString('id-ID', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

export function formatCurrency(amount: number): string {
	if (isNaN(amount)) return 'Rp 0';
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(amount);
}

// Terbilang Algoritma
const angkas = [
	'',
	'Satu',
	'Dua',
	'Tiga',
	'Empat',
	'Lima',
	'Enam',
	'Tujuh',
	'Delapan',
	'Sembilan',
	'Sepuluh',
	'Sebelas'
];

function terbilangRatusan(angka: number): string {
	if (angka < 12) return angkas[angka];
	if (angka < 20) return terbilangRatusan(angka - 10) + ' Belas';
	if (angka < 100)
		return terbilangRatusan(Math.floor(angka / 10)) + ' Puluh ' + terbilangRatusan(angka % 10);
	if (angka < 200) return 'Seratus ' + terbilangRatusan(angka - 100);
	return terbilangRatusan(Math.floor(angka / 100)) + ' Ratus ' + terbilangRatusan(angka % 100);
}

export function getTerbilang(angka: number): string {
	if (angka === 0) return 'Nol';
	if (angka < 0) return 'Minus ' + getTerbilang(Math.abs(angka));

	let result = '';
	if (angka < 1000) result = terbilangRatusan(angka);
	else if (angka < 2000) result = 'Seribu ' + getTerbilang(angka - 1000);
	else if (angka < 1000000)
		result = getTerbilang(Math.floor(angka / 1000)) + ' Ribu ' + getTerbilang(angka % 1000);
	else if (angka < 1000000000)
		result = getTerbilang(Math.floor(angka / 1000000)) + ' Juta ' + getTerbilang(angka % 1000000);
	else if (angka < 1000000000000)
		result =
			getTerbilang(Math.floor(angka / 1000000000)) + ' Miliar ' + getTerbilang(angka % 1000000000);
	else
		result =
			getTerbilang(Math.floor(angka / 1000000000000)) +
			' Triliun ' +
			getTerbilang(angka % 1000000000000);

	return result.trim();
}
