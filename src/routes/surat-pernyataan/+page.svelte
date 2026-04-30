<script lang="ts">
	import PernyataanForm from '$lib/components/umum/PernyataanForm.svelte';
	import PernyataanPreview from '$lib/components/umum/PernyataanPreview.svelte';
	import KontrakActions from '$lib/components/kontrak/KontrakActions.svelte';
	import RelatedTools from '$lib/components/layout/RelatedTools.svelte';
	import Meta from '$lib/components/seo/Meta.svelte';
	import type { PernyataanData } from '$lib/utils/umum';
	import { onMount } from 'svelte';

	let themeColor = $state('#4f46e5');
	let data = $state<PernyataanData>({
		nama: '',
		nik: '',
		alamat: '',
		judul: 'SURAT PERNYATAAN TIDAK TERIKAT KONTRAK',
		isi: 'Menyatakan bahwa saya saat ini tidak sedang terikat kontrak kerja dengan pihak manapun, sehingga saya bersedia untuk mengikuti proses seleksi dan bekerja apabila diterima.',
		tanggal: new Date().toISOString().split('T')[0],
		lokasi: 'Jakarta'
	});

	// Persistence logic
	const STORAGE_KEY = 'kerjao-pernyataan';
	$effect(() => {
		if (data) localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
	});

	onMount(() => {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved) {
			try {
				data = { ...data, ...JSON.parse(saved) };
			} catch (e) {}
		}
	});

	function handlePrint() {
		window.print();
	}

	async function handleCopy() {
		const text = `
${data.judul}
Nama: ${data.nama}
NIK: ${data.nik}
Isi: ${data.isi}
		`.trim();
		await navigator.clipboard.writeText(text);
	}
</script>

<Meta
	title="Generator Surat Pernyataan Umum Online & Gratis - Kerjao.id"
	description="Buat berbagai macam surat pernyataan resmi secara instan. Template fleksibel, bisa diedit sesuka hati, dan siap cetak."
/>

<div class="min-h-screen bg-slate-50 pt-20 pb-20 lg:pt-32 dark:bg-slate-950">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center print:hidden">
			<h1
				class="text-4xl font-extrabold tracking-tight text-slate-900 transition-all sm:text-5xl dark:text-white"
			>
				Surat <span style="color: {themeColor}">Pernyataan</span>
			</h1>
			<p class="mt-4 text-lg text-slate-500 dark:text-slate-400">
				Template fleksibel untuk segala jenis surat pernyataan formal.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Col Left: Form -->
			<div class="space-y-8 print:hidden">
				<div
					class="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
				>
					<PernyataanForm bind:data />
				</div>

				<KontrakActions onPrint={handlePrint} onCopy={handleCopy} bind:themeColor />
			</div>

			<!-- Col Right: Preview -->
			<div class="relative">
				<div
					class="sticky top-32 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800"
				>
					<PernyataanPreview {data} {themeColor} />
				</div>
			</div>
		</div>

		<!-- Related Tools -->
		<div class="mt-24 print:hidden">
			<RelatedTools currentPath="/surat-pernyataan" category="Personal & Umum" />
		</div>
	</div>
</div>
