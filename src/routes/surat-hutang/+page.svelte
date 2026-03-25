<script lang="ts">
	import HutangForm from '$lib/components/hutang/HutangForm.svelte';
	import HutangPreview from '$lib/components/hutang/HutangPreview.svelte';
	import HutangActions from '$lib/components/hutang/HutangActions.svelte';
	import SeoContent from '$lib/components/hutang/SeoContent.svelte';
	import Meta from '$lib/components/seo/Meta.svelte';
	import type { HutangData } from '$lib/utils/surat-hutang';
	import { SvelteDate } from 'svelte/reactivity';

	const today = new SvelteDate();
	const nextYear = new SvelteDate(today.getTime());
	nextYear.setFullYear(today.getFullYear() + 1);

	let data = $state<HutangData>({
		lenderName: '',
		lenderNik: '',
		lenderAddress: '',
		lenderJob: '',
		borrowerName: '',
		borrowerNik: '',
		borrowerAddress: '',
		borrowerJob: '',
		loanAmount: 15000000,
		loanPurpose: 'Modal Usaha Toko Kelontong',
		loanDate: today.toISOString().split('T')[0],
		dueDate: nextYear.toISOString().split('T')[0],
		handoverMethod: 'Transfer ke Rekening BCA 1234567',
		collateral: 'Sertifikat SHM Tanah Seluas 50m2 / BPKB Mobil',
		latePenalty: '',
		witness1: '',
		witness2: '',
		city: 'Jakarta'
	});
</script>

<Meta
	title="Buat Surat Perjanjian Hutang Piutang Bermaterai | Kerjao"
	description="Buat Surat Perjanjian Hutang Piutang bermaterai resmi. Amankan dana pinjaman perorangan/bisnis, cegah sengketa dengan format legal perdata."
	keywords="surat perjanjian hutang, hutang piutang, pinjam uang, loan agreement"
/>

<div class="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-12 text-center print:hidden">
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			Draf Akta <span
				class="bg-linear-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent"
				>Hutang Piutang</span
			>
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
			Lindungi aset finansial Anda secara hukum Perdata. Buat kontrak pinjam-meminjam uang resmi
			lengkap dengan pasal penyitaan jaminan dan sanksi denda.
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
								d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
							/>
						</svg>
					</div>
					<h2 class="text-xl font-bold text-slate-900 dark:text-white">Detail Kontrak Finansial</h2>
				</div>
				<HutangForm bind:data />
			</div>

			<!-- Desktop Actions -->
			<div
				class="hidden rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:block dark:border-slate-700/60 dark:bg-slate-800/40"
			>
				<HutangActions />
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
					<span>Tampilan Kertas A4 Perjanjian Hukum</span>
				</h2>

				<!-- Printable Surat Area -->
				<div class="print-area mx-auto overflow-hidden shadow-2xl lg:max-w-4xl print:shadow-none">
					<HutangPreview {data} />
				</div>
			</div>

			<!-- Mobile Actions -->
			<div
				class="block rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:hidden dark:border-slate-700/60 dark:bg-slate-800/40 print:hidden"
			>
				<HutangActions />
			</div>
		</div>
	</div>

	<!-- SEO Article -->
	<div class="mt-16 print:hidden">
		<SeoContent />
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
