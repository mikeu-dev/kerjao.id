<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { browser } from '$app/environment';
	import { resolve } from '$app/paths';
	import { toolsRegistry } from '$lib/utils/tools-registry';
	import ToolIcon from '$lib/components/ui/ToolIcon.svelte';
	import {
		Search,
		ChevronDown,
		ArrowRight,
		Files,
		Sparkles,
		Building2,
		CircleDollarSign,
		Menu,
		X
	} from 'lucide-svelte';

	/**
	 * Bypasses strict route typing for dynamic paths while satisfying the linter.
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const safeResolve = resolve as any;

	let isScrolled = $state(false);
	let isSearchOpen = $state(false);
	let isMobileMenuOpen = $state(false);
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

	// Prevent scroll when search or mobile menu is open
	$effect(() => {
		if (browser) {
			document.body.style.overflow = isSearchOpen || isMobileMenuOpen ? 'hidden' : '';
		}
	});

	// Close mobile menu on navigation
	$effect(() => {
		if (page.url.pathname) {
			isMobileMenuOpen = false;
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
				<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 32 32" fill="none">
					<rect x="4" y="11" width="24" height="17" rx="3" stroke="#6366f1" stroke-width="2.5" />
					<path
						d="M11 11V8C11 6.89543 11.8954 6 13 6H19C20.1046 6 21 6.89543 21 8V11"
						stroke="#6366f1"
						stroke-width="2"
						stroke-linecap="round"
					/>
					<path
						d="M7 23L13 17L17 21L25 13"
						stroke="#10B981"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M19 13H25V19"
						stroke="#10B981"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				kerjao.id
			</a>

			<!-- Navigation Items (Desktop) -->
			<div
				class="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex dark:text-slate-300"
			>
				<a href="/" class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
					>Beranda</a
				>
				<a
					href="/artikel"
					class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
					>Artikel Karir</a
				>

				<!-- Tools Dropdown (CSS Hover) -->
				<div class="group relative">
					<button
						class="flex items-center gap-1 py-4 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
					>
						Semua Alat
						<ChevronDown class="h-4 w-4 transition-transform group-hover:-rotate-180" />
					</button>

					<!-- Mega Menu Container -->
					<div
						class="absolute right-0 z-50 mt-0 hidden w-[90vw] max-w-[700px] pt-2 group-hover:block lg:-right-48"
					>
						<div
							class="overflow-hidden rounded-2xl border border-slate-200/50 bg-white p-8 shadow-2xl dark:border-slate-700/50 dark:bg-slate-900"
						>
							<div class="grid grid-cols-1 gap-8 text-sm sm:grid-cols-3">
								<!-- Kolom 1: Surat Personal & Karir -->
								<div>
									<div class="mb-5 flex items-center gap-2">
										<div
											class="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400"
										>
											<Files class="h-4 w-4" />
										</div>
										<h3 class="font-bold tracking-wide text-slate-900 dark:text-white">
											Surat & Karir
										</h3>
									</div>
									<div class="flex flex-col gap-3 font-medium text-slate-500 dark:text-slate-400">
										<a
											href="/surat-lamaran"
											class="hover:text-indigo-600 dark:hover:text-indigo-400">Surat Lamaran</a
										>
										<a href="/surat-resign" class="hover:text-indigo-600 dark:hover:text-indigo-400"
											>Surat Resign</a
										>
										<a href="/surat-kuasa" class="hover:text-indigo-600 dark:hover:text-indigo-400"
											>Surat Kuasa</a
										>
										<a href="/surat-nda" class="hover:text-indigo-600 dark:hover:text-indigo-400"
											>Surat NDA</a
										>
										<a
											href="/surat-pernyataan"
											class="hover:text-indigo-600 dark:hover:text-indigo-400">Surat Pernyataan</a
										>
										<a href="/cv-maker" class="flex items-center gap-1.5 font-bold text-indigo-600">
											CV ATS <Sparkles class="h-3.5 w-3.5" />
										</a>
									</div>
								</div>

								<!-- Kolom 2: Bisnis & HR -->
								<div>
									<div class="mb-5 flex items-center gap-2">
										<div
											class="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400"
										>
											<Building2 class="h-4 w-4" />
										</div>
										<h3 class="font-bold tracking-wide text-slate-900 dark:text-white">
											Bisnis & HR
										</h3>
									</div>
									<div class="flex flex-col gap-3 font-medium text-slate-500 dark:text-slate-400">
										<a
											href="/surat-perjanjian"
											class="hover:text-indigo-600 dark:hover:text-indigo-400">Surat Perjanjian</a
										>
										<a href="/surat-sewa" class="hover:text-indigo-600 dark:hover:text-indigo-400"
											>Sewa Properti</a
										>
										<a
											href="/surat-perintah-kerja"
											class="hover:text-indigo-600 dark:hover:text-indigo-400"
											>Perintah Kerja (SPK)</a
										>
										<a
											href="/surat-kontrak-kerja"
											class="hover:text-indigo-600 dark:hover:text-indigo-400"
											>Kontrak Kerja (PKWT)</a
										>
										<a
											href="/surat-izin-orang-tua"
											class="hover:text-indigo-600 dark:hover:text-indigo-400">Izin Orang Tua</a
										>
										<a
											href="/surat-pengantar-rt-rw"
											class="hover:text-indigo-600 dark:hover:text-indigo-400">Pengantar RT/RW</a
										>
										<a href="/surat-jalan" class="hover:text-indigo-600 dark:hover:text-indigo-400"
											>Surat Jalan</a
										>
									</div>
								</div>

								<!-- Kolom 3: Keuangan -->
								<div>
									<div class="mb-5 flex items-center gap-2">
										<div
											class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400"
										>
											<CircleDollarSign class="h-4 w-4" />
										</div>
										<h3 class="font-bold tracking-wide text-slate-900 dark:text-white">Keuangan</h3>
									</div>
									<div class="flex flex-col gap-3 font-medium text-slate-500 dark:text-slate-400">
										<a href="/invoice" class="hover:text-indigo-600 dark:hover:text-indigo-400"
											>Invoice</a
										>
										<a href="/kwitansi" class="hover:text-indigo-600 dark:hover:text-indigo-400"
											>Kwitansi</a
										>
										<a
											href="/kalkulator-gaji"
											class="hover:text-indigo-600 dark:hover:text-indigo-400">Pajak PPh 21</a
										>
									</div>
								</div>
							</div>
							<div class="mt-8 border-t border-slate-100 pt-6 dark:border-slate-800">
								<a
									href={resolve('/semua-alat')}
									class="flex items-center justify-center gap-2 text-xs font-bold text-slate-400 hover:text-indigo-600"
								>
									LIHAT SEMUA 24+ ALAT <ArrowRight class="h-4 w-4" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Right Actions (Search & Mobile Toggle) -->
			<div class="flex items-center gap-3">
				<!-- Search Trigger -->
				<button
					onclick={toggleSearch}
					class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100/50 text-slate-600 transition-all hover:bg-slate-200 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-700"
					aria-label="Cari alat"
				>
					<Search class="h-5 w-5" />
				</button>

				<!-- Mobile Menu Toggle -->
				<button
					onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
					class="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-all hover:bg-indigo-100 md:hidden dark:bg-indigo-900/30 dark:text-indigo-400"
					aria-label="Menu"
				>
					{#if isMobileMenuOpen}
						<X class="h-6 w-6" />
					{:else}
						<Menu class="h-6 w-6" />
					{/if}
				</button>
			</div>
		</nav>
	</div>
</header>

<!-- Mobile Menu Drawer -->
{#if isMobileMenuOpen}
	<div
		class="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm md:hidden"
		onclick={() => (isMobileMenuOpen = false)}
		onkeydown={(e) => e.key === 'Escape' && (isMobileMenuOpen = false)}
		role="button"
		tabindex="0"
	></div>

	<div
		class="fixed inset-y-0 right-0 z-50 w-[280px] bg-white p-6 shadow-2xl transition-transform md:hidden dark:bg-slate-900"
	>
		<div class="flex flex-col gap-8">
			<div class="flex items-center justify-between border-b pb-4 dark:border-slate-800">
				<span class="text-xs font-bold tracking-widest text-slate-400 uppercase">Navigasi</span>
				<button
					onclick={() => (isMobileMenuOpen = false)}
					class="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
				>
					<X class="h-5 w-5" />
				</button>
			</div>

			<div class="flex flex-col gap-4">
				<a
					href="/"
					class="text-lg font-bold text-slate-900 dark:text-white"
					onclick={() => (isMobileMenuOpen = false)}>Beranda</a
				>
				<a
					href="/artikel"
					class="text-lg font-bold text-slate-900 dark:text-white"
					onclick={() => (isMobileMenuOpen = false)}>Artikel Karir</a
				>
				<a
					href="/semua-alat"
					class="text-lg font-bold text-indigo-600 dark:text-indigo-400"
					onclick={() => (isMobileMenuOpen = false)}>Semua Alat</a
				>
			</div>

			<div class="border-t pt-6 dark:border-slate-800">
				<span class="mb-4 block text-xs font-bold tracking-widest text-slate-400 uppercase"
					>Kategori Populer</span
				>
				<div class="flex flex-col gap-3">
					<a
						href="/surat-lamaran"
						class="flex items-center gap-3 font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400"
					>
						<Files class="h-4 w-4" /> Surat Lamaran
					</a>
					<a
						href="/cv-maker"
						class="flex items-center gap-3 font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400"
					>
						<Sparkles class="h-4 w-4" /> CV ATS
					</a>
					<a
						href="/kalkulator-gaji"
						class="flex items-center gap-3 font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-400"
					>
						<CircleDollarSign class="h-4 w-4" /> Kalkulator Gaji
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}

<!-- Global Search Modal -->
{#if isSearchOpen}
	<div
		class="fixed inset-0 z-100 flex items-start justify-center overflow-y-auto px-4 pt-4 sm:pt-24"
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
		<div
			class="relative w-full max-w-2xl transform overflow-hidden rounded-3xl bg-white shadow-2xl transition-all dark:bg-slate-900"
		>
			<!-- Search Input Area -->
			<div class="flex items-center gap-4 border-b border-slate-100 p-5 dark:border-slate-800">
				<div
					class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
				>
					<Search class="h-6 w-6" />
				</div>
				<input
					id="global-search-input"
					type="text"
					bind:value={searchQuery}
					autoComplete="off"
					placeholder="Cari 24+ alat (contoh: CV, Invoice, Gaji...)"
					class="w-full border-none bg-transparent text-lg font-semibold text-slate-900 placeholder:text-slate-400 focus:ring-0 dark:text-white"
				/>
				<div class="hidden items-center gap-1.5 sm:flex">
					<kbd
						class="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-bold text-slate-400 dark:border-slate-700 dark:bg-slate-800"
						>ESC</kbd
					>
				</div>
			</div>

			<!-- Results Area -->
			<div class="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
				{#if searchQuery.trim() === ''}
					<div class="py-12 text-center">
						<div class="mb-4 flex justify-center text-slate-200 dark:text-slate-700">
							<Search class="h-16 w-16" />
						</div>
						<p class="text-slate-500">Mulai mengetik untuk mencari alat...</p>
					</div>
				{:else if filteredTools.length > 0}
					<div class="grid grid-cols-1 gap-2">
						{#each filteredTools as tool (tool.path)}
							<a
								href={safeResolve(tool.path)}
								class="group flex items-center gap-4 rounded-2xl p-4 transition-all hover:bg-slate-50 dark:hover:bg-slate-800/80"
							>
								<div
									class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400"
								>
									<ToolIcon name={tool.icon} class="h-6 w-6" />
								</div>
								<div class="flex-1">
									<h4 class="font-bold text-slate-900 dark:text-white">{tool.name}</h4>
									<p class="line-clamp-1 text-sm text-slate-500">{tool.description}</p>
								</div>
								<ArrowRight
									class="h-5 w-5 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-indigo-500"
								/>
							</a>
						{/each}
					</div>
				{:else}
					<div class="py-12 text-center text-slate-500">
						Tidak ada hasil pencarian untuk "<span class="font-bold text-slate-900 dark:text-white"
							>{searchQuery}</span
						>"
					</div>
				{/if}
			</div>

			<!-- Footer Tips -->
			<div
				class="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-6 py-4 dark:border-slate-800 dark:bg-slate-900/50"
			>
				<div
					class="flex items-center gap-4 text-[10px] font-bold tracking-wider text-slate-400 uppercase"
				>
					<div class="flex items-center gap-1.5">
						<kbd class="rounded bg-white px-1.5 py-0.5 shadow-sm dark:bg-slate-800">↑↓</kbd>
						Pilih
					</div>
					<div class="flex items-center gap-1.5">
						<kbd class="rounded bg-white px-1.5 py-0.5 shadow-sm dark:bg-slate-800">Enter</kbd>
						Buka
					</div>
				</div>
				<p class="text-[10px] font-bold text-indigo-500">TOTAL 24+ ALAT GRATIS</p>
			</div>
		</div>
	</div>
{/if}
