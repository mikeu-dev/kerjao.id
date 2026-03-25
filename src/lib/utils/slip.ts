export interface LineItem {
	id: string; // unique indentifier
	name: string;
	amount: number;
}

export interface SlipData {
	// Corporate Identity
	companyName: string;
	companyAddress: string;

	// Document Details
	periodMonth: string; // e.g., "Oktober"
	periodYear: string; // e.g., "2024"
	printDate: string; // YYYY-MM-DD

	// Employee Profile
	employeeName: string;
	employeeID: string; // NIP or KTP
	employeeRole: string;

	// Financial Data
	incomes: LineItem[];
	deductions: LineItem[];
}

export function formatRupiah(amount: number): string {
	if (isNaN(amount)) return 'Rp 0';
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(amount);
}

export function formatTanggalSlip(dateString: string): string {
	if (!dateString) return '...........';
	return new Date(dateString).toLocaleDateString('id-ID', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

export function getTotal(items: LineItem[]): number {
	return items.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
}
