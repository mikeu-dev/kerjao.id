<script lang="ts">
	import SpkForm from '$lib/components/spk/SpkForm.svelte';
	import SpkPreview from '$lib/components/spk/SpkPreview.svelte';
	import SpkActions from '$lib/components/spk/SpkActions.svelte';
	import SeoContent from '$lib/components/spk/SeoContent.svelte';
	import Meta from '$lib/components/seo/Meta.svelte';
	import { generateSpkNumber, type SPKData } from '$lib/utils/spk';

	let data = $state<SPKData>({
		nomorSpk: generateSpkNumber(),
		tanggalSpk: new Date().toISOString().split('T')[0],
		pemberiKerja: { 
			nama: '', 
			jabatan: '', 
			perusahaan: '', 
			alamat: '', 
			kontak: '' 
		},
		pelaksana: { 
			nama: '', 
			jabatan: '', 
			perusahaan: '', 
			alamat: '', 
			kontak: '' 
		},
		proyek: {
			nama: '',
			lokasi: '',
			deskripsi: '',
			ruangLingkup: []
		},
		waktu: {
			mulai: '',
			selesai: ''
		},
		biaya: {
			nominal: 0,
			terbilang: '',
			catatan: ''
		}
	});
</script>

<Meta
	title="Buat Surat Perintah Kerja (SPK) Online Gratis | Kerjao"
	description="Generator Surat Perintah Kerja (SPK) formal gratis. Draf instruksi kerja siap cetak untuk vendor, freelancer, atau kontraktor di Indonesia."
	keywords="surat perintah kerja, spk online, buat spk gratis, draf work order indonesia, administrasi proyek"
/>

<div class="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-12 text-center print:hidden">
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			<span class="bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Surat Perintah</span> Kerja
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
			Tandai dimulainya proyek Anda dengan instruksi resmi bergaya profesional.
		</p>
	</div>

	<!-- Main Grid -->
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
		<!-- Sidebar Form (Kiri) -->
		<div class="flex flex-col gap-6 lg:col-span-12 xl:col-span-5 print:hidden">
			<div class="rounded-3xl border border-slate-200/60 bg-white/60 p-6 shadow-xl backdrop-blur-xl sm:p-8 dark:border-slate-700/60 dark:bg-slate-800/60">
				<SpkForm bind:data />
			</div>
			<div class="rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-800/40">
				<SpkActions />
			</div>
		</div>

		<!-- Preview Area (Kanan) -->
		<div class="flex flex-col gap-6 lg:col-span-12 xl:col-span-7">
			<div class="relative rounded-3xl border border-slate-200/60 bg-slate-100/50 p-4 shadow-inner sm:p-8 dark:border-slate-700/60 dark:bg-slate-900/50 print:border-none print:bg-transparent print:p-0 print:shadow-none">
				<h2 class="mb-6 flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white print:hidden">
					<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
						<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
						</svg>
					</div>
					<span>Pratinjau Dokumen</span>
				</h2>

				<!-- Printable Area -->
				<div class="preview-container mx-auto overflow-hidden bg-white shadow-2xl print:shadow-none">
					<SpkPreview {data} />
				</div>
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
		}
		:global(nav), :global(header), :global(footer), :global(.print\:hidden) {
			display: none !important;
		}
		.preview-container {
			width: 100% !important;
			padding: 0 !important;
			margin: 0 !important;
		}
	}
</style>
