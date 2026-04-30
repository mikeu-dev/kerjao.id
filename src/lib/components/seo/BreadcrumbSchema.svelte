<script lang="ts">
	const PUBLIC_ORIGIN = import.meta.env.PUBLIC_ORIGIN || 'https://kerjao.id';

	/**
	 * Breadcrumb items: array of { name, path } pairs.
	 * Example: [{ name: 'Beranda', path: '/' }, { name: 'Kalkulator Gaji', path: '/kalkulator-gaji' }]
	 */
	let { items }: { items: { name: string; path: string }[] } = $props();

	let jsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: items.map((item, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				name: item.name,
				item: `${PUBLIC_ORIGIN}${item.path}`
			}))
		})
	);
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html '<script type="application/ld+json">' + jsonLd + '</script' + '>'}
</svelte:head>
