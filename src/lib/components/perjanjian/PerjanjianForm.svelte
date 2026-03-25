<script lang="ts">
	import type { PerjanjianData } from '$lib/utils/perjanjian';

	let { data = $bindable() }: { data: PerjanjianData } = $props();
</script>

<div class="space-y-8">
	<!-- Info Pembuatan -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Pembuatan Dokumen
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Pihak Pertama (Klien) -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			PIHAK PERTAMA (Klien)
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="clientName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Lengkap</label
				>
				<input
					type="text"
					id="clientName"
					bind:value={data.clientName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Sandi Saputra"
				/>
			</div>
			<div>
				<label
					for="clientRole"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Jabatan / Peran</label
				>
				<input
					type="text"
					id="clientRole"
					bind:value={data.clientRole}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Direktur Utama / Individu"
				/>
			</div>
			<div>
				<label
					for="clientCompany"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Instansi (Opsional)</label
				>
				<input
					type="text"
					id="clientCompany"
					bind:value={data.clientCompany}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="PT Gemilang Teknologi"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="clientAddress"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Alamat Lengkap</label
				>
				<textarea
					id="clientAddress"
					bind:value={data.clientAddress}
					rows="2"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Jl. Sudirman Kav 10, Jakarta Selatan..."
				></textarea>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Pihak Kedua (Freelancer) -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			PIHAK KEDUA (Freelancer)
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="freelancerName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Lengkap</label
				>
				<input
					type="text"
					id="freelancerName"
					bind:value={data.freelancerName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Andi Hermawan"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="freelancerRole"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Peran / Profesi</label
				>
				<input
					type="text"
					id="freelancerRole"
					bind:value={data.freelancerRole}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Freelance Web Developer / Graphic Designer"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="freelancerAddress"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Alamat Lengkap KTP</label
				>
				<textarea
					id="freelancerAddress"
					bind:value={data.freelancerAddress}
					rows="2"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Jl. Melati No. 14, RT 02/05, Bandung..."
				></textarea>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Ruang Lingkup & Nilai Kontrak -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Klausul Proyek
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="projectName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Proyek</label
				>
				<input
					type="text"
					id="projectName"
					bind:value={data.projectName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Pembuatan Website Company Profile"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="projectScope"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Ruang Lingkup Pekerjaan (Pisahkan pakai Enters)</label
				>
				<textarea
					id="projectScope"
					bind:value={data.projectScope}
					rows="3"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="- Desain UI/UX 5 halaman utama&#10;- Integrasi dengan sistem CMS WordPress&#10;- Setup hosting dan domain"
				></textarea>
			</div>

			<div class="sm:col-span-2">
				<label
					for="contractValue"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nilai Kontrak Total (Rp)</label
				>
				<div class="relative mt-1 rounded-md shadow-sm">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
						<span class="text-slate-500 sm:text-sm">Rp</span>
					</div>
					<input
						type="number"
						id="contractValue"
						bind:value={data.contractValue}
						class="block w-full rounded-xl border-slate-200 bg-white/50 py-2 pr-4 pl-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
						placeholder="10000000"
					/>
				</div>
			</div>

			<div>
				<label
					for="deadline"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Durasi / Tenggat Waktu Pelaksanaan</label
				>
				<input
					type="text"
					id="deadline"
					bind:value={data.deadline}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="14 (empat belas) hari kalender"
				/>
			</div>
			<div>
				<label
					for="revisionCount"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Batas Maksimal Revisi (Opsional)</label
				>
				<input
					type="text"
					id="revisionCount"
					bind:value={data.revisionCount}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="2 (dua) kali revisi mayor"
				/>
			</div>
		</div>
	</div>
</div>
