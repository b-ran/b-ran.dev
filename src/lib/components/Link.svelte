<script lang="ts">
	// Types
	import type { Snippet } from 'svelte';

	let { href, target = '_self', children }: {
		href: string,
		target?: string,
		children?: Snippet
	} = $props();

</script>

<a {href} {target} class="flex items-center hover:underline hover:underline-offset-4">
	{@render children?.()}
</a>