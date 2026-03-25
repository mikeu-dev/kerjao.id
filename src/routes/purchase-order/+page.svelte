<script lang="ts">
	import POForm from '$lib/components/po/POForm.svelte';
	import POPreview from '$lib/components/po/POPreview.svelte';
	import POActions from '$lib/components/po/POActions.svelte';
	import type { POData } from '$lib/utils/po';
	import { SvelteDate } from 'svelte/reactivity';

	// Generate some default ids
	const g1 = Math.random().toString(36).substr(2, 9);
	const g2 = Math.random().toString(36).substr(2, 9);

	// Get a 7-days forward shipping date
	const today = new SvelteDate();
	const nextWeek = new SvelteDate(today.getTime());
	nextWeek.setDate(today.getDate() + 7);

	let data = $state<POData>({
		buyerName: '',
		buyerCompany: '',
		buyerAddress: '',
		buyerContact: '',
		shippingAddress: '',
		shippingDate: nextWeek.toISOString().split('T')[0],
		shippingMethod: 'Kargo / Darat',
		vendorCompany: '',
		vendorAddress: '',
		vendorContact: '',
		poNumber: 'PO-001',
		date: today.toISOString().split('T')[0],
		paymentTerms: 'Net 30',
		items: [
			{
				id: g1,
				kode: 'MTR-01',
				name: 'Semen Portland (Sak 50kg)',
				quantity: 200,
				unit: 'Sak',
				price: 65000
			},
			{ id: g2, kode: 'MTR-02', name: 'Batu Bata Merah', quantity: 5000, unit: 'Pcs', price: 900 }
		],
		taxRate: 11,
		discount: 0,
		shippingCost: 500000,
		note: 'Tolong pastikan penurunan barang hati-hati, ada pengaman terpal khusus agar bata tidak pecah.'
	});
</script>

<svelte:head>
	<title>Purchase Order (PO) Generator | kerjao.id</title>
	<meta
		name="description"
		content="Gunakan generator Purchase Order (Surat Pemesanan Pembelian) B2B ini untuk mengamankan stok barang. Hitung kuantitas, ongkir, pajak, & PDF instan."
	/>
	<meta
		name="keywords"
		content="purchase order, contoh po, buat po gratis, cara membuat purchase order, surat pemesanan barang b2b"
	/>
</svelte:head>

<div class="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-12 text-center print:hidden">
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			Draf <span class="bg-linear-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent"
				>Purchase Order</span
			> B2B
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
			Sistem Pengadaan Barang (Procurement) jadi super efisien. Buat dan kirim *Purcase Order* (PO)
			resmi ke Vendor Anda lengkap dengan destinasi pengiriman.
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
								d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					</div>
					<h2 class="text-xl font-bold text-slate-900 dark:text-white">
						Isi Formulir Pemesanan Barang
					</h2>
				</div>
				<POForm bind:data />
			</div>

			<!-- Desktop Actions -->
			<div
				class="hidden rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:block dark:border-slate-700/60 dark:bg-slate-800/40"
			>
				<POActions />
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
					<span>Tampilan Kertas A4 Dokumen Pembelian (PO)</span>
				</h2>

				<!-- Printable Surat Area -->
				<div class="print-area mx-auto overflow-hidden shadow-2xl lg:max-w-4xl print:shadow-none">
					<POPreview {data} />
				</div>
			</div>

			<!-- Mobile Actions -->
			<div
				class="block rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:hidden dark:border-slate-700/60 dark:bg-slate-800/40 print:hidden"
			>
				<POActions />
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
