<script lang="ts">
	import type { SlipData } from '$lib/utils/slip';
	import { formatRupiah, formatTanggalSlip, getTotal } from '$lib/utils/slip';

	let { data }: { data: SlipData } = $props();

	let totalIncome = $derived(getTotal(data.incomes));
	let totalDeduction = $derived(getTotal(data.deductions));
	let takeHomePay = $derived(totalIncome - totalDeduction);
</script>

<!-- A5 Portrait Aspect Ratio Wrapper -->
<div
	class="relative mx-auto min-h-[842px] w-full max-w-[595px] bg-white p-8 font-sans text-[14px] leading-relaxed text-slate-800 shadow-2xl print:m-0 print:p-0 print:text-black print:shadow-none"
>
	<!-- Header / Kop -->
	<div class="mb-6 border-b-2 border-slate-800 pb-4 print:border-black">
		<h1 class="text-2xl font-black tracking-widest text-slate-900 uppercase print:text-black">
			{data.companyName || 'NAMA PERUSAHAAN'}
		</h1>
		<p class="mt-1 text-xs text-slate-500 uppercase print:text-gray-600">
			{data.companyAddress || 'Alamat Perusahaan'}
		</p>
	</div>

	<!-- Title -->
	<div class="mb-6 bg-indigo-900 py-3 print:bg-gray-200">
		<h2 class="text-center text-xl font-bold tracking-widest text-white uppercase print:text-black">
			SLIP GAJI KARYAWAN
		</h2>
	</div>

	<!-- Profil & Periode -->
	<div class="mb-4 grid grid-cols-2 gap-4 font-mono text-[13px]">
		<div>
			<table class="w-full">
				<tbody>
					<tr>
						<td class="w-24 py-0.5 text-slate-500 print:text-gray-600">Nama</td>
						<td class="w-4 py-0.5">:</td>
						<td class="py-0.5 font-bold">{data.employeeName || '................'}</td>
					</tr>
					<tr>
						<td class="w-24 py-0.5 text-slate-500 print:text-gray-600">ID / NIP</td>
						<td class="w-4 py-0.5">:</td>
						<td class="py-0.5">{data.employeeID || '................'}</td>
					</tr>
					<tr>
						<td class="w-24 py-0.5 text-slate-500 print:text-gray-600">Jabatan</td>
						<td class="w-4 py-0.5">:</td>
						<td class="py-0.5">{data.employeeRole || '................'}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div>
			<table class="w-full">
				<tbody>
					<tr>
						<td class="w-24 py-0.5 text-slate-500 print:text-gray-600">Periode</td>
						<td class="w-4 py-0.5">:</td>
						<td class="py-0.5 font-bold tracking-wider uppercase"
							>{data.periodMonth || '.....'} {data.periodYear || '.....'}</td
						>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<hr class="my-6 border-dashed border-slate-300 print:border-gray-400" />

	<!-- Tabel Pendapatan & Potongan -->
	<div class="mb-8 grid grid-cols-2 gap-8">
		<!-- PENDAPATAN -->
		<div>
			<h3 class="mb-3 border-b border-slate-300 pb-1 text-[13px] font-bold uppercase">
				Pendapatan
			</h3>
			<table class="w-full font-mono text-[12px]">
				<tbody>
					{#each data.incomes as item (item.id)}
						<tr>
							<td class="py-1 text-slate-600 uppercase print:text-gray-800">{item.name || '...'}</td
							>
							<td class="py-1 text-right">{formatRupiah(item.amount)}</td>
						</tr>
					{/each}
				</tbody>
			</table>
			<div
				class="mt-4 flex justify-between border-t border-slate-300 pt-2 font-mono text-[13px] font-bold text-green-700 print:text-black"
			>
				<span>TOTAL PENDAPATAN</span>
				<span>{formatRupiah(totalIncome)}</span>
			</div>
		</div>

		<!-- POTONGAN -->
		<div>
			<h3 class="mb-3 border-b border-slate-300 pb-1 text-[13px] font-bold uppercase">Potongan</h3>
			<table class="w-full font-mono text-[12px]">
				<tbody>
					{#each data.deductions as item (item.id)}
						<tr>
							<td class="py-1 text-slate-600 uppercase print:text-gray-800">{item.name || '...'}</td
							>
							<td class="py-1 text-right text-rose-600 print:text-black"
								>({formatRupiah(item.amount)})</td
							>
						</tr>
					{/each}
				</tbody>
			</table>
			<div
				class="mt-4 flex justify-between border-t border-slate-300 pt-2 font-mono text-[13px] font-bold text-rose-600 print:text-black"
			>
				<span>TOTAL POTONGAN</span>
				<span>({formatRupiah(totalDeduction)})</span>
			</div>
		</div>
	</div>

	<!-- TAKE HOME PAY -->
	<div
		class="mb-10 flex items-center justify-between rounded-lg border border-slate-200 bg-slate-100 p-4 print:rounded-none print:border-black print:bg-transparent"
	>
		<span class="text-lg font-bold tracking-wide uppercase">Take Home Pay</span>
		<span class="text-2xl font-black tracking-tight">{formatRupiah(takeHomePay)}</span>
	</div>

	<!-- Tanda Tangan -->
	<div class="mt-16 flex justify-between font-mono text-[13px]">
		<!-- HRD/Finance -->
		<div class="flex w-40 flex-col items-center text-center">
			<p class="mb-2 text-slate-500 uppercase print:text-black">Dibuat Oleh,</p>
			<p class="mb-14 text-xs">(HRD / Finance)</p>

			<div class="w-full border-b border-slate-400 print:border-black"></div>
		</div>

		<!-- Karyawan -->
		<div class="flex w-40 flex-col items-center text-center">
			<p class="mb-2 text-slate-500 uppercase print:text-black">Diperoleh Pada,</p>
			<p class="mb-14 text-xs">{formatTanggalSlip(data.printDate)}</p>

			<div class="w-full border-b border-slate-400 print:border-black"></div>
			<p class="mt-1 text-[11px] font-bold uppercase">{data.employeeName || 'NAMA KARYAWAN'}</p>
		</div>
	</div>
</div>
