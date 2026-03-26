<script lang="ts">
	import LamaranForm from '$lib/components/lamaran/LamaranForm.svelte';
	import LamaranPreview from '$lib/components/lamaran/LamaranPreview.svelte';
	import LamaranActions from '$lib/components/lamaran/LamaranActions.svelte';
	import SeoContent from '$lib/components/lamaran/SeoContent.svelte';
	import RelatedTools from '$lib/components/layout/RelatedTools.svelte';
	import Meta from '$lib/components/seo/Meta.svelte';
	import type { LamaranData } from '$lib/utils/lamaran';

	let data = $state<LamaranData>({
		city: '',
		date: new Date().toISOString().split('T')[0],
		recipientName: '',
		companyName: '',
		companyAddress: '',
		applicantName: '',
		applicantPlaceBirth: '',
		applicantDateBirth: '1998-01-01',
		applicantEducation: '',
		applicantAddress: '',
		applicantPhone: '',
		applicantEmail: '',
		positionApplied: '',
		infoSource: '',
		lampiranCV: true,
		lampiranFoto: true,
		lampiranIjazah: true,
		lampiranKTP: true,
		lampiranPortofolio: false,
		additionalSkills: ''
	});
</script>

<Meta
	title="Buat Surat Lamaran Kerja Online Gratis & Otomatis | Kerjao"
	description="Bikin surat lamaran kerja (Cover Letter) Bahasa Indonesia resmi, cepat, dan otomatis. Tinggal isi form, langsung unduh PDF siap lamar."
	keywords="buat surat lamaran kerja, surat lamaran kerja otomatis, generator surat lamaran, contoh surat lamaran form"
/>

<div class="relative z-10 mx-auto max-w-7xl px-4 pt-20 lg:pt-32 pb-12 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-12 text-center print:hidden">
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			Surat Lamaran <span
				class="bg-linear-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent"
				>Kerja</span
			>
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
			Susun surat lamaran (cover letter) berbahasa Indonesia yang terstruktur, baku, dan siap
			menarik hati HRD.
		</p>
		<div
			class="animate-fade-in mt-6 inline-flex items-center rounded-full border border-teal-500/20 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 shadow-sm ring-1 ring-teal-500/10 ring-inset dark:border-teal-400/20 dark:bg-teal-900/40 dark:text-teal-300"
		>
			<span class="relative mr-3 flex h-2 w-2">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
				></span>
				<span class="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
			</span>
			Standar Perekrutan Indonesia
		</div>
	</div>

	<!-- Main Content Grid -->
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
		<!-- Sidebar Form (Kiri) -->
		<div class="flex flex-col gap-6 lg:col-span-12 xl:col-span-5 print:hidden">
			<!-- Form Panel -->
			<div
				class="rounded-3xl border border-slate-200/60 bg-white/60 p-6 shadow-xl shadow-slate-200/20 backdrop-blur-xl sm:p-8 dark:border-slate-700/60 dark:bg-slate-800/60 dark:shadow-none"
			>
				<div class="mb-6 flex items-center gap-3">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400"
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
								d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
							/>
						</svg>
					</div>
					<h2 class="text-xl font-bold text-slate-900 dark:text-white">Lengkapi Lamaran Anda</h2>
				</div>
				<LamaranForm bind:data />
			</div>

			<!-- Desktop Actions -->
			<div
				class="hidden rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:block dark:border-slate-700/60 dark:bg-slate-800/40"
			>
				<LamaranActions />
			</div>
		</div>

		<!-- Preview Area (Kanan) -->
		<div class="flex flex-col gap-6 lg:col-span-12 xl:col-span-7">
			<!-- Result Panel -->
			<div
				class="relative rounded-3xl border border-slate-200/60 bg-slate-100/50 p-6 shadow-inner sm:p-8 dark:border-slate-700/60 dark:bg-slate-900/50 print:border-none print:bg-transparent print:p-0 print:shadow-none"
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
					<span>Pratinjau Kertas</span>
				</h2>

				<!-- Printable Invoice Area -->
				<div
					class="print-area mx-auto overflow-hidden rounded-xl border border-slate-200/50 lg:max-w-3xl print:border-none"
				>
					<LamaranPreview {data} />
				</div>
			</div>

			<!-- Mobile Actions -->
			<div
				class="block rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:hidden dark:border-slate-700/60 dark:bg-slate-800/40 print:hidden"
			>
				<LamaranActions />
			</div>
		</div>
	</div>

	<!-- SEO Article -->
	<div class="mt-16 print:hidden">
		<SeoContent />
	</div>

	<RelatedTools currentPath="/surat-lamaran" category="Karir" />
</div>

<style>
	@media print {
		:global(body) {
			background-color: white !important;
			color: black !important;
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
			overflow: visible !important;
			border: none !important;
		}
	}
</style>
