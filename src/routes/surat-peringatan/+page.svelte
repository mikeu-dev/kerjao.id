<script lang="ts">
	import PeringatanForm from '$lib/components/peringatan/PeringatanForm.svelte';
	import PeringatanPreview from '$lib/components/peringatan/PeringatanPreview.svelte';
	import PeringatanActions from '$lib/components/peringatan/PeringatanActions.svelte';
	import SeoContent from '$lib/components/peringatan/SeoContent.svelte';
	import RelatedTools from '$lib/components/layout/RelatedTools.svelte';
	import Meta from '$lib/components/seo/Meta.svelte';
	import { generateSPNumber, type PeringatanData } from '$lib/utils/peringatan';

	let data = $state<PeringatanData>({
		spLevel: '1',
		companyName: '',
		hrName: '',
		hrRole: '',
		employeeName: '',
		employeeID: '',
		employeeRole: '',
		employeeDepartment: '',
		violationReason: '',
		violationDate: '',
		city: '',
		date: new Date().toISOString().split('T')[0],
		referenceNumber: ''
	});

	$effect(() => {
		if (!data.referenceNumber) {
			data.referenceNumber = generateSPNumber();
		}
	});
</script>

<Meta
	title="Buat Surat Peringatan Karyawan (SP 1, 2, 3) Online | Kerjao"
	description="Cetak draf Surat Peringatan (SP 1, 2, atau 3) karyawan dengan instan. Dilengkapi tata bahasa mutlak pemutusan kerja HRD yang sesuai hukum."
	keywords="surat peringatan karyawan, contoh sp1, sp2, surat teguran hrd"
/>

<div class="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-12 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-12 text-center print:hidden">
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			<span class="bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent"
				>Surat Peringatan</span
			> Karyawan
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
			Tegakkan kedisiplinan perusahaan dengan dokumen Sanksi (SP 1 hingga SP 3 / PHK) berformat
			resmi HRD tanpa perlu pusing merangkai kata.
		</p>
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
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400"
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
								d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
							/>
						</svg>
					</div>
					<h2 class="text-xl font-bold text-slate-900 dark:text-white">Detail Teguran / Sanksi</h2>
				</div>
				<PeringatanForm bind:data />
			</div>

			<!-- Desktop Actions -->
			<div
				class="hidden rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:block dark:border-slate-700/60 dark:bg-slate-800/40"
			>
				<PeringatanActions />
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
				<div class="print-area mx-auto overflow-hidden shadow-2xl lg:max-w-3xl print:shadow-none">
					<PeringatanPreview {data} />
				</div>
			</div>

			<!-- Mobile Actions -->
			<div
				class="block rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:hidden dark:border-slate-700/60 dark:bg-slate-800/40 print:hidden"
			>
				<PeringatanActions />
			</div>
		</div>
	</div>

	<!-- SEO Article -->
	<div class="mt-16 print:hidden">
		<SeoContent />
	</div>

	<RelatedTools currentPath="/surat-peringatan" category="Bisnis & HR" />
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
		}
	}
</style>
