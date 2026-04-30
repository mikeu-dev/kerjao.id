<script lang="ts">
	import FormPersonal from '$lib/components/cv/FormPersonal.svelte';
	import FormExperience from '$lib/components/cv/FormExperience.svelte';
	import FormEducation from '$lib/components/cv/FormEducation.svelte';
	import FormSkills from '$lib/components/cv/FormSkills.svelte';
	import CvPreview from '$lib/components/cv/CvPreview.svelte';
	import CvActions from '$lib/components/cv/CvActions.svelte';
	import SeoContent from '$lib/components/cv/SeoContent.svelte';
	import RelatedTools from '$lib/components/layout/RelatedTools.svelte';
	import Meta from '$lib/components/seo/Meta.svelte';
	import type { CvData } from '$lib/utils/cv-maker';

	let data = $state<CvData>({
		fullName: '',
		email: '',
		phone: '',
		location: '',
		linkedin: '',
		website: '',
		summary: '',
		experiences: [],
		education: [],
		skills: '',
		projects: [],
		languages: '',
		certifications: '',
		font: 'Times New Roman',
		fontSize: 'Medium'
	});
</script>

<Meta
	title="Buat CV ATS Friendly Gratis (Standard Harvard) Online | Kerjao"
	description="Generator CV ATS-Friendly gratis. Buat resume text-based satu kolom yang 99% dijamin lolos Applicant Tracking System (ATS) HRD perusahaan Multinasional."
	keywords="cv ats friendly, buat cv online, generator cv gratis, harvard style resume"
/>

<div class="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8 lg:pt-32">
	<!-- Header -->
	<div class="mb-12 text-center print:hidden">
		<div
			class="mb-3 inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-800 dark:bg-rose-900/50 dark:text-rose-300"
		>
			Harvard Style
		</div>
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			<span class="bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent"
				>CV ATS-Friendly</span
			> Generator
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
			Buat resume profesional satu kolom yang dijamin lolos *parsing* bot HRD (Applicant Tracking
			Systems). Tanpa antarmuka rewel.
		</p>
	</div>

	<!-- Main Content Grid -->
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
		<!-- Sidebar Form (Kiri) -->
		<div class="flex flex-col gap-6 lg:col-span-12 xl:col-span-5 print:hidden">
			<!-- Tab Navigation or Scrollable Form Panel -->
			<div
				class="rounded-3xl border border-slate-200/60 bg-white/60 p-6 shadow-xl shadow-slate-200/20 backdrop-blur-xl sm:p-8 dark:border-slate-700/60 dark:bg-slate-800/60 dark:shadow-none"
			>
				<div class="mb-6 flex items-center justify-between">
					<div class="flex items-center gap-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
						>
							<svg
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								/>
							</svg>
						</div>
						<h2 class="text-xl font-bold text-slate-900 dark:text-white">Editor CV</h2>
					</div>

					<!-- Font Selector -->
					<div class="flex items-center gap-2">
						<label for="fontSelect" class="text-xs font-semibold text-slate-500">Font:</label>
						<select
							id="fontSelect"
							bind:value={data.font}
							class="rounded-lg border-slate-200 bg-white py-1.5 pr-8 pl-3 text-xs font-medium text-slate-700 focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
						>
							<option value="Times New Roman">Times New</option>
							<option value="Garamond">Garamond</option>
							<option value="Arial">Arial</option>
							<option value="Helvetica">Helvetica</option>
						</select>
					</div>
				</div>

				<!-- Modular Forms -->
				<div class="space-y-12">
					<FormPersonal bind:data />
					<FormExperience bind:data />
					<FormEducation bind:data />
					<FormSkills bind:data />
				</div>
			</div>

			<!-- Desktop Actions -->
			<div
				class="hidden rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:block dark:border-slate-700/60 dark:bg-slate-800/40"
			>
				<CvActions />
			</div>
		</div>

		<!-- Preview Area (Kanan) -->
		<div class="flex flex-col gap-6 lg:col-span-12 xl:col-span-7">
			<!-- Result Panel -->
			<div
				class="relative rounded-3xl border border-slate-200/60 bg-slate-100/50 p-4 shadow-inner sm:p-8 dark:border-slate-700/60 dark:bg-slate-900/50 print:border-none print:bg-transparent print:p-0 print:shadow-none"
			>
				<h2
					class="mb-6 flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white print:hidden"
				>
					<div
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400"
					>
						<svg
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
							/>
						</svg>
					</div>
					<span>Tampilan Kertas (A4)</span>
				</h2>

				<!-- Printable Surat Area -->
				<div class="print-area mx-auto overflow-hidden bg-white shadow-2xl print:shadow-none">
					<CvPreview {data} />
				</div>
			</div>

			<!-- Mobile Actions -->
			<div
				class="block rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:hidden dark:border-slate-700/60 dark:bg-slate-800/40 print:hidden"
			>
				<CvActions />
			</div>
		</div>
	</div>

	<!-- SEO Article -->
	<div class="mt-16 print:hidden">
		<SeoContent />
	</div>

	<RelatedTools currentPath="/cv-maker" category="Karir" />
</div>

<style>
	@media print {
		:global(body) {
			background-color: white !important;
			color: black !important;
			-webkit-print-color-adjust: exact !important;
			print-color-adjust: exact !important;
		}
		:global(nav),
		:global(header),
		:global(footer),
		:global(.print\:hidden) {
			display: none !important;
		}

		.print-area {
			width: 100% !important;
			padding: 0 !important;
			margin: 0 auto !important;
		}
	}
</style>
