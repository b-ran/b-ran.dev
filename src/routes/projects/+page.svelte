<script lang="ts">
	// Svelte
	import { scale, fade } from 'svelte/transition';

	// Components
	import Project from '$lib/components/Project.svelte';

	// Exports
	import projects from '$lib/shared/projects';
	import Social from '$lib/components/Social.svelte';

	let search = $state('');

	let filteredProjects = $derived.by(() => {
		if (search === '') return projects;

		const searchTerm = search.toLowerCase();
		return projects.filter(project => {
			// Check title
			const titleMatch = project.title.toLowerCase().includes(searchTerm);

			// Check tags
			const tagMatch = project.tags?.some(tag =>
				tag.toLowerCase().includes(searchTerm)
			);

			return titleMatch || tagMatch;
		});
	});
</script>

<title>Projects | Brandon Scott-Hill</title>

<main class="py-24 space-y-24">
	<section class="flex flex-col mb-10">
		<h1 class="font-extrabold text-5xl leading-snug mb-5">Projects.</h1>
		<p class="mb-5">Here are some of the projects I have worked on.</p>

	</section>

	<section class="grid 2xl:grid-cols-2 grid-cols-1 gap-10">
		{#each filteredProjects as project}
			<div class="w-full"
				in:scale={{duration: 300, delay: 300, start: 0.95}}
				out:fade={{duration: 200}}
			>
			<Project {...project} />
			</div>
		{/each}
	</section>

	<section>
		<Social />
	</section>
</main>