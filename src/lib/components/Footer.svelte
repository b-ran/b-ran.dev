<script>
	import Social from '$lib/components/Social.svelte';
	import Menu from '$lib/components/Menu.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="mt-20 mb-5 flex h-fit w-full flex-col items-center gap-5 pb-10 font-bold">
	<div class="mb-2.5">
		<Social />
	</div>
	<Menu center={true} />
	<p class="font-normal">© {year} Brandon Scott-Hill</p>
</footer>
