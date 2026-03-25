<script lang="ts">
	import type { KwitansiData } from '$lib/utils/kwitansi';

	let { data = $bindable() }: { data: KwitansiData } = $props();
</script>

<div class="space-y-8">
	<!-- Identitas Transaksi -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Data Transaksi
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label
					for="kwitansiNumber"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nomor Kwitansi</label
				>
				<input
					type="text"
					id="kwitansiNumber"
					bind:value={data.kwitansiNumber}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				/>
			</div>
			<div>
				<!-- Placeholder for alignment -->
			</div>

			<div class="sm:col-span-2">
				<label
					for="receivedFrom"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Telah Terima Dari</label
				>
				<input
					type="text"
					id="receivedFrom"
					bind:value={data.receivedFrom}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Budi Santoso / PT Maju Bersama"
				/>
			</div>

			<div class="sm:col-span-2">
				<label
					for="amount"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Uang Sejumlah (Rp)</label
				>
				<div class="relative mt-1 rounded-md shadow-sm">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
						<span class="text-slate-500 sm:text-sm">Rp</span>
					</div>
					<input
						type="number"
						id="amount"
						bind:value={data.amount}
						class="block w-full rounded-xl border-slate-200 bg-white/50 py-2 pr-4 pl-12 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-lg dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
						placeholder="0"
					/>
				</div>
			</div>

			<div class="sm:col-span-2">
				<label
					for="paymentFor"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Untuk Pembayaran</label
				>
				<textarea
					id="paymentFor"
					bind:value={data.paymentFor}
					rows="3"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Pelunasan jasa pembuatan website dan maintenance bulan Agustus..."
				></textarea>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Info Penandatangan -->
	<div class="space-y-4">
		<h3
			class="border-b border-slate-200 pb-2 font-bold text-slate-800 dark:border-slate-700/60 dark:text-white"
		>
			Pengesahan (Penerima)
		</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label
					for="city"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Tempat Buat</label
				>
				<input
					type="text"
					id="city"
					bind:value={data.city}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Jakarta"
				/>
			</div>
			<div>
				<label
					for="date"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Tanggal Buat</label
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
					for="signeeName"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Nama Penerima</label
				>
				<input
					type="text"
					id="signeeName"
					bind:value={data.signeeName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Ahmad Mulyanto"
				/>
			</div>
			<div>
				<label
					for="signeeRole"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Jabatan / Keterangan (Opsional)</label
				>
				<input
					type="text"
					id="signeeRole"
					bind:value={data.signeeRole}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Direktur / Freelancer"
				/>
			</div>
		</div>
	</div>
</div>
