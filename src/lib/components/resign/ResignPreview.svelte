<script lang="ts">
	let { letter }: { letter: string } = $props();
</script>

<div class="min-h-[500px] w-full bg-white p-6 sm:p-8 dark:bg-gray-800">
	<div
		class="font-serif text-sm leading-relaxed whitespace-pre-wrap text-gray-800 sm:text-base dark:text-gray-200"
	>
		{letter}
	</div>
</div>
