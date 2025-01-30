<script lang="ts">
	let { children, onclick = undefined } = $props();
</script>

<button class="flex items-center justify-center text-zinc-900  rounded-2xl bg-cyan-300 w-10 h-10" {onclick}>
   {@render children?.()}
</button>
