<script lang="ts">
	let printed = false;

	function handlePrint() {
		printed = true;
		// Use requestAnimationFrame to ensure the DOM has updated before printing
		requestAnimationFrame(() => {
			window.print();
			setTimeout(() => {
				printed = false;
			}, 1000); // Reset after print dialog is handled
		});
	}
</script>

<div class="space-y-4">
	<button
		onclick={handlePrint}
		class="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-slate-900 px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-slate-800 hover:shadow-xl hover:ring-2 hover:ring-slate-900 hover:ring-offset-2 active:scale-[0.98] dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 dark:hover:ring-white dark:hover:ring-offset-slate-900"
	>
		<div
			class="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0"
		></div>
		<svg
			class="relative z-10 h-5 w-5"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
			></path>
		</svg>
		<span class="relative z-10">{printed ? 'Menyiapkan PDF...' : 'Cetak & Unduh CV (PDF)'}</span>
	</button>

	<!-- Information Cards -->
	<div
		class="rounded-xl border border-indigo-100 bg-indigo-50/50 p-4 dark:border-indigo-900/30 dark:bg-indigo-900/10"
	>
		<div class="flex gap-3">
			<div class="mt-0.5 text-indigo-600 dark:text-indigo-400">
				<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</div>
			<div>
				<h4 class="text-sm font-semibold text-slate-900 dark:text-white">Tips Unduh PDF:</h4>
				<ul
					class="mt-1 list-inside list-disc space-y-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400"
				>
					<li>
						Pada jendela pratinjau, pastikan <strong>Destination: Save as PDF</strong>.
					</li>
					<li>
						Ukuran Kertas <strong>Paper Size: A4</strong>.
					</li>
					<li>
						<strong>Hapus centang</strong> "Headers and footers" agar url website tidak ikut tercetak.
					</li>
					<li>Skala (Scale) disarankan Default (100%).</li>
				</ul>
			</div>
		</div>
	</div>
</div>
