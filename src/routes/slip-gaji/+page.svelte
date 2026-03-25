<script lang="ts">
	import SlipForm from '$lib/components/slip/SlipForm.svelte';
	import SlipPreview from '$lib/components/slip/SlipPreview.svelte';
	import SlipActions from '$lib/components/slip/SlipActions.svelte';
	import SeoContent from '$lib/components/slip/SeoContent.svelte';
	import RelatedTools from '$lib/components/layout/RelatedTools.svelte';
	import Meta from '$lib/components/seo/Meta.svelte';
	import type { SlipData } from '$lib/utils/slip';

	// Generate some default ids
	const g1 = Math.random().toString(36).substr(2, 9);
	const g2 = Math.random().toString(36).substr(2, 9);
	const p1 = Math.random().toString(36).substr(2, 9);

	let data = $state<SlipData>({
		companyName: '',
		companyAddress: '',
		periodMonth: 'November',
		periodYear: '2024',
		printDate: new Date().toISOString().split('T')[0],
		employeeName: '',
		employeeID: '',
		employeeRole: '',
		incomes: [
			{ id: g1, name: 'Gaji Pokok', amount: 5000000 },
			{ id: g2, name: 'Tunjangan Transport', amount: 500000 }
		],
		deductions: [{ id: p1, name: 'BPJS Kesehatan', amount: 50000 }]
	});
</script>

<Meta
	title="Buat Slip Gaji Karyawan Online - Template Profesional | Kerjao"
	description="Buat dan cetak dokumen Slip Gaji (Pay Slip) karyawan resmi untuk UMKM dan Perusahaan. Terintegrasi rincian Take Home Pay dan asuransi otomatis."
	keywords="slip gaji karyawan, contoh slip gaji, pay slip generator, bukti pembayaran gaji online"
/>

<div class="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-12 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-12 text-center print:hidden">
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			Draf <span class="bg-linear-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent"
				>Slip Gaji</span
			> Otomatis
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
			Cetakan struk bayaran (Pay Slip) profesional untuk keperluan pembukuan bisnis, usaha kecil,
			maupun pembuktian pinjaman bank. Ringkas, jelas, dan otomatis mengalkulasi nilai bersih.
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
								d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h2 class="text-xl font-bold text-slate-900 dark:text-white">Rincian Komponen Gaji</h2>
				</div>
				<SlipForm bind:data />
			</div>

			<!-- Desktop Actions -->
			<div
				class="hidden rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:block dark:border-slate-700/60 dark:bg-slate-800/40"
			>
				<SlipActions />
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
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
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
					<span>Tampilan Kertas A5 (Setengah Hal)</span>
				</h2>

				<!-- Printable Surat Area -->
				<div class="print-area mx-auto overflow-hidden shadow-2xl lg:max-w-3xl print:shadow-none">
					<SlipPreview {data} />
				</div>
			</div>

			<!-- Mobile Actions -->
			<div
				class="block rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:hidden dark:border-slate-700/60 dark:bg-slate-800/40 print:hidden"
			>
				<SlipActions />
			</div>
		</div>
	</div>

	<!-- SEO Article -->
	<div class="mt-16 print:hidden">
		<SeoContent />
	</div>

	<RelatedTools currentPath="/slip-gaji" category="Bisnis & HR" />
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
