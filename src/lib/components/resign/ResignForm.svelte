<script lang="ts">
	import type { ResignData } from '$lib/utils/generateLetter';

	let { data = $bindable() }: { data: ResignData } = $props();

	const alasanOptions = [
		'Mendapatkan tawaran pekerjaan baru',
		'Melanjutkan pendidikan',
		'Alasan keluarga',
		'Kesehatan',
		'Memulai usaha sendiri',
		'Lainnya'
	];
</script>

<div class="space-y-6">
	<div class="space-y-5">
		<!-- Nama -->
		<div>
			<label
				for="nama"
				class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
			>
				Nama Lengkap
			</label>
			<input
				type="text"
				id="nama"
				bind:value={data.nama}
				placeholder="contoh: Budi Santoso"
				class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2.5 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-indigo-400 dark:focus:bg-slate-900 dark:focus:ring-indigo-400"
			/>
		</div>

		<!-- Posisi -->
		<div>
			<label
				for="posisi"
				class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
			>
				Posisi / Jabatan
			</label>
			<input
				type="text"
				id="posisi"
				bind:value={data.posisi}
				placeholder="contoh: Software Engineer"
				class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2.5 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-indigo-400 dark:focus:bg-slate-900 dark:focus:ring-indigo-400"
			/>
		</div>

		<!-- Perusahaan -->
		<div>
			<label
				for="perusahaan"
				class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
			>
				Nama Perusahaan
			</label>
			<input
				type="text"
				id="perusahaan"
				bind:value={data.perusahaan}
				placeholder="contoh: PT Maju Jaya"
				class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2.5 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-indigo-400 dark:focus:bg-slate-900 dark:focus:ring-indigo-400"
			/>
		</div>

		<!-- Tanggal -->
		<div>
			<label
				for="tanggal"
				class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
			>
				Tanggal Pengunduran Diri
			</label>
			<input
				type="date"
				id="tanggal"
				bind:value={data.tanggal}
				class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2.5 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-indigo-400 dark:focus:bg-slate-900 dark:focus:ring-indigo-400"
			/>
		</div>

		<!-- Alasan -->
		<div>
			<label
				for="alasan"
				class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
			>
				Alasan Resign
			</label>
			<select
				id="alasan"
				bind:value={data.alasan}
				class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2.5 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-indigo-400 dark:focus:bg-slate-900 dark:focus:ring-indigo-400"
			>
				{#each alasanOptions as opt (opt)}
					<option value={opt}>{opt}</option>
				{/each}
			</select>
		</div>

		<!-- Alasan Custom -->
		{#if data.alasan === 'Lainnya'}
			<div class="animate-fade-in">
				<label
					for="alasanCustom"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
				>
					Tuliskan Alasan Anda
				</label>
				<input
					type="text"
					id="alasanCustom"
					bind:value={data.alasanCustom}
					placeholder="contoh: pindah domisili"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2.5 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-indigo-400 dark:focus:bg-slate-900 dark:focus:ring-indigo-400"
				/>
			</div>
		{/if}

		<!-- Tone -->
		<div class="pt-2">
			<span class="mb-3 block text-sm font-semibold text-slate-700 dark:text-slate-300">
				Gaya Bahasa (Tone)
			</span>
			<div class="flex flex-wrap gap-4">
				<label
					class="group flex cursor-pointer items-center rounded-xl border border-slate-200/50 bg-white/50 px-4 py-2.5 shadow-sm transition-colors hover:bg-white dark:border-slate-700/50 dark:bg-slate-900/30 dark:hover:bg-slate-800"
				>
					<input
						type="radio"
						bind:group={data.tone}
						value="formal"
						class="h-4 w-4 border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800"
					/>
					<span
						class="ml-2.5 text-sm font-medium text-slate-700 group-hover:text-indigo-600 dark:text-slate-300 dark:group-hover:text-indigo-400"
						>Formal</span
					>
				</label>
				<label
					class="group flex cursor-pointer items-center rounded-xl border border-slate-200/50 bg-white/50 px-4 py-2.5 shadow-sm transition-colors hover:bg-white dark:border-slate-700/50 dark:bg-slate-900/30 dark:hover:bg-slate-800"
				>
					<input
						type="radio"
						bind:group={data.tone}
						value="profesional"
						class="h-4 w-4 border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800"
					/>
					<span
						class="ml-2.5 text-sm font-medium text-slate-700 group-hover:text-indigo-600 dark:text-slate-300 dark:group-hover:text-indigo-400"
						>Profesional</span
					>
				</label>
				<label
					class="group flex cursor-pointer items-center rounded-xl border border-slate-200/50 bg-white/50 px-4 py-2.5 shadow-sm transition-colors hover:bg-white dark:border-slate-700/50 dark:bg-slate-900/30 dark:hover:bg-slate-800"
				>
					<input
						type="radio"
						bind:group={data.tone}
						value="santai"
						class="h-4 w-4 border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-800"
					/>
					<span
						class="ml-2.5 text-sm font-medium text-slate-700 group-hover:text-indigo-600 dark:text-slate-300 dark:group-hover:text-indigo-400"
						>Santai</span
					>
				</label>
			</div>
		</div>
	</div>
</div>
