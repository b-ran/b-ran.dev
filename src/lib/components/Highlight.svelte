<script lang="ts">

	import RightArrow from '$lib/components/icons/RightArrow.svelte';
	import Chip from '$lib/components/Chip.svelte';
	import Link from '$lib/components/Link.svelte';


	let { title, description, image, href, tags, alternate = false }: {
		title: string,
		description: string,
		image: string,
		href: string,
		tags: string[],
		alternate: boolean
	} = $props();
</script>

<div class="flex flex-col items-center {alternate ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-5 lg:gap-10">
	<div class="flex flex-col gap-4 text-left lg:w-1/2">
		<h2 class="text-2xl">{title}</h2>
		<p class="text-neutral-600">{description}</p>

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

		<div class="mt-4 lg:mt-0">
			<div class="flex items-center hover:underline hover:underline-offset-4">
				<Link {href}>
					<span class="font-semibold mr-2">View Project</span>
				</Link>
				<RightArrow />
			</div>
		</div>
	</div>

	<div class="lg:w-1/2">
		<img src={image} alt="" />
	</div>
</div>