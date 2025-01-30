<script>
	// Components
	import Link from '$lib/components/Link.svelte';

	let { center = false } = $props();
</script>
<menu class="flex flex-col md:flex-row {center ? 'items-center' : ''} gap-5 md:gap-20 md:mx-24 list-none">
	<li>
		<Link href="/">Home</Link>
	</li>
	<li>
		<Link href="/projects">Projects</Link>
	</li>
	<li>
		<Link href="/#contact">Contact</Link>
	</li>
</menu>
