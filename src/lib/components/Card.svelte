<script lang="ts">
	// Types
	import type { Snippet } from 'svelte';

	let {
		children
	}: {
		children?: Snippet;
	} = $props();
</script>

<div class="h-full w-full overflow-hidden rounded-3xl">
	{@render children?.()}
</div>
