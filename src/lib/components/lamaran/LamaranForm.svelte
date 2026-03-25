<script lang="ts">
	import type { LamaranData } from '$lib/utils/lamaran';

	let { data = $bindable() }: { data: LamaranData } = $props();
</script>

<div class="space-y-8">
	<!-- Info Penerima (Perusahaan) -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Tujuan Lamaran (Perusahaan)
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label
					for="date"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Tempat & Tanggal Buat</label
				>
				<div class="flex gap-2">
					<input
						type="text"
						bind:value={data.city}
						class="block w-1/2 rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
						placeholder="Jakarta"
					/>
					<input
						type="date"
						bind:value={data.date}
						class="block w-1/2 rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					/>
				</div>
			</div>
			<div>
				<label
					for="recipientName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Kepada (Penerima)</label
				>
				<input
					type="text"
					id="recipientName"
					bind:value={data.recipientName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="HRD Manager / Bapak Budi"
				/>
			</div>
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
					placeholder="PT Maju Bersama Raya"
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
					placeholder="Jl. Sudirman Kav 10, Jakarta Selatan"
				></textarea>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Info Lowongan Kerja -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Posisi & Sumber Info
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label
					for="positionApplied"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Posisi yang Dilamar</label
				>
				<input
					type="text"
					id="positionApplied"
					bind:value={data.positionApplied}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Digital Marketing Specialist"
				/>
			</div>
			<div>
				<label
					for="infoSource"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Tahu Info Loker Dari (Opsional)</label
				>
				<input
					type="text"
					id="infoSource"
					bind:value={data.infoSource}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="LinkedIn / JobStreet / Website Budi"
				/>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Data Diri Pelamar -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Data Diri Anda (Pelamar)
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="applicantName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Lengkap</label
				>
				<input
					type="text"
					id="applicantName"
					bind:value={data.applicantName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Siti Aminah, S.Kom"
				/>
			</div>
			<div>
				<label
					for="applicantPlaceBirth"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Tempat Lahir</label
				>
				<input
					type="text"
					id="applicantPlaceBirth"
					bind:value={data.applicantPlaceBirth}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Bandung"
				/>
			</div>
			<div>
				<label
					for="applicantDateBirth"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Tanggal Lahir</label
				>
				<input
					type="date"
					id="applicantDateBirth"
					bind:value={data.applicantDateBirth}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="applicantEducation"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Pendidikan Terakhir</label
				>
				<input
					type="text"
					id="applicantEducation"
					bind:value={data.applicantEducation}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="S1 Sistem Informasi, Universitas X"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="applicantAddress"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Alamat Lengkap</label
				>
				<textarea
					id="applicantAddress"
					bind:value={data.applicantAddress}
					rows="2"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Jl. Melati No 24, Kec. Bunga..."
				></textarea>
			</div>
			<div>
				<label
					for="applicantPhone"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>No. HP / WhatsApp</label
				>
				<input
					type="tel"
					id="applicantPhone"
					bind:value={data.applicantPhone}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="0812345678"
				/>
			</div>
			<div>
				<label
					for="applicantEmail"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">Email</label
				>
				<input
					type="email"
					id="applicantEmail"
					bind:value={data.applicantEmail}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="nama@email.com"
				/>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Lampiran dan Skill Tambahan -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Kualifikasi & Lampiran
		</h3>

		<div class="mb-4">
			<label
				for="additionalSkills"
				class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
				>Uraikan Kelebihan / Keahlian Anda Secara Singkat</label
			>
			<textarea
				id="additionalSkills"
				bind:value={data.additionalSkills}
				rows="3"
				class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				placeholder="Bisa berbahasa Inggris aktif, mahir desain grafis, terbiasa bekerja dalam tim..."
			></textarea>
			<p class="mt-1 text-xs text-slate-500">
				Teks ini akan disisipkan ke paragraf kemampuan di dalam surat.
			</p>
		</div>

		<p class="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
			Dokumen yang Dilampirkan (Centang yang sesuai):
		</p>
		<div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
			<label
				class="flex cursor-pointer items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
			>
				<input
					type="checkbox"
					bind:checked={data.lampiranCV}
					class="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
				/>
				Curriculum Vitae (CV)
			</label>
			<label
				class="flex cursor-pointer items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
			>
				<input
					type="checkbox"
					bind:checked={data.lampiranKTP}
					class="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
				/>
				Fotokopi KTP
			</label>
			<label
				class="flex cursor-pointer items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
			>
				<input
					type="checkbox"
					bind:checked={data.lampiranIjazah}
					class="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
				/>
				Fotokopi Ijazah
			</label>
			<label
				class="flex cursor-pointer items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
			>
				<input
					type="checkbox"
					bind:checked={data.lampiranFoto}
					class="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
				/>
				Pas Foto Terbaru
			</label>
			<label
				class="flex cursor-pointer items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
			>
				<input
					type="checkbox"
					bind:checked={data.lampiranPortofolio}
					class="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
				/>
				Portofolio
			</label>
		</div>
	</div>
</div>
