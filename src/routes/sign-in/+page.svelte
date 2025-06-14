<script>
  import { SignIn } from 'svelte-clerk';
</script>

<div class="min-h-screen flex items-center justify-center p-4">
  <div class="w-full max-w-md">
    <SignIn 
      afterSignInUrl="/app" 
      signUpUrl="/sign-up" 
      appearance={{
        elements: {
          rootBox: 'w-full',
          card: 'bg-[#1e1e1e] border border-gray-800',
          headerTitle: 'text-white',
          headerSubtitle: 'text-gray-400',
          formFieldLabel: 'text-white',
          formFieldInput: 'bg-[#2d2d2d] border-gray-600 text-white',
          formButtonPrimary: 'bg-[#00f7ff] hover:bg-[#00e6ee] text-[#121212]',
          footerActionLink: 'text-[#00f7ff] hover:text-[#00e6ee]'
        }
      }}
    />
  </div>
</div>