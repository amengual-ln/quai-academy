<script lang="ts">
	import { SignedIn, SignedOut, SignInButton, UserButton } from 'svelte-clerk'
</script>

<header class='flex justify-end p-4 border-b border-[#f7f7f7]'>
	<SignedOut>
		<SignInButton class='cursor-pointer p-1'/>
	</SignedOut>
	<SignedIn>
		<UserButton />
	</SignedIn>
</header>
