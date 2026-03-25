export interface InvoiceItem {
	id: string;
	description: string;
	quantity: number;
	unitPrice: number;
}

export interface InvoiceData {
	invoiceNumber: string;
	issueDate: string;
	dueDate: string;

	vendorName: string;
	vendorDetails: string; // e.g., Address, Phone, Email

	clientName: string;
	clientDetails: string;

	items: InvoiceItem[];

	taxRate: number; // e.g., 0, 11 (for PPN 11%)
	discount: number; // Flat discount amount

	notes: string;
	paymentInfo: string; // e.g., Bank details
}

export interface InvoiceTotals {
	subtotal: number;
	taxAmount: number;
	total: number;
}

export function generateInvoiceId(): string {
	const min = 1000;
	const max = 9999;
	return `INV-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}-${Math.floor(Math.random() * (max - min + 1) + min)}`;
}

export function calculateInvoiceTotals(data: InvoiceData): InvoiceTotals {
	const subtotal = data.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
	const subtotalAfterDiscount = Math.max(0, subtotal - data.discount);
	const taxAmount = subtotalAfterDiscount * (data.taxRate / 100);
	const total = subtotalAfterDiscount + taxAmount;

	return {
		subtotal,
		taxAmount,
		total
	};
}

export function formatRupiah(amount: number): string {
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0
	}).format(amount);
}
