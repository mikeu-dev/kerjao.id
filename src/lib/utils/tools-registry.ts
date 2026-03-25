export interface ToolMetadata {
	name: string;
	description: string;
	path: string;
	category: 'Karir' | 'Bisnis & HR' | 'Keuangan' | 'Personal & Umum' | 'Edukasi';
	icon: string;
	tags: string[];
}

export const toolsRegistry: ToolMetadata[] = [
	{
		name: 'Kalkulator Gaji PPh 21',
		description: 'Hitung gaji bersih dengan potongan PPh 21 TER 2024 terbaru.',
		path: '/kalkulator-gaji',
		category: 'Keuangan',
		icon: '💰',
		tags: ['pajak', 'gaji', 'karyawan', 'pph21']
	},
	{
		name: 'CV Maker (ATS Friendly)',
		description: 'Buat CV standar Harvard yang lolos sistem screening ATS.',
		path: '/cv-maker',
		category: 'Karir',
		icon: '📄',
		tags: ['cv', 'resume', 'lamaran', 'ats']
	},
	{
		name: 'Invoice Generator',
		description: 'Buat invoice profesional untuk klien atau perusahaan.',
		path: '/invoice',
		category: 'Bisnis & HR',
		icon: '🧾',
		tags: ['tagihan', 'pembayaran', 'freelance']
	},
	{
		name: 'Kwitansi Digital',
		description: 'Cetak kwitansi resmi dengan fitur Terbilang otomatis.',
		path: '/kwitansi',
		category: 'Keuangan',
		icon: '🖋️',
		tags: ['bukti', 'bayar', 'transaksi']
	},
	{
		name: 'Surat Resign (Mundur Diri)',
		description: 'Draf surat pengunduran diri formal dan sopan.',
		path: '/surat-resign',
		category: 'Karir',
		icon: '👋',
		tags: ['resign', 'keluar', 'kerja']
	},
	{
		name: 'Surat Lamaran Kerja',
		description: 'Buat cover letter yang menarik hati rekruter.',
		path: '/surat-lamaran',
		category: 'Karir',
		icon: '✉️',
		tags: ['lamaran', 'kerja', 'apply']
	},
	{
		name: 'Surat Paklaring',
		description: 'Surat keterangan kerja resmi dari perusahaan.',
		path: '/paklaring',
		category: 'Bisnis & HR',
		icon: '🏢',
		tags: ['pengalaman', 'kerja', 'keterangan']
	},
	{
		name: 'Perjanjian Freelance',
		description: 'Kontrak kerja sama antara freelancer dan klien.',
		path: '/surat-perjanjian',
		category: 'Bisnis & HR',
		icon: '🤝',
		tags: ['kontrak', 'proyek', 'kerjasama']
	},
	{
		name: 'Surat Peringatan (SP)',
		description: 'Dinas teguran resmi SP1, SP2, atau SP3.',
		path: '/surat-peringatan',
		category: 'Bisnis & HR',
		icon: '⚠️',
		tags: ['sanksi', 'disiplin', 'karyawan']
	},
	{
		name: 'Surat Kuasa',
		description: 'Berikan otoritas resmi kepada pihak lain.',
		path: '/surat-kuasa',
		category: 'Personal & Umum',
		icon: '🔑',
		tags: ['otoritas', 'wakil', 'legal']
	},
	{
		name: 'Surat Izin Cuti',
		description: 'Pengajuan izin tidak masuk kerja atau sakit.',
		path: '/surat-izin',
		category: 'Personal & Umum',
		icon: '📅',
		tags: ['cuti', 'sakit', 'absen']
	},
	{
		name: 'Slip Gaji Karyawan',
		description: 'Cetak rincian gaji bulanan staf/karyawan.',
		path: '/slip-gaji',
		category: 'Bisnis & HR',
		icon: '💸',
		tags: ['slip', 'gaji', 'manajemen']
	},
	{
		name: 'Surat Penawaran Harga',
		description: 'Buat quotation profesional untuk calon klien.',
		path: '/surat-penawaran',
		category: 'Bisnis & HR',
		icon: '📊',
		tags: ['penawaran', 'sewa', 'jasa']
	},
	{
		name: 'Purchase Order (PO)',
		description: 'Pemesanan barang/jasa resmi perusahaan.',
		path: '/purchase-order',
		category: 'Bisnis & HR',
		icon: '📦',
		tags: ['beli', 'order', 'pengadaan']
	},
	{
		name: 'Surat Jalan (Delivery)',
		description: 'Bukti pengiriman barang antar lokasi.',
		path: '/surat-jalan',
		category: 'Bisnis & HR',
		icon: '🚛',
		tags: ['logistic', 'kirim', 'barang']
	},
	{
		name: 'Perjanjian Hutang',
		description: 'Surat pengakuan hutang dengan saksi & bunga.',
		path: '/surat-hutang',
		category: 'Keuangan',
		icon: '💳',
		tags: ['pinjam', 'piutang', 'legal']
	},
	{
		name: 'Sewa Properti',
		description: 'Perjanjian sewa rumah, ruko, atau kost.',
		path: '/surat-sewa',
		category: 'Bisnis & HR',
		icon: '🏠',
		tags: ['sewa', 'rumah', 'kontrak']
	},
	{
		name: 'Perintah Kerja (SPK)',
		description: 'Instruksi resmi memulai proyek kepada vendor.',
		path: '/surat-perintah-kerja',
		category: 'Bisnis & HR',
		icon: '🛠️',
		tags: ['perintah', 'kerja', 'proyek']
	},
	{
		name: 'Jual Beli (SPJB)',
		description: 'Perjanjian transaksi motor, mobil, atau barang.',
		path: '/surat-jual-beli',
		category: 'Personal & Umum',
		icon: '🛒',
		tags: ['transaksi', 'aset', 'jual']
	},
	{
		name: 'Surat NDA (Kerahasiaan)',
		description: 'Lindungi rahasia bisnis dan ide proyek Anda.',
		path: '/surat-nda',
		category: 'Bisnis & HR',
		icon: '🤐',
		tags: ['nda', 'secret', 'hukum', 'kerjasama']
	}
];
