<script lang="ts">
	import type { JualBeliData } from '$lib/utils/jual-beli';

	let { data }: { data: JualBeliData } = $props();

	function formatCurrency(num: number) {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			minimumFractionDigits: 0
		}).format(num);
	}

	function formatDate(dateStr: string) {
		if (!dateStr) return '';
		const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
		return new Date(dateStr).toLocaleDateString('id-ID', opts);
	}
</script>

<div
	class="mx-auto bg-white p-[20mm] text-black shadow-lg print:p-0 print:shadow-none"
	style="width: 210mm; min-height: 297mm; font-family: 'Times New Roman', Times, serif; line-height: 1.6;"
>
	<!-- Title -->
	<header class="mb-8 text-center">
		<h1 class="text-xl font-bold uppercase underline">
			SURAT PERJANJIAN JUAL BELI {data.barang.jenis.toUpperCase()}
		</h1>
		<p class="text-sm">Nomor: ______ / SPJB / {new Date().getFullYear()}</p>
	</header>

	<!-- Parties -->
	<section class="mb-6 text-sm">
		<p class="mb-4">
			Pada hari ini, <strong
				>{formatDate(data.transaksi.tanggal || new Date().toISOString().split('T')[0])}</strong
			>, bertempat di <strong>{data.transaksi.lokasi || '____________________'}</strong>, kami yang
			bertanda tangan di bawah ini:
		</p>

		<div class="mb-4 ml-4 space-y-1">
			<div class="flex">
				<span class="w-32 font-semibold">1. Nama</span>
				<span>: {data.pihak1.nama || '____________________'}</span>
			</div>
			<div class="flex">
				<span class="w-32 font-semibold"> NIK (KTP)</span>
				<span>: {data.pihak1.nik || '____________________'}</span>
			</div>
			<div class="flex">
				<span class="w-32 font-semibold"> Alamat</span>
				<span>: {data.pihak1.alamat || '____________________'}</span>
			</div>
			<p class="mt-2 text-justify">
				Selanjutnya disebut sebagai <strong>PIHAK PERTAMA (PENJUAL)</strong>.
			</p>
		</div>

		<div class="mb-4 ml-4 space-y-1">
			<div class="flex">
				<span class="w-32 font-semibold">2. Nama</span>
				<span>: {data.pihak2.nama || '____________________'}</span>
			</div>
			<div class="flex">
				<span class="w-32 font-semibold"> NIK (KTP)</span>
				<span>: {data.pihak2.nik || '____________________'}</span>
			</div>
			<div class="flex">
				<span class="w-32 font-semibold"> Alamat</span>
				<span>: {data.pihak2.alamat || '____________________'}</span>
			</div>
			<p class="mt-2 text-justify">
				Selanjutnya disebut sebagai <strong>PIHAK KEDUA (PEMBELI)</strong>.
			</p>
		</div>

		<p class="text-justify italic">
			Pihak Pertama dengan ini menyatakan setuju untuk menjual kepada Pihak Kedua, dan Pihak Kedua
			menyatakan setuju untuk membeli dari Pihak Pertama objek jual beli dengan ketentuan sebagai
			berikut:
		</p>
	</section>

	<!-- Clauses -->
	<div class="space-y-4 text-justify text-sm">
		<div class="text-center font-bold">PASAL 1: OBJEK JUAL BELI</div>
		<p>
			Objek jual beli dalam perjanjian ini adalah 1 (satu) unit <strong
				>{data.barang.nama || '____________________'}</strong
			> dengan spesifikasi:
		</p>
		<div class="ml-4 space-y-1">
			<p>- Merk/Type: {data.barang.merk || '_____'} / {data.barang.type || '_____'}</p>
			<p>- Tahun: {data.barang.tahun || '_____'}</p>
			{#if data.barang.jenis === 'Kendaraan'}
				<p>- Nomor Polisi: {data.barang.nomorPolisi || '_____'}</p>
				<p>- Nomor Rangka/Mesin: {data.barang.nomorRangka || '_____'}</p>
			{:else if data.barang.jenis === 'Elektronik'}
				<p>- Nomor Seri/IMEI: {data.barang.nomorSeri || '_____'}</p>
			{/if}
			<p>- Kondisi: {data.barang.kondisi || 'Baik dan Layak'}</p>
		</div>

		<div class="text-center font-bold">PASAL 2: HARGA & PEMBAYARAN</div>
		<p>
			Harga jual beli objek tersebut di atas yang telah disepakati oleh kedua belah pihak adalah
			sebesar <strong>{formatCurrency(data.transaksi.harga)}</strong>. Pembayaran dilakukan secara
			<strong>{data.transaksi.metode || 'Tunai'}</strong> pada saat penandatanganan surat ini.
		</p>

		<div class="text-center font-bold">PASAL 3: JAMINAN & STATUS</div>
		<p>
			PIHAK PERTAMA menjamin bahwa objek jual beli tersebut adalah milik sah PIHAK PERTAMA, tidak
			sedang dalam sengketa, tidak sedang dijaminkan kepada pihak lain, dan bebas dari tuntutan
			hukum apapun.
		</p>

		<div class="text-center font-bold">PASAL 4: PENYERAHAN & TANGGUNG JAWAB</div>
		<p>
			Sejak ditandatanganinya Surat Perjanjian ini, maka hak kepemilikan dan segala risiko atas
			objek jual beli tersebut beralih sepenuhnya dari PIHAK PERTAMA kepada PIHAK KEDUA.
		</p>

		<div class="text-center font-bold">PASAL 5: PENYELESAIAN PERSELISIHAN</div>
		<p>
			Apabila terjadi perselisihan di kemudian hari, kedua belah pihak sepakat untuk
			menyelesaikannya secara musyawarah untuk mufakat.
		</p>
	</div>

	<!-- Signatures -->
	<div class="mt-16 text-sm">
		<div class="mb-16 flex justify-between">
			<div class="flex flex-col items-center">
				<p><strong>PIHAK PERTAMA (PENJUAL)</strong></p>
				<div
					class="mt-2 flex h-20 items-center justify-center border border-dashed border-slate-200 px-4 py-6 text-[10px] text-slate-300 italic"
				>
					Materai Rp 10.000
				</div>
				<p class="mt-2 font-bold underline">({data.pihak1.nama || '____________________'})</p>
			</div>
			<div class="flex flex-col items-center">
				<p><strong>PIHAK KEDUA (PEMBELI)</strong></p>
				<div class="h-20"></div>
				<p class="mt-14 font-bold underline">({data.pihak2.nama || '____________________'})</p>
			</div>
		</div>

		<div class="flex justify-around">
			<div class="flex flex-col items-center">
				<p>Saksi I,</p>
				<div class="h-12"></div>
				<p class="underline">({data.saksi1 || '____________________'})</p>
			</div>
			<div class="flex flex-col items-center">
				<p>Saksi II,</p>
				<div class="h-12"></div>
				<p class="underline">({data.saksi2 || '____________________'})</p>
			</div>
		</div>
	</div>
</div>
