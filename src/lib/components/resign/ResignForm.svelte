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
	<div class="space-y-4">
		<!-- Nama -->
		<div>
			<label for="nama" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
				>Nama Lengkap</label
			>
			<input
				type="text"
				id="nama"
				bind:value={data.nama}
				placeholder="contoh: Budi Santoso"
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
			/>
		</div>

		<!-- Posisi -->
		<div>
			<label for="posisi" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
				>Posisi / Jabatan</label
			>
			<input
				type="text"
				id="posisi"
				bind:value={data.posisi}
				placeholder="contoh: Software Engineer"
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
			/>
		</div>

		<!-- Perusahaan -->
		<div>
			<label for="perusahaan" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
				>Nama Perusahaan</label
			>
			<input
				type="text"
				id="perusahaan"
				bind:value={data.perusahaan}
				placeholder="contoh: PT Maju Jaya"
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
			/>
		</div>

		<!-- Tanggal -->
		<div>
			<label for="tanggal" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
				>Tanggal Pengunduran Diri</label
			>
			<input
				type="date"
				id="tanggal"
				bind:value={data.tanggal}
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
			/>
		</div>

		<!-- Alasan -->
		<div>
			<label for="alasan" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
				>Alasan Resign</label
			>
			<select
				id="alasan"
				bind:value={data.alasan}
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
			>
				{#each alasanOptions as opt (opt)}
					<option value={opt}>{opt}</option>
				{/each}
			</select>
		</div>

		<!-- Alasan Custom -->
		{#if data.alasan === 'Lainnya'}
			<div class="animate-in fade-in slide-in-from-top-1 duration-200">
				<label for="alasanCustom" class="block text-sm font-medium text-gray-700 dark:text-gray-300"
					>Tuliskan Alasan Anda</label
				>
				<input
					type="text"
					id="alasanCustom"
					bind:value={data.alasanCustom}
					placeholder="contoh: pindah domisili"
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
				/>
			</div>
		{/if}

		<!-- Tone -->
		<div>
			<span class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
				>Gaya Bahasa (Tone)</span
			>
			<div class="flex space-x-4">
				<label class="flex items-center">
					<input
						type="radio"
						bind:group={data.tone}
						value="formal"
						class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800"
					/>
					<span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Formal</span>
				</label>
				<label class="flex items-center">
					<input
						type="radio"
						bind:group={data.tone}
						value="profesional"
						class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800"
					/>
					<span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Profesional</span>
				</label>
				<label class="flex items-center">
					<input
						type="radio"
						bind:group={data.tone}
						value="santai"
						class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800"
					/>
					<span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Santai</span>
				</label>
			</div>
		</div>
	</div>
</div>
