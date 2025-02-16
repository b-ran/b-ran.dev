<script lang="ts">
	// Types
	import type { Snippet } from 'svelte';

	const props = $props();

	let { children, href, target = '_self',  }: {
		children?: Snippet
		href: string,
		target?: string,
	} = props;

</script>

<a {href} {target} class='hover:underline hover:underline-offset-4'>
	{@render children?.()}
</a>