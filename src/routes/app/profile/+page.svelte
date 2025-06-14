<script>
  import { UserProfile } from 'svelte-clerk';
</script>

<div class='min-h-screen bg-[#121212] py-12 px-4 sm:px-6 lg:px-8'>
  <div class='max-w-4xl mx-auto'>
    <div class='bg-[#1e1e1e] rounded-lg shadow-lg overflow-hidden'>
      <div class='p-8'>
        <h1 class='text-2xl font-bold text-white mb-8'>Profile</h1>
        <div class='max-w-2xl mx-auto'>
          <UserProfile 
              path='/profile' 
              routing='path' 
              appearance={{
                elements: {
                  rootBox: 'w-full',
                  card: 'bg-transparent shadow-none border-none',
                  headerTitle: 'text-white',
                  headerSubtitle: 'text-gray-400',
                  formFieldLabel: 'text-white',
                  formFieldInput: 'bg-[#2d2d2d] border-gray-600 text-white',
                  formButtonPrimary: 'bg-[#00f7ff] hover:bg-[#00e6ee] text-[#121212]',
                  footerActionLink: 'text-[#00f7ff] hover:text-[#00e6ee]',
                  dividerLine: 'bg-gray-700',
                  dividerText: 'text-gray-400',
                  identityPreviewText: 'text-white',
                  identityPreviewEditButton: 'text-[#00f7ff]',
                  profileSectionTitleText: 'text-white',
                  profileSectionTitleTextDanger: 'text-red-400',
                  profileSectionContent: 'text-gray-300',
                  badge: 'bg-[#00f7ff] text-[#121212]',
                  pageScrollBox: 'bg-[#1e1e1e]',
                  navbar: 'bg-[#1e1e1e] border-gray-700',
                  navbarButton: 'text-white hover:bg-[#2d2d2d]',
                  navbarButtonActive: 'text-[#00f7ff]',
                  navbarButtonInactive: 'text-gray-400'
                }
              }}
            />
        </div>
      </div>
    </div>
  </div>
</div>
