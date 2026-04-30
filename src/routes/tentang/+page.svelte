<script lang="ts">
	import Meta from '$lib/components/seo/Meta.svelte';
	import ToolIcon from '$lib/components/ui/ToolIcon.svelte';
</script>

<Meta
	title="Tentang Kami - Kerjao.id | Platform Alat Karir & Bisnis Gratis"
	description="Kenali lebih dekat Kerjao.id — platform Indonesia yang menyediakan 25+ perkakas karir dan bisnis profesional, 100% gratis dan tanpa login."
	keywords="tentang kerjao, tentang kami, platform karir indonesia, alat bisnis gratis"
/>

<!-- Hero -->
<section class="relative z-10 overflow-hidden px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-24 lg:px-8">
	<div class="mx-auto max-w-4xl text-center">
		<div
			class="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:border-indigo-400/20 dark:bg-indigo-900/40 dark:text-indigo-300"
		>
			<ToolIcon name="Users" class="h-4 w-4" />
			<span>Tentang Kami</span>
		</div>

		<h1
			class="mb-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl md:text-6xl"
		>
			Memberdayakan
			<span
				class="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
				>Profesional Indonesia</span
			>
		</h1>

		<p
			class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-400"
		>
			Kerjao.id adalah platform digital Indonesia yang menyediakan koleksi perkakas karir dan
			bisnis profesional secara gratis — dirancang agar siapa saja bisa tampil lebih percaya diri
			di dunia kerja.
		</p>
	</div>
</section>

<!-- Misi & Visi -->
<section
	class="relative z-10 border-t border-slate-200/60 bg-white/40 py-16 backdrop-blur-3xl sm:py-24 dark:border-slate-800/60 dark:bg-slate-900/40"
>
	<div class="mx-auto max-w-6xl px-6 lg:px-8">
		<div class="grid gap-12 md:grid-cols-2">
			<!-- Misi -->
			<div
				class="group relative overflow-hidden rounded-3xl border border-indigo-200/60 bg-white p-8 shadow-sm transition-all hover:shadow-lg sm:p-10 dark:border-indigo-700/40 dark:bg-slate-800/80"
			>
				<div
					class="absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl"
				></div>
				<div
					class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-500/10 ring-inset dark:bg-indigo-500/10 dark:text-indigo-400"
				>
					<ToolIcon name="Target" class="h-7 w-7" />
				</div>
				<h2 class="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Misi Kami</h2>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Menyediakan akses gratis ke perkakas digital profesional bagi seluruh pekerja dan
					pelaku bisnis di Indonesia. Kami percaya bahwa setiap orang berhak memiliki dokumen
					yang rapi, kalkulasi yang akurat, dan presentasi yang profesional — tanpa harus
					membayar layanan mahal atau memiliki keahlian teknis khusus.
				</p>
			</div>

			<!-- Visi -->
			<div
				class="group relative overflow-hidden rounded-3xl border border-purple-200/60 bg-white p-8 shadow-sm transition-all hover:shadow-lg sm:p-10 dark:border-purple-700/40 dark:bg-slate-800/80"
			>
				<div
					class="absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl"
				></div>
				<div
					class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 ring-1 ring-purple-500/10 ring-inset dark:bg-purple-500/10 dark:text-purple-400"
				>
					<ToolIcon name="Sparkles" class="h-7 w-7" />
				</div>
				<h2 class="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Visi Kami</h2>
				<p class="leading-relaxed text-slate-600 dark:text-slate-400">
					Menjadi platform nomor satu di Indonesia untuk perkakas karir dan bisnis digital
					yang memberdayakan jutaan profesional — dari fresh graduate hingga pengusaha UMKM —
					untuk mengelola administrasi kerja dengan efisien, aman, dan estetik.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Keunggulan / Nilai Kami -->
<section
	class="relative z-10 border-t border-slate-200/60 bg-slate-50/50 py-16 sm:py-24 dark:border-slate-800/60 dark:bg-slate-900/20"
