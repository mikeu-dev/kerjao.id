<script lang="ts">
	import { resolve } from '$app/paths';
	import Meta from '$lib/components/seo/Meta.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// Format Date Helper
	function formatDate(dateStr: string) {
		if (!dateStr) return '';
		const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
		return new Date(dateStr).toLocaleDateString('id-ID', opts);
	}
</script>

<Meta
	title="Blog & Artikel Karir Profesional - Tips Lolos HRD | Kerjao.id"
	description="Kumpulan artikel karir, hukum bisnis, dan panduan melamar kerja terbaru untuk membantu profesional muda Indonesia sukses di dunia kerja."
	keywords="artikel karir, blog hrd, tips melamar kerja, aturan kerja, pkwt pkwtt"
/>

<div class="relative z-10 mx-auto max-w-7xl px-4 pt-20 lg:pt-32 pb-12 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			Panduan Teruji <span
				class="bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent"
				>Dunia Karir</span
			>
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
			Pelajari hukum ketenagakerjaan, rahasia lolos interview, dan tips profesional eksklusif
			langsung dari pakarnya.
		</p>
	</div>

	<!-- Article Grid -->
	{#if data.articles.length > 0}
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each data.articles as article (article.slug)}
				<a
					href={resolve(`/artikel/${article.slug}`)}
					class="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/60 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-800/60 dark:hover:border-indigo-600"
				>
					<div
						class="mb-4 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400"
					>
						<span>Artikel Edukasi</span>
						<span class="flex items-center gap-1 text-slate-400">
							<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							{formatDate(article.date)}
						</span>
					</div>

					<!-- Decorative Glow -->
					<div
						class="absolute top-0 right-0 -mt-8 -mr-8 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl transition-all group-hover:bg-indigo-500/20"
					></div>

					<h3
						class="mb-3 text-2xl leading-snug font-bold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400"
					>
						{article.title}
					</h3>

					<p class="mb-6 line-clamp-3 leading-relaxed text-slate-600 dark:text-slate-400">
						{article.description}
					</p>

					<div class="mt-auto flex items-center font-bold text-indigo-600 dark:text-indigo-400">
						Baca Selengkapnya
						<svg
							class="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</div>
				</a>
			{/each}
		</div>
	{:else}
		<div
			class="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 py-24 text-center dark:border-slate-700"
		>
			<svg
				class="mb-4 h-12 w-12 text-slate-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
				/>
			</svg>
			<h3 class="text-xl font-bold text-slate-900 dark:text-white">Belum Ada Artikel</h3>
			<p class="mt-2 text-slate-500 dark:text-slate-400">
				Nantikan artikel menarik seputar karir dan hukum bisnis di sini.
			</p>
		</div>
	{/if}
</div>
