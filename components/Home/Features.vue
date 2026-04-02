<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import women from '../../assets/img/women1.jpg'
import laptop from '../../assets/img/laptop1.jpg'
import group from '../../assets/img/group1.jpg'


const slides = [
  {
    image: women,
    title: 'Ration makes team conversations effortless, fast, secure, and always in sync.',
    buttonText: 'Get Started'
  },
  {
    image: laptop,
    title: 'Collaborate seamlessly with your team across all devices.',
    buttonText: 'Learn More'
  },
  {
    image: group,
    title: 'Stay connected and productive wherever you work.',
    buttonText: 'Get Started'
  }
];


const currentSlide = ref(0);
let autoplayInterval = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 3;
};

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? 2 : currentSlide.value - 1;
};

// Auto-play functionality
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 5000); // Change slide every 5 seconds
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>


<template>
  <section id="features" class="bg-[#F8F8F8] py-16 px-4 mb-15">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-[#002B40] mb-4 leading-16">
          Messaging . Meetings .<br> Collaboration
        </h2>
        <p class="text-base md:text-lg text-[#131313] max-w-3xl mx-auto">
          Aside providing the whole gamut for email messaging - SMTP, IMAP, POP3 and friends - we are focused on extending your collaboration needs with more productive apps.
        </p>
      </div>

      <!-- Slider Container -->
      <div class="flex items-center gap-8">
        <!-- Left Arrow -->
        <button 
          @click="previousSlide"
          class="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors duration-200 shrink-0"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Content Area -->
        <div class="mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="flex flex-col md:flex-row">
            <!-- Left Side - Features List -->
            <div class="w-full md:w-72.25 p-8 md:p-12 bg-white shrink-0">
              <div class="space-y-8">
                <!-- Mail Feature -->
                <div>
                  <h3 class="text-2xl md:text-3xl font-bold text-[#069] mb-2">Mail</h3>
                  <p class="text-[#616161]">
                    Fast, secure, and intuitive messaging for teams.
                  </p>
                </div>

                <!-- Chat Feature -->
                <div>
                  <h3 class="text-2xl md:text-3xl font-bold text-[#069] mb-2">Chat</h3>
                  <p class="text-gray-600">
                    Instant, reliable, and organized conversations that keep your team connected.
                  </p>
                </div>

                <!-- Contact Feature -->
                <div>
                  <h3 class="text-2xl md:text-3xl font-bold text-[#069] mb-2">Contact</h3>
                  <p class="text-gray-600">
                    A smarter way to manage and access all your professional connections in one place.
                  </p>
                </div>
              </div>

              <!-- Feature Tags -->
              <div class="flex flex-wrap gap-3 mt-8">
                <span class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                  Smart mail
                </span>
                <span class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                  Instant Conversation
                </span>
                <span class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                  Smart Connections
                </span>
              </div>
            </div>

            <!-- Right Side - Image Slider -->
            <div class="w-full md:w-207 relative bg-gray-900 h-100 md:h-177.5">
                <!-- Loop through slides -->
                <div 
                v-for="(slide, index) in slides"
                :key="index"
                v-show="currentSlide === index"
                class="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                :class="currentSlide === index ? 'opacity-100' : 'opacity-0'"
            >
                <img 
                    :src="slide.image"
                    :alt="`Slide ${index + 1}`"
                    class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <h3 class="text-3xl md:text-4xl max-w-2xl font-bold mb-4 ">
                    {{ slide.title }}
                </h3>
                <button class="bg-white text-gray-900 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors duration-200">
                    {{ slide.buttonText }}
                </button>
            </div>
            </div>

    <!-- Slide Indicators -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
      <button 
        v-for="(slide, index) in slides.length" 
        :key="index"
        @click="currentSlide = index"
        class="w-2 h-2 rounded-full transition-all duration-300"
        :class="currentSlide === index ? 'bg-white w-8' : 'bg-white/50'"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
        </div>
        </div>
        </div>
        </div>

        <!-- Right Arrow -->
        <button 
          @click="nextSlide"
          class="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors duration-200 shrink-0"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation Arrows -->
      <div class="flex md:hidden justify-center gap-4 mt-6">
        <button 
          @click="previousSlide"
          class="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          @click="nextSlide"
          class="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>



