<script lang="ts">
	import { formatRupiah, type SlipGajiResult } from '$lib/utils/calculateGaji';

	let { result }: { result: SlipGajiResult } = $props();
</script>

<div
	class="relative w-full rounded-xl bg-white p-8 font-mono text-sm leading-relaxed text-slate-800 antialiased shadow-2xl ring-1 shadow-emerald-500/10 ring-slate-900/5 dark:bg-slate-900 dark:text-slate-200 dark:ring-white/10"
>
	<!-- Watermark -->
	<div
		class="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03] grayscale"
	>
		<svg class="h-64 w-64" fill="currentColor" viewBox="0 0 24 24">
			<path
				d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
			/>
		</svg>
	</div>

	<!-- Header Slip -->
	<div
		class="relative mb-6 border-b border-dashed border-slate-300 pb-6 text-center dark:border-slate-700"
	>
		<div class="text-xl font-bold tracking-widest text-emerald-600 uppercase dark:text-emerald-500">
			Estimasi Slip Gaji
		</div>
		<div class="mt-1 text-xs text-slate-500 dark:text-slate-400">
			Internal Use Only - {new Date().toLocaleDateString('id-ID', {
				month: 'long',
				year: 'numeric'
			})}
		</div>
	</div>

	<!-- Konten -->
	<div class="relative space-y-4">
		<!-- Pendapatan -->
		<div>
			<h4 class="mb-2 border-b border-slate-200 pb-1 font-bold dark:border-slate-800">
				PENDAPATAN
			</h4>
			<div class="flex justify-between py-1">
				<span>Penghasilan Bruto (Kotor)</span>
				<span class="font-semibold">{formatRupiah(result.penghasilanBruto)}</span>
			</div>
		</div>

		<!-- Potongan -->
		<div class="pt-2">
			<h4
				class="mb-2 border-b border-slate-200 pb-1 font-bold text-rose-600 dark:border-slate-800 dark:text-rose-400"
			>
				POTONGAN
			</h4>
			{#if result.deductions.length === 0}
				<div class="py-1 text-slate-400 italic">Tidak ada potongan.</div>
			{/if}
			{#each result.deductions as ded (ded.name)}
				<div class="flex justify-between py-1 text-slate-600 dark:text-slate-400">
					<span>{ded.name}</span>
					<span>- {formatRupiah(ded.amount)}</span>
				</div>
			{/each}
			<div
				class="mt-2 flex justify-between border-t border-slate-100 py-2 font-semibold dark:border-slate-800/50"
			>
				<span>Total Potongan</span>
				<span class="text-rose-600 dark:text-rose-400">- {formatRupiah(result.totalPotongan)}</span>
			</div>
		</div>

		<!-- THP -->
		<div
			class="mt-8 rounded-lg border border-emerald-100 bg-emerald-50 p-4 text-emerald-900 dark:border-emerald-500/20 dark:bg-emerald-900/20 dark:text-emerald-100"
		>
			<div class="mb-1 text-xs font-bold tracking-wider uppercase opacity-80">Take Home Pay</div>
			<div class="flex items-center justify-between">
				<span class="text-3xl font-extrabold tracking-tight"
					>{formatRupiah(result.takeHomePay)}</span
				>
			</div>
		</div>
	</div>
</div>
