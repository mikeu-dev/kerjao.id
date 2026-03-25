<script lang="ts">
	function handlePrint() {
		window.print();
	}

	function handleCopy() {
		const preview = document.querySelector('.preview-container') as HTMLElement;
		if (preview) {
			const text = preview.innerText;
			navigator.clipboard.writeText(text);
			alert('Teks draf Jual Beli berhasil disalin!');
		}
	}
</script>

<div class="flex flex-col gap-3">
	<button
		onclick={handlePrint}
		class="flex w-full items-center justify-center gap-2 rounded-xl bg-rose-600 px-6 py-3.5 font-bold text-white shadow-lg transition-all hover:bg-rose-700 hover:shadow-xl active:scale-95 dark:bg-rose-500 dark:hover:bg-rose-400"
	>
		<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
		</svg>
		Cetak ke PDF / Materai
	</button>
	<button
		onclick={handleCopy}
		class="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 px-6 py-3 font-semibold text-slate-700 transition-all hover:bg-slate-200 active:scale-95 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
	>
		Salin Draf Perjanjian
	</button>
</div>
