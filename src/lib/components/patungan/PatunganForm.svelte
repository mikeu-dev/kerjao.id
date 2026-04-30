<script lang="ts">
	import { Plus, Trash2, UserPlus, Users, Utensils, Tag } from 'lucide-svelte';
	import type { Friend, Item, ExtraCost } from '$lib/utils/split-bill';

	let { 
		friends = $bindable([]), 
		items = $bindable([]), 
		extraCosts = $bindable([]) 
	} = $props<{
		friends: Friend[];
		items: Item[];
		extraCosts: ExtraCost[];
	}>();

	function addFriend() {
		const id = crypto.randomUUID();
		friends = [...friends, { id, name: '' }];
	}

	function removeFriend(id: string) {
		friends = friends.filter((f: Friend) => f.id !== id);
		// Clean up assignments
		items = items.map((item: Item) => ({
			...item,
			assignedTo: item.assignedTo.filter((friendId: string) => friendId !== id)
		}));
	}

	function addItem() {
		const id = crypto.randomUUID();
		items = [...items, { id, name: '', price: 0, quantity: 1, assignedTo: [] }];
	}

	function removeItem(id: string) {
		items = items.filter((item: Item) => item.id !== id);
	}

	function addExtraCost() {
		const id = crypto.randomUUID();
		extraCosts = [...extraCosts, { id, name: '', amount: 0 }];
	}

	function removeExtraCost(id: string) {
		extraCosts = extraCosts.filter((cost: ExtraCost) => cost.id !== id);
	}

	function toggleAssignment(itemId: string, friendId: string) {
		items = items.map((item: Item) => {
			if (item.id === itemId) {
				const assignedTo = item.assignedTo.includes(friendId)
					? item.assignedTo.filter((id: string) => id !== friendId)
					: [...item.assignedTo, friendId];
				return { ...item, assignedTo };
			}
			return item;
		});
	}
</script>

<div class="space-y-10">
	<!-- Friends Section -->
	<section class="space-y-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
				<div class="rounded-lg bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
					<Users size={20} />
				</div>
				<h3 class="text-lg font-bold text-slate-800 dark:text-slate-100">Daftar Teman</h3>
			</div>
			<button
				onclick={addFriend}
				class="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
			>
				<UserPlus size={16} />
				Tambah
			</button>
		</div>

		<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
			{#each friends as friend (friend.id)}
				<div class="group relative">
					<input
						type="text"
						bind:value={friend.name}
						placeholder="Nama Teman..."
						class="w-full rounded-xl border-slate-200 bg-white/50 py-2.5 pl-4 pr-10 text-sm transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800/50"
					/>
					<button
						onclick={() => removeFriend(friend.id)}
						class="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 opacity-0 transition-all hover:bg-rose-50 hover:text-rose-500 group-hover:opacity-100 dark:hover:bg-rose-900/30"
					>
						<Trash2 size={16} />
					</button>
				</div>
			{/each}
			{#if friends.length === 0}
				<div class="col-span-full py-4 text-center text-sm text-slate-500 italic">
					Belum ada teman. Tambahkan teman terlebih dahulu.
				</div>
			{/if}
		</div>
	</section>

	<!-- Items Section -->
	<section class="space-y-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
				<div class="rounded-lg bg-emerald-100 p-2 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
					<Utensils size={20} />
				</div>
				<h3 class="text-lg font-bold text-slate-800 dark:text-slate-100">Item Pesanan</h3>
			</div>
			<button
				onclick={addItem}
				class="flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
			>
				<Plus size={16} />
				Tambah Item
			</button>
		</div>

		<div class="space-y-4">
			{#each items as item (item.id)}
				<div class="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 transition-all hover:border-emerald-500/30 dark:border-slate-700 dark:bg-slate-800/30">
					<div class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
						<input
							type="text"
							bind:value={item.name}
							placeholder="Nama Makanan/Minuman..."
							class="flex-1 rounded-xl border-slate-200 bg-white py-2 px-4 text-sm dark:border-slate-700 dark:bg-slate-900"
						/>
						<div class="flex items-center gap-2">
							<div class="relative w-28">
								<span class="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">Rp</span>
								<input
									type="number"
									bind:value={item.price}
									class="w-full rounded-xl border-slate-200 bg-white py-2 pl-8 pr-3 text-sm dark:border-slate-700 dark:bg-slate-900"
								/>
							</div>
							<div class="flex items-center gap-1">
								<span class="text-xs text-slate-400">x</span>
								<input
									type="number"
									bind:value={item.quantity}
									min="1"
									class="w-16 rounded-xl border-slate-200 bg-white py-2 px-2 text-center text-sm dark:border-slate-700 dark:bg-slate-900"
								/>
							</div>
							<button
								onclick={() => removeItem(item.id)}
								class="rounded-xl bg-white p-2 text-slate-400 shadow-sm transition-all hover:text-rose-500 dark:bg-slate-900"
							>
								<Trash2 size={18} />
							</button>
						</div>
					</div>

					<!-- Friend Assignment -->
					<div class="space-y-2">
						<span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Dipesan oleh:</span>
						<div class="flex flex-wrap gap-2">
							{#each friends as friend (friend.id)}
								<button
									onclick={() => toggleAssignment(item.id, friend.id)}
									class="rounded-full px-3 py-1 text-xs font-medium transition-all {item.assignedTo.includes(friend.id) 
										? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20' 
										: 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-500/50 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-700'}"
								>
									{friend.name || '(Tanpa Nama)'}
								</button>
							{/each}
							{#if friends.length === 0}
								<span class="text-xs italic text-slate-400">Tambahkan teman untuk menandai pesanan</span>
							{/if}
						</div>
					</div>
				</div>
			{/each}
			{#if items.length === 0}
				<div class="py-8 text-center text-sm text-slate-500 border-2 border-dashed border-slate-200 rounded-2xl dark:border-slate-800">
					Klik "Tambah Item" untuk memulai
				</div>
			{/if}
		</div>
	</section>

	<!-- Extra Costs Section -->
	<section class="space-y-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
				<div class="rounded-lg bg-orange-100 p-2 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400">
					<Tag size={20} />
				</div>
				<h3 class="text-lg font-bold text-slate-800 dark:text-slate-100">Biaya Lain & Diskon</h3>
			</div>
			<button
				onclick={addExtraCost}
				class="flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700 dark:text-orange-400"
			>
				<Plus size={16} />
				Tambah
			</button>
		</div>

		<div class="space-y-3">
			{#each extraCosts as cost (cost.id)}
				<div class="flex items-center gap-3">
					<input
						type="text"
						bind:value={cost.name}
						placeholder="Misal: Ongkir, Diskon..."
						class="flex-1 rounded-xl border-slate-200 bg-white/50 py-2 px-4 text-sm dark:border-slate-700 dark:bg-slate-800/50"
					/>
					<div class="relative w-32">
						<span class="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">Rp</span>
						<input
							type="number"
							bind:value={cost.amount}
							placeholder="0"
							class="w-full rounded-xl border-slate-200 bg-white/50 py-2 pl-8 pr-3 text-sm dark:border-slate-700 dark:bg-slate-800/50"
						/>
					</div>
					<button
						onclick={() => removeExtraCost(cost.id)}
						class="rounded-xl p-2 text-slate-400 hover:text-rose-500"
					>
						<Trash2 size={18} />
					</button>
				</div>
			{/each}
			<p class="text-[10px] text-slate-400 italic">
				* Gunakan nilai negatif (misal: -10000) untuk diskon/voucher.
			</p>
		</div>
	</section>
</div>
