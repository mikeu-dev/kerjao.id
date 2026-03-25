<script lang="ts">
	import type { NDAData } from '$lib/utils/nda';
	import { slide } from 'svelte/transition';

	let { data = $bindable() }: { data: NDAData } = $props();

	let activeSection = $state('pihak1');

	const sections = [
		{ id: 'pihak1', label: 'Pemberi', icon: '📤' },
		{ id: 'pihak2', label: 'Penerima', icon: '📥' },
		{ id: 'tujuan', label: 'Tujuan & Waktu', icon: '⚖️' }
	];
</script>

<div class="flex flex-col gap-8">
	<!-- Tab Navigation -->
	<div class="grid grid-cols-3 gap-2 rounded-2xl bg-slate-100 p-1 dark:bg-slate-800/50">
		{#each sections as section}
			<button
				onclick={() => (activeSection = section.id)}
				class="flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] font-bold transition-all sm:text-xs
                {activeSection === section.id
					? 'bg-white shadow-sm text-indigo-600 dark:bg-slate-700 dark:text-indigo-400'
					: 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}"
			>
				<span>{section.icon}</span>
				<span>{section.label}</span>
			</button>
		{/each}
	</div>

	<!-- Form Content -->
	<div class="space-y-6">
		{#if activeSection === 'pihak1'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<h3 class="text-sm font-bold uppercase tracking-wider text-slate-400">Pemberi Informasi (Disclosing Party)</h3>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div class="space-y-2">
						<label for="p1-perusahaan" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Nama Perusahaan / Instansi</label>
						<input id="p1-perusahaan" type="text" bind:value={data.pihak1.perusahaan} placeholder="PT Teknologi Hebat" class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
					</div>
					<div class="space-y-2">
						<label for="p1-nama" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Nama Penanggung Jawab</label>
						<input id="p1-nama" type="text" bind:value={data.pihak1.nama} placeholder="Nama Lengkap" class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
					</div>
				</div>
				<div class="space-y-2">
					<label for="p1-alamat" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Alamat</label>
					<input id="p1-alamat" type="text" bind:value={data.pihak1.alamat} placeholder="Alamat lengkap instansi" class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
				</div>
			</div>
		{:else if activeSection === 'pihak2'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<h3 class="text-sm font-bold uppercase tracking-wider text-slate-400">Penerima Informasi (Receiving Party)</h3>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div class="space-y-2">
						<label for="p2-perusahaan" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Nama Penerima / Vendor</label>
						<input id="p2-perusahaan" type="text" bind:value={data.pihak2.perusahaan} placeholder="Sesuai Akta / KTP" class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
					</div>
					<div class="space-y-2">
						<label for="p2-nama" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Nama Perwakilan</label>
						<input id="p2-nama" type="text" bind:value={data.pihak2.nama} placeholder="Nama Lengkap" class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
					</div>
				</div>
				<div class="space-y-2">
					<label for="p2-alamat" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Alamat Penerima</label>
					<input id="p2-alamat" type="text" bind:value={data.pihak2.alamat} placeholder="Alamat lengkap penerima" class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
				</div>
			</div>
		{:else if activeSection === 'tujuan'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<h3 class="text-sm font-bold uppercase tracking-wider text-slate-400">Tujuan & Masa Berlaku</h3>
				<div class="space-y-2">
					<label for="tujuan" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Tujuan Kerahasiaan</label>
					<textarea id="tujuan" bind:value={data.tujuan} rows="3" placeholder="Misal: Penjajakan kerjasama strategis pengembangan produk AI." class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"></textarea>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-2">
						<label for="tanggal" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Tanggal TTD</label>
						<input id="tanggal" type="date" bind:value={data.tanggal} class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
					</div>
					<div class="space-y-2">
						<label for="jangka" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Masa Berlaku (Tahun)</label>
						<input id="jangka" type="text" bind:value={data.jangkaWaktu} placeholder="2 Tahun" class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
					</div>
				</div>
				<div class="space-y-2">
					<label for="lokasi" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Lokasi Penandatanganan</label>
					<input id="lokasi" type="text" bind:value={data.lokasi} placeholder="Jakarta" class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
				</div>
			</div>
		{/if}
	</div>
</div>
