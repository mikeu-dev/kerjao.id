<script lang="ts">
	import type { PeringatanData } from '$lib/utils/peringatan';

	let { data = $bindable() }: { data: PeringatanData } = $props();
</script>

<div class="space-y-8">
	<!-- Pengaturan Surat -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Tingkat / Label Surat
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label
					for="spLevel"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Pilih Tingkat Peringatan</label
				>
				<select
					id="spLevel"
					bind:value={data.spLevel}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				>
					<option value="1">Surat Peringatan Pertama (SP 1)</option>
					<option value="2">Surat Peringatan Kedua (SP 2)</option>
					<option value="3">Surat Peringatan Ketiga (SP 3) / Terakhir</option>
				</select>
			</div>
			<div>
				<label
					for="referenceNumber"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nomor Referensi (Otomatis)</label
				>
				<input
					type="text"
					id="referenceNumber"
					bind:value={data.referenceNumber}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				/>
			</div>
			<div>
				<label
					for="city"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Tempat Ditandatangani</label
				>
				<input
					type="text"
					id="city"
					bind:value={data.city}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Jakarta"
				/>
			</div>
			<div>
				<label
					for="date"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Tanggal Terbit SP</label
				>
				<input
					type="date"
					id="date"
					bind:value={data.date}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				/>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Data Karyawan Bermasalah -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Penerima Surat (Karyawan)
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="employeeName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Penerima SP</label
				>
				<input
					type="text"
					id="employeeName"
					bind:value={data.employeeName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Budi Raharja"
				/>
			</div>
			<div>
				<label
					for="employeeID"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>NIK / ID Karyawan</label
				>
				<input
					type="text"
					id="employeeID"
					bind:value={data.employeeID}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="ID-042819"
				/>
			</div>
			<div>
				<label
					for="employeeDepartment"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Departemen</label
				>
				<input
					type="text"
					id="employeeDepartment"
					bind:value={data.employeeDepartment}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Marketing / Produksi"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="employeeRole"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Jabatan Karyawan</label
				>
				<input
					type="text"
					id="employeeRole"
					bind:value={data.employeeRole}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Staff Sales Lapangan"
				/>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Pelanggaran -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Detail Pelanggaran
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="violationReason"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Pelanggaran Kedisiplinan / Peraturan</label
				>
				<textarea
					id="violationReason"
					bind:value={data.violationReason}
					rows="4"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Sering absen tanpa keterangan selama lebih dari 3 hari berturut-turut pada minggu kedua bulan ini, yang telah melanggar Peraturan Perusahaan Bab IV Pasal 10..."
				></textarea>
				<p class="mt-1 text-xs text-slate-500">
					Uraikan kronologi sesingkat sekaligus sejelas mungkin sesuai dengan bukti empiris.
				</p>
			</div>
			<div class="sm:col-span-2">
				<label
					for="violationDate"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Tanggal Kejadian / Estimasi Waktu (Opsional)</label
				>
				<input
					type="text"
					id="violationDate"
					bind:value={data.violationDate}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Senin, 10 Agustus 2024 - Rabu, 12 Agustus 2024"
				/>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Data Penjatuh Sanksi (HRD/Direksi) -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Penjatuh Sanksi (HRD / Direktur / Manager)
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="companyName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Perusahaan (Kop Surat)</label
				>
				<input
					type="text"
					id="companyName"
					bind:value={data.companyName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="PT Gemilang Abadi Makmur"
				/>
			</div>
			<div>
				<label
					for="hrName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Perwakilan Manajemen</label
				>
				<input
					type="text"
					id="hrName"
					bind:value={data.hrName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Amanda Riyanti"
				/>
			</div>
			<div>
				<label
					for="hrRole"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Jabatan Perwakilan</label
				>
				<input
					type="text"
					id="hrRole"
					bind:value={data.hrRole}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="HR Manager"
				/>
			</div>
		</div>
	</div>
</div>
