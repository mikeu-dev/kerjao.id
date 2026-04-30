<script lang="ts">
	import Meta from '$lib/components/seo/Meta.svelte';
	import PatunganForm from '$lib/components/patungan/PatunganForm.svelte';
	import PatunganResult from '$lib/components/patungan/PatunganResult.svelte';
	import { calculateSplitBill, type Friend, type Item, type ExtraCost } from '$lib/utils/split-bill';
	import { Calculator, Share2, Printer, Download, RotateCcw } from 'lucide-svelte';

	// Initial data based on user example
	let friends = $state<Friend[]>([
		{ id: 'f1', name: 'Saya' },
		{ id: 'f2', name: 'Teman A' },
		{ id: 'f3', name: 'Teman B' }
	]);

	let items = $state<Item[]>([
		{ id: 'i1', name: 'Paket Kumplit Ayam Penyet', price: 35500, quantity: 1, assignedTo: ['f1'] },
		{ id: 'i2', name: 'Ayam Penyet', price: 28500, quantity: 2, assignedTo: ['f2', 'f3'] }
	]);

	let extraCosts = $state<ExtraCost[]>([
		{ id: 'e1', name: 'Voucher Diskon', amount: -35000 },
		{ id: 'e2', name: 'Biaya Layanan', amount: 500 }
	]);

	let result = $derived(calculateSplitBill(items, friends, extraCosts));

	async function shareResults() {
		const text = `Patungan Makan Rincian:\n` + 
			result.results.map(r => `${r.friendName}: Rp ${r.total.toLocaleString('id-ID')}`).join('\n') +
			` \nTotal: Rp ${result.grandTotal.toLocaleString('id-ID')}\nHitung otomatis di Kerjao.id`;
		
		if (navigator.share) {
			try {
				await navigator.share({
					title: 'Hasil Patungan Makan',
					text: text,
					url: window.location.href
				});
			} catch (err) {
				console.error('Error sharing:', err);
			}
		} else {
			// Fallback copy to clipboard
			navigator.clipboard.writeText(text);
			alert('Rincian berhasil disalin ke clipboard!');
		}
	}

	function resetData() {
		if (confirm('Apakah Anda yakin ingin menghapus semua data hitungan?')) {
			friends = [{ id: 'f1', name: 'Saya' }];
			items = [];
			extraCosts = [];
		}
	}
</script>

<Meta
	title="Kalkulator Patungan Makan (Split Bill) - Bagi Biaya Adil | Kerjao"
	description="Hitung bagi biaya makan bareng teman dengan mudah dan adil. Otomatis bagi diskon dan biaya tambahan secara proporsional. Gratis dan tanpa login."
	keywords="kalkulator patungan, split bill online, bagi biaya makan, hitung patungan gofood grabfood, bagi diskon makanan"
/>

