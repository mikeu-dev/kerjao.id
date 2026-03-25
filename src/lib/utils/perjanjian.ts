export interface PerjanjianData {
	// Info Pembuatan
	city: string;
	date: string; // YYYY-MM-DD

	// Pihak Pertama (Klien)
	clientName: string;
	clientRole: string; // e.g. "Direktur Utama", "Individu"
	clientCompany: string; // Opsional
	clientAddress: string;

	// Pihak Kedua (Freelancer)
	freelancerName: string;
	freelancerRole: string; // e.g. "Web Developer", "Graphic Designer"
	freelancerAddress: string;

	// Lingkup Kerja
	projectName: string;
	projectScope: string;

	// Nilai & Waktu
	contractValue: number;
	deadline: string; // e.g. "14 (empat belas) hari kerja", "30 November 2024"
	revisionCount: string; // e.g. "3 (tiga)"
}

// Convert YYYY-MM-DD to "Jumat, 15 November 2024"
export function formatTanggalPanjangHari(dateString: string): string {
	if (!dateString) return '.........., ........, ..............';
	const d = new Date(dateString);
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	return d.toLocaleDateString('id-ID', options);
}

// Rupiah Formatter
export function formatRupiah(value: number): string {
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0
	}).format(value);
}
