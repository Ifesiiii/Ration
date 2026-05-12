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
                <span class="text-base hover:text-[#0A5C7A] transition-colors">About</span>
              </li>
              <li>
                <span class="text-base hover:text-[#0A5C7A] transition-colors">Services</span>
              </li>
              <li>
                <span class="text-base hover:text-[#0A5C7A] transition-colors">Pricing plans</span>
              </li>
              <li>
                <span class="text-base hover:text-[#0A5C7A] transition-colors">Deployment plans</span>
              </li>
            </ul>
          </div>

          <!-- Features Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Features</h3>
            <ul class="space-y-3">
              <li>
                <span class="text-base hover:text-[#0A5C7A] transition-colors">Mail</span>
              </li>
              <li>
                <span class="text-base hover:text-[#0A5C7A] transition-colors">Contact</span>
              </li>
              <li>
                <span class="text-base hover:text-[#0A5C7A] transition-colors">Chat</span>
              </li>
              <li>
                <span class="text-base hover:text-[#0A5C7A] transition-colors">Calendar</span>
              </li>
            </ul>
          </div>

          <!-- Contact Us Links -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Support</h3>
            <ul class="space-y-3">
              <li>
                <span class="text-base hover:text-[#0A5C7A] transition-colors">FAQ</span>
              </li>
              <li>
                <span class="text-base hover:text-[#0A5C7A] transition-colors">Contact Us</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>