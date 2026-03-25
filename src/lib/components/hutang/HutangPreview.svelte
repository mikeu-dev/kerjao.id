<script lang="ts">
	import type { HutangData } from '$lib/utils/surat-hutang';
	import {
		formatTanggalLengkap,
		formatTanggal,
		formatCurrency,
		getTerbilang
	} from '$lib/utils/surat-hutang';

	let { data }: { data: HutangData } = $props();

	let terbilangUang = $derived(getTerbilang(data.loanAmount));
</script>

<div
	class="relative mx-auto min-h-[1122px] w-full bg-white p-8 font-serif text-[13px] leading-relaxed text-gray-900 shadow-2xl sm:p-12 print:m-0 print:p-0 print:text-black print:shadow-none"
>
	<!-- Header / Judul Surat -->
	<div class="mb-6 text-center">
		<h1
			class="mb-3 inline-block border-b-2 border-black px-4 pb-0.5 text-xl font-bold tracking-wide uppercase"
		>
			Surat Perjanjian Hutang Piutang
		</h1>
		<p class="mt-1 text-[13px] text-gray-700 italic print:text-gray-900">
			Dibuat dan ditandatangani di {data.city || '...........................................'},
			pada hari ini, {formatTanggalLengkap(data.loanDate)}
		</p>
	</div>

	<div class="mb-5 text-justify">
		<p>Yang bertanda tangan di bawah ini:</p>
	</div>

	<!-- Identitas Pihak 1 -->
	<div class="mb-5 pl-4">
		<table class="w-full text-justify text-[13px] tracking-tight">
			<tbody>
				<tr>
					<td class="w-[140px] py-0.5">Nama Lengkap</td>
					<td class="w-[15px]">:</td>
					<td class="font-bold"
						>{data.lenderName || '.......................................................'}</td
					>
				</tr>
				<tr>
					<td class="py-0.5">No. NIK KTP</td>
					<td>:</td>
					<td class="font-mono"
						>{data.lenderNik || '.......................................................'}</td
					>
				</tr>
				<tr>
					<td class="py-0.5">Pekerjaan</td>
					<td>:</td>
					<td>{data.lenderJob || '.......................................................'}</td>
				</tr>
				<tr>
					<td class="py-0.5 align-top">Alamat Sesuai KTP</td>
					<td class="align-top">:</td>
					<td class="whitespace-pre-wrap"
						>{data.lenderAddress ||
							'...........................................................................................'}</td
					>
				</tr>
			</tbody>
		</table>
		<p class="mt-2 text-justify">
			Selanjutnya di dalam surat perjanjian ini disebut sebagai <span class="font-bold"
				>PIHAK PERTAMA (Pemberi Pinjaman)</span
			>.
		</p>
	</div>

	<!-- Identitas Pihak 2 -->
	<div class="mb-5 pl-4">
		<table class="w-full text-justify text-[13px] tracking-tight">
			<tbody>
				<tr>
					<td class="w-[140px] py-0.5">Nama Lengkap</td>
					<td class="w-[15px]">:</td>
					<td class="font-bold"
						>{data.borrowerName || '.......................................................'}</td
					>
				</tr>
				<tr>
					<td class="py-0.5">No. NIK KTP</td>
					<td>:</td>
					<td class="font-mono"
						>{data.borrowerNik || '.......................................................'}</td
					>
				</tr>
				<tr>
					<td class="py-0.5">Pekerjaan</td>
					<td>:</td>
					<td>{data.borrowerJob || '.......................................................'}</td>
				</tr>
				<tr>
					<td class="py-0.5 align-top">Alamat Sesuai KTP</td>
					<td class="align-top">:</td>
					<td class="whitespace-pre-wrap"
						>{data.borrowerAddress ||
							'...........................................................................................'}</td
					>
				</tr>
			</tbody>
		</table>
		<p class="mt-2 text-justify">
			Selanjutnya di dalam surat perjanjian ini disebut sebagai <span class="font-bold"
				>PIHAK KEDUA (Peminjam Debitur)</span
			>.
		</p>
	</div>

	<!-- Pembukaan Kontrak -->
	<div class="mb-5 text-justify">
		<p>
			Dengan ini, PIHAK PERTAMA dan PIHAK KEDUA menyatakan telah bersepakat untuk mengikatkan diri
			dalam Perjanjian Pinjam-Meminjam/Hutang-Piutang dengan syarat dan ketentuan sebagaimana diatur
			di dalam pasal-pasal sebagai berikut:
		</p>
	</div>

	<!-- Batas Teks Akta (Justified) -->
	<div class="space-y-4 px-2 text-justify">
		<!-- Pasal 1 -->
		<div>
			<h3 class="mb-1 text-center font-bold underline">Pasal 1: NOMINAL PINJAMAN</h3>
			<p>
				PIHAK PERTAMA pada tanggal {formatTanggal(data.loanDate)} telah menyerahkan sejumlah uang kepada
				PIHAK KEDUA sebagai pinjaman / hutang. Adapun jumlah nominal uang pinjaman tersebut adalah sebesar:
			</p>
			<div
				class="my-2 border border-gray-300 bg-gray-50 p-2 text-center text-[15px] font-bold print:border-black print:bg-transparent"
			>
				{formatCurrency(data.loanAmount || 0)} <br />
				<span class="font-sans text-[12px] font-normal italic"
					>(Terbilang: {terbilangUang} Rupiah)</span
				>
			</div>
			<p>
				Kedua belah pihak sepakat bahwa uang tersebut diserahkan melalui metode penyerahan <span
					class="font-bold">{data.handoverMethod || 'Tunai / Transfer'}</span
				>, dan surat perjanjian ini sah sebagai
				<span class="font-bold underline">Tanda Terima</span>
				(Kwitansi) yang sah secara hukum atas hutang tersebut sejak dana diterima oleh PIHAK KEDUA.
				{#if data.loanPurpose}
					Pinjaman ini menurut pengakuan PIHAK KEDUA akan digunakan untuk keperluan: {data.loanPurpose}.{/if}
			</p>
		</div>

		<!-- Pasal 2 -->
		<div>
			<h3 class="mt-4 mb-1 text-center font-bold underline">Pasal 2: JANGKA WAKTU & PELUNASAN</h3>
			<p>
				PIHAK KEDUA diwajibkan untuk mengembalikan beban hutang tersebut secara penuh (lunas) kepada
				PIHAK PERTAMA selambat-lambatnya pada tanggal <span class="font-bold underline"
					>{formatTanggal(data.dueDate)}</span
				> (Tanggal Jatuh Tempo). Apabila dilakukan pencicilan (Angsuran) sebelum tanggal jatuh tempo,
				maka harus dibuktikan dengan kuitansi/bukti transfer terpisah yang disetujui PIHAK PERTAMA.
			</p>
		</div>

		<!-- Pasal 3 (Jaminan & Denda opsional) -->
		<div>
			<h3 class="mt-4 mb-1 text-center font-bold underline">
				Pasal 3: {data.collateral ? 'JAMINAN (KOLATERAL) & ' : ''}SANKSI KETERLAMBATAN
			</h3>
			{#if data.collateral}
				<p class="mb-2">
					Untuk menjamin komitmen pelunasan pinjaman ini, PIHAK KEDUA dengan ini rida dan rela
					menyerahkan barang agunan/jaminan kepada PIHAK PERTAMA berupa: <br />
					<span class="my-1 ml-4 block border-l-2 border-black pl-3 font-bold uppercase"
						>{data.collateral}</span
					>
					Jika PIHAK KEDUA gagal melunasi hutang hingga tenggat waktu pada Pasal 2 secara sah, penuh,
					dan tak bersyarat, maka hak kepemilikan atas Jaminan tersebut sepenuhnya berpindah ke tangan
					PIHAK PERTAMA dan/atau bebas dijual untuk melunasi kerugian.
				</p>
			{/if}
			{#if data.latePenalty}
				<p>
					Apabila terjadi keterlambatan pelunasan melewati tanggal waktu jatuh tempo yang
					disanggupi, maka PIHAK KEDUA tunduk untuk membayar denda/penalti keterlambatan sebesar <span
						class="font-bold">{data.latePenalty}</span
					> tanpa pengecualian sedikitpun.
				</p>
			{:else}
				<p>
					Apabila melewati batas tanggal jatuh tempo, PIHAK PERTAMA berhak penuh melakukan
					upaya-upaya hukum atau kekeluargaan untuk menuntut dan menagih hak pembayaran pelunasan
					hutang dari PIHAK KEDUA.
				</p>
			{/if}
		</div>

		<!-- Pasal 4 -->
		<div>
			<h3 class="mt-4 mb-1 text-center font-bold underline">
				Pasal 4: PENYELESAIAN PERSELISIHAN (SENGKETA)
			</h3>
			<p>
				Segala bentuk perselisihan yang timbul di kemudian hari akibat pelaksanaan perjanjian ini
				akan diselesaikan secara musyawarah untuk mufakat. Secara tegas PIHAK KEDUA menyatakan bahwa
				kegagalan mengembalikan dana hutang atas iktikad buruk dapat dikatagorikan sebagai Tindak
				Pidana Penipuan dan/atau Penggelapan (Pasal 372 & 378 KUHP), di mana PIHAK PERTAMA berhak
				membawanya ke ranah Kepolisian Negara Republik Indonesia.
			</p>
		</div>
	</div>

	<!-- Penutup -->
	<div class="mt-8 text-justify">
		<p>
			Demikian Surat Perjanjian Hutang Piutang ini dibuat dalam keadaan sadar, sehat jasmani rohani,
			serta tanpa adanya paksaan dari pihak manapun. Surat dibuat rangkap 2 (dua) agar dapat
			dipegang oleh masing-masing pihak yang memiliki kekuatan hukum material yang sama.
		</p>
	</div>

	<!-- Tanda Tangan & Materai -->
	<div class="mt-12 flex break-inside-avoid justify-between px-4 text-center text-[12.5px]">
		<!-- PIHAK PERTAMA -->
		<div class="flex w-48 flex-col items-center">
			<p class="mb-1 font-bold text-slate-700 uppercase print:text-black">Pihak Pertama</p>
			<p class="mb-2 text-xs text-gray-400 italic">(Kreditor / Pemberi Uang)</p>

			<div
				class="mt-2 mb-8 flex h-12 w-24 items-center justify-center border border-gray-300 text-[10px] text-gray-300 print:border-black print:text-black"
			>
				Materai 10rb<br />(Pihak 1)
			</div>

			<div class="w-full">
				<p
					class="inline-block min-w-[140px] border-b border-black px-1 font-bold text-slate-900 uppercase"
				>
					{data.lenderName || '................................'}
				</p>
			</div>
		</div>

		<!-- SAKSI-SAKSI -->
		<div class="flex w-40 flex-col items-center text-gray-600 print:text-black">
			<p class="mt-20 mb-1 text-xs font-bold uppercase">Turut Menyaksikan:</p>

			<div class="mt-6 w-full">
				<p
					class="inline-block min-w-[120px] border-b border-dotted border-gray-500 px-1 font-bold capitalize"
				>
					{data.witness1 || '................................'}
				</p>
				<p class="text-[10px]">(Saksi 1)</p>
			</div>
			<div class="mt-6 w-full">
				<p
					class="inline-block min-w-[120px] border-b border-dotted border-gray-500 px-1 font-bold capitalize"
				>
					{data.witness2 || '................................'}
				</p>
				<p class="text-[10px]">(Saksi 2)</p>
			</div>
		</div>

		<!-- PIHAK KEDUA -->
		<div class="flex w-48 flex-col items-center">
			<p class="mb-1 font-bold text-slate-700 uppercase print:text-black">Pihak Kedua</p>
			<p class="mb-2 text-xs text-gray-400 italic">(Debitur / Peminjam Uang)</p>

			<div
				class="mt-2 mb-8 flex h-12 w-24 items-center justify-center border border-gray-300 text-[10px] text-gray-300 print:border-black print:text-black"
			>
				Materai 10rb<br />(Pihak 2)
			</div>

			<div class="w-full">
				<p
					class="inline-block min-w-[140px] border-b border-black px-1 font-bold text-slate-900 uppercase"
				>
					{data.borrowerName || '................................'}
				</p>
			</div>
		</div>
	</div>
</div>
