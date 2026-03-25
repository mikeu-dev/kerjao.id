<script lang="ts">
	import { formatRupiah, formatTanggalPanjangHari } from '$lib/utils/perjanjian';
	import type { PerjanjianData } from '$lib/utils/perjanjian';

	let { data }: { data: PerjanjianData } = $props();

	// Function to parse the user's project scope multiline inputs into an array
	let scopeArray = $derived(
		data.projectScope
			? data.projectScope.split('\n').filter((s) => s.trim().length > 0)
			: ['...........................................']
	);
</script>

<div
	class="relative mx-auto min-h-[1122px] w-full bg-white p-8 font-serif text-[14px] leading-relaxed text-slate-900 shadow-2xl sm:p-12 print:m-0 print:p-0 print:text-black print:shadow-none"
>
	<!-- Header Surat -->
	<div class="mb-10 text-center">
		<h1
			class="inline-block border-b-2 border-slate-900 pb-1 text-xl font-bold tracking-wide uppercase print:border-black"
		>
			SURAT PERJANJIAN KERJA SAMA
		</h1>
		{#if data.projectName}
			<p class="mt-2 text-sm font-bold tracking-wider uppercase">PROYEK: {data.projectName}</p>
		{/if}
	</div>

	<!-- Kalimat Pembuka -->
	<div class="mb-6 text-justify indent-8">
		<p>
			Pada hari ini, {formatTanggalPanjangHari(data.date)}, bertempat di {data.city ||
				'...............'}, kami yang bertanda tangan di bawah ini:
		</p>
	</div>

	<!-- Data Pihak Pertama & Kedua -->
	<div class="mb-8 pr-4 pl-8">
		<!-- Pihak I -->
		<table class="mb-6 w-full">
			<tbody>
				<tr>
					<td class="w-6 font-bold">1.</td>
					<td class="w-32 py-1">Nama</td>
					<td class="w-4 py-1">:</td>
					<td class="py-1 font-bold"
						>{data.clientName || '...........................................'}</td
					>
				</tr>
				<tr>
					<td></td>
					<td class="w-32 py-1">{data.clientCompany ? 'Instansi' : 'Jabatan'}</td>
					<td class="w-4 py-1">:</td>
					<td class="py-1"
						>{data.clientCompany
							? `${data.clientCompany} (${data.clientRole})`
							: data.clientRole || '...........................................'}</td
					>
				</tr>
				<tr>
					<td></td>
					<td class="w-32 py-1 align-top">Alamat</td>
					<td class="w-4 py-1 align-top">:</td>
					<td class="py-1 align-top whitespace-pre-wrap"
						>{data.clientAddress || '...........................................'}</td
					>
				</tr>
				<tr>
					<td></td>
					<td colspan="3" class="py-2 text-justify">
						Dalam hal ini bertindak untuk dan atas nama diri sendiri / instansi yang ditunjuk, yang
						selanjutnya dalam perjanjian ini disebut sebagai <span class="font-bold"
							>PIHAK PERTAMA</span
						>.
					</td>
				</tr>
			</tbody>
		</table>

		<!-- Pihak II -->
		<table class="w-full">
			<tbody>
				<tr>
					<td class="w-6 font-bold">2.</td>
					<td class="w-32 py-1">Nama</td>
					<td class="w-4 py-1">:</td>
					<td class="py-1 font-bold"
						>{data.freelancerName || '...........................................'}</td
					>
				</tr>
				<tr>
					<td></td>
					<td class="w-32 py-1">Profesi</td>
					<td class="w-4 py-1">:</td>
					<td class="py-1"
						>{data.freelancerRole || '...........................................'}</td
					>
				</tr>
				<tr>
					<td></td>
					<td class="w-32 py-1 align-top">Alamat KTP</td>
					<td class="w-4 py-1 align-top">:</td>
					<td class="py-1 align-top whitespace-pre-wrap"
						>{data.freelancerAddress || '...........................................'}</td
					>
				</tr>
				<tr>
					<td></td>
					<td colspan="3" class="py-2 text-justify">
						Dalam hal ini bertindak untuk dan atas nama diri sendiri sebagai pelaksana pekerja lepas
						(*freelancer*), yang selanjutnya dalam perjanjian ini disebut sebagai <span
							class="font-bold">PIHAK KEDUA</span
						>.
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<!-- Penjelasan Klausa Dasar -->
	<div class="mb-10 text-justify indent-8">
		<p>
			PIHAK PERTAMA dan PIHAK KEDUA secara bersama-sama selanjutnya disebut sebagai "Para Pihak".
			Para Pihak dengan ini menerangkan terlebih dahulu bahwa PIHAK PERTAMA bermaksud menggunakan
			jasa PIHAK KEDUA untuk melaksanakan pekerjaan berdasarkan syarat-syarat dan ketentuan yang
			diatur dalam pasal-pasal sebagai berikut:
		</p>
	</div>

	<!-- PASAL 1 -->
	<div class="mb-6">
		<h2 class="mb-3 text-center font-bold tracking-wide uppercase">
			Pasal 1<br />Ruang Lingkup Pekerjaan
		</h2>
		<p class="mb-2 text-justify">
			1. PIHAK PERTAMA memberikan tugas kepada PIHAK KEDUA, dan PIHAK KEDUA menerima tugas tersebut
			untuk menyelenggarakan pengerjaan <span class="font-bold"
				>{data.projectName || '...........................................'}</span
			>.
		</p>
		<p class="mb-2 text-justify">
			2. Ruang lingkup pekerjaan yang wajib dilaksanakan oleh PIHAK KEDUA mencakup namun tidak
			terbatas pada:
		</p>
		<ul class="list-disc pl-10 text-justify">
			{#each scopeArray as item (item)}
				<li class="pl-2">{item.replace(/^-/, '').trim()}</li>
			{/each}
		</ul>
	</div>

	<!-- PASAL 2 -->
	<div class="mb-6">
		<h2 class="mt-8 mb-3 text-center font-bold tracking-wide uppercase">
			Pasal 2<br />Nilai Kontrak dan Skema Pembayaran
		</h2>
		<p class="mb-2 text-justify">
			1. Nilai total kontrak untuk ruang lingkup pekerjaan sebagaimana diatur pada Pasal 1 adalah
			sebesar <span class="font-bold"
				>{data.contractValue > 0
					? formatRupiah(data.contractValue)
					: '(Rp ........................)'}</span
			>.
		</p>
		<p class="mb-2 text-justify">
			2. Skema pembayaran (DP dan Termen pelunasan) wajib dibayarkan oleh PIHAK PERTAMA kepada PIHAK
			KEDUA melalui transfer bank sesuai kesepakatan tertulis (invoice) yang menyertai perjanjian
			ini, atau paling lambat pada saat penyerahan hasil akhir pekerjaan.
		</p>
	</div>

	<!-- PASAL 3 -->
	<div class="mb-6">
		<h2 class="mt-8 mb-3 text-center font-bold tracking-wide uppercase">
			Pasal 3<br />Jangka Waktu dan Revisi
		</h2>
		<p class="mb-2 text-justify">
			1. PIHAK KEDUA sepakat untuk menyelesaikan seluruh pekerjaan sebagaimana diatur dalam Pasal 1
			selambat-lambatnya <span class="font-bold"
				>{data.deadline || '............................'}</span
			> terhitung sejak tanggal ditandatanganinya Surat Perjanjian ini.
		</p>
		<p class="mb-2 text-justify">
			2. PIHAK PERTAMA berhak mengajukan permintaan revisi/penyempurnaan hasil pekerjaaan dengan
			batas maksimal <span class="font-bold">{data.revisionCount || '........'}</span>, selama tidak
			menyimpang secara radikal dari kesepakatan awal pada Pasal 1 ayat 2.
		</p>
	</div>

	<!-- PASAL 4 -->
	<div class="mb-10">
		<h2 class="mt-8 mb-3 text-center font-bold tracking-wide uppercase">
			Pasal 4<br />Penyelesaian Perselisihan & Penutup
		</h2>
		<p class="mb-2 text-justify">
			1. Segala perselisihan yang mungkin timbul akibat pelaksanaan perjanjian ini akan diselesaikan
			secara musyawarah untuk mufakat oleh Para Pihak.
		</p>
		<p class="mb-2 text-justify">
			2. Demikian Surat Perjanjian Kerja Sama ini dibuat dan ditandatangani secara sadar dan sah
			dalam rangkap 2 (dua) serta bermaterai cukup, yang masing-masing memiliki kekuatan hukum yang
			sama bagi masing-masing pihak.
		</p>
	</div>

	<!-- Tanda Tangan (Break Page prevention style) -->
	<div class="mt-16 flex break-inside-avoid justify-between px-4 pb-12">
		<!-- Signature Klien -->
		<div class="flex w-56 flex-col items-center text-center">
			<p class="mb-10 font-bold uppercase">PIHAK PERTAMA</p>

			<div
				class="mb-2 flex h-20 w-32 items-center justify-center border-2 border-dashed border-slate-300 opacity-70 print:border-black/30"
			>
				<span class="text-center text-[10px] leading-tight font-bold text-slate-500 uppercase"
					>Materai<br />10.000</span
				>
			</div>

			<p
				class="mt-4 inline-block border-b border-transparent font-bold text-slate-900 uppercase underline"
			>
				{data.clientName || 'NAMA KLIEN / WAKIL'}
			</p>
		</div>

		<!-- Signature Freelancer -->
		<div class="flex w-56 flex-col items-center text-center">
			<p class="mb-10 font-bold uppercase">PIHAK KEDUA</p>

			<div
				class="mb-2 flex h-20 w-32 items-center justify-center border-2 border-dashed border-slate-300 opacity-70 print:border-black/30"
			>
				<span class="text-center text-[10px] leading-tight font-bold text-slate-500 uppercase"
					>Materai<br />10.000</span
				>
			</div>

			<p
				class="mt-4 inline-block border-b border-transparent font-bold text-slate-900 uppercase underline"
			>
				{data.freelancerName || 'NAMA FREELANCER'}
			</p>
		</div>
	</div>
</div>
