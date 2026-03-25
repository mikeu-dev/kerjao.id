<script lang="ts">
	import KwitansiForm from '$lib/components/kwitansi/KwitansiForm.svelte';
	import KwitansiPreview from '$lib/components/kwitansi/KwitansiPreview.svelte';
	import KwitansiActions from '$lib/components/kwitansi/KwitansiActions.svelte';
	import { generateKwitansiNumber, type KwitansiData } from '$lib/utils/kwitansi';

	let data = $state<KwitansiData>({
		kwitansiNumber: '',
		receivedFrom: '',
		amount: 0,
		paymentFor: '',
		city: '',
		date: new Date().toISOString().split('T')[0],
		signeeName: '',
		signeeRole: ''
	});

	$effect(() => {
		if (!data.kwitansiNumber) {
			data.kwitansiNumber = generateKwitansiNumber();
		}
	});
</script>

<svelte:head>
	<title>Buat Kwitansi Kosong / Digital | kerjao.id</title>
	<meta
		name="description"
		content="Buat dan cetak Kwitansi pembayaran kosong secara instan. Dilengkapi dengan fitur kalkulasi otomatis 'Terbilang' ejaan Rupiah ke huruf kata."
	/>
	<meta
		name="keywords"
		content="kwitansi pemabayaran, kwitansi online, cara buat kwitansi, kwitansi kosong, terbilang rupiah, kerjao.id"
	/>
</svelte:head>

<div class="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-12 text-center print:hidden">
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			<span class="bg-linear-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent"
				>Kwitansi</span
			> Generator
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
			Buat tanda terima pembayaran (*receipt*) dengan format klasik yang diakui secara luas. Nominal
			rupiah otomatis dialihbahasakan menjadi huruf terbilang.
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
			Otomatis Hitung 'Terbilang'
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
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400"
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
					<h2 class="text-xl font-bold text-slate-900 dark:text-white">Lengkapi Bukti</h2>
				</div>
				<KwitansiForm bind:data />
			</div>

			<!-- Desktop Actions -->
			<div
				class="hidden rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:block dark:border-slate-700/60 dark:bg-slate-800/40"
			>
				<KwitansiActions />
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
					<span>Tampilan Kertas</span>
				</h2>

				<!-- Printable Kwitansi Area -->
				<!-- Note: Kwitansi relies closely on @media print scaling to fit nicely -->
				<div class="print-area mx-auto overflow-hidden lg:max-w-3xl">
					<KwitansiPreview {data} />
				</div>
			</div>

			<!-- Mobile Actions -->
			<div
				class="block rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:hidden dark:border-slate-700/60 dark:bg-slate-800/40 print:hidden"
			>
				<KwitansiActions />
			</div>
		</div>
	</div>
</div>

<style>
	@media print {
		:global(body) {
			background-color: white !important;
			color: black !important;
			/* Set orientation to landscape explicitly for receipts */
			@page {
				size: landscape;
			}
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
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
