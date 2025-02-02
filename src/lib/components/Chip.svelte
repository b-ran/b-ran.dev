<script lang="ts">
	let { children } = $props();
</script>

<div class="bg-gray-400 rounded-2xl px-2">
	{@render children()}
</div>