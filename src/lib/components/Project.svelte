<script lang="ts">
	// Components
	import Card from '$lib/components/Card.svelte';
	import Chip from '$lib/components/Chip.svelte';

	// Types
	import type { Image } from '$lib/shared/images';

	let {
		title,
		description,
		image,
		href,
		tags
	}: {
		title: string;
		description: string;
		image: Image;
		href: string;
		tags: string[];
	} = $props();
</script>

<a {href}>
	<Card>
		<div class="group relative bg-white text-zinc-900 dark:bg-zinc-800 dark:text-blue-50">
			<div class="h-full w-full">
				<img
					src={image.src}
					alt={image.alt}
					class="transition-transform duration-300 ease-out group-hover:scale-110"
				/>
				<span
					class="absolute inset-0
					bg-gradient-to-t from-black/80 via-black/50 to-transparent
					transition-opacity duration-300 group-hover:opacity-100 lg:opacity-0"
				></span>
			</div>

			<div
				class="absolute inset-x-0 bottom-0 max-h-full overflow-y-auto text-blue-50 transition-opacity duration-300 group-hover:opacity-100 lg:opacity-0"
			>
				<div
					class="transform space-y-2 p-4 transition-transform duration-300 group-hover:translate-y-0 md:space-y-4 md:p-6 lg:translate-y-20 lg:p-8"
				>
					<div class="space-y-1 md:space-y-2">
						<h2 class="text-xl font-bold md:text-2xl">
							{title}
						</h2>
						<p class="line-clamp-3 text-sm md:line-clamp-none md:text-lg">
							{description}
						</p>
					</div>

					<div class="hidden flex-wrap gap-2 sm:flex md:gap-3">
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
