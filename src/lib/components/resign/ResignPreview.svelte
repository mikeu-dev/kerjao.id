<script lang="ts">
	let { letter }: { letter: string } = $props();
</script>

<div
	class="relative mx-auto min-h-[1122px] w-full bg-white p-8 font-serif text-[14px] leading-relaxed text-slate-900 shadow-2xl sm:p-12 print:m-0 print:p-0 print:text-black print:shadow-none"
>
	<div class="relative z-10 whitespace-pre-wrap">
		{letter}
	</div>
</div>
