<script lang="ts">
	import type { KwitansiData } from '$lib/utils/kwitansi';
	import { formatRupiah, terbilangRupiah } from '$lib/utils/kwitansi';

	let { data }: { data: KwitansiData } = $props();

	function niceDate(d: string): string {
		if (!d) return '...';
		return new Date(d).toLocaleDateString('id-ID', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	function getTerbilang(amount: number) {
		if (!amount || amount <= 0) return 'Nol Rupiah';
		let result = terbilangRupiah(amount);
		// Capitalize first letter of every word
		return result
			.toLowerCase()
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.substring(1))
			.join(' ');
	}
</script>

<!-- The visual wrapper mimicking physical Kwitansi books (Green hue, patterned background) -->
<div
	class="relative mx-auto w-full max-w-4xl border-[10px] border-[#0a523a] bg-[#f0f9f4] p-6 font-serif text-slate-900 shadow-2xl sm:p-10 print:m-0 print:border-none print:border-[#0a523a] print:shadow-none"
>
	<!-- Watermark patterned background -->
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.03] print:opacity-[0.05]"
		style="background-image: radial-gradient(#0a523a 1.5px, transparent 1.5px); background-size: 16px 16px;"
	></div>

	<div class="relative z-10">
		<!-- Header Kwitansi -->
		<div class="mb-10 flex items-start justify-between border-b-2 border-[#0a523a] pb-4">
			<h1 class="text-4xl font-extrabold tracking-widest text-[#0a523a] italic drop-shadow-sm">
				KWITANSI
			</h1>
			<div class="text-right">
				<p class="mb-1 text-xs font-bold tracking-wider text-[#0a523a] uppercase">No.</p>
				<p class="font-mono text-lg font-semibold text-slate-800">{data.kwitansiNumber || '...'}</p>
			</div>
		</div>

		<!-- Body Kwitansi -->
		<div class="space-y-6 text-[15px] sm:text-[17px]">
			<div class="flex items-start">
				<div class="w-48 shrink-0 font-semibold text-[#0a523a] italic sm:w-56">
					Telah Terima Dari
				</div>
				<div class="w-4 font-bold text-[#0a523a]">:</div>
				<div
					class="flex-1 border-b border-dashed border-slate-400 pb-1 text-lg leading-snug font-bold"
				>
					{data.receivedFrom || '...................................................'}
				</div>
			</div>

			<div class="flex items-start">
				<div class="w-48 shrink-0 font-semibold text-[#0a523a] italic sm:w-56">Uang Sejumlah</div>
				<div class="w-4 font-bold text-[#0a523a]">:</div>
				<div
					class="flex-1 border-l-4 border-[#0a523a] bg-[#0a523a]/10 px-4 py-2 leading-snug font-bold text-slate-800 italic"
				>
					{getTerbilang(data.amount)}
				</div>
			</div>

			<div class="mt-8 flex items-start">
				<div class="w-48 shrink-0 font-semibold text-[#0a523a] italic sm:w-56">
					Untuk Pembayaran
				</div>
				<div class="w-4 font-bold text-[#0a523a]">:</div>
				<div
					class="min-h-[60px] flex-1 border-b border-dashed border-slate-400 pb-1 leading-relaxed whitespace-pre-wrap"
				>
					<!-- eslint-disable-next-line svelte/mustache-spacing -->
					{data.paymentFor ||
						'..........................................................................................................................................'}
				</div>
			</div>
		</div>

		<!-- Footer Kwitansi -->
		<div class="mt-14 flex items-end justify-between">
			<!-- Nominal & Meterai Box -->
			<div class="flex flex-col gap-4">
				<!-- Nominal -->
				<div
					class="rounded-br-2xl bg-gradient-to-r from-[#0a523a] to-[#127a58] px-6 py-3 shadow-inner shadow-black/20 print:shadow-none"
				>
					<p
						class="font-mono text-2xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-3xl"
					>
						{data.amount > 0 ? formatRupiah(data.amount) : 'Rp .......................'}
					</p>
				</div>
				<!-- Meterai Box (Opsional) -->
				<div
					class="flex h-14 w-24 -rotate-3 items-center justify-center rounded-sm border border-[#0a523a]/40 bg-[#0a523a]/5 opacity-60"
				>
					<span
						class="text-center text-[10px] leading-tight font-bold tracking-tighter text-[#0a523a]/60 uppercase"
						>Materai<br />Tempel</span
					>
				</div>
			</div>

			<!-- Tanda Tangan -->
			<div class="w-64 pb-2 text-center">
				<p class="mb-8 font-medium text-[#0a523a] italic">
					{data.city || '...................'}, {niceDate(data.date)}
				</p>

				<div class="pointer-events-none flex h-16 w-full items-center justify-center opacity-30">
					<div
						class="absolute flex h-24 w-24 -rotate-12 items-center justify-center rounded-full border-[2px] border-[#0a523a] text-[#0a523a] opacity-30"
					>
						<span class="text-[10px] font-bold tracking-widest uppercase">LUNAS</span>
					</div>
					<div
						class="font-signature rotate-[-5deg] text-3xl text-slate-800 italic print:text-black"
					>
						Signed
					</div>
				</div>

				<p
					class="inline-block border-b border-transparent text-lg font-bold text-slate-900 uppercase underline"
				>
					{data.signeeName || '....................................'}
				</p>
				<p class="mt-1 text-sm text-slate-600">{data.signeeRole || ''}</p>
			</div>
		</div>
	</div>
</div>
