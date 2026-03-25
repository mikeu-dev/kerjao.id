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
	<div
		class="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-600 sm:gap-6 dark:text-slate-300"
	>
		<a
			href="/surat-lamaran"
			class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Surat Lamaran</a
		>
		<a href="/paklaring" class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
			>Surat Paklaring</a
		>
		<a href="/invoice" class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
			>Buat Invoice</a
		>
		<a
			href="/kalkulator-gaji"
			class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Kalkulator Gaji</a
		>
		<a
			href="/surat-resign"
			class="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400">Surat Resign</a
		>
	</div>
</nav>
