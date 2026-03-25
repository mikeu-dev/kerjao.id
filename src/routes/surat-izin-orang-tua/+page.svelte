<script lang="ts">
	import IzinOrtuForm from '$lib/components/umum/IzinOrtuForm.svelte';
	import IzinOrtuPreview from '$lib/components/umum/IzinOrtuPreview.svelte';
	import KontrakActions from '$lib/components/kontrak/KontrakActions.svelte';
	import RelatedTools from '$lib/components/layout/RelatedTools.svelte';
	import Meta from '$lib/components/seo/Meta.svelte';
	import type { IzinOrtuData } from '$lib/utils/umum';
	import { onMount } from 'svelte';

	let themeColor = $state('#4f46e5');
	let data = $state<IzinOrtuData>({
		namaAnak: '',
		nikAnak: '',
		tempatLahirAnak: '',
		tanggalLahirAnak: '2005-01-01',
		alamatAnak: '',
		namaOrtu: '',
		nikOrtu: '',
		pekerjaanOrtu: '',
		alamatOrtu: '',
		tujuanIzin: 'Memberikan izin untuk melamar pekerjaan',
		lokasi: 'Jakarta',
		tanggal: new Date().toISOString().split('T')[0]
	});

	// Persistence logic
	const STORAGE_KEY = 'kerjao-izin-ortu';
	$effect(() => {
		if (data) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
		}
	});

	onMount(() => {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved) {
			try {
				data = { ...data, ...JSON.parse(saved) };
			} catch (e) { console.error(e); }
		}
	});

	function handlePrint() {
		window.print();
	}

	async function handleCopy() {
		const text = `
SURAT IZIN ORANG TUA
Orang Tua: ${data.namaOrtu}
Memberikan Izin Kepada: ${data.namaAnak}
Tujuan: ${data.tujuanIzin}
		`.trim();
		await navigator.clipboard.writeText(text);
	}
</script>

<Meta 
	title="Generator Surat Izin Orang Tua Online & Gratis - Kerjao.id"
	description="Buat surat izin orang tua untuk melamar kerja, kegiatan sekolah, atau izin lainnya secara otomatis. Mudah, cepat, dan siap cetak."
/>

<div class="min-h-screen bg-slate-50 pt-32 pb-20 dark:bg-slate-950">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center print:hidden">
			<h1 class="text-4xl font-extrabold tracking-tight text-slate-900 transition-all dark:text-white sm:text-5xl">
				Izin <span style="color: {themeColor}">Orang Tua</span>
			</h1>
			<p class="mt-4 text-lg text-slate-500 dark:text-slate-400">
				Mudah buat surat izin orang tua/wali untuk berbagai keperluan administratif.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Col Left: Form -->
			<div class="space-y-8 print:hidden">
				<div class="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
					<IzinOrtuForm bind:data />
				</div>
				
				<KontrakActions onPrint={handlePrint} onCopy={handleCopy} bind:themeColor />
			</div>

			<!-- Col Right: Preview -->
			<div class="relative">
				<div class="sticky top-32 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800">
					<IzinOrtuPreview {data} {themeColor} />
				</div>
			</div>
		</div>

		<!-- Related Tools -->
		<div class="mt-24 print:hidden">
			<RelatedTools currentPath="/surat-izin-orang-tua" category="Personal & Umum" />
		</div>
	</div>
</div>
