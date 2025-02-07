<script lang="ts">
	// Components
	import RightArrow from '$lib/components/icons/RightArrow.svelte';
	import Card from '$lib/components/Card.svelte';
	import Chip from '$lib/components/Chip.svelte';

	let { title, description, image, href, tags }: {
		title: string,
		description: string,
		image: string,
		href: string,
		tags: string[]
	} = $props();
</script>

<a {href}>
	<Card>
		<div class="group bg-white dark:bg-zinc-800 text-zinc-900 dark:text-blue-50 h-full flex flex-col">
			<div class="relative overflow-hidden">
				<img
					src={image}
					alt={title}
					class="transition-transform duration-500 ease-out group-hover:scale-110"
				>
			</div>

			<div
				class="p-8 flex flex-col flex-grow gap-4 transition-transform duration-500 ease-out group-hover:-translate-y-2 rounded-b-3xl">
				<div class="flex-grow flex flex-col">
					<h2 class="text-2xl font-bold mb-3">{title}</h2>
					<p class="text-lg flex-grow">{description}</p>
				</div>

				<div class="flex flex-wrap gap-3 mb-3">
					{#each tags.slice(0, 10) as tag}
						<Chip>
							{tag}
						</Chip>
					{/each}
					{#if tags.length > 10}
						<Chip>+{tags.length - 10} more</Chip>
					{/if}
				</div>

				<div class="flex items-center hover:underline hover:underline-offset-4">
					<span class="font-semibold mr-2">View Project</span>
					<RightArrow />
				</div>
			</div>
		</div>

	</Card>
</a>