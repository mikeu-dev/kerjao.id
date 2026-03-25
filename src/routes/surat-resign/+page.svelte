<script lang="ts">
	import ResignForm from '$lib/components/resign/ResignForm.svelte';
	import ResignPreview from '$lib/components/resign/ResignPreview.svelte';
	import ResignActions from '$lib/components/resign/ResignActions.svelte';
	import SeoContent from '$lib/components/resign/SeoContent.svelte';
	import RelatedTools from '$lib/components/layout/RelatedTools.svelte';
	import Meta from '$lib/components/seo/Meta.svelte';
	import { generateLetter, type ResignData } from '$lib/utils/generateLetter';

	let data = $state<ResignData>({
		nama: '',
		posisi: '',
		perusahaan: '',
		tanggal: '',
		alasan: 'Mendapatkan tawaran pekerjaan baru',
		alasanCustom: '',
		tone: 'profesional'
	});

	let letter = $derived(generateLetter(data));
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<Meta
	title="Surat Resign Generator Online Gratis, Cepat & Aman | Kerjao"
	description="Buat surat resign (Pengunduran Diri) profesional secara instan. 100% diproses di browser tanpa database untuk menjaga kerahasiaan Anda."
	keywords="surat resign, pengunduran diri, contoh surat resign, otomatis generator"
/>

<div class="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-12 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-12 text-center print:hidden">
		<!-- We omit the "Kembali ke Beranda" link since the Global Header handles that now! -->
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			<span class="bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
				>Surat Resign</span
			> Generator
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
			Buat draf surat pengunduran diri dengan cepat, gratis, dan profesional tanpa perlu ribet.
		</p>
		<div
			class="animate-fade-in mt-6 inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm ring-1 ring-indigo-500/10 ring-inset dark:border-indigo-400/20 dark:bg-indigo-900/40 dark:text-indigo-300"
		>
			<span class="relative mr-3 flex h-2 w-2">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"
				></span>
				<span class="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
			</span>
			Aman & Privat: 100% diproses langsung di perambanmu.
		</div>
	</div>

	<!-- Main Content -->
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
		<!-- Sidebar Form -->
		<div class="flex flex-col gap-6 lg:col-span-5 xl:col-span-4 print:hidden">
			<div
				class="rounded-3xl border border-slate-200/60 bg-white/60 p-6 shadow-xl shadow-slate-200/20 backdrop-blur-xl sm:p-8 dark:border-slate-700/60 dark:bg-slate-800/60 dark:shadow-none"
			>
				<div class="mb-6 flex items-center gap-3">
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
								d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
							/>
						</svg>
					</div>
					<h2 class="text-xl font-bold text-slate-900 dark:text-white">Informasi Anda</h2>
				</div>

				<ResignForm bind:data />
			</div>

			<!-- Desktop Actions -->
			<div
				class="hidden rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:block dark:border-slate-700/60 dark:bg-slate-800/40"
			>
				<ResignActions {letter} />
			</div>
		</div>

		<!-- Preview Area -->
		<div class="flex flex-col gap-6 lg:col-span-7 xl:col-span-8">
			<div
				class="relative rounded-3xl border border-slate-200/60 bg-slate-100/50 p-6 shadow-inner sm:p-8 dark:border-slate-700/60 dark:bg-slate-900/50 print:border-none print:bg-white print:p-0 print:shadow-none"
			>
				<h2
					class="mb-6 flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white print:hidden"
				>
					<div
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400"
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
					<span>Pratinjau Surat</span>
				</h2>

				<!-- Area for printing -->
				<div class="print-area">
					<ResignPreview {letter} />
				</div>
			</div>

			<!-- Mobile Actions -->
			<div
				class="block rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:hidden dark:border-slate-700/60 dark:bg-slate-800/40 print:hidden"
			>
				<ResignActions {letter} />
			</div>
		</div>
	</div>

	<!-- SEO Content -->
	<div class="mt-24 print:hidden">
		<SeoContent />
	</div>

	<RelatedTools currentPath="/surat-resign" category="Karir" />
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
			box-shadow: none !important;
			border: none !important;
			padding: 0 !important;
		}
	}
</style>
