<script setup>
import BreadCrumb from '../BreadCrumb.vue';
import Sidebar from '../Sidebar.vue';
</script>

<template>
  <div>
    <!-- Breadcrumb -->
    <BreadCrumb current-page="Managing your account" />

    <!-- Main Content Area -->
    <div class="bg-[#DDDDDD66] py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Main Content -->
          <div class="bg-white py-14 px-12 lg:col-span-8">
            <article class="prose prose-lg max-w-none">
              <!-- Page Title -->
              <h1 class="text-4xl md:text-[40px] font-bold text-[#002B40] mb-6">
                Managing Your Account
              </h1>

              <!-- Introduction -->
              <p class="text-[#616161] text-lg leading-[25.2px] mb-8">
                Keeping your Ration account up to date ensures a smooth and secure experience. 
                Update profile details, manage security settings, and personalize your workspace to suit 
                your needs.
              </p>

              <!-- Section 1 -->
              <h2 class="text-lg font-bold text-[#002B40] mb-3 mt-8">
                1. Update Profile Details
              </h2>
              
              <p class="text-[#002B40] text-lg leading-[25.2px] mb-4">
                Stay up to date by ensuring your profile information is current.
              </p>

              <ul class="list-disc list-outside ml-6 space-y-3 text-[#616161] text-lg mb-8">
                <li>
                  Go to <span class="font-semibold text-[#002B40]">Settings → Profile</span>.
                </li>
                <li>
                  Edit your <span class="font-semibold text-[#002B40]">name, job title, department, and contact information</span>.
                </li>
                <li>
                  Upload or update your <span class="font-semibold text-[#002B40]">profile picture</span> to personalize your account.
                </li>
                <li>
                  Save changes to reflect updates across all Ration services.
                </li>
              </ul>

              <!-- Section 2 -->
              <h2 class="text-lg font-bold text-[#002B40] mb-3 mt-8">
                2. Change Passwords and Manage Security
              </h2>

              <p class="text-[#616161] text-lg leading-[25.2px] mb-4">
                Enhance your security by updating passwords and enabling protective measures.
              </p>

              <ul class="list-disc list-outside ml-6 space-y-3 text-[#616161] text-lg mb-8">
                <li>
                  Navigate to <span class="font-semibold text-[#002B40]">Account Settings → Security</span>.
                </li>
                <li>
                  Click <span class="font-semibold text-[#002B40]">"Change Password"</span> and enter a <span class="font-semibold text-[#002B40]">strong, unique password</span>.
                </li>
                <li>
                  Enable <span class="font-semibold text-[#002B40]">Multi-Factor Authentication (MFA)</span> for an extra layer of security.
                </li>
              </ul>

              <!-- Section 3 -->
              <h2 class="text-lg font-bold text-[#002B40] mb-3 mt-8">
                3. Email Customization & Inbox Management
              </h2>

              <ul class="list-disc list-outside ml-6 space-y-3 text-[#616161] text-lg mb-8">
                <li>
                  Choose email display preferences (conversation/threaded mode vs. individual emails).
                </li>
                <li>
                  Enable auto-filtering rules to sort emails into folders automatically.
                </li>
                <li>
                  Set up email forwarding to another account if needed.
                </li>
                <li>
                  Configure default email signature and auto-replies for professional communication.
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