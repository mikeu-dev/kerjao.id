<script lang="ts">
	import type { POData } from '$lib/utils/po';
	import { formatCurrency, formatTanggal, getSubtotal } from '$lib/utils/po';

	let { data }: { data: POData } = $props();

	let subtotal = $derived(getSubtotal(data.items));
	// Diskon memotong subtotal terlebih dahulu
	let taxableAmount = $derived(subtotal - Number(data.discount || 0));
	let taxAmount = $derived(Math.round((taxableAmount * Number(data.taxRate || 0)) / 100));

	// Grand total termasuk ongkir setelah pajak (asumsi standar umum)
	let grandTotal = $derived(taxableAmount + taxAmount + Number(data.shippingCost || 0));
</script>

<div
	class="relative mx-auto min-h-[1122px] w-full bg-white p-10 font-sans text-[13px] leading-relaxed text-gray-900 shadow-2xl print:m-0 print:p-0 print:text-black print:shadow-none"
>
	<!-- Header Kanan Kiri -->
	<div class="mb-8 flex items-start justify-between">
		<!-- Logo / Company -->
		<div class="w-1/2">
			<h1 class="mb-2 text-3xl font-black tracking-tight text-rose-700 uppercase print:text-black">
				{data.buyerCompany || 'NAMA PERUSAHAAN PEMBELI'}
			</h1>
			<p class="leading-snug whitespace-pre-wrap text-gray-500 print:text-gray-800">
				{data.buyerAddress || 'Alamat Penagihan (Billing)'}
			</p>
			{#if data.buyerContact}
				<p class="mt-1 text-gray-500 print:text-gray-800">{data.buyerContact}</p>
			{/if}
		</div>

		<!-- Title Dokumen -->
		<div class="w-1/2 text-right">
			<h2
				class="mb-4 text-4xl font-black tracking-wider text-gray-300 uppercase print:text-gray-400"
			>
				Purchase Order
			</h2>
			<table class="ml-auto text-left text-[12px]">
				<tbody>
					<tr>
						<td class="py-1 pr-4 font-bold text-gray-500">PO Number</td>
						<td class="border border-gray-300 bg-gray-50 px-3 py-1 font-bold"
							>{data.poNumber || 'PO-202X-XXX'}</td
						>
					</tr>
					<tr>
						<td class="py-1 pr-4 font-bold text-gray-500">Date</td>
						<td class="border border-gray-300 px-3 py-1">{formatTanggal(data.date)}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<!-- Information Grid (Vendor vs Ship To) -->
	<div class="mt-2 mb-8 flex gap-6 text-[12.5px]">
		<!-- Vendor Box -->
		<div class="w-1/2 rounded-sm border border-gray-300">
			<div
				class="border-b border-gray-300 bg-gray-100 px-3 py-1.5 text-xs font-bold tracking-wider text-gray-700 uppercase"
			>
				Vendor (Supplier)
			</div>
			<div class="bg-white p-3">
				<p class="text-[14px] font-bold">{data.vendorCompany || 'NAMA VENDOR'}</p>
				{#if data.vendorContact}
					<p class="my-1 text-gray-600 italic">{data.vendorContact}</p>
				{/if}
				<p class="mt-1 leading-snug whitespace-pre-wrap text-gray-700">
					{data.vendorAddress || 'Alamat Vendor'}
				</p>
			</div>
		</div>

		<!-- Ship To Box -->
		<div class="w-1/2 rounded-sm border border-blue-200 print:border-gray-300">
			<div
				class="border-b border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold tracking-wider text-blue-800 uppercase print:border-gray-300 print:bg-gray-100 print:text-gray-700"
			>
				Ship To (Pengiriman)
			</div>
			<div class="bg-white p-3">
				<p class="text-[14px] font-bold">{data.buyerCompany || 'NAMA PERUSAHAAN (GUDANG)'}</p>
				{#if data.buyerName}
					<p class="my-1 text-gray-600 italic">Attn: {data.buyerName}</p>
				{/if}
				<p class="mt-1 leading-snug whitespace-pre-wrap text-gray-700">
					{data.shippingAddress || 'Alamat Pengiriman Barang'}
				</p>
			</div>
		</div>
	</div>

	<!-- Shipping Terms Header -->
	<table class="mb-6 w-full border border-gray-300 text-center text-[12px] uppercase">
		<thead class="border-b border-gray-300 bg-gray-100 font-bold text-gray-600">
			<tr>
				<th class="border-r border-gray-300 px-2 py-2 font-bold">Shipping Method</th>
				<th class="border-r border-gray-300 px-2 py-2 font-bold">Payment Terms</th>
				<th class="px-2 py-2 font-bold">Required Delivery Date</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="border-r border-gray-300 px-2 py-2.5 font-medium"
					>{data.shippingMethod || 'Standard'}</td
				>
				<td class="border-r border-gray-300 px-2 py-2.5 font-medium"
					>{data.paymentTerms || 'Default'}</td
				>
				<td class="px-2 py-2.5 font-medium text-rose-700 print:text-black"
					>{formatTanggal(data.shippingDate)}</td
				>
			</tr>
		</tbody>
	</table>

	<!-- Tabel Item PO -->
	<div class="mb-4">
		<table class="w-full border-collapse border border-gray-300 text-left">
			<thead class="bg-gray-800 text-xs text-white uppercase print:bg-gray-200 print:text-black">
				<tr>
					<th class="w-10 border border-gray-400 px-3 py-2 text-center">No</th>
					<th class="w-28 border border-gray-400 px-3 py-2 text-center">Item Code</th>
					<th class="border border-gray-400 px-3 py-2">Item Description</th>
					<th class="w-20 border border-gray-400 px-3 py-2 text-center">QTY</th>
					<th class="w-32 border border-gray-400 px-3 py-2 text-right">Unit Price</th>
					<th class="w-32 border border-gray-400 px-3 py-2 text-right">Amount</th>
				</tr>
			</thead>
			<tbody>
				{#if data.items.length === 0}
					<tr>
						<td
							colspan="6"
							class="border border-gray-300 px-3 py-8 text-center text-gray-400 italic"
							>No Items Specifed</td
						>
					</tr>
				{:else}
					{#each data.items as item, index (item.id)}
						<tr>
							<td class="border-x border-b border-gray-300 px-3 py-2.5 text-center text-gray-500"
								>{index + 1}</td
							>
							<td
								class="border-x border-b border-gray-300 px-3 py-2.5 text-center font-mono text-[11px] text-gray-600"
								>{item.kode || '-'}</td
							>
							<td class="border-x border-b border-gray-300 px-3 py-2.5 text-[12.5px] font-bold"
								>{item.name || '-'}</td
							>
							<td
								class="border-x border-b border-gray-300 bg-gray-50 px-3 py-2.5 text-center font-medium print:bg-transparent"
								>{item.quantity || 0}
								<span class="ml-0.5 text-[10px] text-gray-500">{item.unit || ''}</span></td
							>
							<td
								class="border-x border-b border-gray-300 px-3 py-2.5 text-right font-mono text-[12px]"
								>{formatCurrency(item.price || 0)}</td
							>
							<td
								class="border-x border-b border-gray-300 px-3 py-2.5 text-right font-mono text-[12.5px] font-bold"
								>{formatCurrency((item.quantity || 0) * (item.price || 0))}</td
							>
						</tr>
					{/each}
				{/if}
			</tbody>
		</table>
	</div>

	<!-- Totals & Notes -->
	<div class="flex items-start gap-8">
		<!-- Keterangan/Notes Kiri -->
		<div class="w-1/2">
			{#if data.note}
				<div
					class="rounded-sm border border-amber-200 bg-amber-50 p-3 print:border-gray-300 print:bg-transparent"
				>
					<p class="mb-1 text-xs font-bold text-amber-900 uppercase print:text-black">
						Special Instructions / Remarks:
					</p>
					<p class="text-[12px] whitespace-pre-wrap text-amber-800 print:text-gray-800">
						{data.note}
					</p>
				</div>
			{/if}

			<div class="mt-8 text-justify text-[11px] leading-relaxed text-gray-500 print:text-gray-700">
				* Dengan menerima Dokumen Purchase Order ini, Vendor/Supplier dianggap sepakat dengan
				syarat, ketentuan, serta tenggat waktu (deadline) pengiriman yang tertera. Purchase Order
				ini mengikat secara hukum apabila disetujui tanpa sanggahan tertulis.
			</div>
		</div>

		<!-- Kalkulasi Kanan -->
		<div class="w-1/2">
			<table class="w-full text-right text-[12px]">
				<tbody>
					<!-- Subtotal -->
					<tr>
						<td
							class="border-r border-gray-200 px-3 py-1.5 text-xs font-bold text-gray-600 uppercase print:text-black"
							>Subtotal</td
						>
						<td class="w-40 px-3 py-1.5 font-mono font-bold">{formatCurrency(subtotal)}</td>
					</tr>
					<!-- Discount -->
					{#if data.discount > 0}
						<tr>
							<td class="border-r border-gray-200 px-3 py-1.5 text-xs text-rose-500 uppercase"
								>Discount</td
							>
							<td class="px-3 py-1.5 font-mono text-rose-600 print:text-black"
								>({formatCurrency(data.discount)})</td
							>
						</tr>
					{/if}
					<!-- Tax -->
					{#if data.taxRate > 0}
						<tr>
							<td
								class="border-r border-gray-200 px-3 py-1.5 text-xs text-gray-600 uppercase print:text-black"
								>Tax ({data.taxRate}%)</td
							>
							<td class="px-3 py-1.5 font-mono">{formatCurrency(taxAmount)}</td>
						</tr>
					{/if}
					<!-- Shipping -->
					{#if data.shippingCost > 0}
						<tr>
							<td
								class="border-r border-gray-200 px-3 py-1.5 text-xs text-gray-600 uppercase print:text-black"
								>Shipping (Ongkir)</td
							>
							<td class="px-3 py-1.5 font-mono">{formatCurrency(data.shippingCost)}</td>
						</tr>
					{/if}
					<!-- Grand Total -->
					<tr class="bg-gray-800 text-white print:bg-gray-200 print:text-black">
						<td
							class="border-r border-gray-700 px-3 py-3 text-sm font-black tracking-wide uppercase print:border-gray-300"
							>Order Total</td
						>
						<td class="px-3 py-3 font-mono text-lg font-black">{formatCurrency(grandTotal)}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<!-- Ttd & Otorisasi -->
	<div class="mt-16 flex break-inside-avoid justify-end px-4">
		<div class="flex w-64 flex-col items-center text-center">
			<p class="mb-1 text-xs font-bold tracking-widest text-slate-500 uppercase print:text-black">
				Authorized By
			</p>
			<p class="text-sm font-bold">{data.buyerCompany || 'NAMA PERUSAHAAN'}</p>

			<div class="mt-20 w-fit text-center">
				<p class="inline-block border-b border-black px-4 font-bold text-slate-900 uppercase">
					{data.buyerName || 'NAMA PEMESAN'}
				</p>
				<p class="mt-1 text-[11px] text-slate-500 uppercase">Purchaser / Director</p>
			</div>
		</div>
	</div>
</div>
