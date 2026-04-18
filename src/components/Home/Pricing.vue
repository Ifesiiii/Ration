<script setup>
import { ref } from 'vue'

const billingPeriod = ref('monthly')
const selectedPlan = ref('do')

const plans = [
  {
    id: 'start',
    name: 'Ration Start',
    price: 2000,
    annualPrice: 20000,
    currency: '₦',
    annualSavings: 4000,
    badgeType: 'entry',
    badgeText: 'Entry',
    popular: false,
    description: 'Secure communication foundation',
    features: [
      { text: 'Mail (25GB per user)', type: 'check' },
      { text: 'Calendar', type: 'check' },
      { text: 'Basic Chat', type: 'check' },
      { text: 'Mobile + Desktop apps', type: 'check' },
      { text: 'MFA / Identity', type: 'check' },
      // Excluded features with grey dots
      { text: 'Rooms (video/audio)', type: 'dot', excluded: true },
      { text: 'Drive / Notes / Workflows', type: 'dot', excluded: true }
    ],
    limitInfo: null,
    cta: 'Start with collaboration'
  },
  {
    id: 'do',
    name: 'Ration Do',
    price: 4000,
    annualPrice: 40000,
    currency: '₦',
    annualSavings: 8000,
    badgeType: 'engine',
    badgeText: 'Revenue Engine',
    popular: true,
    description: 'Where teams actually work together',
    features: [
      { text: 'Everything in Start, plus:', type: 'check' },
      { text: 'Rooms (video/audio meetings)', type: 'video' },
      { text: 'Full Chat + Channels', type: 'chat' },
      { text: 'Drive & File sharing', type: 'cloud' },
      { text: 'Notes / Wiki', type: 'book' },
      { text: 'Workflow / Approvals', type: 'list' }
    ],
    limitInfo: '60-min meetings · 25 participants · Fair usage limits apply',
    cta: 'Do the work →'
  },
  {
    id: 'scale',
    name: 'Ration Scale',
    price: 6000,
    annualPrice: 60000,
    currency: '₦',
    annualSavings: 12000,
    badgeType: 'enterprise',
    badgeText: 'Enterprise',
    popular: false,
    description: 'Control, compliance, scale',
    features: [
      { text: 'Everything in Do, plus:', type: 'check' },
      { text: 'Audit logs', type: 'chart' },
      { text: 'Compliance controls', type: 'hammer' },
      { text: 'Policy enforcement', type: 'lock' },
      { text: 'Priority support', type: 'bell' },
      { text: 'Higher usage limits', type: 'schart' }
    ],
    limitInfo: '120-min meetings · 50 participants · Higher concurrency',
    cta: 'Scale with confidence'
  }
]
</script>




