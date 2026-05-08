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

// Fires when navigating to /#footer-contact from another route on the same session
watch(
  () => route.hash,
  (hash) => {
    if (hash === '#footer-contact') {
      setTimeout(highlightContact, 100);
    }
  }
);

// Fires when the page loads fresh with /#footer-contact already in the URL
onMounted(() => {
  if (route.hash === '#footer-contact') {
    setTimeout(highlightContact, 300);
  }
});
</script>

<style scoped>
.contact-highlight {
  background-color: #e0f2fe !important;
  transition: background-color 0.4s ease;
}
</style>

<template>
  <footer class="mx-auto bg-white pt-16 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Main Footer Content -->
      <div class="flex flex-col lg:flex-row justify-between gap-12 mb-7">
        <!-- Company Info -->
        <div class="lg:w-[32%]">
          <div class="flex items-center gap-2 mb-6">
            <img 
              :src="logo"
              class="w-35" 
              alt="Stackchase"
            />
          </div>
          <p class="text-base leading-6 text-[#131313]">
            Stackchase Limited is a technology company building secure, high-performance platforms that power modern collaboration, communication, and digital operations.
          </p>
        </div>

        <!-- Links Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
          <!-- Company Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Company</h3>
            <ul class="space-y-3">
              <li>
                <a href="#" @click.prevent="smoothScroll('home')" class="text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">About</a>
              </li>
              <li>
                <a href="#" @click.prevent="smoothScroll('features')" class="text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">Services</a>
              </li>
              <li>
                <a href="#" @click.prevent="smoothScroll('pricing')" class="text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">Pricing plans</a>
              </li>
              <li>
                <a href="#" @click.prevent="smoothScroll('plans')" class="text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">Deployment plans</a>
              </li>
            </ul>
          </div>

          <!-- Features Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Features</h3>
            <ul class="space-y-3">
              <li>
                <p class="text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">Mail</p>
              </li>
              <li>
                <p class="text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">Contact</p>
              </li>
              <li>
                <p class="text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">Chat</p>
              </li>
              <li>
                <p class="text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">Calendar</p>
              </li>
            </ul>
          </div>

          <!-- Contact Us Links -->
          <div>
            <h3 id="footer-contact" class="text-lg font-semibold mb-4 transition-colors duration-300 rounded px-1 -mx-1">Contact Us</h3>
            <ul class="space-y-3">
              <li>
                <a href="" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.75 8.25002H14.25C13.9542 8.24878 13.6611 8.30613 13.3875 8.41876C13.114 8.5314 12.8654 8.69708 12.6563 8.90626C12.4471 9.11544 12.2814 9.36397 12.1688 9.63752C12.0561 9.91106 11.9988 10.2042 12 10.5V21" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 13.5H15" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                  Stackchase Limited
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18" fill="none">
                    <path d="M8.7383 11.651L13.5 18H20.5L12.6417 7.5223L19.1808 0H16.5308L11.4143 5.88578L7 0H0L7.51086 10.0145L0.56915 18H3.21917L8.7383 11.651ZM14.5 16L4 2H6L16.5 16H14.5Z" fill="#131313"/>
                </svg>
                  Stackchase_ltd
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z" stroke="#131313" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M16.125 3.375H7.875C5.38972 3.375 3.375 5.38972 3.375 7.875V16.125C3.375 18.6103 5.38972 20.625 7.875 20.625H16.125C18.6103 20.625 20.625 18.6103 20.625 16.125V7.875C20.625 5.38972 18.6103 3.375 16.125 3.375Z" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.875 8.25C17.4963 8.25 18 7.74632 18 7.125C18 6.50368 17.4963 6 16.875 6C16.2537 6 15.75 6.50368 15.75 7.125C15.75 7.74632 16.2537 8.25 16.875 8.25Z" fill="#131313"/>
                </svg>
                  Stackchase_ltd
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19.875 3.375H4.125C3.71079 3.375 3.375 3.71079 3.375 4.125V19.875C3.375 20.2892 3.71079 20.625 4.125 20.625H19.875C20.2892 20.625 20.625 20.2892 20.625 19.875V4.125C20.625 3.71079 20.2892 3.375 19.875 3.375Z" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.25 10.5V16.5" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.25 10.5V16.5" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.25 13.125C11.25 12.4288 11.5266 11.7611 12.0188 11.2688C12.5111 10.7766 13.1788 10.5 13.875 10.5C14.5712 10.5 15.2389 10.7766 15.7312 11.2688C16.2234 11.7611 16.5 12.4288 16.5 13.125V16.5" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.25 8.625C8.87132 8.625 9.375 8.12132 9.375 7.5C9.375 6.87868 8.87132 6.375 8.25 6.375C7.62868 6.375 7.125 6.87868 7.125 7.5C7.125 8.12132 7.62868 8.625 8.25 8.625Z" fill="#131313"/>
                </svg>
                  Stackchase Limited
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Copyright Bar -->
      <div class="border-t border-gray-200 py-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <!-- Left: Copyright + Legal Links -->
          <div class="flex flex-wrap items-center gap-1 text-sm text-[#424242]">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 14.25C14.5278 14.8796 13.8694 15.3448 13.1181 15.5794C12.3669 15.8141 11.5608 15.8065 10.8141 15.5576C10.0675 15.3087 9.41804 14.8312 8.95784 14.1927C8.49764 13.5542 8.25 12.7871 8.25 12C8.25 11.2129 8.49764 10.4458 8.95784 9.80734C9.41804 9.16884 10.0675 8.69133 10.8141 8.44244C11.5608 8.19355 12.3669 8.1859 13.1181 8.42057C13.8694 8.65525 14.5278 9.12035 15 9.75" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
            <span>Copyright 2026 Stackchase Limited. All right reserved.</span>
            <span class="mx-2 text-gray-300">|</span>
            <RouterLink to="/policy" class="hover:text-[#0A5C7A] transition-colors">Privacy policy</RouterLink>
            <span class="mx-2 text-gray-300">|</span>
            <RouterLink to="/notice" class="hover:text-[#0A5C7A] transition-colors">Legal notice</RouterLink>
          </div>

          <!-- Right: Social Icons -->
          <!-- <div class="flex items-center gap-4"> -->
            <!-- Mail -->
            <!-- <a href="" target="_blank" rel="noopener noreferrer" class="text-[#131313] hover:text-[#0A5C7A] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a> -->
            <!-- Facebook -->
            <!-- <a href="" target="_blank" rel="noopener noreferrer" class="text-[#131313] hover:text-[#0A5C7A] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.75 8.25002H14.25C13.9542 8.24878 13.6611 8.30613 13.3875 8.41876C13.114 8.5314 12.8654 8.69708 12.6563 8.90626C12.4471 9.11544 12.2814 9.36397 12.1688 9.63752C12.0561 9.91106 11.9988 10.2042 12 10.5V21" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 13.5H15" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a> -->
            <!-- X / Twitter -->
            <!-- <a href="" target="_blank" rel="noopener noreferrer" class="text-[#131313] hover:text-[#0A5C7A] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 21 18" fill="none">
                <path d="M8.7383 11.651L13.5 18H20.5L12.6417 7.5223L19.1808 0H16.5308L11.4143 5.88578L7 0H0L7.51086 10.0145L0.56915 18H3.21917L8.7383 11.651ZM14.5 16L4 2H6L16.5 16H14.5Z" fill="#131313"/>
              </svg>
            </a> -->
            <!-- LinkedIn -->
            <!-- <a href="" target="_blank" rel="noopener noreferrer" class="text-[#131313] hover:text-[#0A5C7A] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M19.875 3.375H4.125C3.71079 3.375 3.375 3.71079 3.375 4.125V19.875C3.375 20.2892 3.71079 20.625 4.125 20.625H19.875C20.2892 20.625 20.625 20.2892 20.625 19.875V4.125C20.625 3.71079 20.2892 3.375 19.875 3.375Z" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.25 10.5V16.5" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.25 10.5V16.5" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.25 13.125C11.25 12.4288 11.5266 11.7611 12.0188 11.2688C12.5111 10.7766 13.1788 10.5 13.875 10.5C14.5712 10.5 15.2389 10.7766 15.7312 11.2688C16.2234 11.7611 16.5 12.4288 16.5 13.125V16.5" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.25 8.625C8.87132 8.625 9.375 8.12132 9.375 7.5C9.375 6.87868 8.87132 6.375 8.25 6.375C7.62868 6.375 7.125 6.87868 7.125 7.5C7.125 8.12132 7.62868 8.625 8.25 8.625Z" fill="#131313"/>
              </svg>
            </a> -->
            <!-- Instagram -->
            <!-- <a href="" target="_blank" rel="noopener noreferrer" class="text-[#131313] hover:text-[#0A5C7A] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z" stroke="#131313" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M16.125 3.375H7.875C5.38972 3.375 3.375 5.38972 3.375 7.875V16.125C3.375 18.6103 5.38972 20.625 7.875 20.625H16.125C18.6103 20.625 20.625 18.6103 20.625 16.125V7.875C20.625 5.38972 18.6103 3.375 16.125 3.375Z" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.875 8.25C17.4963 8.25 18 7.74632 18 7.125C18 6.50368 17.4963 6 16.875 6C16.2537 6 15.75 6.50368 15.75 7.125C15.75 7.74632 16.2537 8.25 16.875 8.25Z" fill="#131313"/>
              </svg>
            </a> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </footer>
</template>