export interface KuasaData {
	// Waktu Pembuatan
	city: string;
	date: string; // YYYY-MM-DD

	// PIHAK 1 (Pemberi Kuasa)
	giverName: string;
	giverID: string; // NIK KTP
	giverJob: string; // Pekerjaan
	giverAddress: string;

	// PIHAK 2 (Penerima Kuasa)
	receiverName: string;
	receiverID: string; // NIK KTP
	receiverJob: string; // Pekerjaan
	receiverAddress: string;

	// Hal yang dikuasakan
	powerDescription: string;
}

// Convert YYYY-MM-DD to "15 November 2024"
export function formatTanggalIndonesia(dateString: string): string {
	if (!dateString) return '.........., ........, ..............';
	const d = new Date(dateString);
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	return d.toLocaleDateString('id-ID', options);
}
