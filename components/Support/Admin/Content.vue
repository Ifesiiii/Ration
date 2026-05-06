<script setup>
import BreadCrumb from '../BreadCrumb.vue';
import Sidebar from '../Sidebar.vue';
</script>

<template>
  <div>
    <!-- Breadcrumb -->
    <BreadCrumb current-page="Admin Tools" />

    <!-- Main Content Area -->
    <div class="bg-[#DDDDDD66] py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Main Content -->
          <div class="bg-white py-14 px-12 lg:col-span-8">
            <article class="prose prose-lg max-w-none">
              <!-- Page Title -->
              <h1 class="text-4xl md:text-[40px] font-bold text-[#002B40] mb-6">
                Admin Tools
              </h1>

              <!-- Introduction -->
              <p class="text-[#616161] text-lg leading-[25.2px] mb-8">
                For <span class="font-semibold text-[#002B40]">administrators</span>, this section provides the essential tools for managing user profiles 
                and setting storage quota. Learn how to manage user profiles, and storage quota of your 
                organization's <span class="font-semibold text-[#002B40]">Ration setup</span>.
              </p>

              <!-- Section 1 -->
              <h2 class="text-lg font-bold text-[#002B40] mb-3 mt-8">
                Storage Quota Management
              </h2>
              
              <p class="text-[#002B40] text-lg leading-[25.2px] mb-4">
                Monitor and manage storage allocation to optimize performance.
              </p>

              <h3 class="text-lg font-bold text-[#002B40] mb-3 mt-6">
                Storage Quota Features:
              </h3>

              <ul class="list-disc list-outside ml-6 space-y-3 text-[#616161] text-lg mb-6">
                <li>
                  <span class="font-semibold text-[#002B40]">Set storage limits</span> per user or team to prevent excessive usage.
                </li>
                <li>
                  <span class="font-semibold text-[#002B40]">Increase storage capacity</span> based on organizational needs.
                </li>
              </ul>

              <h3 class="text-lg font-bold text-[#002B40] mb-3 mt-6">
                How to Manage Storage Quotas:
              </h3>

              <ul class="list-disc list-outside ml-6 space-y-3 text-[#616161] text-lg mb-8">
                <li>
                  Navigate to <span class="font-semibold text-[#002B40]">Admin Dashboard</span>
                </li>
                <li>
                  Select the user(s) whose storage quota needs to be adjusted.
                </li>
                <li>
                  Click on the More Options (:) icon next to their name
                </li>
                <li>
                  Select <span class="font-semibold text-[#002B40]">View Storage Quota</span> to see the user's current usage and allocated limit.
                </li>
                <li>
                  Click <span class="font-semibold text-[#002B40]">Edit Quota</span> and enter the new storage limit.
                </li>
                <li>
                  Confirm the changes and save the updated quota settings.
                </li>
              </ul>

              <!-- Section 2 -->
              <h2 class="text-lg font-bold text-[#002B40] mb-3 mt-8">
                Managing User Profiles
              </h2>

              <p class="text-[#616161] text-lg leading-[25.2px] mb-4">
                Admins can update and manage user profiles efficiently by following these steps:
              </p>

              <ul class="list-disc list-outside ml-6 space-y-3 text-[#616161] text-lg mb-8">
                <li>
                  Navigate to <span class="font-semibold text-[#002B40]">Admin Dashboard</span>
                </li>
                <li>
                  Select the user whose profile needs to be adjusted.
                </li>
                <li>
                  Click on the edit button next to their name to update details such as name, 
                  department, or contact information.
                </li>
                <li>
                  Save changes to apply updates immediately.
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