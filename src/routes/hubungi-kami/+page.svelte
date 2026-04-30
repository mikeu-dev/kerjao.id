<script lang="ts">
	import Meta from '$lib/components/seo/Meta.svelte';
	import ToolIcon from '$lib/components/ui/ToolIcon.svelte';

	let formData = $state({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	let isSubmitted = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		// Construct mailto link as fallback (no backend)
		const mailtoSubject = encodeURIComponent(
			`[Kerjao.id] ${formData.subject || 'Pesan dari Website'}`
		);
		const mailtoBody = encodeURIComponent(
			`Nama: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
		);
		window.open(`mailto:kontak@kerjao.id?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');
		isSubmitted = true;
	}
</script>

<Meta
	title="Hubungi Kami - Kerjao.id | Kontak & Dukungan"
	description="Ada pertanyaan, saran, atau ingin berkolaborasi? Hubungi tim Kerjao.id melalui formulir kontak atau email kami."
	keywords="hubungi kerjao, kontak kerjao.id, dukungan, saran, kolaborasi"
/>

<!-- Hero -->
<section class="relative z-10 overflow-hidden px-4 pt-24 pb-12 sm:px-6 sm:pt-32 sm:pb-16 lg:px-8">
	<div class="mx-auto max-w-4xl text-center">
		<div
			class="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-900/40 dark:text-emerald-300"
		>
			<ToolIcon name="Mail" class="h-4 w-4" />
			<span>Hubungi Kami</span>
		</div>

		<h1
			class="mb-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl"
		>
			Kami Senang Mendengar
			<span
				class="bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
				>dari Anda</span
			>
		</h1>

		<p
			class="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-400"
		>
			Ada pertanyaan, masukan, atau ide kolaborasi? Jangan ragu untuk menghubungi kami. Tim
			Kerjao.id siap membantu Anda.
		</p>
	</div>
</section>

<!-- Contact Section -->
<section
	class="relative z-10 border-t border-slate-200/60 bg-white/40 py-16 backdrop-blur-3xl sm:py-24 dark:border-slate-800/60 dark:bg-slate-900/40"
>
	<div class="mx-auto max-w-6xl px-6 lg:px-8">
		<div class="grid gap-12 lg:grid-cols-5">
			<!-- Contact Info -->
			<div class="lg:col-span-2">
				<h2 class="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
					Informasi Kontak
				</h2>

				<div class="space-y-6">
					<!-- Email -->
					<div class="flex items-start gap-4">
						<div
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-500/10 ring-inset dark:bg-indigo-500/10 dark:text-indigo-400"
						>
							<ToolIcon name="Mail" class="h-5 w-5" />
						</div>
						<div>
							<h3 class="font-bold text-slate-900 dark:text-white">Email</h3>
							<a
								href="mailto:kontak@kerjao.id"
								class="text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400"
							>
								kontak@kerjao.id
							</a>
							<p class="mt-1 text-sm text-slate-500">Respon dalam 1-2 hari kerja</p>
						</div>
					</div>

					<!-- Jam Operasional -->
					<div class="flex items-start gap-4">
						<div
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-500/10 ring-inset dark:bg-emerald-500/10 dark:text-emerald-400"
						>
							<ToolIcon name="Clock" class="h-5 w-5" />
						</div>
						<div>
							<h3 class="font-bold text-slate-900 dark:text-white">Jam Layanan</h3>
							<p class="text-slate-600 dark:text-slate-400">Senin - Jumat</p>
							<p class="text-sm text-slate-500">09:00 - 17:00 WIB</p>
						</div>
					</div>

					<!-- Location -->
					<div class="flex items-start gap-4">
						<div
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 ring-1 ring-purple-500/10 ring-inset dark:bg-purple-500/10 dark:text-purple-400"
						>
							<ToolIcon name="MapPin" class="h-5 w-5" />
						</div>
						<div>
							<h3 class="font-bold text-slate-900 dark:text-white">Lokasi</h3>
							<p class="text-slate-600 dark:text-slate-400">Indonesia</p>
							<p class="text-sm text-slate-500">Platform digital — layanan sepenuhnya online</p>
						</div>
					</div>
				</div>

				<!-- FAQ Shortcut -->
				<div class="mt-10 rounded-2xl border border-slate-200/60 bg-slate-50 p-6 dark:border-slate-700/60 dark:bg-slate-800/60">
					<h3 class="mb-3 font-bold text-slate-900 dark:text-white">Pertanyaan Umum</h3>
					<div class="space-y-3 text-sm text-slate-600 dark:text-slate-400">
						<details class="group">
							<summary class="cursor-pointer font-medium text-slate-800 transition-colors hover:text-indigo-600 dark:text-slate-200">
								Apakah Kerjao.id benar-benar gratis?
							</summary>
							<p class="mt-2 pl-0">
								Ya, seluruh 25+ perkakas kami tersedia secara gratis, tanpa biaya langganan,
								tanpa login, dan tanpa batasan penggunaan.
							</p>
						</details>
						<details class="group">
							<summary class="cursor-pointer font-medium text-slate-800 transition-colors hover:text-indigo-600 dark:text-slate-200">
								Apakah data saya aman?
							</summary>
							<p class="mt-2 pl-0">
								Sangat aman. Semua pemrosesan dilakukan langsung di peramban (browser) Anda.
								Tidak ada data yang dikirim ke server kami.
							</p>
						</details>
						<details class="group">
							<summary class="cursor-pointer font-medium text-slate-800 transition-colors hover:text-indigo-600 dark:text-slate-200">
								Bagaimana cara melaporkan bug?
							</summary>
							<p class="mt-2 pl-0">
								Gunakan formulir di samping atau kirim email ke kontak@kerjao.id dengan
								deskripsi masalah dan screenshot jika ada.
							</p>
						</details>
					</div>
				</div>
			</div>

			<!-- Contact Form -->
			<div class="lg:col-span-3">
				<div
					class="overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm sm:p-10 dark:border-slate-700/60 dark:bg-slate-800/80"
				>
					{#if isSubmitted}
						<div class="flex flex-col items-center justify-center py-12 text-center">
							<div
								class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
							>
								<ToolIcon name="CheckCircle" class="h-10 w-10" />
							</div>
							<h3 class="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
								Terima Kasih!
							</h3>
							<p class="mb-6 max-w-md text-slate-600 dark:text-slate-400">
								Pesan Anda telah disiapkan. Silakan kirim melalui aplikasi email yang terbuka.
								Kami akan membalas secepat mungkin.
							</p>
							<button
								onclick={() => (isSubmitted = false)}
								class="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:bg-indigo-700"
							>
								Kirim Pesan Lainnya
							</button>
						</div>
					{:else}
						<h2 class="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
							Kirim Pesan
						</h2>
						<p class="mb-8 text-slate-500">
							Isi formulir di bawah ini dan kami akan merespons secepatnya.
						</p>

						<form onsubmit={handleSubmit} class="space-y-6">
							<div class="grid gap-6 sm:grid-cols-2">
								<div>
									<label
										for="contact-name"
										class="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
										>Nama Lengkap</label
									>
									<input
										id="contact-name"
										type="text"
										bind:value={formData.name}
										required
										placeholder="Nama Anda"
										class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
									/>
								</div>
								<div>
									<label
										for="contact-email"
										class="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
										>Alamat Email</label
									>
									<input
										id="contact-email"
										type="email"
										bind:value={formData.email}
										required
										placeholder="email@contoh.com"
										class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
									/>
								</div>
							</div>

							<div>
								<label
									for="contact-subject"
									class="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
									>Subjek</label
								>
								<select
									id="contact-subject"
									bind:value={formData.subject}
									required
									class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
								>
									<option value="">Pilih subjek...</option>
									<option value="Pertanyaan Umum">Pertanyaan Umum</option>
									<option value="Laporan Bug">Laporan Bug / Masalah Teknis</option>
									<option value="Saran Fitur">Saran Fitur Baru</option>
									<option value="Kerjasama">Peluang Kerjasama / Kolaborasi</option>
									<option value="Lainnya">Lainnya</option>
								</select>
							</div>

							<div>
								<label
									for="contact-message"
									class="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
									>Pesan</label
								>
								<textarea
									id="contact-message"
									bind:value={formData.message}
									required
									rows="5"
									placeholder="Tulis pesan Anda di sini..."
									class="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
								></textarea>
							</div>

							<button
								type="submit"
								class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl sm:w-auto"
							>
								<ToolIcon name="Send" class="h-5 w-5" />
								Kirim Pesan
							</button>
						</form>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>
