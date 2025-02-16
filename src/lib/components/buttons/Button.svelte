<script lang="ts">
	// Types
	import type { Snippet } from 'svelte';

	let { children, onclick, type, theme = 'fill' }: {
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
		theme === 'fill' && 'bg-cyan-300 hover:bg-cyan-400 border-transparent ',
		theme === 'border' && 'border-cyan-300 hover:border-cyan-400 dark:text-blue-50',
		`flex justify-center py-2 px-4 border-2 rounded-lg text-sm
		font-medium text-zinc-900`
	]}
>
	{@render children?.()}
</button>