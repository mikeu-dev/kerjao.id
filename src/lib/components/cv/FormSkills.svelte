<script lang="ts">
	import type { CvData } from '$lib/utils/cv-maker';

	let { data = $bindable() }: { data: CvData } = $props();
</script>

<div class="space-y-6">
	<!-- Skills -->
	<div class="space-y-4 border-l-4 border-cyan-500 pl-4">
		<div>
			<h3 class="font-bold text-slate-800 dark:text-white">Keahlian Utama (Skills)</h3>
			<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
				Pisahkan dengan koma (,). Kata kunci di sini adalah hal terpenting yang dibaca oleh robot.
			</p>
		</div>
		<div>
			<label
				for="skills"
				class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
			>
				Technical & Soft Skills
			</label>
			<textarea
				id="skills"
				bind:value={data.skills}
				placeholder="contoh: JavaScript, Python, SEO Optimization, Project Management, Agile, Leadership"
				rows="3"
				class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-3 shadow-sm transition-all duration-200 focus:border-cyan-500 focus:bg-white focus:ring-cyan-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-cyan-400 dark:focus:bg-slate-900 dark:focus:ring-cyan-400"
			></textarea>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Languages -->
	<div class="space-y-4 border-l-4 border-cyan-500 pl-4">
		<div>
			<h3 class="font-bold text-slate-800 dark:text-white">Bahasa Asing (Languages)</h3>
			<p class="mt-1 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
				<span>Pisahkan dengan koma. (Opsional)</span>
			</p>
		</div>
		<div>
			<input
				type="text"
				id="languages"
				bind:value={data.languages}
				placeholder="contoh: Indonesian (Native), English (TOEFL 100), Japanese (N3)"
				class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2.5 shadow-sm transition-all duration-200 focus:border-cyan-500 focus:bg-white focus:ring-cyan-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-cyan-400 dark:focus:bg-slate-900 dark:focus:ring-cyan-400"
			/>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Certifications -->
	<div class="space-y-4 border-l-4 border-cyan-500 pl-4">
		<div>
			<h3 class="font-bold text-slate-800 dark:text-white">Sertifikasi & Lisensi</h3>
			<p class="mt-1 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
				<span>Pisahkan dengan koma (,). (Opsional)</span>
			</p>
		</div>
		<div>
			<textarea
				id="certs"
				bind:value={data.certifications}
				placeholder="contoh: AWS Certified Developer, Google Analytics Individual Qualification"
				rows="3"
				class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-3 shadow-sm transition-all duration-200 focus:border-cyan-500 focus:bg-white focus:ring-cyan-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white dark:focus:border-cyan-400 dark:focus:bg-slate-900 dark:focus:ring-cyan-400"
			></textarea>
		</div>
	</div>
</div>
