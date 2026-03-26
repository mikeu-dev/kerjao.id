<script lang="ts">
	import InvoiceForm from '$lib/components/invoice/InvoiceForm.svelte';
	import InvoicePreview from '$lib/components/invoice/InvoicePreview.svelte';
	import InvoiceActions from '$lib/components/invoice/InvoiceActions.svelte';
	import SeoContent from '$lib/components/invoice/SeoContent.svelte';
	import RelatedTools from '$lib/components/layout/RelatedTools.svelte';
	import Meta from '$lib/components/seo/Meta.svelte';
	import { generateInvoiceId, type InvoiceData } from '$lib/utils/invoice';

	let data = $state<InvoiceData>({
		invoiceNumber: '',
		issueDate: new Date().toISOString().split('T')[0],
		dueDate: '',
		vendorName: '',
		vendorDetails: '',
		clientName: '',
		clientDetails: '',
		items: [
			{
				id: 'initial',
				description: '',
				quantity: 1,
				unitPrice: 0
			}
		],
		taxRate: 0,
		discount: 0,
		notes: 'Terima kasih atas kepercayaan Anda mengatur proyek ini bersama kami.',
		paymentInfo: ''
	});

	// auto-generate ID once on client
	$effect(() => {
		if (!data.invoiceNumber) {
			data.invoiceNumber = generateInvoiceId();
		}
	});
</script>

<Meta
	title="Invoice Generator Online Gratis - Buat Tagihan Profesional | Kerjao"
	description="Buat tagihan atau Invoice profesional untuk klien kamu secara instan dan gratis. Cocok untuk Freelancer dan Agensi. Konversi langsung menjadi PDF."
	keywords="invoice generator, buat invoice, tagihan online otomatis, aplikasi pembuat faktur"
/>

<div class="relative z-10 mx-auto max-w-7xl px-4 pt-20 lg:pt-32 pb-12 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-12 text-center print:hidden">
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			Invoice <span class="bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
				>Generator</span
			>
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
			Buat dokumen tagihan profesional secara instan.
		</p>
		<div
			class="animate-fade-in mt-6 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm ring-1 ring-blue-500/10 ring-inset dark:border-blue-400/20 dark:bg-blue-900/40 dark:text-blue-300"
		>
			<span class="relative mr-3 flex h-2 w-2">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"
				></span>
				<span class="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
			</span>
			Otomatis terhitung, 100% Client-Side.
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
								d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
							/>
						</svg>
					</div>
					<h2 class="text-xl font-bold text-slate-900 dark:text-white">Isi Data Invoice</h2>
				</div>
				<InvoiceForm bind:data />
			</div>

			<!-- Desktop Actions -->
			<div
				class="hidden rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:block dark:border-slate-700/60 dark:bg-slate-800/40"
			>
				<InvoiceActions {data} />
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
					<span>Pratinjau Kertas</span>
				</h2>

				<!-- Printable Invoice Area -->
				<div
					class="print-area mx-auto overflow-hidden rounded-xl border border-slate-200/50 lg:max-w-3xl print:border-none"
				>
					<InvoicePreview {data} />
				</div>
			</div>

			<!-- Mobile Actions -->
			<div
				class="block rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:hidden dark:border-slate-700/60 dark:bg-slate-800/40 print:hidden"
			>
				<InvoiceActions {data} />
			</div>
		</div>
	</div>

	<!-- SEO Article -->
	<div class="mt-16 print:hidden">
		<SeoContent />
	</div>

	<!-- Related Tools -->
	<RelatedTools currentPath="/invoice" category="Keuangan" />
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
