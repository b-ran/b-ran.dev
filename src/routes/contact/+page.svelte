<script lang="ts">
	// Svelte
	import { enhance } from '$app/forms';

	// Components
	import Button from '$lib/components/buttons/Button.svelte';
	import Social from '$lib/components/Social.svelte';

	let { form } = $props();
</script>

<title>Contact | Brandon Scott-Hill</title>

<main class="space-y-11">
	<section class="mt-32 max-w-2xl space-y-10">
		<h1 id="contact" class="text-5xl font-extrabold">Contact.</h1>
		<p>Send me a message or contact me directly on <b>bran.scotthill@gmail.com</b></p>

		<form method="POST" class="space-y-8" use:enhance>
			<input
				data-1p-ignore
				type="text"
				name="name"
				placeholder="Your name"
				aria-required="true"
				required
				class="block h-16 w-full rounded-md border border-zinc-200 py-2 pl-4 focus:bg-white focus:outline-hidden"
			/>

			<input
				data-1p-ignore
				type="email"
				name="email"
				placeholder="Your email"
				aria-required="true"
				required
				class="block h-16 w-full rounded-md border border-zinc-200 py-2 pl-4 focus:bg-white focus:outline-hidden"
			/>

			<textarea
				name="message"
				rows="10"
				placeholder="Your message"
				aria-required="true"
				required
				class="block w-full resize-none rounded-md border border-zinc-200 py-5 pl-4 focus:bg-white focus:outline-hidden"
			></textarea>

			<Button type="submit">
				<span class="mx-5 my-2 font-bold"> Send Message </span>
			</Button>
		</form>

		{#if form && form.message}
			<p class="mt-4">{form.message}</p>
		{/if}
	</section>

	<section class="mb-5">
		<Social />
	</section>
</main>
