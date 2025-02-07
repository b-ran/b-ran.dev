<script lang="ts">
	// Types
	import type { Snippet } from 'svelte';

	let { children }: {
		children?: Snippet;
	} = $props();
</script>

<div class="w-full h-full rounded-3xl overflow-hidden">
	{@render children?.()}
</div>