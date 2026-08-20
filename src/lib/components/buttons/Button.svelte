<script lang="ts">
	// Types
	import type { Snippet } from 'svelte';

	let {
		children,
		onclick,
		type,
		theme = 'fill'
	}: {
		children?: Snippet;
		onclick?: () => void;
		type?: 'button' | 'submit' | 'reset';
		theme?: 'fill' | 'border';
	} = $props();
</script>

<button
	{type}
	{onclick}
	class={[
		theme === 'fill' && 'border-transparent bg-cyan-300 hover:bg-cyan-400 ',
		theme === 'border' && 'border-cyan-300 hover:border-cyan-400 dark:text-blue-50',
		`flex justify-center rounded-lg border-2 px-4 py-2 text-sm
		font-medium text-zinc-900`
	]}
>
	{@render children?.()}
</button>
