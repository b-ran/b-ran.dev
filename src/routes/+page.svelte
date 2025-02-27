<script lang="ts">
	// Components
	import Social from '$lib/components/Social.svelte';
	import Link from '$lib/components/Link.svelte';
	import RightArrow from '$lib/components/icons/RightArrow.svelte';
	import Button from '$lib/components/buttons/Button.svelte';

	// Exports
	import projects from '$lib/shared/projects';
	import Project from '$lib/components/Project.svelte';

</script>

<title>Brandon Scott-Hill</title>

<main class="lg:pt-24 lg:space-y-36 py-12 space-y-16">
	<section>
		<article class="flex flex-col gap-6 md:gap-12 lg:max-w-10/12">
			<h1 class="font-extrabold tracking-wider text-4xl md:text-6xl leading-tight md:leading-18">
				I'm Brandon Scott-Hill
			</h1>

			<p class="leading-relaxed md:leading-12">
				A Software Engineer with a knack on solving tough problems.
				By day, I write code that's clean enough to make future maintainers smile and teaming up with different groups
				to ship cool stuff. When I'm not untangling technical puzzles at work, you'll catch me tinkering with side
				projects that sometimes work (and sometimes spectacularly don't).
			</p>

			<nav class="mb-2">
				<ul class="flex flex-row gap-4">
					<li>
						<Link href="/projects">
							<Button>
								<span class="mx-5 my-2 font-bold">My work</span>
							</Button>
						</Link>
					</li>
					<li>
						<Link href="/contact">
							<Button theme="border">
								<span class="mx-5 my-2 font-bold">Message me</span>
							</Button>
						</Link>
					</li>
				</ul>
			</nav>
			<Social />
		</article>
	</section>

	<section class="flex flex-col gap-8">
		<article class="flex flex-col md:flex-row md:items-center md:justify-between">
			<div class="space-y-4 md:space-y-8">
				<h2 class="font-extrabold text-3xl md:text-4xl">Highlighted Projects</h2>
				<p class="leading-relaxed md:leading-12">
					Here are some of the projects I have worked on
				</p>
			</div>
			<Link href="projects">
				<div class="flex items-center mt-4 md:mt-0">
					<span class="font-semibold mr-2">View all </span>
					<RightArrow />
				</div>
			</Link>
		</article>

		{#each projects as project}
			{#if project.highlight}
				<Project {...project} />
			{/if}
		{/each}
	</section>
</main>