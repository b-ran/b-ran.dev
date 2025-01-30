<script lang="ts">
	// Svelte
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	// Stores
	import { theme } from '$lib/stores/theme';

	// Components
	import Moon from '$lib/components/icons/Moon.svelte';
	import Sun from '$lib/components/icons/Sun.svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<button
		class="items-center rounded-2xl bg-cyan-300 text-zinc-900"
		onclick={theme.toggle}
		in:scale={{
      duration: 300,
      start: 0.8,
      opacity: 0
    }}
	>
		<span
			class="flex items-center justify-center
        w-10 h-10"
		>
			{#if $theme === 'dark'}
				<Sun />
			{:else}
				<Moon />
			{/if}
    </span>
	</button>
{/if}