<script lang="ts">
	import type { SlipData } from '$lib/utils/slip';

	let { data = $bindable() }: { data: SlipData } = $props();

	function generateId() {
		return Math.random().toString(36).substr(2, 9);
	}

	function addIncome() {
		data.incomes = [...data.incomes, { id: generateId(), name: 'Pendapatan Lain', amount: 0 }];
	}

	function removeIncome(id: string) {
		data.incomes = data.incomes.filter((item) => item.id !== id);
	}

	function addDeduction() {
		data.deductions = [...data.deductions, { id: generateId(), name: 'Potongan Lain', amount: 0 }];
	}

	function removeDeduction(id: string) {
		data.deductions = data.deductions.filter((item) => item.id !== id);
	}
</script>

<div class="space-y-8">
	<!-- Identitas Perusahaan -->
	<div class="space-y-4 border-l-4 border-indigo-500 pl-4">
		<div>
			<h3 class="font-bold text-slate-800 dark:text-white">Identitas Perusahaan (Kop Surat)</h3>
			<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
				Informasi perusahaan penerbit slip.
			</p>
		</div>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="companyName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Perusahaan / Bisnis</label
				>
				<input
					type="text"
					id="companyName"
					bind:value={data.companyName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="PT Gemilang Teknologi Semesta"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="companyAddress"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Alamat Perusahaan</label
				>
				<textarea
					id="companyAddress"
					bind:value={data.companyAddress}
					rows="2"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Gedung Cyber 2 Lantai 15, Jl. HR Rasuna Said, Jakarta Selatan"
				></textarea>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Detail Slip Gaji -->
	<div class="space-y-4 border-l-4 border-emerald-500 pl-4">
		<div>
			<h3 class="font-bold text-slate-800 dark:text-white">Detail Slip & Periode</h3>
			<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">Periode pembayaran gaji.</p>
		</div>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
			<div>
				<label
					for="periodMonth"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Bulan Gaji</label
				>
				<input
					type="text"
					id="periodMonth"
					bind:value={data.periodMonth}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="November"
				/>
			</div>
			<div>
				<label
					for="periodYear"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">Tahun</label
				>
				<input
					type="text"
					id="periodYear"
					bind:value={data.periodYear}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="2024"
				/>
			</div>
			<div>
				<label
					for="printDate"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Tanggal Cetak Slip</label
				>
				<input
					type="date"
					id="printDate"
					bind:value={data.printDate}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				/>
			</div>
		</div>
	</div>

	<!-- Identitas Karyawan -->
	<div class="space-y-4 border-l-4 border-rose-500 pl-4">
		<div>
			<h3 class="font-bold text-slate-800 dark:text-white">Data Karyawan</h3>
			<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
				Informasi karyawan penerima gaji.
			</p>
		</div>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="employeeName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Penerima</label
				>
				<input
					type="text"
					id="employeeName"
					bind:value={data.employeeName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Ahmad Firdaus"
				/>
			</div>
			<div>
				<label
					for="employeeID"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>ID Pegawai / NIK</label
				>
				<input
					type="text"
					id="employeeID"
					bind:value={data.employeeID}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="EMP-2024-05"
				/>
			</div>
			<div>
				<label
					for="employeeRole"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Jabatan / Departemen</label
				>
				<input
					type="text"
					id="employeeRole"
					bind:value={data.employeeRole}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Staff Gudang / Operasional"
				/>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- PENDAPATAN (INCOMES) -->
	<div class="space-y-4">
		<div
			class="flex items-center justify-between border-b border-slate-200 pb-2 dark:border-slate-700/60"
		>
			<h3 class="font-bold text-green-700 dark:text-green-400">Rincian Pendapatan (+)</h3>
			<button
				type="button"
				onclick={addIncome}
				class="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
				>+ Tambah Pendapatan</button
			>
		</div>

		{#each data.incomes as income (income.id)}
			<div class="flex items-center gap-3">
				<input
					type="text"
					bind:value={income.name}
					class="w-1/2 rounded-xl border-slate-200 bg-white/50 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Gaji Pokok / Tunjangan"
				/>
				<div class="relative w-1/2">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<span class="text-slate-500 sm:text-sm dark:text-slate-400">Rp</span>
					</div>
					<input
						type="number"
						bind:value={income.amount}
						class="block w-full rounded-xl border-slate-200 bg-white/50 py-2 pr-4 pl-9 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					/>
				</div>
				<button
					type="button"
					onclick={() => removeIncome(income.id)}
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-rose-500 hover:bg-rose-50 hover:text-rose-700 dark:hover:bg-rose-500/10 dark:hover:text-rose-400"
					title="Hapus baris"
				>
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
						/>
					</svg>
				</button>
			</div>
		{/each}
	</div>

	<!-- POTONGAN (DEDUCTIONS) -->
	<div class="space-y-4">
		<div
			class="flex items-center justify-between border-b border-slate-200 pb-2 dark:border-slate-700/60"
		>
			<h3 class="font-bold text-rose-600 dark:text-rose-400">Rincian Potongan (-)</h3>
			<button
				type="button"
				onclick={addDeduction}
				class="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
				>+ Tambah Potongan</button
			>
		</div>

		{#each data.deductions as deduction (deduction.id)}
			<div class="flex items-center gap-3">
				<input
					type="text"
					bind:value={deduction.name}
					class="w-1/2 rounded-xl border-slate-200 bg-white/50 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="PPh 21 / BPJS / Kasbon"
				/>
				<div class="relative w-1/2">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<span class="text-slate-500 sm:text-sm dark:text-slate-400">Rp</span>
					</div>
					<input
						type="number"
						bind:value={deduction.amount}
						class="block w-full rounded-xl border-slate-200 bg-white/50 py-2 pr-4 pl-9 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					/>
				</div>
				<button
					type="button"
					onclick={() => removeDeduction(deduction.id)}
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-rose-500 hover:bg-rose-50 hover:text-rose-700 dark:hover:bg-rose-500/10 dark:hover:text-rose-400"
					title="Hapus baris"
				>
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
						/>
					</svg>
				</button>
			</div>
		{/each}
	</div>
</div>
