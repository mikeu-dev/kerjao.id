<script lang="ts">
	import type { IzinData } from '$lib/utils/izin';
	import { formatTanggalIzin, calculateHariCuti } from '$lib/utils/izin';

	let { data }: { data: IzinData } = $props();

	let cHari = $derived(calculateHariCuti(data.startDate, data.endDate));
</script>

<div
	class="relative mx-auto w-full bg-white p-10 font-serif text-[15px] leading-relaxed text-slate-900 shadow-2xl sm:p-14 print:m-0 print:p-0 print:text-black print:shadow-none"
	style="min-height: 1122px;"
>
	<!-- Header -->
	<div class="mb-12 flex items-start justify-between">
		<div class="w-3/5 text-left">
			<p>
				Perihal: <span class="font-bold"
					>Permohonan Izin {data.leaveType || 'Tidak Masuk Kerja'}</span
				>
			</p>
			<p>Lampiran: -</p>
		</div>
		<div class="w-2/5 text-right">
			<p>{data.city || '...............'}, {formatTanggalIzin(data.date)}</p>
		</div>
	</div>

	<!-- Kepada Yth -->
	<div class="mb-10 leading-snug">
		<p>Yth.</p>
		<p class="font-bold">{data.managerRole || 'HRD / Manajer'}</p>
		{#if data.managerName}
			<p>{data.managerName}</p>
		{/if}
		<p>{data.companyName || 'NAMA PERUSAHAAN'}</p>
		<p>di tempat</p>
	</div>

	<!-- Tubuh Surat -->
	<div class="mb-6 text-justify">
		<p class="mb-4">Dengan hormat,</p>
		<p class="mb-4">Saya yang bertanda tangan di bawah ini:</p>

		<div class="mb-6 pl-8">
			<table class="w-full">
				<tbody>
					<tr>
						<td class="w-32 py-1 align-top">Nama</td>
						<td class="w-4 py-1 align-top">:</td>
						<td class="py-1 align-top font-bold"
							>{data.employeeName || '...........................................'}</td
						>
					</tr>
					<tr>
						<td class="w-32 py-1 align-top">Jabatan</td>
						<td class="w-4 py-1 align-top">:</td>
						<td class="py-1 align-top"
							>{data.employeeRole || '...........................................'}</td
						>
					</tr>
					<tr>
						<td class="w-32 py-1 align-top">Divisi/Dept.</td>
						<td class="w-4 py-1 align-top">:</td>
						<td class="py-1 align-top"
							>{data.employeeDepartment || '...........................................'}</td
						>
					</tr>
				</tbody>
			</table>
		</div>

		<p class="mb-4 indent-8">
			Bersama surat ini, bermaksud untuk mengajukan permohonan <strong
				>izin {data.leaveType.toLowerCase()} / tidak masuk bekerja</strong
			>
			selama <strong>{cHari > 0 ? cHari : '...'} ({cHari > 0 ? cHari : '...'}) hari kerja</strong>,
			terhitung mulai tanggal <strong>{formatTanggalIzin(data.startDate)}</strong> sampai dengan
			tanggal <strong>{formatTanggalIzin(data.endDate)}</strong>.
		</p>

		<!-- Alasan Izin -->
		{#if data.leaveType === 'Sakit'}
			<p class="mb-4 indent-8">
				Adapun hal yang menyebabkan saya tidak dapat hadir untuk bekerja pada rentang waktu tersebut
				adalah karena sedang dalam keadaan sakit dan membutuhkan waktu untuk beristirahat penuh.
				{#if data.reason}
					(Detail: <em>{data.reason}</em>).
				{/if}
				Surat Keterangan Dokter (jika diperlukan) akan saya sampaikan setelah kondisi lebih pulih atau
				saya sertakan sebagai lampiran.
			</p>
		{:else if data.leaveType === 'Cuti Tahunan'}
			<p class="mb-4 indent-8">
				Permohonan ini saya ajukan untuk mengambil hak cuti tahunan saya guna mengambil waktu rehat
				sejenak.
				{#if data.reason}
					(Keperluan: <em>{data.reason}</em>).
				{/if}
			</p>
		{:else}
			<p class="mb-4 indent-8">
				Adapun ketidakhadiran saya tersebut adalah dikarenakan harus menghadiri kepentingan yang
				tidak dapat ditinggalkan / mendesak.
				{#if data.reason}
					Mohon maklum bahwasannya: <em>{data.reason}</em>.
				{/if}
			</p>
		{/if}

		<p class="indent-8">
			Demikian surat permohonan izin ini saya buat dengan sebenar-benarnya. Atas perhatian dan
			kebijaksanaan Bapak/Ibu {data.managerRole ? data.managerRole : 'pimpinan'}, saya ucapkan
			terima kasih yang sebesar-besarnya.
		</p>
	</div>

	<!-- Tanda Tangan -->
	<div class="mt-16 pr-12 text-right">
		<p class="mb-20">Hormat saya,</p>
		<p class="inline-block border-b border-transparent font-bold text-slate-900 underline">
			{data.employeeName || 'NAMA KARYAWAN'}
		</p>
	</div>
</div>
