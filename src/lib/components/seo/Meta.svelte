<script lang="ts">
	import { page } from '$app/stores';

	let {
		title = 'Kerjao.id - Alat Karir & Bisnis Profesional',
		description = 'Kumpulan perkakas instan, cerdas, dan gratis untuk karir profesionalmu.',
		keywords = 'karir, hrd, bisnis, indonesia, gratis, online',
		type = 'website'
	}: { title?: string; description?: string; keywords?: string; type?: string } = $props();

	let url = $derived(`https://kerjao.id${$page.url.pathname}`);
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
	<meta property="og:site_name" content="Kerjao.id" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />

	<!-- Canonical -->
	<link rel="canonical" href={url} />
</svelte:head>
