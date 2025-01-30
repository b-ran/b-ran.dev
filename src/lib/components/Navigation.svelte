<script>
	// Components
	import ThemeToggle from '$lib/components/buttons/ThemeButton.svelte';
	import Menu from '$lib/components/Menu.svelte';
</script>

<nav class="flex flex-col md:flex-row md:w-full md:items-center">
	<Menu />
	<div class="md:ml-auto md:flex mt-10 md:mt-0">
		<ThemeToggle />
	</div>
</nav>