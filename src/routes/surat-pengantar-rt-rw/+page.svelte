<script lang="ts">
	import RtRwForm from '$lib/components/umum/RtRwForm.svelte';
	import RtRwPreview from '$lib/components/umum/RtRwPreview.svelte';
	import KontrakActions from '$lib/components/kontrak/KontrakActions.svelte';
	import RelatedTools from '$lib/components/layout/RelatedTools.svelte';
	import Meta from '$lib/components/seo/Meta.svelte';
	import { generateDocNumber, type RtRwData } from '$lib/utils/umum';
	import { onMount } from 'svelte';

	let themeColor = $state('#475569');
	let data = $state<RtRwData>({
		nama: '',
		nik: '',
		tempatLahir: '',
		tanggalLahir: '1990-01-01',
		pekerjaan: '',
		agama: '',
		alamat: '',
		rt: '001',
		rw: '001',
		keperluan: 'Pengurusan KTP',
		nomorSurat: generateDocNumber('RT-RW'),
		tanggal: new Date().toISOString().split('T')[0],
		ketuaRt: '',
		ketuaRw: ''
	});

	// Persistence logic
	const STORAGE_KEY = 'kerjao-rtrw';
	$effect(() => {
		if (data) localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
	});

	onMount(() => {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved) {
			try {
				data = { ...data, ...JSON.parse(saved) };
			} catch {
				// Ignore invalid JSON
			}
		}
	});

	function handlePrint() {
		window.print();
	}

	async function handleCopy() {
		const text = `
SURAT PENGANTAR RT/RW
Nama: ${data.nama}
NIK: ${data.nik}
Alamat: ${data.alamat} (RT ${data.rt} RW ${data.rw})
Keperluan: ${data.keperluan}
		`.trim();
		await navigator.clipboard.writeText(text);
	}
</script>

<Meta
	title="Generator Surat Pengantar RT/RW Online & Gratis - Kerjao.id"
	description="Buat surat pengantar RT/RW resmi untuk urus KTP, domisili, atau keperluan birokrasi lainnya secara instan dan gratis."
/>

<div class="min-h-screen bg-slate-50 pt-20 pb-20 lg:pt-32 dark:bg-slate-950">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center print:hidden">
			<h1
				class="text-4xl font-extrabold tracking-tight text-slate-900 transition-all sm:text-5xl dark:text-white"
			>
				Pengantar <span style="color: {themeColor}">RT/RW</span>
			</h1>
			<p class="mt-4 text-lg text-slate-500 dark:text-slate-400">
				Solusi cepat buat surat pengantar tanpa harus ketik manual.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Col Left: Form -->
			<div class="space-y-8 print:hidden">
				<div
					class="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
				>
					<RtRwForm bind:data />
				</div>

				<KontrakActions onPrint={handlePrint} onCopy={handleCopy} bind:themeColor />
			</div>

			<!-- Col Right: Preview -->
			<div class="relative">
				<div
					class="sticky top-32 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800"
				>
					<RtRwPreview {data} />
				</div>
			</div>
		</div>

		<!-- Related Tools -->
		<div class="mt-24 print:hidden">
			<RelatedTools currentPath="/surat-pengantar-rt-rw" category="Personal & Umum" />
		</div>
	</div>
</div>
