<script lang="ts">
	/**
	 * FAQ items: array of { question, answer } pairs.
	 * Generates FAQPage structured data for Google Rich Snippets.
	 */
	let { items }: { items: { question: string; answer: string }[] } = $props();

	let jsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: items.map((item) => ({
				'@type': 'Question',
				name: item.question,
				acceptedAnswer: {
					'@type': 'Answer',
					text: item.answer
				}
			}))
		})
	);
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>
