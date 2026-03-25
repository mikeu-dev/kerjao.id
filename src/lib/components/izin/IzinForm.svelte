<script lang="ts">
	import type { IzinData } from '$lib/utils/izin';
	import { calculateHariCuti } from '$lib/utils/izin';

	let { data = $bindable() }: { data: IzinData } = $props();
</script>

<div class="space-y-8">
	<!-- Pengaturan Umum Izin -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Tujuan Pengajuan
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="leaveType"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Jenis Izin / Cuti</label
				>
				<select
					id="leaveType"
					bind:value={data.leaveType}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				>
					<option value="Sakit">Sakit (Butuh Istirahat)</option>
					<option value="Cuti Tahunan">Cuti Tahunan (Liburan / Istirahat)</option>
					<option value="Urusan Keluarga">Urusan Keluarga (Mendadak / Mendesak)</option>
					<option value="Melahirkan">Cuti Menikah / Melahirkan</option>
				</select>
			</div>
			<div>
				<label
					for="city"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Tempat Dibuat</label
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
					>Tanggal Pengajuan</label
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

	<!-- Identitas Karyawan -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Identitas Karyawan
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="employeeName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Lengkap Pengaju</label
				>
				<input
					type="text"
					id="employeeName"
					bind:value={data.employeeName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Sandi Saputra"
				/>
			</div>
			<div>
				<label
					for="employeeRole"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Jabatan / Peran</label
				>
				<input
					type="text"
					id="employeeRole"
					bind:value={data.employeeRole}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Software Engineer"
				/>
			</div>
			<div>
				<label
					for="employeeDepartment"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Departemen / Divisi</label
				>
				<input
					type="text"
					id="employeeDepartment"
					bind:value={data.employeeDepartment}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Divisi Teknologi (IT)"
				/>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Detail Durasi & Alasan -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Durasi & Tujuan Absen
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label
					for="startDate"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Mulai Absen Dari:</label
				>
				<input
					type="date"
					id="startDate"
					bind:value={data.startDate}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				/>
			</div>
			<div>
				<label
					for="endDate"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Berakhir Pada:</label
				>
				<input
					type="date"
					id="endDate"
					bind:value={data.endDate}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				/>
			</div>

			{#if calculateHariCuti(data.startDate, data.endDate) > 0}
				<div
					class="rounded-lg border border-green-200 bg-green-50 p-3 text-sm font-medium text-green-800 sm:col-span-2 dark:border-green-800/50 dark:bg-green-900/30 dark:text-green-400"
				>
					💡 Terdeteksi pengajuan absen selama <span class="text-lg font-bold"
						>{calculateHariCuti(data.startDate, data.endDate)}</span
					> hari kalender.
				</div>
			{/if}

			<div class="sm:col-span-2">
				<label
					for="reason"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Alasan Rinci (Opsional tapi disarankan)</label
				>
				<textarea
					id="reason"
					bind:value={data.reason}
					rows="3"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Harus pulang kampung untuk mengantar orang tua berobat intensif di rumah sakit daerah..."
				></textarea>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Ditujukan Kepada -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Penerima Surat (Atasan/HRD)
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="companyName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Perusahaan Tempat Bekerja</label
				>
				<input
					type="text"
					id="companyName"
					bind:value={data.companyName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="PT Gemilang Bangsa Indonesia"
				/>
			</div>
			<div>
				<label
					for="managerRole"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Jabatan Penerima</label
				>
				<input
					type="text"
					id="managerRole"
					bind:value={data.managerRole}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="HR Manager / Supervisor"
				/>
			</div>
			<div>
				<label
					for="managerName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Supervisor / Atasan (Bisa dikosongkan)</label
				>
				<input
					type="text"
					id="managerName"
					bind:value={data.managerName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Bpk. Haris"
				/>
			</div>
		</div>
	</div>
</div>
