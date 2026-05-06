<script setup>
import BreadCrumb from '../BreadCrumb.vue';
import Sidebar from '../Sidebar.vue';
</script>

<template>
  <div>
    <!-- Breadcrumb -->
    <BreadCrumb current-page="Getting started" />

    <!-- Main Content Area -->
    <div class="bg-[#DDDDDD66] py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Main Content -->
          <div class="bg-white py-14 px-12 lg:col-span-8">
            <article class="prose prose-lg max-w-none">
              <!-- Page Title -->
              <h1 class="text-4xl md:text-[40px] font-bold text-[#002B40] mb-6">
                Getting Started
              </h1>

              <!-- Introduction -->
              <p class="text-[#616161] text-lg leading-[25.2px] mb-2">
                Welcome to Ration! This section guides you through the process of setting up accounts 
                for email, calendar, and other services within the platform. Whether you're creating a new 
                account or setting up your workspace, we provide simple, step-by-step instructions to 
                get you started quickly.
              </p>

              <!-- Table of Contents -->
              <ol class="list-decimal list-inside space-y-2 mb-8 text-[#616161]">
                <li>Create your Ration account</li>
                <li>Set up your organization</li>
                <li>Customize Your Workspace</li>
              </ol>

              <!-- Section 1 -->
              <h2 class="text-lg font-bold text-[#002B40] mb-3 mt-8">
                1. Sign Up for Ration
              </h2>
              <ul class="list-disc list-outside ml-6 space-y-3 text-[#616161] text-lg max-w-2xl mb-8">
                <li>
                  Visit the Ration admin portal 
                  <a href="https://hub.ration.works/register" target="_blank" rel="noopener noreferrer" class="text-[#069] hover:text-[#058] underline">
                    https://hub.ration.works/register
                  </a> 
                  and click "Sign Up" or "Create an Account."
                </li>
                <li>Enter your Business Name, and Domain Name.</li>
                <li>
                  Verify your Domain by clicking the confirmation inputting the TXT file generated into 
                  your DNS record.
                </li>
              </ul>

              <!-- Section 2 -->
              <h2 class="text-lg font-bold text-[#002B40] mb-3 mt-8">
                2. Set Up Your Organization
              </h2>
              <ul class="list-disc list-outside ml-6 space-y-3 text-[#616161] text-lg max-w-2xl mb-8">
                <li>Add your company details, including your logo and branding preferences.</li>
                <li>Configure user roles and permissions for different team members.</li>
                <li>Invite team members via email or import users from an existing directory.</li>
              </ul>

              <!-- Section 3 -->
              <h2 class="text-lg font-bold text-[#002B40] mb-3 mt-8">
                3. Customize Your Workspace
              </h2>
              <ul class="list-disc list-outside ml-6 space-y-3 text-[#616161] text-lg max-w-2xl mb-8">
                <li>Select default email and calendar settings for your organization.</li>
                <li>Configure notification preferences and integrations with third-party tools.</li>
                <li>Set up company-wide templates and signatures for a uniform experience.</li>
              </ul>

              <!-- Conclusion -->
              <p class="text-[#002B40] text-lg leading-[25.2px] mt-8">
                Once your account is set up, your team can start using Ration for secure and efficient 
                communication.
              </p>
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