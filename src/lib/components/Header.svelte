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

<header
	class="z-50 mb-10 flex flex-col items-center text-lg font-semibold md:flex-row dark:text-blue-50"
>
	<div class="flex w-full flex-row md:w-auto">
		<div class="rounded-2xl bg-cyan-300">
			<Link href="/">
				<h1 class="p-4 font-extrabold text-zinc-900">BS</h1>
			</Link>
		</div>
		<div class="ml-auto flex items-center md:hidden">
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
