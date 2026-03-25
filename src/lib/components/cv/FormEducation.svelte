<script lang="ts">
	import { generateId, type CvData } from '$lib/utils/cv-maker';
	import { slide } from 'svelte/transition';

	let { data = $bindable() }: { data: CvData } = $props();

	function addEducation() {
		data.education = [
			...data.education,
			{
				id: generateId(),
				institution: '',
				degree: '',
				fieldOfStudy: '',
				location: '',
				startDate: '',
				endDate: '',
				current: false,
				gpa: ''
			}
		];
	}

	function removeEducation(id: string) {
		data.education = data.education.filter((edu) => edu.id !== id);
	}
</script>

<div class="space-y-6">
	<!-- Education Header -->
	<div class="space-y-4 border-l-4 border-amber-500 pl-4">
		<div class="flex items-center justify-between">
			<div>
				<h3 class="font-bold text-slate-800 dark:text-white">Riwayat Pendidikan</h3>
				<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
					Masukkan pendidikan terakhir yang relevan (Minimal SMA/SMK atau Perguruan Tinggi).
				</p>
			</div>
			<button
				type="button"
				onclick={addEducation}
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

		{#if data.education.length === 0}
			<div
				class="rounded-xl border border-dashed border-slate-300 p-8 text-center sm:p-12 dark:border-slate-700"
			>
				<p class="text-sm text-slate-500 dark:text-slate-400">
					Klik "Tambah" untuk memasukkan Riwayat Pendidikan (Kampus atau Sekolah Tinggi Anda).
				</p>
			</div>
		{/if}

		<div class="space-y-6">
			{#each data.education as edu, index (edu.id)}
				<div
					transition:slide
					class="relative rounded-2xl border border-amber-100 bg-amber-50/50 p-4 sm:p-6 dark:border-amber-900/30 dark:bg-amber-900/10"
				>
					<!-- Delete button top right -->
					<div class="absolute top-4 right-4 z-10">
						<button
							type="button"
							onclick={() => removeEducation(edu.id)}
							class="rounded-lg p-1 text-slate-400 transition-colors hover:bg-white hover:text-red-500 dark:hover:bg-slate-800"
							title="Hapus Pendidikan"
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

					<div class="mb-4 pr-10 text-sm font-bold text-amber-700 dark:text-amber-500">
						Pendidikan #{index + 1}
					</div>

					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<!-- Nama Institusi -->
						<div class="sm:col-span-2">
							<label
								for={`inst-${edu.id}`}
								class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
							>
								Nama Sekolah / Perguruan Tinggi
							</label>
							<input
								type="text"
								id={`inst-${edu.id}`}
								bind:value={edu.institution}
								placeholder="contoh: Universitas Indonesia"
								class="block w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all focus:border-amber-500 focus:ring-amber-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-white dark:focus:border-amber-400 dark:focus:ring-amber-400"
							/>
						</div>

						<!-- Gelar -->
						<div>
							<label
								for={`degree-${edu.id}`}
								class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
							>
								Gelar / Jenjang
							</label>
							<input
								type="text"
								id={`degree-${edu.id}`}
								bind:value={edu.degree}
								placeholder="contoh: Sarjana Komputer (S.Kom)"
								class="block w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all focus:border-amber-500 focus:ring-amber-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-white dark:focus:border-amber-400 dark:focus:ring-amber-400"
							/>
						</div>

						<!-- Jurusan -->
						<div>
							<label
								for={`field-${edu.id}`}
								class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
							>
								Jurusan / Program Studi
							</label>
							<input
								type="text"
								id={`field-${edu.id}`}
								bind:value={edu.fieldOfStudy}
								placeholder="contoh: Teknik Informatika"
								class="block w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all focus:border-amber-500 focus:ring-amber-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-white dark:focus:border-amber-400 dark:focus:ring-amber-400"
							/>
						</div>

						<!-- Lokasi -->
						<div>
							<label
								for={`locationEdu-${edu.id}`}
								class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
							>
								Lokasi
							</label>
							<input
								type="text"
								id={`locationEdu-${edu.id}`}
								bind:value={edu.location}
								placeholder="contoh: Depok, Jawa Barat"
								class="block w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all focus:border-amber-500 focus:ring-amber-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-white dark:focus:border-amber-400 dark:focus:ring-amber-400"
							/>
						</div>

						<!-- IPK -->
						<div>
							<label
								for={`gpa-${edu.id}`}
								class="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300"
							>
								<span>Nilai / IPK</span>
								<span class="text-xs font-normal text-slate-400">(Opsional)</span>
							</label>
							<input
								type="text"
								id={`gpa-${edu.id}`}
								bind:value={edu.gpa}
								placeholder="contoh: 3.85 / 4.00"
								class="block w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all focus:border-amber-500 focus:ring-amber-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-white dark:focus:border-amber-400 dark:focus:ring-amber-400"
							/>
						</div>

						<!-- Waktu Mulai -->
						<div>
							<label
								for={`edu-startDate-${edu.id}`}
								class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
							>
								Tanggal Mulai Masuk
							</label>
							<div class="relative">
								<input
									type="month"
									id={`edu-startDate-${edu.id}`}
									bind:value={edu.startDate}
									class="block w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all focus:border-amber-500 focus:ring-amber-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-white dark:focus:border-amber-400 dark:focus:ring-amber-400"
								/>
							</div>
						</div>

						<!-- Waktu Lulus -->
						<div>
							<label
								for={`edu-endDate-${edu.id}`}
								class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
							>
								Tanggal Lulus
							</label>
							<div class="relative flex items-center gap-3">
								<input
									type="month"
									id={`edu-endDate-${edu.id}`}
									bind:value={edu.endDate}
									disabled={edu.current}
									class={`block w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all focus:border-amber-500 focus:ring-amber-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-white dark:focus:border-amber-400 dark:focus:ring-amber-400 ${edu.current ? 'cursor-not-allowed bg-slate-100 opacity-50' : ''}`}
								/>
								<label class="flex cursor-pointer items-center gap-2 whitespace-nowrap">
									<input
										type="checkbox"
										bind:checked={edu.current}
										class="h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-600 dark:border-slate-600 dark:bg-slate-700 dark:focus:ring-amber-500 dark:focus:ring-offset-slate-900"
									/>
									<span class="text-sm font-medium text-slate-700 dark:text-slate-300"
										>Masih Belajar</span
									>
								</label>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
