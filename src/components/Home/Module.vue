<script setup>
//
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-30">
        <!-- Optional Modules Section -->
        <div class="text-center mb-12">
            <h2 class="text-[48px] font-bold text-[#131313] mb-3">Optional Modules</h2>
            <p class="text-[#131313] text-xl max-w-3xl mx-auto">Add functionality as needed. Each module integrates seamlessly with Ration Core.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
            <!-- Module 1: Storage -->
            <div class="bg-white rounded-xl p-8 shadow-sm border border-[#0A39B01F] hover:shadow-md transition-shadow duration-300">
                <div class="w-12 h-12 bg-[#F5F9FB] rounded-lg flex items-center justify-center mb-6 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M24.1499 7.7627H3.4499C2.97356 7.7627 2.5874 8.14885 2.5874 8.6252V18.9752C2.5874 19.4515 2.97356 19.8377 3.4499 19.8377H24.1499C24.6262 19.8377 25.0124 19.4515 25.0124 18.9752V8.6252C25.0124 8.14885 24.6262 7.7627 24.1499 7.7627Z" stroke="#006699" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.2688 15.0938C20.9834 15.0938 21.5626 14.5146 21.5626 13.8001C21.5626 13.0856 20.9834 12.5063 20.2688 12.5063C19.5543 12.5063 18.9751 13.0856 18.9751 13.8001C18.9751 14.5146 19.5543 15.0938 20.2688 15.0938Z" fill="#006699"/>
                    </svg>
                </div>
                <h3 class="text-[28px] font-bold text-[#131313] mb-2">Ration Storage</h3>
                <p class="text-[#131313] mb-6 text-md leading-relaxed">Scalable storage for files, attachments, and organisational data.</p>
                
                <div class="space-y-3">
                    <h4 class="text-[#131313] text-md">Includes:</h4>
                    <ul class="space-y-2.5">
                        <li class="flex items-center gap-2.5 text-[#131313]">
                            <svg class="w-4 h-4 text-[#006699] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Unlimited file storage
                        </li>
                        <li class="flex items-center gap-2.5 text-[#131313]">
                            <svg class="w-4 h-4 text-[#006699] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Secure attachment handling
                        </li>
                        <li class="flex items-center gap-2.5 text-[#131313]">
                            <svg class="w-4 h-4 text-[#006699] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Version history & recovery
                        </li>
                        <li class="flex items-center gap-2.5 text-[#131313]">
                            <svg class="w-4 h-4 text-[#006699] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Advanced search capabilities
                        </li>
                        <li class="flex items-center gap-2.5 text-[#131313]">
                            <svg class="w-4 h-4 text-[#006699] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Team folder organization
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Module 2: Workflow -->
            <div class="bg-white rounded-xl p-8 shadow-sm border border-[#0A39B01F] hover:shadow-md transition-shadow duration-300">
                <div class="w-12 h-12 bg-[#F5F9FB] rounded-lg flex items-center justify-center mb-6 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M4.3126 24.1501C5.74163 24.1501 6.9001 22.9916 6.9001 21.5626C6.9001 20.1336 5.74163 18.9751 4.3126 18.9751C2.88356 18.9751 1.7251 20.1336 1.7251 21.5626C1.7251 22.9916 2.88356 24.1501 4.3126 24.1501Z" stroke="#006699" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.35 12.9377C11.779 12.9377 12.9375 11.7792 12.9375 10.3502C12.9375 8.92116 11.779 7.7627 10.35 7.7627C8.92091 7.7627 7.76245 8.92116 7.76245 10.3502C7.76245 11.7792 8.92091 12.9377 10.35 12.9377Z" stroke="#006699" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.2501 19.8376C18.6791 19.8376 19.8376 18.6791 19.8376 17.2501C19.8376 15.8211 18.6791 14.6626 17.2501 14.6626C15.8211 14.6626 14.6626 15.8211 14.6626 17.2501C14.6626 18.6791 15.8211 19.8376 17.2501 19.8376Z" stroke="#006699" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23.2875 8.6252C24.7165 8.6252 25.875 7.46673 25.875 6.0377C25.875 4.60866 24.7165 3.4502 23.2875 3.4502C21.8584 3.4502 20.7 4.60866 20.7 6.0377C20.7 7.46673 21.8584 8.6252 23.2875 8.6252Z" stroke="#006699" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.12088 12.625L5.5415 19.2878" stroke="#006699" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.4172 15.417L12.1829 12.1826" stroke="#006699" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.0584 8.3125L18.479 14.9753" stroke="#006699" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h3 class="text-[28px] font-bold text-[#131313] mb-2">Ration Workflow</h3>
                <p class="text-[#131313] mb-6 text-md leading-relaxed">Tasks, approvals, and structured processes beyond chat.</p>
                
                <div class="space-y-3">
                    <h4 class="text-[#131313] text-md">Includes:</h4>
                    <ul class="space-y-2.5">
                        <li class="flex items-center gap-2.5 text-[#131313]">
                            <svg class="w-4 h-4 text-[#006699] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Task management & tracking
                        </li>
                        <li class="flex items-center gap-2.5 text-[#!31313]">
                            <svg class="w-4 h-4 text-[#006699] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Approval workflows
                        </li>
                        <li class="flex items-center gap-2.5 text-[#131313]">
                            <svg class="w-4 h-4 text-[#006699] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Process automation
                        </li>
                        <li class="flex items-center gap-2.5 text-[#!31313]">
                            <svg class="w-4 h-4 text-[#006699] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Deadline reminders
                        </li>
                        <li class="flex items-center gap-2.5 text-[#131313]">
                            <svg class="w-4 h-4 text-[#006699] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Progress reporting
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Module 3: Communication -->
            <div class="bg-white rounded-xl p-8 shadow-sm border border-[#0A39B01F] hover:shadow-md transition-shadow duration-300">
                <div class="w-12 h-12 bg-[#F5F9FB] rounded-lg flex items-center justify-center mb-6 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M2.58748 6.46875H16.3875C17.3025 6.46875 18.18 6.83223 18.827 7.47923C19.474 8.12623 19.8375 9.00375 19.8375 9.91875V20.2687C19.8375 20.4975 19.7466 20.7169 19.5849 20.8786C19.4231 21.0404 19.2037 21.1312 18.975 21.1312H5.17498C4.25998 21.1312 3.38246 20.7678 2.73546 20.1208C2.08846 19.4738 1.72498 18.5962 1.72498 17.6812V7.33125C1.72498 7.1025 1.81585 6.88312 1.9776 6.72137C2.13935 6.55962 2.35873 6.46875 2.58748 6.46875V6.46875Z" stroke="#006699" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.8375 12.075L25.875 8.625V18.975L19.8375 15.525" stroke="#006699" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h3 class="text-[28px] font-bold text-[#131313] mb-2">Ration Communication</h3>
                <p class="text-[#131313] mb-6 leading-relaxed">Voice, video, and conferencing.</p>
                
                <div class="space-y-3">
                    <h4 class="text-[#131313] text-md">Includes:</h4>
                    <ul class="space-y-2.5">
                        <li class="flex items-center gap-2.5 text-[#131313]">
                            <svg class="w-4 h-4 text-[#006699] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            HD video conferencing
                        </li>
                        <li class="flex items-center gap-2.5 text-[#131313]">
                            <svg class="w-4 h-4 text-[#006699] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Voice calls & channels
                        </li>
                        <li class="flex items-center gap-2.5 text-[#131313]">
                            <svg class="w-4 h-4 text-[#006699] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Screen sharing
                        </li>
                        <li class="flex items-center gap-2.5 text-[#!31313]">
                            <svg class="w-4 h-4 text-[#006699] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Meeting scheduling
                        </li>
                        <li class="flex items-center gap-2.5 text-[#131313]">
                            <svg class="w-4 h-4 text-[#006699] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            Recording & playback
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>