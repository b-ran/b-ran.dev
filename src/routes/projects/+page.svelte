<script lang="ts">
	// Svelte
	import { scale, fade } from 'svelte/transition';

	// Components
	import Project from '$lib/components/Project.svelte';

	// Exports
	import projects from '$lib/shared/projects';

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

<title>Projects</title>

<main class="max-w-[1400px] mx-auto">
	<section class="flex flex-col items-center mb-10">
		<h1 class="font-extrabold text-5xl leading-snug mb-5">Projects</h1>
		<p class="text-xl mb-5">Here are some of the projects I have worked on.</p>

		<div class="relative w-full lg:w-9/12">
			<input
				type="text"
				placeholder="Search Projects..."
				bind:value={search}
				class="p-4 pr-12 border w-full text-zinc-900 mt-2.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
			>
		</div>
	</section>

	<section class="grid grid-cols-1 items-center gap-10 max-w-[850px] mx-auto">
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