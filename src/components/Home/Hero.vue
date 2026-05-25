<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import caro1 from '../../assets/img/Caro1.png'
import caro2 from '../../assets/img/Caro2.png'
import caro3 from '../../assets/img/Caro3.png'
import caro4 from '../../assets/img/Caro4.png'
import caro5 from '../../assets/img/Caro5.png'
import ogun from '../../assets/img/ogun.png'
import army from '../../assets/img/army.png'
import { gsap } from 'gsap';


const slides = [caro1, caro2, caro3, caro4, caro5];

const activeIndex = ref(0);
const carouselRef = ref(null);
const cardRefs = ref([]);
const autoTimer = ref(null);
let isDragging = false;
let dragStartX = 0;


const POSITIONS = [
   { x: -480, rotY: 0, scale: 0.62, z: -220, opacity: 0.50 }, // far left
  { x: -250, rotY: 0, scale: 0.80, z: -110, opacity: 0.75 }, // near left
  { x:    0, rotY: 0, scale: 1.00, z:    0, opacity: 1.00 }, // center
  { x:  250, rotY: 0, scale: 0.80, z: -110, opacity: 0.75 }, // near right
  { x:  480, rotY: 0, scale: 0.62, z: -220, opacity: 0.50 }, // far right
];


function getSlot(cardIndex, active) {
  let diff = cardIndex - active;
  if (diff > 2)  diff -= slides.length;
  if (diff < -2) diff += slides.length;
  return diff; // -2, -1, 0, 1, 2
}

function animateCards(instant = false) {
  cardRefs.value.forEach((el, i) => {
    if (!el) return;
    const slot = getSlot(i, activeIndex.value);
    const pos  = POSITIONS[slot + 2]; // slot+2 maps -2..2 → 0..4

    gsap.to(el, {
      x:         pos.x,
      rotateY:   pos.rotY,
      scale:     pos.scale,
      z:         pos.z,
      opacity:   pos.opacity,
      duration:  instant ? 0 : 0.65,
      ease:      'power3.out',
      zIndex:    10 - Math.abs(slot),
      transformOrigin: 'center center',
    });
  });
}

function goTo(index) {
  activeIndex.value = ((index % slides.length) + slides.length) % slides.length;
  animateCards();
}

function next() { goTo(activeIndex.value + 1); }
function prev() { goTo(activeIndex.value - 1); }

function startAuto() {
  clearInterval(autoTimer.value);
  autoTimer.value = setInterval(next, 5000);
}
function stopAuto() { clearInterval(autoTimer.value); }


function onPointerDown(e) {
  isDragging = true;
  dragStartX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
  stopAuto();
}
function onPointerUp(e) {
  if (!isDragging) return;
  isDragging = false;
  const endX = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
  const delta = dragStartX - endX;
  if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
  startAuto();
}

onMounted(() => {
  animateCards(true);
  startAuto();
});
onBeforeUnmount(() => stopAuto());
</script>


<template>
  <div>
    <!-- ── Hero Section  -->
    <section id="home" class="bg-[#003854] text-white py-30 px-4 -mt-16">
      <div class="max-w-5xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl lg:text-[64px] font-bold mb-6">
          Communicate and<br />
          Collaborate <span class="text-[#5599BB]">Seamlessly.</span>
        </h1>

        <p class="text-base md:text-lg lg:text-[20px] text-[#E5E5E5] mb-10 max-w-3xl mx-auto">
          Ration is a messaging and collaboration platform that offers intuitive,
          flexible and extensible features.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <RouterLink to="/waitlist">
            <button class="bg-[#069] hover:bg-cyan-600 text-white px-8 py-3 rounded font-semibold transition-colors duration-200">
              Join Waitlist
            </button>
          </RouterLink>
          <RouterLink to="/docs">
            <button class="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded font-semibold transition-colors duration-200">
              Learn More
            </button>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- 3D Carousel Section -->
    <section class="relative bg-[#003854] px-4 my-auto pb-30 overflow-hidden">
      <!-- Perspective stage -->
      <div
        ref="carouselRef"
        class="relative mx-auto select-none"
        style="height: 420px; max-width: 1100px; perspective: 1200px; perspective-origin: 50% 40%;"
        @mousedown="onPointerDown"
        @mouseup="onPointerUp"
        @mouseleave="onPointerUp"
        @touchstart.passive="onPointerDown"
        @touchend="onPointerUp"
      >
        <!-- Cards -->
        <div
          v-for="(src, i) in slides"
          :key="i"
          :ref="el => cardRefs[i] = el"
          class="absolute top-0 left-1/2 -translate-x-1/2 cursor-grab active:cursor-grabbing"
          style="width: 680px; will-change: transform; backface-visibility: hidden;"
          @click="goTo(i)"
        >
          <div class="bg-gray-200 rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/10">
            <img
              :src="src"
              alt="Ration Platform Interface"
              class="w-full h-auto block pointer-events-none"
              draggable="false"
            />
          </div>
        </div>

        <!-- Arrows -->
        <button
          class="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-sm flex items-center justify-center transition-colors duration-200"
          @click.stop="prev(); startAuto()"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button
          class="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white backdrop-blur-sm flex items-center justify-center transition-colors duration-200"
          @click.stop="next(); startAuto()"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>

      <!-- Dot indicators -->
      <div class="flex justify-center gap-2 pb-6 relative z-10" style="margin-top: -28px;">
        <button
          v-for="(_, i) in slides"
          :key="i"
          class="h-2 rounded-full transition-all duration-300"
          :class="activeIndex === i
            ? 'bg-[#069] w-6'
            : 'bg-white/30 w-2 hover:bg-white/60'"
          @click="goTo(i); startAuto()"
          :aria-label="`Go to slide ${i + 1}`"
        />
      </div>
    </section>

    <!-- ── Trusted Clients Section -->
    <section class="bg-white py-17 px-4 mb-12.5">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl text-[#131313] mb-8">
          Our Trusted Clients
        </h2>

        <div class="flex shrink-0 justify-center items-center gap-8 md:gap-12">
          <div>
            <img :src="ogun" alt="Ogun" class="object-contain" />
          </div>
          <div>
            <img :src="army" alt="Nigerian Army" class="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>