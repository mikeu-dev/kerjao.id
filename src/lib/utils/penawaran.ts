export interface QuotationItem {
	id: string; // unique identifier
	name: string;
	quantity: number;
	price: number;
}

export interface PenawaranData {
	// Sender details (Vendor)
	senderName: string;
	senderTitle: string; // e.g Manager / Director
	senderCompany: string;
	senderAddress: string;
	senderContact: string; // Phone / Email

	// Client details (Recipient)
	clientName: string;
	clientCompany: string;
	clientAddress: string;

	// Letter Properties
	letterNumber: string; // e.g SP-2024-001
	city: string;
	date: string; // Issue date
	validUntil: string; // Validity date

	// Opening text/Pitch
	subject: string;
	openingText: string;

	// Products/Services table
	items: QuotationItem[];

	// Financial rules
	taxRate: number; // e.g 11 for PPN 11%
	discount: number; // Flat discount
	note: string; // Term of payment, ETA, e.t.c
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

export function formatTanggal(dateString: string): string {
	if (!dateString) return '..........';
	return new Date(dateString).toLocaleDateString('id-ID', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

export function getSubtotal(items: QuotationItem[]): number {
	return items.reduce((sum, item) => {
		const q = Number(item.quantity) || 0;
		const p = Number(item.price) || 0;
		return sum + q * p;
	}, 0);
}
