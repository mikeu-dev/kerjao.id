export interface IzinData {
	// Info Pengajuan
	city: string;
	date: string; // YYYY-MM-DD

	// Identitas Pengaju (Karyawan)
	employeeName: string;
	employeeRole: string; // e.g., "Staff IT"
	employeeDepartment: string; // e.g., "Departemen Teknologi"

	// Ditujukan kepada
	managerName: string;
	managerRole: string; // e.g., "HR Manager", "Kepala Divisi"
	companyName: string;

	// Detail Cuti/Izin
	leaveType: string; // "Sakit", "Pendek/Keperluan Keluarga", "Cuti Tahunan", "Melahirkan"
	startDate: string; // YYYY-MM-DD
	endDate: string; // YYYY-MM-DD
	reason: string; // "Menjenguk keluarga sakit keras di luar kota"
}

// Convert YYYY-MM-DD to "15 November 2024"
export function formatTanggalIzin(dateString: string): string {
	if (!dateString) return '...........';
	return new Date(dateString).toLocaleDateString('id-ID', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

export function calculateHariCuti(start: string, end: string): number {
	if (!start || !end) return 0;
	const d1 = new Date(start);
	const d2 = new Date(end);
	// Remove time components for comparison
	d1.setHours(0, 0, 0, 0);
	d2.setHours(0, 0, 0, 0);

	const timeDiff = d2.getTime() - d1.getTime();
	const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

	// Add 1 so "same day" counts as 1 day, next day is 2 days, etc.
	return dayDiff >= 0 ? dayDiff + 1 : 0;
}
