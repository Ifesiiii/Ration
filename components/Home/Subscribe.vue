<script setup>

</script>

<template>
    <div className="relative min-h-100 bg-linear-to-br from-slate-800 via-slate-900 to-teal-900 overflow-hidden">
      <!-- Decorative background elements(still workinng on it) -->
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-700/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-700/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <!-- Content -->
      <div className="relative z-10 flex flex-col items-center justify-center min-h-100 px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
          Join our Limited Testing Today
        </h1>
        
        <p className="text-lg md:text-xl text-[#E5E5E5] mb-8 max-w-2xl">
          Reach out to join our limited trial of Ration Messaging and Collaboration Platform.
        </p>
        
        <button className="px-6 py-3 bg-white text-[#069] font-semibold rounded-lg hover:bg-slate-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          Contact Us for beta testing
        </button>
      </div>
    </div>
</template>