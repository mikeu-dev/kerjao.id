<script lang="ts">
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<footer class="relative z-10 mt-auto w-full print:hidden">
	<div
		class="mx-auto max-w-7xl border-t border-slate-200/50 px-6 py-12 lg:px-8 dark:border-slate-800/50"
	>
		<!-- Top Grid -->
		<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Brand Column -->
			<div class="sm:col-span-2 lg:col-span-1">
				<a
					href="/"
					class="mb-4 inline-flex items-center gap-2 bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-xl font-extrabold tracking-tighter text-transparent"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 32 32" fill="none">
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
				<p class="mt-3 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
					Platform Indonesia yang menyediakan 25+ perkakas karir dan bisnis profesional, 100% gratis
					dan tanpa login.
				</p>
			</div>

			<!-- Navigasi -->
			<div>
				<h3 class="mb-4 text-xs font-bold tracking-widest text-slate-900 uppercase dark:text-white">
					Navigasi
				</h3>
				<ul class="space-y-3 text-sm">
					<li>
						<a
							href="/"
							class="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
							>Beranda</a
						>
					</li>
					<li>
						<a
							href="/semua-alat"
							class="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
							>Semua Alat</a
						>
					</li>
					<li>
						<a
							href="/artikel"
							class="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
							>Artikel Karir</a
						>
					</li>
					<li>
						<a
							href="/tentang"
							class="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
							>Tentang Kami</a
						>
					</li>
					<li>
						<a
							href="/hubungi-kami"
							class="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
							>Hubungi Kami</a
						>
					</li>
				</ul>
			</div>

			<!-- Alat Populer -->
			<div>
				<h3 class="mb-4 text-xs font-bold tracking-widest text-slate-900 uppercase dark:text-white">
					Alat Populer
				</h3>
				<ul class="space-y-3 text-sm">
					<li>
						<a
							href="/cv-maker"
							class="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
							>CV Maker (ATS)</a
						>
					</li>
					<li>
						<a
							href="/kalkulator-gaji"
							class="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
							>Kalkulator Gaji</a
						>
					</li>
					<li>
						<a
							href="/invoice"
							class="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
							>Invoice Generator</a
						>
					</li>
					<li>
						<a
							href="/surat-lamaran"
							class="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
							>Surat Lamaran</a
						>
					</li>
					<li>
						<a
							href="/surat-perjanjian"
							class="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
							>Perjanjian Freelance</a
						>
					</li>
				</ul>
			</div>

			<!-- Legal -->
			<div>
				<h3 class="mb-4 text-xs font-bold tracking-widest text-slate-900 uppercase dark:text-white">
					Legal
				</h3>
				<ul class="space-y-3 text-sm">
					<li>
						<a
							href="/kebijakan-privasi"
							class="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
							>Kebijakan Privasi</a
						>
					</li>
					<li>
						<a
							href="/syarat-ketentuan"
							class="text-slate-500 transition-colors hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
							>Syarat & Ketentuan</a
						>
					</li>
				</ul>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div
			class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200/50 pt-8 text-xs text-slate-400 sm:flex-row dark:border-slate-800/50"
		>
			<p>&copy; {new Date().getFullYear()} kerjao.id. Seluruh hak cipta dilindungi.</p>
			<p class="text-slate-300 dark:text-slate-600">Dibuat dengan ❤️ di Indonesia</p>
		</div>
	</div>
</footer>
