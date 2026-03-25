<script lang="ts">
	let { letter }: { letter: string } = $props();
	let copied = $state(false);

	async function handleCopy() {
		if (!navigator.clipboard) return;
		try {
			await navigator.clipboard.writeText(letter);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy text', err);
		}
	}

	function handlePrint() {
		window.print();
	}
</script>

<div class="flex flex-col gap-4 sm:flex-row">
	<button
		onclick={handleCopy}
		class="group relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-indigo-600/40 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-slate-900"
	>
		<span class="relative z-10">
			{#if copied}
				Tersalin!
			{:else}
				Salin ke Clipboard
			{/if}
		</span>
		<div
			class="relative z-10 flex items-center justify-center transition-transform group-hover:translate-x-1"
		>
			{#if copied}
				<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
				</svg>
			{:else}
				<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
					/>
				</svg>
			{/if}
		</div>
		<!-- Glossy overlay -->
		<div
			class="absolute inset-0 bg-linear-to-b from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
		></div>
	</button>

	<button
		onclick={handlePrint}
		class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-700 dark:focus:ring-offset-slate-900"
	>
		<span>Cetak / Simpan PDF</span>
		<svg
			class="h-5 w-5 text-slate-400 dark:text-slate-500"
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
