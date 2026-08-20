<script lang="ts">
	// Svelte
	import { onMount } from 'svelte';

	// Components
	import UpArrow from '$lib/components/icons/UpArrow.svelte';

	let displayUpButton: boolean = false;

	onMount(() => {
		window.addEventListener('scroll', () => {
			displayUpButton = window.scrollY > 200;
		});
	});
</script>

{#if displayUpButton}
	<button
		class="shadow-elevated fixed right-10 bottom-10 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300 transition-all"
		onclick={() => window.scroll({ top: 0, behavior: 'smooth' })}
	>
		<UpArrow />
	</button>
{/if}
