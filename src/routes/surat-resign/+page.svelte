<script lang="ts">
	import ResignForm from '$lib/components/resign/ResignForm.svelte';
	import ResignPreview from '$lib/components/resign/ResignPreview.svelte';
	import ResignActions from '$lib/components/resign/ResignActions.svelte';
	import SeoContent from '$lib/components/resign/SeoContent.svelte';
	import { generateLetter, type ResignData } from '$lib/utils/generateLetter';

	let data = $state<ResignData>({
		nama: '',
		posisi: '',
		perusahaan: '',
		tanggal: '',
		alasan: 'Mendapatkan tawaran pekerjaan baru',
		alasanCustom: '',
		tone: 'profesional'
	});

	let letter = $derived(generateLetter(data));
</script>

<svelte:head>
	<title>Surat Resign Generator Online | kerjao.id</title>
	<meta
		name="description"
		content="Buat surat resign profesional, formal, dan praktis secara gratis. Tidak perlu login, 100% aman dan langsung di perangkat Anda."
	/>
	<meta
		name="keywords"
		content="surat resign, surat pengunduran diri, generator surat resign, contoh surat resign, kerjao.id"
	/>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
	<!-- Header -->
	<div class="mb-10 text-center">
		<h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
			Surat Resign Generator
		</h1>
		<p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
			Buat draf surat pengunduran diri dengan cepat, gratis, dan profesional.
		</p>
		<div
			class="mt-4 inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
		>
			<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
				></path></svg
			>
			Data Anda aman, 100% diproses di browser tanpa disimpan.
		</div>
	</div>

	<!-- Main Content -->
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
		<!-- Sidebar Form -->
		<div class="flex flex-col gap-6 lg:col-span-4 xl:col-span-5">
			<div
				class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
			>
				<h2 class="mb-6 text-lg font-medium text-gray-900 dark:text-white">Informasi Anda</h2>
				<ResignForm bind:data />
			</div>

			<!-- Desktop Actions -->
			<div
				class="hidden rounded-lg border border-gray-200 bg-gray-50 p-6 md:block dark:border-gray-700 dark:bg-gray-800/50 print:hidden"
			>
				<ResignActions {letter} />
			</div>
		</div>

		<!-- Preview Area -->
		<div class="flex flex-col gap-6 lg:col-span-8 xl:col-span-7">
			<div
				class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
			>
				<h2
					class="mb-6 flex items-center justify-between text-lg font-medium text-gray-900 dark:text-white print:hidden"
				>
					<span>Pratinjau Surat</span>
				</h2>

				<!-- Area for printing, removes padding & shadows globally in css -->
				<div class="print-area">
					<ResignPreview {letter} />
				</div>
			</div>

			<!-- Mobile Actions -->
			<div
				class="block rounded-lg border border-gray-200 bg-gray-50 p-6 md:hidden dark:border-gray-700 dark:bg-gray-800/50 print:hidden"
			>
				<ResignActions {letter} />
			</div>
		</div>
	</div>

	<!-- SEO Content -->
	<div class="mt-20 print:hidden">
		<SeoContent />
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
			box-shadow: none !important;
			border: none !important;
			padding: 0 !important;
		}
	}
</style>
