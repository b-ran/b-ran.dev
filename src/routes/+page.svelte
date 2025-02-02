<script lang="ts">
	// Svelte
	import { enhance } from '$app/forms';

	// Components
	import Social from '$lib/components/Social.svelte';
	import Link from '$lib/components/Link.svelte';
	import RightArrow from '$lib/components/icons/RightArrow.svelte';
	import Button from '$lib/components/buttons/Button.svelte';
	import Project from '$lib/components/Project.svelte';

	// Exports
	import projects from '$lib/shared/projects';

	let { form } = $props();

</script>

<title>Brandon Scott-Hill</title>

<main>
	<section class="pt-48 grid md:grid-cols-2 grid-cols-1 gap-20">

		<div>
			<h1 class="font-extrabold text-5xl leading-snug mb-5">
				Hello there, I'm Brandon Scott-Hill
			</h1>

			<p class="text-xl mb-5">
				A <b>Software Engineer</b> who uses creativity and experience to solve problems.
				Creates clear, maintainable code and works closely with different teams
				to deliver results.
			</p>

			<Social />
		</div>

		<div>
			<div class="text-2xl bg-cyan-300 h-96 rounded-3xl"></div>
		</div>
	</section>

	<section class="mt-32">
		<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
			<h1 class="font-extrabold text-4xl">Highlighted Projects</h1>
			<Link href="projects">
				<span class="font-semibold mr-2">View all </span>
				<RightArrow />
			</Link>
		</div>

		<div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
			{#each projects as project}
				{#if project.highlight}
					<Project {...project} />
				{/if}
			{/each}
		</div>
	</section>


	<section class="max-w-2xl mx-auto mt-32">

		<h1 id="contact" class="font-extrabold text-4xl mb-8 text-center">Send me a message!</h1>

		<form method="POST" class="space-y-6" use:enhance>
			<input
				data-1p-ignore
				type="text"
				name="name"
				placeholder="Your name"
				required
				class="mt-1 block w-full h-16 px-5 py-2 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-zinc-900"
			/>

			<input
				data-1p-ignore
				type="email"
				name="email"
				placeholder="Your email"
				required
				class="mt-1 block w-full h-16 px-5 py-2 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-zinc-900"
			/>

			<textarea
				name="message"
				placeholder="Your message"
				required
				class="mt-1 block w-full px-5 py-5 min-h-40 rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-zinc-900"
			></textarea>


			<Button type="submit">Submit</Button>
		</form>

		{#if form && form.message}
			<p class="mt-4 text-center">{form.message}</p>
		{/if}

	</section>
</main>