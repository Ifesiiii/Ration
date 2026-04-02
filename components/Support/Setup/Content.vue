<script setup>
import BreadCrumb from '../BreadCrumb.vue';
import Sidebar from '../Sidebar.vue';
</script>

<template>
  <div>
    <!-- Breadcrumb -->
    <BreadCrumb current-page="Mobile App Setup" />

    <!-- Main Content Area -->
    <div class="bg-[#DDDDDD66] py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Main Content -->
          <div class="bg-white py-14 px-12 lg:col-span-8">
            <article class="prose prose-lg max-w-none">
              <!-- Page Title -->
              <h1 class="text-4xl md:text-[40px] font-bold text-[#002B40] mb-6">
                Mobile App Setup
              </h1>

              <!-- Introduction -->
              <p class="text-[#616161] text-lg leading-[25.2px] mb-8">
                Get the <span class="font-semibold text-[#002B40]">Ration Suite</span> app up and running on your <span class="font-semibold text-[#002B40]">iOS or Android</span> device with these simple 
                instructions. Stay connected and collaborate on the go by setting up the mobile version 
                of Ration to access your <span class="font-semibold text-[#002B40]">email, chat, and calendar</span> wherever you are.
              </p>

              <!-- Section 1 -->
              <h2 class="text-lg font-bold text-[#002B40] mb-4 mt-8">
                1. Download and Install on iOS or Android
              </h2>

              <h3 class="text-lg font-bold text-[#002B40] mb-3 mt-6">
                For iPhone & iPad (iOS)
              </h3>

              <ul class="list-disc list-outside ml-6 space-y-3 text-[#616161] text-lg max-w-2xl mb-6">
                <li>
                  Open the <span class="font-semibold text-[#002B40]">App Store</span> on your device.
                </li>
                <li>
                  Search for <span class="font-semibold text-[#002B40]">"Ration Suite"</span> and tap Download.
                </li>
                <li>
                  Once installed, open the app and sign in with your <span class="font-semibold text-[#002B40]">Ration account credentials</span>.
                </li>
              </ul>

              <h3 class="text-lg font-bold text-[#002B40] mb-3 mt-6">
                For Android Devices
              </h3>

              <ul class="list-disc list-outside ml-6 space-y-3 text-[#616161] text-lg max-w-2xl mb-8">
                <li>
                  Open the <span class="font-semibold text-[#002B40]">Google Play Store</span>.
                </li>
                <li>
                  Search for <span class="font-semibold text-[#002B40]">"Ration Suite"</span> and tap Install.
                </li>
                <li>
                  After installation, open the app and sign in with your <span class="font-semibold text-[#002B40]">Ration account credentials</span>.
                </li>
              </ul>
            </article>
          </div>

          <!-- Sidebar Navigation -->
          <Sidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prose a {
  color: #069;
  text-decoration: underline;
}

.prose a:hover {
  color: #058;
}
</style>