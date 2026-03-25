<script lang="ts">
	import type { POData } from '$lib/utils/po';

	let { data = $bindable() }: { data: POData } = $props();

	function generateId() {
		return Math.random().toString(36).substr(2, 9);
	}

	function addItem() {
		data.items = [
			...data.items,
			{
				id: generateId(),
				kode: '',
				name: 'Barang / Material Baru',
				quantity: 1,
				unit: 'Pcs',
				price: 0
			}
		];
	}

	function removeItem(id: string) {
		data.items = data.items.filter((item) => item.id !== id);
	}

	function copyBillingToShipping() {
		data.shippingAddress = data.buyerAddress;
	}
</script>

<div class="space-y-8">
	<!-- Header PO & Dates -->
	<div class="space-y-4 border-l-4 border-emerald-500 pl-4">
		<h3 class="font-bold text-slate-800 dark:text-white">Dokumen & Ketentuan (Header)</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label
					for="poNumber"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>No. Purchase Order (PO)</label
				>
				<input
					type="text"
					id="poNumber"
					bind:value={data.poNumber}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="PO-2024-001"
				/>
			</div>
			<div>
				<label
					for="date"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Tanggal Terbit PO</label
				>
				<input
					type="date"
					id="date"
					bind:value={data.date}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				/>
			</div>
			<div>
				<label
					for="paymentTerms"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Termin Pembayaran (Terms)</label
				>
				<input
					type="text"
					id="paymentTerms"
					bind:value={data.paymentTerms}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Net 30 / Transfer Sebelum Kirim"
				/>
			</div>
			<div>
				<label
					for="shippingMethod"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Metode Pengiriman</label
				>
				<input
					type="text"
					id="shippingMethod"
					bind:value={data.shippingMethod}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Kurir Darat / Lalamove / Kargo"
				/>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Pembeli (Buyer) & Pengiriman (Shipping To) -->
	<div class="space-y-4 border-l-4 border-indigo-500 pl-4">
		<h3 class="font-bold text-slate-800 dark:text-white">Identitas Perusahaan Anda (Pembeli)</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="buyerCompany"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Perusahaan Pembeli</label
				>
				<input
					type="text"
					id="buyerCompany"
					bind:value={data.buyerCompany}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="CV Mekar Jaya Group"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="buyerAddress"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Alamat Perusahaan (Billing)</label
				>
				<textarea
					id="buyerAddress"
					bind:value={data.buyerAddress}
					rows="2"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Jl. Pahlawan Karya No. 12, Jawa Barat"
				></textarea>
			</div>
			<div class="sm:col-span-2">
				<label
					for="buyerName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Pic / Penanggung Jawab</label
				>
				<input
					type="text"
					id="buyerName"
					bind:value={data.buyerName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Budi Santoso (Purchasing Dept)"
				/>
			</div>

			<!-- Shipping Block -->
			<div
				class="mt-4 rounded-xl border border-indigo-100 bg-indigo-50/50 p-4 sm:col-span-2 dark:border-indigo-800/30 dark:bg-indigo-900/10"
			>
				<div class="mb-2 flex items-center justify-between">
					<label
						for="shippingAddress"
						class="block text-sm font-bold text-indigo-900 dark:text-indigo-300"
						>Alamat Pengiriman Barang (Ship To)</label
					>
					<button
						type="button"
						onclick={copyBillingToShipping}
						class="text-xs text-indigo-600 underline hover:text-indigo-800 dark:text-indigo-400"
						>Sama dengan Billing</button
					>
				</div>
				<textarea
					id="shippingAddress"
					bind:value={data.shippingAddress}
					rows="3"
					class="block w-full rounded-xl border-indigo-200 bg-white/70 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Gudang Operasional, Jl. Raya Bypass No. 89..."
				></textarea>

				<div class="mt-3">
					<label
						for="shippingDate"
						class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
						>Tanggal Pengiriman Diharapkan</label
					>
					<input
						type="date"
						id="shippingDate"
						bind:value={data.shippingDate}
						class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					/>
				</div>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Penjual (Vendor Tujuan) -->
	<div class="space-y-4 border-l-4 border-slate-400 pl-4">
		<h3 class="font-bold text-slate-800 dark:text-white">Ditujukan Kepada (Vendor / Supplier)</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="vendorCompany"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Perusahaan Vendor</label
				>
				<input
					type="text"
					id="vendorCompany"
					bind:value={data.vendorCompany}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="PT Logam Mulia Distribusi"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="vendorAddress"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Alamat Vendor</label
				>
				<textarea
					id="vendorAddress"
					bind:value={data.vendorAddress}
					rows="2"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Kawasan Industri Pulogadung..."
				></textarea>
			</div>
			<div class="sm:col-span-2">
				<label
					for="vendorContact"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>PIC / Kontak Vendor (Opsional)</label
				>
				<input
					type="text"
					id="vendorContact"
					bind:value={data.vendorContact}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Attn: Bpk Hendra (Sales)"
				/>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Tabel Pesanan -->
	<div class="space-y-4">
		<div
			class="flex items-center justify-between border-b border-slate-200 pb-2 dark:border-slate-700/60"
		>
			<h3 class="font-bold text-emerald-600 dark:text-emerald-400">
				Rincian Pemesanan (Daftar Barang)
			</h3>
			<button
				type="button"
				onclick={addItem}
				class="text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
				>+ Tambah Barang</button
			>
		</div>

		{#each data.items as item, index (item.id)}
			<div
				class="flex flex-col gap-3 rounded-xl border border-slate-200/60 bg-slate-50 p-4 sm:flex-row sm:items-center dark:border-slate-700/60 dark:bg-slate-800/50"
			>
				<div
					class="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-500 sm:flex dark:bg-slate-700 dark:text-slate-400"
				>
					{index + 1}
				</div>
				<div class="w-full shrink-0 sm:w-28">
					<label
						for="itemSku-{item.id}"
						class="mb-1 block text-xs font-semibold text-slate-500 dark:text-slate-400"
						>SKU/Kode</label
					>
					<input
						id="itemSku-{item.id}"
						type="text"
						bind:value={item.kode}
						class="block w-full rounded-lg border-slate-200 bg-white/50 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
						placeholder="Opsional"
					/>
				</div>
				<div class="flex-1">
					<label
						for="itemName-{item.id}"
						class="mb-1 block text-xs font-semibold text-slate-500 dark:text-slate-400"
						>Diskripsi Barang</label
					>
					<input
						id="itemName-{item.id}"
						type="text"
						bind:value={item.name}
						class="block w-full rounded-lg border-slate-200 bg-white/50 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					/>
				</div>
				<div class="w-full shrink-0 sm:w-20">
					<label
						for="itemQty-{item.id}"
						class="mb-1 block text-xs font-semibold text-slate-500 dark:text-slate-400"
						>Kuantitas</label
					>
					<input
						id="itemQty-{item.id}"
						type="number"
						bind:value={item.quantity}
						min="1"
						class="block w-full rounded-lg border-slate-200 bg-white/50 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					/>
				</div>
				<div class="w-full shrink-0 sm:w-20">
					<label
						for="itemUnit-{item.id}"
						class="mb-1 block text-xs font-semibold text-slate-500 dark:text-slate-400"
						>Satuan</label
					>
					<input
						id="itemUnit-{item.id}"
						type="text"
						bind:value={item.unit}
						class="block w-full rounded-lg border-slate-200 bg-white/50 px-3 py-2 text-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
						placeholder="Pcs/Kg"
					/>
				</div>
				<div class="w-full shrink-0 sm:w-36">
					<label
						for="itemPrice-{item.id}"
						class="mb-1 block text-xs font-semibold text-slate-500 dark:text-slate-400"
						>Harga Satuan</label
					>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
							<span class="text-xs text-slate-500 dark:text-slate-400">Rp</span>
						</div>
						<input
							id="itemPrice-{item.id}"
							type="number"
							bind:value={item.price}
							min="0"
							class="block w-full rounded-lg border-slate-200 bg-white/50 py-2 pr-3 pl-7 text-sm shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
						/>
					</div>
				</div>
				<div class="mt-4 flex items-end sm:mt-0 sm:pb-1">
					<button
						type="button"
						onclick={() => removeItem(item.id)}
						class="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 text-rose-500 hover:bg-rose-100 hover:text-rose-700 dark:bg-rose-500/10 dark:hover:bg-rose-500/20 dark:hover:text-rose-400"
						title="Hapus"
					>
						<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
							/>
						</svg>
					</button>
				</div>
			</div>
		{/each}
	</div>

	<!-- Penyesuaian Harga Logistik -->
	<div class="space-y-4 border-t border-slate-200 pt-4 dark:border-slate-800">
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
			<div>
				<label
					for="discount"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Diskon (Voucher/Promo)</label
				>
				<div class="relative">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<span class="text-slate-500 sm:text-sm dark:text-slate-400">Rp</span>
					</div>
					<input
						type="number"
						id="discount"
						bind:value={data.discount}
						min="0"
						class="block w-full rounded-xl border-slate-200 bg-white/50 py-2 pr-4 pl-9 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					/>
				</div>
			</div>
			<div>
				<label
					for="shippingCost"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Biaya Pengiriman (Ongkir)</label
				>
				<div class="relative">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<span class="text-slate-500 sm:text-sm dark:text-slate-400">Rp</span>
					</div>
					<input
						type="number"
						id="shippingCost"
						bind:value={data.shippingCost}
						min="0"
						class="block w-full rounded-xl border-slate-200 bg-white/50 py-2 pr-4 pl-9 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					/>
				</div>
			</div>
			<div>
				<label
					for="taxRate"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Persentase Pajak Terutang</label
				>
				<div class="relative">
					<input
						type="number"
						id="taxRate"
						bind:value={data.taxRate}
						min="0"
						max="100"
						class="block w-full rounded-xl border-slate-200 bg-white/50 py-2 pr-8 pl-4 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					/>
					<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
						<span class="text-slate-500 sm:text-sm dark:text-slate-400">%</span>
					</div>
				</div>
			</div>
			<div class="sm:col-span-3">
				<label
					for="note"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Instruksi Khusus Pada Vendor (Notes)</label
				>
				<textarea
					id="note"
					bind:value={data.note}
					rows="3"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Packing kayu wajib untuk barang elektronik."
				></textarea>
			</div>
		</div>
	</div>
</div>
