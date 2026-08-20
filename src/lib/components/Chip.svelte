<script lang="ts">
	// Types
	import type { Snippet } from 'svelte';

	let {
		children
	}: {
		children?: Snippet;
	} = $props();
</script>

<div
	class="inline-flex items-center rounded-[50px] bg-zinc-900 px-2 py-0.5 text-xs font-medium text-blue-50 dark:bg-blue-50 dark:text-zinc-900"
>
	{@render children?.()}
</div>
