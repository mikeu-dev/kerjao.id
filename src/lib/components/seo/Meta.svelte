<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_ORIGIN } from '$env/static/public';

	let {
		title = 'Kerjao.id - Alat Karir & Bisnis Profesional',
		description = 'Kumpulan perkakas instan, cerdas, dan gratis untuk karir profesionalmu.',
		keywords = 'karir, hrd, bisnis, indonesia, gratis, online',
		ogImage = `${PUBLIC_ORIGIN}/og-image.png`,
		type = 'website',
		noindex = false
	}: {
		title?: string;
		description?: string;
		keywords?: string;
		ogImage?: string;
		type?: string;
		noindex?: boolean;
	} = $props();

	let url = $derived(`${PUBLIC_ORIGIN}${$page.url.pathname}`);

	// Build dynamic JSON-LD for Schema.org
	let jsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			name: title,
			description: description,
			url: url,
			isPartOf: {
				'@type': 'WebSite',
				name: 'Kerjao.id',
				url: `${PUBLIC_ORIGIN}/`,
				description:
					'Platform Indonesia yang menyediakan 25+ perkakas karir dan bisnis profesional secara gratis.',
				publisher: {
					'@type': 'Organization',
					name: 'Kerjao.id',
					url: `${PUBLIC_ORIGIN}/`,
					logo: {
						'@type': 'ImageObject',
						url: `${PUBLIC_ORIGIN}/og-image.png`
					}
				}
			}
		})
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content="Kerjao.id" />
	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{:else}
		<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	{/if}

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:site_name" content="Kerjao.id" />
	<meta property="og:locale" content="id_ID" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	<!-- Canonical -->
	<link rel="canonical" href={url} />

	<!-- Schema.org JSON-LD (dynamic) -->
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>
