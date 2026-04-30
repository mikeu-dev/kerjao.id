<script lang="ts">
	import type { KontrakData } from '$lib/utils/kontrak-kerja';
	import SignaturePad from '$lib/components/ui/SignaturePad.svelte';
	import { slide } from 'svelte/transition';

	let { data = $bindable() }: { data: KontrakData & { lang?: 'id' | 'en' } } = $props();

	if (!data.lang) {
		data.lang = 'id';
	}

	let activeSection = $state('perusahaan');

	const sections = [
		{ id: 'perusahaan', label: 'Perusahaan', icon: '🏢' },
		{ id: 'karyawan', label: 'Karyawan', icon: '👤' },
		{ id: 'kontrak', label: 'Detail Kontrak', icon: '📜' },
		{ id: 'payroll', label: 'Gaji & TTD', icon: '✍️' }
	];
</script>

<div class="flex flex-col gap-8">
	<!-- Tab Navigation -->
	<div class="grid grid-cols-4 gap-2 rounded-2xl bg-slate-100 p-1 dark:bg-slate-800/50">
		{#each sections as section (section.id)}
			<button
				onclick={() => (activeSection = section.id)}
				class="flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] font-bold transition-all sm:text-xs
                {activeSection === section.id
					? 'bg-white text-indigo-600 shadow-sm dark:bg-slate-700 dark:text-indigo-400'
					: 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}"
			>
				<span>{section.icon}</span>
				<span class="hidden sm:inline">{section.label}</span>
				<span class="sm:hidden">{section.label.slice(0, 4)}..</span>
			</button>
		{/each}
	</div>

	<!-- Form Content -->
	<div class="space-y-6">
		{#if activeSection === 'perusahaan'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<h3 class="text-xs font-bold tracking-wider text-slate-400 uppercase">
					Identitas Perusahaan (Pihak I)
				</h3>
				<div class="space-y-2">
					<label for="p-nama" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Nama Perusahaan</label
					>
					<input
						id="p-nama"
						type="text"
						bind:value={data.perusahaan.nama}
						placeholder="PT Contoh Sukses"
						class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					/>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-2">
						<label for="p-wakil" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Nama Penanggung Jawab</label
						>
						<input
							id="p-wakil"
							type="text"
							bind:value={data.perusahaan.wakil}
							placeholder="Budi Santoso"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					<div class="space-y-2">
						<label for="p-jabatan" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Jabatan Wakil</label
						>
						<input
							id="p-jabatan"
							type="text"
							bind:value={data.perusahaan.jabatanWakil}
							placeholder="Direktur HR"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>
				<div class="space-y-2">
					<label for="p-alamat" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Alamat Lengkap Perusahaan</label
					>
					<input
						id="p-alamat"
						type="text"
						bind:value={data.perusahaan.alamat}
						placeholder="Jl. Sudirman No. 1, Jakarta"
						class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					/>
				</div>
			</div>
		{:else if activeSection === 'karyawan'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<h3 class="text-xs font-bold tracking-wider text-slate-400 uppercase">
					Identitas Karyawan (Pihak II)
				</h3>
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-2">
						<label for="k-nama" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Nama Lengkap</label
						>
						<input
							id="k-nama"
							type="text"
							bind:value={data.karyawan.nama}
							placeholder="Sesuai KTP"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					<div class="space-y-2">
						<label for="k-nik" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>NIK (KTP)</label
						>
						<input
							id="k-nik"
							type="text"
							bind:value={data.karyawan.nik}
							placeholder="320..."
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-2">
						<label for="k-tempat" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Tempat Lahir</label
						>
						<input
							id="k-tempat"
							type="text"
							bind:value={data.karyawan.tempatLahir}
							placeholder="Jakarta"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					<div class="space-y-2">
						<label for="k-tanggal" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Tanggal Lahir</label
						>
						<input
							id="k-tanggal"
							type="date"
							bind:value={data.karyawan.tanggalLahir}
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>
				<div class="space-y-2">
					<label for="k-alamat" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Alamat Domisili</label
					>
					<input
						id="k-alamat"
						type="text"
						bind:value={data.karyawan.alamat}
						placeholder="Alamat lengkap karyawan"
						class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					/>
				</div>
			</div>
		{:else if activeSection === 'kontrak'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<h3 class="text-xs font-bold tracking-wider text-slate-400 uppercase">
					Detail Jabatan & Waktu Kerja
				</h3>
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-2">
						<label for="k-tipe" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Status Karyawan</label
						>
						<select
							id="k-tipe"
							bind:value={data.tipe}
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						>
							<option value="PKWT">PKWT (Kontrak)</option>
							<option value="PKWTT">PKWTT (Tetap)</option>
						</select>
					</div>
					<div class="space-y-2">
						<label for="k-jabatan" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Posisi / Jabatan</label
						>
						<input
							id="k-jabatan"
							type="text"
							bind:value={data.karyawan.jabatan}
							placeholder="Software Engineer"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-2">
						<label for="k-mulai" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Tanggal Mulai Kerja</label
						>
						<input
							id="k-mulai"
							type="date"
							bind:value={data.tanggalMulai}
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					{#if data.tipe === 'PKWT'}
						<div class="space-y-2">
							<label
								for="k-selesai"
								class="text-xs font-semibold text-slate-600 dark:text-slate-300"
								>Tanggal Berakhir</label
							>
							<input
								id="k-selesai"
								type="date"
								bind:value={data.tanggalSelesai}
								class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
							/>
						</div>
					{/if}
				</div>
				<div class="space-y-2">
					<label for="k-lokasi" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Lokasi Penempatan</label
					>
					<input
						id="k-lokasi"
						type="text"
						bind:value={data.lokasiKerja}
						placeholder="Kantor Pusat Jakarta"
						class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					/>
				</div>
			</div>
		{:else if activeSection === 'payroll'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<h3 class="text-xs font-bold tracking-wider text-slate-400 uppercase">
					Upah, Bahasa & TTD
				</h3>

				<div class="space-y-2">
					<label for="k-lang" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Bahasa Dokumen</label
					>
					<div class="flex gap-2">
						<button
							type="button"
							onclick={() => (data.lang = 'id')}
							class="flex-1 rounded-xl py-2 text-xs font-bold transition-all {data.lang === 'id'
								? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
								: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}"
						>
							🇮🇩 Indonesia
						</button>
						<button
							type="button"
							onclick={() => (data.lang = 'en')}
							class="flex-1 rounded-xl py-2 text-xs font-bold transition-all {data.lang === 'en'
								? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
								: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}"
						>
							🇺🇸 English
						</button>
					</div>
				</div>

				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-2">
						<label for="k-gaji" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Gaji Pokok (Rp)</label
						>
						<input
							id="k-gaji"
							type="number"
							bind:value={data.gajiPokok}
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					<div class="space-y-2">
						<label
							for="k-tunjangan"
							class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Tunjangan Tetap (Rp)</label
						>
						<input
							id="k-tunjangan"
							type="number"
							bind:value={data.tunjanganTetap}
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>

				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-2">
						<label for="k-surat" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Nomor Kontrak</label
						>
						<input
							id="k-surat"
							type="text"
							bind:value={data.nomorSurat}
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					<div class="space-y-2">
						<label for="k-ttd-date" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Tanggal Tanda Tangan</label
						>
						<input
							id="k-ttd-date"
							type="date"
							bind:value={data.tanggalTtd}
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>

				<div
					class="grid grid-cols-1 gap-4 border-t border-slate-50 pt-4 sm:grid-cols-2 dark:border-slate-800"
				>
					<SignaturePad bind:value={data.ttdPengusaha} label="TTD Pengusaha" />
					<SignaturePad bind:value={data.ttdKaryawan} label="TTD Karyawan" />
				</div>
			</div>
		{/if}
	</div>
</div>
