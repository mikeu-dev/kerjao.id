<script lang="ts">
	import type { InvoiceData } from '$lib/utils/invoice';

	let { data = $bindable() }: { data: InvoiceData } = $props();

	function addItem() {
		data.items = [
			...data.items,
			{
				id: Math.random().toString(36).substr(2, 9),
				description: '',
				quantity: 1,
				unitPrice: 0
			}
		];
	}

	function removeItem(id: string) {
		data.items = data.items.filter((item) => item.id !== id);
	}
</script>

<div class="space-y-8">
	<!-- Invoice Details Section -->
	<div class="space-y-4 border-l-4 border-indigo-500 pl-4">
		<div>
			<h3 class="font-bold text-slate-800 dark:text-white">Detail Invoice</h3>
			<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">Atribut penagihan Anda.</p>
		</div>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label
					for="invoiceNumber"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>No. Invoice</label
				>
				<input
					type="text"
					id="invoiceNumber"
					bind:value={data.invoiceNumber}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				/>
			</div>
			<div>
				<!-- Placeholder to align next row if needed, or leave generic fields -->
			</div>
			<div>
				<label
					for="issueDate"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Tanggal Terbit</label
				>
				<input
					type="date"
					id="issueDate"
					bind:value={data.issueDate}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				/>
			</div>
			<div>
				<label
					for="dueDate"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Jatuh Tempo</label
				>
				<input
					type="date"
					id="dueDate"
					bind:value={data.dueDate}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				/>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Entities Section -->
	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
		<!-- Vendor -->
		<div class="space-y-4 border-l-4 border-rose-500 pl-4">
			<div>
				<h3 class="font-bold text-slate-800 dark:text-white">Pengirim (Anda)</h3>
				<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
					Pihak yang menagih pembayaran.
				</p>
			</div>
			<div>
				<label
					for="vendorName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Perusahaan / Pribadi</label
				>
				<input
					type="text"
					id="vendorName"
					bind:value={data.vendorName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="PT Maju Bersama"
				/>
			</div>
			<div>
				<label
					for="vendorDetails"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Alamat & Kontak</label
				>
				<textarea
					id="vendorDetails"
					bind:value={data.vendorDetails}
					rows="3"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Jl. Sudirman No 1\nJakarta\n08123456789"
				></textarea>
			</div>
		</div>

		<!-- Client -->
		<div class="space-y-4 border-l-4 border-emerald-500 pl-4">
			<div>
				<h3 class="font-bold text-slate-800 dark:text-white">Penerima (Klien)</h3>
				<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
					Pihak yang ditagih (pembayar).
				</p>
			</div>
			<div>
				<label
					for="clientName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Klien</label
				>
				<input
					type="text"
					id="clientName"
					bind:value={data.clientName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Bapak Budi / PT XYZ"
				/>
			</div>
			<div>
				<label
					for="clientDetails"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Alamat & Keterangan</label
				>
				<textarea
					id="clientDetails"
					bind:value={data.clientDetails}
					rows="3"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Jl. Thamrin No 2\nJakarta"
				></textarea>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Line Items Section -->
	<div class="space-y-4 border-l-4 border-amber-500 pl-4">
		<div>
			<h3 class="font-bold text-slate-800 dark:text-white">Daftar Item</h3>
			<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
				Rincian produk atau jasa yang ditagihkan.
			</p>
		</div>

		<div class="space-y-4">
			{#each data.items as item (item.id)}
				<div
					class="relative grid grid-cols-12 items-end gap-3 rounded-xl border border-slate-200 bg-slate-50/50 p-4 shadow-sm dark:border-slate-700/50 dark:bg-slate-800/20"
				>
					<div class="col-span-12 sm:col-span-5">
						<label
							for={`desc-\${item.id}`}
							class="mb-1.5 block text-xs font-semibold text-slate-500 dark:text-slate-400"
							>Deskripsi Layanan / Produk</label
						>
						<input
							id={`desc-\${item.id}`}
							type="text"
							bind:value={item.description}
							class="block w-full rounded-lg border-slate-200 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-white"
							placeholder="Jasa Pembuatan Website"
						/>
					</div>
					<div class="col-span-12 sm:col-span-2">
						<label
							for={`qty-\${item.id}`}
							class="mb-1.5 block text-xs font-semibold text-slate-500 dark:text-slate-400"
							>Qty</label
						>
						<input
							id={`qty-\${item.id}`}
							type="number"
							min="1"
							bind:value={item.quantity}
							class="block w-full rounded-lg border-slate-200 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					<div class="col-span-12 flex items-center gap-2 sm:col-span-4">
						<div class="w-full">
							<label
								for={`price-\${item.id}`}
								class="mb-1.5 block text-xs font-semibold text-slate-500 dark:text-slate-400"
								>Harga Satuan (Rp)</label
							>
							<input
								id={`price-\${item.id}`}
								type="number"
								min="0"
								bind:value={item.unitPrice}
								class="block w-full rounded-lg border-slate-200 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-white"
							/>
						</div>
					</div>
					<!-- Delete button -->
					<div class="col-span-12 flex justify-end sm:col-span-1">
						{#if data.items.length > 1}
							<button
								type="button"
								onclick={() => removeItem(item.id)}
								class="rounded-lg p-2 text-rose-500 transition-colors hover:bg-rose-50 dark:hover:bg-rose-500/10"
								title="Hapus Item"
							>
								<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
									/>
								</svg>
							</button>
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<button
			type="button"
			onclick={addItem}
			class="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400"
		>
			<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
				><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" /></svg
			>
			Tambah Item Baru
		</button>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Financials Section -->
	<div class="space-y-4 border-l-4 border-violet-500 pl-4">
		<div>
			<h3 class="font-bold text-slate-800 dark:text-white">Diskon & Pajak</h3>
			<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
				Penyesuaian nominal akhir tagihan.
			</p>
		</div>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label
					for="discount"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Potongan Diskon (Rp)</label
				>
				<input
					type="number"
					id="discount"
					min="0"
					bind:value={data.discount}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				/>
			</div>
			<div>
				<label
					for="taxRate"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Tarif Pajak (%)</label
				>
				<input
					type="number"
					id="taxRate"
					min="0"
					max="100"
					bind:value={data.taxRate}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Contoh: 11 untuk PPN"
				/>
				<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
					Pajak dihitung setelah diskon.
				</p>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Additional Notes Section -->
	<div class="space-y-4 border-l-4 border-cyan-500 pl-4">
		<div>
			<h3 class="font-bold text-slate-800 dark:text-white">Keterangan Tambahan</h3>
			<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
				Informasi pembayaran atau instruksi tambahan.
			</p>
		</div>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label
					for="paymentInfo"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Informasi Pembayaran</label
				>
				<textarea
					id="paymentInfo"
					bind:value={data.paymentInfo}
					rows="3"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="BCA 12345678 a.n. Budi"
				></textarea>
			</div>
			<div>
				<label
					for="notes"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Catatan Khusus</label
				>
				<textarea
					id="notes"
					bind:value={data.notes}
					rows="3"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Terima kasih atas kerjasamanya!"
				></textarea>
			</div>
		</div>
	</div>
</div>
