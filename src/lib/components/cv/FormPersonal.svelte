<script lang="ts">
	import type { CvData } from '$lib/utils/cv-maker';

	let { data = $bindable() }: { data: CvData } = $props();
</script>

<div class="space-y-6">
	<!-- Personal Information -->
	<div class="space-y-4 border-l-4 border-indigo-500 pl-4">
		<div>
			<h3 class="font-bold text-slate-800 dark:text-white">Data Diri & Kontak Utama</h3>
			<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
				Identitas dasar yang akan berada di Header CV Anda. Disarankan menggunakan nama lengkap.
			</p>
		</div>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<!-- Name -->
			<div class="sm:col-span-2">
				<label
					for="fullName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
				>
					Nama Lengkap
				</label>
				<input
					type="text"
					id="fullName"
					bind:value={data.fullName}
					placeholder="contoh: Muhammad Budi Santoso"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2.5 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-indigo-400 dark:focus:bg-slate-900 dark:focus:ring-indigo-400"
				/>
			</div>

			<!-- Email & Phone -->
			<div>
				<label
					for="email"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
				>
					Email Aktif
				</label>
				<input
					type="email"
					id="email"
					bind:value={data.email}
					placeholder="budi.santoso@email.com"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2.5 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-indigo-400 dark:focus:bg-slate-900 dark:focus:ring-indigo-400"
				/>
			</div>
			<div>
				<label
					for="phone"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
				>
					Nomor Telepon / WhatsApp
				</label>
				<input
					type="text"
					id="phone"
					bind:value={data.phone}
					placeholder="+62 812 3456 7890"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2.5 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-indigo-400 dark:focus:bg-slate-900 dark:focus:ring-indigo-400"
				/>
			</div>

			<!-- Location & LinkedIn -->
			<div>
				<label
					for="location"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
				>
					Lokasi Domisili (Kota)
				</label>
				<input
					type="text"
					id="location"
					bind:value={data.location}
					placeholder="Jakarta, Indonesia"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2.5 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-indigo-400 dark:focus:bg-slate-900 dark:focus:ring-indigo-400"
				/>
			</div>
			<div>
				<label
					for="linkedin"
					class="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300"
				>
					<span>LinkedIn URL</span>
					<span class="text-xs font-normal text-slate-400">(Opsional)</span>
				</label>
				<input
					type="text"
					id="linkedin"
					bind:value={data.linkedin}
					placeholder="linkedin.com/in/budisantoso"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2.5 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-indigo-400 dark:focus:bg-slate-900 dark:focus:ring-indigo-400"
				/>
			</div>

			<!-- Website Portofolio -->
			<div class="sm:col-span-2">
				<label
					for="website"
					class="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300"
				>
					<span>Website Portofolio / GitHub</span>
					<span class="text-xs font-normal text-slate-400">(Opsional)</span>
				</label>
				<input
					type="text"
					id="website"
					bind:value={data.website}
					placeholder="github.com/budisantoso atau budi.web.id"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2.5 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-indigo-400 dark:focus:bg-slate-900 dark:focus:ring-indigo-400"
				/>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Professional Summary -->
	<div class="space-y-4 border-l-4 border-emerald-500 pl-4">
		<div>
			<h3 class="font-bold text-slate-800 dark:text-white">
				Ringkasan Profil (Professional Summary)
			</h3>
			<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
				Tulis 2-4 kalimat singkat yang merangkum siapa Anda, keahlian utama, dan pencapaian terbesar
				Anda. (Opsional tapi sangat disarankan)
			</p>
		</div>
		<div>
			<textarea
				id="summary"
				bind:value={data.summary}
				placeholder="Software Engineer dengan 5+ tahun pengalaman dalam membangun aplikasi berskala besar menggunakan TypeScript dan SvelteKit..."
				rows="5"
				class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-3 shadow-sm transition-all duration-200 focus:border-emerald-500 focus:bg-white focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-emerald-400 dark:focus:bg-slate-900 dark:focus:ring-emerald-400"
			></textarea>
		</div>
	</div>
</div>
