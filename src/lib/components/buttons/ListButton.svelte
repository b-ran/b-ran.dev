<script lang="ts">
	let { children, onclick = undefined } = $props();
</script>

<button class="group relative flex items-center justify-center" {onclick}>
	<span
		class="absolute top-1/2 left-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-2xl
		bg-cyan-300 transition-all duration-400 ease-out group-hover:h-10 group-hover:w-10"
	></span>
	<span class="relative dark:group-hover:text-zinc-900 dark:group-hover:transition-colors">
		{@render children?.()}
	</span>
</button>
