<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const scrollToContact = () => {
  router.push({ path: '/', hash: '#footer-contact' });
};
</script>

<template>
  <div class="font-heading min-h-screen bg-white flex items-center justify-center px-8 py-12">
    <div class="max-w-2xl mx-auto text-center">
      <!-- Icon -->
      <div class="mb-8">
        <svg class="w-24 h-24 mx-auto text-[#069]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      </div>

      <!-- Heading -->
      <h1 class="text-5xl font-semibold text-[#131313] mb-6 leading-14 tracking-[-0.5px]">
        Coming Soon
      </h1>

      <!-- Message -->
      <p class="text-xl text-[#616161] leading-8 mb-10">
        We're currently preparing this page to give you the best experience. Please check back soon for updates. If you need assistance in the meantime, feel free to contact us.
      </p>

      <!-- Contact Button -->
      <button
        @click="scrollToContact"
        class="inline-flex items-center gap-3 bg-[#069] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-500 transition-colors"
      >
        Contact Us
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>
</template>