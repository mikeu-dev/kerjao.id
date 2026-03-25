<script lang="ts">
	import type { KuasaData } from '$lib/utils/kuasa';

	let { data = $bindable() }: { data: KuasaData } = $props();
</script>

<div class="space-y-8">
	<!-- PIHAK PERTAMA -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			PIHAK I (Pemberi Kuasa)
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="giverName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Lengkap (Sesuai KTP)</label
				>
				<input
					type="text"
					id="giverName"
					bind:value={data.giverName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Sutejo Haryanto"
				/>
			</div>
			<div>
				<label
					for="giverID"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nomor Induk Kependudukan (NIK)</label
				>
				<input
					type="text"
					id="giverID"
					bind:value={data.giverID}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="327xxxxxxxxxxxxx"
				/>
			</div>
			<div>
				<label
					for="giverJob"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Pekerjaan</label
				>
				<input
					type="text"
					id="giverJob"
					bind:value={data.giverJob}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Wiraswasta / Karyawan Swasta"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="giverAddress"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Alamat Lengkap (Sesuai KTP)</label
				>
				<textarea
					id="giverAddress"
					bind:value={data.giverAddress}
					rows="2"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Jl. Sudirman No 12, RT 01 / RW 02, Jakarta Selatan"
				></textarea>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- PIHAK KEDUA -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			PIHAK II (Penerima Kuasa)
		</h3>
		<p class="-mt-2 text-xs text-slate-500">Orang yang akan diberikan wewenang untuk bertindak.</p>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="receiverName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Lengkap (Sesuai KTP)</label
				>
				<input
					type="text"
					id="receiverName"
					bind:value={data.receiverName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Andi Hermawan"
				/>
			</div>
			<div>
				<label
					for="receiverID"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nomor Induk Kependudukan (NIK)</label
				>
				<input
					type="text"
					id="receiverID"
					bind:value={data.receiverID}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="327xxxxxxxxxxxxx"
				/>
			</div>
			<div>
				<label
					for="receiverJob"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Pekerjaan</label
				>
				<input
					type="text"
					id="receiverJob"
					bind:value={data.receiverJob}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Mahasiswa / Karyawan"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="receiverAddress"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Alamat Lengkap (Sesuai KTP)</label
				>
				<textarea
					id="receiverAddress"
					bind:value={data.receiverAddress}
					rows="2"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Jl. Melati No 10, RT 02 / RW 05, Bandung"
				></textarea>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Wewenang & Deklarasi -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Tujuan Pendelegasian
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="powerDescription"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Bertindak untuk dan atas nama Pihak Pertama guna:</label
				>
				<textarea
					id="powerDescription"
					bind:value={data.powerDescription}
					rows="4"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Mengurus pengambilan dokumen Buku Kepemilikan Kendaraan Bermotor (BPKB) atas nama Sutejo Haryanto dengan nomor polisi B 1234 CD pada kantor Samsat Jakarta Selatan."
				></textarea>
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
					>Tanggal Ditandatangani</label
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
</div>