>
	<div class="mx-auto max-w-6xl px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
				Nilai yang Kami <span class="text-indigo-600 dark:text-indigo-400">Pegang Teguh</span>
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
				Setiap fitur yang kami bangun didasari oleh prinsip-prinsip berikut.
			</p>
		</div>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each [
				{
					icon: 'Shield',
					title: 'Privasi Mutlak',
					desc: 'Semua data diproses langsung di peramban (browser) Anda. Tidak ada data sensitif yang dikirim ke server kami. Zero-knowledge by design.',
					color: 'pink'
				},
				{
					icon: 'Zap',
					title: 'Gratis Selamanya',
					desc: 'Seluruh 25+ perkakas kami tersedia tanpa biaya, tanpa login, dan tanpa batasan penggunaan. Kami berkomitmen menjaga aksesibilitas ini.',
					color: 'emerald'
				},
				{
					icon: 'Scale',
					title: 'Standar Profesional',
					desc: 'Dokumen yang dihasilkan mengikuti standar hukum dan format resmi Indonesia — layak untuk dicetak, ditandatangani, dan digunakan secara sah.',
					color: 'blue'
				},
				{
					icon: 'Globe',
					title: 'Aksesibilitas',
					desc: 'Platform kami dirancang responsif dan ringan, bisa diakses dari perangkat apapun — smartphone hingga laptop — kapan saja dan di mana saja.',
					color: 'amber'
				},
				{
					icon: 'RefreshCw',
					title: 'Selalu Diperbarui',
					desc: 'Regulasi dan aturan ketenagakerjaan Indonesia terus berubah. Kami secara rutin memperbarui formula dan template agar selalu relevan.',
					color: 'violet'
				},
				{
					icon: 'Heart',
					title: 'Dibuat dengan Hati',
					desc: 'Setiap detail desain, tata bahasa, dan kalkulasi diuji dengan teliti — karena kami tahu dokumen profesional adalah representasi diri Anda.',
					color: 'rose'
				}
			] as item (item.title)}
				<div
					class="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-800/80"
				>
					<div
						class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-700 ring-1 ring-slate-200/80 ring-inset dark:bg-slate-700/50 dark:text-slate-300 dark:ring-slate-600/50"
					>
						<ToolIcon name={item.icon} class="h-6 w-6" />
					</div>
					<h3 class="mb-2 text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
					<p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Siapa di Balik Kerjao -->
<section
	class="relative z-10 border-t border-slate-200/60 bg-white/40 py-16 backdrop-blur-3xl sm:py-24 dark:border-slate-800/60 dark:bg-slate-900/40"
>
	<div class="mx-auto max-w-4xl px-6 text-center lg:px-8">
		<h2 class="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
			Siapa di Balik Kerjao.id?
		</h2>
		<div class="prose prose-slate mx-auto max-w-2xl text-lg dark:prose-invert">
			<p>
				Kerjao.id dikembangkan oleh tim kecil pengembang dan profesional HR di Indonesia yang
				melihat kebutuhan nyata akan perkakas karir digital yang mudah, gratis, dan terpercaya.
			</p>
			<p>
				Kami menggabungkan pengalaman di bidang teknologi, sumber daya manusia, dan hukum
				ketenagakerjaan untuk menciptakan platform yang benar-benar bermanfaat bagi masyarakat
				Indonesia — dari mahasiswa yang baru lulus hingga pengusaha UMKM yang ingin
				mengurus administrasi bisnis secara mandiri.
			</p>
			<p>
				Jika Anda memiliki saran, pertanyaan, atau ingin berkolaborasi, jangan ragu untuk
				<a href="/hubungi-kami" class="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
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
			class="relative overflow-hidden rounded-[2rem] bg-indigo-600 px-6 py-12 text-center shadow-2xl sm:px-12 sm:py-14"
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
					href="/semua-alat"
					class="inline-flex items-center rounded-2xl bg-white px-8 py-4 font-bold text-indigo-600 shadow-xl transition-all hover:-translate-y-1 hover:bg-slate-50"
				>
					Jelajahi Semua Alat
				</a>
			</div>
		</div>
	</div>
</section>
