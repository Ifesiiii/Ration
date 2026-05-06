<script setup>
import BreadCrumb from '../BreadCrumb.vue';
import Sidebar from '../Sidebar.vue';
</script>

<template>
  <div>
    <!-- Breadcrumb -->
    <BreadCrumb current-page="Billing and subscription plans" />

    <!-- Main Content Area -->
    <div class="bg-[#DDDDDD66] py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Main Content -->
          <div class="bg-white py-14 px-12 lg:col-span-8">
            <article class="prose prose-lg max-w-none">
              <!-- Page Title -->
              <h1 class="text-4xl md:text-[40px] font-bold text-[#002B40] mb-6">
                Billing and Subscription Plans
              </h1>

              <!-- Introduction -->
              <p class="text-[#616161] text-lg leading-[25.2px] mb-8">
                Ration offers a single, enterprise-grade subscription plan designed to meet the needs of 
                businesses and organizations requiring secure, scalable, and feature-rich communication 
                and collaboration tools. Whether you're just starting with Ration or looking to optimize 
                your usage, this section will guide you through managing your subscription and billing 
                details.
              </p>

              <!-- Section 1 -->
              <h2 class="text-lg font-bold text-[#002B40] mb-3 mt-8">
                1. Standard Subscription Plan
              </h2>
              
              <p class="text-[#002B40] text-lg leading-[25.2px] mb-4">
                Our all-in-one enterprise plan provides full access to Ration's suite of tools, ensuring 
                seamless communication, collaboration, and security for your team.
              </p>

              <ul class="list-disc list-outside ml-6 space-y-3 text-[#616161] text-lg max-w-2xl mb-6">
                <li>
                  Unlimited email, chat, and calendar access
                </li>
                <li>
                  Advanced security with encryption and compliance controls
                </li>
                <li>
                  Scalability to support growing teams and business needs
                </li>
                <li>
                  Priority support with a dedicated account manager
                </li>
              </ul>

              <p class="text-[#616161] text-lg leading-[25.2px] mb-8">
                For pricing details and a custom quote, please 
                <a href="/contact-sales" class="text-[#069] hover:text-[#058] underline underline-offset-3 font-semibold">contact our Sales Team</a>.
              </p>

              <!-- Section 2 -->
              <h2 class="text-lg font-bold text-[#002B40] mb-3 mt-8">
                2. Manage Billing and Payment Information
              </h2>

              <p class="text-[#616161] text-lg leading-[25.2px] mb-4">
                Stay on top of your billing with secure payment options and automated invoicing.
              </p>

              <ul class="list-disc list-outside ml-6 space-y-3 text-[#616161] text-lg max-w-2xl mb-6">
                <li>
                  Add or update your credit/debit card or PayPal account.
                </li>
                <li>
                  Download past invoices and receipts for record-keeping.
                </li>
                <li>
                  Set up auto-renewal to avoid service interruptions.
                </li>
              </ul>

              <p class="text-[#616161] text-lg leading-[25.2px] mb-8">
                If you encounter billing issues, visit our 
                <a href="/help-center" class="text-[#069] hover:text-[#058] underline font-semibold">Help center</a> or 
                <a href="/contact-support" class="text-[#069] hover:text-[#058] underline font-semibold">contact Support</a> for assistance
              </p>

              <!-- Section 3 -->
              <h2 class="text-base font-bold text-[#002B40] mb-3 mt-8">
                Need Assistance?
              </h2>

              <ul class="list-disc list-outside ml-6 space-y-3 text-[#616161] text-lg mb-8">
                <li>
                  Have billing inquiries? Contact our Sales Team for personalized support.
                </li>
                <li>
                  Facing a payment issue? Submit a Support Ticket for quick resolution.
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