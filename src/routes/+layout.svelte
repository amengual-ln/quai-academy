<script>
	import '../app.css';
	import { ClerkProvider } from 'svelte-clerk';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<ClerkProvider>
	<div class='min-h-[100vh] bg-[#121212] text-[#f7f7f7]'>
		<Header />
		{@render children()}
	</div>
</ClerkProvider>