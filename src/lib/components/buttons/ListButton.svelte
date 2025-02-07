<script lang="ts">
	let { children, onclick = undefined } = $props();
</script>

<button class="group relative flex items-center justify-center" {onclick}>
	<span
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-0 w-0 bg-cyan-300
		rounded-2xl transition-all duration-400 ease-out group-hover:w-10 group-hover:h-10"></span>
	<span class="relative group-hover:dark:text-zinc-900 group-hover:dark:transition-colors">
   {@render children?.()}
  </span>
</button>