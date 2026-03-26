<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { browser } from '$app/environment';
	import { resolve } from '$app/paths';
	import { toolsRegistry } from '$lib/utils/tools-registry';

	let isScrolled = $state(false);
	let isSearchOpen = $state(false);
	let searchQuery = $state('');

	let filteredTools = $derived(
		searchQuery.trim() === ''
			? []
			: toolsRegistry.filter(
					(tool) =>
						tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
						tool.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
				)
	);

	function toggleSearch() {
		isSearchOpen = !isSearchOpen;
		if (isSearchOpen) {
			searchQuery = '';
			if (browser) {
				setTimeout(() => {
					document.getElementById('global-search-input')?.focus();
				}, 50);
			}
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			toggleSearch();
		}
		if (e.key === 'Escape' && isSearchOpen) {
			isSearchOpen = false;
		}
	}

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 10;
		};
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('keydown', handleKeydown);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('keydown', handleKeydown);
		};
	});

	// Close on navigation
	$effect(() => {
		if (page.url.pathname) {
			isSearchOpen = false;
		}
	});

	// Prevent scroll when search is open
	$effect(() => {
		if (browser) {
			document.body.style.overflow = isSearchOpen ? 'hidden' : '';
		}
	});
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<header
	class="fixed top-0 left-0 z-50 w-full transition-all duration-300 print:hidden
    {isScrolled
		? 'bg-white/80 py-3 shadow-sm backdrop-blur-xl dark:bg-slate-900/80'
		: 'bg-transparent py-5'}"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<nav class="flex items-center justify-between">
			<!-- Logo -->
			<a
				href="/"
				class="flex items-center gap-2 bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-2xl font-extrabold tracking-tighter text-transparent transition-transform hover:scale-[1.02]"
			>
				<svg
					class="h-8 w-8 text-indigo-500"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
					/>
				</svg>
				kerjao.id
			</a>

			<!-- Navigation Items -->
			<div class="flex items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
				<a href="/" class="hidden transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 md:block"
					>Beranda</a
				>
				<a href="/artikel" class="hidden transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 sm:block"
					>Artikel Karir</a
				>

				<!-- Tools Dropdown (CSS Hover) -->
				<div class="group relative">
					<button
						class="flex items-center gap-1 py-4 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
					>
						Semua Alat
						<svg
							class="h-4 w-4 transition-transform group-hover:-rotate-180"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>

					<!-- Mega Menu Container -->
					<div class="absolute right-0 z-50 mt-0 hidden w-[90vw] max-w-[700px] pt-2 lg:-right-48 group-hover:block">
						<div
							class="overflow-hidden rounded-2xl border border-slate-200/50 bg-white p-8 shadow-2xl dark:border-slate-700/50 dark:bg-slate-900"
						>
							<div class="grid grid-cols-1 gap-8 text-sm sm:grid-cols-3">
								<!-- Kolom 1: Surat Personal & Karir -->
								<div>
									<div class="mb-5 flex items-center gap-2">
										<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
											📄
										</div>
										<h3 class="font-bold tracking-wide text-slate-900 dark:text-white">Surat & Karir</h3>
									</div>
									<div class="flex flex-col gap-3 font-medium text-slate-500 dark:text-slate-400">
										<a href="/surat-lamaran" class="hover:text-indigo-600 dark:hover:text-indigo-400">Surat Lamaran</a>
										<a href="/surat-resign" class="hover:text-indigo-600 dark:hover:text-indigo-400">Surat Resign</a>
										<a href="/surat-kuasa" class="hover:text-indigo-600 dark:hover:text-indigo-400">Surat Kuasa</a>
										<a href="/surat-nda" class="hover:text-indigo-600 dark:hover:text-indigo-400">Surat NDA</a>
										<a href="/surat-pernyataan" class="hover:text-indigo-600 dark:hover:text-indigo-400">Surat Pernyataan</a>
										<a href="/cv-maker" class="font-bold text-indigo-600">CV ATS ✨</a>
									</div>
								</div>

								<!-- Kolom 2: Bisnis & HR -->
								<div>
									<div class="mb-5 flex items-center gap-2">
										<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
											🏢
										</div>
										<h3 class="font-bold tracking-wide text-slate-900 dark:text-white">Bisnis & HR</h3>
									</div>
									<div class="flex flex-col gap-3 font-medium text-slate-500 dark:text-slate-400">
										<a href="/surat-perjanjian" class="hover:text-indigo-600 dark:hover:text-indigo-400">Surat Perjanjian</a>
										<a href="/surat-sewa" class="hover:text-indigo-600 dark:hover:text-indigo-400">Sewa Properti</a>
										<a href="/surat-perintah-kerja" class="hover:text-indigo-600 dark:hover:text-indigo-400">Perintah Kerja (SPK)</a>
										<a href="/surat-kontrak-kerja" class="hover:text-indigo-600 dark:hover:text-indigo-400">Kontrak Kerja (PKWT)</a>
										<a href="/surat-izin-orang-tua" class="hover:text-indigo-600 dark:hover:text-indigo-400">Izin Orang Tua</a>
										<a href="/surat-pengantar-rt-rw" class="hover:text-indigo-600 dark:hover:text-indigo-400">Pengantar RT/RW</a>
										<a href="/surat-jalan" class="hover:text-indigo-600 dark:hover:text-indigo-400">Surat Jalan</a>
									</div>
								</div>

								<!-- Kolom 3: Keuangan -->
								<div>
									<div class="mb-5 flex items-center gap-2">
										<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
											💰
										</div>
										<h3 class="font-bold tracking-wide text-slate-900 dark:text-white">Keuangan</h3>
									</div>
									<div class="flex flex-col gap-3 font-medium text-slate-500 dark:text-slate-400">
										<a href="/invoice" class="hover:text-indigo-600 dark:hover:text-indigo-400">Invoice</a>
										<a href="/kwitansi" class="hover:text-indigo-600 dark:hover:text-indigo-400">Kwitansi</a>
										<a href="/kalkulator-gaji" class="hover:text-indigo-600 dark:hover:text-indigo-400">Pajak PPh 21</a>
									</div>
								</div>
							</div>
							<div class="mt-8 border-t border-slate-100 pt-6 dark:border-slate-800">
								<a href={resolve('/semua-alat')} class="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 hover:text-indigo-600">
									LIHAT SEMUA 20+ ALAT <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Search Trigger -->
				<button
					onclick={toggleSearch}
					class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100/50 text-slate-600 transition-all hover:bg-slate-200 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-700"
					aria-label="Cari alat"
				>
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</button>
			</div>
		</nav>
	</div>
