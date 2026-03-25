<script lang="ts">
	import type { KuasaData } from '$lib/utils/kuasa';
	import { formatTanggalIndonesia } from '$lib/utils/kuasa';

	let { data }: { data: KuasaData } = $props();
</script>

<div
	class="relative mx-auto w-full bg-white p-10 font-serif text-[15px] leading-relaxed text-slate-900 shadow-2xl sm:p-14 print:m-0 print:p-0 print:text-black print:shadow-none"
	style="min-height: 1122px;"
>
	<!-- Header Surat -->
	<div class="mt-8 mb-12 text-center">
		<h1
			class="inline-block border-b-[3px] border-slate-900 pb-1 text-2xl font-bold tracking-wide uppercase print:border-black"
		>
			SURAT KUASA
		</h1>
	</div>

	<!-- Kalimat Pembuka -->
	<div class="mb-6 text-justify">
		<p>Yang bertanda tangan di bawah ini:</p>
	</div>

	<!-- Data Pemberi Kuasa -->
	<div class="mb-8 pr-4 pl-8">
		<table class="w-full">
			<tbody>
				<tr>
					<td class="w-32 py-1 align-top">Nama Lengkap</td>
					<td class="w-4 py-1 align-top">:</td>
					<td class="py-1 align-top font-bold uppercase"
						>{data.giverName || '...........................................'}</td
					>
				</tr>
				<tr>
					<td class="w-32 py-1 align-top">NIK / KTP</td>
					<td class="w-4 py-1 align-top">:</td>
					<td class="py-1 align-top"
						>{data.giverID || '...........................................'}</td
					>
				</tr>
				<tr>
					<td class="w-32 py-1 align-top">Pekerjaan</td>
					<td class="w-4 py-1 align-top">:</td>
					<td class="py-1 align-top"
						>{data.giverJob || '...........................................'}</td
					>
				</tr>
				<tr>
					<td class="w-32 py-1 align-top">Alamat KTP</td>
					<td class="w-4 py-1 align-top">:</td>
					<td class="py-1 align-top whitespace-pre-wrap"
						>{data.giverAddress || '...........................................'}</td
					>
				</tr>
			</tbody>
		</table>
		<p class="mt-4 text-justify">
			Selanjutnya disebut sebagai <span class="font-bold">PEMBERI KUASA</span>.
		</p>
	</div>

	<!-- Kalimat Transisi -->
	<div class="mb-6 text-justify">
		<p>Dengan ini memberikan kuasa penuh kepada:</p>
	</div>

	<!-- Data Penerima Kuasa -->
	<div class="mb-8 pr-4 pl-8">
		<table class="w-full">
			<tbody>
				<tr>
					<td class="w-32 py-1 align-top">Nama Lengkap</td>
					<td class="w-4 py-1 align-top">:</td>
					<td class="py-1 align-top font-bold uppercase"
						>{data.receiverName || '...........................................'}</td
					>
				</tr>
				<tr>
					<td class="w-32 py-1 align-top">NIK / KTP</td>
					<td class="w-4 py-1 align-top">:</td>
					<td class="py-1 align-top"
						>{data.receiverID || '...........................................'}</td
					>
				</tr>
				<tr>
					<td class="w-32 py-1 align-top">Pekerjaan</td>
					<td class="w-4 py-1 align-top">:</td>
					<td class="py-1 align-top"
						>{data.receiverJob || '...........................................'}</td
					>
				</tr>
				<tr>
					<td class="w-32 py-1 align-top">Alamat KTP</td>
					<td class="w-4 py-1 align-top">:</td>
					<td class="py-1 align-top whitespace-pre-wrap"
						>{data.receiverAddress || '...........................................'}</td
					>
				</tr>
			</tbody>
		</table>
		<p class="mt-4 text-justify">
			Selanjutnya disebut sebagai <span class="font-bold">PENERIMA KUASA</span>.
		</p>
	</div>

	<!-- Penjelasan Klausa Dasar -->
	<div class="mb-10 text-justify">
		<p class="mb-2 font-bold">========================= KHUSUS =========================</p>
		<p class="mb-4">Bertindak untuk dan atas nama PEMBERI KUASA guna:</p>
		<!-- Box Deskripsi Area -->
		<div
			class="mb-6 min-h-[100px] border-l-4 border-slate-400 py-1 pl-8 leading-relaxed whitespace-pre-wrap italic print:border-l-2 print:border-black"
		>
			{data.powerDescription ||
				'........................................................................................................................................................................................................................................................................'}
		</div>
		<p class="mb-4">
			Untuk keperluan tersebut di atas, Penerima Kuasa berhak menghadap kepada pihak yang berwenang,
			instansi terkait, memberikan dan/atau meminta keterangan, menandatangani surat-surat, serta
			melakukan segala tindakan yang diperlukan sesuai dengan ketentuan hukum yang berlaku tanpa ada
			pengecualian.
		</p>
		<p>
			Demikian Surat Kuasa ini dibuat dengan sadar, tanpa ada paksaan dari pihak mana pun, agar
			dapat dipergunakan sebagaimana mestinya.
		</p>
	</div>

	<!-- Tanda Tangan -->
	<div class="mt-16 pr-4 text-right">
		<p>{data.city || '...............'}, {formatTanggalIndonesia(data.date)}</p>
	</div>

	<div class="mt-8 flex break-inside-avoid justify-between px-4 pb-12">
		<!-- Signature Penerima (Kiri) -->
		<div class="flex w-56 flex-col items-center text-center">
			<p class="mb-20 font-bold uppercase">Penerima Kuasa</p>

			<p
				class="mt-4 inline-block border-b border-transparent font-bold text-slate-900 uppercase underline"
			>
				{data.receiverName || 'NAMA PENERIMA KUASA'}
			</p>
		</div>

		<!-- Signature Pemberi (Kanan) -->
		<div class="flex w-56 flex-col items-center text-center">
			<p class="mb-6 font-bold uppercase">Pemberi Kuasa</p>

			<div
				class="mb-2 flex h-20 w-32 items-center justify-center border-2 border-dashed border-slate-300 bg-slate-50 text-xs text-slate-400 opacity-70 print:border-black/30 print:bg-white"
			>
				Materai 10rb
			</div>

			<p
				class="mt-4 inline-block border-b border-transparent font-bold text-slate-900 uppercase underline"
			>
				{data.giverName || 'NAMA PEMBERI KUASA'}
			</p>
		</div>
	</div>
</div>
