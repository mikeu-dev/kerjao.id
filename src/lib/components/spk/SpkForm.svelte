<script lang="ts">
	import type { SPKData } from '$lib/utils/spk';
	import { slide } from 'svelte/transition';

	let { data = $bindable() }: { data: SPKData } = $props();

	let activeSection = $state('pemberi');
	let newScope = $state('');

	function addScope() {
		if (newScope.trim()) {
			data.proyek.ruangLingkup = [...data.proyek.ruangLingkup, newScope.trim()];
			newScope = '';
		}
	}

	function removeScope(index: number) {
		data.proyek.ruangLingkup = data.proyek.ruangLingkup.filter((_, i) => i !== index);
	}

	const sections = [
		{ id: 'pemberi', label: 'Pemberi Kerja', icon: '🏢' },
		{ id: 'pelaksana', label: 'Pelaksana', icon: '👷' },
		{ id: 'proyek', label: 'Detail Proyek', icon: '🏗️' },
		{ id: 'biaya', label: 'Waktu & Biaya', icon: '📅' }
	];
</script>

<div class="flex flex-col gap-8">
	<!-- Tab Navigation -->
	<div class="grid grid-cols-4 gap-2 rounded-2xl bg-slate-100 p-1 dark:bg-slate-800/50">
		{#each sections as section}
			<button
				onclick={() => (activeSection = section.id)}
				class="flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] font-bold transition-all sm:text-xs
                {activeSection === section.id
					? 'bg-white shadow-sm text-blue-600 dark:bg-slate-700 dark:text-blue-400'
					: 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}"
			>
				<span>{section.icon}</span>
				<span class="hidden sm:inline">{section.label}</span>
				<span class="sm:hidden">{section.label.split(' ')[0]}</span>
			</button>
		{/each}
	</div>

	<!-- Form Content -->
	<div class="space-y-6">
		{#if activeSection === 'pemberi'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<h3 class="text-sm font-bold uppercase tracking-wider text-slate-400">Data Pemberi Kerja</h3>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div class="space-y-2">
						<label for="p1-perusahaan" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Nama Instansi / Perusahaan</label>
						<input id="p1-perusahaan" type="text" bind:value={data.pemberiKerja.perusahaan} placeholder="PT Maju Bersama" class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
					</div>
					<div class="space-y-2">
						<label for="p1-nama" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Penanggung Jawab / Jabatan</label>
						<input id="p1-nama" type="text" bind:value={data.pemberiKerja.nama} placeholder="Budi Santoso (Direktur)" class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
					</div>
				</div>
				<div class="space-y-2">
					<label for="p1-alamat" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Alamat Lengkap</label>
					<input id="p1-alamat" type="text" bind:value={data.pemberiKerja.alamat} placeholder="Jl. Raya Bisnis No. 12" class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
				</div>
			</div>
		{:else if activeSection === 'pelaksana'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<h3 class="text-sm font-bold uppercase tracking-wider text-slate-400">Data Pelaksana (Vendor/Freelancer)</h3>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div class="space-y-2">
						<label for="p2-perusahaan" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Nama Pelaksana / CV</label>
						<input id="p2-perusahaan" type="text" bind:value={data.pelaksana.perusahaan} placeholder="Vendor Solusi Kreatif" class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
					</div>
					<div class="space-y-2">
						<label for="p2-nama" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Nama Kontak Person</label>
						<input id="p2-nama" type="text" bind:value={data.pelaksana.nama} placeholder="Andi Wijaya" class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
					</div>
				</div>
				<div class="space-y-2">
					<label for="p2-alamat" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Alamat Vendor</label>
					<input id="p2-alamat" type="text" bind:value={data.pelaksana.alamat} placeholder="Alamat lengkap vendor" class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
				</div>
			</div>
		{:else if activeSection === 'proyek'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<h3 class="text-sm font-bold uppercase tracking-wider text-slate-400">Detail Proyek</h3>
				<div class="space-y-2">
					<label for="pro-nama" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Nama Proyek / Pekerjaan</label>
					<input id="pro-nama" type="text" bind:value={data.proyek.nama} placeholder="Contoh: Pengembangan Website Company Profile" class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
				</div>
				<div class="space-y-2">
					<label for="pro-lingkup" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Ruang Lingkup (Scope) Pekerjaan</label>
					<div class="flex gap-2">
						<input 
							id="pro-lingkup" 
							type="text" 
							bind:value={newScope} 
							placeholder="Tambah poin pekerjaan..." 
							onkeydown={(e) => e.key === 'Enter' && addScope()}
							class="flex-1 rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" 
						/>
						<button onclick={addScope} class="rounded-xl bg-blue-600 px-4 text-white hover:bg-blue-700">Tambah</button>
					</div>
					<div class="mt-3 space-y-2">
						{#each data.proyek.ruangLingkup as scope, i}
							<div class="flex items-center justify-between rounded-lg bg-slate-50 p-2 text-sm dark:bg-slate-800">
								<span class="text-slate-700 dark:text-slate-300">• {scope}</span>
								<button onclick={() => removeScope(i)} class="text-red-500 hover:text-red-600" aria-label="Hapus Poin Pekerjaan">
									<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{:else if activeSection === 'biaya'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<h3 class="text-sm font-bold uppercase tracking-wider text-slate-400">Jadwal & Biaya</h3>
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-2">
						<label for="w-mulai" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Tanggal Mulai</label>
						<input id="w-mulai" type="date" bind:value={data.waktu.mulai} class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
					</div>
					<div class="space-y-2">
						<label for="w-selesai" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Target Selesai</label>
						<input id="w-selesai" type="date" bind:value={data.waktu.selesai} class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
					</div>
				</div>
				<div class="space-y-2">
					<label for="b-nominal" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Nilai Kontrak (Nominal IDR)</label>
					<div class="relative">
						<span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">Rp</span>
						<input id="b-nominal" type="number" bind:value={data.biaya.nominal} placeholder="0" class="w-full rounded-xl border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
					</div>
				</div>
				<div class="space-y-2">
					<label for="b-catat" class="text-xs font-semibold text-slate-600 dark:text-slate-300">Catatan Pembayaran (Opsional)</label>
					<input id="b-catat" type="text" bind:value={data.biaya.catatan} placeholder="Misal: Pembayaran bertahap 30-70%" class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
				</div>
			</div>
		{/if}
	</div>
</div>
