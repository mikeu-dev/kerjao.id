<script lang="ts">
	let {
		onPrint,
		onCopy,
		themeColor = $bindable('#4f46e5')
	}: { onPrint: () => void; onCopy: () => void; themeColor: string } = $props();

	const colors = [
		{ name: 'Indigo', hex: '#4f46e5' },
		{ name: 'Emerald', hex: '#10b981' },
		{ name: 'Rose', hex: '#f43f5e' },
		{ name: 'Slate', hex: '#475569' },
		{ name: 'Amber', hex: '#d97706' }
	];

	let isCopying = $state(false);

	async function handleCopy() {
		isCopying = true;
		onCopy();
		setTimeout(() => (isCopying = false), 2000);
	}
</script>

<div class="flex flex-col gap-6">
	<!-- Theme Picker -->
	<div
		class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
	>
		<h4 class="mb-4 text-xs font-bold tracking-widest text-slate-400 uppercase">
			Personalasi Warna Dokumen
		</h4>
		<div class="flex flex-wrap gap-3">
			{#each colors as color}
				<button
					onclick={() => (themeColor = color.hex)}
					class="group relative flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 active:scale-90"
					style="background-color: {color.hex}"
					title={color.name}
				>
					{#if themeColor === color.hex}
						<svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="3"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					{/if}
				</button>
			{/each}
		</div>
	</div>

	<!-- Action Buttons -->
	<div class="flex flex-wrap gap-3">
		<button
			onclick={onPrint}
			class="flex flex-1 items-center justify-center gap-2 rounded-2xl px-6 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 sm:flex-none"
			style="background-color: {themeColor}; shadow-color: {themeColor}44"
		>
			<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
				/>
			</svg>
			Cetak / Download PDF
		</button>

		<button
			onclick={handleCopy}
			class="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-bold text-slate-700 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-50 active:scale-95 sm:flex-none dark:bg-slate-800 dark:text-white dark:ring-slate-700"
		>
			{#if isCopying}
				<svg class="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 13l4 4L19 7"
					/>
				</svg>
				Kontrak Tersalin!
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
</div>
