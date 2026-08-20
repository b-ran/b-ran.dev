<script lang="ts">
	let { children, onclick = undefined } = $props();
</script>

<button
	class="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300 text-zinc-900"
	{onclick}
>
	{@render children?.()}
</button>
