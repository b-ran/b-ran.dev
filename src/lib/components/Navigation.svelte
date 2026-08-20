<script>
	// Components
	import ThemeToggle from '$lib/components/buttons/ThemeButton.svelte';
	import Menu from '$lib/components/Menu.svelte';
</script>

<nav class="flex flex-col md:w-full md:flex-row md:items-center">
	<Menu />
	<div class="mt-10 md:mt-0 md:ml-auto md:flex">
		<ThemeToggle />
	</div>
</nav>
