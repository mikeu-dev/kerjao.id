<script lang="ts">
	import * as Icons from 'lucide-svelte';
	import type { IconProps } from 'lucide-svelte';

	interface Props extends IconProps {
		name: string;
	}

	let { name, ...rest }: Props = $props();

	// Fallback to HelpCircle if icon not found
	const IconComponent = $derived((Icons as Record<string, any>)[name] || Icons.HelpCircle);
</script>

<IconComponent {...rest} />
