<script setup>
import { ref } from 'vue';

const activeTab = ref('waitlist');
const formData = ref({
  fullName: '',
  email: '',
  companyName: '',
  companySize: '',
  industry: ''
});

const companySizes = [
  '1 - 5',
  '5 - 10',
  '10 - 50',
  '50 - 100',
  '100 - 500',
  '500+'
];

const handleSubmit = () => {
  if (!formData.value.fullName || !formData.value.email || !formData.value.companyName || !formData.value.companySize || !formData.value.industry) {
    alert('Please fill in all fields');
    return;
  }
  
  // Handle form submission
  console.log('Form submitted:', formData.value);
  alert('Thank you for joining our waitlist! We\'ll notify you once your spot is confirmed.');
  

  formData.value = {
    fullName: '',
    email: '',
    companyName: '',
    companySize: '',
    industry: ''
  };
};
</script>

<template>
  <div class="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
    <!-- Tabs -->
    <div class="flex gap-6 mb-6">
      <button 
        @click="activeTab = 'waitlist'"
        class="pb-1 font-semibold text-lg transition-colors relative"
        :class="activeTab === 'waitlist' ? 'text-[#131313]' : 'text-gray-400'"
      >
        Waitlist
        <div 
          v-if="activeTab === 'waitlist'" 
          class="absolute bottom-0 left-0 right-0 border-b-2 border-[#069]"
        ></div>
      </button>
      <button 
        @click="activeTab = 'feedback'"
        class="pb-1 font-semibold text-lg transition-colors relative"
        :class="activeTab === 'feedback' ? 'text-[#131313]' : 'text-gray-400'"
      >
        Feedback
        <div 
          v-if="activeTab === 'feedback'" 
          class="absolute bottom-0 left-0 right-0 border-b-2 border-[#069]"
        ></div>
      </button>
    </div>

    <!-- Waitlist Tab Content -->
    <div v-if="activeTab === 'waitlist'">
      <p class="text-[#131313] text-lg mb-6">
        Limited spots available. Secure your place now and help shape the final product
      </p>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <!-- Full Name and Email Row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="fullName" class="block text-[#131313] text-lg font-semibold mb-2">
              Full Name
            </label>
            <input
              id="fullName"
              v-model="formData.fullName"
              type="text"
              placeholder="John Doe"
              class="w-full text-[#616161] px-4 py-3 bg-[#F8FAFB] rounded border border-transparent focus:border-[#069] focus:outline-none 
              focus:text-[#131313] transition-colors"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-[#131313] text-lg font-semibold mb-2">
              Email Address
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="johndoe@gmail.com"
              class="w-full text-[#616161] px-4 py-3 bg-[#F8FAFB] rounded border border-transparent focus:border-[#069] focus:outline-none 
              focus:text-[#131313] transition-colors"
              required
            />
          </div>
        </div>

        <!-- Company Name and Company Size Row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="companyName" class="block text-[#131313] text-lg font-semibold mb-2">
              Company Name
            </label>
            <input
              id="companyName"
              v-model="formData.companyName"
              type="text"
              placeholder="ABC Limited"
              class="w-full text-[#616161] px-4 py-3 bg-[#F8FAFB] rounded border border-transparent focus:border-[#069] focus:outline-none 
              focus:text-[#131313] transition-colors"
              required
            />
          </div>
          <div>
            <label for="companySize" class="block text-[#131313] text-lg font-semibold mb-2">
              Company Size
            </label>
            <select
              id="companySize"
              v-model="formData.companySize"
              class="w-full text-[#616161] px-4 py-3 bg-[#F8FAFB] rounded border border-transparent focus:border-[#069] focus:outline-none 
              focus:text-[#131313] transition-colors"
              style="background-image: url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27'); background-repeat: no-repeat; background-position: right 1rem center; background-size: 1em;"
              required
            >
              <option value="" disabled>5 - 10</option>
              <option v-for="size in companySizes" :key="size" :value="size">
                {{ size }}
              </option>
            </select>
          </div>
        </div>

        <!-- Industry -->
        <div>
          <label for="industry" class="block text-[#131313] text-lg font-semibold mb-2">
            Industry
          </label>
          <input
            id="industry"
            v-model="formData.industry"
            type="text"
            placeholder="e.g Finance"
            class="w-full text-[#616161] px-4 py-3 bg-[#F8FAFB] rounded border border-transparent focus:border-[#069] focus:outline-none 
            focus:text-[#131313] transition-colors"
            required
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-[#069] hover:bg-[#058] text-white font-semibold py-3 rounded transition-colors duration-200"
        >
          Join the Waitlist
        </button>

        <p class="text-center text-[#131313] text-xl">
          We'll notify you once your spot is confirmed.
        </p>
      </form>
    </div>

    <!-- Feedback Tab Content -->
    <div v-if="activeTab === 'feedback'">
      <!-- <p class="text-[#131313] mb-6">
        We'd love to hear your thoughts and suggestions
      </p>
      
      <form @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <label for="feedbackName" class="block text-[#131313] font-semibold mb-2">
            Name (Optional)
          </label>
          <input
            id="feedbackName"
            type="text"
            placeholder="Your name"
            class="w-full px-4 py-3 bg-[#F5F5F5] rounded border border-transparent focus:border-[#069] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label for="feedbackEmail" class="block text-[#131313] font-semibold mb-2">
            Email (Optional)
          </label>
          <input
            id="feedbackEmail"
            type="email"
            placeholder="your.email@example.com"
            class="w-full px-4 py-3 bg-[#F5F5F5] rounded border border-transparent focus:border-[#069] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label for="feedbackMessage" class="block text-[#131313] font-semibold mb-2">
            Your Feedback
          </label>
          <textarea
            id="feedbackMessage"
            rows="6"
            placeholder="Share your thoughts, suggestions, or feature requests..."
            class="w-full px-4 py-3 bg-[#F5F5F5] rounded border border-transparent focus:border-[#069] focus:outline-none transition-colors resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-[#069] hover:bg-[#058] text-white font-semibold py-3 rounded transition-colors duration-200"
        >
          Submit Feedback
        </button>
      </form> -->
    </div>
  </div>
</template>