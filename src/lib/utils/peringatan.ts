export interface PeringatanData {
	spLevel: string; // "1", "2", "3"

	companyName: string;
	hrName: string;
	hrRole: string; // e.g., "HR Manager", "Direktur"

	employeeName: string;
	employeeID: string; // NIK
	employeeRole: string; // Posisi / Jabatan
	employeeDepartment: string; // Departemen

	violationReason: string; // Penjelasan kronologi atau aturan yang dilanggar
	violationDate: string; // Kapan kejadian tersebut (opsional/estimasi)

	city: string;
	date: string; // Tanggal pembuaatan
	referenceNumber: string; // Nomor surat otomatis
}

export function generateSPNumber(): string {
	const currentYear = new Date().getFullYear();
	const randomNum = Math.floor(Math.random() * 900) + 100;
	// e.g. 152/HRD-SP/2024
	return `${randomNum}/HRD-SP/${currentYear}`;
}

export function generateSPDescription(level: string): string {
	if (level === '1') return 'Surat Peringatan Pertama (SP 1)';
	if (level === '2') return 'Surat Peringatan Kedua (SP 2)';
	if (level === '3') return 'Surat Peringatan Ketiga (SP 3)';
	return 'Surat Peringatan';
}