</header>

<!-- Global Search Modal -->
{#if isSearchOpen}
	<div 
		class="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-4 pt-16 sm:pt-24"
		role="dialog"
		aria-modal="true"
	>
		<!-- Overlay -->
		<button 
			class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
			onclick={() => (isSearchOpen = false)}
			aria-label="Tutup pencarian"
		></button>

		<!-- Modal Container -->
		<div class="relative w-full max-w-2xl transform overflow-hidden rounded-3xl bg-white shadow-2xl transition-all dark:bg-slate-900">
			<!-- Search Input Area -->
			<div class="flex items-center gap-4 border-b border-slate-100 p-5 dark:border-slate-800">
				<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</div>
				<input 
					id="global-search-input"
					type="text" 
					bind:value={searchQuery}
					autoComplete="off"
					placeholder="Cari 20+ alat (contoh: CV, Invoice, Gaji...)" 
					class="w-full border-none bg-transparent text-lg font-semibold text-slate-900 focus:ring-0 dark:text-white placeholder:text-slate-400"
				/>
				<div class="hidden items-center gap-1.5 sm:flex">
					<kbd class="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-bold text-slate-400 dark:border-slate-700 dark:bg-slate-800">ESC</kbd>
				</div>
			</div>

			<!-- Search Results Area -->
			<div class="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
				{#if filteredTools.length > 0}
					<div class="grid grid-cols-1 gap-2">
						{#each filteredTools as tool (tool.path)}
							<a 
								href={tool.path}
								class="group flex items-center justify-between rounded-2xl p-4 transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
							>
								<div class="flex items-center gap-4">
									<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm ring-1 ring-slate-100 transition-all group-hover:scale-110 dark:bg-slate-800 dark:ring-slate-700">
										{tool.icon}
									</div>
									<div class="flex flex-col">
										<span class="font-bold text-slate-900 dark:text-white">{tool.name}</span>
										<span class="text-xs text-slate-500 dark:text-slate-400">{tool.description}</span>
									</div>
								</div>
								<div class="rounded-lg bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
									{tool.category}
								</div>
							</a>
						{/each}
					</div>
				{:else if searchQuery.trim() !== ''}
					<div class="py-16 text-center">
						<div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 text-4xl dark:bg-slate-800">
							🔎
						</div>
						<p class="text-lg font-bold text-slate-900 dark:text-white">Alat tidak ditemukan</p>
						<p class="mt-1 text-slate-500 dark:text-slate-400">Maaf, kami tidak menemukan alat dengan kata kunci "<strong>{searchQuery}</strong>".</p>
					</div>
				{:else}
					<!-- Quick Shortcuts / Tips -->
					<div class="py-12 text-center text-slate-500">
						<p class="mb-4 text-sm font-medium uppercase tracking-widest">Saran Pencarian</p>
						<div class="flex flex-wrap justify-center gap-2 px-8">
							<button onclick={() => searchQuery = 'CV'} class="rounded-full bg-slate-50 px-4 py-1.5 text-xs font-semibold hover:bg-blue-50 hover:text-blue-600 dark:bg-slate-800">#cv-maker</button>
							<button onclick={() => searchQuery = 'Gaji'} class="rounded-full bg-slate-50 px-4 py-1.5 text-xs font-semibold hover:bg-blue-50 hover:text-blue-600 dark:bg-slate-800">#kalkulator-gaji</button>
							<button onclick={() => searchQuery = 'Invoice'} class="rounded-full bg-slate-50 px-4 py-1.5 text-xs font-semibold hover:bg-blue-50 hover:text-blue-600 dark:bg-slate-800">#invoice</button>
							<button onclick={() => searchQuery = 'Hukum'} class="rounded-full bg-slate-50 px-4 py-1.5 text-xs font-semibold hover:bg-blue-50 hover:text-blue-600 dark:bg-slate-800">#dokumen-legal</button>
						</div>
					</div>
				{/if}
			</div>

			<!-- Footer Tips -->
			<div class="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/50 text-[10px] font-medium text-slate-400">
				<div class="flex items-center gap-4">
					<span class="flex items-center gap-1"><kbd class="rounded border px-1">TAB</kbd> Navigasi</span>
					<span class="flex items-center gap-1"><kbd class="rounded border px-1">ENTER</kbd> Pilih</span>
				</div>
				<span>Milestone: 20 Alat Profesional</span>
			</div>
		</div>
	</div>
{/if}

<style>
	.custom-scrollbar::-webkit-scrollbar {
		width: 4px;
	}
	.custom-scrollbar::-webkit-scrollbar-track {
		background: transparent;
	}
	.custom-scrollbar::-webkit-scrollbar-thumb {
		background: #e2e8f0;
		border-radius: 10px;
	}
	:global(.dark) .custom-scrollbar::-webkit-scrollbar-thumb {
		background: #334155;
	}
</style>
