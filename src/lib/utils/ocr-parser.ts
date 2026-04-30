export interface ScannedItem {
	name: string;
	price: number;
	quantity: number;
}

export interface ScannedExtra {
	name: string;
	amount: number;
}

export function parseReceiptText(text: string): {
	items: ScannedItem[];
	extras: ScannedExtra[];
} {
	const lines = text.split('\n').map((l) => l.trim()).filter((l) => l.length > 5);
	const items: ScannedItem[] = [];
	const extras: ScannedExtra[] = [];

	// Keywords for extra costs/discounts
	const feeKeywords = ['layanan', 'service', 'ongkir', 'delivery', 'pajak', 'tax', 'pb1'];
	const discountKeywords = ['diskon', 'discount', 'voucher', 'promo', 'potongan'];

	for (const line of lines) {
		const lowerLine = line.toLowerCase();
		
		// Skip total/subtotal lines to avoid double counting
		if (lowerLine.includes('total') || lowerLine.includes('subtotal') || lowerLine.includes('tunai') || lowerLine.includes('kembali')) {
			continue;
		}

		// Try to find price (e.g., 25.000 or 25000)
		// Matches patterns like 25.000, 25,000, or 25000
		const priceMatch = line.match(/(\d{1,3}(?:[.,]\d{3})+|\d{4,7})/);
		if (!priceMatch) continue;

		const rawPrice = priceMatch[0].replace(/[.,]/g, '');
		const price = parseInt(rawPrice);
		if (isNaN(price) || price === 0) continue;

		// Try to find quantity (e.g., 2x or x2)
		const qtyMatch = line.match(/(\d+)\s*[xX]|[xX]\s*(\d+)/);
		const quantity = qtyMatch ? parseInt(qtyMatch[1] || qtyMatch[2]) : 1;

		// Extract name (remove price and quantity parts)
		let name = line
			.replace(priceMatch[0], '')
			.replace(qtyMatch ? qtyMatch[0] : '', '')
			.replace(/[Rp|.]/gi, '')
			.trim();

		// Cleanup name from weird OCR artifacts
		name = name.replace(/^[^\w]+|[^\w]+$/g, '');

		if (name.length < 2) continue;

		// Check if it's a fee or discount
		const isFee = feeKeywords.some((k) => name.toLowerCase().includes(k));
		const isDiscount = discountKeywords.some((k) => name.toLowerCase().includes(k));

		if (isFee || isDiscount) {
			extras.push({
				name,
				amount: isDiscount ? -Math.abs(price) : price
			});
		} else {
			items.push({
				name,
				price,
				quantity
			});
		}
	}

	return { items, extras };
}
