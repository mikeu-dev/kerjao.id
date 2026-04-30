<script lang="ts">
	import type { CalculationResult } from '$lib/utils/split-bill';
	import { Receipt, User, Info } from 'lucide-svelte';

	let { 
		results, 
		subtotal, 
		totalExtra, 
		grandTotal 
	} = $props<{
		results: CalculationResult[];
		subtotal: number;
		totalExtra: number;
		grandTotal: number;
	}>();

	const formatCurrency = (value: number) => {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(value);
	};
</script>

<div class="space-y-8">
	<!-- Summary Cards -->
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
		<div class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800/50">
			<span class="text-xs font-medium text-slate-500 uppercase">Subtotal</span>
			<p class="text-lg font-bold text-slate-900 dark:text-white">{formatCurrency(subtotal)}</p>
		</div>
		<div class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800/50">
			<span class="text-xs font-medium text-slate-500 uppercase">Biaya/Diskon</span>
			<p class="text-lg font-bold {totalExtra < 0 ? 'text-emerald-500' : 'text-orange-500'}">
				{totalExtra > 0 ? '+' : ''}{formatCurrency(totalExtra)}
			</p>
		</div>
		<div class="rounded-2xl border border-blue-200 bg-blue-50/50 p-4 dark:border-blue-900/30 dark:bg-blue-900/20">
			<span class="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase">Total Akhir</span>
			<p class="text-lg font-black text-blue-700 dark:text-blue-300">{formatCurrency(grandTotal)}</p>
		</div>
	</div>

	<!-- Results List -->
	<div class="space-y-4">
		<div class="flex items-center gap-2 px-1">
			<Receipt size={18} class="text-slate-400" />
			<h3 class="text-sm font-semibold uppercase tracking-wider text-slate-500">Rincian Per Orang</h3>
		</div>

		<div class="grid grid-cols-1 gap-4">
			{#each results as res (res.friendId)}
				<div class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
					<div class="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-6 py-4 dark:border-slate-700/50 dark:bg-slate-900/30">
						<div class="flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
								<User size={20} />
							</div>
							<span class="font-bold text-slate-900 dark:text-white">{res.friendName || 'Anonim'}</span>
						</div>
						<div class="text-right">
							<span class="text-[10px] font-bold uppercase text-slate-400">Total Tagihan</span>
							<p class="text-lg font-black text-blue-600 dark:text-blue-400">{formatCurrency(res.total)}</p>
						</div>
					</div>
					
					<div class="px-6 py-4">
						<div class="space-y-3">
							<div class="flex items-center justify-between text-sm">
								<span class="text-slate-500 dark:text-slate-400">Subtotal Item</span>
								<span class="font-medium text-slate-700 dark:text-slate-300">{formatCurrency(res.itemsSubtotal)}</span>
							</div>
							<div class="flex items-center justify-between text-sm">
								<div class="flex items-center gap-1.5">
									<span class="text-slate-500 dark:text-slate-400">Pajak/Diskon (Proporsional)</span>
									<div class="group relative inline-block">
										<Info size={14} class="text-slate-300 cursor-help" />
										<div class="invisible absolute bottom-full left-1/2 mb-2 w-48 -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-2 text-[10px] text-white opacity-0 transition-all group-hover:visible group-hover:opacity-100">
											Dihitung berdasarkan proporsi ({(res.itemsSubtotal / subtotal * 100).toFixed(1)}%) dari total biaya tambahan.
										</div>
									</div>
								</div>
								<span class="font-medium {res.extraShare < 0 ? 'text-emerald-500' : 'text-slate-700 dark:text-slate-300'}">
									{res.extraShare > 0 ? '+' : ''}{formatCurrency(res.extraShare)}
								</span>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Tips -->
	<div class="rounded-2xl border border-amber-100 bg-amber-50/50 p-4 dark:border-amber-900/20 dark:bg-amber-900/10">
		<div class="flex gap-3">
			<Info size={18} class="shrink-0 text-amber-500" />
			<p class="text-xs leading-relaxed text-amber-700 dark:text-amber-400">
				<strong>Catatan:</strong> Pembagian biaya tambahan dilakukan secara proporsional. Semakin besar subtotal pesanan seseorang, semakin besar pula porsi diskon atau biaya layanan yang mereka tanggung.
			</p>
		</div>
	</div>
</div>
