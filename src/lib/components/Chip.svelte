<script lang="ts">
	// Types
	import type { Snippet } from 'svelte';

	let { children }: {
		children?: Snippet;
	} = $props();
</script>

<div class="text-xs px-2 py-0.5 font-medium bg-zinc-900 dark:bg-blue-50 text-blue-50 dark:text-zinc-900 rounded-[50px] inline-flex items-center">
	{@render children?.()}
</div>