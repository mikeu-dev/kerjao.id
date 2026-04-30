<script lang="ts">
	import type { InvoiceData } from '$lib/utils/invoice';
	import { calculateInvoiceTotals } from '$lib/utils/invoice';
	import { translations } from '$lib/utils/translations';

	let { data }: { data: InvoiceData } = $props();

	const t = $derived(translations.invoice[data.lang || 'id']);

	function formatCurrency(amount: number): string {
		return new Intl.NumberFormat(data.lang === 'en' ? 'en-US' : 'id-ID', {
			style: 'currency',
			currency: data.lang === 'en' ? 'USD' : 'IDR',
			minimumFractionDigits: 0
		}).format(amount);
	}

	let totals = $derived(calculateInvoiceTotals(data));

	function niceDate(d: string): string {
		if (!d) return '-';
		return new Date(d).toLocaleDateString(data.lang === 'en' ? 'en-US' : 'id-ID', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<!-- The wrapping container needs to look like an A4 paper -->
<div
	class="relative mx-auto min-h-[1122px] w-full bg-white p-8 font-sans text-[14px] leading-relaxed text-slate-900 shadow-2xl sm:p-12 print:m-0 print:p-0 print:shadow-none"
>
	<!-- Header -->
	<div class="mb-12 flex flex-col items-start justify-between gap-8 sm:flex-row">
		<div class="w-full wrap-break-word sm:w-1/2">
			<h1 class="mb-2 text-4xl font-extrabold tracking-tight text-slate-900 uppercase">INVOICE</h1>
			<p class="font-medium tracking-wide text-slate-500">#{data.invoiceNumber || 'INV-XXXXX'}</p>
		</div>
		<div class="relative w-full text-sm wrap-break-word sm:w-1/2 sm:text-right">
			<h2 class="mb-1 text-lg font-bold">{data.vendorName || 'Nama Perusahaan Anda'}</h2>
			<div class="leading-relaxed whitespace-pre-wrap text-slate-500">
				{data.vendorDetails || 'Alamat Perusahaan\nKota, Kode Pos\nTelepon'}
			</div>
		</div>
	</div>

	<!-- Dates & Client Info -->
	<div class="mb-12 flex flex-col justify-between gap-8 border-t border-slate-100 pt-8 sm:flex-row">
		<div class="w-full sm:w-1/2">
			<div class="mb-2 text-xs font-bold tracking-wider text-slate-400 uppercase">
				{t.billTo}:
			</div>
			<h3 class="mb-1 text-lg font-bold">{data.clientName || '(Client Name)'}</h3>
			<div class="text-sm leading-relaxed whitespace-pre-wrap text-slate-600">
				{data.clientDetails || '(Client Details)'}
			</div>
		</div>
		<div class="flex w-full flex-col gap-4 sm:w-1/2 sm:items-end sm:text-right">
			<div>
				<div class="mb-1 text-xs font-bold tracking-wider text-slate-400 uppercase">
					{t.date}
				</div>
				<div class="font-medium text-slate-800">{niceDate(data.issueDate)}</div>
			</div>
			<div>
				<div class="mb-1 text-xs font-bold tracking-wider text-slate-400 uppercase">
					{t.due}
				</div>
				<div class="font-medium text-rose-600">{niceDate(data.dueDate)}</div>
			</div>
		</div>
	</div>

	<!-- Table of Items -->
	<div class="mb-12">
		<div class="w-full overflow-hidden rounded-xl border border-slate-200">
			<table class="w-full text-left text-sm">
				<thead class="bg-slate-50 text-slate-700">
					<tr>
						<th class="px-4 py-3 font-semibold">{t.desc}</th>
						<th class="w-20 px-4 py-3 text-center font-semibold">{t.qty}</th>
						<th class="w-32 px-4 py-3 text-right font-semibold">{t.price}</th>
						<th class="w-36 px-4 py-3 text-right font-semibold">Total</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-slate-100">
					{#each data.items as item (item.id)}
						<tr>
							<td class="px-4 py-4 font-medium text-slate-800">
								{item.description || '-'}
							</td>
							<td class="px-4 py-4 text-center text-slate-600">
								{item.quantity}
							</td>
							<td class="px-4 py-4 text-right text-slate-600">
								{formatCurrency(item.unitPrice)}
							</td>
							<td class="px-4 py-4 text-right font-medium text-slate-800">
								{formatCurrency(item.quantity * item.unitPrice)}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<!-- Totals -->
	<div class="mb-16 flex justify-end">
		<div class="w-full sm:w-1/2 lg:w-1/3">
			<div class="space-y-3 text-sm text-slate-600">
				<div class="flex justify-between border-b border-slate-100 pb-3">
					<span>{t.subtotal}</span>
					<span class="font-medium text-slate-800">{formatCurrency(totals.subtotal)}</span>
				</div>

				{#if data.discount > 0}
					<div class="flex justify-between border-b border-slate-100 pb-3 text-rose-600">
						<span>{t.discount}</span>
						<span>- {formatCurrency(data.discount)}</span>
					</div>
				{/if}

				{#if data.taxRate > 0}
					<div class="flex justify-between border-b border-slate-100 pb-3">
						<span>{t.tax} ({data.taxRate}%)</span>
						<span class="font-medium text-slate-800">{formatCurrency(totals.taxAmount)}</span>
					</div>
				{/if}

				<div class="flex justify-between pt-2 text-lg font-bold text-slate-900">
					<span>{t.total}</span>
					<span>{formatCurrency(totals.total)}</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Notes & Payment Details -->
	<div class="mb-12 flex flex-col gap-8 text-sm sm:flex-row">
		{#if data.paymentInfo}
			<div class="flex-1">
				<div class="mb-2 text-xs font-bold tracking-wider text-slate-400 uppercase">
					{t.payment}
				</div>
				<div
					class="rounded-xl border border-slate-100 bg-slate-50 p-4 leading-relaxed whitespace-pre-wrap text-slate-700"
				>
					{data.paymentInfo}
				</div>
			</div>
		{/if}

		{#if data.notes}
			<div class="flex-1">
				<div class="mb-2 text-xs font-bold tracking-wider text-slate-400 uppercase">
					{t.notes}
				</div>
				<div class="leading-relaxed whitespace-pre-wrap text-slate-600 italic">{data.notes}</div>
			</div>
		{/if}
	</div>

	<!-- Signature -->
	{#if data.signature}
		<div class="flex flex-col items-center sm:items-end">
			<div class="w-48 text-center">
				<p class="mb-2 text-xs font-bold text-slate-400 uppercase">
					{data.lang === 'en' ? 'Authorized By' : 'Hormat Kami'}
				</p>
				<img
					src={data.signature}
					alt="Signature"
					class="mx-auto block h-20 w-40 object-contain grayscale"
				/>
				<div class="mt-2 border-t border-slate-200 pt-1">
					<p class="font-bold text-slate-900">{data.vendorName || '(Vendor Name)'}</p>
				</div>
			</div>
		</div>
	{/if}
</div>
