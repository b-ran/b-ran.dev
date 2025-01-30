<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import TopButton from '$lib/components/buttons/TopButton.svelte';

	let { children } = $props();
</script>

<div class="mt-10 max-w-[1200px] px-10 mx-auto text-zinc-900 dark:text-blue-50 ">
	<Header />
	{@render children()}
	<Footer />
</div>

<TopButton />