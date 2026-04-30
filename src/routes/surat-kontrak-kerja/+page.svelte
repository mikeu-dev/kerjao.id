<script lang="ts">
	import KontrakForm from '$lib/components/kontrak/KontrakForm.svelte';
	import KontrakPreview from '$lib/components/kontrak/KontrakPreview.svelte';
	import KontrakActions from '$lib/components/kontrak/KontrakActions.svelte';
	import SeoContent from '$lib/components/kontrak/SeoContent.svelte';
	import RelatedTools from '$lib/components/layout/RelatedTools.svelte';
	import Meta from '$lib/components/seo/Meta.svelte';
	import { generateKontrakNumber, type KontrakData } from '$lib/utils/kontrak-kerja';

	let themeColor = $state('#4f46e5');

	let data = $state<KontrakData>({
		perusahaan: {
			nama: '',
			alamat: '',
			wakil: '',
			jabatanWakil: 'Direktur'
		},
		karyawan: {
			nama: '',
			nik: '',
			tempatLahir: '',
			tanggalLahir: '1995-01-01',
			alamat: '',
			jabatan: ''
		},
		tipe: 'PKWT',
		masaKerja: '12 Bulan',
		tanggalMulai: new Date().toISOString().split('T')[0],
		tanggalSelesai: '',
		gajiPokok: 5000000,
		tunjanganTetap: 0,
		lokasiKerja: 'Jakarta',
		tanggalTtd: new Date().toISOString().split('T')[0],
		nomorSurat: generateKontrakNumber()
	});

	function handlePrint() {
		window.print();
	}

	async function handleCopy() {
		const text = `
SURAT PERJANJIAN KERJA (${data.tipe})
Nomor: ${data.nomorSurat}
Perusahaan: ${data.perusahaan.nama}
Karyawan: ${data.karyawan.nama}
Jabatan: ${data.karyawan.jabatan}
Upah: Rp ${(data.gajiPokok + data.tunjanganTetap).toLocaleString('id-ID')}
		`.trim();
		await navigator.clipboard.writeText(text);
	}
</script>

<Meta
	title="Generator Surat Perjanjian Kerja (PKWT/PKWTT) Online - Kerjao.id"
	description="Buat kontrak kerja resmi (PKWT/PKWTT) sesuai UU Cipta Kerja. Gratis, otomatis, dan dapat dipersonalisasi dengan branding perusahaan Anda."
/>

<div class="min-h-screen bg-slate-50 pt-20 pb-20 lg:pt-32 dark:bg-slate-950">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center print:hidden">
			<h1
				class="text-4xl font-extrabold tracking-tight text-slate-900 transition-all sm:text-5xl dark:text-white"
			>
				Kontrak Kerja <span style="color: {themeColor}">{data.tipe}</span>
			</h1>
			<p class="mt-4 text-lg text-slate-500 dark:text-slate-400">
				Generator kontrak kerja profesional dengan standar hukum terbaru dan fitur personalisasi.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Col Left: Form -->
			<div class="space-y-8 print:hidden">
				<div
					class="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
				>
					<KontrakForm bind:data />
				</div>

				<KontrakActions onPrint={handlePrint} onCopy={handleCopy} bind:themeColor />
			</div>

			<!-- Col Right: Preview -->
			<div class="relative">
				<div
					class="sticky top-32 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800"
				>
					<KontrakPreview {data} {themeColor} />
				</div>
			</div>
		</div>

		<!-- SEO Article -->
		<div class="mt-24 print:hidden">
			<SeoContent />
		</div>

		<!-- Related Tools -->
		<RelatedTools currentPath="/surat-kontrak-kerja" category="Bisnis & HR" />
	</div>
</div>
