<script setup>
import Form from './Form.vue';
</script>


<template>
  <div>
    <!-- Hero Section -->
    <section id="home" class="bg-[#003854] text-white py-20 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <!-- Main Heading -->
        <h1 class="text-4xl md:text-5xl lg:text-[64px] max-w-3xl mx-auto font-bold mb-6">
          Join our Limited Testing Today
        </h1>

        <!-- Subheading -->
        <p class="text-base md:text-lg lg:text-[20px] text-[#E5E5E5] max-w-3xl mx-auto">
          Be among the first to experience Ration – the all-in-one workspace suite designed to make business collaboration faster, simpler, and more secure.
        </p>
        </div>
    </section>

    <!-- Product Image Section -->
    <section class="relative bg-linear-to-b from-[#003854] to-white py-8 px-4 mb-15">
      <div class="max-w-5xl mx-auto">
        <Form />
      </div>
    </section>
  </div>
</template>



