<script setup>
import frame from '../../assets/img/frame.png'
import attendant from '../../assets/img/attendant.png'
import f1 from '../../assets/img/f1.png' 
import f2 from '../../assets/img/f2.png'
</script>



<template>
  <section class="bg-[#F8FBFC] py-16 px-4 mb-15">
    <div class="max-w-6xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
          Effortless Communication.<br>
          Seamless Collaboration
        </h2>
        <p class="text-base md:text-[20px] text-[#2E2E2E] max-w-3xl mx-auto leading-7.5">
          From everyday tasks to complex workflows, we provide the tools that keep your team focused, efficient, and ready to achieve more.
        </p>
      </div>

      <!-- Main Container -->
      <div class="relative max-w-6xl mx-auto">
        <img 
        :src="frame"
        />
      </div>
    </div>
  </section>
</template>


