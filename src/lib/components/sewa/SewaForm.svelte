<script lang="ts">
	import { calculateEndDate, type SewaData } from '$lib/utils/sewa';
	import { slide } from 'svelte/transition';

	let { data = $bindable() }: { data: SewaData } = $props();

	// Auto calculate end date when start date or duration changes
	$effect(() => {
		if (data.kontrak.tanggalMulai && data.kontrak.durasi > 0) {
			data.kontrak.tanggalSelesai = calculateEndDate(
				data.kontrak.tanggalMulai,
				data.kontrak.durasi,
				data.kontrak.satuanDurasi
			);
		}
	});

	let activeSection = $state('pihak1');

	const sections = [
		{ id: 'pihak1', label: 'Pemilik (Pihak I)', icon: '👤' },
		{ id: 'pihak2', label: 'Penyewa (Pihak II)', icon: '🤝' },
		{ id: 'properti', label: 'Objek Sewa', icon: '🏠' },
		{ id: 'kontrak', label: 'Nilai & Durasi', icon: '💰' }
	];
</script>

<div class="flex flex-col gap-8">
	<!-- Section Navigation -->
	<div class="grid grid-cols-4 gap-2 rounded-2xl bg-slate-100 p-1 dark:bg-slate-800/50">
		{#each sections as section}
			<button
				onclick={() => (activeSection = section.id)}
				class="flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] font-bold transition-all sm:text-xs
                {activeSection === section.id
					? 'bg-white text-indigo-600 shadow-sm dark:bg-slate-700 dark:text-indigo-400'
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
		{#if activeSection === 'pihak1'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<h3 class="text-sm font-bold tracking-wider text-slate-400 uppercase">
					Data Pemilik Properti
				</h3>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div class="space-y-2">
						<label for="p1-nama" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Nama Lengkap</label
						>
						<input
							id="p1-nama"
							type="text"
							bind:value={data.pihak1.nama}
							placeholder="Contoh: Budi Santoso"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					<div class="space-y-2">
						<label for="p1-nik" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Nomor NIK (KTP)</label
						>
						<input
							id="p1-nik"
							type="text"
							bind:value={data.pihak1.nik}
							placeholder="16 digit angka KTP"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>
				<div class="space-y-2">
					<label for="p1-alamat" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Alamat Domisili</label
					>
					<input
						id="p1-alamat"
						type="text"
						bind:value={data.pihak1.alamat}
						placeholder="Sesuai KTP"
						class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					/>
				</div>
			</div>
		{:else if activeSection === 'pihak2'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<h3 class="text-sm font-bold tracking-wider text-slate-400 uppercase">Data Penyewa</h3>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div class="space-y-2">
						<label for="p2-nama" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Nama Calon Penyewa</label
						>
						<input
							id="p2-nama"
							type="text"
							bind:value={data.pihak2.nama}
							placeholder="Nama Penyewa"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					<div class="space-y-2">
						<label for="p2-nik" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Nomor NIK (KTP)</label
						>
						<input
							id="p2-nik"
							type="text"
							bind:value={data.pihak2.nik}
							placeholder="NIK Penyewa"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>
				<div class="space-y-2">
					<label for="p2-alamat" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Alamat Asal Penyewa</label
					>
					<input
						id="p2-alamat"
						type="text"
						bind:value={data.pihak2.alamat}
						placeholder="Alamat sesuai KTP penyewa"
						class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					/>
				</div>
			</div>
		{:else if activeSection === 'properti'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<h3 class="text-sm font-bold tracking-wider text-slate-400 uppercase">Objek Properti</h3>
				<div class="space-y-2">
					<label for="prop-jenis" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Tipe Properti</label
					>
					<select
						id="prop-jenis"
						bind:value={data.properti.jenis}
						class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					>
						<option value="Rumah">Rumah Tinggal</option>
						<option value="Ruko">Ruko / Kios</option>
						<option value="Apartemen">Unit Apartemen</option>
						<option value="Kost">Kamar Kost</option>
					</select>
				</div>
				<div class="space-y-2">
					<label for="prop-alamat" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Alamat Lengkap Properti yang Disewakan</label
					>
					<textarea
						id="prop-alamat"
						bind:value={data.properti.alamat}
						placeholder="Contoh: Perumahan Indah Blok A No 12, Jakarta"
						class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						rows="3"
					></textarea>
				</div>
				<div class="space-y-2">
					<label
						for="prop-fasilitas"
						class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Fasilitas Tambahan (Opsional)</label
					>
					<input
						id="prop-fasilitas"
						type="text"
						bind:value={data.properti.fasilitas}
						placeholder="Misal: AC 2 Unit, Gordyn, Springbed"
						class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					/>
				</div>
			</div>
		{:else if activeSection === 'kontrak'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<h3 class="text-sm font-bold tracking-wider text-slate-400 uppercase">
					Detail Sewa & Kontrak
				</h3>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div class="space-y-2">
						<label for="kon-nilai" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Harga Sewa (IDR)</label
						>
						<div class="relative">
							<span class="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400">Rp</span>
							<input
								id="kon-nilai"
								type="number"
								bind:value={data.kontrak.nilaiSewa}
								placeholder="0"
								class="w-full rounded-xl border-slate-200 bg-white py-2.5 pr-4 pl-10 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
							/>
						</div>
					</div>
					<div class="space-y-2">
						<label
							for="kon-jaminan"
							class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Pagu Deposit (Jaminan)</label
						>
						<div class="relative">
							<span class="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400">Rp</span>
							<input
								id="kon-jaminan"
								type="number"
								bind:value={data.kontrak.uangJaminan}
								placeholder="0"
								class="w-full rounded-xl border-slate-200 bg-white py-2.5 pr-4 pl-10 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
							/>
						</div>
					</div>
				</div>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div class="space-y-2">
						<label for="kon-durasi" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Lama Sewa</label
						>
						<div class="flex gap-2">
							<input
								id="kon-durasi"
								type="number"
								bind:value={data.kontrak.durasi}
								class="w-20 rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
							/>
							<select
								bind:value={data.kontrak.satuanDurasi}
								class="flex-1 rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
							>
								<option value="Tahun">Tahun</option>
								<option value="Bulan">Bulan</option>
							</select>
						</div>
					</div>
					<div class="space-y-2">
						<label for="kon-mulai" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Tanggal Mulai</label
						>
						<input
							id="kon-mulai"
							type="date"
							bind:value={data.kontrak.tanggalMulai}
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>
				<div class="rounded-xl bg-indigo-50 p-3 dark:bg-indigo-900/20">
					<p class="text-[10px] text-indigo-700 lg:text-xs dark:text-indigo-300">
						Kontrak akan otomatis berakhir pada: <strong
							>{data.kontrak.tanggalSelesai || '-'}</strong
						>
					</p>
				</div>
			</div>
		{/if}
	</div>
</div>
