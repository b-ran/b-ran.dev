<script>
	// Components
	import ListButton from '$lib/components/buttons/ListButton.svelte';
	import Email from '$lib/components/icons/Email.svelte';
	import GitHub from '$lib/components/icons/GitHub.svelte';
	import LinkedIn from '$lib/components/icons/LinkedIn.svelte';
	import Instagram from '$lib/components/icons/Instagram.svelte';
	import Link from '$lib/components/Link.svelte';
</script>

<ul class="flex flex-row gap-4 items-center list-none">
	<li>
		<ListButton>
			<Link href="mailto:bran.scotthill@gmail.com" target="_blank">
				<Email />
			</Link>
		</ListButton>
	</li>
	<li>
		<ListButton>
			<Link href="https://github.com/b-ran" target="_blank">
				<GitHub />
			</Link>
		</ListButton>
	</li>
	<li>
		<ListButton>
			<Link href="https://www.linkedin.com/in/b-ran" target="_blank">
				<LinkedIn />
			</Link>
		</ListButton>
	</li>
	<li>
		<ListButton>
			<Link href="https://www.instagram.com/scotthillbrandon" target="_blank">
				<Instagram />
			</Link>
		</ListButton>
	</li>
</ul>