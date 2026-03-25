<script lang="ts">
	import type { PeringatanData } from '$lib/utils/peringatan';
	import { generateSPDescription } from '$lib/utils/peringatan';

	let { data }: { data: PeringatanData } = $props();

	function niceDate(d: string): string {
		if (!d) return '...';
		return new Date(d).toLocaleDateString('id-ID', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	function getSanksiText(level: string): string {
		if (level === '1') {
			return 'Surat Peringatan Pertama (SP 1) ini berlaku untuk 6 (enam) bulan ke depan. Apabila dalam kurun waktu tersebut Saudara/i kembali melakukan pelanggaran, maka Perusahaan dapat memberikan sanksi yang lebih berat berupa Surat Peringatan Kedua (SP 2).';
		}
		if (level === '2') {
			return 'Surat Peringatan Kedua (SP 2) ini berlaku untuk tempoh 6 (enam) bulan ke depan dengan disertai pemotongan fasilitas tertententu (jika berlaku). Apabila perilaku tersebut terulang, Perusahaan tidak segan memberikan Sanksi Pemutusan Hubungan Kerja (SP 3/PHK).';
		}
		if (level === '3') {
			return 'Mengingat ini adalah Surat Peringatan Ketiga (SP 3), maka surat ini sekaligus menjadi teguran terakhir dan/atau pemberitahuan Pemutusan Hubungan Kerja (PHK). Perusahaan memutus ikatan kerja sama terhitung sejak surat ini ditandatangani, dan segala akses operasional akan segera dibekukan.';
		}
		return '';
	}
</script>

<div
	class="relative mx-auto w-full bg-white p-10 font-serif text-[15px] leading-relaxed text-slate-900 shadow-2xl sm:p-14 print:m-0 print:p-0 print:text-black print:shadow-none"
	style="min-height: 1122px;"
>
	<!-- KOP SURAT -->
	<div class="mb-10 border-b-[3px] border-slate-900 pb-4 text-center print:border-black">
		<h1 class="text-3xl font-extrabold tracking-tight uppercase">
			{data.companyName || 'NAMA PERUSAHAAN'}
		</h1>
		<p class="mt-1 text-sm">Divisi Human Resources (HRD) / Manajemen Eksekutif</p>
	</div>

	<!-- Nomor & Tanggal -->
	<div class="mb-10 flex items-start justify-between">
		<div>
			<p>
				Nomor<span class="inline-block w-4 text-center">:</span>
				{data.referenceNumber || '......../HRD-SP/2024'}
			</p>
			<p>
				Perihal<span class="inline-block w-4 text-center">:</span>
				<span class="font-bold underline">{generateSPDescription(data.spLevel)}</span>
			</p>
			<p>Sifat<span class="inline-block w-4 text-center">:</span> Sangat Rahasia & Personal</p>
		</div>
		<div class="text-right">
			<p>{data.city || 'Kota'}, {niceDate(data.date)}</p>
		</div>
	</div>

	<!-- Kepada Yth -->
	<div class="mb-10 leading-snug">
		<p>Kepada Yth,</p>
		<p class="font-bold">{data.employeeName || 'Bapak/Ibu Karyawan'}</p>
		<p>NIK: {data.employeeID || '...................'}</p>
		<p>
			Bagian: {data.employeeDepartment
				? `${data.employeeRole} - ${data.employeeDepartment}`
				: data.employeeRole || '...................'}
		</p>
		<p>di tempat</p>
	</div>

	<!-- Tubuh Surat -->
	<div class="mb-6 text-justify">
		<p class="mb-4">Dengan hormat,</p>
		<p class="mb-4 indent-8">
			Surat peringatan ini ditujukan kepada Saudara/i <span class="font-bold"
				>{data.employeeName || '...........'}</span
			> sebagai bentuk tindak lanjut dan pengarahan serta pembinaan disiplin dari Perusahaan.
		</p>
		<p class="mb-2 indent-8">
			Berdasarkan hasil evaluasi kinerja dan pemantauan tata tertib perusahaan, Saudara/i didapati
			telah melakukan pelanggaran terhadap peraturan/kebijakan perusahaan berupa:
		</p>
		<!-- Box Pelanggaran -->
		<div
			class="mt-2 mb-4 border-l-4 border-slate-500 bg-slate-50 p-4 italic print:border-l-[4px] print:border-black print:bg-transparent"
		>
			{data.violationReason || 'Tidak Mematuhi Prosedur Keselamatan / Indisipliner Presensi...'}
			{#if data.violationDate}
				<br /><span class="mt-1 block text-sm font-bold text-slate-600"
					>Tercatat Pada: {data.violationDate}</span
				>
			{/if}
		</div>

		<p class="mb-4 indent-8">
			Tindakan tersebut bertentangan dengan standar operasional prosedur kerja (SOP) dan iklim kerja
			yang kondusif yang senantiasa dijaga oleh Perusahaan. Oleh karena itu, melalui surat ini
			Perusahaan secara resmi menerbitkan <strong>{generateSPDescription(data.spLevel)}</strong>.
		</p>
		<p class="mb-4 indent-8 text-red-700 print:text-black">
			{getSanksiText(data.spLevel)}
		</p>
		<p class="indent-8">
			Demikian surat peringatan ini dibuat untuk menjadi perhatian serius dan koreksi diri bagi
			Saudara/i agar tidak mengulangi kesalahan serupa di kemudian hari.
		</p>
	</div>

	<!-- Tanda Tangan -->
	<div class="mt-16 flex justify-between px-4">
		<!-- Karyawan -->
		<div class="flex w-56 flex-col items-center text-center">
			<p class="mb-20">Telah diterangkan kepada,</p>

			<p class="inline-block border-b border-transparent font-bold text-slate-900 underline">
				{data.employeeName || '....................................'}
			</p>
			<p class="mt-1 text-sm">{data.employeeRole || 'Karyawan'}</p>
		</div>

		<!-- HRD -->
		<div class="flex w-56 flex-col items-center text-center">
			<p class="mb-20">Dikeluarkan oleh,</p>

			<p class="inline-block border-b border-transparent font-bold text-slate-900 underline">
				{data.hrName || '....................................'}
			</p>
			<p class="mt-1 text-sm">{data.hrRole || 'HR Manager'}</p>
		</div>
	</div>

	<!-- Tembusan -->
	<div class="mt-16 text-xs text-slate-600 print:text-black">
		<p class="mb-1 font-bold underline">Tembusan:</p>
		<ol class="list-decimal pl-4">
			<li>Direksi Perusahaan</li>
			<li>Kepala Divisi / Departemen yang bersangkutan</li>
			<li>Arsip HRD</li>
		</ol>
	</div>
</div>
