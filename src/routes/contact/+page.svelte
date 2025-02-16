<script lang="ts">
	// Svelte
	import { enhance } from '$app/forms';

	// Components
	import Button from '$lib/components/buttons/Button.svelte';
	import Social from '$lib/components/Social.svelte';

	let { form } = $props();
</script>

<main class="space-y-18">
	<section class="space-y-10 max-w-2xl mt-32">

		<h1 id="contact" class="font-extrabold text-5xl">Contact.</h1>
		<p>Send me a message or contact me directly on <b>bran.scotthill@gmail.com</b></p>

		<form method="POST" class="space-y-8" use:enhance>
			<input
				data-1p-ignore
				type="text"
				name="name"
				placeholder="Your name"
				aria-required="true"
				required
				class="block w-full h-16 py-2 pl-4 rounded-md focus:outline-hidden focus:bg-white border border-zinc-200"
			/>

			<input
				data-1p-ignore
				type="email"
				name="email"
				placeholder="Your email"
				aria-required="true"
				required
				class="block w-full h-16 py-2 pl-4 rounded-md focus:outline-hidden focus:bg-white border border-zinc-200"
			/>

			<textarea
				name="message"
				rows="10"
				placeholder="Your message"
				aria-required="true"
				required
				class="block w-full py-5 pl-4 resize-none rounded-md focus:outline-hidden focus:bg-white border border-zinc-200"
			></textarea>


			<Button type="submit">
					<span class="mx-5 my-2 font-bold">
						Send Message
					</span>
			</Button>

		</form>

		{#if form && form.message}
			<p class="mt-4 text-center">{form.message}</p>
		{/if}
	</section>

	<section>
		<Social />
	</section>

</main>