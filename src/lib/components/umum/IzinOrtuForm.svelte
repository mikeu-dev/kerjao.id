<script lang="ts">
	import type { IzinOrtuData } from '$lib/utils/umum';
	import { slide } from 'svelte/transition';

	let { data = $bindable() }: { data: IzinOrtuData } = $props();

	let activeSection = $state('ortu');

	const sections = [
		{ id: 'ortu', label: 'Orang Tua', icon: '👨‍👩-👧' },
		{ id: 'anak', label: 'Data Anak', icon: '👦' },
		{ id: 'tujuan', label: 'Tujuan Izin', icon: '📍' }
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
		{#if activeSection === 'ortu'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<div class="space-y-2">
					<label for="o-nama" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Nama Orang Tua / Wali</label
					>
					<input
						id="o-nama"
						type="text"
						bind:value={data.namaOrtu}
						placeholder="Nama Lengkap"
						class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					/>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-2">
						<label for="o-nik" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>NIK</label
						>
						<input
							id="o-nik"
							type="text"
							bind:value={data.nikOrtu}
							placeholder="NIK Orang Tua"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					<div class="space-y-2">
						<label for="o-kerja" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Pekerjaan</label
						>
						<input
							id="o-kerja"
							type="text"
							bind:value={data.pekerjaanOrtu}
							placeholder="Wiraswasta"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>
				<div class="space-y-2">
					<label for="o-alamat" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Alamat Lengkap</label
					>
					<input
						id="o-alamat"
						type="text"
						bind:value={data.alamatOrtu}
						placeholder="Jl. Kediaman No. 1"
						class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					/>
				</div>
			</div>
		{:else if activeSection === 'anak'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<div class="space-y-2">
					<label for="a-nama" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Nama Lengkap Anak</label
					>
					<input
						id="a-nama"
						type="text"
						bind:value={data.namaAnak}
						placeholder="Sesuai Akta Kelahiran"
						class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					/>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-2">
						<label for="a-nik" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>NIK (Jika Ada)</label
						>
						<input
							id="a-nik"
							type="text"
							bind:value={data.nikAnak}
							placeholder="NIK Anak"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					<div class="space-y-2">
						<label for="a-tanggal" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Tanggal Lahir</label
						>
						<input
							id="a-tanggal"
							type="date"
							bind:value={data.tanggalLahirAnak}
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>
			</div>
		{:else if activeSection === 'tujuan'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<div class="space-y-2">
					<label for="t-tujuan" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Tujuan Izin</label
					>
					<select
						id="t-tujuan"
						bind:value={data.tujuanIzin}
						class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					>
						<option value="Memberikan izin untuk melamar pekerjaan">Izin Melamar Kerja</option>
						<option value="Memberikan izin untuk mengikuti kegiatan sekolah/kampus"
							>Izin Kegiatan Sekolah</option
						>
						<option value="Memberikan izin untuk melakukan perjalanan luar negeri"
							>Izin Perjalanan Luar Negeri</option
						>
						<option value="Bekerja sebagai Karyawan/Pegawai">Izin Menjadi Karyawan</option>
					</select>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-2">
						<label for="t-lokasi" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Lokasi Tanda Tangan</label
						>
						<input
							id="t-lokasi"
							type="text"
							bind:value={data.lokasi}
							placeholder="Jakarta"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					<div class="space-y-2">
						<label for="t-tanggal" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Tanggal</label
						>
						<input
							id="t-tanggal"
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
