<script lang="ts">
	import type { RtRwData } from '$lib/utils/umum';
	import { slide } from 'svelte/transition';

	let { data = $bindable() }: { data: RtRwData } = $props();

	let activeSection = $state('warga');

	const sections = [
		{ id: 'warga', label: 'Data Warga', icon: '👤' },
		{ id: 'pengurus', label: 'Pengurus', icon: '🏠' },
		{ id: 'keperluan', label: 'Keperluan', icon: '📋' }
	];
</script>

<div class="flex flex-col gap-6">
	<!-- Tab Navigation -->
	<div class="grid grid-cols-3 gap-2 rounded-2xl bg-slate-100 p-1 dark:bg-slate-800/50">
		{#each sections as section}
			<button
				onclick={() => (activeSection = section.id)}
				class="flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] font-bold transition-all sm:text-xs
                {activeSection === section.id
					? 'bg-white text-indigo-600 shadow-sm dark:bg-slate-700 dark:text-indigo-400'
					: 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}"
			>
				<span>{section.icon}</span>
				<span>{section.label}</span>
			</button>
		{/each}
	</div>

	<!-- Form -->
	<div class="space-y-4">
		{#if activeSection === 'warga'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<div class="space-y-2">
					<label for="w-nama" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Nama Lengkap</label
					>
					<input
						id="w-nama"
						type="text"
						bind:value={data.nama}
						placeholder="Nama Warga"
						class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					/>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-2">
						<label for="w-nik" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>NIK</label
						>
						<input
							id="w-nik"
							type="text"
							bind:value={data.nik}
							placeholder="KTP"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					<div class="space-y-2">
						<label for="w-agama" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Agama</label
						>
						<input
							id="w-agama"
							type="text"
							bind:value={data.agama}
							placeholder="Islam/Kristen/..."
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>
				<div class="space-y-2">
					<label for="w-alamat" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Alamat Lengkap</label
					>
					<input
						id="w-alamat"
						type="text"
						bind:value={data.alamat}
						placeholder="Jl. Raya No. 12"
						class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					/>
				</div>
			</div>
		{:else if activeSection === 'pengurus'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-2">
						<label for="p-rt" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>No. RT</label
						>
						<input
							id="p-rt"
							type="text"
							bind:value={data.rt}
							placeholder="005"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					<div class="space-y-2">
						<label for="p-rw" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>No. RW</label
						>
						<input
							id="p-rw"
							type="text"
							bind:value={data.rw}
							placeholder="002"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-2">
						<label for="p-nama-rt" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Nama Ketua RT</label
						>
						<input
							id="p-nama-rt"
							type="text"
							bind:value={data.ketuaRt}
							placeholder="Nama Lengkap"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					<div class="space-y-2">
						<label for="p-nama-rw" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Nama Ketua RW</label
						>
						<input
							id="p-nama-rw"
							type="text"
							bind:value={data.ketuaRw}
							placeholder="Nama Lengkap"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>
			</div>
		{:else if activeSection === 'keperluan'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<div class="space-y-2">
					<label for="k-isi" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Keperluan Surat</label
					>
					<input
						id="k-isi"
						type="text"
						bind:value={data.keperluan}
						placeholder="Pengurusan KTP / SKCK / ..."
						class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					/>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-2">
						<label for="k-nomor" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>No. Surat</label
						>
						<input
							id="k-nomor"
							type="text"
							bind:value={data.nomorSurat}
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					<div class="space-y-2">
						<label for="k-tanggal" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Tanggal</label
						>
						<input
							id="k-tanggal"
							type="date"
							bind:value={data.tanggal}
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
