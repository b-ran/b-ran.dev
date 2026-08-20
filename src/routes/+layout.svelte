<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import TopButton from '$lib/components/buttons/TopButton.svelte';

	// Types
	import type { Snippet } from 'svelte';

	let {
		children
	}: {
		children?: Snippet;
	} = $props();
</script>

<div class="mx-auto max-w-[1400px] px-5 pt-20 text-zinc-900 dark:text-blue-50">
	<Header />
	{@render children?.()}
</div>

<TopButton />
