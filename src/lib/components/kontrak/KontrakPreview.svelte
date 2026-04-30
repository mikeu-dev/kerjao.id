<script lang="ts">
	import type { KontrakData } from '$lib/utils/kontrak-kerja';
	import { translations } from '$lib/utils/translations';

	let {
		data,
		themeColor = '#4f46e5'
	}: { data: KontrakData & { lang?: 'id' | 'en' }; themeColor?: string } = $props();

	const t = $derived(translations[data.lang || 'id']);

	const formatDate = (dateStr?: string) => {
		if (!dateStr) return '.................';
		const date = new Date(dateStr);
		return date.toLocaleDateString(data.lang === 'en' ? 'en-US' : 'id-ID', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	};

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat(data.lang === 'en' ? 'en-US' : 'id-ID', {
			style: 'currency',
			currency: data.lang === 'en' ? 'USD' : 'IDR',
			minimumFractionDigits: 0
		}).format(amount);
	};
</script>

<div
	class="mx-auto max-w-[850px] bg-white p-12 text-slate-900 shadow-sm sm:p-20 print:p-0 print:shadow-none"
>
	<!-- Header -->
	<div class="mb-12 text-center">
		<h1
			class="text-xl font-bold tracking-widest uppercase underline decoration-2 underline-offset-8"
			style="color: {themeColor}"
		>
			SURAT PERJANJIAN KERJA ({data.tipe})
		</h1>
		<p class="mt-4 text-sm font-medium">Nomor: {data.nomorSurat || '.................'}</p>
	</div>

	<!-- Intro -->
	<div class="mb-8 text-justify text-[11px] leading-relaxed sm:text-xs">
		<p>
			Pada hari ini, tanggal {formatDate(data.tanggalTtd)}, bertempat di {data.lokasiKerja ||
				'.................'}, telah dibuat dan ditandatangani Perjanjian Kerja oleh dan antara:
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
					<strong>{data.perusahaan.jabatanWakil || '.................'}</strong>. Selanjutnya
					disebut sebagai
					<strong style="color: {themeColor}">"PENGUSAHA"</strong>.
				</p>
			</div>
		</div>

		<div class="flex gap-4">
			<span class="w-8 font-bold">II.</span>
			<div class="flex-1">
				<p class="font-bold uppercase">{data.karyawan.nama || '(Nama Karyawan)'}</p>
				<p class="mt-1">
					NIK: {data.karyawan.nik || '.................'}, Tempat/Tgl Lahir: {data.karyawan
						.tempatLahir || '...'}, {formatDate(data.karyawan.tanggalLahir)}, Beralamat di {data
						.karyawan.alamat || '.................'}. Selanjutnya disebut sebagai
					<strong style="color: {themeColor}">"KARYAWAN"</strong>.
				</p>
			</div>
		</div>
	</div>

	<!-- Konten Hukum -->
	<div class="space-y-6 text-justify text-[10px] leading-relaxed sm:text-xs">
		<p>
			Pengusaha dan Karyawan secara bersama-sama disebut sebagai <strong>"Para Pihak"</strong>. Para
			Pihak sepakat untuk mengadakan Perjanjian Kerja dengan ketentuan sebagai berikut:
		</p>

		<div>
			<h3 class="mb-2 border-b pb-1 font-bold" style="border-color: {themeColor}44">
				PASAL 1: STATUS DAN MASA KERJA
			</h3>
			{#if data.tipe === 'PKWT'}
				<p>
					Karyawan bekerja pada Pengusaha dengan status Hubungan Kerja Waktu Tertentu (Kontrak)
					untuk jangka waktu {data.masaKerja || '.................'}, terhitung sejak tanggal
					<strong>{formatDate(data.tanggalMulai)}</strong>
					sampai dengan tanggal <strong>{formatDate(data.tanggalSelesai)}</strong>.
				</p>
			{:else}
				<p>
					Karyawan bekerja pada Pengusaha dengan status Hubungan Kerja Waktu Tidak Tertentu (Tetap)
					terhitung sejak tanggal <strong>{formatDate(data.tanggalMulai)}</strong>. Perjanjian ini
					mencakup masa percobaan selama 3 (tiga) bulan.
				</p>
			{/if}
		</div>

		<div>
			<h3 class="mb-2 border-b pb-1 font-bold" style="border-color: {themeColor}44">
				PASAL 2: JABATAN DAN PENEMPATAN
			</h3>
			<p>
				Karyawan ditempatkan pada posisi <strong
					>{data.karyawan.jabatan || '.................'}</strong
				>
				dan bersedia ditempatkan di lokasi kerja Pengusaha yang beralamat di {data.lokasiKerja ||
					'.................'} atau lokasi lain sesuai kebutuhan operasional Pengusaha.
			</p>
		</div>

		<div>
			<h3 class="mb-2 border-b pb-1 font-bold" style="border-color: {themeColor}44">
				PASAL 3: UPAH DAN TUNJANGAN
			</h3>
			<p>Pengusaha memberikan upah kepada Karyawan setiap bulannya sebesar:</p>
			<ul class="mt-2 list-disc pl-5">
				<li>Gaji Pokok: {formatCurrency(data.gajiPokok)}</li>
				<li>Tunjangan Tetap: {formatCurrency(data.tunjanganTetap)}</li>
				<li class="font-bold text-slate-800">
					Total Upah (Gross): {formatCurrency(data.gajiPokok + data.tunjanganTetap)}
				</li>
			</ul>
			<p class="mt-2">
				Pembayaran upah dilakukan setiap akhir bulan melalui transfer bank ke rekening yang ditunjuk
				oleh Karyawan.
			</p>
		</div>

		<div>
			<h3 class="mb-2 border-b pb-1 font-bold" style="border-color: {themeColor}44">
				PASAL 4: {t.pasal4}
			</h3>
			<p>
				{data.lang === 'en'
					? "The Employee's working time is 40 (forty) hours per week, which is regulated in accordance with the Employer's operational policy (e.g., Monday-Friday or Shift). The Employee is entitled to weekly rest, annual leave, and national holidays in accordance with company regulations and applicable laws."
					: 'Waktu kerja Karyawan adalah 40 (empat puluh) jam seminggu, yang diatur sesuai dengan kebijakan operasional Pengusaha (misal: Senin-Jumat atau Shift). Karyawan berhak atas istirahat mingguan, cuti tahunan, dan hari libur nasional sesuai peraturan perusahaan dan undang-undang yang berlaku.'}
			</p>
		</div>

		<div>
			<h3 class="mb-2 border-b pb-1 font-bold" style="border-color: {themeColor}44">
				PASAL 5: {t.pasal5}
			</h3>
			<p>
				{data.lang === 'en'
					? "The Employee is obliged to comply with all Company Regulations (PP) or Collective Labor Agreements (PKB), maintain the confidentiality of the Employer's data, and perform duties with high integrity. Violations of the regulations may be subject to sanctions in the form of Warning Letters (SP) up to termination of employment."
					: 'Karyawan wajib mematuhi seluruh Peraturan Perusahaan (PP) atau Perjanjian Kerja Bersama (PKB), menjaga kerahasiaan data Pengusaha, dan melaksanakan tugas dengan integritas tinggi. Pelanggaran terhadap peraturan dapat dikenakan sanksi berupa Surat Peringatan (SP) hingga pemutusan hubungan kerja.'}
			</p>
		</div>

		<div class="rounded-lg border-l-4 bg-slate-50 p-4" style="border-color: {themeColor}">
			<p class="mb-1 font-bold italic">
				{data.lang === 'en' ? 'Legal Disclaimer:' : 'Disclaimer Hukum:'}
			</p>
			<p class="text-[9px] text-slate-500 italic">
				{data.lang === 'en'
					? 'This document is generated automatically by Kerjao.id. The Parties are advised to review the clauses above to suit specific operational needs and ensure compliance with the latest Labor Laws. Kerjao is not responsible for any future legal disputes.'
					: 'Dokumen ini dihasilkan secara otomatis oleh Kerjao.id. Para Pihak disarankan untuk meninjau kembali pasal-pasal di atas agar sesuai dengan kebutuhan spesifik operasional dan memastikan kepatuhan terhadap UU Cipta Kerja terbaru. Kerjao tidak bertanggung jawab atas sengketa hukum di kemudian hari.'}
			</p>
		</div>
	</div>

	<!-- Signatures -->
	<div class="mt-16 grid grid-cols-2 gap-12 text-center text-[11px] sm:text-xs">
		<div class="space-y-4">
			<p class="font-bold">PENGUSAHA</p>
			{#if data.ttdPengusaha}
				<img
					src={data.ttdPengusaha}
					alt="TTD Pengusaha"
					class="mx-auto block h-16 w-32 object-contain grayscale"
				/>
			{:else}
				<div class="h-16 w-32"></div>
			{/if}
			<div class="space-y-1">
				<p class="font-bold uppercase underline">{data.perusahaan.wakil || '.................'}</p>
				<p class="text-[10px] text-slate-500">
					{data.perusahaan.jabatanWakil || '.................'}
				</p>
			</div>
		</div>
		<div class="space-y-4">
			<p class="font-bold">KARYAWAN</p>
			{#if data.ttdKaryawan}
				<img
					src={data.ttdKaryawan}
					alt="TTD Karyawan"
					class="mx-auto block h-16 w-32 object-contain grayscale"
				/>
			{:else}
				<div class="h-16 w-32"></div>
			{/if}
			<div class="space-y-1">
				<p class="font-bold uppercase underline">{data.karyawan.nama || '.................'}</p>
				<p class="text-[10px] text-slate-500">Karyawan</p>
			</div>
		</div>
	</div>
</div>
