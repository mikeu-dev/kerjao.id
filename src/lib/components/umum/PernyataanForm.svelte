<script lang="ts">
	import type { PernyataanData } from '$lib/utils/umum';
	import { slide } from 'svelte/transition';

	let { data = $bindable() }: { data: PernyataanData } = $props();
</script>

<div class="space-y-4">
	<div class="space-y-2">
		<label for="p-judul" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
			>Judul Surat Pernyataan</label
		>
		<input
			id="p-judul"
			type="text"
			bind:value={data.judul}
			placeholder="SURAT PERNYATAAN TIDAK TERIKAT KONTRAK"
			class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
		/>
	</div>

	<div class="grid grid-cols-2 gap-4">
		<div class="space-y-2">
			<label for="p-nama" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
				>Nama Lengkap</label
			>
			<input
				id="p-nama"
				type="text"
				bind:value={data.nama}
				placeholder="Nama Anda"
				class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
			/>
		</div>
		<div class="space-y-2">
			<label for="p-nik" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
				>NIK (KTP)</label
			>
			<input
				id="p-nik"
				type="text"
				bind:value={data.nik}
				placeholder="320..."
				class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
			/>
		</div>
	</div>

	<div class="space-y-2">
		<label for="p-alamat" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
			>Alamat</label
		>
		<input
			id="p-alamat"
			type="text"
			bind:value={data.alamat}
			placeholder="Alamat lengkap"
			class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
		/>
	</div>

	<div class="space-y-2">
		<label for="p-isi" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
			>Isi Pernyataan</label
		>
		<textarea
			id="p-isi"
			rows="6"
			bind:value={data.isi}
			placeholder="Menyatakan bahwa saya saat ini tidak sedang terikat kontrak kerja dengan pihak manapun..."
			class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
		></textarea>
	</div>

	<div class="grid grid-cols-2 gap-4">
		<div class="space-y-2">
			<label for="p-lokasi" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
				>Lokasi</label
			>
			<input
				id="p-lokasi"
				type="text"
				bind:value={data.lokasi}
				placeholder="Jakarta"
				class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
			/>
		</div>
		<div class="space-y-2">
			<label for="p-tanggal" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
				>Tanggal</label
			>
			<input
				id="p-tanggal"
				type="date"
				bind:value={data.tanggal}
				class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
			/>
		</div>
	</div>
</div>
