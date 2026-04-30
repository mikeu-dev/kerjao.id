<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve */
	import Meta from '$lib/components/seo/Meta.svelte';
	import ToolIcon from '$lib/components/ui/ToolIcon.svelte';
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<Meta
	title="Tentang Kami - Kerjao.id"
	description="Pelajari lebih lanjut tentang Kerjao.id — platform penyedia perkakas karir dan bisnis profesional gratis untuk masyarakat Indonesia."
	keywords="tentang kerjao, alat karir gratis, hrd indonesia, alat bisnis"
/>

<!-- Hero Section -->
<section class="relative z-10 px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-24 lg:px-8">
	<div class="mx-auto max-w-7xl text-center">
		<div class="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
			<span class="flex h-2 w-2 rounded-full bg-indigo-600"></span>
			Tentang Kami
		</div>
		<h1 class="mb-8 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
			Memberdayakan <span class="bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Profesional Indonesia</span>
		</h1>
		<p class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
			Kerjao.id adalah platform digital Indonesia yang menyediakan koleksi perkakas karir dan bisnis profesional secara gratis — dirancang agar siapa saja bisa tampil lebih percaya diri di dunia kerja.
		</p>
	</div>
</section>

<!-- Mission & Vision -->
<section class="relative z-10 py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid gap-8 md:grid-cols-2">
			<!-- Mission -->
			<div class="rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-slate-700/60 dark:bg-slate-800/80">
				<div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
					</svg>
				</div>
				<h2 class="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Misi Kami</h2>
				<p class="text-slate-600 dark:text-slate-400">
					Mendemokratisasi akses terhadap alat-alat profesional yang biasanya berbayar atau sulit diakses, guna meningkatkan daya saing tenaga kerja Indonesia di kancah global.
				</p>
			</div>

			<!-- Vision -->
			<div class="rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-slate-700/60 dark:bg-slate-800/80">
				<div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
					</svg>
				</div>
				<h2 class="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Visi Kami</h2>
				<p class="text-slate-600 dark:text-slate-400">
					Menjadi pusat ekosistem perkakas karir nomor satu di Indonesia yang mendampingi setiap langkah perjalanan profesional seseorang, dari pencarian kerja hingga manajemen bisnis.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Values -->
<section class="relative z-10 py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
		<h2 class="mb-12 text-3xl font-bold text-slate-900 dark:text-white">Nilai Utama Kami</h2>
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each [
				{ icon: 'privacy', title: 'Privasi Utama', desc: 'Data Anda diproses di browser, tidak pernah kami simpan di server.' },
				{ icon: 'free', title: '100% Gratis', desc: 'Seluruh alat kami dapat digunakan tanpa biaya langganan atau biaya tersembunyi.' },
				{ icon: 'standard', title: 'Standar Profesional', desc: 'Template kami dirancang mengikuti standar industri dan ramah sistem ATS.' },
				{ icon: 'instant', title: 'Instan & Cepat', desc: 'Hasilkan dokumen profesional dalam hitungan detik tanpa perlu login.' },
				{ icon: 'indonesia', title: 'Fokus Indonesia', desc: 'Disesuaikan dengan regulasi dan budaya kerja yang berlaku di Indonesia.' },
				{ icon: 'simple', title: 'User Friendly', desc: 'Antarmuka yang bersih dan mudah digunakan oleh siapa saja, bahkan pemula.' }
			] as value (value.title)}
				<div class="flex flex-col items-center p-6">
					<div class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100 dark:bg-slate-800 dark:border-slate-700">
						<ToolIcon name={value.icon} />
					</div>
					<h3 class="mb-2 font-bold text-slate-900 dark:text-white">{value.title}</h3>
					<p class="text-sm text-slate-500 dark:text-slate-400">{value.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- The Team / Story -->
<section class="relative z-10 overflow-hidden py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="mb-8 text-3xl font-bold text-slate-900 dark:text-white">Cerita Kami</h2>
			<p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
				Kerjao.id lahir dari sebuah keresahan sederhana: banyak profesional muda dan pelaku UMKM yang kesulitan membuat dokumen standar industri (seperti CV ATS atau Invoice Pajak) karena keterbatasan alat atau biaya.
			</p>
			<p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
				Kami percaya bahwa kualitas profesional seseorang tidak boleh dibatasi oleh alat yang mereka gunakan. Oleh karena itu, kami membangun Kerjao.id sebagai sebuah "bengkel" digital yang selalu siap sedia membantu siapa pun meningkatkan level profesionalitasnya.
			</p>
			<p>
				Jika Anda memiliki saran, pertanyaan, atau ingin berkolaborasi, jangan ragu untuk
				<a href={localizeHref('/hubungi-kami')} class="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
					>menghubungi kami</a
				>.
			</p>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="relative z-10 mb-6 py-12 sm:mb-12 sm:py-16">
	<div class="mx-auto max-w-4xl px-6 lg:px-8">
		<div
			class="relative overflow-hidden rounded-4xl bg-indigo-600 px-6 py-12 text-center shadow-2xl sm:px-12 sm:py-14"
		>
			<div class="absolute inset-0 opacity-10">
				<svg
					class="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 text-white"
					fill="currentColor"
					viewBox="0 0 100 100"
				>
					<circle cx="50" cy="50" r="40" />
				</svg>
			</div>
			<div class="relative z-10">
				<h2 class="mb-4 text-2xl font-extrabold text-white sm:text-3xl">
					Mulai Gunakan Kerjao Sekarang
				</h2>
				<p class="mb-8 text-indigo-100">
					25+ perkakas profesional menunggu Anda. Tanpa biaya, tanpa login.
				</p>
				<a
					href={localizeHref('/semua-alat')}
					class="inline-flex items-center rounded-2xl bg-white px-8 py-4 font-bold text-indigo-600 shadow-xl transition-all hover:-translate-y-1 hover:bg-slate-50"
				>
					Jelajahi Semua Alat
				</a>
			</div>
		</div>
	</div>
</section>
