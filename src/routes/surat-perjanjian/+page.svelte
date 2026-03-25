<script lang="ts">
	import PerjanjianForm from '$lib/components/perjanjian/PerjanjianForm.svelte';
	import PerjanjianPreview from '$lib/components/perjanjian/PerjanjianPreview.svelte';
	import PerjanjianActions from '$lib/components/perjanjian/PerjanjianActions.svelte';
	import type { PerjanjianData } from '$lib/utils/perjanjian';

	let data = $state<PerjanjianData>({
		city: '',
		date: new Date().toISOString().split('T')[0],
		clientName: '',
		clientRole: '',
		clientCompany: '',
		clientAddress: '',
		freelancerName: '',
		freelancerRole: '',
		freelancerAddress: '',
		projectName: '',
		projectScope: '',
		contractValue: 0,
		deadline: '',
		revisionCount: ''
	});
</script>

<svelte:head>
	<title>Surat Perjanjian Kerja Sama / MoU Freelance | kerjao.id</title>
	<meta
		name="description"
		content="Lindungi hak dan kewajiban proyek freelance-mu. Buat Surat Perjanjian Kerja Sama (MoU) atau Kontrak Kerja Freelance otomatis dan instan siap cetak."
	/>
	<meta
		name="keywords"
		content="surat perjanjian kerjasama, contoh kontrak kerja freelance, surat mou, surat perjanjian proyek, kerjao.id"
	/>
</svelte:head>

<div class="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-12 text-center print:hidden">
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			<span class="bg-linear-to-r from-red-500 to-rose-600 bg-clip-text text-transparent"
				>Kontrak Kerja</span
			> Freelance / MoU
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
			Lindungi hasil kerjamu secara legal. Buat Surat Perjanjian Kerja Sama formal antar dua pihak
			hanya dalam hitungan detik.
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
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400"
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
					<h2 class="text-xl font-bold text-slate-900 dark:text-white">Isi Pokok Perjanjian</h2>
				</div>
				<PerjanjianForm bind:data />
			</div>

			<!-- Desktop Actions -->
			<div
				class="hidden rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:block dark:border-slate-700/60 dark:bg-slate-800/40"
			>
				<PerjanjianActions />
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
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400"
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
					<span>Tampilan Kertas (A4)</span>
				</h2>

				<!-- Printable Surat Area -->
				<div class="print-area mx-auto overflow-hidden lg:max-w-3xl">
					<PerjanjianPreview {data} />
				</div>
			</div>

			<!-- Mobile Actions -->
			<div
				class="block rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-xl md:hidden dark:border-slate-700/60 dark:bg-slate-800/40 print:hidden"
			>
				<PerjanjianActions />
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
