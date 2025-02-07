<script lang="ts">
	let { children } = $props();
</script>

<div class="w-full h-full rounded-3xl overflow-hidden">
	{@render children?.()}
</div>