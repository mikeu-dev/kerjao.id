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

<div class="flex flex-col gap-3 sm:flex-row">
	<button
		onclick={handleCopy}
		class="inline-flex flex-1 items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
	>
		{#if copied}
			Tersalin!
		{:else}
			Salin ke Clipboard
		{/if}
	</button>

	<button
		onclick={handlePrint}
		class="inline-flex flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
	>
		Cetak / Simpan PDF
	</button>
</div>
