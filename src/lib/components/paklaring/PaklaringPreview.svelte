<script lang="ts">
	import type { PaklaringData } from '$lib/utils/paklaring';

	let { data }: { data: PaklaringData } = $props();

	// Format date nicely
	function niceDate(d: string): string {
		if (!d) return '...';
		return new Date(d).toLocaleDateString('id-ID', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	function countTenure(start: string, end: string): string {
		if (!start || !end) return '...';
		const s = new Date(start);
		const e = new Date(end);
		let months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
		if (months < 0) return '0 Bulan';
		const years = Math.floor(months / 12);
		const remainingMonths = months % 12;
		if (years > 0 && remainingMonths > 0) return `${years} Tahun ${remainingMonths} Bulan`;
		if (years > 0) return `${years} Tahun`;
		return `${months} Bulan`;
	}
</script>

<div
	class="relative mx-auto w-full bg-white p-10 font-serif leading-relaxed text-slate-900 shadow-2xl sm:p-14 print:m-0 print:p-0 print:text-black print:shadow-none"
	style="min-height: 842px;"
>
	<!-- Kop Surat -->
	<div class="mb-8 border-b-4 border-slate-900 pb-6 text-center print:border-black">
		<h1 class="mb-2 text-3xl font-bold tracking-wide uppercase">
			{data.companyName || 'NAMA PERUSAHAAN'}
		</h1>
		<p class="text-sm whitespace-pre-wrap text-slate-600 print:text-black">
			{data.companyAddress || 'Alamat Lengkap Perusahaan\nKota, Kode Pos'}
		</p>
	</div>

	<!-- Judul Surat -->
	<div class="mb-10 text-center">
		<h2 class="mb-1 text-xl font-bold tracking-wider uppercase underline">
			Surat Keterangan Kerja
		</h2>
		<p class="text-sm font-semibold">No: {data.suratNumber || '.../HRD/SKK/...'}</p>
	</div>

	<!-- Isi Surat -->
	<div class="space-y-6 text-justify">
		<p>Yang bertanda tangan di bawah ini:</p>

		<table class="mb-4 ml-4 w-full">
			<tbody>
				<tr>
					<td class="w-48 py-1 font-medium">Nama</td>
					<td class="w-4 py-1">:</td>
					<td class="py-1 font-semibold">{data.signeeName || '................'}</td>
				</tr>
				<tr>
					<td class="w-48 py-1 font-medium">Jabatan</td>
					<td class="w-4 py-1">:</td>
					<td class="py-1">{data.signeePosition || '................'}</td>
				</tr>
				<tr>
					<td class="w-48 py-1 font-medium">Alamat Perusahaan</td>
					<td class="w-4 py-1">:</td>
					<td class="py-1">{data.companyAddress || '................'}</td>
				</tr>
			</tbody>
		</table>

		<p>Dengan ini menerangkan dengan sesungguhnya bahwa:</p>

		<table class="mb-4 ml-4 w-full">
			<tbody>
				<tr>
					<td class="w-48 py-1 font-medium">Nama Lengkap</td>
					<td class="w-4 py-1">:</td>
					<td class="py-1 font-semibold">{data.employeeName || '................'}</td>
				</tr>
				<tr>
					<td class="w-48 py-1 font-medium">Nomor Induk / NIK</td>
					<td class="w-4 py-1">:</td>
					<td class="py-1">{data.nik || '................'}</td>
				</tr>
				<tr>
					<td class="w-48 py-1 font-medium">Jabatan Terakhir</td>
					<td class="w-4 py-1">:</td>
					<td class="py-1">{data.lastPosition || '................'}</td>
				</tr>
			</tbody>
		</table>

		<p>
			Adalah benar pernah menjadi karyawan di <span class="font-semibold"
				>{data.companyName || 'perusahaan kami'}</span
			>
			mulai dari tanggal <span class="font-semibold">{niceDate(data.startDate)}</span> hingga
			<span class="font-semibold">{niceDate(data.endDate)}</span>, dengan masa kerja selama
			<span class="font-semibold">{countTenure(data.startDate, data.endDate)}</span>.
		</p>

		<p>
			Selama bekerja di perusahaan kami, Saudara/i <span class="font-semibold"
				>{data.employeeName || 'tersebut'}</span
			> telah memberikan kontribusi yang baik dan tidak pernah melakukan tindakan yang merugikan perusahaan.
			Kami mengucapkan terima kasih atas dedikasi dan kerja sama yang telah diberikan.
		</p>

		<p>
			Demikian Surat Keterangan Kerja (Paklaring) ini kami buat dengan sebenarnya agar dapat
			dipergunakan sebagaimana mestinya oleh yang bersangkutan.
		</p>
	</div>

	<!-- Tanda Tangan -->
	<div class="mt-16 flex justify-end">
		<div class="w-64 text-center">
			<p class="mb-1">Jakarta, {niceDate(data.issueDate)}</p>
			<p class="font-semibold">{data.companyName || 'Hormat Kami'}</p>

			<div class="pointer-events-none my-2 flex h-24 items-center justify-center opacity-30">
				<!-- Mock digital stamp or signature placeholder -->
				<div
					class="absolute flex h-24 w-24 -rotate-12 items-center justify-center rounded-full border-[3px] border-blue-600 text-blue-600 opacity-40"
				>
					<span class="text-sm font-bold tracking-widest uppercase">STAMPEL</span>
				</div>
				<div class="font-signature rotate-[-5deg] text-4xl text-slate-800 italic">Signed</div>
			</div>

			<p class="font-bold underline">{data.signeeName || 'Nama Penandatangan'}</p>
			<p class="text-sm">{data.signeePosition || 'Jabatan'}</p>
		</div>
	</div>
</div>
