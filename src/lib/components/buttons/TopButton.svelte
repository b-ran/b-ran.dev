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
		class="fixed bottom-10 right-10 transition-all bg-cyan-300 rounded-2xl w-10 h-10 flex items-center justify-center shadow-elevated"
		onclick={() => window.scroll({ top: 0, behavior: 'smooth' })}
	>
		<UpArrow />
	</button>
{/if}