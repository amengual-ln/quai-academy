<script>
  import { ClerkProvider } from 'svelte-clerk';
  import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';
  import '../app.css';

  let { data, children } = $props();
  
  const session = $derived(data?.session || null);
  const user = $derived(data?.user || null);
</script>

<ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY} session={session} user={user}>
  <div class='min-h-[100vh] bg-[#121212] text-[#f7f7f7]'>
    <main class='min-h-[calc(100vh-4rem)]'>
      {@render children()}
    </main>
  </div>
</ClerkProvider>