<script lang="ts">
	import { generateId, type CvData } from '$lib/utils/cv-maker';
	import { slide } from 'svelte/transition';

	let { data = $bindable() }: { data: CvData } = $props();

	function addExperience() {
		data.experiences = [
			...data.experiences,
			{
				id: generateId(),
				company: '',
				position: '',
				location: '',
				startDate: '',
				endDate: '',
				current: false,
				description: ''
			}
		];
	}

	function removeExperience(id: string) {
		data.experiences = data.experiences.filter((exp) => exp.id !== id);
	}
</script>

<div class="space-y-6">
	<div class="space-y-4 border-l-4 border-rose-500 pl-4">
		<div class="flex items-center justify-between">
			<div>
				<h3 class="font-bold text-slate-800 dark:text-white">Pengalaman Kerja</h3>
				<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
					Urutkan dari pekerjaan terbaru. Gunakan poin (bullet) untuk deksripsi dan gunakan kata
					kerja kuat (Achieved, Managed, Developed).
				</p>
			</div>
			<button
				type="button"
				onclick={addExperience}
				class="inline-flex shrink-0 items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800 focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 sm:text-sm dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
			>
				<svg
					class="mr-1.5 -ml-1 h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
				</svg>
				Tambah
			</button>
		</div>

		{#if data.experiences.length === 0}
			<div
				class="rounded-xl border border-dashed border-slate-300 p-8 text-center sm:p-12 dark:border-slate-700"
			>
				<p class="text-sm text-slate-500 dark:text-slate-400">
					Misal kamu peraih *Cumlaude* segar (Fresh Grad), kamu bisa lewati tahap ini atau isi
					dengan pengalaman magang/organisasi.
				</p>
			</div>
		{/if}

		<div class="space-y-6">
			{#each data.experiences as exp, index (exp.id)}
				<div
					transition:slide
					class="relative rounded-2xl border border-rose-100 bg-rose-50/50 p-4 sm:p-6 dark:border-rose-900/30 dark:bg-rose-900/10"
				>
					<!-- Delete button top right -->
					<div class="absolute top-4 right-4 z-10">
						<button
							type="button"
							onclick={() => removeExperience(exp.id)}
							class="rounded-lg p-1 text-slate-400 transition-colors hover:bg-white hover:text-red-500 dark:hover:bg-slate-800"
							title="Hapus Pengalaman"
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

					<div class="mb-4 pr-10 text-sm font-bold text-rose-700 dark:text-rose-400">
						Pengalaman #{index + 1}
					</div>

					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<!-- Posisi / Title -->
						<div class="sm:col-span-2">
							<label
								for={`position-${exp.id}`}
								class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
							>
								Jabatan / Posisi
							</label>
							<input
								type="text"
								id={`position-${exp.id}`}
								bind:value={exp.position}
								placeholder="contoh: Backend Developer"
								class="block w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all focus:border-rose-500 focus:ring-rose-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-white dark:focus:border-rose-400 dark:focus:ring-rose-400"
							/>
						</div>

						<!-- Perusahaan -->
						<div>
							<label
								for={`company-${exp.id}`}
								class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
							>
								Nama Perusahaan
							</label>
							<input
								type="text"
								id={`company-${exp.id}`}
								bind:value={exp.company}
								placeholder="contoh: PT Teknologi Cemerlang"
								class="block w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all focus:border-rose-500 focus:ring-rose-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-white dark:focus:border-rose-400 dark:focus:ring-rose-400"
							/>
						</div>

						<!-- Lokasi -->
						<div>
							<label
								for={`location-${exp.id}`}
								class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
							>
								Lokasi
							</label>
							<input
								type="text"
								id={`location-${exp.id}`}
								bind:value={exp.location}
								placeholder="contoh: Jakarta, Indonesia atau Remote"
								class="block w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all focus:border-rose-500 focus:ring-rose-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-white dark:focus:border-rose-400 dark:focus:ring-rose-400"
							/>
						</div>

						<!-- Waktu Mulai -->
						<div>
							<label
								for={`startDate-${exp.id}`}
								class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
							>
								Tanggal Mulai
							</label>
							<div class="relative">
								<input
									type="month"
									id={`startDate-${exp.id}`}
									bind:value={exp.startDate}
									class="block w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all focus:border-rose-500 focus:ring-rose-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-white dark:focus:border-rose-400 dark:focus:ring-rose-400"
								/>
							</div>
						</div>

						<!-- Waktu Selesai -->
						<div>
							<label
								for={`endDate-${exp.id}`}
								class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
							>
								Tanggal Selesai
							</label>
							<div class="relative flex items-center gap-3">
								<input
									type="month"
									id={`endDate-${exp.id}`}
									bind:value={exp.endDate}
									disabled={exp.current}
									class={`block w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all focus:border-rose-500 focus:ring-rose-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-white dark:focus:border-rose-400 dark:focus:ring-rose-400 ${exp.current ? 'cursor-not-allowed bg-slate-100 opacity-50' : ''}`}
								/>
								<label class="flex cursor-pointer items-center gap-2 whitespace-nowrap">
									<input
										type="checkbox"
										bind:checked={exp.current}
										class="h-4 w-4 rounded border-slate-300 text-rose-600 focus:ring-rose-600 dark:border-slate-600 dark:bg-slate-700 dark:focus:ring-rose-500 dark:focus:ring-offset-slate-900"
									/>
									<span class="text-sm font-medium text-slate-700 dark:text-slate-300"
										>Sekarang</span
									>
								</label>
							</div>
						</div>

						<!-- Deskripsi Pekerjaan -->
						<div class="sm:col-span-2">
							<div class="mb-1.5 flex items-baseline justify-between">
								<label
									for={`desc-${exp.id}`}
									class="block text-sm font-semibold text-slate-700 dark:text-slate-300"
								>
									Deskripsi Pekerjaan / Pencapaian
								</label>
								<span class="text-xs text-rose-600 dark:text-rose-400"
									>Gunakan *enter* untuk membuat poin baru</span
								>
							</div>
							<textarea
								id={`desc-${exp.id}`}
								bind:value={exp.description}
								rows="5"
								placeholder="• Mengoptimalkan database SQL sehingga mempercepat respons API hingga 40%&#10;• Memimpin tim beranggotakan 4 Engineer..."
								class="block w-full rounded-xl border-slate-200 bg-white px-4 py-3 shadow-sm transition-all focus:border-rose-500 focus:ring-rose-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-white dark:focus:border-rose-400 dark:focus:ring-rose-400"
							></textarea>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
