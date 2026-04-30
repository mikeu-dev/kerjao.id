
function parseReceiptText(text) {
	const lines = text.split('\n').map((l) => l.trim()).filter((l) => l.length > 5);
	const items = [];
	const extras = [];

	const feeKeywords = ['layanan', 'service', 'ongkir', 'delivery', 'pajak', 'tax', 'pb1'];
	const discountKeywords = ['diskon', 'discount', 'voucher', 'promo', 'potongan'];

	for (const line of lines) {
		const lowerLine = line.toLowerCase();
		
		if (lowerLine.includes('total') || lowerLine.includes('subtotal') || lowerLine.includes('tunai') || lowerLine.includes('kembali')) {
			continue;
		}

		const priceMatch = line.match(/(\d{1,3}(?:[.,]\d{3})+|\d{3,7})/);
		if (!priceMatch) continue;

		const rawPrice = priceMatch[0].replace(/[.,]/g, '');
		const price = parseInt(rawPrice);
		if (isNaN(price) || price === 0) continue;

		const qtyMatch = line.match(/(\d+)\s*[xX]|[xX]\s*(\d+)/);
		const quantity = qtyMatch ? parseInt(qtyMatch[1] || qtyMatch[2]) : 1;

		let name = line
			.replace(priceMatch[0], '')
			.replace(qtyMatch ? qtyMatch[0] : '', '')
			.replace(/Rp/gi, '')
			.replace(/[.-]/g, '')
			.trim();

		name = name.replace(/^[^\w]+|[^\w]+$/g, '');

		if (name.length < 2) continue;

		const isFee = feeKeywords.some((k) => name.toLowerCase().includes(k));
		const isDiscount = discountKeywords.some((k) => name.toLowerCase().includes(k));

		if (isFee || isDiscount) {
			extras.push({
				name,
				amount: isDiscount ? -Math.abs(price) : price
			});
		} else {
			const unitPrice = quantity > 1 ? Math.round(price / quantity) : price;
			items.push({
				name,
				price: unitPrice,
				quantity
			});
		}
	}

	return { items, extras };
}

const sampleText = `
Rincian Pesanan
1 x Paket Kumplit Rp35.500
2 x Ayam Penyet Rp57.000
Subtotal Pesanan (3 menu) Rp92.500
Voucher Diskon -Rp35.000
Biaya Layanan Rp500
Total Rp58.000
Sudah termasuk pajak
`;

const result = parseReceiptText(sampleText);
console.log('Items:', JSON.stringify(result.items, null, 2));
console.log('Extras:', JSON.stringify(result.extras, null, 2));

const grandTotal = result.items.reduce((acc, i) => acc + (i.price * i.quantity), 0) + 
                  result.extras.reduce((acc, e) => acc + e.amount, 0);

console.log('Calculated Grand Total:', grandTotal);
