<script lang="ts">
	import { onMount } from 'svelte';

	let { value = $bindable(''), label = 'Tanda Tangan' }: { value: string | undefined; label?: string } = $props();

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;
	let isDrawing = false;

	function getPos(e: MouseEvent | TouchEvent) {
		const rect = canvas.getBoundingClientRect();
		if (e instanceof MouseEvent) {
			return { x: e.clientX - rect.left, y: e.clientY - rect.top };
		} else {
			return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
		}
	}

	function startDrawing(e: MouseEvent | TouchEvent) {
		isDrawing = true;
		const { x, y } = getPos(e);
		ctx?.beginPath();
		ctx?.moveTo(x, y);
		e.preventDefault();
	}

	function draw(e: MouseEvent | TouchEvent) {
		if (!isDrawing) return;
		const { x, y } = getPos(e);
		ctx?.lineTo(x, y);
		ctx?.stroke();
		e.preventDefault();
	}

	function stopDrawing() {
		if (!isDrawing) return;
		isDrawing = false;
		value = canvas.toDataURL('image/png');
	}

	function clear() {
		ctx?.clearRect(0, 0, canvas.width, canvas.height);
		value = '';
	}

	onMount(() => {
		ctx = canvas.getContext('2d');
		if (ctx) {
			ctx.strokeStyle = '#000000';
			ctx.lineWidth = 2;
			ctx.lineJoin = 'round';
			ctx.lineCap = 'round';
		}

		// Re-init if value exists (for persistence)
		if (value) {
			const img = new Image();
			img.onload = () => ctx?.drawImage(img, 0, 0);
			img.src = value;
		}
	});
</script>

<div class="space-y-2">
	<div class="flex items-center justify-between">
		<label for="sig-pad" class="text-xs font-semibold text-slate-600 dark:text-slate-300">{label}</label>
		<button
			type="button"
			onclick={clear}
			class="text-[10px] font-bold text-rose-500 hover:text-rose-600 dark:text-rose-400"
		>
			Hapus
		</button>
	</div>

	<div class="relative overflow-hidden rounded-xl border-2 border-dashed border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
		<canvas
			bind:this={canvas}
			id="sig-pad"
			width="400"
			height="150"
			onmousedown={startDrawing}
			onmousemove={draw}
			onmouseup={stopDrawing}
			onmouseleave={stopDrawing}
			ontouchstart={startDrawing}
			ontouchmove={draw}
			ontouchend={stopDrawing}
			class="h-[120px] w-full cursor-crosshair touch-none sm:h-[150px]"
		></canvas>
        
        {#if !value}
            <div class="pointer-events-none absolute inset-0 flex items-center justify-center text-[10px] text-slate-300 uppercase tracking-widest">
                Gambar Tanda Tangan Di Sini
            </div>
        {/if}
	</div>
</div>
