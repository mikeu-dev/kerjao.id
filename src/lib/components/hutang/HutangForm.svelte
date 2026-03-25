<script lang="ts">
	import type { HutangData } from '$lib/utils/surat-hutang';

	let { data = $bindable() }: { data: HutangData } = $props();
</script>

<div class="space-y-8">
	<!-- PIHAK PERTAMA (Pemberi Pinjaman) -->
	<div class="space-y-4 border-l-4 border-emerald-500 pl-4">
		<div>
			<h3 class="font-bold text-slate-800 dark:text-white">
				Pihak Pertama (Pemberi Pinjaman / Kreditor)
			</h3>
			<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
				Orang/pihak yang meminjamkan uang (Lender).
			</p>
		</div>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="lenderName"
					class="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300"
					>Nama Lengkap Sesuai KTP</label
				>
				<input
					type="text"
					id="lenderName"
					bind:value={data.lenderName}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Budi Santoso"
				/>
			</div>
			<div>
				<label
					for="lenderNik"
					class="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300"
					>Nomor Induk Kependudukan (NIK)</label
				>
				<input
					type="text"
					id="lenderNik"
					bind:value={data.lenderNik}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="3201xxxxxxxxxxxx"
				/>
			</div>
			<div>
				<label
					for="lenderJob"
					class="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300"
					>Pekerjaan</label
				>
				<input
					type="text"
					id="lenderJob"
					bind:value={data.lenderJob}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Wiraswasta / Pegawai Negeri"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="lenderAddress"
					class="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300"
					>Alamat Lengkap (Sesuai KTP)</label
				>
				<textarea
					id="lenderAddress"
					bind:value={data.lenderAddress}
					rows="2"
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Jl. Merdeka No. 123, RT 01/RW 02..."
				></textarea>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- PIHAK KEDUA (Peminjam) -->
	<div class="space-y-4 border-l-4 border-rose-500 pl-4">
		<div>
			<h3 class="font-bold text-slate-800 dark:text-white">
				Pihak Kedua (Yang Meminjam / Debitur)
			</h3>
			<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
				Orang yang menerima/berhutang uang (Borrower).
			</p>
		</div>
		<div
			class="grid grid-cols-1 gap-4 rounded-xl border border-rose-100 bg-rose-50 p-4 sm:grid-cols-2 dark:border-rose-800/30 dark:bg-rose-900/10"
		>
			<div class="sm:col-span-2">
				<label
					for="borrowerName"
					class="mb-1.5 block text-xs font-semibold text-rose-900 dark:text-rose-300"
					>Nama Lengkap Sesuai KTP</label
				>
				<input
					type="text"
					id="borrowerName"
					bind:value={data.borrowerName}
					class="block w-full rounded-xl border-rose-200 bg-white/70 px-4 py-2 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm dark:border-rose-800/50 dark:bg-slate-900/50 dark:text-white"
					placeholder="Andi Wijaya"
				/>
			</div>
			<div>
				<label
					for="borrowerNik"
					class="mb-1.5 block text-xs font-semibold text-rose-900 dark:text-rose-300"
					>Nomor Induk Kependudukan (NIK)</label
				>
				<input
					type="text"
					id="borrowerNik"
					bind:value={data.borrowerNik}
					class="block w-full rounded-xl border-rose-200 bg-white/70 px-4 py-2 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm dark:border-rose-800/50 dark:bg-slate-900/50 dark:text-white"
					placeholder="3172xxxxxxxxxxxx"
				/>
			</div>
			<div>
				<label
					for="borrowerJob"
					class="mb-1.5 block text-xs font-semibold text-rose-900 dark:text-rose-300"
					>Pekerjaan</label
				>
				<input
					type="text"
					id="borrowerJob"
					bind:value={data.borrowerJob}
					class="block w-full rounded-xl border-rose-200 bg-white/70 px-4 py-2 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm dark:border-rose-800/50 dark:bg-slate-900/50 dark:text-white"
					placeholder="Karyawan Swasta"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="borrowerAddress"
					class="mb-1.5 block text-xs font-semibold text-rose-900 dark:text-rose-300"
					>Alamat Lengkap (Sesuai KTP)</label
				>
				<textarea
					id="borrowerAddress"
					bind:value={data.borrowerAddress}
					rows="2"
					class="block w-full rounded-xl border-rose-200 bg-white/70 px-4 py-2 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm dark:border-rose-800/50 dark:bg-slate-900/50 dark:text-white"
					placeholder="Perum Indah Blok B2..."
				></textarea>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Detail Pinjaman Uang -->
	<div class="space-y-4 border-l-4 border-blue-500 pl-4">
		<div>
			<h3 class="font-bold text-slate-800 dark:text-white">Nominal & Ketentuan Hutang</h3>
			<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
				Detail penyerahan uang dan batas maksimal penyelesaian/jatuh tempo.
			</p>
		</div>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div>
				<label
					for="loanAmount"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Jumlah Uang Pinjaman</label
				>
				<div class="relative">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<span class="text-slate-500 sm:text-sm dark:text-slate-400">Rp</span>
					</div>
					<input
						type="number"
						id="loanAmount"
						bind:value={data.loanAmount}
						min="0"
						class="block w-full rounded-xl border-slate-200 bg-white/50 py-2 pr-4 pl-9 font-bold shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-lg dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					/>
				</div>
			</div>
			<div>
				<label
					for="handoverMethod"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Metode Penyerahan Uang</label
				>
				<input
					type="text"
					id="handoverMethod"
					bind:value={data.handoverMethod}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Transfer Bank BCA 1234567 a.n Budi"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="loanPurpose"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Tujuan Pinjaman (Alasan)</label
				>
				<input
					type="text"
					id="loanPurpose"
					bind:value={data.loanPurpose}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Tambahan Modal Usaha Warung Kopi"
				/>
			</div>
			<div>
				<label
					for="loanDate"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Tanggal Uang Diserahkan</label
				>
				<input
					type="date"
					id="loanDate"
					bind:value={data.loanDate}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
				/>
			</div>
			<div>
				<label for="dueDate" class="mb-1.5 block text-sm font-bold text-red-600 dark:text-red-400"
					>Tenggat Waktu / Jatuh Tempo Pelunasan</label
				>
				<input
					type="date"
					id="dueDate"
					bind:value={data.dueDate}
					class="block w-full rounded-xl border-red-200 bg-red-50 px-4 py-2 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm dark:border-red-800/40 dark:bg-red-900/20 dark:text-red-200"
				/>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Klausul Perlindungan & Jaminan -->
	<div class="space-y-4 border-l-4 border-amber-500 pl-4">
		<div>
			<h3 class="font-bold text-slate-800 dark:text-white">Jaminan (Collateral) & Denda</h3>
			<p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
				Sangat disarankan untuk mencantumkan jaminan fisik/surat berharga jika nominal besar.
			</p>
		</div>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label
					for="collateral"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Barang Jaminan / Agunan (Opsional)</label
				>
				<input
					type="text"
					id="collateral"
					bind:value={data.collateral}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Contoh: BPKB & STNK Motor Honda Vario 2020 Nopol B1234AB"
				/>
			</div>
			<div class="sm:col-span-2">
				<label
					for="latePenalty"
					class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300"
					>Denda Keterlambatan (Opsional)</label
				>
				<input
					type="text"
					id="latePenalty"
					bind:value={data.latePenalty}
					class="block w-full rounded-xl border-slate-200 bg-white/50 px-4 py-2 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Misal: Rp 50.000,- per hari keterlambatan"
				/>
			</div>
		</div>
	</div>

	<hr class="border-slate-200 dark:border-slate-800" />

	<!-- Properti Administrasi Tanda Tangan -->
	<div class="space-y-4 border-l-4 border-slate-400 pl-4">
		<h3 class="font-bold text-slate-800 dark:text-white">Saksi & Lokasi Dokumen</h3>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
			<div>
				<label
					for="city"
					class="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300"
					>Kota Penulisan Kontrak</label
				>
				<input
					type="text"
					id="city"
					bind:value={data.city}
					class="block w-full rounded-lg border-slate-200 bg-white/50 px-3 py-2 text-sm shadow-sm focus:border-slate-500 focus:ring-slate-500 dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Jakarta Selatan"
				/>
			</div>
			<div>
				<label
					for="witness1"
					class="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300"
					>Nama Saksi 1 (Opsional)</label
				>
				<input
					type="text"
					id="witness1"
					bind:value={data.witness1}
					class="block w-full rounded-lg border-slate-200 bg-white/50 px-3 py-2 text-sm shadow-sm focus:border-slate-500 focus:ring-slate-500 dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Bpk. RT Setempat"
				/>
			</div>
			<div>
				<label
					for="witness2"
					class="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300"
					>Nama Saksi 2 (Opsional)</label
				>
				<input
					type="text"
					id="witness2"
					bind:value={data.witness2}
					class="block w-full rounded-lg border-slate-200 bg-white/50 px-3 py-2 text-sm shadow-sm focus:border-slate-500 focus:ring-slate-500 dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-white"
					placeholder="Keluarga..."
				/>
			</div>
		</div>
	</div>
</div>
