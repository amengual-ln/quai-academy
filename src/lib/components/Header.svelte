<script>
  import { SignInButton, SignUpButton, UserButton } from 'svelte-clerk';
  import { page } from '$app/stores';
  
  export let session = null;
  export let user = null;
  
  function isActive(path) {
    return $page.url.pathname === path ? 'text-[#00f7ff]' : 'text-gray-300 hover:text-white';
  }
</script>

<header class="bg-[#1e1e1e]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16 items-center">
      <div class="flex items-center">
        <a href="/app" class="text-[#00f7ff] font-bold text-2xl">QuAI <span class="text-white font-medium">Academy</span></a>
      </div>
      
      <div class="flex items-center space-x-4">
        {#if !session}
          <SignInButton mode="modal">
            <button class="px-4 py-2 text-sm font-medium text-white bg-[#00f7ff] rounded-md hover:bg-[#00e6ee] transition-colors">
              Iniciar sesión
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button class="px-4 py-2 text-sm font-medium text-[#00f7ff] border border-[#00f7ff] rounded-md hover:bg-[#00f7ff]/10 transition-colors">
              Registrarse
            </button>
          </SignUpButton>
        {:else}
        <!-- TODO: Al cerrar sesión podría ir a la landing (proyecto externo) -->
          <UserButton afterSignOutUrl="/" />
        {/if}
      </div>
    </div>
  </div>
</header>