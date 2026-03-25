<script lang="ts">
	import type { KontrakData } from '$lib/utils/kontrak-kerja';

	let { data, themeColor = '#4f46e5' }: { data: KontrakData; themeColor?: string } = $props();

	const formatDate = (dateStr?: string) => {
		if (!dateStr) return '.................';
		const date = new Date(dateStr);
		return date.toLocaleDateString('id-ID', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	};

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			minimumFractionDigits: 0
		}).format(amount);
	};
</script>

<div class="mx-auto max-w-[850px] bg-white p-12 text-slate-900 shadow-sm print:p-0 print:shadow-none sm:p-20">
	<!-- Header -->
	<div class="mb-12 text-center">
		<h1 class="text-xl font-bold uppercase tracking-widest underline decoration-2 underline-offset-8" style="color: {themeColor}">
			SURAT PERJANJIAN KERJA ({data.tipe})
		</h1>
		<p class="mt-4 text-sm font-medium">Nomor: {data.nomorSurat || '.................'}</p>
	</div>

	<!-- Intro -->
	<div class="mb-8 text-justify text-[11px] leading-relaxed sm:text-xs">
		<p>
			Pada hari ini, tanggal {formatDate(data.tanggalTtd)}, bertempat di {data.lokasiKerja || '.................'}, telah dibuat dan ditandatangani Perjanjian Kerja oleh dan antara:
		</p>
	</div>

	<!-- Para Pihak -->
	<div class="mb-8 space-y-4 text-[11px] sm:text-xs">
		<div class="flex gap-4">
			<span class="w-8 font-bold">I.</span>
			<div class="flex-1">
				<p class="font-bold uppercase">{data.perusahaan.nama || '(Nama Perusahaan)'}</p>
				<p class="mt-1">
					Beralamat di {data.perusahaan.alamat || '.................'}, dalam hal ini diwakili oleh
					<strong>{data.perusahaan.wakil || '.................'}</strong> dalam jabatannya sebagai
					<strong>{data.perusahaan.jabatanWakil || '.................'}</strong>. Selanjutnya disebut sebagai
					<strong style="color: {themeColor}">"PENGUSAHA"</strong>.
				</p>
			</div>
		</div>

		<div class="flex gap-4">
			<span class="w-8 font-bold">II.</span>
			<div class="flex-1">
				<p class="font-bold uppercase">{data.karyawan.nama || '(Nama Karyawan)'}</p>
				<p class="mt-1">
					NIK: {data.karyawan.nik || '.................'}, Tempat/Tgl Lahir: {data.karyawan.tempatLahir || '...'}, {formatDate(data.karyawan.tanggalLahir)}, Beralamat di {data.karyawan.alamat || '.................'}. Selanjutnya disebut sebagai
					<strong style="color: {themeColor}">"KARYAWAN"</strong>.
				</p>
			</div>
		</div>
	</div>

	<!-- Konten Hukum -->
	<div class="space-y-6 text-justify text-[10px] leading-relaxed sm:text-xs">
		<p>Pengusaha dan Karyawan secara bersama-sama disebut sebagai <strong>"Para Pihak"</strong>. Para Pihak sepakat untuk mengadakan Perjanjian Kerja dengan ketentuan sebagai berikut:</p>

		<div>
			<h3 class="font-bold border-b mb-2 pb-1" style="border-color: {themeColor}44">PASAL 1: STATUS DAN MASA KERJA</h3>
			{#if data.tipe === 'PKWT'}
				<p>
					Karyawan bekerja pada Pengusaha dengan status Hubungan Kerja Waktu Tertentu (Kontrak) untuk jangka waktu {data.masaKerja || '.................'}, terhitung sejak tanggal <strong>{formatDate(data.tanggalMulai)}</strong> sampai dengan tanggal <strong>{formatDate(data.tanggalSelesai)}</strong>.
				</p>
			{:else}
				<p>
					Karyawan bekerja pada Pengusaha dengan status Hubungan Kerja Waktu Tidak Tertentu (Tetap) terhitung sejak tanggal <strong>{formatDate(data.tanggalMulai)}</strong>. Perjanjian ini mencakup masa percobaan selama 3 (tiga) bulan.
				</p>
			{/if}
		</div>

		<div>
			<h3 class="font-bold border-b mb-2 pb-1" style="border-color: {themeColor}44">PASAL 2: JABATAN DAN PENEMPATAN</h3>
			<p>
				Karyawan ditempatkan pada posisi <strong>{data.karyawan.jabatan || '.................'}</strong> dan bersedia ditempatkan di lokasi kerja Pengusaha yang beralamat di {data.lokasiKerja || '.................'} atau lokasi lain sesuai kebutuhan operasional Pengusaha.
			</p>
		</div>

		<div>
			<h3 class="font-bold border-b mb-2 pb-1" style="border-color: {themeColor}44">PASAL 3: UPAH DAN TUNJANGAN</h3>
			<p>
				Pengusaha memberikan upah kepada Karyawan setiap bulannya sebesar:
			</p>
			<ul class="mt-2 list-disc pl-5">
				<li>Gaji Pokok: {formatCurrency(data.gajiPokok)}</li>
				<li>Tunjangan Tetap: {formatCurrency(data.tunjanganTetap)}</li>
				<li class="font-bold text-slate-800">Total Upah (Gross): {formatCurrency(data.gajiPokok + data.tunjanganTetap)}</li>
			</ul>
			<p class="mt-2">Pembayaran upah dilakukan setiap akhir bulan melalui transfer bank ke rekening yang ditunjuk oleh Karyawan.</p>
		</div>

		<div>
			<h3 class="font-bold border-b mb-2 pb-1" style="border-color: {themeColor}44">PASAL 4: WAKTU KERJA DAN ISTIRAHAT</h3>
			<p>
				Waktu kerja Karyawan adalah 40 (empat puluh) jam seminggu, yang diatur sesuai dengan kebijakan operasional Pengusaha (misal: Senin-Jumat atau Shift). Karyawan berhak atas istirahat mingguan, cuti tahunan, dan hari libur nasional sesuai peraturan perusahaan dan undang-undang yang berlaku.
			</p>
		</div>

		<div>
			<h3 class="font-bold border-b mb-2 pb-1" style="border-color: {themeColor}44">PASAL 5: KEWAJIBAN DAN DISIPLIN</h3>
			<p>
				Karyawan wajib mematuhi seluruh Peraturan Perusahaan (PP) atau Perjanjian Kerja Bersama (PKB), menjaga kerahasiaan data Pengusaha, dan melaksanakan tugas dengan integritas tinggi. Pelanggaran terhadap peraturan dapat dikenakan sanksi berupa Surat Peringatan (SP) hingga pemutusan hubungan kerja.
			</p>
		</div>

		<div class="rounded-lg bg-slate-50 p-4 border-l-4" style="border-color: {themeColor}">
			<p class="font-bold mb-1 italic">Disclaimer Hukum:</p>
			<p class="text-[9px] text-slate-500 italic">
				Dokumen ini dihasilkan secara otomatis oleh Kerjao.id. Para Pihak disarankan untuk meninjau kembali pasal-pasal di atas agar sesuai dengan kebutuhan spesifik operasional dan memastikan kepatuhan terhadap UU Cipta Kerja terbaru. Kerjao tidak bertanggung jawab atas sengketa hukum di kemudian hari.
			</p>
		</div>
	</div>

	<!-- Signatures -->
	<div class="mt-16 grid grid-cols-2 gap-12 text-center text-[11px] sm:text-xs">
		<div class="space-y-20">
			<p class="font-bold">PENGUSAHA</p>
			<div class="space-y-1">
				<p class="font-bold underline uppercase">{data.perusahaan.wakil || '.................'}</p>
				<p class="text-[10px] text-slate-500">{data.perusahaan.jabatanWakil || '.................'}</p>
			</div>
		</div>
		<div class="space-y-20">
			<p class="font-bold">KARYAWAN</p>
			<div class="space-y-1">
				<p class="font-bold underline uppercase">{data.karyawan.nama || '.................'}</p>
				<p class="text-[10px] text-slate-500">Karyawan</p>
			</div>
		</div>
	</div>
</div>
