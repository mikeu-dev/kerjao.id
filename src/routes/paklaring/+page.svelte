<script lang="ts">
	import PaklaringForm from '$lib/components/paklaring/PaklaringForm.svelte';
	import PaklaringPreview from '$lib/components/paklaring/PaklaringPreview.svelte';
	import PaklaringActions from '$lib/components/paklaring/PaklaringActions.svelte';
	import SeoContent from '$lib/components/paklaring/SeoContent.svelte';
	import RelatedTools from '$lib/components/layout/RelatedTools.svelte';
	import Meta from '$lib/components/seo/Meta.svelte';
	import { generateSuratNumber, type PaklaringData } from '$lib/utils/paklaring';

	let data = $state<PaklaringData>({
		companyName: '',
		companyAddress: '',
		companyPhone: '',
		suratNumber: '',
		issueDate: new Date().toISOString().split('T')[0],
		employeeName: '',
		nik: '',
		lastPosition: '',
		startDate: '',
		endDate: '',
		signeeName: '',
		signeePosition: 'HRD Manager'
	});

	// auto-generate number once on client
	$effect(() => {
		if (!data.suratNumber) {
			data.suratNumber = generateSuratNumber();
		}
	});
</script>

<Meta
	title="Buat Surat Keterangan Kerja (Paklaring) Online Bebas Ribet | Kerjao"
	description="Bikin Surat Pengalaman Kerja (Paklaring) langsung jadi. Cocok untuk klaim BPJS Ketenagakerjaan atau karier. Format HRD baku."
	keywords="buat surat paklaring, surat pengalaman kerja, generator paklaring, paklaring bpjs"
/>

<div class="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8 lg:pt-32">
	<!-- Header -->
	<div class="mb-12 text-center print:hidden">
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			Surat Keterangan <span
				class="bg-linear-to-r from-orange-400 to-rose-600 bg-clip-text text-transparent">Kerja</span
			>
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
			Buat draf Surat Paklaring profesional untuk keperluan administrasi atau pencairan BPJS
			Ketenagakerjaan (JHT).
		</p>
		<div
			class="animate-fade-in mt-6 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 shadow-sm ring-1 ring-orange-500/10 ring-inset dark:border-orange-400/20 dark:bg-orange-900/40 dark:text-orange-300"
		>
			<span class="relative mr-3 flex h-2 w-2">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"
				></span>
				<span class="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
			</span>
			Standar Resmi HRD Indonesia
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
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600 dark:bg-rose-900/50 dark:text-rose-400"
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
								d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
							/>
						</svg>
					</div>
					<h2 class="text-xl font-bold text-slate-900 dark:text-white">Lengkapi Data Paklaring</h2>
				</div>
				<PaklaringForm bind:data />
			</div>

			<!-- Desktop Actions -->
			<div
				class="hidden rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:block dark:border-slate-700/60 dark:bg-slate-800/40"
			>
				<PaklaringActions />
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
					<PaklaringPreview {data} />
				</div>
			</div>

			<!-- Mobile Actions -->
			<div
				class="block rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:hidden dark:border-slate-700/60 dark:bg-slate-800/40 print:hidden"
			>
				<PaklaringActions />
			</div>
		</div>
	</div>

	<!-- SEO Article -->
	<div class="mt-16 print:hidden">
		<SeoContent />
	</div>

	<RelatedTools currentPath="/paklaring" category="Bisnis & HR" />
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
