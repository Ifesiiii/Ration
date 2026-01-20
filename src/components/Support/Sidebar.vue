<script setup>
import { ref, computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();

const sidebarLinks = ref([
  { name: 'Getting Started', route: '/support/getting-started' },
  { name: 'Billing and Subscription Plans', route: '/support/billing' },
  { name: 'Mobile App Setup', route: '/support/mobile-setup' },
  { name: 'Managing Your Account', route: '/support/account-management' },
  { name: 'Troubleshooting', route: '/support/troubleshooting' },
  { name: 'Admin Tools and Permission', route: '/support/admin-tools' }
]);


const isActiveLink = computed(() => {
  return (linkRoute) => route.path === linkRoute;
});
</script>

<template>
  <aside class="lg:col-span-4">
    <div class="lg:sticky lg:top-8">
      <nav class="border border-[#DDDDDD66] rounded-lg p-6">
        <ul class="space-y-4">
          <li v-for="link in sidebarLinks" :key="link.name">
            <RouterLink
              :to="link.route"
              class="block text-base transition-colors"
              :class="isActiveLink(link.route) 
                ? 'text-[#069] font-semibold border-l-2 border-[#069] pl-4' 
                : 'text-[#002B40] hover:text-[#069] border-l-4 border-transparent pl-4'"
            >
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>