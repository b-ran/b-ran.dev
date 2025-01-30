<script lang="ts">
	// Components
	import Link from '$lib/components/Link.svelte';
	import IconButton from '$lib/components/buttons/IconButton.svelte';
	import Menu from '$lib/components/icons/Menu.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Close from '$lib/components/icons/Close.svelte';
	import Drawer from '$lib/components/Drawer.svelte';

	let isDrawerOpen = $state(false);

	function toggleDrawer() {
		isDrawerOpen = !isDrawerOpen;
	}
</script>

<header class="flex flex-col md:flex-row font-semibold text-lg items-center dark:text-blue-50 z-50 mb-10">
	<div class="flex flex-row w-full md:w-auto">
		<div class="bg-cyan-300 rounded-2xl ">
			<Link href="/">
				<h1 class="text-zinc-900 font-extrabold p-4">BS</h1>
			</Link>
		</div>
		<div class="md:hidden ml-auto flex items-center">
			<IconButton onclick={toggleDrawer}>
				{#if isDrawerOpen}
					<Close />
				{:else}
					<Menu />
				{/if}
			</IconButton>
		</div>
	</div>

	<Drawer bind:isDrawerOpen>
		<Navigation />
	</Drawer>



</header>

