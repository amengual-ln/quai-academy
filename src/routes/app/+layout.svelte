<script>
	import Header from '$lib/components/Header.svelte'

	let { data, children } = $props()

	const session = $derived(data?.session || null)
	const user = $derived(data?.user || null)
</script>

<Header {session} {user} />
{@render children()}
