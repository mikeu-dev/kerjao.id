export interface JalanItem {
	id: string; // unique identifier
	name: string; // Deskripsi barang
	kode: string; // SKU or Item Code (optional)
	quantity: number;
	unit: string; // Pcs, Kg, Box, dll
	note: string; // Keterangan per item (misal "1 kardus agak penyok")
}

export interface JalanData {
	// Pengirim (The Sender/Warehouse)
	senderCompany: string;
	senderAddress: string;
	senderContact: string;

	// Penerima (The Receiver/Destination)
	receiverCompany: string;
	receiverName: string; // PIC Penerima
	receiverAddress: string;
	receiverContact: string;

	// Armada & Logistik
	driverName: string;
	vehicleNumber: string; // Nopol Kendaraan
	shippingMethod: string; // Kargo/Kurir Internal dll (opsional)

	// Letter Properties
	suratJalanNumber: string; // e.g SJ-2024-001
	poReference: string; // Referensi No. PO atau No. SO
	date: string; // Delivery Date

	// Products/Services table
	items: JalanItem[];

	// General Notes
	note: string; // Special instructions
}

export function formatTanggal(dateString: string): string {
	if (!dateString) return '..........';
	return new Date(dateString).toLocaleDateString('id-ID', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

export function getTotalQuantity(items: JalanItem[]): number {
	return items.reduce((sum, item) => {
		const q = Number(item.quantity) || 0;
		return sum + q;
	}, 0);
}
