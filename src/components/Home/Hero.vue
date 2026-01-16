<script setup>
import mid from '../../assets/img/mid.png'
import ogun from '../../assets/img/ogun.png'
import army from '../../assets/img/army.png'
</script>


<template>
  <div>
    <!-- Hero Section -->
    <section id="home" class="bg-[#003854] text-white py-20 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <!-- Main Heading -->
        <h1 class="text-4xl md:text-5xl lg:text-[64px] font-bold mb-6">
          Communicate and<br />
          Collaborate <span class="text-[#5599BB]">Seamlessly.</span>
        </h1>

        <!-- Subheading -->
        <p class="text-base md:text-lg lg:text-[20px] text-[#E5E5E5] mb-10 max-w-3xl mx-auto">
          Ration is a messaging and collaboration platform that offers intuitive, flexible and extensible features.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <RouterLink to="/waitlist">
          <button class="bg-[#069] hover:bg-cyan-600 text-white px-8 py-3 rounded font-semibold transition-colors duration-200">
            Join Waitlist
          </button>
          </RouterLink>
          <button class="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded font-semibold transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>
    </section>

    <!-- Product Image Section (Blue to White Gradient Background) -->
    <section class="relative bg-linear-to-b from-[#003854] to-white py-16 px-4">
      <div class="max-w-5xl mx-auto">
        <div class="bg-gray-200 rounded-lg shadow-2xl overflow-hidden">
          <img 
            :src="mid" 
            alt="Ration Platform Interface" 
            class="w-full h-auto"
          />
        </div>
      </div>
    </section>

    <!-- Trusted Clients Section -->
    <section class="bg-white py-16 px-4 mb-12.5">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-semibold text-[#131313] mb-8">
          Our Trusted Clients
        </h2>

        <div class="flex shrink-0 justify-center items-center gap-8 md:gap-12">
          <!-- Client Logo 1 -->
          <div>
            <img 
              :src="ogun"
              alt="Ogun"
              class="object-contain"
            />
        </div>

          <!-- Client Logo 2  -->
          <div>
              <img 
                :src="army" 
                alt="Nigerian Army" 
                class="w-full h-full object-contain"
              />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



