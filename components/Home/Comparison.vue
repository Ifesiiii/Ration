<script setup>
</script>

<template>
  <section class="bg-gray-100 py-30 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      
      <!-- Main Card -->
      <div class="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100">
        
        <!-- Section Title -->
        <h2 class="text-2xl sm:text-3xl font-bold text-[#131313] text-center mb-10">
          How Ration compares
        </h2>

        <!-- Comparison Table -->
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-200 bg-gray-50">
                <th class="py-4 px-4 text-left text-lg font-semibold text-[#131313] w-1/3">
                  Feature
                </th>
                <th class="py-4 px-4 text-center text-lg font-bold text-[#131313]">
                  Ration
                </th>
                <th class="py-4 px-4 text-center text-lg font-semibold text-gray-500">
                  Zoho Workplace
                </th>
                <th class="py-4 px-4 text-center text-lg font-semibold text-gray-500">
                  Microsoft 365
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- Row 1: Local hosting -->
              <tr class="border-b border-gray-100">
                <td class="py-5 px-4 text-md text-[#131313] font-medium">
                  Local hosting in Nigeria
                </td>
                <td class="py-5 px-4 text-center">
                  <div class="flex items-center justify-center gap-1.5 text-green-600 font-medium text-md">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Yes</span>
                  </div>
                </td>
                <td class="py-5 px-4 text-center">
                  <div class="flex items-center justify-center gap-1.5 text-red-500 text-md">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                    </svg>
                    <span>No</span>
                  </div>
                </td>
                <td class="py-5 px-4 text-center">
                  <div class="flex items-center justify-center gap-1.5 text-red-500 text-md">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                    </svg>
                    <span>No</span>
                  </div>
                </td>
              </tr>

              <!-- Row 2: All-in-one platform -->
              <tr class="border-b border-gray-100">
                <td class="py-5 px-4 text-md text-[#131313] font-medium">
                  All-in-one platform
                </td>
                <td class="py-5 px-4 text-center">
                  <div class="flex items-center justify-center gap-1.5 text-green-600 font-medium text-md">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Yes</span>
                  </div>
                </td>
                <td class="py-5 px-4 text-center">
                  <div class="flex items-center justify-center gap-1.5 text-gray-500 text-md">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
                    </svg>
                    <span>Modular</span>
                  </div>
                </td>
                <td class="py-5 px-4 text-center">
                  <div class="flex items-center justify-center gap-1.5 text-green-600 font-medium text-md">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Yes</span>
                  </div>
                </td>
              </tr>

              <!-- Row 3: Low latency meetings -->
              <tr class="border-b border-gray-100">
                <td class="py-5 px-4 text-md text-[#131313] font-medium">
                  Low latency meetings (Africa)
                </td>
                <td class="py-5 px-4 text-center">
                  <div class="flex items-center justify-center gap-1.5 text-green-600 font-medium text-md">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Yes</span>
                  </div>
                </td>
                <td class="py-5 px-4 text-center">
                  <div class="flex items-center justify-center gap-1.5 text-red-500 text-md">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                    </svg>
                    <span>No</span>
                  </div>
                </td>
                <td class="py-5 px-4 text-center">
                  <div class="flex items-center justify-center gap-1.5 text-red-500 text-mf">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                    </svg>
                    <span>No</span>
                  </div>
                </td>
              </tr>

              <!-- Row 4: Simple per-user pricing -->
              <tr class="border-b border-gray-100">
                <td class="py-5 px-4 text-md text-[#131313] font-medium">
                  Simple per-user pricing
                </td>
                <td class="py-5 px-4 text-center">
                  <div class="flex items-center justify-center gap-1.5 text-green-600 font-medium text-md">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Yes</span>
                  </div>
                </td>
                <td class="py-5 px-4 text-center">
                  <div class="flex items-center justify-center gap-1.5 text-amber-500 text-md">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                    </svg>
                    <span>Modular adds up</span>
                  </div>
                </td>
                <td class="py-5 px-4 text-center">
                  <div class="flex items-center justify-center gap-1.5 text-amber-500 text-md">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                    </svg>
                    <span>Complex tiers</span>
                  </div>
                </td>
              </tr>

              <!-- Row 5: Built for African teams -->
              <tr>
                <td class="py-5 px-4 text-md text-[#131313] font-medium">
                  Built for African teams
                </td>
                <td class="py-5 px-4 text-center">
                  <div class="flex items-center justify-center gap-1.5 text-green-600 font-medium text-md">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Native</span>
                  </div>
                </td>
                <td class="py-5 px-4 text-center">
                  <div class="flex items-center justify-center gap-1.5 text-red-500 text-md">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                    </svg>
                    <span>Adapted</span>
                  </div>
                </td>
                <td class="py-5 px-4 text-center">
                  <div class="flex items-center justify-center gap-1.5 text-red-500 text-md">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                    </svg>
                    <span>Global-first</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Footer Statement -->
        <div class="mt-10 text-center">
          <p class="text-xl font-semibold text-[#131313]">
            Ration is the collaboration platform built for Nigeria.
          </p>
          <p class="text-xl font-bold text-[#131313] mt-1">
            Not adapted. Built.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

