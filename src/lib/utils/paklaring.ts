export interface PaklaringData {
	// Kop Surat (Company Info)
	companyName: string;
	companyAddress: string;
	companyPhone: string;

	// Surat Info
	suratNumber: string;
	issueDate: string;

	// Employee Info
	employeeName: string;
	nik: string; // NIK / ID Karyawan
	lastPosition: string;
	startDate: string;
	endDate: string;

	// Penandatangan (Signee Info)
	signeeName: string;
	signeePosition: string;
}

export function generateSuratNumber(): string {
	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth() + 1;
	const romanMonths = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
	const monthRoman = romanMonths[currentMonth - 1];
	const randomNum = Math.floor(Math.random() * 90) + 10;

	return `${randomNum}/HRD/SKK/${monthRoman}/${currentYear}`;
}
