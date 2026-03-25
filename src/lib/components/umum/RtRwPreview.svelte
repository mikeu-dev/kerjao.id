<script lang="ts">
	import type { RtRwData } from '$lib/utils/umum';

	let { data, themeColor = '#4f46e5' }: { data: RtRwData; themeColor?: string } = $props();

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

<div class="mx-auto max-w-[800px] border border-slate-200 bg-white p-12 text-slate-900 shadow-sm print:border-none print:p-0 print:shadow-none sm:p-16">
	<!-- Kop Surat -->
	<div class="mb-8 border-b-4 border-double border-slate-900 pb-4 text-center">
		<h2 class="text-lg font-bold uppercase sm:text-xl">RUKUN TETANGGA {data.rt || '...'} RUKUN WARGA {data.rw || '...'}</h2>
		<p class="text-xs font-medium uppercase sm:text-sm">KELURAHAN/DESA LOKASI ................. KECAMATAN .................</p>
		<p class="text-xs text-slate-500">Alamat: {data.alamat || '.................'}</p>
	</div>

	<!-- Title -->
	<div class="mb-4 text-center">
		<h1 class="text-base font-bold uppercase underline sm:text-lg">SURAT PENGANTAR</h1>
		<p class="text-[10px] sm:text-xs">Nomor: {data.nomorSurat || '.................'}</p>
	</div>

	<!-- Intro -->
	<div class="mb-8 text-justify text-xs leading-relaxed sm:text-sm">
		<p>Yang bertanda tangan di bawah ini Pengurus RT {data.rt || '...'} RW {data.rw || '...'} dengan ini menerangkan bahwa:</p>
	</div>

	<!-- Data Warga -->
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
			<span class="font-medium">Tempat/Tgl Lahir</span>
			<span class="col-span-3">: {data.tempatLahir || '...'}, {formatDate(data.tanggalLahir)}</span>
		</div>
		<div class="grid grid-cols-4 gap-2">
			<span class="font-medium">Agama</span>
			<span class="col-span-3">: {data.agama || '.................'}</span>
		</div>
		<div class="grid grid-cols-4 gap-2">
			<span class="font-medium">Pekerjaan</span>
			<span class="col-span-3">: {data.pekerjaan || '.................'}</span>
		</div>
		<div class="grid grid-cols-4 gap-2">
			<span class="font-medium">Alamat</span>
			<span class="col-span-3">: {data.alamat || '.................'}</span>
		</div>
	</div>

	<!-- Keperluan -->
	<div class="mb-8 space-y-4 text-justify text-xs leading-relaxed sm:text-sm">
		<p>Orang tersebut di atas adalah benar warga kami yang bertempat tinggal di alamat tersebut dan sepengetahuan kami berkelakuan baik.</p>
		<p>Surat pengantar ini diberikan untuk keperluan: <strong>{data.keperluan || '.................'}</strong>.</p>
		<p>Demikian surat pengantar ini dibuat agar dapat dipergunakan sebagaimana mestinya.</p>
	</div>

	<!-- Signatures -->
	<div class="mt-16 grid grid-cols-2 gap-12 text-center text-xs sm:text-sm">
		<div class="space-y-20">
			<p>Mengetahui,</p>
			<div class="space-y-1">
				<p class="font-bold underline uppercase">{data.ketuaRw || '.................'}</p>
				<p class="text-[10px] text-slate-500">Ketua RW {data.rw || '...'}</p>
			</div>
		</div>
		<div class="space-y-20">
			<p>Tanggal, {formatDate(data.tanggal)}</p>
			<div class="space-y-1">
				<p class="font-bold underline uppercase">{data.ketuaRt || '.................'}</p>
				<p class="text-[10px] text-slate-500">Ketua RT {data.rt || '...'}</p>
			</div>
		</div>
	</div>
</div>
