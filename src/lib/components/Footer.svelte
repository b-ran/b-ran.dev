<script>
	import Social from '$lib/components/Social.svelte';
	import Menu from '$lib/components/Menu.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="w-full h-fit pb-10 mt-20 flex flex-col items-center gap-5 font-bold mb-5">
	<div class="mb-2.5">
		<Social />
	</div>
	<Menu center={true} />
	<p class="font-normal">© {year} Brandon Scott-Hill</p>
</footer>