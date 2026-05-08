<script setup>
import logo from '../assets/img/logo.png'
import { useRouter, useRoute, RouterLink } from 'vue-router';
import { watch, onMounted } from 'vue';

const router = useRouter();
const route = useRoute();

const smoothScroll = (hash) => {
  const el = document.getElementById(hash);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  } else {
    router.push('/').then(() => {
      setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    });
  }
};

const highlightContact = () => {
  const el = document.getElementById('footer-contact');
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el.classList.add('contact-highlight');
  setTimeout(() => el.classList.remove('contact-highlight'), 2500);
};

watch(
  () => route.hash,
  (hash) => {
    if (hash === '#footer-contact') {
      setTimeout(highlightContact, 100);
    }
  }
);

onMounted(() => {
  if (route.hash === '#footer-contact') {
    setTimeout(highlightContact, 300);
  }
});
</script>

<template>
  <footer class="bg-white border-t border-gray-200 px-6 md:px-16 pt-14 pb-0">
    <div class="max-w-6xl mx-auto">

      <!-- Main Footer Grid -->
      <div class="flex flex-col md:flex-row justify-between gap-12 pb-12">

        <!-- Left: Logo + Description -->
        <div class="max-w-xs">
          <div class="flex items-center gap-2 mb-5">
            <img :src="logo" alt="Stackchase Logo" class="h-7 w-auto" />
          </div>
          <p class="text-[#4b5563] text-[15px] leading-relaxed">
            Stackchase Limited is a technology company building secure, high-performance platforms
            that power modern collaboration, communication and digital operations.
          </p>
        </div>

        <!-- Right: Link Columns -->
        <div class="flex flex-wrap gap-12 md:gap-20">

          <!-- Company -->
          <div>
            <h4 class="text-[#131313] font-semibold text-[15px] mb-5">Company</h4>
            <ul class="space-y-3">
              <li><span class="text-[#4b5563] text-[15px] cursor-default">About</span></li>
              <li><span class="text-[#4b5563] text-[15px] cursor-default">Product</span></li>
              <li><span class="text-[#4b5563] text-[15px] cursor-default">News</span></li>
              <li><span class="text-[#4b5563] text-[15px] cursor-default">Career</span></li>
            </ul>
          </div>

          <!-- Industry -->
          <div>
            <h4 class="text-[#131313] font-semibold text-[15px] mb-5">Industry</h4>
            <ul class="space-y-3">
              <li><span class="text-[#4b5563] text-[15px] cursor-default">Government</span></li>
              <li><span class="text-[#4b5563] text-[15px] cursor-default">Business</span></li>
            </ul>
          </div>

          <!-- Support -->
          <div>
            <h4 class="text-[#131313] font-semibold text-[15px] mb-5">Support</h4>
            <ul class="space-y-3">
              <li><span class="text-[#4b5563] text-[15px] cursor-default">Product support</span></li>
              <li>
                <span
                  id="footer-contact"
                  class="text-[#4b5563] text-[15px] cursor-default transition-colors duration-300 rounded px-1 -mx-1"
                >Contact Us</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-200 py-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">

          <!-- Left: Copyright + Legal -->
          <div class="flex flex-wrap items-center gap-1 text-sm text-[#4b5563]">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" class="shrink-0 mr-0.5">
              <circle cx="12" cy="12" r="9" stroke="#4b5563" stroke-width="1.8"/>
              <path d="M14.5 9.5C13.9 8.9 13.0 8.5 12 8.5C9.8 8.5 8 10.0 8 12C8 14.0 9.8 15.5 12 15.5C13.0 15.5 13.9 15.1 14.5 14.5" stroke="#4b5563" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
            <span>Copyright 2025 Stackchase Limited. All right reserved.</span>
            <span class="mx-3 text-gray-300 select-none">|</span>
            <span class="cursor-default">Privacy policy</span>
            <span class="mx-3 text-gray-300 select-none">|</span>
            <span class="cursor-default">Legal notice</span>
          </div>

          <!-- Right: Social Icons -->
          <div class="flex items-center gap-5">
            <!-- Mail -->
            <a href="mailto:support@lopworks.com" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
             <path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 5.25L12 13.5L3 5.25" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </a>
            <!-- Facebook -->
            <a href="https://www.facebook.com/share/19oe3J36pF/" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.75 8.25002H14.25C13.9542 8.24878 13.6611 8.30613 13.3875 8.41876C13.114 8.5314 12.8654 8.69708 12.6563 8.90626C12.4471 9.11544 12.2814 9.36397 12.1688 9.63752C12.0561 9.91106 11.9988 10.2042 12 10.5V21" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 13.5H15" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </a>
            <!-- Twitter -->
            <a href="https://x.com/StackchaseLtd?t=nW2dZ-uWAL4jEPyszg0C4A&s=09" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z" fill="#131313"/>
            </svg>
            </a>
            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/company/stackchase/" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M19.875 3.375H4.125C3.71079 3.375 3.375 3.71079 3.375 4.125V19.875C3.375 20.2892 3.71079 20.625 4.125 20.625H19.875C20.2892 20.625 20.625 20.2892 20.625 19.875V4.125C20.625 3.71079 20.2892 3.375 19.875 3.375Z" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.25 10.5V16.5" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.25 10.5V16.5" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.25 13.125C11.25 12.4288 11.5266 11.7611 12.0188 11.2688C12.5111 10.7766 13.1788 10.5 13.875 10.5C14.5712 10.5 15.2389 10.7766 15.7312 11.2688C16.2234 11.7611 16.5 12.4288 16.5 13.125V16.5" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.25 8.625C8.87132 8.625 9.375 8.12132 9.375 7.5C9.375 6.87868 8.87132 6.375 8.25 6.375C7.62868 6.375 7.125 6.87868 7.125 7.5C7.125 8.12132 7.62868 8.625 8.25 8.625Z" fill="#131313"/>
            </svg>
            </a>
            <!-- Instagram -->
            <a href="https://www.instagram.com/stackchaseltd?igsh=N251MWU3NDNwcDVt" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z" stroke="#131313" stroke-width="2" stroke-miterlimit="10"/>
              <path d="M16.125 3.375H7.875C5.38972 3.375 3.375 5.38972 3.375 7.875V16.125C3.375 18.6103 5.38972 20.625 7.875 20.625H16.125C18.6103 20.625 20.625 18.6103 20.625 16.125V7.875C20.625 5.38972 18.6103 3.375 16.125 3.375Z" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.875 8.25C17.4963 8.25 18 7.74632 18 7.125C18 6.50368 17.4963 6 16.875 6C16.2537 6 15.75 6.50368 15.75 7.125C15.75 7.74632 16.2537 8.25 16.875 8.25Z" fill="#131313"/>
            </svg>
            </a>
          </div>

        </div>
      </div>

    </div>
  </footer>
</template>

<style scoped>
.contact-highlight {
  background-color: #e0f2fe !important;
  transition: background-color 0.4s ease;
}
</style>