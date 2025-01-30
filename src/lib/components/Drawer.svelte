<script lang="ts">
	// Svelte
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let { children, isDrawerOpen = $bindable(false)} = $props();

	function toggleDrawer() {
		isDrawerOpen = !isDrawerOpen;
	}
</script>

{#if isDrawerOpen}
	<div
		class="fixed md:relative right-0 top-32 md:top-0 pl-10 md:pl-0 pb-5 md:pb-0
			w-screen md:w-full md:h-auto bg-blue-50 dark:bg-zinc-900 md:bg-transparent z-50"
		transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}
	>
		{@render children()}
	</div>
{:else}
	<div class="hidden md:flex items-center flex-grow">
		{@render children()}
	</div>
{/if}

{#if isDrawerOpen}
	<button
		class="fixed md:hidden inset-0 bg-black bg-opacity-50 z-10 top-32 cursor-default"
		onclick={toggleDrawer} aria-label="Grey overlay over other content, click to close menu"
	></button>
{/if}