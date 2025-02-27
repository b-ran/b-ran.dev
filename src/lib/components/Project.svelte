<script lang="ts">
	// Components
	import Card from '$lib/components/Card.svelte';
	import Chip from '$lib/components/Chip.svelte';

	// Types
	import type { Image } from '$lib/shared/images';

	let { title, description, image, href, tags }: {
		title: string,
		description: string,
		image: Image,
		href: string,
		tags: string[]
	} = $props();
</script>

<a {href}>
	<Card>
		<div class="group bg-white dark:bg-zinc-800 text-zinc-900 dark:text-blue-50 relative">
			<div class="h-full w-full">
				<img
					src={image.src}
					alt={image.alt}
					class="transition-transform duration-300 ease-out group-hover:scale-110"
				>
				<span
					class="absolute inset-0
					bg-gradient-to-t from-black/80 via-black/50 to-transparent
					lg:opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
			</div>

			<div class="text-blue-50 absolute inset-x-0 bottom-0 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-full overflow-y-auto">
				<div
					class="p-4 md:p-6 lg:p-8 space-y-2 md:space-y-4 transform lg:translate-y-20 transition-transform duration-300 group-hover:translate-y-0">
					<div class="space-y-1 md:space-y-2">
						<h2 class="text-xl md:text-2xl font-bold">
							{title}
						</h2>
						<p class="text-sm md:text-lg line-clamp-3 md:line-clamp-none">
							{description}
						</p>
					</div>

					<div class="sm:flex flex-wrap gap-2 md:gap-3 hidden">
						{#each tags.slice(0, 10) as tag}
							<Chip>
								{tag}
							</Chip>
						{/each}
						{#if tags.length > 10}
							<Chip>+{tags.length - 10} more</Chip>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</Card>
</a>