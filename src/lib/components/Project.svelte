<script lang="ts">
	// Components
	import Link from '$lib/components/Link.svelte';
	import RightArrow from '$lib/components/icons/RightArrow.svelte';
	import Card from '$lib/components/Card.svelte';
	import Chip from '$lib/components/Chip.svelte';

	let { title, description, image, href, tags } = $props();
</script>

<Card>
	<div class="w-full max-w-[850px] h-[478px] relative rounded-3xl overflow-hidden group text-zinc-900">
		<div class="absolute inset-0">
			<img
				src={image}
				alt={title}
				class="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
			>
		</div>

		<div
			class="relative h-full flex flex-col justify-end transition-transform duration-500 ease-out group-hover:-translate-y-4">
			<div class="p-8 bg-white/20 backdrop-blur-sm transition-colors duration-500 ease-out group-hover:bg-white/30 flex flex-col gap-3">
				<h2 class="text-2xl font-bold ">{title}</h2>
				<p class="text-lg">{description}</p>

				<div class="flex flex-wrap gap-3">
					{#each tags as tag}
						<Chip>
							{tag}
						</Chip>
					{/each}
				</div>

				<Link {href}>
					<span class="font-semibold mr-2">View Project</span>
					<RightArrow />
				</Link>
			</div>
		</div>
	</div>
</Card>