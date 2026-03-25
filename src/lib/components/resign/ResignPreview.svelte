<script lang="ts">
	let { letter }: { letter: string } = $props();
</script>

<div
	class="relative mx-auto w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-2xl ring-1 shadow-indigo-500/10 ring-slate-200 sm:rounded-2xl dark:bg-slate-900 dark:shadow-none dark:ring-slate-700/50"
>
	<!-- Top Fold/Shadow Effect -->
	<div
		class="absolute inset-x-0 top-0 h-4 bg-linear-to-b from-slate-900/5 to-transparent dark:from-black/20"
	></div>

	<div class="min-h-[600px] p-8 sm:p-12">
		<!-- Watermark-like element -->
		<div class="pointer-events-none absolute top-8 right-8 opacity-5 dark:opacity-10">
			<svg class="h-32 w-32 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
				<path
					d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
				/>
			</svg>
		</div>

		<div
			class="relative z-10 font-serif text-[15px] leading-8 whitespace-pre-wrap text-slate-800 sm:text-[17px] dark:text-slate-300 print:text-black"
		>
			{letter}
		</div>
	</div>
</div>
