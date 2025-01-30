<script lang="ts">
	let { children } = $props();
</script>

<div class="w-full max-w-[850px] h-[478px] rounded-3xl overflow-hidden">
	{@render children?.()}
</div>