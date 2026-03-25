export interface KwitansiData {
	kwitansiNumber: string;
	receivedFrom: string;
	amount: number;
	paymentFor: string;
	city: string;
	date: string;
	signeeName: string;
	signeeRole: string; // Opsional
}

// Format number to 'Rp 1.000.000'
export function formatRupiah(value: number): string {
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0
	}).format(value);
}

// Convert numbers to words (Terbilang)
export function terbilangRupiah(amount: number): string {
	if (amount === 0) return 'Nol Rupiah';

	const words = [
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

	function convert(n: number): string {
		if (n < 12) return words[n];
		if (n < 20) return words[n - 10] + ' Belas';
		if (n < 100) return words[Math.floor(n / 10)] + ' Puluh ' + words[n % 10];
		if (n < 200) return 'Seratus ' + convert(n - 100);
		if (n < 1000) return words[Math.floor(n / 100)] + ' Ratus ' + convert(n % 100);
		if (n < 2000) return 'Seribu ' + convert(n - 1000);
		if (n < 1000000) return convert(Math.floor(n / 1000)) + ' Ribu ' + convert(n % 1000);
		if (n < 1000000000) return convert(Math.floor(n / 1000000)) + ' Juta ' + convert(n % 1000000);
		if (n < 1000000000000)
			return convert(Math.floor(n / 1000000000)) + ' Milyar ' + convert(n % 1000000000);
		return convert(Math.floor(n / 1000000000000)) + ' Triliun ' + convert(n % 1000000000000);
	}

	const result = convert(amount).replace(/\s+/g, ' ').trim();
	if (result.endsWith('Rupiah')) return result;

	return result + ' Rupiah';
}

export function generateKwitansiNumber(): string {
	const currentYear = new Date().getFullYear();
	const randomNum = Math.floor(Math.random() * 900) + 100;
	return `INV/${currentYear}/${randomNum}`;
}
