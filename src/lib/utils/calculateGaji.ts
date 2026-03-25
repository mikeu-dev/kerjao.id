export interface GajiData {
	gajiPokok: number;
	tunjanganTetap: number;
	tunjanganTidakTetap: number;
	statusPajak: string; // 'TK/0', 'K/0', dst
	potonganBPJSKesehatan: boolean;
	potonganJHT: boolean;
	potonganJP: boolean;
	potonganLainnya: number;
}

export interface SlipGajiDeduction {
	name: string;
	amount: number;
}

export interface SlipGajiResult {
	penghasilanBruto: number;
	totalPotongan: number;
	takeHomePay: number;
	deductions: SlipGajiDeduction[];
}

export function calculateGaji(data: GajiData): SlipGajiResult {
	const { gajiPokok, tunjanganTetap, tunjanganTidakTetap } = data;
	const penghasilanBruto = gajiPokok + tunjanganTetap + tunjanganTidakTetap;

	const deductions: SlipGajiDeduction[] = [];
	let totalPotongan = 0;

	// 1. BPJS Kesehatan (1% dari Gaji Pokok + Tunjangan Tetap, maks batas gaji 12.000.000)
	if (data.potonganBPJSKesehatan) {
		const baseKesehatan = Math.min(gajiPokok + tunjanganTetap, 12000000);
		const bpjsKesehatan = baseKesehatan * 0.01;
		deductions.push({ name: 'BPJS Kesehatan (1%)', amount: bpjsKesehatan });
		totalPotongan += bpjsKesehatan;
	}

	// 2. BPJS JHT (2% dari Gaji Pokok + Tunjangan Tetap)
	if (data.potonganJHT) {
		const bpjsJHT = (gajiPokok + tunjanganTetap) * 0.02;
		deductions.push({ name: 'BPJS JHT (2%)', amount: bpjsJHT });
		totalPotongan += bpjsJHT;
	}

	// 3. BPJS JP (1% dari Gaji Pokok + Tunjangan Tetap, maks batas gaji 10.042.300 untuk 2024 diproksikan 10jt)
	if (data.potonganJP) {
		const baseJP = Math.min(gajiPokok + tunjanganTetap, 10042300);
		const bpjsJP = baseJP * 0.01;
		deductions.push({ name: 'BPJS JP (1%)', amount: bpjsJP });
		totalPotongan += bpjsJP;
	}

	// 4. Estimasi PPh 21 (Sangat disederhanakan)
	// Implementasi TER 2024 cukup kompleks, jadi kita gunakan estimasi kasar 5% setelah dikurangi PTKP dasar
	// PTKP bulanan TK/0 = 4.500.000
	const ptkpBulanan = 4500000;
	if (penghasilanBruto > ptkpBulanan) {
		// Estimasi kasar PPh 21
		const pkp = penghasilanBruto - ptkpBulanan;
		const pph21 = pkp * 0.05; // bracket pertama 5%
		if (pph21 > 0) {
			deductions.push({ name: 'Estimasi PPh 21', amount: pph21 });
			totalPotongan += pph21;
		}
	}

	// 5. Potongan Lainnya
	if (data.potonganLainnya > 0) {
		deductions.push({ name: 'Potongan Lainnya', amount: data.potonganLainnya });
		totalPotongan += data.potonganLainnya;
	}

	const takeHomePay = Math.max(0, penghasilanBruto - totalPotongan);

	return {
		penghasilanBruto,
		totalPotongan,
		takeHomePay,
		deductions
	};
}

export function formatRupiah(amount: number): string {
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0
	}).format(amount);
}
