<script lang="ts">
	function printSurat() {
		// Adds a slight timeout to ensure styles apply before printing
		setTimeout(() => {
			window.print();
		}, 100);
	}
</script>

<div class="flex flex-col gap-3 sm:flex-row">
	<button
		onclick={printSurat}
		class="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-cyan-600 px-6 py-3.5 font-semibold text-white shadow-[0_0_20px_-5px_rgba(8,145,178,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-[0_0_25px_-5px_rgba(8,145,178,0.4)] focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:outline-none sm:w-auto dark:focus:ring-offset-slate-900"
	>
		<span class="relative z-10">Unduh Bukti Kuasa / Cetak PDF</span>
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
				d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
			/>
		</svg>
		<div
			class="absolute inset-0 bg-linear-to-b from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
		></div>
	</button>
</div>
