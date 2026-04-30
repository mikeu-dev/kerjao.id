<script lang="ts">
	import { Plus, Trash2, UserPlus, Users, Utensils, Tag, Camera, LoaderCircle } from 'lucide-svelte';
	import type { Friend, Item, ExtraCost } from '$lib/utils/split-bill';
	import { parseReceiptText } from '$lib/utils/ocr-parser';
	import { createWorker } from 'tesseract.js';
	import { tick } from 'svelte';
	import Swal from 'sweetalert2';

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

	// OCR Logic
	let isScanning = $state(false);
	let scanProgress = $state(0);
	let scanStatus = $state('');
	let fileInput: HTMLInputElement;

	async function handleScan(event: Event) {
		const target = event.target as HTMLInputElement;
		const file = target.files?.[0];
		if (!file) return;

		isScanning = true;
		scanProgress = 0;

		try {
			scanStatus = 'Menyiapkan sistem AI...';
			const worker = await createWorker('ind+eng', 1, {
				logger: (m) => {
					if (m.status === 'recognizing text') {
						scanStatus = 'Membaca rincian struk...';
						scanProgress = Math.round(m.progress * 100);
					} else if (m.status.includes('loading')) {
						scanStatus = 'Memuat basis data bahasa...';
						scanProgress = Math.max(scanProgress, 10);
					}
				}
			});

			const { data: { text } } = await worker.recognize(file);
			scanProgress = 100;
			scanStatus = 'Selesai!';
			await tick();
			
			await worker.terminate();

			const parsed = parseReceiptText(text);

			if (parsed.items.length > 0 || parsed.extras.length > 0) {
				const newItems = parsed.items.map(pi => ({
					id: crypto.randomUUID(),
					name: pi.name,
					price: pi.price,
					quantity: pi.quantity,
					assignedTo: []
				}));

				const newExtras = parsed.extras.map(pe => ({
					id: crypto.randomUUID(),
					name: pe.name,
					amount: pe.amount
				}));

				items = [...items, ...newItems];
				extraCosts = [...extraCosts, ...newExtras];
				
				Swal.fire({
					title: 'Scan Berhasil!',
					text: `Menemukan ${parsed.items.length} item pesanan.`,
					icon: 'success',
					confirmButtonColor: '#f97316'
				});
			} else {
				Swal.fire({
					title: 'Gagal Mendeteksi',
					text: 'Sistem tidak menemukan item. Coba foto lebih jelas.',
					icon: 'warning',
					confirmButtonColor: '#f97316'
				});
			}
		} catch (err) {
			console.error('OCR Error:', err);
			Swal.fire({
				title: 'Error',
				text: 'Terjadi kesalahan saat memproses gambar.',
				icon: 'error'
			});
		} finally {
			isScanning = false;
			target.value = '';
		}
	}
</script>

<div class="space-y-10">
	<!-- OCR Scan Section -->
	<div class="relative overflow-hidden rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-6 text-center transition-all hover:border-orange-300 dark:border-slate-800 dark:bg-slate-900/30">
		<input 
			type="file" 
			accept="image/*" 
			class="hidden" 
			bind:this={fileInput} 
			onchange={handleScan}
		/>
		
		{#if isScanning}
			<div class="space-y-4">
				<div class="flex justify-center">
					<LoaderCircle size={32} class="animate-spin text-orange-500" />
				</div>
				<div class="space-y-2">
					<p class="text-sm font-semibold text-slate-700 dark:text-slate-300">{scanStatus} {scanProgress}%</p>
					<div class="mx-auto h-2 w-48 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
						<div class="h-full bg-orange-500 transition-all duration-500 ease-out" style="width: {scanProgress}%"></div>
					</div>
				</div>
			</div>
		{:else}
			<div class="flex flex-col items-center gap-3">
				<div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400">
					<Camera size={24} />
				</div>
				<div>
					<h4 class="text-base font-bold text-slate-900 dark:text-white">Scan Struk Otomatis</h4>
					<p class="text-xs text-slate-500 dark:text-slate-400">Unggah foto struk untuk mengisi daftar pesanan secara otomatis</p>
				</div>
				<button 
					onclick={() => fileInput.click()}
					class="mt-2 rounded-xl bg-orange-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-600 active:scale-95"
				>
					Pilih Gambar Struk
				</button>
			</div>
		{/if}
	</div>

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
