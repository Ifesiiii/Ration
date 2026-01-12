<script setup>
import { ref } from 'vue';

const openIndex = ref(0); // First item open by default

const toggleFaq = (index) => {
  if (openIndex.value === index) {
    openIndex.value = null; // Close if already open
  } else {
    openIndex.value = index; // Open clicked item
  }
};
</script>


<template>
  <section class="bg-white py-16 px-4 mb-15">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-[#002B40] mb-2 leading-16">
          Frequently Asked<br>Questions
        </h2>
      </div>

      <!-- FAQ Items -->
      <div class="space-y-4">
        
        <!-- FAQ Item 1 -->
        <div class="bg-[#F5F9FB] rounded-lg overflow-hidden">
          <button 
            @click="toggleFaq(0)"
            class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
          >
            <h3 class="text-lg md:text-xl font-bold text-[#069] pr-4">
              How secure is Ration?
            </h3>
            <div class="shrink-0">
              <svg 
                v-if="openIndex === 0"
                xmlns="http://www.w3.org/2000/svg" 
                class="w-6 h-6 text-white" 
                viewBox="0 0 24 24" 
                fill="bg-[#069]" 
                stroke="currentColor" 
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
              <svg 
                v-else
                xmlns="http://www.w3.org/2000/svg" 
                class="w-6 h-6 text-[#069]" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="16"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
            </div>
          </button>
          <div 
            v-if="openIndex === 0"
            class="px-6 pb-6 text-[#131313] text-base leading-6"
          >
            Security is our top priority. Ration employs robust security measures to protect your data, including encryption, authentication, and regular security audits. We adhere to industry-leading standards to ensure the confidentiality, integrity, and availability of your information.
          </div>
        </div>

        <!-- FAQ Item 2 -->
        <div class="bg-white rounded-lg overflow-hidden">
          <button 
            @click="toggleFaq(1)"
            class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
          >
            <h3 class="text-lg md:text-xl font-bold text-[#002B40] pr-4">
              What kind of support does Ration offer?
            </h3>
            <div class="shrink-0">
              <svg 
                v-if="openIndex === 1"
                xmlns="http://www.w3.org/2000/svg" 
                class="w-6 h-6 text-white" 
                viewBox="0 0 24 24" 
                fill="bg-[#069]" 
                stroke="currentColor" 
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
              <svg 
                v-else
                xmlns="http://www.w3.org/2000/svg" 
                class="w-6 h-6 text-[#069]" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="16"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
            </div>
          </button>
          <div 
            v-if="openIndex === 1"
            class="px-6 pb-6 text-[#131313] text-base leading-6"
          >
            In Progress......
          </div>
        </div>

        <!-- FAQ Item 3 -->
        <div class="bg-white rounded-lg overflow-hidden">
          <button 
            @click="toggleFaq(2)"
            class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
          >
            <h3 class="text-lg md:text-xl font-bold text-[#002B40] pr-4">
              Can I control user access and permissions in Ration?
            </h3>
            <div class="shrink-0">
              <svg 
                v-if="openIndex === 2"
                xmlns="http://www.w3.org/2000/svg" 
                class="w-6 h-6 text-white" 
                viewBox="0 0 24 24" 
                fill="bg-[#069]" 
                stroke="currentColor" 
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
              <svg 
                v-else
                xmlns="http://www.w3.org/2000/svg" 
                class="w-6 h-6 text-[#069]" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="16"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
            </div>
          </button>
          <div 
            v-if="openIndex === 2"
            class="px-6 pb-6 text-[#131313] text-base leading-6"
          >
            In Progress.......
          </div>
        </div>

        <!-- FAQ Item 4 -->
        <div class="bg-white rounded-lg overflow-hidden">
          <button 
            @click="toggleFaq(3)"
            class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
          >
            <h3 class="text-lg md:text-xl font-bold text-[#002B40] pr-4">
              Can I migrate my data from another platform to Ration?
            </h3>
            <div class="shrink-0">
              <svg 
                v-if="openIndex === 3"
                xmlns="http://www.w3.org/2000/svg" 
                class="w-6 h-6 text-white" 
                viewBox="0 0 24 24" 
                fill="bg-[#069]" 
                stroke="currentColor" 
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
              <svg 
                v-else
                xmlns="http://www.w3.org/2000/svg" 
                class="w-6 h-6 text-[#069]" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="16"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
            </div>
          </button>
          <div 
            v-if="openIndex === 3"
            class="px-6 pb-6 text-[#131313] text-base leading-6"
          >
            In Progress.....
          </div>
        </div>

      </div>
    </div>
  </section>
</template>



