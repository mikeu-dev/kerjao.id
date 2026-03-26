<script lang="ts">
	import { toolsRegistry } from '$lib/utils/tools-registry';

	const colorMap = {
		rose: {
			border: 'border-rose-300/80 hover:border-rose-400 dark:border-rose-700/80 dark:hover:border-rose-600',
			bg: 'bg-rose-50/30 dark:bg-rose-900/10',
			iconBg: 'bg-rose-100 dark:bg-rose-500/20',
			iconText: 'text-rose-600 dark:text-rose-400',
			iconRing: 'ring-rose-500/20 dark:ring-rose-500/30',
			accentBg: 'bg-rose-500/20 group-hover:bg-rose-500/30',
			hoverText: 'group-hover:text-rose-600 dark:group-hover:text-rose-400',
			tag: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-red-200'
		},
		indigo: {
			border: 'border-indigo-200/80 hover:border-indigo-400 dark:border-indigo-700/80 dark:hover:border-indigo-600',
			bg: 'bg-indigo-50/20 dark:bg-indigo-900/10',
			iconBg: 'bg-indigo-50 dark:bg-indigo-500/10',
			iconText: 'text-indigo-600 dark:text-indigo-400',
			iconRing: 'ring-indigo-500/20 dark:ring-indigo-500/20',
			accentBg: 'bg-indigo-500/10 group-hover:bg-indigo-500/20',
			hoverText: 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400',
			tag: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
		},
		blue: {
			border: 'border-blue-200/80 hover:border-blue-400 dark:border-blue-700/80 dark:bg-blue-900/10 dark:hover:border-blue-600',
			bg: 'bg-blue-50/20 dark:bg-blue-900/10',
			iconBg: 'bg-blue-50 dark:bg-blue-500/10',
			iconText: 'text-blue-600 dark:text-blue-400',
			iconRing: 'ring-blue-500/20 dark:ring-blue-500/20',
			accentBg: 'bg-blue-500/10 group-hover:bg-blue-500/20',
			hoverText: 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
			tag: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
		},
		emerald: {
			border: 'border-emerald-200/80 hover:border-emerald-400 dark:border-emerald-700/80 dark:bg-emerald-900/10 dark:hover:border-emerald-600',
			bg: 'bg-emerald-50/20 dark:bg-emerald-900/10',
			iconBg: 'bg-emerald-50 dark:bg-emerald-500/10',
			iconText: 'text-emerald-600 dark:text-emerald-400',
			iconRing: 'ring-emerald-500/20 dark:ring-emerald-500/20',
			accentBg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
			hoverText: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
			tag: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
		},
		orange: {
			border: 'border-orange-200/80 hover:border-orange-400 dark:border-orange-700/80 dark:bg-orange-900/10 dark:hover:border-orange-600',
			bg: 'bg-orange-50/20 dark:bg-orange-900/10',
			iconBg: 'bg-orange-50 dark:bg-orange-500/10',
			iconText: 'text-orange-600 dark:text-orange-400',
			iconRing: 'ring-orange-500/20 dark:ring-orange-500/20',
			accentBg: 'bg-orange-500/10 group-hover:bg-orange-500/20',
			hoverText: 'group-hover:text-orange-600 dark:group-hover:text-orange-400',
			tag: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
		},
		teal: {
			border: 'border-teal-200/80 hover:border-teal-400 dark:border-teal-700/80 dark:bg-teal-900/10 dark:hover:border-teal-600',
			bg: 'bg-teal-50/20 dark:bg-teal-900/10',
			iconBg: 'bg-teal-50 dark:bg-teal-500/10',
			iconText: 'text-teal-600 dark:text-teal-400',
			iconRing: 'ring-teal-500/20 dark:ring-teal-500/20',
			accentBg: 'bg-teal-500/10 group-hover:bg-teal-500/20',
			hoverText: 'group-hover:text-teal-600 dark:group-hover:text-teal-400',
			tag: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200'
		},
		red: {
			border: 'border-red-200/80 hover:border-red-400 dark:border-red-700/80 dark:bg-red-900/10 dark:hover:border-red-600',
			bg: 'bg-red-50/20 dark:bg-red-900/10',
			iconBg: 'bg-red-50 dark:bg-red-500/10',
			iconText: 'text-red-600 dark:text-red-400',
			iconRing: 'ring-red-500/20 dark:ring-red-500/20',
			accentBg: 'bg-red-500/10 group-hover:bg-red-500/20',
			hoverText: 'group-hover:text-red-600 dark:group-hover:text-red-400',
			tag: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
		},
		amber: {
			border: 'border-amber-200/80 hover:border-amber-400 dark:border-amber-700/80 dark:bg-amber-900/10 dark:hover:border-amber-600',
			bg: 'bg-amber-50/20 dark:bg-amber-900/10',
			iconBg: 'bg-amber-50 dark:bg-amber-500/10',
			iconText: 'text-amber-600 dark:text-amber-400',
			iconRing: 'ring-amber-500/20 dark:ring-amber-500/20',
			accentBg: 'bg-amber-500/10 group-hover:bg-amber-500/20',
			hoverText: 'group-hover:text-amber-600 dark:group-hover:text-amber-400',
			tag: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
		},
		cyan: {
			border: 'border-cyan-200/80 hover:border-cyan-400 dark:border-cyan-700/80 dark:bg-cyan-900/10 dark:hover:border-cyan-600',
			bg: 'bg-cyan-50/20 dark:bg-cyan-900/10',
			iconBg: 'bg-cyan-50 dark:bg-cyan-500/10',
			iconText: 'text-cyan-600 dark:text-cyan-400',
			iconRing: 'ring-cyan-500/20 dark:ring-cyan-500/20',
			accentBg: 'bg-cyan-500/10 group-hover:bg-cyan-500/20',
			hoverText: 'group-hover:text-cyan-600 dark:group-hover:text-cyan-400',
			tag: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200'
		},
		violet: {
			border: 'border-violet-200/80 hover:border-violet-400 dark:border-violet-700/80 dark:bg-violet-900/10 dark:hover:border-violet-600',
			bg: 'bg-violet-50/20 dark:bg-violet-900/10',
			iconBg: 'bg-violet-50 dark:bg-violet-500/10',
			iconText: 'text-violet-600 dark:text-violet-400',
			iconRing: 'ring-violet-500/20 dark:ring-violet-500/20',
			accentBg: 'bg-violet-500/10 group-hover:bg-violet-500/20',
			hoverText: 'group-hover:text-violet-600 dark:group-hover:text-violet-400',
			tag: 'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200'
		},
		slate: {
			border: 'border-slate-200/80 hover:border-slate-400 dark:border-slate-700/80 dark:bg-slate-900/10 dark:hover:border-slate-600',
			bg: 'bg-slate-50/20 dark:bg-slate-900/10',
			iconBg: 'bg-slate-50 dark:bg-slate-500/10',
			iconText: 'text-slate-600 dark:text-slate-400',
			iconRing: 'ring-slate-500/20 dark:ring-slate-500/20',
			accentBg: 'bg-slate-500/10 group-hover:bg-slate-500/20',
			hoverText: 'group-hover:text-slate-600 dark:group-hover:text-slate-400',
			tag: 'bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200'
		}
	};

	const iconMap: Record<string, string> = {
		salary:
			'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
		cv: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
		invoice:
			'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
		receipt:
			'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z',
		resign:
			'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
		letter:
			'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
		work: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z',
		contract:
			'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
		warning:
			'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
		power:
			'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
		calendar: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
		payslip:
			'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
		rent: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
		spk: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
		sale: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
		nda: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
		hr: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
		parent: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
		citizen:
			'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
		statement:
			'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
		offer:
			'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
		po: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
		delivery: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
		debt: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
	};
	const defaultIcon = 'M13 10V3L4 14h7v7l9-11h-7z';

	let { data } = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<svelte:head>
	<title>Kerjao.id - 24 Alat Karir & Bisnis Profesional Indonesia</title>
	<meta
		name="description"
		content="Kumpulan 24 tools instan, cerdas, dan gratis: Kalkulator Gaji PPh 21, Invoice Generator, Surat Perjanjian, hingga Surat Lamaran siap pakai untuk profesional."
	/>
