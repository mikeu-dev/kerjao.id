<script lang="ts">
	let { onPrint, onCopy }: { onPrint: () => void; onCopy: () => void } = $props();

	let isCopying = $state(false);

	async function handleCopy() {
		isCopying = true;
		onCopy();
		setTimeout(() => (isCopying = false), 2000);
	}
</script>

<div class="flex flex-wrap gap-3">
	<button
		onclick={onPrint}
		class="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-700 active:scale-95 sm:flex-none"
	>
		<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
			/>
		</svg>
		Cetak / PDF
	</button>

	<button
		onclick={handleCopy}
		class="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-slate-700 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-50 active:scale-95 sm:flex-none dark:bg-slate-800 dark:text-white dark:ring-slate-700"
	>
		{#if isCopying}
			<svg class="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
			</svg>
			Tersalin!
		{:else}
			<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002-2h2a2 2 0 002-2"
				/>
			</svg>
			Salin Teks
		{/if}
	</button>
</div>
