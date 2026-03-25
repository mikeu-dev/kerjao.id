<script lang="ts">
	import KalkulatorForm from '$lib/components/kalkulator/KalkulatorForm.svelte';
	import SlipGajiPreview from '$lib/components/kalkulator/SlipGajiPreview.svelte';
	import KalkulatorActions from '$lib/components/kalkulator/KalkulatorActions.svelte';
	import { calculateGaji, type GajiData } from '$lib/utils/calculateGaji';

	let data = $state<GajiData>({
		gajiPokok: 5000000,
		tunjanganTetap: 0,
		tunjanganTidakTetap: 0,
		statusPajak: 'TK/0',
		potonganBPJSKesehatan: true,
		potonganJHT: true,
		potonganJP: true,
		potonganLainnya: 0
	});

	let result = $derived(calculateGaji(data));
</script>

<svelte:head>
	<title>Kalkulator Gaji & Take Home Pay (THP) | kerjao.id</title>
	<meta
		name="description"
		content="Hitung Gaji Bersih (Take Home Pay) kamu dengan mudah. Cek potongan Pajak PPh 21 dan BPJS Ketenagakerjaan & Kesehatan secara akurat."
	/>
	<meta
		name="keywords"
		content="kalkulator gaji, hitung thp, take home pay, kalkulator pph 21 ter 2024, bpjs ketenagakerjaan, bpjs kesehatan, slip gaji"
	/>
</svelte:head>

<div class="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-12 text-center print:hidden">
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			Kalkulator <span
				class="bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
				>Gaji & THP</span
			>
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
			Simulasi perhitungan gaji bersih (*Take-Home Pay*) dengan potongan BPJS dan estimasi PPh 21
			terbaru.
		</p>
		<div
			class="animate-fade-in mt-6 inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm ring-1 ring-emerald-500/10 ring-inset dark:border-emerald-400/20 dark:bg-emerald-900/40 dark:text-emerald-300"
		>
			<span class="relative mr-3 flex h-2 w-2">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
				></span>
				<span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
			</span>
			Otomatis, Gratis, Tidak Perlu Login
		</div>
	</div>

	<!-- Main Content Grid -->
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
		<!-- Sidebar Form (Kiri) -->
		<div class="flex flex-col gap-6 lg:col-span-5 xl:col-span-4 print:hidden">
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
								d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h2 class="text-xl font-bold text-slate-900 dark:text-white">Rincian Gaji</h2>
				</div>
				<KalkulatorForm bind:data />
			</div>

			<!-- Desktop Actions -->
			<div
				class="hidden rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:block dark:border-slate-700/60 dark:bg-slate-800/40"
			>
				<KalkulatorActions {result} />
			</div>
		</div>

		<!-- Preview Area (Kanan) -->
		<div class="flex flex-col gap-6 lg:col-span-7 xl:col-span-8">
			<!-- Result Panel -->
			<div
				class="relative rounded-3xl border border-slate-200/60 bg-slate-100/50 p-6 shadow-inner sm:p-8 dark:border-slate-700/60 dark:bg-slate-900/50 print:border-none print:bg-transparent print:p-0 print:shadow-none"
			>
				<h2
					class="mb-6 flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white print:hidden"
				>
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
								d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							/>
						</svg>
					</div>
					<span>Hasil Perhitungan</span>
				</h2>

				<!-- Printable Slip Gaji Area -->
				<div class="print-area mx-auto lg:max-w-xl">
					<SlipGajiPreview {result} />
				</div>
			</div>

			<!-- Mobile Actions -->
			<div
				class="block rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:hidden dark:border-slate-700/60 dark:bg-slate-800/40 print:hidden"
			>
				<KalkulatorActions {result} />
			</div>
		</div>
	</div>

	<!-- SEO Explanation Box -->
	<div class="mx-auto mt-20 max-w-4xl print:hidden">
		<div
			class="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800"
		>
			<h3 class="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
				Bagaimana Cara Hitung Gaji Bersih?
			</h3>
			<div
				class="prose max-w-none text-slate-600 prose-slate dark:text-slate-400 dark:prose-invert"
			>
				<p>
					Gaji Bersih atau <em>Take-Home Pay</em> (THP) merupakan upah final yang dibawa pulang oleh pekerja
					setelah dikurangi kewajiban-kewajiban sesuai perundang-undangan di Indonesia:
				</p>
				<ul class="mt-4 list-disc space-y-2 pl-5">
					<li>
						<strong>BPJS Ketenagakerjaan (JHT & JP):</strong> Secara total, pekerja menanggung 3% pemotongan
						(2% Jaminan Hari Tua dan 1% Jaminan Pensiun).
					</li>
					<li>
						<strong>BPJS Kesehatan:</strong> Pekerja terdaftar wajib menanggung potongan sebesar 1% dari
						nilai Gaji Pokok & Tunjangan Tetap (dengan batas upah tertinggi Rp12.000.000).
					</li>
					<li>
						<strong>PPh 21 (Pajak Penghasilan):</strong> Potongan bervariasi bergantung pada status Pernikahan/PTKP
						dan nilai penghasilan bruto sesuai skema TER terbaru 2024.
					</li>
				</ul>
				<p class="mt-4 text-sm text-slate-500 italic">
					*Catatan: Kalkulator ini memberikan nilai estimasi THP. Implementasi potongan pajak (PPh
					21 TER) di perusahaan Anda mungkin memiliki sedikit penyesuaian perhitungan bulanan.
				</p>
			</div>
		</div>
	</div>
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
