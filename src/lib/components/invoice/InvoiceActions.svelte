<script lang="ts">
	import type { InvoiceData } from '$lib/utils/invoice';
	import { calculateInvoiceTotals, formatRupiah } from '$lib/utils/invoice';

	let { data }: { data: InvoiceData } = $props();

	let isCopying = $state(false);

	async function copyToClipboard() {
		try {
			isCopying = true;
			const totals = calculateInvoiceTotals(data);

			const textToCopy = `INVOICE ${data.invoiceNumber || ''}\nKepada: ${data.clientName || '-'}\n---------------------------\nTotal Tagihan: ${formatRupiah(totals.total)}\nJatuh Tempo: ${data.dueDate || '-'}\n\nDibuat via kerjao.id`;

			await navigator.clipboard.writeText(textToCopy);
			setTimeout(() => {
				isCopying = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy text: ', err);
			isCopying = false;
		}
	}

	function printInvoice() {
		window.print();
	}
</script>

<div class="flex flex-col gap-3 sm:flex-row">
	<button
		onclick={copyToClipboard}
		class="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-[0_0_25px_-5px_rgba(79,70,229,0.4)] focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none sm:w-auto dark:focus:ring-offset-slate-900"
	>
		<span class="relative z-10">{isCopying ? 'Berhasil Disalin!' : 'Salin Ringkasan'}</span>
		{#if !isCopying}
			<svg
				class="relative z-10 h-5 w-5 transition-transform group-hover:scale-110"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
				/>
			</svg>
		{:else}
			<svg
				class="relative z-10 h-5 w-5 animate-pulse"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
			</svg>
		{/if}
		<div
			class="absolute inset-0 bg-linear-to-b from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
		></div>
	</button>

	<button
		onclick={printInvoice}
		class="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-sm focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:outline-none sm:w-auto dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-700 dark:focus:ring-offset-slate-900"
	>
		<span>Cetak / Simpan PDF</span>
		<svg
			class="h-5 w-5 text-slate-400 transition-colors group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
			/>
		</svg>
	</button>
</div>
