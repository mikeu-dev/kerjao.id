<script lang="ts">
	import type { PenawaranData } from '$lib/utils/penawaran';
	import { formatCurrency, formatTanggal, getSubtotal } from '$lib/utils/penawaran';

	let { data }: { data: PenawaranData } = $props();

	let subtotal = $derived(getSubtotal(data.items));
	let taxAmount = $derived(
		Math.round(((subtotal - Number(data.discount || 0)) * Number(data.taxRate || 0)) / 100)
	);
	let grandTotal = $derived(subtotal - Number(data.discount || 0) + taxAmount);
</script>

<div
	class="relative mx-auto w-full bg-white p-10 font-sans text-[14.5px] leading-relaxed text-gray-900 shadow-2xl sm:p-14 print:m-0 print:p-0 print:text-black print:shadow-none"
	style="min-height: 1122px;"
>
	<!-- Header / Kop Surat Vendor -->
	<div
		class="mb-12 flex items-end justify-between border-b-2 border-slate-800 pb-6 print:border-black"
	>
		<div class="w-2/3">
			<h1 class="text-2xl font-black tracking-wider text-slate-900 uppercase print:text-black">
				{data.senderCompany || 'NAMA PERUSAHAAN VENDOR'}
			</h1>
			<p
				class="mt-1 text-xs font-semibold tracking-wide text-slate-500 uppercase print:text-gray-700"
			>
				Company Official Quotation
			</p>
		</div>
		<div class="w-1/3 text-right text-xs text-slate-600 print:text-gray-700">
			<p class="whitespace-pre-wrap">{data.senderAddress || 'Alamat Perusahaan'}</p>
			{#if data.senderContact}
				<p class="mt-1">{data.senderContact}</p>
			{/if}
		</div>
	</div>

	<div class="mb-8 flex items-start justify-between">
		<!-- Info Surat Kiri -->
		<div class="w-1/2">
			<table class="w-full text-sm">
				<tbody>
					<tr>
						<td class="w-24 py-0.5 align-top text-gray-500">Nomor</td>
						<td class="w-3 py-0.5 align-top">:</td>
						<td class="py-0.5 align-top font-bold">{data.letterNumber || '... / ... / ...'}</td>
					</tr>
					<tr>
						<td class="w-24 py-0.5 align-top text-gray-500">Perihal</td>
						<td class="w-3 py-0.5 align-top">:</td>
						<td class="py-0.5 align-top font-bold uppercase">{data.subject || 'PENAWARAN HARGA'}</td
						>
					</tr>
					<tr>
						<td class="w-24 py-0.5 align-top text-gray-500">Berlaku s.d</td>
						<td class="w-3 py-0.5 align-top">:</td>
						<td class="py-0.5 align-top">{formatTanggal(data.validUntil)}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- Info Kota & Tanggal Kanan -->
		<div class="w-1/2 text-right">
			<p>{data.city || '...............'} , {formatTanggal(data.date)}</p>
		</div>
	</div>

	<!-- Kepada Yth (Klien) -->
	<div class="mb-8">
		<p class="mb-1 text-xs font-bold tracking-wide text-gray-500 uppercase">
			Ditujukan Kepada Yth:
		</p>
		{#if data.clientName}
			<p class="font-bold">{data.clientName}</p>
		{/if}
		<p class="text-lg font-bold">{data.clientCompany || 'NAMA PERUSAHAAN KLIEN'}</p>
		<p class="max-w-sm text-sm leading-snug whitespace-pre-wrap">
			{data.clientAddress || 'Alamat Klien'}
		</p>
	</div>

	<!-- Opening Pitch -->
	<div class="mb-6 text-justify">
		<p class="mb-4">Dengan hormat,</p>
		<p class="whitespace-pre-wrap">
			{data.openingText ||
				'Bersama surat ini, kami bermaksud mengajukan penawaran harga untuk produk/jasa yang sekiranya dapat memenuhi kebutuhan Perusahaan Bapak/Ibu. Berikut adalah rincian spesifikasi beserta penawaran harga dari kami:'}
		</p>
	</div>

	<!-- Tabel Quotation -->
	<div
		class="mt-8 mb-8 overflow-hidden rounded-md border border-gray-300 text-sm print:rounded-none"
	>
		<table class="w-full text-left">
			<thead
				class="border-b border-gray-300 bg-slate-100 text-xs text-gray-600 uppercase print:bg-gray-100 print:text-black"
			>
				<tr>
					<th class="w-12 border-r border-gray-300 px-4 py-3 text-center font-semibold">No</th>
					<th class="border-r border-gray-300 px-4 py-3 font-semibold">Uraian Pekerjaan / Produk</th
					>
					<th class="w-20 border-r border-gray-300 px-4 py-3 text-center font-semibold">QTY</th>
					<th class="w-36 border-r border-gray-300 px-4 py-3 text-right font-semibold"
						>Harga Satuan</th
					>
					<th class="w-36 px-4 py-3 text-right font-semibold">Total</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200">
				{#if data.items.length === 0}
					<tr>
						<td colspan="5" class="px-4 py-8 text-center font-medium text-gray-400 italic"
							>Belum ada baris penawaran</td
						>
					</tr>
				{:else}
					{#each data.items as item, index (item.id)}
						<tr>
							<td class="border-r border-gray-200 px-4 py-3.5 text-center text-gray-500"
								>{index + 1}</td
							>
							<td class="border-r border-gray-200 px-4 py-3.5 font-medium">{item.name || '-'}</td>
							<td class="border-r border-gray-200 px-4 py-3.5 text-center">{item.quantity || 0}</td>
							<td class="border-r border-gray-200 px-4 py-3.5 text-right text-gray-600"
								>{formatCurrency(item.price || 0)}</td
							>
							<td class="px-4 py-3.5 text-right font-semibold"
								>{formatCurrency((item.quantity || 0) * (item.price || 0))}</td
							>
						</tr>
					{/each}
				{/if}
			</tbody>
			<tfoot class="border-t-2 border-gray-300 bg-slate-50 print:bg-transparent">
				<tr>
					<td
						colspan="4"
						class="border-r border-gray-200 px-4 py-2 text-right text-gray-600 print:text-black"
						>Subtotal</td
					>
					<td class="px-4 py-2 text-right font-bold">{formatCurrency(subtotal)}</td>
				</tr>
				{#if data.discount > 0}
					<tr>
						<td
							colspan="4"
							class="border-r border-gray-200 px-4 py-2 text-right text-gray-600 italic print:text-black"
							>Diskon Tambahan</td
						>
						<td class="px-4 py-2 text-right font-medium text-rose-600 print:text-black"
							>({formatCurrency(data.discount)})</td
						>
					</tr>
				{/if}
				{#if data.taxRate > 0}
					<tr>
						<td
							colspan="4"
							class="border-r border-gray-200 px-4 py-2 text-right text-gray-600 print:text-black"
							>Pajak Tambahan ({data.taxRate}%)</td
						>
						<td class="px-4 py-2 text-right font-medium">{formatCurrency(taxAmount)}</td>
					</tr>
				{/if}
				<tr
					class="border-t-2 border-indigo-200 bg-indigo-50 text-indigo-900 print:border-black print:bg-transparent print:text-black"
				>
					<td
						colspan="4"
						class="border-r border-indigo-200 px-4 py-4 text-right text-[15px] font-black tracking-wide uppercase print:border-gray-200"
						>Grand Total</td
					>
					<td class="px-4 py-4 text-right text-[16px] font-black">{formatCurrency(grandTotal)}</td>
				</tr>
			</tfoot>
		</table>
	</div>

	<!-- Catatan / Terms -->
	{#if data.note}
		<div class="mb-10 text-sm">
			<p class="mb-2 font-bold underline">Syarat & Ketentuan (Note):</p>
			<div
				class="border-l-4 border-slate-300 py-1 pl-4 leading-relaxed whitespace-pre-wrap italic print:border-l-2 print:border-black"
			>
				{data.note}
			</div>
		</div>
	{/if}

	<!-- Closing -->
	<div class="mb-16 text-justify">
		<p>
			Demikian surat penawaran harga ini kami ajukan. Atas perhatian, waktu, dan kerjasama yang
			baik, kami menyampakan banyak terima kasih. Besar harapan kami untuk dapat mensupport
			kebutuhan bisnis Bapak/Ibu.
		</p>
	</div>

	<!-- Signatures -->
	<div class="mt-8 flex break-inside-avoid justify-end px-4">
		<div class="flex w-64 flex-col items-center text-center">
			<p class="mb-2 text-xs font-bold tracking-widest text-slate-500 uppercase print:text-black">
				Hormat Kami,
			</p>
			<p class="font-bold">{data.senderCompany || 'NAMA PERUSAHAAN'}</p>

			<div class="mt-20 w-fit text-center">
				<p
					class="mt-2 inline-block border-b border-transparent font-bold text-slate-900 uppercase underline"
				>
					{data.senderName || 'NAMA PERWAKILAN'}
				</p>
				<p class="mt-0.5 text-xs text-slate-600 uppercase">{data.senderTitle || 'JABATAN'}</p>
			</div>
		</div>
	</div>
</div>
