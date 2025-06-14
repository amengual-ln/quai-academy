<script>
  import { UserButton } from 'svelte-clerk';
</script>

<header class="bg-[#1e1e1e]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16 items-center">
      <div class="flex items-center">
        <a href="/app" class="text-[#00f7ff] font-bold text-2xl">QuAI <span class="text-white font-medium">Academy</span></a>
      </div>
      
      <div class="flex items-center space-x-4">
          <!-- TODO: Al cerrar sesión podría ir a la landing (proyecto externo) -->
          <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  </div>
</header>