<script lang="ts">
	import type { PernyataanData } from '$lib/utils/umum';

	let { data, themeColor = '#4f46e5' }: { data: PernyataanData; themeColor?: string } = $props();

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

<div
	class="mx-auto max-w-[800px] bg-white p-12 text-slate-900 shadow-sm sm:p-20 print:p-0 print:shadow-none"
>
	<!-- Title -->
	<div class="mb-12 text-center">
		<h1
			class="text-xl font-bold tracking-widest uppercase underline decoration-2 underline-offset-8"
			style="color: {themeColor}"
		>
			{data.judul || 'SURAT PERNYATAAN'}
		</h1>
	</div>

	<!-- Intro -->
	<div class="mb-8 text-justify text-xs leading-relaxed sm:text-sm">
		<p>Saya yang bertanda tangan di bawah ini:</p>
	</div>

	<!-- Data Diri -->
	<div class="mb-8 space-y-3 text-xs sm:text-sm">
		<div class="grid grid-cols-4 gap-2">
			<span class="font-medium">Nama</span>
			<span class="col-span-3">: <strong>{data.nama || '.................'}</strong></span>
		</div>
		<div class="grid grid-cols-4 gap-2">
			<span class="font-medium">NIK</span>
			<span class="col-span-3">: {data.nik || '.................'}</span>
		</div>
		<div class="grid grid-cols-4 gap-2">
			<span class="font-medium">Alamat</span>
			<span class="col-span-3">: {data.alamat || '.................'}</span>
		</div>
	</div>

	<!-- Isi -->
	<div class="mb-12 text-justify text-xs leading-relaxed whitespace-pre-wrap sm:text-sm">
		<p>
			{data.isi ||
				'................................................................................................................................................................................................................................................'}
		</p>
	</div>

	<!-- Closing -->
	<div class="mb-8 text-justify text-xs leading-relaxed sm:text-sm">
		<p>
			Demikian surat pernyataan ini saya buat dengan sebenar-benarnya tanpa paksaan dari pihak
			manapun, untuk dapat dipergunakan sebagaimana mestinya.
		</p>
	</div>

	<!-- Signatures -->
	<div class="mt-16 flex flex-col items-end gap-12 text-center text-xs sm:text-sm">
		<div class="space-y-24">
			<p>{data.lokasi || '.................'}, {formatDate(data.tanggal)}</p>
			<div class="space-y-2">
				<div
					class="mx-auto flex h-8 w-24 items-center justify-center border border-dashed border-slate-300 text-[8px] text-slate-300"
				>
					MATERAI 10.000
				</div>
				<p class="font-bold uppercase underline">{data.nama || '.................'}</p>
			</div>
		</div>
	</div>
</div>
