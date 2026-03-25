<script lang="ts">
	import Meta from '$lib/components/seo/Meta.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let Content = $derived(data.content);
	let meta = $derived(data.meta);

	function formatDate(dateStr: string) {
		if (!dateStr) return '';
		const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
		return new Date(dateStr).toLocaleDateString('id-ID', opts);
	}
</script>

<Meta
	title={`${meta.title} | Blog Kerjao`}
	description={meta.description}
	keywords={`artikel karir, ${meta.title.toLowerCase()}, kerjao blog`}
/>

<div class="relative z-10 mx-auto max-w-4xl px-4 pt-32 pb-16 sm:px-6 lg:px-8">
	<!-- Back Button -->
	<a
		href="/artikel"
		class="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
	>
		<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M10 19l-7-7m0 0l7-7m-7 7h18"
			/>
		</svg>
		Kembali ke Katalog Artikel
	</a>

	<!-- Article Header -->
	<header class="mb-12 text-center">
		<h1
			class="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white"
		>
			{meta.title}
		</h1>
		<div class="flex items-center justify-center gap-4 text-slate-500 dark:text-slate-400">
			<span class="flex items-center gap-1.5 text-sm font-medium">
				<svg class="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
				Diterbitkan: {formatDate(meta.date)}
			</span>
		</div>
	</header>

	<!-- Article Content (Rendered Markdown via MDsveX) -->
	<article
		class="mx-auto prose prose-lg max-w-none prose-slate dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:font-semibold prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-img:rounded-2xl"
	>
		<!-- Since Svelte 5, components passed via variable use uppercase tags -->
		<Content />
	</article>

	<!-- Footer / Call to Action -->
	<div
		class="mt-16 rounded-3xl border border-indigo-100 bg-indigo-50/50 p-8 text-center dark:border-indigo-900/30 dark:bg-indigo-900/10"
	>
		<h3 class="mb-2 text-xl font-bold text-slate-900 dark:text-white">
			Tingkatkan Peluang Karir Anda
		</h3>
		<p class="mb-6 text-slate-600 dark:text-slate-400">
			Jangan biarkan CV yang salah merusak peluang Anda. Gunakan Generator CV ATS-Friendly kami
			secara gratis!
		</p>
		<a
			href="/cv-maker"
			class="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
		>
			Buat CV Sekarang
		</a>
	</div>
</div>
