<script lang="ts">
	// Types
	import type { Snippet } from 'svelte';

	// Svelte
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { MediaQuery } from 'svelte/reactivity';

	const medium = new MediaQuery('max-width: 768px');

	let {
		children,
		isDrawerOpen = $bindable(false)
	}: {
		children?: Snippet;
		isDrawerOpen?: boolean;
	} = $props();

	function toggleDrawer() {
		isDrawerOpen = !isDrawerOpen;
	}
</script>

<svelte:window
	on:wheel|nonpassive={(e) => {
		if (isDrawerOpen && medium.current) e.preventDefault();
	}}
/>

{#if isDrawerOpen}
	<div
		class="fixed top-44 right-0 z-50 w-screen bg-blue-50 pb-5 pl-5 md:relative
			md:top-0 md:h-auto md:w-full md:bg-transparent md:pb-0 md:pl-0 dark:bg-zinc-900"
		transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}
	>
		{@render children?.()}
	</div>
{:else}
	<div class="hidden grow items-center md:flex">
		{@render children?.()}
	</div>
{/if}

{#if isDrawerOpen}
	<button
		class="fixed inset-0 top-44 z-10 cursor-default bg-black opacity-50 md:hidden"
		onclick={toggleDrawer}
		aria-label="Grey overlay over other content, click to close menu"
	></button>
{/if}
