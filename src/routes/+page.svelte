<script lang="ts">
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<svelte:head>
	<title>Kerjao.id - Alat Karir Profesional</title>
	<meta
		name="description"
		content="Kumpulan tools instan, cerdas, dan gratis untuk membantu perjalanan karir profesionalmu."
	/>
</svelte:head>

<div
	class="relative min-h-screen overflow-hidden bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50"
>
	<!-- Background Ambient Shapes -->
	<div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
		<!-- Top Left Blue/Indigo Gradient -->
		<div
			class="absolute -top-[20%] -left-[10%] h-[50%] w-[50%] rounded-full bg-indigo-500/10 blur-[130px] dark:bg-indigo-600/20"
		></div>
		<!-- Top Right Purple Gradient -->
		<div
			class="absolute top-[10%] -right-[15%] h-[40%] w-[40%] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-600/15"
		></div>
		<!-- Bottom Center Pink Gradient -->
		<div
			class="absolute -bottom-[20%] left-[20%] h-[50%] w-[60%] rounded-full bg-pink-500/10 blur-[140px] dark:bg-pink-600/10"
		></div>
	</div>

	<!-- Navigation -->
	<nav class="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
		<div
			class="flex items-center gap-2 bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-2xl font-extrabold tracking-tighter text-transparent"
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
		</div>
	</nav>

	<!-- Hero Section -->
	<main
		class="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-4 pt-16 pb-28 text-center sm:pt-24 lg:pt-32"
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
			Kumpulan dokumen kreatif, otomatisasi form, serta perkakas cerdas yang membantumu melangkah di
			dunia profesional lebih mudah, cepat, dan aman.
		</p>

		<!-- CTA Buttons -->
		<div class="flex w-full flex-col items-center justify-center gap-5 sm:w-auto sm:flex-row">
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a
				href="/surat-resign"
				class="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-[0_0_60px_-15px_rgba(79,70,229,0.7)] hover:ring-2 hover:ring-indigo-500 sm:w-auto dark:hover:ring-offset-slate-950"
			>
				<span class="relative z-10 text-[1.05rem]">Coba Surat Resign Generator</span>
				<div
					class="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1"
				>
					<svg
						class="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2.5"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</div>
				<!-- Glossy overlay -->
				<div
					class="absolute inset-0 bg-linear-to-b from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
				></div>
			</a>

			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a
				href="#keunggulan"
				class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 hover:shadow-md sm:w-auto dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-700"
			>
				<span class="text-[1.05rem]">Lihat Keunggulan</span>
			</a>
		</div>
	</main>

	<!-- Features / Keunggulan Section -->
	<section
		id="keunggulan"
		class="relative z-10 border-t border-slate-200/60 bg-white/40 py-24 backdrop-blur-3xl dark:border-slate-800/60 dark:bg-slate-900/40"
	>
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto mb-16 max-w-2xl text-center lg:mb-20">
				<h2
					class="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
				>
					Dirancang untuk Profesionalitas
				</h2>
				<p class="text-lg text-slate-600 dark:text-slate-400">
					Setiap alat dipikirkan secara mendalam untuk memberikan efisiensi luar biasa bagi pekerja
					modern Indonesia.
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
						lag karena tidak butuh proses server berbelit.
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
						Tidak butuh akun dan kami tidak menyimpan satupun data tulisanmu. Formulir surat 100%
						aman mengudara di perambanmu sendiri.
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
					<h3 class="mb-3 text-xl font-bold text-slate-900 dark:text-white">Estetika Premium</h3>
					<p class="leading-relaxed text-slate-600 dark:text-slate-400">
						Dirancang dengan komponen cantik, menyesuaikan otomatis mode sistem, dan memberi
						pengalaman elegan setiap kali digunakan.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer
		class="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-slate-200/50 px-6 py-12 text-slate-500 md:flex-row lg:px-8 dark:border-slate-800/50 dark:text-slate-400"
	>
		<div class="flex items-center gap-2 font-semibold">
			<svg
				class="h-6 w-6 text-indigo-500"
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
			<span>kerjao.id</span>
		</div>
		<p class="text-sm">
			&copy; {new Date().getFullYear()} kerjao.id. Seluruh hak cipta dilindungi.
		</p>
	</footer>
</div>
