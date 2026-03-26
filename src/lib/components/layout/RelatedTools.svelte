<script lang="ts">
	import { resolve } from '$app/paths';
	import { toolsRegistry } from '$lib/utils/tools-registry';

	/**
	 * Bypasses strict route typing for dynamic paths while satisfying the linter.
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const safeResolve = resolve as any;

	let { currentPath, category }: { currentPath: string; category?: string } = $props();

	// Ambil alat yang relevan (kategori sama, atau kategori lain jika sedikit)
	// Kecualikan alat yang sedang dibuka (currentPath)
	let suggestions = $derived(
		toolsRegistry
			.filter((t) => t.path !== currentPath)
			.filter((t) => !category || t.category === category)
			.sort(() => 0.5 - Math.random()) // Acak
			.slice(0, 3)
	);

	// Jika kurang dari 3, ambil dari kategori mana saja
	let backupSuggestions = $derived(
		suggestions.length < 3 
			? toolsRegistry
				.filter((t) => t.path !== currentPath && !suggestions.includes(t))
				.sort(() => 0.5 - Math.random())
				.slice(0, 3 - suggestions.length)
			: []
	);

	let allSuggestions = $derived([...suggestions, ...backupSuggestions]);
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<section class="mt-12 border-t border-slate-100 pt-10 sm:mt-20 sm:pt-16 dark:border-slate-800 print:hidden">
	<div class="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-10 sm:flex-row sm:items-center">
		<div>
			<h2 class="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">Butuh Alat Lainnya?</h2>
			<p class="mt-1 text-sm text-slate-500 sm:text-base dark:text-slate-400">Jelajahi ekosistem alat profesional Kerjao.</p>
		</div>
		<a href={safeResolve('/semua-alat')} class="text-sm font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">Lihat Semua Alat →</a>
	</div>

	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each allSuggestions as tool (tool.path)}
			<a 
				href={safeResolve(tool.path)}
				class="group flex flex-col items-start rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-900/50"
			>
				<div class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-3xl shadow-inner transition-all group-hover:bg-blue-50 dark:bg-slate-800 dark:group-hover:bg-blue-900/30">
					{tool.icon}
				</div>
				<h3 class="mb-2 text-lg font-bold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">{tool.name}</h3>
				<p class="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{tool.description}</p>
				<div class="mt-auto flex w-full items-center justify-between">
					<span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">{tool.category}</span>
					<div class="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all group-hover:bg-blue-600 group-hover:text-white dark:bg-slate-800">
						<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
						</svg>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
