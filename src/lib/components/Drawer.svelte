<script lang="ts">
	// Types
	import type { Snippet } from 'svelte';

	// Svelte
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { MediaQuery } from 'svelte/reactivity';

	const medium = new MediaQuery('max-width: 768px');

	let { children, isDrawerOpen = $bindable(false)}: {
		children?: Snippet;
		isDrawerOpen?: boolean;
	} = $props();

	function toggleDrawer() {
		isDrawerOpen = !isDrawerOpen;
	}
</script>

<svelte:window on:wheel|nonpassive={e => {
    if(isDrawerOpen && medium.current)
        e.preventDefault()
}} />

{#if isDrawerOpen}
	<div
		class="fixed md:relative right-0 top-44 md:top-0 pl-5 md:pl-0 pb-5 md:pb-0
			w-screen md:w-full md:h-auto bg-blue-50 dark:bg-zinc-900 md:bg-transparent z-50"
		transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}
	>
		{@render children?.()}
	</div>
{:else}
	<div class="hidden md:flex items-center grow">
		{@render children?.()}
	</div>
{/if}

{#if isDrawerOpen}
	<button
		class="fixed md:hidden inset-0 bg-black opacity-50 z-10 top-44 cursor-default"
		onclick={toggleDrawer} aria-label="Grey overlay over other content, click to close menu"
	></button>
{/if}