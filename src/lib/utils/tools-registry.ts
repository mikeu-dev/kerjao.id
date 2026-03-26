export interface ToolMetadata {
	name: string;
	description: string;
	path: string;
	category: 'Karir' | 'Bisnis & HR' | 'Keuangan' | 'Personal & Umum' | 'Edukasi';
	icon: string; // Lucide icon name (e.g., 'Banknote', 'Briefcase')
	tags: string[];
	featured?: boolean;
	color?: 'indigo' | 'rose' | 'blue' | 'emerald' | 'orange' | 'teal' | 'red' | 'amber' | 'cyan' | 'violet' | 'slate';
	statusTag?: string;
}

export const toolsRegistry: ToolMetadata[] = [
	{
		name: 'Kalkulator Gaji PPh 21',
		description: 'Simulasi perhitungan gaji bersih (Take-Home Pay) instan. Lengkap dengan potongan BPJS Kes/KTK dan estimasi Pajak PPh 21 TER 2024.',
		path: '/kalkulator-gaji',
		category: 'Keuangan',
		icon: 'Banknote',
		tags: ['pajak', 'gaji', 'karyawan', 'pph21'],
		featured: true,
		color: 'emerald'
	},
	{
		name: 'CV Maker (ATS Friendly)',
		description: 'Generator CV satu kolom ala Harvard. Dijamin 99% lolos seleksi robot pelacak pelamar (ATS) HRD perusahaan Multinasional.',
		path: '/cv-maker',
		category: 'Karir',
		icon: 'FileUser',
		tags: ['cv', 'resume', 'lamaran', 'ats'],
		featured: true,
		color: 'rose',
		statusTag: 'Top'
	},
	{
		name: 'Invoice Generator',
		description: 'Solusi andalan freelancer. Buat dokumen tagihan yang elegan dan kalkulasi PPN/Diskon secara reaktif, lalu unduh ke format PDF.',
		path: '/invoice',
		category: 'Bisnis & HR',
		icon: 'FileText',
		tags: ['tagihan', 'pembayaran', 'freelance'],
		featured: true,
		color: 'blue'
	},
	{
		name: 'Kwitansi Digital',
		description: 'Solusi bukti bayar instan ala buku kwitansi klasik dengan fitur Terbilang yang mengubah nominal menjadi teks ejaan otomatis.',
		path: '/kwitansi',
		category: 'Keuangan',
		icon: 'Receipt',
		tags: ['bukti', 'bayar', 'transaksi'],
		featured: true,
		color: 'emerald'
	},
	{
		name: 'Surat Resign (Mundur Diri)',
		description: 'Draf surat pengunduran diri formal and sopan untuk pengajuan pengunduran diri dari perusahaan.',
		path: '/surat-resign',
		category: 'Karir',
		icon: 'LogOut',
		tags: ['resign', 'keluar', 'kerja'],
		color: 'indigo'
	},
	{
		name: 'Surat Lamaran Kerja',
		description: 'Tulis Cover Letter atau Surat Lamaran kerja formal dalam hitungan detik untuk meningkatkan peluang wawancara.',
		path: '/surat-lamaran',
		category: 'Karir',
		icon: 'Mail',
		tags: ['lamaran', 'kerja', 'apply'],
		featured: true,
		color: 'teal'
	},
	{
		name: 'Surat Paklaring',
		description: 'Generator Surat Keterangan Kerja standar resmi HRD, lengkap dengan perhitungan masa bakti instan.',
		path: '/paklaring',
		category: 'Bisnis & HR',
		icon: 'Briefcase',
		tags: ['pengalaman', 'kerja', 'keterangan'],
		featured: true,
		color: 'orange'
	},
	{
		name: 'Perjanjian Freelance',
		description: 'Generator MoU Surat Perjanjian Kerja Sama dengan templat pasal-pasal standar yang diakui and siap cetak.',
		path: '/surat-perjanjian',
		category: 'Bisnis & HR',
		icon: 'FileSignature',
		tags: ['kontrak', 'proyek', 'kerjasama'],
		featured: true,
		color: 'red'
	},
	{
		name: 'Surat Peringatan (SP)',
		description: 'Draf instan Surat Peringatan (SP1, SP2, SP3) dengan tata bahasa HR yang diakui untuk kedisiplinan karyawan.',
		path: '/surat-peringatan',
		category: 'Bisnis & HR',
		icon: 'AlertTriangle',
		tags: ['sanksi', 'disiplin', 'karyawan'],
		featured: true,
		color: 'amber'
	},
	{
		name: 'Surat Kuasa',
		description: 'Cetak instan Surat Kuasa legal untuk mengurus BPKB, Paspor, atau pencairan dana bank dengan ruang materai.',
		path: '/surat-kuasa',
		category: 'Personal & Umum',
		icon: 'UserCheck',
		tags: ['otoritas', 'wakil', 'legal'],
		featured: true,
		color: 'cyan'
	},
	{
		name: 'Surat Izin Cuti',
		description: 'Susun surat permohonan absen formal untuk atasan atau HRD dalam hitungan detik untuk berbagai keperluan.',
		path: '/surat-izin',
		category: 'Personal & Umum',
		icon: 'Calendar',
		tags: ['cuti', 'sakit', 'absen'],
		featured: true,
		color: 'teal'
	},
	{
		name: 'Slip Gaji Karyawan',
		description: 'Buat struk bukti gajian resmi! Tambah baris pendapatan maupun potongan secara dinamis and cetak A5 bersih.',
		path: '/slip-gaji',
		category: 'Bisnis & HR',
		icon: 'ScrollText',
		tags: ['slip', 'gaji', 'manajemen'],
		featured: true,
		color: 'indigo'
	},
	{
		name: 'Surat Penawaran Harga',
		description: 'Buat quotation profesional untuk calon klien dengan rincian harga barang atau jasa yang ditawarkan.',
		path: '/surat-penawaran',
		category: 'Bisnis & HR',
		icon: 'Handshake',
		tags: ['penawaran', 'sewa', 'jasa'],
		color: 'blue'
	},
	{
		name: 'Purchase Order (PO)',
		description: 'Pemesanan barang atau jasa resmi perusahaan dengan format yang profesional and mudah disimpan.',
		path: '/purchase-order',
		category: 'Bisnis & HR',
		icon: 'ShoppingCart',
		tags: ['beli', 'order', 'pengadaan'],
		featured: true,
		color: 'blue'
	},
	{
		name: 'Surat Jalan (Delivery)',
		description: 'Bukti pengiriman barang antar lokasi yang sah and profesional untuk keperluan logistik bisnis.',
		path: '/surat-jalan',
		category: 'Bisnis & HR',
		icon: 'Truck',
		tags: ['logistic', 'kirim', 'barang'],
		featured: true,
		color: 'violet'
	},
	{
		name: 'Perjanjian Hutang',
		description: 'Buat kontrak pinjam-meminjam uang bermaterai yang dilengkapi pasal jatuh tempo and jaminan hukum.',
		path: '/surat-hutang',
		category: 'Keuangan',
		icon: 'CreditCard',
		tags: ['pinjam', 'piutang', 'legal'],
		featured: true,
		color: 'amber'
	},
	{
		name: 'Sewa Properti',
		description: 'Generator Surat Perjanjian Sewa (Rumah/Ruko/Kost) resmi dengan pasal perlindungan pemilik and penyewa.',
		path: '/surat-sewa',
		category: 'Bisnis & HR',
		icon: 'Home',
		tags: ['sewa', 'rumah', 'kontrak'],
		featured: true,
		color: 'indigo',
		statusTag: 'Legal'
	},
	{
		name: 'Perintah Kerja (SPK)',
		description: 'Terbitkan instruksi kerja resmi (SPK) untuk vendor atau freelancer lengkap dengan rincian ruang lingkup.',
		path: '/surat-perintah-kerja',
		category: 'Bisnis & HR',
		icon: 'FileEdit',
		tags: ['perintah', 'kerja', 'proyek'],
		featured: true,
		color: 'blue',
		statusTag: 'B2B'
	},
	{
		name: 'Jual Beli (SPJB)',
		description: 'Amankan transaksi jual beli aset (motor/mobil/elektronik) dengan pasal jaminan kepemilikan and saksi.',
		path: '/surat-jual-beli',
		category: 'Personal & Umum',
		icon: 'ShoppingBag',
		tags: ['transaksi', 'aset', 'jual'],
		featured: true,
		color: 'rose',
		statusTag: 'Aman'
	},
	{
		name: 'Surat NDA (Kerahasiaan)',
		description: 'Lindungi rahasia bisnis and ide proyek Anda dengan perjanjian standar hukum untuk kolaborasi.',
		path: '/surat-nda',
		category: 'Bisnis & HR',
		icon: 'Lock',
		tags: ['nda', 'secret', 'hukum', 'kerjasama'],
		featured: true,
		color: 'indigo',
		statusTag: 'Legal'
	},
	{
		name: 'Kontrak Kerja (PKWT/TT)',
		description: 'Generator kontrak PKWT / PKWTT (Tetap) sesuai standar UU Cipta Kerja dengan pasal gaji and sanksi.',
		path: '/surat-kontrak-kerja',
		category: 'Bisnis & HR',
		icon: 'Users',
		tags: ['kontrak', 'kerja', 'karyawan', 'hrd'],
		featured: true,
		color: 'blue',
		statusTag: 'Resmi'
	},
	{
		name: 'Izin Orang Tua',
		description: 'Buat surat pernyataan izin orang tua untuk berbagai keperluan kerja atau sekolah secara otomatis.',
		path: '/surat-izin-orang-tua',
		category: 'Personal & Umum',
		icon: 'User',
		tags: ['izin', 'ortu', 'wali', 'kegiatan'],
		featured: true,
		color: 'rose',
		statusTag: 'Umum'
	},
	{
		name: 'Pengantar RT/RW',
		description: 'Dokumen dasar untuk pengurusan birokrasi warga seperti KTP, Domisili, and urusan administrasi lainnya.',
		path: '/surat-pengantar-rt-rw',
		category: 'Personal & Umum',
		icon: 'MapPin',
		tags: ['rt', 'rw', 'ktp', 'domisili'],
		featured: true,
		color: 'emerald',
		statusTag: 'Warga'
	},
	{
		name: 'Surat Pernyataan',
		description: 'Template fleksibel untuk berbagai macam pernyataan resmi bermaterai untuk keperluan umum.',
		path: '/surat-pernyataan',
		category: 'Personal & Umum',
		icon: 'FileCheck',
		tags: ['pernyataan', 'janji', 'umum'],
		featured: true,
		color: 'slate',
		statusTag: 'Universal'
	}
];
