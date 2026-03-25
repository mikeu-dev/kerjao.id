<script lang="ts">
	import type { GajiData } from '$lib/utils/calculateGaji';

	let { data = $bindable() }: { data: GajiData } = $props();

	// Ensure currency formatting works natively in input, but for simplicity we'll just use number inputs
</script>

<div class="space-y-6">
	<!-- Pendapatan -->
	<div class="space-y-4 border-l-4 border-emerald-500 pl-4">
		<div>
			<h3 class="font-bold text-slate-800 dark:text-white">Rincian Pendapatan</h3>
			<p class="mt-1 mb-4 text-xs text-slate-500 dark:text-slate-400">
				Komponen pendapatan rutin bulanan.
			</p>
		</div>
		<div>
			<label
				for="gajiPokok"
				class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
			>
				Gaji Pokok (Sebulan)
			</label>
			<div class="relative">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
					<span class="font-semibold text-slate-500 dark:text-slate-400">Rp</span>
				</div>
				<input
					type="number"
					id="gajiPokok"
					bind:value={data.gajiPokok}
					class="block w-full rounded-xl border-slate-200 bg-white/50 py-2.5 pr-4 pl-12 shadow-sm transition-all duration-200 focus:border-emerald-500 focus:bg-white focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-emerald-400 dark:focus:bg-slate-900 dark:focus:ring-emerald-400"
					placeholder="0"
				/>
			</div>
		</div>

		<div>
			<label
				for="tunjangan"
				class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
			>
				Tunjangan Tetap
			</label>
			<div class="relative">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
					<span class="font-semibold text-slate-500 dark:text-slate-400">Rp</span>
				</div>
				<input
					type="number"
					id="tunjangan"
					bind:value={data.tunjanganTetap}
					class="block w-full rounded-xl border-slate-200 bg-white/50 py-2.5 pr-4 pl-12 shadow-sm transition-all duration-200 focus:border-emerald-500 focus:bg-white focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-emerald-400 dark:focus:bg-slate-900 dark:focus:ring-emerald-400"
					placeholder="0"
				/>
			</div>
		</div>

		<div>
			<label
				for="tunjanganTidakTetap"
				class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
			>
				Tunjangan Tidak Tetap (Variabel)
			</label>
			<div class="relative">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
					<span class="font-semibold text-slate-500 dark:text-slate-400">Rp</span>
				</div>
				<input
					type="number"
					id="tunjanganTidakTetap"
					bind:value={data.tunjanganTidakTetap}
					class="block w-full rounded-xl border-slate-200 bg-white/50 py-2.5 pr-4 pl-12 shadow-sm transition-all duration-200 focus:border-emerald-500 focus:bg-white focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-emerald-400 dark:focus:bg-slate-900 dark:focus:ring-emerald-400"
					placeholder="0"
				/>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Potongan -->
	<div class="space-y-4 border-l-4 border-rose-500 pt-2 pl-4">
		<div>
			<h3 class="text-base font-semibold text-slate-900 dark:text-white">Atur Potongan</h3>
			<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
				Pilih komponen yang akan dipotong dari gaji.
			</p>
		</div>

		<label class="group relative flex cursor-pointer items-start">
			<div class="flex h-6 items-center">
				<input
					type="checkbox"
					bind:checked={data.potonganBPJSKesehatan}
					class="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600 dark:border-slate-600 dark:bg-slate-800"
				/>
			</div>
			<div class="ml-3 text-sm leading-6">
				<span
					class="font-medium text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400"
					>Potongan BPJS Kesehatan (1%)</span
				>
				<p class="text-slate-500 dark:text-slate-400">
					Dipotong 1% dari gaji pokok & tunjangan tetap.
				</p>
			</div>
		</label>

		<label class="group relative flex cursor-pointer items-start">
			<div class="flex h-6 items-center">
				<input
					type="checkbox"
					bind:checked={data.potonganJHT}
					class="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600 dark:border-slate-600 dark:bg-slate-800"
				/>
			</div>
			<div class="ml-3 text-sm leading-6">
				<span
					class="font-medium text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400"
					>Potongan JHT BPJS (2%)</span
				>
				<p class="text-slate-500 dark:text-slate-400">Jaminan Hari Tua dipotong 2% dari pegawai.</p>
			</div>
		</label>

		<label class="group relative flex cursor-pointer items-start">
			<div class="flex h-6 items-center">
				<input
					type="checkbox"
					bind:checked={data.potonganJP}
					class="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-600 dark:border-slate-600 dark:bg-slate-800"
				/>
			</div>
			<div class="ml-3 text-sm leading-6">
				<span
					class="font-medium text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400"
					>Potongan JP BPJS (1%)</span
				>
				<p class="text-slate-500 dark:text-slate-400">Jaminan Pensiun dipotong 1% dari pegawai.</p>
			</div>
		</label>
	</div>

	<!-- Potongan Lainnya -->
	<div class="pt-2">
		<label
			for="potonganLain"
			class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
		>
			Potongan Lainnya (Pinjaman, Telat, dll)
		</label>
		<div class="relative">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
				<span class="font-semibold text-slate-500 dark:text-slate-400">Rp</span>
			</div>
			<input
				type="number"
				id="potonganLain"
				bind:value={data.potonganLainnya}
				class="block w-full rounded-xl border-slate-200 bg-white/50 py-2.5 pr-4 pl-12 shadow-sm transition-all duration-200 focus:border-emerald-500 focus:bg-white focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-emerald-400 dark:focus:bg-slate-900 dark:focus:ring-emerald-400"
				placeholder="0"
			/>
		</div>
	</div>
</div>
