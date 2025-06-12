<script lang="ts">
	import { useClerkContext } from 'svelte-clerk/client';
	import { SignInButton } from 'svelte-clerk';

	// Do not destructure context to avoid losing reactivity
	const ctx = useClerkContext();

	const userId = $derived(ctx.auth.userId);
</script>

<div class="p-2 text-lg">
	{#if userId === null}
		<p><span class="font-medium"><SignInButton class="cursor-pointer p-1" /></span>to view this page</p>
	{:else}
		<div class="flex gap-1">Welcome to <h1 class='text-[#00f7ff] font-medium'>QuAI</h1>, {userId}!</div>
	{/if}
</div>
