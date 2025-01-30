<script lang="ts">
	let { children, onclick = undefined, type = undefined } = $props();
</script>

<button
	{type}
	{onclick}
	class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm
	font-medium text-zinc-900 bg-cyan-300
	hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
>
	{@render children?.()}
</button>