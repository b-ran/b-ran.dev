<script lang="ts">
	// Svelte
	import { scale, fade } from 'svelte/transition';

	// Components
	import Project from '$lib/components/Project.svelte';

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

	let search = $state('');

	let filteredProjects = $derived.by(() => {
		if (search === '') return projects;

		return projects.filter(project => {
			return project.title.toLowerCase().includes(search.toLowerCase());
		});
	});
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
				bind:value={search}
				class="p-4 pr-12 border w-full text-zinc-900 mt-2.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
			>
		</div>
	</section>

	<section class="flex flex-col items-center gap-10">
		{#each filteredProjects as project}
			<div class="w-full"
				in:scale={{duration: 300, delay: 300, start: 0.95}}
				out:fade={{duration: 200}}
			>
			<Project {...project} />
			</div>
		{/each}

		{#if filteredProjects.length === 0}
			<p
				class="text-lg mt-8"
				in:fade
			>
				No projects found matching "{search}"
			</p>
		{/if}

	</section>
</main>