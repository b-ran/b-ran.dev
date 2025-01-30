<script lang="ts">
	let {
		href,
		target = '_self',
		children
	} = $props();

</script>

<a {href} {target} class="flex items-center hover:underline hover:underline-offset-4">
	{@render children()}
</a>