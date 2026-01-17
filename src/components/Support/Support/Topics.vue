<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const topics = ref([
  {
    title: 'Getting Started with Ration',
    description: 'Learn how to set up accounts for email, chat, and more.',
    route: '/getting-started'
  },
  {
    title: 'Billing and Subscription Plans',
    description: 'Get details on pricing, upgrading, and managing your subscription.',
    route: '/billing'
  },
  {
    title: 'Mobile App Setup',
    description: 'Get Ration Suite up and running on your iOS or Android devices.',
    route: '/mobile-setup'
  },
  {
    title: 'Managing Your Account',
    description: 'Update profile details, reset passwords, and configure settings.',
    route: '/account-management'
  },
  {
    title: 'Troubleshooting',
    description: 'Resolve common issues like login errors, syncing problems, or connectivity issues.',
    route: '/troubleshooting'
  },
  {
    title: 'Admin Tools and Permissions',
    description: 'Set roles, manage user access, and customize admin controls.',
    route: '/admin-tools'
  }
]);
</script>

<template>
  <section class="bg-[#F8F8F8] py-24 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <h2 class="text-4xl md:text-[40px] font-bold text-[#002B40] mb-12">
        Explore topics
      </h2>

      <!-- Topics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <RouterLink
          v-for="(topic, index) in topics"
          :key="index"
          :to="topic.route"
          class="group block p-6 bg-white border border-gray-200 rounded-lg hover:border-[#069] hover:shadow-lg transition-all duration-200"
        >
          <div class="flex items-start justify-between mb-3">
            <h3 class="text-xl font-bold text-[#0F172A] group-hover:text-[#069] transition-colors">
              {{ topic.title }}
            </h3>
            <svg xmlns="http://www.w3.org/2000/svg" 
            class="h-5 w-5 group-hover:text-[#069] transform transition-all shrink-0 ml-2"
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none">
            <path d="M12 10L8 6L4 10" stroke="#0F172A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p class="text-[#002B40] text-base leading-relaxed">
            {{ topic.description }}
          </p>
        </RouterLink>
      </div>

      <!-- Contact CTA Section -->
      <div class="bg-white grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 py-14 px-4">
        <!-- Need Personal Assistance -->
        <div class="p-8 bg-[#F8F8F8] border border-[#DDDDDD66] rounded-lg">
          <h3 class="text-2xl font-bold text-[#002B40] mb-3">
            Need Personal Assistance ?
          </h3>
          <p class="text-[#002B40] mb-4">
            Contact us for more inquires and information about our services.
          </p>
          <RouterLink 
            to="/contact-sales" 
            class="inline-block text-[#069] font-bold hover:text-[#058] underline transition-colors"
          >
            Contact Sales
          </RouterLink>
        </div>

        <!-- Still can't find what you're looking for -->
        <div class="p-8 bg-[#F8F8F8] border border-[#DDDDDD66] rounded-lg">
          <h3 class="text-2xl font-bold text-[#002B40] mb-3">
            Still can't find what you're looking for?
          </h3>
          <p class="text-[#002B40] mb-4">
            Contact us for more inquires and information about our services.
          </p>
          <RouterLink 
            to="/submit-ticket" 
            class="inline-block text-[#069] font-bold hover:text-[#058] underline transition-colors"
          >
            Submit a Ticket
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>