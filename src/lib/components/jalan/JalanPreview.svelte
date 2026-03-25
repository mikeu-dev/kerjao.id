<script lang="ts">
	import type { JalanData } from '$lib/utils/surat-jalan';
	import { formatTanggal, getTotalQuantity } from '$lib/utils/surat-jalan';

	let { data }: { data: JalanData } = $props();

	let totalQty = $derived(getTotalQuantity(data.items));
</script>

<div
	class="relative mx-auto min-h-[1122px] w-full bg-white p-8 font-sans text-[13px] leading-relaxed text-slate-900 shadow-2xl sm:p-12 print:m-0 print:p-0 print:text-black print:shadow-none"
>
	<!-- Header Surat Jalan -->
	<div
		class="mb-6 flex items-start justify-between border-b border-gray-300 pb-6 print:border-black"
	>
		<!-- Pengirim Kiri -->
		<div class="w-1/2 pr-4 lg:w-3/5">
			<h1 class="mb-1 text-3xl font-black tracking-tight text-blue-800 uppercase print:text-black">
				{data.senderCompany || 'NAMA PERUSAHAAN PENGIRIM'}
			</h1>
			<p class="text-[12.5px] leading-tight whitespace-pre-wrap text-gray-600 print:text-gray-800">
				{data.senderAddress || 'Alamat Perusahaan Gudang Pengirim'}
			</p>
			{#if data.senderContact}
				<p class="mt-1 font-mono text-[12px] text-gray-600 print:text-gray-800">
					{data.senderContact}
				</p>
			{/if}
		</div>

		<!-- Judul Surat Kanan -->
		<div class="flex w-1/2 flex-col items-end text-right lg:w-2/5">
			<div
				class="mb-3 inline-block border-2 border-slate-800 px-4 py-1.5 text-2xl font-black tracking-widest text-slate-800 uppercase print:border-black"
			>
				Surat Jalan
			</div>

			<table class="w-full max-w-[280px] text-left text-[12px]">
				<tbody>
					<tr>
						<td class="py-0.5 pr-3 font-bold text-gray-600">No. Dokumen</td>
						<td class="border border-gray-300 bg-gray-50 px-2 py-0.5 font-bold whitespace-nowrap"
							>{data.suratJalanNumber || 'SJ-202X-XXX'}</td
						>
					</tr>
					<tr>
						<td class="py-0.5 pr-3 font-bold text-gray-600">Tanggal</td>
						<td class="border border-gray-300 px-2 py-0.5 whitespace-nowrap"
							>{formatTanggal(data.date)}</td
						>
					</tr>
					{#if data.poReference}
						<tr>
							<td class="py-0.5 pr-3 font-bold text-gray-600">Referensi PO</td>
							<td class="border border-gray-300 px-2 py-0.5 font-mono text-[11px] whitespace-nowrap"
								>{data.poReference}</td
							>
						</tr>
					{/if}
				</tbody>
			</table>
		</div>
	</div>

	<!-- Penerima & Informasi Logistik -->
	<div class="mb-6 flex flex-col gap-6 sm:flex-row">
		<!-- Kepada Yth (Tujuan) -->
		<div class="flex w-full gap-4 sm:w-1/2">
			<div class="mt-1 text-[13px] font-bold uppercase">Kepada Yth.</div>
			<div
				class="min-h-[90px] flex-1 rounded-sm border border-gray-300 bg-blue-50/50 p-3 print:border-black print:bg-transparent"
			>
				<p class="mb-1 text-[14px] leading-tight font-bold uppercase">
					{data.receiverCompany || 'NAMA PERUSAHAAN PENERIMA'}
				</p>
				<p class="mb-1 leading-snug whitespace-pre-wrap text-gray-800">
					{data.receiverAddress || 'Alamat lengkap gudang/bongkar muat tujuan pengiriman.'}
				</p>
				{#if data.receiverName}
					<p class="font-bold text-blue-800 print:text-black">U.p: {data.receiverName}</p>
				{/if}
			</div>
		</div>

		<!-- Armada Detail -->
		<div class="flex w-full gap-4 sm:w-1/2">
			<div class="mt-1 w-20 text-[13px] font-bold uppercase">Armada</div>
			<div class="min-h-[90px] flex-1 rounded-sm border border-gray-300 p-3 print:border-black">
				<table class="w-full text-left text-[12.5px]">
					<tbody>
						<tr>
							<td class="w-24 py-1 text-gray-500">Pengemudi</td>
							<td class="border-b border-dotted border-gray-300 font-bold"
								>{data.driverName || '................'}</td
							>
						</tr>
						<tr>
							<td class="py-1 text-gray-500">No. Kendaraan</td>
							<td class="border-b border-dotted border-gray-300 font-mono text-[13.5px] font-bold"
								>{data.vehicleNumber || '................'}</td
							>
						</tr>
						<tr>
							<td class="py-1 text-gray-500">Ekspedisi</td>
							<td class="border-b border-dotted border-gray-300 font-bold"
								>{data.shippingMethod || '................'}</td
							>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<p class="mb-2 text-[12px] font-medium text-gray-600 italic print:text-black">
		Kami selaku armada ekspedisi mengirimkan barang-barang tersebut di bawah ini dalam keadaan baik
		dan cukup:
	</p>

	<!-- Tabel Item Logistik -->
	<div class="mb-6">
		<table class="w-full border-collapse border-2 border-gray-800 text-left print:border-black">
			<thead
				class="border-b-2 border-gray-800 bg-gray-100 text-[11px] font-bold tracking-wider uppercase print:border-black print:bg-white"
			>
				<tr>
					<th class="w-10 border-r border-gray-400 px-2 py-2 text-center">No</th>
					<th class="w-24 border-r border-gray-400 px-3 py-2 text-center">Kode Item</th>
					<th class="border-r border-gray-400 px-3 py-2">Nama Barang / Deskripsi</th>
					<th class="w-24 border-r border-gray-400 px-3 py-2 text-center">Jumlah</th>
					<th class="w-48 px-3 py-2">Keterangan</th>
				</tr>
			</thead>
			<tbody class="text-[13px]">
				{#if data.items.length === 0}
					<tr>
						<td colspan="5" class="px-3 py-8 text-center text-gray-400 italic"
							>Data kosong (Belum ada scan barang)</td
						>
					</tr>
				{:else}
					{#each data.items as item, index (item.id)}
						<tr>
							<td
								class="border border-gray-300 px-2 py-2 text-center text-gray-500 print:border-black"
								>{index + 1}</td
							>
							<td
								class="border border-gray-300 px-3 py-2 text-center font-mono text-[11px] text-gray-600 print:border-black"
								>{item.kode || '-'}</td
							>
							<td class="border border-gray-300 px-3 py-2 font-bold uppercase print:border-black"
								>{item.name || '-'}</td
							>
							<td class="border border-gray-300 px-3 py-2 text-center print:border-black">
								<span class="text-[14px] font-bold">{item.quantity || 0}</span>
								<span class="ml-1 text-xs text-gray-600 italic">{item.unit || ''}</span>
							</td>
							<td
								class="border border-gray-300 px-3 py-2 text-[11px] text-gray-600 italic print:border-black"
								>{item.note || ''}</td
							>
						</tr>
					{/each}
				{/if}
			</tbody>

			<!-- Total Baris -->
			<tfoot class="border-t-2 border-gray-800 bg-gray-50 print:border-black print:bg-transparent">
				<tr>
					<td
						colspan="3"
						class="border-r border-gray-400 px-4 py-2 text-right text-[12px] font-bold uppercase"
						>Total Keseluruhan</td
					>
					<td class="border-r border-gray-400 px-3 py-2 text-center text-[15px] font-black"
						>{totalQty}</td
					>
					<td class="px-3 py-2 text-[10px] text-gray-500">Items/Pcs</td>
				</tr>
			</tfoot>
		</table>
	</div>

	<!-- Notes/Keterangan Bawah -->
	<div
		class="mb-10 min-h-12 border border-dashed border-gray-300 p-2 text-[11px] print:border-black"
	>
		<span class="font-bold underline">Catatan / Keterangan:</span><br />
		<span class="whitespace-pre-wrap text-gray-700 italic"
			>{data.note || 'Barang diterima dalam kondisi baik, jumlah dan tipe sesuai fisik.'}</span
		>
	</div>

	<!-- Tritunggal Tanda Tangan -->
	<div class="grid grid-cols-3 gap-4 text-center text-[12px]">
		<!-- TTD Penerima -->
		<div class="flex flex-col items-center">
			<p class="mb-16 font-semibold uppercase">Penerima Barang</p>
			<div class="mb-1 w-40 overflow-hidden border-b border-black px-2 whitespace-nowrap">
				{#if data.receiverName}
					<span class="font-bold text-slate-800 uppercase">{data.receiverName}</span>
				{/if}
			</div>
			<p class="text-[10px] text-gray-500 uppercase">Cap Gudang & Tanda Tangan</p>
		</div>

		<!-- TTD Supir / Pengantar -->
		<div class="flex flex-col items-center">
			<p class="mb-16 font-semibold uppercase">Pengemudi / Pengantar</p>
			<div class="mb-1 w-40 overflow-hidden border-b border-black px-2 whitespace-nowrap">
				{#if data.driverName}
					<span class="font-bold text-slate-800 uppercase">{data.driverName}</span>
				{/if}
			</div>
			<p class="text-[10px] text-gray-500 uppercase">Tanda Tangan Supir</p>
		</div>

		<!-- TTD Pengirim/Hormat Kami -->
		<div class="flex flex-col items-center">
			<p class="mb-16 font-semibold uppercase">Hormat Kami (Pengirim)</p>
			<div class="mb-1 w-40 overflow-hidden border-b border-black px-2 whitespace-nowrap">
				<span class="font-bold text-slate-800 uppercase">Bagian Logistik</span>
			</div>
			<p class="text-[10px] text-gray-500 uppercase">{data.senderCompany || 'Gudang Persiapan'}</p>
		</div>
	</div>
</div>