<template>
  <section id="pricing" class="bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30">   
    <!-- Header Section -->
    <div class="max-w-5xl mx-auto text-center mb-12">
      <!-- Main Heading -->
      <h1 class="text-[#131313] text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
        One platform for collaboration.
      </h1>
      
      <!-- Sub Heading -->
      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#069] mb-6">
        Three ways to grow.
      </h2>
      
      <!-- Tagline -->
      <p class="text-xl sm:text-2xl text-gray-800 mb-4 font-bold">
        Start with collaboration. Do the work. Scale with confidence.
      </p>
      
      <!-- Features List -->
      <p class="text-base sm:text-lg text-gray-400 mb-10 max-w-3xl mx-auto font-medium">
        Email. Meetings. Chat. Documents. Workflows. One system, hosted in Nigeria.
      </p>
      
      <!-- Badges -->
      <div class="flex flex-wrap justify-center gap-6 sm:gap-8">
        <div class="flex items-center gap-2 text-[#131313]">
          <svg class="w-5 h-5 text-[#069]" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span class="text-sm sm:text-base font-medium">SOC 2 compliant</span>
        </div>
        
        <div class="flex items-center gap-2 text-[#131313]">
          <svg class="w-5 h-5 text-[#069]" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
          </svg>
          <span class="text-sm sm:text-base font-medium">Local hosting (NG)</span>
        </div>
        
        <div class="flex items-center gap-2 text-[#131313]">
          <svg class="w-5 h-5 text-[#069]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          <span class="text-sm sm:text-base font-medium">24/7 support</span>
        </div>
      </div>
    </div>   

    <!-- Main Plan: Ration Core -->
    <!-- Billing Toggle -->
      <div class="flex justify-center mb-12">
        <div class="bg-white rounded-full p-1 border border-gray-300 shadow-sm inline-flex">
          <button 
            @click="billingPeriod = 'monthly'"
            :class="[
              'px-6 py-3 rounded-full text-[18px] font-medium transition-all',
              billingPeriod === 'monthly' ? 'bg-[#131313] text-white shadow-md' : 'text-gray-500 hover:text-[#131313]'
            ]"
          >
            Monthly
          </button>
          <button 
            @click="billingPeriod = 'annual'"
            :class="[
              'px-6 py-3 rounded-full text-[18px] font-medium transition-all',
              billingPeriod === 'annual' ? 'bg-[#131313] text-white shadow-md' : 'text-gray-500 hover:text-[#131313]'
            ]"
          >
            Annual (save 2 months)
          </button>
        </div>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        
        <!-- Card Component -->
        <div 
          v-for="(plan, index) in plans" 
          :key="plan.id"
          @click="selectedPlan = plan.id"
          class="relative group"
        >
          <!-- Main Card Container -->
          <div 
            :class="[
              'bg-white rounded-2xl p-8 border transition-all duration-300 flex flex-col h-full',
              selectedPlan === plan.id 
                ? 'border-[#069] shadow-lg' 
                : 'border-gray-200 hover:border-gray-300 hover:shadow-md',
              'hover:-translate-y-1'
            ]"
          >
            <!-- Badges Row -->
            <div class="flex justify-between items-start mb-4 min-h-8">
              <span 
                :class="[
                  'inline-flex items-center px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide',
                  plan.badgeType === 'entry' ? 'bg-gray-100 text-[#424242]' :
                  plan.badgeType === 'engine' ? 'bg-blue-50 text-[#069]' :
                  'bg-[#131313] text-white'
                ]"
              >
                {{ plan.badgeType === 'engine' ? '★ ' : '' }}{{ plan.badgeText }}
              </span>

              <span v-if="plan.popular" class="bg-amber-100 text-amber-700 text-sm font-bold px-3 py-1 rounded-full">
                ⭐ Most popular
              </span>
            </div>

            <!-- Plan Name -->
            <h3 class="text-2xl font-extrabold text-[#131313] mb-2">{{ plan.name }}</h3>

            <!-- Price -->
            <div class="flex items-baseline mb-1">
              <span class="text-4xl font-extrabold text-[#131313]">
                {{ plan.currency }}{{ (billingPeriod === 'monthly' ? plan.price : plan.annualPrice).toLocaleString() }}
              </span>
              <span class="text-gray-500 ml-2 text-lg">
                /user /{{ billingPeriod === 'monthly' ? 'month' : 'year' }}
              </span>
            </div>

            <!-- Billing Text -->
            <p class="text-lg text-gray-500 mb-6">
              {{ billingPeriod === 'monthly' ? 'Billed monthly' : 'Billed annually (save ' + plan.annualSavings.toLocaleString() + ')' }}
            </p>

            <!-- Description -->
            <p class="text-[#64748B] mb-6 font-medium text-md">{{ plan.description }}</p>

            <!-- Features List -->
            <ul class="space-y-4 mb-8 grow">
              <li v-for="(feature, idx) in plan.features" :key="idx" class="flex items-start">
                <!-- Icon / Bullet -->
                <span class="shrink-0 mr-3">
                  <!-- Grey Dot for Excluded Features -->
                  <span v-if="feature.excluded" class="block w-2 h-2 rounded-full bg-gray-300"></span>
                  
                  <!-- Icons for Active Features -->
                  <template v-else>
                    <svg v-if="feature.type === 'check'" class="w-6 h-6 text-[#069]" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <svg v-else-if="feature.type === 'video'" class="w-6 h-6 text-[#069]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                    </svg>
                    <svg v-else-if="feature.type === 'chat'" class="w-6 h-6" fill="#069" viewBox="0 0 640 640" xmlns="https://www.w3.org/2000/svg">
                      <path d="M108.2 322.7C114.3 307.5 112.2 290.1 102.6 276.8C88.1 256.7 80 233.1 80 208C80 141.2 140.5 80 224 80C307.5 80 368 141.2 368 208C368 274.8 307.5 336 224 336C208.1 336 192.9 333.7 178.7 329.5C168.4 326.4 157.3 327 147.3 331L96.9 351.2L108.3 322.7zM32 208C32 243.8 43.6 277.1 63.7 304.8L33.9 379.2C32.6 382.4 32 385.8 32 389.2C32 404 44 416 58.8 416C62.2 416 65.6 415.3 68.8 414.1L165.1 375.6C183.7 381.1 203.5 384 224 384C330 384 416 305.2 416 208C416 110.8 330 32 224 32C118 32 32 110.8 32 208zM416 576C436.6 576 456.3 573 474.9 567.6L571.2 606.1C574.4 607.4 577.8 608 581.2 608C596 608 608 596 608 581.2C608 577.8 607.3 574.4 606.1 571.2L576.4 496.8C596.4 469 608.1 435.7 608.1 400C608.1 317.6 546.4 248.5 463.1 229.3C461.5 245.6 458 261.2 453 276.2C516.9 291 560.2 343.5 560.2 400.1C560.2 425.2 552.1 448.8 537.6 468.9C528 482.2 525.9 499.5 532 514.8L543.4 543.3L493 523.1C483 519.1 471.9 518.6 461.6 521.6C447.4 525.8 432.2 528.1 416.3 528.1C344.1 528.1 289.2 482.4 275.6 426.9C260 430.1 243.9 431.9 227.5 432.1C243.9 514 322.2 576.1 416.3 576.1z"/>
                    </svg>
                    <svg v-else-if="feature.type === 'cloud'" class="w-6 h-6 text-[#069]" fill="currentColor" viewBox="0 0 640 512">
                      <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z"/>
                    </svg>
                    <svg v-else-if="feature.type === 'book'" class="w-6 h-6 text-[#069]" fill="currentColor" viewBox="0 0 640 640">
                      <path d="M320 205.3L320 514.6L320.5 514.4C375.1 491.7 433.7 480 492.8 480L512 480L512 160L492.8 160C450.6 160 408.7 168.4 369.7 184.6C352.9 191.6 336.3 198.5 320 205.3zM294.9 125.5L320 136L345.1 125.5C391.9 106 442.1 96 492.8 96L528 96C554.5 96 576 117.5 576 144L576 496C576 522.5 554.5 544 528 544L492.8 544C442.1 544 391.9 554 345.1 573.5L332.3 578.8C324.4 582.1 315.6 582.1 307.7 578.8L294.9 573.5C248.1 554 197.9 544 147.2 544L112 544C85.5 544 64 522.5 64 496L64 144C64 117.5 85.5 96 112 96L147.2 96C197.9 96 248.1 106 294.9 125.5z"/>
                    </svg>
                    <svg v-else-if="feature.type === 'list'" class="w-6 h-6 text-[#069]" fill="currentColor" viewBox="0 0 640 640">
                      <path d="M197.8 100.3C208.7 107.9 211.3 122.9 203.7 133.7L147.7 213.7C143.6 219.5 137.2 223.2 130.1 223.8C123 224.4 116 222 111 217L71 177C61.7 167.6 61.7 152.4 71 143C80.3 133.6 95.6 133.7 105 143L124.8 162.8L164.4 106.2C172 95.3 187 92.7 197.8 100.3zM197.8 260.3C208.7 267.9 211.3 282.9 203.7 293.7L147.7 373.7C143.6 379.5 137.2 383.2 130.1 383.8C123 384.4 116 382 111 377L71 337C61.6 327.6 61.6 312.4 71 303.1C80.4 293.8 95.6 293.7 104.9 303.1L124.7 322.9L164.3 266.3C171.9 255.4 186.9 252.8 197.7 260.4zM288 160C288 142.3 302.3 128 320 128L544 128C561.7 128 576 142.3 576 160C576 177.7 561.7 192 544 192L320 192C302.3 192 288 177.7 288 160zM288 320C288 302.3 302.3 288 320 288L544 288C561.7 288 576 302.3 576 320C576 337.7 561.7 352 544 352L320 352C302.3 352 288 337.7 288 320zM224 480C224 462.3 238.3 448 256 448L544 448C561.7 448 576 462.3 576 480C576 497.7 561.7 512 544 512L256 512C238.3 512 224 497.7 224 480zM128 440C150.1 440 168 457.9 168 480C168 502.1 150.1 520 128 520C105.9 520 88 502.1 88 480C88 457.9 105.9 440 128 440z"/>
                    </svg>
                    <svg v-else-if="feature.type === 'chart'" class="w-6 h-6 text-[#069]" fill="currentColor" viewBox="0 0 640 640">
                      <path d="M128 128C128 110.3 113.7 96 96 96C78.3 96 64 110.3 64 128L64 464C64 508.2 99.8 544 144 544L544 544C561.7 544 576 529.7 576 512C576 494.3 561.7 480 544 480L144 480C135.2 480 128 472.8 128 464L128 128zM534.6 214.6C547.1 202.1 547.1 181.8 534.6 169.3C522.1 156.8 501.8 156.8 489.3 169.3L384 274.7L326.6 217.4C314.1 204.9 293.8 204.9 281.3 217.4L185.3 313.4C172.8 325.9 172.8 346.2 185.3 358.7C197.8 371.2 218.1 371.2 230.6 358.7L304 285.3L361.4 342.7C373.9 355.2 394.2 355.2 406.7 342.7L534.7 214.7z"/>
                    </svg>
                    <svg v-else-if="feature.type === 'hammer'" class="w-6 h-6 text-[#069]" fill="currentColor" viewBox="0 0 640 640">
                      <path d="M201.6 217.4L182.9 198.7C170.4 186.2 170.4 165.9 182.9 153.4L297.6 38.6C310.1 26.1 330.4 26.1 342.9 38.6L361.6 57.4C374.1 69.9 374.1 90.2 361.6 102.7L246.9 217.4C234.4 229.9 214.1 229.9 201.6 217.4zM308 275.7L276.6 244.3L388.6 132.3L508 251.7L396 363.7L364.6 332.3L132.6 564.3C117 579.9 91.7 579.9 76 564.3C60.3 548.7 60.4 523.4 76 507.7L308 275.7zM422.9 438.6C410.4 426.1 410.4 405.8 422.9 393.3L537.6 278.6C550.1 266.1 570.4 266.1 582.9 278.6L601.6 297.3C614.1 309.8 614.1 330.1 601.6 342.6L486.9 457.4C474.4 469.9 454.1 469.9 441.6 457.4L422.9 438.7z"/>
                    </svg>
                    <svg v-else-if="feature.type === 'lock'" class="w-6 h-6 text-[#069]" fill="currentColor" viewBox="0 0 640 640">
                      <path d="M256 160L256 224L384 224L384 160C384 124.7 355.3 96 320 96C284.7 96 256 124.7 256 160zM192 224L192 160C192 89.3 249.3 32 320 32C390.7 32 448 89.3 448 160L448 224C483.3 224 512 252.7 512 288L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 288C128 252.7 156.7 224 192 224z"/>
                    </svg>
                    <svg v-else-if="feature.type === 'bell'" class="w-6 h-6 text-[#069]" fill="currentColor" viewBox="0 0 640 640">
                      <path d="M280 128C266.7 128 256 138.7 256 152C256 165.3 266.7 176 280 176L296 176L296 209.3C188.8 220.7 104.2 307.7 96.6 416L543.5 416C535.8 307.7 451.2 220.7 344 209.3L344 176L360 176C373.3 176 384 165.3 384 152C384 138.7 373.3 128 360 128L280 128zM88 464C74.7 464 64 474.7 64 488C64 501.3 74.7 512 88 512L552 512C565.3 512 576 501.3 576 488C576 474.7 565.3 464 552 464L88 464z"/>
                    </svg>
                    <svg v-else-if="feature.type === 'schart'" class="w-6 h-6 text-[#069]" fill="currentColor" viewBox="0 0 640 640">
                      <path d="M256 144C256 117.5 277.5 96 304 96L336 96C362.5 96 384 117.5 384 144L384 496C384 522.5 362.5 544 336 544L304 544C277.5 544 256 522.5 256 496L256 144zM64 336C64 309.5 85.5 288 112 288L144 288C170.5 288 192 309.5 192 336L192 496C192 522.5 170.5 544 144 544L112 544C85.5 544 64 522.5 64 496L64 336zM496 160L528 160C554.5 160 576 181.5 576 208L576 496C576 522.5 554.5 544 528 544L496 544C469.5 544 448 522.5 448 496L448 208C448 181.5 469.5 160 496 160z"/>
                    </svg>
                  </template>
                </span>
                
                <!-- Feature Text -->
                <span 
                  :class="[
                    'text-md font-medium',
                    feature.excluded ? 'text-gray-400' : 'text-[#131313]'
                  ]"
                >
                  {{ feature.text }}
                </span>
              </li>
            </ul>

            <!-- Limit Info Box (Conditional - for Do and Scale plans) -->
            <div v-if="plan.limitInfo" class="bg-gray-50 rounded-lg p-3 mb-6 border border-gray-100">
              <div class="flex gap-2 text-[15px] text-gray-500">
                <svg class="w-4 h-4 text-[#069] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                </svg>
                <p>{{ plan.limitInfo }}</p>
              </div>
            </div>

            <!-- Button -->
            <div class="mt-auto pt-2">
              <button 
                :class="[
                  'w-full py-3 px-4 rounded-xl font-semibold text-md transition-colors duration-200',
                  selectedPlan === plan.id 
                    ? 'bg-[#069] text-white shadow-md hover:bg-[#069]' 
                    : 'bg-white text-[#424242] border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                ]"
              >
                {{ plan.cta }}
              </button>
            </div>
          </div>
        </div>
      </div>

    
      <!-- Fair Usage Card -->
        <div class="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">
        <div class="flex items-start gap-3 mb-4">
          <!-- Balance Scale Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" class="w-7 h-7 text-[#069] shrink-0 mt-0.5"><path d="M384 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L398.4 160C393.2 185.8 375.5 207.1 352 217.3L352 512L512 512C529.7 512 544 526.3 544 544C544 561.7 529.7 576 512 576L128 576C110.3 576 96 561.7 96 544C96 526.3 110.3 512 128 512L288 512L288 217.3C264.5 207 246.8 185.7 241.6 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L256 96C270.6 76.6 293.8 64 320 64C346.2 64 369.4 76.6 384 96zM439.6 384L584.4 384L512 259.8L439.6 384zM512 480C449.1 480 396.8 446 386 401.1C383.4 390.1 387 378.8 392.7 369L487.9 205.8C492.9 197.2 502.1 192 512 192C521.9 192 531.1 197.3 536.1 205.8L631.3 369C637 378.8 640.6 390.1 638 401.1C627.2 445.9 574.9 480 512 480zM126.8 259.8L54.4 384L199.3 384L126.8 259.8zM.9 401.1C-1.7 390.1 1.9 378.8 7.6 369L102.8 205.8C107.8 197.2 117 192 126.9 192C136.8 192 146 197.3 151 205.8L246.2 369C251.9 378.8 255.5 390.1 252.9 401.1C242.1 445.9 189.8 480 126.9 480C64 480 11.7 446 .9 401.1z"/></svg>
          <h3 class="text-xl sm:text-2xl font-bold text-[#131313]">
            Fair usage — built for real teams, not abuse
          </h3>
        </div>

        <!-- Description Text -->
        <p class="text-gray-500 mb-8 leading-relaxed max-w-2xl">
          To ensure quality service for all customers, Ration Do and Ration Scale include reasonable usage limits. These are not hard caps for normal teams — only protections against automated or abusive usage patterns.
        </p>

        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-gray-50">
                <th class="py-4 px-4 text-md font-semibold text-[#131313] rounded-l-lg">Feature</th>
                <th class="py-4 px-4 text-sm font-semibold text-[#131313] text-center">Ration Do</th>
                <th class="py-4 px-4 text-sm font-semibold text-[#131313] text-center rounded-r-lg">Ration Scale</th>
              </tr>
            </thead>
            <tbody class="text-md">
              <!-- Row 1 -->
              <tr class="border-b border-gray-200">
                <td class="py-4 px-4 text-gray-700 font-medium">Max meeting duration</td>
                <td class="py-4 px-4 text-gray-900 text-center">60 minutes</td>
                <td class="py-4 px-4 text-gray-900 text-center">120 minutes</td>
              </tr>
              <!-- Row 2 -->
              <tr class="border-b border-gray-200">
                <td class="py-4 px-4 text-gray-700 font-medium">Max participants per meeting</td>
                <td class="py-4 px-4 text-gray-900 text-center">25</td>
                <td class="py-4 px-4 text-gray-900 text-center">50</td>
              </tr>
              <!-- Row 3 -->
              <tr class="border-b border-gray-200">
                <td class="py-4 px-4 text-gray-700 font-medium">Concurrent meetings (soft limit)</td>
                <td class="py-4 px-4 text-gray-900 text-center">users ÷ 2</td>
                <td class="py-4 px-4 text-gray-900 text-center">users ÷ 1.5</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Footer Link -->
        <p class="mt-8 text-md text-gray-400">
          Need higher limits? 
          <a href="#" class="text-[#069] hover:text-blue-600 hover:underline font-medium">Contact sales</a>
          for custom capacity or dedicated infrastructure.
        </p>

      </div>

    </div>
  </section>
</template>

