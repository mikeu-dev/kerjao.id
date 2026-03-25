export interface POItem {
	id: string; // unique identifier
	name: string;
	kode: string; // SKU or Item Code
	quantity: number;
	unit: string; // Pcs, Kg, Box, dll
	price: number;
}

export interface POData {
	// Buyer details (The one creating the PO)
	buyerName: string;
	buyerCompany: string;
	buyerAddress: string;
	buyerContact: string;

	// Shipping details (Where to send the goods)
	shippingAddress: string;
	shippingDate: string;
	shippingMethod: string;

	// Vendor details (The supplier)
	vendorCompany: string;
	vendorContact: string; // Person/Dept
	vendorAddress: string;

	// Letter Properties
	poNumber: string; // e.g PO-2024-001
	date: string; // Issue date
	paymentTerms: string; // e.g Net 30, Cash On Delivery

	// Products/Services table
	items: POItem[];

	// Financial logic
	taxRate: number; // e.g 11 for PPN 11%
	discount: number; // Flat discount
	shippingCost: number; // Ongkir
	note: string; // Special instructions
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

export function getSubtotal(items: POItem[]): number {
	return items.reduce((sum, item) => {
		const q = Number(item.quantity) || 0;
		const p = Number(item.price) || 0;
		return sum + q * p;
	}, 0);
}
