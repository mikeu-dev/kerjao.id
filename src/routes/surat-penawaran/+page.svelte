<script lang="ts">
	import PenawaranForm from '$lib/components/penawaran/PenawaranForm.svelte';
	import PenawaranPreview from '$lib/components/penawaran/PenawaranPreview.svelte';
	import PenawaranActions from '$lib/components/penawaran/PenawaranActions.svelte';
	import type { PenawaranData } from '$lib/utils/penawaran';
	import { SvelteDate } from 'svelte/reactivity';

	// Generate some default ids
	const g1 = Math.random().toString(36).substr(2, 9);

	// Get a 14-days forward validity
	const today = new SvelteDate();
	const next2Weeks = new SvelteDate(today.getTime());
	next2Weeks.setDate(today.getDate() + 14);

	let data = $state<PenawaranData>({
		senderName: '',
		senderTitle: '',
		senderCompany: '',
		senderAddress: '',
		senderContact: '',
		clientName: '',
		clientCompany: '',
		clientAddress: '',
		letterNumber: '',
		city: '',
		date: today.toISOString().split('T')[0],
		validUntil: next2Weeks.toISOString().split('T')[0],
		subject: 'Penawaran Harga',
		openingText:
			'Dengan hormat,\n\nBersama surat ini, kami bermaksud mengajukan penawaran harga untuk spesifikasi produk/jasa yang sekiranya dapat memenuhi penunjang kebutuhan bisnis dari Perusahaan Bapak/Ibu. Berikut adalah rincian estimasi spesifikasi harga beserta timeline dari kami:',
		items: [{ id: g1, name: 'Setup Sistem Web / Layanan Premium', quantity: 1, price: 5000000 }],
		taxRate: 0,
		discount: 0,
		note: '1. Penawaran ini valid selama 14 hari sejak surat ini diterbitkan.\n2. Termin Pembayaran adalah DP (Down Payment) sejumlah 50% setelah Quotation/PO ini disetujui, dan sisa pelunasan 50% paling lambat 7 hari setelah serah terima pekerjaan (Berita Acara Serah Terima).\n3. Nilai Grand Total di atas sudah bersih, sudah mencakup instalasi sistem secara keseluruhan sesuai ruang lingkup yang disepakati.'
	});
</script>

<svelte:head>
	<title>Surat Penawaran Harga (Quotation) | kerjao.id</title>
	<meta
		name="description"
		content="Buat dan susun proposal Surat Penawaran Harga (Quotation) B2B resmi secara cepat. Tambahkan rincian tabel, diskon khusus, dan catatan termin."
	/>
	<meta
		name="keywords"
		content="surat penawaran harga, contoh quotation, form penawaran b2b, invoice maker indonesia, kerjao.id"
	/>
</svelte:head>

<div class="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-12 text-center print:hidden">
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			Draf <span class="bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent"
				>Penawaran Harga</span
			> (Quotation)
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
			Sambut lebih banyak *deal* B2B! Rancang dokumen Penawaran/Quotation formal dengan tabel
			kalkulasi otomatis untuk segera dikirimkan ke calon klien Anda.
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
								d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
							/>
						</svg>
					</div>
					<h2 class="text-xl font-bold text-slate-900 dark:text-white">Susun Proposal Penawaran</h2>
				</div>
				<PenawaranForm bind:data />
			</div>

			<!-- Desktop Actions -->
			<div
				class="hidden rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:block dark:border-slate-700/60 dark:bg-slate-800/40"
			>
				<PenawaranActions />
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
					<span>Tampilan Kertas A4 Proposal Resmi</span>
				</h2>

				<!-- Printable Surat Area -->
				<div class="print-area mx-auto overflow-hidden shadow-2xl lg:max-w-4xl print:shadow-none">
					<PenawaranPreview {data} />
				</div>
			</div>

			<!-- Mobile Actions -->
			<div
				class="block rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:hidden dark:border-slate-700/60 dark:bg-slate-800/40 print:hidden"
			>
				<PenawaranActions />
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
