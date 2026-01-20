<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  currentPage: {
    type: String,
    required: true
  }
});

const searchQuery = ref('');

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    console.log('Searching for:', searchQuery.value);
    // To add search logic later
  }
};
</script>

<template>
  <div class="bg-[#003854] py-8 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Search Bar -->
      <div class="mb-6">
        <div class="relative max-w-4xl">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-[#929292]" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search for issues"
            class="w-full pl-12 pr-4 py-3 text-[#929292] bg-white rounded-lg focus:outline-none 
            focus:text-[#131313] focus:ring-2 focus:ring-[#069] transition-all"
            @keyup.enter="handleSearch"
          />
        </div>
      </div>

      <!-- Breadcrumb Navigation -->
      <nav class="flex items-center space-x-2 text-[#E5E5E5] font-semibold">
        <RouterLink 
          to="/support" 
          class="hover:text-gray-300 transition-colors"
        >
          Ration support
        </RouterLink>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" fill="white"/>
        </svg>
        
        <span class="text-[#E5E5E5] font-semibold">{{ currentPage }}</span>
      </nav>
    </div>
  </div>
</template>