</svelte:head>

<!-- Hero Section -->
<main
	class="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-4 pt-16 pb-20 text-center sm:pt-24 lg:pt-32"
>
	<!-- Pill Tag -->
	<div
		class="mb-10 inline-flex cursor-pointer items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-50 px-4 py-1.5 align-middle text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-indigo-500/10 transition-all ring-inset hover:scale-105 hover:bg-indigo-100 hover:shadow-indigo-500/20 dark:border-indigo-400/20 dark:bg-indigo-900/40 dark:text-indigo-300 dark:hover:bg-indigo-900/60"
	>
		<span class="relative flex h-2.5 w-2.5">
			<span
				class="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"
			></span>
			<span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
		</span>
		<span>Platform 100% Gratis Tanpa Login</span>
	</div>

	<!-- Headings -->
	<h1
		class="mb-8 text-5xl leading-[1.1] font-extrabold tracking-tight drop-shadow-sm sm:text-6xl md:text-7xl lg:text-[5.5rem]"
	>
		Tingkatkan <br class="hidden sm:block" />
		<span
			class="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
			>Produktivitasmu</span
		>
	</h1>

	<p
		class="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-400"
	>
		Kumpulan 24 perkakas cerdas otomatis yang membantumu melangkah di dunia profesional lebih mudah,
		cepat, dan aman. Mulai dari kalkulasi keuangan hingga dokumen HRD dan bisnis instan.
	</p>

	<!-- CTA Buttons -->
	<div class="flex w-full flex-col items-center justify-center gap-5 sm:w-auto sm:flex-row">
		<a
			href="#koleksi-alat"
			class="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-[0_0_60px_-15px_rgba(79,70,229,0.7)] hover:ring-2 hover:ring-indigo-500 sm:w-auto dark:hover:ring-offset-slate-950"
		>
			<span class="relative z-10 text-[1.05rem]">Jelajahi Perkakas</span>
			<div
				class="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-y-1"
			>
				<svg
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2.5"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
				</svg>
			</div>
			<!-- Glossy overlay -->
			<div
				class="absolute inset-0 bg-linear-to-b from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
			></div>
		</a>
	</div>
