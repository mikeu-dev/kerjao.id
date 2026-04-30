<script lang="ts">
	import type { SPKData } from '$lib/utils/spk';

	let { data }: { data: SPKData } = $props();

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
	style="width: 210mm; min-height: 297mm; font-family: 'Arial', sans-serif; line-height: 1.5;"
>
	<!-- Header / Letterhead -->
	<header class="mb-8 border-b-2 border-black pb-4 text-center">
		<h1 class="text-2xl font-bold tracking-widest uppercase">
			{data.pemberiKerja.perusahaan || 'NAMA INSTANSI/PERUSAHAAN'}
		</h1>
		<p class="text-xs">{data.pemberiKerja.alamat || 'Alamat Lengkap Perusahaan'}</p>
	</header>

	<div class="mb-8 text-center">
		<h2 class="text-lg font-bold uppercase underline">SURAT PERINTAH KERJA (SPK)</h2>
		<p class="text-sm font-semibold">Nomor: {data.nomorSpk || '_____/SPK/KJ/2026'}</p>
	</div>

	<!-- Content -->
	<div class="space-y-6 text-sm">
		<p>
			Pada hari ini, tanggal <strong>{formatDate(new Date().toISOString().split('T')[0])}</strong>,
			kami yang bertanda tangan di bawah ini memberikan perintah kerja kepada:
		</p>

		<table class="w-full text-left">
			<tbody>
				<tr>
					<td class="w-40 py-1 font-bold">Nama Pelaksana</td>
					<td class="py-1"
						>: {data.pelaksana.perusahaan || data.pelaksana.nama || '____________________'}</td
					>
				</tr>
				<tr>
					<td class="py-1 font-bold">Alamat Pelaksana</td>
					<td class="py-1">: {data.pelaksana.alamat || '____________________'}</td>
				</tr>
				<tr>
					<td class="py-1 font-bold">Kontak Person</td>
					<td class="py-1">: {data.pelaksana.nama || '____________________'}</td>
				</tr>
			</tbody>
		</table>

		<p>Untuk melaksanakan pekerjaan sebagai berikut:</p>

		<div class="border border-black bg-slate-50 p-4">
			<table class="w-full text-left align-top">
				<tbody>
					<tr>
						<td class="w-40 py-1 font-bold">Nama Pekerjaan</td>
						<td class="py-1">: <strong>{data.proyek.nama || '____________________'}</strong></td>
					</tr>
					<tr>
						<td class="py-1 font-bold">Ruang Lingkup</td>
						<td class="py-1"
							>:
							<ul class="mt-1 list-inside list-disc">
								{#if data.proyek.ruangLingkup.length > 0}
									{#each data.proyek.ruangLingkup as scope}
										<li>{scope}</li>
									{/each}
								{:else}
									<li>____________________</li>
								{/if}
							</ul>
						</td>
					</tr>
					<tr>
						<td class="py-1 font-bold">Jangka Waktu</td>
						<td class="py-1"
							>: {data.waktu.mulai ? formatDate(data.waktu.mulai) : '__________'} s/d {data.waktu
								.selesai
								? formatDate(data.waktu.selesai)
								: '__________'}</td
						>
					</tr>
					<tr>
						<td class="py-1 font-bold">Nilai Pekerjaan</td>
						<td class="py-1">: <strong>{formatCurrency(data.biaya.nominal)}</strong></td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="space-y-3">
			<p class="font-bold">Ketentuan Pekerjaan:</p>
			<ol class="list-inside list-decimal space-y-1">
				<li>
					Pelaksana wajib melaksanakan pekerjaan sesuai dengan ruang lingkup dan tenggat waktu yang
					ditetapkan.
				</li>
				<li>Hasil pekerjaan harus memenuhi standar kualitas yang disepakati oleh Pemberi Kerja.</li>
				<li>
					Pembayaran akan dilakukan setelah pekerjaan dinyatakan selesai dan diterima dengan baik
					oleh Pemberi Kerja {data.biaya.catatan ? `(${data.biaya.catatan})` : ''}.
				</li>
				<li>
					Pemberi kerja berhak membatalkan SPK ini jika pelaksana lalai atau gagal memenuhi
					kewajibannya.
				</li>
			</ol>
		</div>

		<p>
			Demikian Surat Perintah Kerja ini dibuat untuk dilaksanakan dengan sebaik-baiknya oleh
			Pelaksana.
		</p>
	</div>

	<!-- Signatures -->
	<div class="mt-20 flex justify-between text-sm">
		<div class="flex flex-col items-center">
			<p>Penerima Perintah,</p>
			<p class="mt-1 font-bold">PELAKSANA</p>
			<div class="h-20"></div>
			<p class="font-bold underline">({data.pelaksana.nama || '____________________'})</p>
		</div>
		<div class="flex flex-col items-center">
			<p>Dikeluarkan di Jakarta, {formatDate(new Date().toISOString().split('T')[0])}</p>
			<p class="mt-1 font-bold">PEMBERI KERJA</p>
			<div class="h-20"></div>
			<p class="font-bold underline">({data.pemberiKerja.nama || '____________________'})</p>
		</div>
	</div>
</div>
