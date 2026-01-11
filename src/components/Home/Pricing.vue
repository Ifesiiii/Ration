<script setup>
// No additional script needed for this component
</script>




<template>
  <section class="bg-white py-16 px-4 mb-15">
    <div class="max-w-6xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-[#002B40] mb-4">
          Pricing Plans
        </h2>
        <p class="text-base md:text-xl text-[#131313] max-w-xl mx-auto">
          Choose the deployment edition that best aligns with your organization's requirements, resources, and strategic objectives.
        </p>
      </div>

      <!-- Pricing Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        <!-- Standard Plan Card -->
        <div class="bg-[#F4FCFF] border-[rgba(221, 221, 221, 0.40)] rounded-lg p-8">
          <!-- Plan Header -->
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-[#131313] mb-2">Standard</h3>
            <p class="text-lg text-[#131313]">
              For seamless integrations and sending tools <br>in bulk.
            </p>
          </div>

          <!-- Pricing -->
          <div class="mb-6">
            <div class="flex items-baseline gap-2 mb-1">
              <span class="text-[56px] font-bold text-[#131313]">20,000</span>
              <span class="text-[32px] text-[#131313]">/ Annum</span>
            </div>
            <p class="text-lg text-[#131313]">Seat cost per month.</p>
          </div>

          <!-- CTA Button -->
          <button class="w-full bg-[#069] text-white py-3 rounded font-semibold hover:bg-[#058] transition-colors duration-200 mb-3">
            Get Started
          </button>
          <p class="text-center text-lg text-[#131313] mb-8">Billed Annually</p>

          <!-- Features List -->
          <div>
            <h4 class="text-2xl font-bold text-[#131313] mb-4">Everything in Essentials, plus:</h4>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <div class="w-5 h-5 bg-[#069] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-base text-[#131313]">Cloud-Based Service: Hosted and managed</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-5 h-5 bg-[#069] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-base text-[#131313]">Cloud-Based Service: Hosted and managed</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-5 h-5 bg-[#069] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-base text-[#131313]">Cloud-Based Service: Hosted and managed</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-5 h-5 bg-[#069] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-base text-[#131313]">Cloud-Based Service: Hosted and managed</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Enterprise Plan Card -->
        <div class="bg-[#F8F4F1] border-[rgba(221, 221, 221, 0.40)] rounded-lg p-8">
          <!-- Plan Header -->
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-[#131313] mb-2">Enterprise</h3>
            <p class="text-lg text-[#131313]">
              For large companies with complex Tool workflows.
            </p>
          </div>

          <!-- Pricing -->
          <div class="mb-6">
            <div class="mb-1">
              <span class="text-[56px] font-bold text-[#131313]">Let's talk</span>
            </div>
            <p class="text-lg text-[#131313]">Per-seat or per-tool pricing</p>
          </div>

          <!-- CTA Button -->
          <button class="w-full bg-[#003854] text-white py-3 rounded font-semibold hover:bg-[#003D5C] transition-colors duration-200 mb-3">
            Contact Sales
          </button>
          <p class="text-center text-lg text-[#131313] mb-8">Respond within 24 hrs max</p>

          <!-- Features List -->
          <div>
            <h4 class="text-2xl font-bold text-[#131313] mb-4">Everything in Essentials, plus:</h4>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <div class="w-5 h-5 bg-[#069] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-base text-[#131313]">Cloud-Based Service: Hosted and managed</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-5 h-5 bg-[#069] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-base text-[#131313]">Cloud-Based Service: Hosted and managed</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-5 h-5 bg-[#069] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-base text-[#131313]">Cloud-Based Service: Hosted and managed</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-5 h-5 bg-[#069] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-base text-[#131313]">Cloud-Based Service: Hosted and managed</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

