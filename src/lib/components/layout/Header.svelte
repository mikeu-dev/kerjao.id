<script lang="ts">
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<nav
	class="relative z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8 print:hidden"
>
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
	<div class="flex items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
		<a href="/" class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
			>Beranda</a
		>
		<a href="/artikel" class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
			>Artikel Karir</a
		>

		<!-- Tools Dropdown (CSS Hover) -->
		<div class="group relative">
			<button
				class="flex items-center gap-1 py-4 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
			>
				Produk & Layanan
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
			<div class="absolute right-0 z-50 mt-0 hidden w-[80vw] max-w-[700px] pt-2 group-hover:block">
				<!-- Glassmorphic panel -->
				<div
					class="overflow-hidden rounded-2xl border border-slate-200/50 bg-white/80 p-8 shadow-2xl backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/90"
				>
					<!-- Desktop Grid Layout -->
					<div class="grid grid-cols-1 gap-8 text-sm sm:grid-cols-3">
						<!-- Kolom 1: Surat Personal & Karir -->
						<div>
							<div class="mb-5 flex items-center gap-2">
								<div
									class="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400"
								>
									<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										/>
									</svg>
								</div>
								<h3 class="font-bold tracking-wide text-slate-900 dark:text-white">
									Surat & Karir
								</h3>
							</div>
							<div class="flex flex-col gap-3 font-medium text-slate-500 dark:text-slate-400">
								<a
									href="/surat-lamaran"
									class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
									>Surat Lamaran</a
								>
								<a
									href="/surat-resign"
									class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
									>Surat Resign</a
								>
								<a
									href="/surat-kuasa"
									class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
									>Surat Kuasa</a
								>
								<a
									href="/paklaring"
									class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
									>Surat Paklaring</a
								>
								<a
									href="/surat-izin"
									class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
									>Surat Izin Cuti</a
								>
								<a
									href="/cv-maker"
									class="mt-1 font-bold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
									>CV ATS-Friendly ✨</a
								>
							</div>
						</div>

						<!-- Kolom 2: Dokumen Bisnis & HR -->
						<div>
							<div class="mb-5 flex items-center gap-2">
								<div
									class="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400"
								>
									<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<h3 class="font-bold tracking-wide text-slate-900 dark:text-white">Bisnis & HR</h3>
							</div>
							<div class="flex flex-col gap-3 font-medium text-slate-500 dark:text-slate-400">
								<a
									href="/surat-peringatan"
									class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
									>Surat Peringatan</a
								>
								<a
									href="/surat-perjanjian"
									class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
									>Surat Perjanjian</a
								>
								<a
									href="/surat-hutang"
									class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
									>Surat Hutang Piutang</a
								>
								<a
									href="/surat-jalan"
									class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
									>Surat Jalan</a
								>
								<a
									href="/surat-penawaran"
									class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
									>Surat Penawaran B2B</a
								>
								<a
									href="/purchase-order"
									class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
									>Purchase Order</a
								>
							</div>
						</div>

						<!-- Kolom 3: Keuangan -->
						<div>
							<div class="mb-5 flex items-center gap-2">
								<div
									class="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400"
								>
									<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
										/>
									</svg>
								</div>
								<h3 class="font-bold tracking-wide text-slate-900 dark:text-white">Keuangan</h3>
							</div>
							<div class="flex flex-col gap-3 font-medium text-slate-500 dark:text-slate-400">
								<a
									href="/invoice"
									class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
									>Buat Invoice</a
								>
								<a
									href="/kwitansi"
									class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
									>Buat Kwitansi</a
								>
								<a
									href="/slip-gaji"
									class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
									>Slip Gaji</a
								>
								<a
									href="/kalkulator-gaji"
									class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
									>Kalkulator Gaji</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>
