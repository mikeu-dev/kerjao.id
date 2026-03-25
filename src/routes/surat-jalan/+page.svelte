<script lang="ts">
	import JalanForm from '$lib/components/jalan/JalanForm.svelte';
	import JalanPreview from '$lib/components/jalan/JalanPreview.svelte';
	import JalanActions from '$lib/components/jalan/JalanActions.svelte';
	import type { JalanData } from '$lib/utils/surat-jalan';
	import { SvelteDate } from 'svelte/reactivity';

	// Generate some default ids
	const g1 = Math.random().toString(36).substr(2, 9);
	const g2 = Math.random().toString(36).substr(2, 9);

	const today = new SvelteDate();

	let data = $state<JalanData>({
		senderCompany: '',
		senderAddress: '',
		senderContact: '',
		receiverCompany: '',
		receiverName: '',
		receiverAddress: '',
		receiverContact: '',
		driverName: '',
		vehicleNumber: '',
		shippingMethod: '',
		suratJalanNumber: 'SJ-2024-001A',
		poReference: '',
		date: today.toISOString().split('T')[0],
		items: [
			{ id: g1, kode: '194XXZ', name: 'Server Rack 42U APC', quantity: 2, unit: 'Unit', note: '' },
			{
				id: g2,
				kode: 'CBL-90',
				name: 'Kabel UTP Cat6 305m (Box)',
				quantity: 15,
				unit: 'Box',
				note: 'Packing Kayu'
			}
		],
		note: 'Mohon dicek kembali fisik barang dengan seksama. Kerusakan tidak dilayani apabila supir sudah meninggalkan lokasi.'
	});
</script>

<svelte:head>
	<title>Surat Jalan (Delivery Note) Generator | kerjao.id</title>
	<meta
		name="description"
		content="Buat dan cetak Surat Jalan logistik pengiriman barang (Delivery Note) untuk keperluan pengiriman supir/armada ke gudang klien. Cepat, instan, gratis."
	/>
	<meta
		name="keywords"
		content="surat jalan, delivery note, tanda terima barang, surat pengiriman barang, template surat jalan gudang, cetak surat jalan"
	/>
</svelte:head>

<div class="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-12 text-center print:hidden">
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			Draf Dokumen <span
				class="bg-linear-to-r from-violet-500 to-fuchsia-600 bg-clip-text text-transparent"
				>Surat Jalan</span
			>
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
			Lindungi kelancaran logistik fisik Anda. Cetak surat jalan / Tanda Terima Barang PDF dengan
			struktur tanda tangan 3 Pihak: Pengirim, Supir, Penerima.
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
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/50 dark:text-violet-400"
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
								d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
							/>
						</svg>
					</div>
					<h2 class="text-xl font-bold text-slate-900 dark:text-white">Data Logistik Pengiriman</h2>
				</div>
				<JalanForm bind:data />
			</div>

			<!-- Desktop Actions -->
			<div
				class="hidden rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:block dark:border-slate-700/60 dark:bg-slate-800/40"
			>
				<JalanActions />
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
					<span>Tampilan Kertas A4/A5 Surat Jalan Fisik</span>
				</h2>

				<!-- Printable Surat Area -->
				<div class="print-area mx-auto overflow-hidden shadow-2xl lg:max-w-4xl print:shadow-none">
					<JalanPreview {data} />
				</div>
			</div>

			<!-- Mobile Actions -->
			<div
				class="block rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:hidden dark:border-slate-700/60 dark:bg-slate-800/40 print:hidden"
			>
				<JalanActions />
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
