<script lang="ts">
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import CookieConsent from '$lib/components/layout/CookieConsent.svelte';
	import GoogleAnalytics from '$lib/components/seo/GoogleAnalytics.svelte';

	let { children } = $props();

	// Cookie consent state
	let analyticsConsent = $state(false);

	function handleConsentChange(consent: { analytics: boolean; advertising: boolean }) {
		analyticsConsent = consent.analytics;
	}

	// GA Measurement ID — set via env or leave empty to disable
	const GA_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID || '';
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<!-- Google Analytics (loads only with consent) -->
{#if GA_ID}
	<GoogleAnalytics measurementId={GA_ID} consent={analyticsConsent} />
{/if}

<div
	class="relative flex min-h-screen flex-col overflow-hidden bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50 print:bg-white print:text-black"
>
	<!-- Global Background Ambient Shapes -->
	<div class="pointer-events-none fixed inset-0 z-0 overflow-hidden print:hidden">
		<div
			class="absolute -top-[10%] -left-[10%] h-[40%] w-[50%] rounded-full bg-indigo-500/10 blur-2xl dark:bg-indigo-600/15"
		></div>
		<div
			class="absolute top-[20%] -right-[10%] h-[30%] w-[40%] rounded-full bg-purple-500/10 blur-2xl dark:bg-purple-600/15"
		></div>
		<div
			class="absolute -bottom-[20%] left-[20%] h-[50%] w-[50%] rounded-full bg-emerald-500/5 blur-2xl dark:bg-emerald-600/10"
		></div>
	</div>

	<Header />

	<div class="relative z-10 flex w-full flex-1 flex-col">
		{@render children()}
	</div>

	<Footer />
</div>

<!-- Cookie Consent Banner -->
<CookieConsent onConsentChange={handleConsentChange} />

<div style="display:none">
	{#each locales as locale (locale)}
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
