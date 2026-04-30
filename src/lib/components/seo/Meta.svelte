<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_ORIGIN } from '$env/static/public';

	let {
		title = 'Kerjao.id - Alat Karir & Bisnis Profesional',
		description = 'Kumpulan perkakas instan, cerdas, dan gratis untuk karir profesionalmu.',
		keywords = 'karir, hrd, bisnis, indonesia, gratis, online',
		ogImage = `${PUBLIC_ORIGIN}/og-image.png`,
		type = 'website'
	}: {
		title?: string;
		description?: string;
		keywords?: string;
		ogImage?: string;
		type?: string;
	} = $props();

	let url = $derived(`${PUBLIC_ORIGIN}${$page.url.pathname}`);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:site_name" content="Kerjao.id" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	<!-- Canonical -->
	<link rel="canonical" href={url} />

	<!-- Schema.org JSON-LD -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			"name": "{title}",
			"description": "{description}",
			"applicationCategory": "BusinessApplication",
			"operatingSystem": "All",
			"url": "{url}",
			"offers": {
				"@type": "Offer",
				"price": "0",
				"priceCurrency": "IDR"
			}
		}
	</script>
</svelte:head>
