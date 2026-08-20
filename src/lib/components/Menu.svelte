<script>
	// Components
	import Link from '$lib/components/Link.svelte';

	let { center = false } = $props();
</script>

<menu
	class="flex flex-col md:flex-row {center
		? 'items-center'
		: ''} list-none gap-5 md:mx-24 md:gap-20"
>
	<li>
		<Link href="/">Home</Link>
	</li>
	<li>
		<Link href="/projects">Projects</Link>
	</li>
	<li>
		<Link href="/contact">Contact</Link>
	</li>
</menu>