</main>

<!-- Koleksi Alat Section -->
<section
	id="koleksi-alat"
	class="relative z-10 border-t border-slate-200/60 bg-slate-50/50 py-24 dark:border-slate-800/60 dark:bg-slate-900/20"
>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto mb-16 max-w-2xl text-center lg:mb-20">
			<h2 class="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
				24 Koleksi Perkakas <span class="text-indigo-600 dark:text-indigo-400">Kerjao</span>
			</h2>
			<p class="text-lg text-slate-600 dark:text-slate-400">
				Pilih alat yang kamu butuhkan hari ini. Semuanya berjalan instan di perambanmu tanpa
				membagikan data privasi ke server manapun.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
			{#each toolsRegistry.filter((t) => t.featured !== false) as tool (tool.path)}
				{@const colors = colorMap[tool.color || 'slate']}
				<a
					href={tool.path}
					class="group relative flex flex-col items-start overflow-hidden rounded-3xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:bg-slate-900/10 {colors.border} {colors.bg}"
				>
					<div
						class="absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-full blur-2xl transition-all {colors.accentBg}"
					></div>
					<div
						class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ring-inset {colors.iconBg} {colors.iconText} {colors.iconRing}"
					>
						<svg
							class="h-7 w-7"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d={iconMap[tool.icon] || defaultIcon}
							/>
						</svg>
					</div>
					<h3
						class="mb-2 text-2xl font-bold tracking-tight text-slate-900 transition-colors dark:text-white {colors.hoverText}"
					>
						{tool.name}
						{#if tool.statusTag}
							<span
								class="ml-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold {colors.tag}"
								>{tool.statusTag}</span
							>
						{/if}
					</h3>
					<p class="leading-relaxed text-slate-600 dark:text-slate-400">
						{tool.description}
					</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Features / Keunggulan Section -->
<section
	class="relative z-10 border-t border-slate-200/60 bg-white/40 py-24 backdrop-blur-3xl dark:border-slate-800/60 dark:bg-slate-900/40"
>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto mb-16 max-w-2xl text-center lg:mb-20">
			<h2 class="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
				Dirancang untuk Profesionalitas
			</h2>
			<p class="text-lg text-slate-600 dark:text-slate-400">
				Tanpa langganan bulanan dan memprioritaskan privasi absolut.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			<!-- Card 1 -->
			<div
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-slate-700/60 dark:bg-slate-800/80"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-40 w-40 rounded-full bg-indigo-500/10 blur-2xl transition-all group-hover:bg-indigo-500/20"
				></div>
				<div
					class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-500/10 ring-inset dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-indigo-500/20"
				>
					<svg
						class="h-7 w-7"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-bold text-slate-900 dark:text-white">Eksekusi Instan</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Semua pemrosesan kami optimasi di sisi peramban (browser) kamu. Cepat, instan, dan bebas
					lag karena tidak butuh proses panggilan server berbelit.
				</p>
			</div>

			<!-- Card 2 -->
			<div
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-slate-700/60 dark:bg-slate-800/80"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-40 w-40 rounded-full bg-pink-500/10 blur-2xl transition-all group-hover:bg-pink-500/20"
				></div>
				<div
					class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-pink-600 ring-1 ring-pink-500/10 ring-inset dark:bg-pink-500/10 dark:text-pink-400 dark:ring-pink-500/20"
				>
					<svg
						class="h-7 w-7"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
						/>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-bold text-slate-900 dark:text-white">Keamanan Mutlak</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Kerahasiaan gaji dan identitasmu terjamin. Tidak ada satupun teks yang disimpan lintas
					sesi pengguna; 100% aman berkat teknologi lokal browser.
				</p>
			</div>

			<!-- Card 3 -->
			<div
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-slate-700/60 dark:bg-slate-800/80"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl transition-all group-hover:bg-emerald-500/20"
				></div>
				<div
					class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-500/10 ring-inset dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20"
				>
					<svg
						class="h-7 w-7"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-bold text-slate-900 dark:text-white">Estetika Tinggi</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Memberi rasa percaya diri saat mencetak ke PDF. Dokumen hasil dibuat mengikuti tata bahasa
					baku dan proporsi resmi A4 yang estetik.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Pusat Panduan & Artikel Section -->
<section
	id="artikel-panduan"
	class="relative z-10 border-t border-slate-200/60 bg-slate-50/30 py-24 dark:border-slate-800/60 dark:bg-slate-900/40"
>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="flex flex-col items-center justify-between gap-6 mb-16 md:flex-row lg:mb-20">
			<div class="max-w-2xl text-center md:text-left">
				<h2 class="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
					Pusat Panduan & <span class="text-indigo-600 dark:text-indigo-400">Wawasan Karir</span>
				</h2>
				<p class="text-lg text-slate-600 dark:text-slate-400">
					Tips profesional, panduan hukum ketenagakerjaan, and wawasan terbaru untuk menunjang
					pertumbuhan karirmu.
				</p>
			</div>
			<a
				href="/artikel"
				class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-indigo-600 bg-white border border-indigo-100 rounded-2xl shadow-sm transition-all hover:bg-indigo-50 hover:border-indigo-200 dark:bg-slate-800 dark:border-slate-700 dark:text-indigo-400 dark:hover:bg-slate-700"
			>
				Lihat Semua Artikel
				<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			</a>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each data.featuredArticles as article (article.slug)}
				<a
					href="/artikel/{article.slug}"
					class="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-slate-700/60 dark:bg-slate-800/80"
				>
					{#if article.image}
						<div class="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
							<img
								src={article.image}
								alt={article.title}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
						</div>
					{:else}
						<div
							class="aspect-video w-full flex items-center justify-center bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30"
						>
							<svg
								class="w-12 h-12 text-indigo-200 dark:text-indigo-900"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
								/>
							</svg>
						</div>
					{/if}
					<div class="p-8">
						<div class="flex items-center gap-3 mb-4 text-sm font-medium text-slate-500">
							<span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-700/50"
								>{new Date(article.date).toLocaleDateString('id-ID', {
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})}</span
							>
							<span class="w-1 h-1 rounded-full bg-slate-300"></span>
							<span>Panduan Karir</span>
						</div>
						<h3
							class="mb-3 text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400"
						>
							{article.title}
						</h3>
						<p class="text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
							{article.description}
						</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Bottom CTA -->
<section class="relative z-10 py-24 mb-12">
	<div class="mx-auto max-w-5xl px-6 lg:px-8">
		<div
			class="relative overflow-hidden rounded-[2.5rem] bg-indigo-600 px-8 py-16 text-center shadow-2xl sm:px-16"
		>
			<!-- Decorative patterns -->
			<div class="absolute inset-0 opacity-10">
				<svg
					class="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 text-white"
					fill="currentColor"
					viewBox="0 0 100 100"
				>
					<circle cx="50" cy="50" r="40" />
				</svg>
				<svg
					class="absolute bottom-0 right-0 w-96 h-96 translate-x-1/3 translate-y-1/3 text-white"
					fill="currentColor"
					viewBox="0 0 100 100"
				>
					<circle cx="50" cy="50" r="40" />
				</svg>
			</div>

			<div class="relative z-10 mx-auto max-w-2xl">
				<h2 class="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
					Siap Menjadi Lebih Profesional?
				</h2>
				<p class="mb-10 text-lg leading-relaxed text-indigo-100 sm:text-xl">
					Mulai gunakan koleksi 24+ perkakas kami sekarang. 100% Gratis, Tanpa Login, Tanpa Berbagi
					Data Sensitif.
				</p>
				<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<a
						href="/semua-alat"
						class="inline-flex w-full items-center justify-center rounded-2xl bg-white px-8 py-4 font-bold text-indigo-600 shadow-xl transition-all hover:-translate-y-1 hover:bg-slate-50 sm:w-auto"
					>
						Lihat Semua Perkakas
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
