<script lang="ts">
	import type { JualBeliData } from '$lib/utils/jual-beli';
	import { slide } from 'svelte/transition';

	let { data = $bindable() }: { data: JualBeliData } = $props();

	let activeSection = $state('penjual');

	const sections = [
		{ id: 'penjual', label: 'Penjual', icon: '👤' },
		{ id: 'pembeli', label: 'Pembeli', icon: '🤝' },
		{ id: 'barang', label: 'Unit/Barang', icon: '🚗' },
		{ id: 'transaksi', label: 'Harga & Saksi', icon: '💰' }
	];
</script>

<div class="flex flex-col gap-8">
	<!-- Mini Navigation Tabs -->
	<div class="grid grid-cols-4 gap-2 rounded-2xl bg-slate-100 p-1 dark:bg-slate-800/50">
		{#each sections as section}
			<button
				onclick={() => (activeSection = section.id)}
				class="flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] font-bold transition-all sm:text-xs
                {activeSection === section.id
					? 'bg-white text-rose-600 shadow-sm dark:bg-slate-700 dark:text-rose-400'
					: 'text-slate-500 hover:text-slate-700 dark:text-slate-400'}"
			>
				<span>{section.icon}</span>
				<span class="hidden sm:inline">{section.label}</span>
				<span class="sm:hidden">{section.label.split(' ')[0]}</span>
			</button>
		{/each}
	</div>

	<!-- Form Section Content -->
	<div class="space-y-6">
		{#if activeSection === 'penjual'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<h3 class="text-sm font-bold tracking-wider text-slate-400 uppercase">
					Identitas Penjual (Pihak I)
				</h3>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div class="space-y-2">
						<label for="p1-nama" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Nama Lengkap</label
						>
						<input
							id="p1-nama"
							type="text"
							bind:value={data.pihak1.nama}
							placeholder="Nama sesuai KTP"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					<div class="space-y-2">
						<label for="p1-nik" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Nomor KTP (NIK)</label
						>
						<input
							id="p1-nik"
							type="text"
							bind:value={data.pihak1.nik}
							placeholder="16 digit angka"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>
				<div class="space-y-2">
					<label for="p1-alamat" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Alamat Domisili</label
					>
					<input
						id="p1-alamat"
						type="text"
						bind:value={data.pihak1.alamat}
						placeholder="Alamat lengkap penjual"
						class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					/>
				</div>
			</div>
		{:else if activeSection === 'pembeli'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<h3 class="text-sm font-bold tracking-wider text-slate-400 uppercase">
					Identitas Pembeli (Pihak II)
				</h3>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div class="space-y-2">
						<label for="p2-nama" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Nama Pembeli</label
						>
						<input
							id="p2-nama"
							type="text"
							bind:value={data.pihak2.nama}
							placeholder="Nama pembeli"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					<div class="space-y-2">
						<label for="p2-nik" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Nomor KTP Pembeli</label
						>
						<input
							id="p2-nik"
							type="text"
							bind:value={data.pihak2.nik}
							placeholder="NIK Pembeli"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>
				<div class="space-y-2">
					<label for="p2-alamat" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Alamat Pembeli</label
					>
					<input
						id="p2-alamat"
						type="text"
						bind:value={data.pihak2.alamat}
						placeholder="Alamat lengkap pembeli"
						class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					/>
				</div>
			</div>
		{:else if activeSection === 'barang'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<h3 class="text-sm font-bold tracking-wider text-slate-400 uppercase">
					Detail Objek Jual Beli
				</h3>
				<div class="space-y-2">
					<label for="b-jenis" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Jenis Aset</label
					>
					<select
						id="b-jenis"
						bind:value={data.barang.jenis}
						class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
					>
						<option value="Kendaraan">Kendaraan (Motor/Mobil)</option>
						<option value="Elektronik">Elektronik (Laptop/HP)</option>
						<option value="Lainnya">Barang Lainnya</option>
					</select>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<div class="space-y-2">
						<label for="b-nama" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Nama Barang</label
						>
						<input
							id="b-nama"
							type="text"
							bind:value={data.barang.nama}
							placeholder="Misal: Honda Vario"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					<div class="space-y-2">
						<label for="b-tahun" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Tahun</label
						>
						<input
							id="b-tahun"
							type="text"
							bind:value={data.barang.tahun}
							placeholder="2022"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>

				{#if data.barang.jenis === 'Kendaraan'}
					<div in:slide class="grid grid-cols-2 gap-4">
						<div class="space-y-2">
							<label for="b-nopol" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
								>Nomor Polisi</label
							>
							<input
								id="b-nopol"
								type="text"
								bind:value={data.barang.nomorPolisi}
								placeholder="B 1234 XYZ"
								class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
							/>
						</div>
						<div class="space-y-2">
							<label for="b-rangka" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
								>No Rangka / Mesin</label
							>
							<input
								id="b-rangka"
								type="text"
								bind:value={data.barang.nomorRangka}
								placeholder="Sesuai STNK/BPKB"
								class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
							/>
						</div>
					</div>
				{:else if data.barang.jenis === 'Elektronik'}
					<div in:slide class="space-y-2">
						<label for="b-seri" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Nomor Seri / IMEI</label
						>
						<input
							id="b-seri"
							type="text"
							bind:value={data.barang.nomorSeri}
							placeholder="IMEI atau Serial Number"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				{/if}
			</div>
		{:else if activeSection === 'transaksi'}
			<div in:slide={{ axis: 'y' }} class="space-y-4">
				<h3 class="text-sm font-bold tracking-wider text-slate-400 uppercase">Harga & Saksi</h3>
				<div class="space-y-2">
					<label for="t-harga" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
						>Harga Kesepakatan (IDR)</label
					>
					<div class="relative">
						<span class="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400">Rp</span>
						<input
							id="t-harga"
							type="number"
							bind:value={data.transaksi.harga}
							placeholder="0"
							class="w-full rounded-xl border-slate-200 bg-white py-2.5 pr-4 pl-10 text-sm focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>
				<div class="mt-6 grid grid-cols-2 gap-4">
					<div class="space-y-2">
						<label for="saksi1" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Saksi 1</label
						>
						<input
							id="saksi1"
							type="text"
							bind:value={data.saksi1}
							placeholder="Nama Saksi 1"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
					<div class="space-y-2">
						<label for="saksi2" class="text-xs font-semibold text-slate-600 dark:text-slate-300"
							>Saksi 2</label
						>
						<input
							id="saksi2"
							type="text"
							bind:value={data.saksi2}
							placeholder="Nama Saksi 2"
							class="w-full rounded-xl border-slate-200 bg-white px-4 py-2.5 text-sm focus:border-rose-500 focus:ring-rose-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
						/>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
