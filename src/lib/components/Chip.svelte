<script lang="ts">
	// Types
	import type { Snippet } from 'svelte';

	let { children }: {
		children?: Snippet;
	} = $props();
</script>

<div class="bg-zinc-900 dark:bg-blue-50 text-blue-50 dark:text-zinc-900  rounded-2xl px-2">
	{@render children?.()}
</div>