<div class="relative z-10 mx-auto max-w-7xl px-4 pt-20 lg:pt-32 pb-12 sm:px-6 lg:px-8">
	<!-- Header -->
	<div class="mb-12 text-center print:hidden">
		<h1 class="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
			Kalkulator <span
				class="bg-linear-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent"
				>Patungan Makan</span
			>
		</h1>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl dark:text-slate-400">
			Bagi tagihan pesanan makanan berkelompok secara adil. Diskon dan biaya tambahan dibagi secara proporsional.
		</p>
		
		<div
			class="animate-fade-in mt-6 inline-flex items-center rounded-full border border-orange-500/20 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 shadow-sm ring-1 ring-orange-500/10 ring-inset dark:border-orange-400/20 dark:bg-orange-900/40 dark:text-orange-300"
		>
			<span class="relative mr-3 flex h-2 w-2">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"
				></span>
				<span class="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
			</span>
			Bagi Diskon & Pajak Secara Adil
		</div>
	</div>

	<!-- Main Content Grid -->
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
		<!-- Sidebar Form (Kiri) -->
		<div class="flex flex-col gap-6 lg:col-span-5 xl:col-span-6 print:hidden">
			<!-- Form Panel -->
			<div
				class="rounded-3xl border border-slate-200/60 bg-white/60 p-6 shadow-xl shadow-slate-200/20 backdrop-blur-xl sm:p-8 dark:border-slate-700/60 dark:bg-slate-800/60 dark:shadow-none"
			>
				<div class="mb-8 flex items-center justify-between">
					<div class="flex items-center gap-3">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400"
						>
							<Calculator size={20} />
						</div>
						<h2 class="text-xl font-bold text-slate-900 dark:text-white">Rincian Pesanan</h2>
					</div>
					<button 
						onclick={resetData}
						class="flex items-center gap-1 text-xs font-semibold text-rose-500 hover:text-rose-600 transition-colors"
					>
						<RotateCcw size={14} />
						Reset
					</button>
				</div>
				<PatunganForm bind:friends bind:items bind:extraCosts />
			</div>

			<!-- Quick Actions -->
			<div class="hidden grid-cols-2 gap-4 md:grid">
				<button 
					onclick={() => window.print()}
					class="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white py-3 font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
				>
					<Printer size={18} />
					Cetak Hasil
				</button>
				<button 
					onclick={shareResults}
					class="flex items-center justify-center gap-2 rounded-2xl bg-orange-500 py-3 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 active:scale-95"
				>
					<Share2 size={18} />
					Bagikan Rincian
				</button>
			</div>
		</div>

		<!-- Result Area (Kanan) -->
		<div class="flex flex-col gap-6 lg:col-span-7 xl:col-span-6">
			<div
				class="relative min-h-[500px] rounded-3xl border border-slate-200/60 bg-slate-100/50 p-6 shadow-inner sm:p-8 dark:border-slate-700/60 dark:bg-slate-900/50 print:border-none print:bg-transparent print:p-0 print:shadow-none"
			>
				<h2
					class="mb-8 flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white print:hidden"
				>
					<div
						class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
					>
						<Download size={20} />
					</div>
					<span>Hasil Patungan</span>
				</h2>

				<PatunganResult {...result} />
			</div>
			
			<!-- Mobile Actions -->
			<div class="grid grid-cols-2 gap-4 md:hidden print:hidden">
				<button 
					onclick={() => window.print()}
					class="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
				>
					<Printer size={18} />
					Cetak
				</button>
				<button 
					onclick={shareResults}
					class="flex items-center justify-center gap-2 rounded-2xl bg-orange-500 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25"
				>
					<Share2 size={18} />
					Bagikan
				</button>
			</div>
		</div>
	</div>

	<!-- SEO/Info Content -->
	<div class="mx-auto mt-20 max-w-4xl print:hidden">
		<article class="prose prose-slate dark:prose-invert max-w-none rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
			<h2>Cara Menggunakan Kalkulator Patungan Makan</h2>
			<p>
				Seringkali saat memesan makanan lewat aplikasi (seperti GoFood, GrabFood, atau ShopeeFood), kita kesulitan membagi total biaya karena adanya biaya layanan, ongkos kirim, dan potongan diskon yang cukup besar. Kalkulator ini dirancang untuk membagi biaya tersebut secara <strong>proporsional</strong>.
			</p>
			
			<h3>Kenapa harus proporsional?</h3>
			<p>
				Bayangkan Anda memesan makanan seharga Rp 10.000 dan teman Anda memesan Rp 90.000 (total Rp 100.000). Jika ada biaya layanan Rp 10.000, membaginya rata (Rp 5.000 masing-masing) tentu tidak adil. Dengan sistem proporsional, Anda hanya menanggung 10% dari biaya tersebut (Rp 1.000) dan teman Anda 90% (Rp 9.000).
			</p>

			<ul>
				<li><strong>Daftar Teman:</strong> Tambahkan semua orang yang ikut memesan.</li>
				<li><strong>Item Pesanan:</strong> Masukkan nama menu, harga satuan, dan jumlahnya. Klik nama teman untuk menandai siapa saja yang ikut memakan menu tersebut.</li>
				<li><strong>Biaya & Diskon:</strong> Masukkan biaya tambahan (positif) atau voucher diskon (negatif).</li>
			</ul>
		</article>
	</div>
</div>

<style>
	@media print {
		:global(body) {
			background-color: white !important;
			color: black !important;
		}
		:global(nav),
		:global(header),
		:global(footer),
		:global(.print\:hidden) {
			display: none !important;
		}
	}
</style>
