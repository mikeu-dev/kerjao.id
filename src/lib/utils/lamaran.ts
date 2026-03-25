export interface LamaranData {
	// Info Kota dan Tanggal pembuatan
	city: string;
	date: string;

	// Info Penerima (Perusahaan)
	recipientName: string; // e.g. HRD Manager / Bapak Budi
	companyName: string;
	companyAddress: string;

	// Info Pengirim (Pelamar)
	applicantName: string;
	applicantPlaceBirth: string;
	applicantDateBirth: string;
	applicantEducation: string;
	applicantAddress: string;
	applicantPhone: string;
	applicantEmail: string;

	// Info Posisi dan Sumber Info
	positionApplied: string;
	infoSource: string; // e.g. LinkedIn, JobStreet, Website Perusahaan

	// Lampiran (Checklist)
	lampiranCV: boolean;
	lampiranFoto: boolean;
	lampiranIjazah: boolean;
	lampiranKTP: boolean;
	lampiranPortofolio: boolean;

	// Tambahan
	additionalSkills: string; // Keahlian tambahan
}
