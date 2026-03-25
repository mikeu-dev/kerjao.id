<script lang="ts">
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<svelte:head>
	<title>Kerjao.id - 15 Alat Karir & Bisnis Profesional Indonesia</title>
	<meta
		name="description"
		content="Kumpulan 15 tools instan, cerdas, dan gratis: Kalkulator Gaji PPh 21, Invoice Generator, Surat Perjanjian, hingga Surat Lamaran siap pakai untuk profesional."
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
		Kumpulan 15 perkakas cerdas otomatis yang membantumu melangkah di dunia profesional lebih mudah,
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
				15 Koleksi Perkakas <span class="text-indigo-600 dark:text-indigo-400">Kerjao</span>
			</h2>
			<p class="text-lg text-slate-600 dark:text-slate-400">
				Pilih alat yang kamu butuhkan hari ini. Semuanya berjalan instan di perambanmu tanpa
				membagikan data privasi ke server manapun.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
			<!-- Tool 0: CV ATS-Friendly -->
			<a
				href="/cv-maker"
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-rose-300/80 bg-rose-50/30 p-8 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-rose-400 hover:shadow-xl dark:border-rose-700/80 dark:bg-rose-900/10 dark:hover:border-rose-600"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-full bg-rose-500/20 blur-2xl transition-all group-hover:bg-rose-500/30"
				></div>
				<div
					class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 ring-1 ring-rose-500/20 ring-inset dark:bg-rose-500/20 dark:text-rose-400 dark:ring-rose-500/30"
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
							d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						/>
					</svg>
				</div>
				<h3
					class="mb-2 text-2xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-400"
				>
					CV ATS-Friendly <span
						class="ml-2 inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800 dark:bg-red-900 dark:text-red-200"
						>Top</span
					>
				</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Generator CV satu kolom ala Harvard. Dijamin 99% lolos seleksi robot pelacak pelamar (ATS)
					HRD perusahaan Multinasional.
				</p>
			</a>

			<!-- Tool 0.5: Sewa Properti -->
			<a
				href="/surat-sewa"
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-indigo-200/80 bg-indigo-50/20 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-400 hover:shadow-xl dark:border-indigo-700/80 dark:bg-indigo-900/10 dark:hover:border-indigo-600"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl transition-all group-hover:bg-indigo-500/20"
				></div>
				<div
					class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-500/20 ring-inset dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-indigo-500/20"
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
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/>
					</svg>
				</div>
				<h3
					class="mb-2 text-2xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400"
				>
					Sewa Properti <span
						class="ml-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200"
						>Legal</span
					>
				</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Generator Surat Perjanjian Sewa Menyewa (Rumah/Ruko/Kost) resmi. Lengkap dengan
					pasal-pasal perlindungan hukum Pemilik & Penyewa.
				</p>
			</a>

			<!-- Tool 1: Kalkulator Gaji -->
			<a
				href="/kalkulator-gaji"
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-800/80 dark:hover:border-emerald-700"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl transition-all group-hover:bg-emerald-500/20"
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
							d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
				<h3
					class="mb-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400"
				>
					Kalkulator Gaji & THP
				</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Simulasi perhitungan gaji bersih (Take-Home Pay) instan. Lengkap dengan potongan BPJS
					Kes/KTK dan estimasi Pajak PPh 21 TER 2024.
				</p>
			</a>

			<!-- Tool 2: Invoice Generator -->
			<a
				href="/invoice"
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-800/80 dark:hover:border-blue-700"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl transition-all group-hover:bg-blue-500/20"
				></div>
				<div
					class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-500/10 ring-inset dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-500/20"
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
							d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
						/>
					</svg>
				</div>
				<h3
					class="mb-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"
				>
					Invoice Generator
				</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Solusi andalan freelancer. Buat dokumen tagihan yang elegan dan kalkulasi PPN/Diskon
					secara reaktif, lalu unduh ke format PDF.
				</p>
			</a>

			<!-- Tool 3: Surat Keterangan Kerja -->
			<a
				href="/paklaring"
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-300 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-800/80 dark:hover:border-orange-700"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-full bg-orange-500/10 blur-2xl transition-all group-hover:bg-orange-500/20"
				></div>
				<div
					class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 ring-1 ring-orange-500/10 ring-inset dark:bg-orange-500/10 dark:text-orange-400 dark:ring-orange-500/20"
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
							d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
						/>
					</svg>
				</div>
				<h3
					class="mb-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400"
				>
					Surat Paklaring HRD
				</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Klaim JHT BPJS Ketenagakerjaan lebih mudah dengan generator Surat Keterangan Kerja standar
					resmi, lengkap dengan perhitungan masa bakti instan.
				</p>
			</a>

			<!-- Tool 4: Surat Lamaran Kerja -->
			<a
				href="/surat-lamaran"
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-300 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-800/80 dark:hover:border-teal-700"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-full bg-teal-500/10 blur-2xl transition-all group-hover:bg-teal-500/20"
				></div>
				<div
					class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 ring-1 ring-teal-500/10 ring-inset dark:bg-teal-500/10 dark:text-teal-400 dark:ring-teal-500/20"
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
							d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
						/>
					</svg>
				</div>
				<h3
					class="mb-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400"
				>
					Surat Lamaran Kerja
				</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Tulis *Cover Letter* atau Surat Lamaran kerja formal dalam hitungan detik. Struktur tata
					bahasa baku siap pakai membantu meningkatkan peluang dipanggil wawancara.
				</p>
			</a>

			<!-- Tool 5: Kwitansi Generator -->
			<a
				href="/kwitansi"
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0a523a]/40 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-800/80 dark:hover:border-[#0a523a]/60"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-full bg-[#0a523a]/10 blur-2xl transition-all group-hover:bg-[#0a523a]/20"
				></div>
				<div
					class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a523a]/10 text-[#0a523a] ring-1 ring-[#0a523a]/10 ring-inset dark:bg-[#0a523a]/20 dark:text-[#0a523a]/80 dark:ring-[#0a523a]/30"
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
							d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
						/>
					</svg>
				</div>
				<h3
					class="mb-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-[#0a523a] dark:text-white dark:group-hover:text-[#0a523a]/90"
				>
					Kwitansi Digital
				</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Solusi bukti bayar instan ala buku kwitansi klasik. Terdapat fitur Terbilang yang mengubah
					angka nominal nominal menjadi teks ejaan secara otomatis.
				</p>
			</a>

			<!-- Tool 6: Surat Perjanjian Freelance -->
			<a
				href="/surat-perjanjian"
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-red-300 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-800/80 dark:hover:border-red-700"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-full bg-red-500/10 blur-2xl transition-all group-hover:bg-red-500/20"
				></div>
				<div
					class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-500/10 ring-inset dark:bg-red-500/10 dark:text-red-400 dark:ring-red-500/20"
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
							d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
						/>
					</svg>
				</div>
				<h3
					class="mb-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-red-600 dark:text-white dark:group-hover:text-red-400"
				>
					Kontrak Kerja Freelance
				</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Lindungi hak dan kewajiban profesionalmu. Generator MoU Surat Perjanjian Kerja Sama dengan
					templat pasal-pasal standar yang diakui dan siap cetak dengan materai.
				</p>
			</a>

			<!-- Tool 7: Surat Peringatan Karyawan -->
			<a
				href="/surat-peringatan"
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-300 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-800/80 dark:hover:border-amber-700"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl transition-all group-hover:bg-amber-500/20"
				></div>
				<div
					class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 ring-1 ring-amber-500/10 ring-inset dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-500/20"
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
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						/>
					</svg>
				</div>
				<h3
					class="mb-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-400"
				>
					Surat Peringatan (SP)
				</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Draf instan Surat Peringatan 1, 2, hingga 3 (Pemutusan Kerja) dengan tata bahasa HR yang
					diakui. Rapikan barisan karyawan tanpa hambatan birokrasi.
				</p>
			</a>

			<!-- Tool 8: Surat Kuasa Generator -->
			<a
				href="/surat-kuasa"
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-300 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-800/80 dark:hover:border-cyan-700"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl transition-all group-hover:bg-cyan-500/20"
				></div>
				<div
					class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 ring-1 ring-cyan-500/10 ring-inset dark:bg-cyan-500/10 dark:text-cyan-400 dark:ring-cyan-500/20"
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
							d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
						/>
					</svg>
				</div>
				<h3
					class="mb-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400"
				>
					Surat Kuasa
				</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Delegasikan wewenang Anda sesaat. Cetak instan Surat Kuasa legal untuk mengurus BPKB,
					Paspor, atau pencairan dana bank lengkap dengan ruang materai.
				</p>
			</a>

			<!-- Tool 9: Surat Izin Cuti Generator -->
			<a
				href="/surat-izin"
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-300 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-800/80 dark:hover:border-teal-700"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-full bg-teal-500/10 blur-2xl transition-all group-hover:bg-teal-500/20"
				></div>
				<div
					class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 ring-1 ring-teal-500/10 ring-inset dark:bg-teal-500/10 dark:text-teal-400 dark:ring-teal-500/20"
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
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
				</div>
				<h3
					class="mb-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-400"
				>
					Surat Izin Cuti
				</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Sakit mendadak atau butuh rehat liburan? Susun surat permohonan absen formal untuk
					atasan/HRD dalam hitungan detik.
				</p>
			</a>

			<!-- Tool 10: Slip Gaji Generator -->
			<a
				href="/slip-gaji"
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-300 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-800/80 dark:hover:border-indigo-700"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl transition-all group-hover:bg-indigo-500/20"
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
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
				<h3
					class="mb-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400"
				>
					Slip Gaji (Pay Slip)
				</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Buat struk bukti gajian resmi! Tambah baris pendapatan maupun potongan secara dinamis dan
					cetak A5 bersih dengan mudah.
				</p>
			</a>

			<!-- Tool 14: Surat Hutang Piutang -->
			<a
				href="/surat-hutang"
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-300 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-800/80 dark:hover:border-amber-700"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl transition-all group-hover:bg-amber-500/20"
				></div>
				<div
					class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 ring-1 ring-amber-500/10 ring-inset dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-500/20"
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
				<h3
					class="mb-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-400"
				>
					Surat Hutang Piutang
				</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Lindungi aset finansial Anda. Buat kontrak pinjam-meminjam uang bermaterai yang dilengkapi
					pasal jatuh tempo dan penyitaan jaminan hukum.
				</p>
			</a>

			<!-- Tool 15: Surat Jalan / Delivery Note -->
			<a
				href="/surat-jalan"
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-300 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-800/80 dark:hover:border-violet-700"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-full bg-violet-500/10 blur-2xl transition-all group-hover:bg-violet-500/20"
				></div>
				<div
					class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 ring-1 ring-violet-500/10 ring-inset dark:bg-violet-500/10 dark:text-violet-400 dark:ring-violet-500/20"
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
							d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
						/>
					</svg>
				</div>
				<h3
					class="mb-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-400"
				>
					Surat Jalan (Delivery)
				</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Lindungi pengiriman barang Anda dengan bukti serah terima sah. Tersedia pencatatan armada,
					supir, dan 3 kolom tanda tangan resmi.
				</p>
			</a>

			<!-- Tool 14: Purchase Order -->
			<a
				href="/purchase-order"
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-800/80 dark:hover:border-emerald-700"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl transition-all group-hover:bg-emerald-500/20"
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
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						/>
					</svg>
				</div>
				<h3
					class="mb-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400"
				>
					Purchase Order (PO)
				</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Buat dokumen Form Pemesanan (PO) formal. Integrasi informasi Vendor dan Alamat Pengiriman
					dalam satu klik, konfirmasi order instan!
				</p>
			</a>

			<!-- Tool 12: Surat Penawaran Harga (Quotation) -->
			<a
				href="/surat-penawaran"
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-800/80 dark:hover:border-blue-700"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl transition-all group-hover:bg-blue-500/20"
				></div>
				<div
					class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-500/10 ring-inset dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-500/20"
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
							d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
						/>
					</svg>
				</div>
				<h3
					class="mb-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"
				>
					Surat Penawaran Harga
				</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Rancang proposal Quotation B2B (Penawaran Harga) resmi secara instan. Hadir dengan tabel
					kalkulasi otomatis dan narasi profesional.
				</p>
			</a>

			<!-- Tool 12: Surat Resign -->
			<a
				href="/surat-resign"
				class="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-rose-300 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-800/80 dark:hover:border-rose-700"
			>
				<div
					class="absolute top-0 right-0 -mt-12 -mr-12 h-32 w-32 rounded-full bg-rose-500/10 blur-2xl transition-all group-hover:bg-rose-500/20"
				></div>
				<div
					class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 ring-1 ring-rose-500/10 ring-inset dark:bg-rose-500/10 dark:text-rose-400 dark:ring-rose-500/20"
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
							d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						/>
					</svg>
				</div>
				<h3
					class="mb-2 text-2xl font-bold text-slate-900 transition-colors group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-400"
				>
					Surat Pengunduran Diri
				</h3>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Persiapkan *exit* dengan mulus. Alat yang membantu menyusun tata bahasa formal surat
					resign dalam hitungan detik untuk HRD, bebas dari kebingungan.
				</p>
			</a>
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
