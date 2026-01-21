<script setup>
import BreadCrumb from '../BreadCrumb.vue';
import Sidebar from '../Sidebar.vue';
</script>

<template>
  <div>
    <!-- Breadcrumb -->
    <BreadCrumb current-page="Troubleshooting guide" />

    <!-- Main Content Area -->
    <div class="bg-[#DDDDDD66] py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Main Content -->
          <div class="bg-white py-14 px-12 lg:col-span-8">
            <article class="prose prose-lg max-w-none">
              <!-- Page Title -->
              <h1 class="text-4xl md:text-[40px] font-bold text-[#002B40] mb-6">
                Troubleshooting Guide
              </h1>

              <!-- Introduction -->
              <p class="text-[#616161] max-w-2xl text-lg leading-[25.2px] mb-8">
                Encountering technical issues? Our troubleshooting guide helps you quickly resolve 
                common problems like login errors, syncing issues, and connectivity glitches. Follow 
                these steps to get back to work efficiently.
              </p>

              <!-- Section 1 -->
              <h2 class="text-lg font-bold text-[#002B40] mb-3 mt-8">
                1. Fix Login and Sign-In Problems
              </h2>
              
              <p class="text-[#002B40] text-lg leading-[25.2px] mb-4">
                If you're unable to sign in to your Ration account, try the following:
              </p>

              <h3 class="text-lg font-bold text-[#002B40] mb-3 mt-6">
                Check Your Credentials
              </h3>

              <ul class="list-disc list-outside ml-6 space-y-3 text-[#616161] text-lg mb-6">
                <li>
                  Ensure you're entering the <span class="font-semibold text-[#002B40]">correct email and password</span>.
                </li>
                <li>
                  Check for <span class="font-semibold text-[#002B40]">caps lock</span> or <span class="font-semibold text-[#002B40]">keyboard layout issues</span>.
                </li>
                <li>
                  If you forgot your password, click <span class="font-semibold text-[#002B40]">"Forgot Password?"</span> to reset it.
                </li>
              </ul>

              <h3 class="text-lg font-bold text-[#002B40] mb-3 mt-6">
                Clear Cache & Cookies
              </h3>

              <ul class="list-disc list-outside ml-6 space-y-3 text-[#616161] text-lg mb-8">
                <li>
                  If login issues persist, <span class="font-semibold text-[#002B40]">clear your browser cache and cookies</span>.
                </li>
                <li>
                  Try logging in using a different browser.
                </li>
              </ul>

              <!-- Section 2 -->
              <h2 class="text-lg font-bold text-[#002B40] mb-3 mt-8">
                Address Connectivity or Network-Related Errors
              </h2>

              <p class="text-[#616161] text-lg leading-[25.2px] mb-4">
                Having trouble connecting to Ration? Follow these steps:
              </p>

              <h3 class="text-lg font-bold text-[#002B40] mb-3 mt-6">
                Check Your Internet Connection
              </h3>

              <ul class="list-disc list-outside ml-6 space-y-3 text-[#616161] text-lg mb-6">
                <li>
                  Ensure you have an <span class="font-semibold text-[#002B40]">active internet connection</span>.
                </li>
                <li>
                  Restart your <span class="font-semibold text-[#002B40]">Wi-Fi router</span> or switch to a different network.
                </li>
                <li>
                  If using a VPN, try <span class="font-semibold text-[#002B40]">disabling it temporarily</span>.
                </li>
              </ul>

              <h3 class="text-lg font-bold text-[#002B40] mb-3 mt-6">
                Fix Slow or Unresponsive Ration Services
              </h3>

              <ul class="list-disc list-outside ml-6 space-y-3 text-[#616161] text-lg mb-6">
                <li>
                  Check <span class="font-semibold text-[#002B40]">Ration's status page</span> for possible outages.
                </li>
                <li>
                  Restart the Ration app or <span class="font-semibold text-[#002B40]">refresh your browser</span>.
                </li>
                <li>
                  Try using a different device to rule out local issues.
                </li>
              </ul>

              <!-- Conclusion -->
              <p class="text-[#616161] text-lg leading-[25.2px] mt-8 mb-4">
                If the issue persists, you can:
              </p>

              <ul class="list-disc list-outside ml-6 space-y-3 text-[#616161] text-lg">
                <li>
                  <span class="font-semibold text-[#002B40]">Submit a ticket</span> for personalized support.
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