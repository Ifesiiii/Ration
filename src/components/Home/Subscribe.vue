<script setup>
import { RouterLink } from 'vue-router';
import quad from '../../assets/img/1.png'
</script>

<template>
  <section class="relative bg-[#003047] flex flex-col items-center h-75 justify-center px-6 py-30 overflow-hidden text-center">
    
    <!-- Background Quadrants -->
    <!-- Bottom Left: Rotated 270deg to fit corner -->
    <img 
      :src="quad" 
      alt="" 
      class="absolute bottom-0 left-0 w-55 rotate-360 pointer-events-none" 
    />
    
    <!-- Top Right: Rotated 90deg to fit corner -->
    <img 
      :src="quad" 
      alt="" 
      class="absolute top-0 right-0 w-55 h-auto rotate-180 pointer-events-none" 
    />

    <!-- Content -->
    <div class="relative z-10 max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-5xl lg:text-[56px] font-bold font-start text-white mb-3 tracking-tight">
        Join our Limited Testing Today
      </h1>
    
      <p class="text-lg font-start text-center text-[#E5E5E5] mb-6 max-w-xl mx-auto leading-relaxed">
        Reach out to join our limited trial of Ration Messaging and Collaboration Platform.
      </p>
    
      <RouterLink to="/waitlist">
      <button class="px-6 py-3 font-start bg-white text-[#069] font-semibold rounded-lg hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        Contact Us for beta testing
      </button>
      </RouterLink>
    </div>

  </section>
</template>