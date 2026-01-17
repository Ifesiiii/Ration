<script setup>
import { ref } from 'vue';
import talk from '../../../assets/img/talk.png'; 

const searchQuery = ref('');

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    console.log('Searching for:', searchQuery.value);
    // To add search logic here later
  }
};
</script>

<template>
  <section class="bg-[#003854] text-white py-16 md:py-20 px-4 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Left Side - Text and Search -->
        <div class="space-y-8">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">
            How can we help today?
          </h1>

          <!-- Search Bar -->
          <form @submit.prevent="handleSearch" class="relative">
            <div class="relative">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#929292]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Ask a question..."
                class="w-full pl-12 pr-4 py-4 text-[#929292] bg-white focus:outline-none focus:ring-2 
                focus:text-[#131313] focus:ring-[#069] transition-all"
              />
            </div>
          </form>
        </div>

        <!-- Right Side - Illustration -->
        <div class="relative hidden lg:flex justify-center items-center">
          <img 
            :src="talk"
            alt="Customer Support Illustration" 
            class="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>