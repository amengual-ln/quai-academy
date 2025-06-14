<!-- src/routes/sign-in/+layout.svelte -->
<script>
    import { ClerkProvider } from 'svelte-clerk';
    import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';
    
    let { data, children } = $props();
    
    const session = $derived(data?.session || null);
    const user = $derived(data?.user || null);
  </script>
  
  <ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY} {session} {user}>
    <div class='min-h-screen grid place-content-center bg-[#121212] text-[#f7f7f7]'>
      <main class='min-h-screen'>
        {@render children()}
      </main>
    </div>
  </ClerkProvider>