<script lang="ts">
	// Svelte
	import { scale } from 'svelte/transition';

	// Stores
	import { theme } from '$lib/stores/theme';

	// Components
	import DarkMode from '$lib/components/icons/DarkMode.svelte';
</script>

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
				<DarkMode />
    </span>
</button>
