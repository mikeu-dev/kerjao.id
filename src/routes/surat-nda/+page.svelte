<script lang="ts">
	import NdaForm from '$lib/components/nda/NdaForm.svelte';
	import NdaPreview from '$lib/components/nda/NdaPreview.svelte';
	import NdaActions from '$lib/components/nda/NdaActions.svelte';
	import SeoContent from '$lib/components/nda/SeoContent.svelte';
	import RelatedTools from '$lib/components/layout/RelatedTools.svelte';
	import Meta from '$lib/components/seo/Meta.svelte';
	import { generateNDANumber, type NDAData } from '$lib/utils/nda';

	let data = $state<NDAData>({
		pihak1: { nama: '', perusahaan: '', alamat: '', jabatan: '' },
		pihak2: { nama: '', perusahaan: '', alamat: '', jabatan: '' },
		tujuan: '',
		jangkaWaktu: '2 (dua) tahun',
		tanggal: new Date().toISOString().split('T')[0],
		lokasi: 'Jakarta'
	});

	function handlePrint() {
		window.print();
	}

	async function handleCopy() {
		const text = `
PERJANJIAN KERAHASIAAN (NDA)
Tujuan: ${data.tujuan}
Pihak Pertama: ${data.pihak1.perusahaan} (${data.pihak1.nama})
Pihak Kedua: ${data.pihak2.perusahaan} (${data.pihak2.nama})
Masa Berlaku: ${data.jangkaWaktu}
Tanggal: ${data.tanggal}
		`.trim();
		await navigator.clipboard.writeText(text);
	}
</script>

<Meta 
	title="Generator Surat Perjanjian Kerahasiaan (NDA) Hukum - Kerjao.id"
	description="Buat draf Surat NDA profesional untuk melindungi rahasia bisnis Anda. Gratis, otomatis, dan sesuai standar hukum Indonesia."
/>

<div class="min-h-screen bg-slate-50 pt-32 pb-20 dark:bg-slate-950">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center print:hidden">
			<h1 class="text-4xl font-extrabold tracking-tight text-slate-900 transition-all dark:text-white sm:text-5xl">
				NDA <span class="text-indigo-600">Generator</span>
			</h1>
			<p class="mt-4 text-lg text-slate-500 dark:text-slate-400">
				Lindungi ide dan rahasia bisnis Anda dengan dokumen hukum yang solid.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Col Left: Form -->
			<div class="space-y-8 print:hidden">
				<div class="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
					<NdaForm bind:data />
				</div>
				
				<NdaActions onPrint={handlePrint} onCopy={handleCopy} />
			</div>

			<!-- Col Right: Preview -->
			<div class="relative">
				<div class="sticky top-32 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800">
					<NdaPreview {data} />
				</div>
			</div>
		</div>

		<!-- SEO Article -->
		<div class="mt-24 print:hidden">
			<SeoContent />
		</div>

		<!-- Related Tools -->
		<RelatedTools currentPath="/surat-nda" category="Bisnis & HR" />
	</div>
</div>
