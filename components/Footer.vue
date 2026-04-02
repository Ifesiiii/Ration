<script setup>
import logo from '../assets/img/logo.png'
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="mx-auto bg-white py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Main Footer Content -->
      <div class="flex flex-col lg:flex-row justify-between gap-12 mb-16">
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
                <RouterLink to="/company/about" class="text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">About</RouterLink>
              </li>
              <li>
                <RouterLink to="/services" class="text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">Services</RouterLink>
              </li>
              <li>
                <RouterLink to="/pricing" class="text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">Pricing plans</RouterLink>
              </li>
              <li>
                <RouterLink to="/deployment" class="text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">Deployment plans</RouterLink>
              </li>
            </ul>
          </div>

          <!-- Features Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Features</h3>
            <ul class="space-y-3">
              <li>
                <RouterLink to="/features/mail" class="text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">Mail</RouterLink>
              </li>
              <li>
                <RouterLink to="/features/contact" class="text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">Contact</RouterLink>
              </li>
              <li>
                <RouterLink to="/features/chat" class="text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">Chat</RouterLink>
              </li>
              <li>
                <RouterLink to="/features/calendar" class="text-base text-[#131313] hover:text-[#0A5C7A] transition-colors">Calendar</RouterLink>
              </li>
            </ul>
          </div>

          <!-- Contact Us Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
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
    </div>
  </footer>
</template>