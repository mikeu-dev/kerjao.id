<script lang="ts">
	import { resolve } from '$app/paths';
	import { toolsRegistry } from '$lib/utils/tools-registry';
	import Meta from '$lib/components/seo/Meta.svelte';
	import ToolIcon from '$lib/components/ui/ToolIcon.svelte';
	import { ArrowRight } from 'lucide-svelte';

	/**
	 * Bypasses strict route typing for dynamic paths while satisfying the linter.
	 */
	function toRoute(path: string) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return path as any;
	}

	const categories = ['Karir', 'Bisnis & HR', 'Keuangan', 'Personal & Umum', 'Edukasi'] as const;

	const toolsByCategory = categories
		.map((cat) => ({
			name: cat,
			tools: toolsRegistry.filter((t) => t.category === cat)
		}))
		.filter((group) => group.tools.length > 0);
</script>

<Meta
	title="Semua Alat & Generator Profesional - Kerjao.id"
	description="Lihat semua 24+ koleksi alat karir, bisnis, keuangan, dan personal gratis dari Kerjao.id. Semuanya instan dan berjalan di peramban Anda."
	keywords="daftar alat kerjao, generator surat, kalkulator gaji, invoice creator"
/>

<div class="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-16 text-center">
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			Katalog Lengkap <span
				class="bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
				>Alat Profesional</span
			>
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
			Temukan semua generator dokumen dan alat bantu produktivitas yang kami sediakan untuk
			memudahkan karier dan bisnis Anda.
		</p>
	</div>

	<!-- Categories Grid -->
	<div class="space-y-16">
		{#each toolsByCategory as category (category.name)}
			<section id={category.name.toLowerCase().replace(/\s+/g, '-')}>
				<div class="mb-8 flex items-center gap-4">
					<h2 class="text-2xl font-bold text-slate-900 dark:text-white">{category.name}</h2>
					<div class="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
				</div>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{#each category.tools as tool (tool.path)}
						<a
							href={resolve(toRoute(tool.path))}
							class="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/60 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-800/60 dark:hover:border-indigo-600"
						>
							<div class="mb-4 flex items-center justify-between">
								<div
									class="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm ring-1 ring-indigo-100 transition-all group-hover:scale-110 dark:bg-indigo-900/30 dark:ring-indigo-800"
								>
									<ToolIcon name={tool.icon} size={24} />
								</div>
								<span
									class="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-slate-500 uppercase dark:bg-slate-700 dark:text-slate-400"
								>
									{tool.category}
								</span>
							</div>

							<h3
								class="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400"
							>
								{tool.name}
							</h3>

							<p class="mb-6 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
								{tool.description}
							</p>

							<div
								class="mt-auto flex items-center text-xs font-bold text-indigo-600 transition-opacity opacity-0 group-hover:opacity-100 dark:text-indigo-400"
							>
								Gunakan Alat
								<ArrowRight class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</div>
						</a>
					{/each}
				</div>
			</section>
		{/each}
	</div>

	<!-- Bottom CTA -->
	<div
		class="mt-24 rounded-3xl border border-indigo-100 bg-indigo-50/50 p-12 text-center dark:border-indigo-900/30 dark:bg-indigo-900/10"
	>
		<h3 class="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
			Alat yang Anda cari tidak ada?
		</h3>
		<p class="mb-8 text-slate-600 dark:text-slate-400">
			Kami terus menambahkan alat baru setiap minggu. Berikan saran alat yang Anda butuhkan!
		</p>
		<a
			href="mailto:halo@kerjao.id"
			class="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
		>
			Kirim Saran Alat
		</a>
	</div>
</div>
