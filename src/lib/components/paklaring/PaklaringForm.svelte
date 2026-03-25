<script lang="ts">
	import type { PaklaringData } from '$lib/utils/paklaring';

	let { data = $bindable() }: { data: PaklaringData } = $props();
</script>

<div class="space-y-8">
	<!-- Kop Surat & Nomor -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Kop Surat & Identitas
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="companyName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Perusahaan</label
				>
				<input
					type="text"
					id="companyName"
					bind:value={data.companyName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="PT Teknologi Nusantara Raya"
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
					placeholder="Gedung Cyber, Lt 5, Jakarta Selatan"
				></textarea>
			</div>
			<div>
				<label
					for="suratNumber"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nomor Surat</label
				>
				<input
					type="text"
					id="suratNumber"
					bind:value={data.suratNumber}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				/>
			</div>
			<div>
				<label
					for="issueDate"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Tanggal Terbit</label
				>
				<input
					type="date"
					id="issueDate"
					bind:value={data.issueDate}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				/>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Data Karyawan -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Informasi Karyawan
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label
					for="employeeName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Lengkap Karyawan</label
				>
				<input
					type="text"
					id="employeeName"
					bind:value={data.employeeName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Ahmad Mulyanto"
				/>
			</div>
			<div>
				<label
					for="nik"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>NIK / ID Karyawan</label
				>
				<input
					type="text"
					id="nik"
					bind:value={data.nik}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="EMP-2021-098"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="lastPosition"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Jabatan Terakhir</label
				>
				<input
					type="text"
					id="lastPosition"
					bind:value={data.lastPosition}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Senior Frontend Engineer"
				/>
			</div>
			<div>
				<label
					for="startDate"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Mulai Bekerja</label
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
					>Selesai Bekerja</label
				>
				<input
					type="date"
					id="endDate"
					bind:value={data.endDate}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				/>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Data Penandatangan -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Pihak Penandatangan (HRD / Direksi)
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label
					for="signeeName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Penandatangan</label
				>
				<input
					type="text"
					id="signeeName"
					bind:value={data.signeeName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Budi Santoso"
				/>
			</div>
			<div>
				<label
					for="signeePosition"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Jabatan Penandatangan</label
				>
				<input
					type="text"
					id="signeePosition"
					bind:value={data.signeePosition}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Direktur HRD"
				/>
			</div>
		</div>
	</div>
</div>
