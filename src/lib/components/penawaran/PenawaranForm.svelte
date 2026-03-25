<script lang="ts">
	import type { PenawaranData } from '$lib/utils/penawaran';

	let { data = $bindable() }: { data: PenawaranData } = $props();

	function generateId() {
		return Math.random().toString(36).substr(2, 9);
	}

	function addItem() {
		data.items = [
			...data.items,
			{ id: generateId(), name: 'Platform / Jasa / Barang', quantity: 1, price: 0 }
		];
	}

	function removeItem(id: string) {
		data.items = data.items.filter((item) => item.id !== id);
	}
</script>

<div class="space-y-8">
	<!-- Pengirim (Vendor) -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Pihak Pengirim (Vendor / Anda)
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="senderCompany"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Bisnis / Perusahaan Anda</label
				>
				<input
					type="text"
					id="senderCompany"
					bind:value={data.senderCompany}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="PT Gemilang Teknologi Semesta"
				/>
			</div>
			<div>
				<label
					for="senderName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Perwakilan</label
				>
				<input
					type="text"
					id="senderName"
					bind:value={data.senderName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Andi Hermawan"
				/>
			</div>
			<div>
				<label
					for="senderTitle"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Jabatan Perwakilan</label
				>
				<input
					type="text"
					id="senderTitle"
					bind:value={data.senderTitle}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Direktur / Sales Manager"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="senderAddress"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Alamat Perusahaan</label
				>
				<textarea
					id="senderAddress"
					bind:value={data.senderAddress}
					rows="2"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Gedung Cyber 2 Lantai 15, Jl. HR Rasuna Said, Jakarta Selatan"
				></textarea>
			</div>
			<div class="sm:col-span-2">
				<label
					for="senderContact"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Email / Telepon Aktif</label
				>
				<input
					type="text"
					id="senderContact"
					bind:value={data.senderContact}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="halo@perusahaan.com / 0812-xxxx-xxxx"
				/>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Penerima (Client) -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Pihak Penerima (Calon Klien)
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="clientCompany"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Instansi / Perusahaan Klien</label
				>
				<input
					type="text"
					id="clientCompany"
					bind:value={data.clientCompany}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Hotel Mulia Abadi"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="clientName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Kepada (Sosok Spesifik - Opsional)</label
				>
				<input
					type="text"
					id="clientName"
					bind:value={data.clientName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Yth. Bapak Ahmad (General Manager)"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="clientAddress"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Alamat Klien Lengkap</label
				>
				<textarea
					id="clientAddress"
					bind:value={data.clientAddress}
					rows="2"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Jl. Sudirman Kav 2, Kota Administrasi Jakarta"
				></textarea>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Konfigurasi Dokumen -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Konteks Penawaran (Header)
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="subject"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Perihal (Subject)</label
				>
				<input
					type="text"
					id="subject"
					bind:value={data.subject}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Penawaran Harga Pembuatan Sistem Kasir"
				/>
			</div>
			<div>
				<label
					for="letterNumber"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nomor Surat</label
				>
				<input
					type="text"
					id="letterNumber"
					bind:value={data.letterNumber}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="012/Q/XI/2024"
				/>
			</div>
			<div>
				<label
					for="city"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Kota Diterbitkan</label
				>
				<input
					type="text"
					id="city"
					bind:value={data.city}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Jakarta"
				/>
			</div>
			<div>
				<label
					for="date"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Tanggal Terbit</label
				>
				<input
					type="date"
					id="date"
					bind:value={data.date}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				/>
			</div>
			<div>
				<label
					for="validUntil"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Berlaku Hingga</label
				>
				<input
					type="date"
					id="validUntil"
					bind:value={data.validUntil}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="openingText"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Kalimat Pendahuluan</label
				>
				<textarea
					id="openingText"
					bind:value={data.openingText}
					rows="3"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Menindaklanjuti permintaan Bapak/Ibu terkait pengadaan sistem..."
				></textarea>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Tabel Produk & Harga -->
	<div class="space-y-4">
		<div
			class="flex items-center justify-between border-b border-slate-200 pb-2 dark:border-slate-700/60"
		>
			<h3 class="font-bold text-blue-600 dark:text-blue-400">
				Rincian Barang / Layanan (Tabel Penawaran)
			</h3>
			<button
				type="button"
				onclick={addItem}
				class="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
				>+ Tambah Baris</button
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
				<div class="flex-1">
					<label
						for="itemName-{item.id}"
						class="mb-1 block text-xs font-semibold text-slate-500 dark:text-slate-400"
						>Nama Layanan/Produk</label
					>
					<input
						id="itemName-{item.id}"
						type="text"
						bind:value={item.name}
						class="block w-full rounded-lg border-slate-200 bg-white/50 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
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
						class="block w-full rounded-lg border-slate-200 bg-white/50 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					/>
				</div>
				<div class="w-full shrink-0 sm:w-40">
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
							class="block w-full rounded-lg border-slate-200 bg-white/50 py-2 pr-3 pl-7 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
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

	<!-- Penyesuaian Harga & Termin -->
	<div class="space-y-4 border-t border-slate-200 pt-4 dark:border-slate-800">
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label
					for="discount"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Potongan Harga (Diskon) Flat</label
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
						class="block w-full rounded-xl border-slate-200 bg-white/50 py-2 pr-4 pl-9 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					/>
				</div>
			</div>
			<div>
				<label
					for="taxRate"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Pajak Tambahan (Misal PPN 11%)</label
				>
				<div class="relative">
					<input
						type="number"
						id="taxRate"
						bind:value={data.taxRate}
						min="0"
						max="100"
						class="block w-full rounded-xl border-slate-200 bg-white/50 py-2 pr-8 pl-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					/>
					<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
						<span class="text-slate-500 sm:text-sm dark:text-slate-400">%</span>
					</div>
				</div>
			</div>
			<div class="sm:col-span-2">
				<label
					for="note"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Catatan Khusus Penawaran (Term Of Payment, Waktu Pengerjaan, dll)</label
				>
				<textarea
					id="note"
					bind:value={data.note}
					rows="4"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="- Estimasi pengerjaan: 14 hari kerja&#10;- Termin Pembayaran: DP 50%, Pelunasan 50% setelah serah terima..."
				></textarea>
			</div>
		</div>
	</div>
</div>
