<script lang="ts">
	import type { SewaData } from '$lib/utils/sewa';

	let { data }: { data: SewaData } = $props();

	function formatCurrency(num: number) {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			minimumFractionDigits: 0
		}).format(num);
	}

	function formatDate(dateStr: string) {
		if (!dateStr) return '';
		const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
		return new Date(dateStr).toLocaleDateString('id-ID', opts);
	}
</script>

<div
	class="mx-auto bg-white p-[20mm] text-black shadow-lg print:p-0 print:shadow-none"
	style="width: 210mm; min-height: 297mm; font-family: 'Times New Roman', Times, serif; line-height: 1.6;"
>
	<!-- Title -->
	<header class="mb-8 text-center">
		<h1 class="text-xl font-bold uppercase underline">
			SURAT PERJANJIAN SEWA MENYEWA {data.properti.jenis.toUpperCase()}
		</h1>
		<p class="text-sm">Nomor: ______ / SP-SEWA / {new Date().getFullYear()}</p>
	</header>

	<!-- Parties -->
	<section class="mb-6 text-sm">
		<p class="mb-4">
			Pada hari ini, tanggal <strong>{formatDate(new Date().toISOString().split('T')[0])}</strong>,
			yang bertanda tangan di bawah ini:
		</p>

		<div class="mb-4 ml-4 space-y-1">
			<div class="flex">
				<span class="w-32 font-semibold">1. Nama</span>
				<span>: {data.pihak1.nama || '____________________'}</span>
			</div>
			<div class="flex">
				<span class="w-32 font-semibold"> NIK (KTP)</span>
				<span>: {data.pihak1.nik || '____________________'}</span>
			</div>
			<div class="flex">
				<span class="w-32 font-semibold"> Alamat</span>
				<span>: {data.pihak1.alamat || '____________________'}</span>
			</div>
			<p class="mt-2 text-justify">
				Selanjutnya dalam Perjanjian ini disebut sebagai <strong>PIHAK PERTAMA (PEMILIK)</strong>.
			</p>
		</div>

		<div class="mb-4 ml-4 space-y-1">
			<div class="flex">
				<span class="w-32 font-semibold">2. Nama</span>
				<span>: {data.pihak2.nama || '____________________'}</span>
			</div>
			<div class="flex">
				<span class="w-32 font-semibold"> NIK (KTP)</span>
				<span>: {data.pihak2.nik || '____________________'}</span>
			</div>
			<div class="flex">
				<span class="w-32 font-semibold"> Alamat</span>
				<span>: {data.pihak2.alamat || '____________________'}</span>
			</div>
			<p class="mt-2 text-justify">
				Selanjutnya dalam Perjanjian ini disebut sebagai <strong>PIHAK KEDUA (PENYEWA)</strong>.
			</p>
		</div>

		<p class="text-justify">
			Para Pihak dengan ini menerangkan terlebih dahulu bahwa PIHAK PERTAMA adalah pemilik sah atas
			objek sewa berupa <strong>{data.properti.jenis}</strong> yang beralamat di
			<strong>{data.properti.alamat || '____________________'}</strong>.
		</p>
	</section>

	<!-- Clauses -->
	<div class="space-y-4 text-justify text-sm">
		<div class="text-center font-bold">PASAL 1: OBJEK SEWA</div>
		<p>
			PIHAK PERTAMA setuju untuk menyewakan kepada PIHAK KEDUA, dan PIHAK KEDUA setuju untuk menyewa
			dari PIHAK PERTAMA, properti {data.properti.jenis} tersebut di atas beserta fasilitas di dalamnya
			berupa: {data.properti.fasilitas || 'Standar unit'}.
		</p>

		<div class="text-center font-bold">PASAL 2: JANGKA WAKTU</div>
		<p>
			Sewa menyewa ini dilangsungkan untuk jangka waktu <strong
				>{data.kontrak.durasi || '0'} {data.kontrak.satuanDurasi}</strong
			>, terhitung sejak tanggal
			<strong
				>{data.kontrak.tanggalMulai ? formatDate(data.kontrak.tanggalMulai) : '__________'}</strong
			>
			sampai dengan tanggal
			<strong
				>{data.kontrak.tanggalSelesai
					? formatDate(data.kontrak.tanggalSelesai)
					: '__________'}</strong
			>.
		</p>

		<div class="text-center font-bold">PASAL 3: HARGA SEWA & PEMBAYARAN</div>
		<p>
			Besarnya harga sewa untuk jangka waktu tersebut di atas adalah sebesar <strong
				>{formatCurrency(data.kontrak.nilaiSewa)}</strong
			>. Seluruh jumlah tersebut wajib dibayarkan oleh PIHAK KEDUA kepada PIHAK PERTAMA pada saat
			penandatanganan perjanjian ini.
		</p>

		<div class="text-center font-bold">PASAL 4: UANG JAMINAN (DEPOSIT)</div>
		<p>
			PIHAK KEDUA wajib menyerahkan uang jaminan sebesar <strong
				>{formatCurrency(data.kontrak.uangJaminan)}</strong
			> kepada PIHAK PERTAMA. Uang jaminan ini akan dikembalikan kepada PIHAK KEDUA tanpa bunga setelah
			masa sewa berakhir, dengan catatan seluruh tunggakan biaya (listrik/air) telah lunas dan tidak ada
			kerusakan permanen pada properti.
		</p>

		<div class="text-center font-bold">PASAL 5: PEMELIHARAAN & KERUSAKAN</div>
		<p>
			Selama masa sewa berlangsung, PIHAK KEDUA wajib memelihara objek sewa dengan sebaik-baiknya.
			Kerusakan kecil akibat penggunaan sehari-hari menjadi tanggung jawab PIHAK KEDUA, sedangkan
			kerusakan struktural bangunan tetap menjadi tanggung jawab PIHAK PERTAMA.
		</p>
	</div>

	<!-- Signatures -->
	<div class="mt-16 flex justify-between text-sm">
		<div class="flex flex-col items-center">
			<p><strong>PIHAK PERTAMA</strong></p>
			<div class="mt-8 border border-dashed border-slate-300 p-2 text-[10px] text-slate-400">
				Materai Rp 10.000
			</div>
			<p class="mt-8 underline">({data.pihak1.nama || '____________________'})</p>
		</div>
		<div class="flex flex-col items-center">
			<p><strong>PIHAK KEDUA</strong></p>
			<div class="h-[60px]"></div>
			<p class="mt-8 underline">({data.pihak2.nama || '____________________'})</p>
		</div>
	</div>
</div>
