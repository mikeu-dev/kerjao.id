<script lang="ts">
	import type { JalanData } from '$lib/utils/surat-jalan';

	let { data = $bindable() }: { data: JalanData } = $props();

	function generateId() {
		return Math.random().toString(36).substr(2, 9);
	}

	function addItem() {
		data.items = [
			...data.items,
			{
				id: generateId(),
				kode: '',
				name: 'Barang Logistik Baru',
				quantity: 1,
				unit: 'Pcs',
				note: ''
			}
		];
	}

	function removeItem(id: string) {
		data.items = data.items.filter((item) => item.id !== id);
	}
</script>

<div class="space-y-8">
	<!-- Header Dokumen -->
	<div class="space-y-4 border-l-4 border-violet-500 pl-4">
		<h3 class="font-bold text-slate-800 dark:text-white">Informasi Surat Jalan</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label
					for="suratJalanNumber"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>No. Surat Jalan</label
				>
				<input
					type="text"
					id="suratJalanNumber"
					bind:value={data.suratJalanNumber}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="SJ-2024-001"
				/>
			</div>
			<div>
				<label
					for="date"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Tanggal Pengiriman</label
				>
				<input
					type="date"
					id="date"
					bind:value={data.date}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="poReference"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Referensi No. PO / SO (Opsional)</label
				>
				<input
					type="text"
					id="poReference"
					bind:value={data.poReference}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Sesuai dengan PO No: PO-2024-001"
				/>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Pengirim (Sender) & Penerima (Receiver) -->
	<div class="space-y-4 border-l-4 border-blue-500 pl-4">
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
			<!-- Balok Pengirim -->
			<div
				class="space-y-3 rounded-xl border border-slate-200/60 bg-slate-50 p-4 dark:border-slate-700/60 dark:bg-slate-800/50"
			>
				<h3 class="mb-2 font-bold text-slate-800 dark:text-white">Pihak Pengirim (Gudang Anda)</h3>
				<div>
					<label
						for="senderCompany"
						class="mb-1.5 block text-xs font-semibold text-slate-500 dark:text-slate-400"
						>Nama Perusahaan/Gudang</label
					>
					<input
						type="text"
						id="senderCompany"
						bind:value={data.senderCompany}
						class="block w-full rounded-lg border-slate-200 bg-white/70 px-3 py-2 text-sm shadow-sm focus:border-violet-500 focus:ring-violet-500 dark:border-slate-600 dark:bg-slate-900/50 dark:text-white"
						placeholder="PT Logistik Cepat"
					/>
				</div>
				<div>
					<label
						for="senderAddress"
						class="mb-1.5 block text-xs font-semibold text-slate-500 dark:text-slate-400"
						>Alamat Keberangkatan</label
					>
					<textarea
						id="senderAddress"
						bind:value={data.senderAddress}
						rows="2"
						class="block w-full rounded-lg border-slate-200 bg-white/70 px-3 py-2 text-sm shadow-sm focus:border-violet-500 focus:ring-violet-500 dark:border-slate-600 dark:bg-slate-900/50 dark:text-white"
						placeholder="Kawasan Industri Terpadu..."
					></textarea>
				</div>
				<div>
					<label
						for="senderContact"
						class="mb-1.5 block text-xs font-semibold text-slate-500 dark:text-slate-400"
						>Kontak (Opsional)</label
					>
					<input
						type="text"
						id="senderContact"
						bind:value={data.senderContact}
						class="block w-full rounded-lg border-slate-200 bg-white/70 px-3 py-2 text-sm shadow-sm focus:border-violet-500 focus:ring-violet-500 dark:border-slate-600 dark:bg-slate-900/50 dark:text-white"
						placeholder="0812-xxxx-xxxx"
					/>
				</div>
			</div>

			<!-- Balok Penerima -->
			<div
				class="space-y-3 rounded-xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-800/30 dark:bg-blue-900/10"
			>
				<h3 class="mb-2 font-bold text-blue-900 dark:text-blue-300">Tujuan Pengiriman (Klien)</h3>
				<div>
					<label
						for="receiverCompany"
						class="mb-1.5 block text-xs font-semibold text-blue-800/70 dark:text-blue-400"
						>Nama Perusahaan Penerima</label
					>
					<input
						type="text"
						id="receiverCompany"
						bind:value={data.receiverCompany}
						class="block w-full rounded-lg border-blue-200 bg-white/70 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-blue-800/50 dark:bg-slate-900/50 dark:text-white"
						placeholder="PT Maju Bersama"
					/>
				</div>
				<div>
					<label
						for="receiverName"
						class="mb-1.5 block text-xs font-semibold text-blue-800/70 dark:text-blue-400"
						>PIC / U.p (Penerima)</label
					>
					<input
						type="text"
						id="receiverName"
						bind:value={data.receiverName}
						class="block w-full rounded-lg border-blue-200 bg-white/70 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-blue-800/50 dark:bg-slate-900/50 dark:text-white"
						placeholder="Bpk. Anton (Kepala Gudang)"
					/>
				</div>
				<div>
					<label
						for="receiverAddress"
						class="mb-1.5 block text-xs font-semibold text-blue-800/70 dark:text-blue-400"
						>Alamat Bongkar Muat</label
					>
					<textarea
						id="receiverAddress"
						bind:value={data.receiverAddress}
						rows="2"
						class="block w-full rounded-lg border-blue-200 bg-white/70 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-blue-800/50 dark:bg-slate-900/50 dark:text-white"
						placeholder="Jl. Raya Kemerdekaan No. 45"
					></textarea>
				</div>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Data Armada Kendaraan -->
	<div class="space-y-4 border-l-4 border-amber-500 pl-4">
		<h3 class="font-bold text-slate-800 dark:text-white">Identitas Ekspedisi / Armada Kendaraan</h3>
		<p class="mb-2 text-sm text-slate-500 dark:text-slate-400">
			Informasi ini penting agar pihak security gudang tujuan bisa melakukan validasi armada.
		</p>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
			<div>
				<label
					for="driverName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Pengemudi/Supir</label
				>
				<input
					type="text"
					id="driverName"
					bind:value={data.driverName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Asep Surasep"
				/>
			</div>
			<div>
				<label
					for="vehicleNumber"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Plat Nomor (Nopol Kendaraan)</label
				>
				<input
					type="text"
					id="vehicleNumber"
					bind:value={data.vehicleNumber}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 font-mono uppercase shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="B 1234 CD"
				/>
			</div>
			<div>
				<label
					for="shippingMethod"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Jenis/Vendor Ekspedisi</label
				>
				<input
					type="text"
					id="shippingMethod"
					bind:value={data.shippingMethod}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Armada Sendiri / Truk Engkel"
				/>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Tabel Rincian Barang (Tanpa Harga) -->
	<div class="space-y-4">
		<div
			class="flex items-center justify-between border-b border-slate-200 pb-2 dark:border-slate-700/60"
		>
			<div>
				<h3 class="font-bold text-violet-600 dark:text-violet-400">Rincian Barang Bukti Jalan</h3>
				<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
					Jangan tampilkan harga pada struk logistik ini.
				</p>
			</div>
			<button
				type="button"
				onclick={addItem}
				class="text-sm font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
				>+ Tambah Barang Fisik</button
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
						class="block w-full rounded-lg border-slate-200 bg-white/50 px-3 py-2 text-sm shadow-sm focus:border-violet-500 focus:ring-violet-500 dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
						placeholder="MTR-01"
					/>
				</div>
				<div class="flex-1">
					<label
						for="itemName-{item.id}"
						class="mb-1 block text-xs font-semibold text-slate-500 dark:text-slate-400"
						>Nama Barang Fisik</label
					>
					<input
						id="itemName-{item.id}"
						type="text"
						bind:value={item.name}
						class="block w-full rounded-lg border-slate-200 bg-white/50 px-3 py-2 text-sm shadow-sm focus:border-violet-500 focus:ring-violet-500 dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					/>
				</div>
				<div class="w-full shrink-0 sm:w-24">
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
						class="block w-full rounded-lg border-slate-200 bg-white/50 px-3 py-2 text-sm shadow-sm focus:border-violet-500 focus:ring-violet-500 dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
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
						class="block w-full rounded-lg border-slate-200 bg-white/50 px-3 py-2 text-sm shadow-sm focus:border-violet-500 focus:ring-violet-500 dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
						placeholder="Bal/Kg"
					/>
				</div>
				<div class="w-full shrink-0 sm:w-44">
					<label
						for="itemNote-{item.id}"
						class="mb-1 block text-xs font-semibold text-slate-500 dark:text-slate-400"
						>Catatan Fisik (Opsional)</label
					>
					<input
						id="itemNote-{item.id}"
						type="text"
						bind:value={item.note}
						class="block w-full rounded-lg border-slate-200 bg-white/50 px-3 py-2 text-sm shadow-sm focus:border-violet-500 focus:ring-violet-500 dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
						placeholder="Cacat kemasan dll"
					/>
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

	<!-- General Notes -->
	<div class="space-y-4 border-t border-slate-200 pt-4 dark:border-slate-800">
		<div class="sm:col-span-3">
			<label
				for="note"
				class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
				>Catatan/Keterangan Surat Jalan Bawah</label
			>
			<textarea
				id="note"
				bind:value={data.note}
				rows="2"
				class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-violet-500 focus:ring-violet-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				placeholder="Barang yang sudah diterima dan ditandatangani surat jalannya tidak dapat dikembalikan tanpa bukti video unboxing."
			></textarea>
		</div>
	</div>
</div>
