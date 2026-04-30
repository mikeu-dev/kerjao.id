<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	let { measurementId = '', consent = false }: { measurementId?: string; consent?: boolean } =
		$props();

	let loaded = $state(false);

	function loadGA() {
		if (!browser || !measurementId || loaded) return;

		// Create script element
		const script = document.createElement('script');
		script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
		script.async = true;
		document.head.appendChild(script);

		// Initialize gtag
		window.dataLayer = window.dataLayer || [];
		function gtag(...args: unknown[]) {
			window.dataLayer.push(args);
		}
		gtag('js', new Date());
		gtag('config', measurementId, {
			send_page_view: true,
			cookie_flags: 'SameSite=None;Secure'
		});

		// Make gtag available globally
		window.gtag = gtag;
		loaded = true;
	}

	// Load GA only when consent is given
	$effect(() => {
		if (consent && measurementId) {
			loadGA();
		}
	});

	// Track page views on navigation
	$effect(() => {
		if (loaded && browser && window.gtag) {
			const pathname = $page.url.pathname;
			window.gtag('config', measurementId, {
				page_path: pathname
			});
		}
	});
</script>
