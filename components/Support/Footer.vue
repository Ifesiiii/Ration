<script setup>
import logo from '../../assets/img/logo2.png'
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="mx-auto bg-white py-10 px-4">
    <div class="max-w-7xl mx-auto">
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
            Choose the deployment edition that best aligns with your organization's requirements, resources, and strategic objectives.
          </p>
        </div>

        <!-- Links Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
          <!-- Company Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Company</h3>
            <ul class="space-y-3">
              <li>
                <RouterLink to="/company/about" class="text-base hover:text-[#0A5C7A] transition-colors">About</RouterLink>
              </li>
              <li>
                <RouterLink to="/services" class="text-base hover:text-[#0A5C7A] transition-colors">Services</RouterLink>
              </li>
              <li>
                <RouterLink to="/pricing" class="text-base hover:text-[#0A5C7A] transition-colors">Pricing plans</RouterLink>
              </li>
              <li>
                <RouterLink to="/deployment" class="text-base hover:text-[#0A5C7A] transition-colors">Deployment plans</RouterLink>
              </li>
            </ul>
          </div>

          <!-- Features Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Features</h3>
            <ul class="space-y-3">
              <li>
                <RouterLink to="/features/mail" class="text-base hover:text-[#0A5C7A] transition-colors">Mail</RouterLink>
              </li>
              <li>
                <RouterLink to="/features/contact" class="text-base hover:text-[#0A5C7A] transition-colors">Contact</RouterLink>
              </li>
              <li>
                <RouterLink to="/features/chat" class="text-base hover:text-[#0A5C7A] transition-colors">Chat</RouterLink>
              </li>
              <li>
                <RouterLink to="/features/calendar" class="text-base hover:text-[#0A5C7A] transition-colors">Calendar</RouterLink>
              </li>
            </ul>
          </div>

          <!-- Contact Us Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Support</h3>
            <ul class="space-y-3">
              <li>
                <RouterLink to="/features/mail" class="text-base hover:text-[#0A5C7A] transition-colors">FAQ</RouterLink>
              </li>
              <li>
                <RouterLink to="/features/contact" class="text-base hover:text-[#0A5C7A] transition-colors">Contact Us</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>