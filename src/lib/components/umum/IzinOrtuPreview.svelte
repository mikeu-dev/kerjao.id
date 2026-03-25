<script lang="ts">
	import type { IzinOrtuData } from '$lib/utils/umum';

	let { data, themeColor = '#4f46e5' }: { data: IzinOrtuData; themeColor?: string } = $props();

	const formatDate = (dateStr?: string) => {
		if (!dateStr) return '.................';
		const date = new Date(dateStr);
		return date.toLocaleDateString('id-ID', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	};
</script>

<div class="mx-auto max-w-[800px] bg-white p-12 text-slate-900 shadow-sm print:p-0 print:shadow-none sm:p-20">
	<!-- Header -->
	<div class="mb-12 text-center">
		<h1 class="text-xl font-bold uppercase tracking-widest underline decoration-2 underline-offset-8" style="color: {themeColor}">
			SURAT IZIN ORANG TUA / WALI
		</h1>
	</div>

	<!-- Intro -->
	<div class="mb-8 text-justify text-xs leading-relaxed sm:text-sm">
		<p>Saya yang bertanda tangan di bawah ini:</p>
	</div>

	<!-- Data Ortu -->
	<div class="mb-8 space-y-3 text-xs sm:text-sm">
		<div class="grid grid-cols-4 gap-2">
			<span class="font-medium">Nama</span>
			<span class="col-span-3">: <strong>{data.namaOrtu || '.................'}</strong></span>
		</div>
		<div class="grid grid-cols-4 gap-2">
			<span class="font-medium">NIK</span>
			<span class="col-span-3">: {data.nikOrtu || '.................'}</span>
		</div>
		<div class="grid grid-cols-4 gap-2">
			<span class="font-medium">Pekerjaan</span>
			<span class="col-span-3">: {data.pekerjaanOrtu || '.................'}</span>
		</div>
		<div class="grid grid-cols-4 gap-2">
			<span class="font-medium">Alamat</span>
			<span class="col-span-3">: {data.alamatOrtu || '.................'}</span>
		</div>
	</div>

	<div class="mb-8 text-justify text-xs leading-relaxed sm:text-sm">
		<p>Dengan ini menyatakan bahwa selaku orang tua/wali dari:</p>
	</div>

	<!-- Data Anak -->
	<div class="mb-8 space-y-3 text-xs sm:text-sm">
		<div class="grid grid-cols-4 gap-2">
			<span class="font-medium">Nama</span>
			<span class="col-span-3">: <strong>{data.namaAnak || '.................'}</strong></span>
		</div>
		<div class="grid grid-cols-4 gap-2">
			<span class="font-medium">NIK</span>
			<span class="col-span-3">: {data.nikAnak || '.................'}</span>
		</div>
		<div class="grid grid-cols-4 gap-2">
			<span class="font-medium">Tempat/Tgl Lahir</span>
			<span class="col-span-3">: {data.tempatLahirAnak || '...'}, {formatDate(data.tanggalLahirAnak)}</span>
		</div>
	</div>

	<!-- Pernyataan -->
	<div class="space-y-6 text-justify text-xs leading-relaxed sm:text-sm">
		<p>
			<strong>{data.tujuanIzin || '.................'}</strong> dan memberikan persetujuan sepenuhnya untuk segala urusan administratif maupun teknis yang menyertainya.
		</p>
		<p>
			Demikian surat izin ini saya buat dengan sadar dan tanpa paksaan dari pihak manapun, untuk dapat dipergunakan sebagaimana mestinya.
		</p>
	</div>

	<!-- Signatures -->
	<div class="mt-16 flex flex-col items-end gap-12 text-center text-xs sm:text-sm">
		<div class="space-y-20">
			<p>{data.lokasi || '.................'}, {formatDate(data.tanggal)}</p>
			<div class="space-y-1">
				<p class="font-bold underline uppercase">{data.namaOrtu || '.................'}</p>
				<p class="text-[10px] text-slate-500">Orang Tua / Wali</p>
			</div>
		</div>
	</div>

	<!-- Footer Info -->
	<div class="mt-12 border-t border-slate-100 pt-8 print:hidden">
		<p class="text-[10px] italic text-slate-400">
			*Surat izin ini biasanya ditempeli Materai Rp10.000 untuk keperluan hukum yang lebih formal.
		</p>
	</div>
</div>
