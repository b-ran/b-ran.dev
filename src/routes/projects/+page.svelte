<script lang="ts">
	// Components
	import Drawer from '$lib/components/Drawer.svelte';
	import IconButton from '$lib/components/buttons/IconButton.svelte';
	import Filter from '$lib/components/icons/Filter.svelte';
	import Card from '$lib/components/Card.svelte';
	import Project from '$lib/components/Project.svelte';

	let isDrawerOpen = $state(false);

	function toggleDrawer() {
		isDrawerOpen = !isDrawerOpen;
	}

	let projects = [
		{
			title: 'Project 1',
			description: 'This is a description of project 1',
			image: 'https://placehold.co/850',
			href: 'https://google.com'
		},
		{
			title: 'Project 2',
			description: 'This is a description of project 2',
			image: 'https://placehold.co/850',
			href: 'https://google.com'
		},
		{
			title: 'Project 3',
			description: 'This is a description of project 3',
			image: 'https://placehold.co/850',
			href: 'https://google.com'
		},
		{
			title: 'Project 4',
			description: 'This is a description of project 4',
			image: 'https://placehold.co/850',
			href: 'https://google.com'
		},
		{
			title: 'Project 5',
			description: 'This is a description of project 5',
			image: 'https://placehold.co/850',
			href: 'https://google.com'
		},
		{
			title: 'Project 6',
			description: 'This is a description of project 6',
			image: 'https://placehold.co/850',
			href: 'https://google.com'
		}
	];

</script>

<title>Projects</title>

<main class="max-w-[850px] mx-auto">
	<section class="flex flex-col items-center mb-10">
		<h1 class="font-extrabold text-5xl leading-snug mb-5">Projects</h1>
		<p class="text-xl mb-5">Here are some of the projects I have worked on.</p>

		<div class="relative w-full">
			<input
				type="text"
				placeholder="Search Projects..."
				class="p-4 pr-12 border w-full mt-2.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
			>
			<div class="absolute right-6 top-[20px] md:hidden">
				<IconButton onclick={toggleDrawer}>
					<Filter />
				</IconButton>
			</div>
		</div>


	</section>

	<section class="flex flex-col items-center gap-10">
		{#each projects as project}
			<Project {...project} />
		{/each}
	</section>
</main>

<Drawer bind:isDrawerOpen>
	hello
</Drawer>