<script setup>
import { ref, nextTick, computed } from 'vue';

const isOpen        = ref(false);
const showDropdown  = ref(false);
const inputText     = ref('');
const messagesEl    = ref(null);
const fileInput     = ref(null);
const isLoading     = ref(false);
const selectedFiles = ref([]); // { file, name, size, type, previewUrl }

const GREETING = "Got any questions? I'm happy to help";

const messages = ref([{ role: 'assistant', content: GREETING }]);

/* ── helpers ── */
const scrollToBottom = async () => {
  await nextTick();
  if (messagesEl.value) messagesEl.value.scrollTop = messagesEl.value.scrollHeight;
};

const formatFileSize = (bytes) => {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
};

const isImage = (type) => type.startsWith('image/');

/* ── toggle / close ── */
const toggleChat = () => {
  isOpen.value = !isOpen.value;
  showDropdown.value = false;
};

const closeChat = () => {
  isOpen.value = false;
  showDropdown.value = false;
};

/* ── dropdown actions ── */
const startNewChat = () => {
  messages.value = [{ role: 'assistant', content: GREETING }];
  selectedFiles.value = [];
  showDropdown.value = false;
};

const endChat = () => {
  messages.value = [{ role: 'assistant', content: GREETING }];
  selectedFiles.value = [];
  inputText.value = '';
  closeChat();
};

/* ── file handling ── */
const handleFileChange = (e) => {
  const files = Array.from(e.target.files);
  files.forEach((file) => {
    const entry = {
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      previewUrl: null,
    };
    if (isImage(file.type)) {
      const reader = new FileReader();
      reader.onload = (ev) => { entry.previewUrl = ev.target.result; };
      reader.readAsDataURL(file);
    }
    selectedFiles.value.push(entry);
  });
  // Reset so same file can be re-selected
  e.target.value = '';
};

const removeFile = (index) => {
  selectedFiles.value.splice(index, 1);
};

const canSend = computed(() => inputText.value.trim() || selectedFiles.value.length > 0);

/* ── send message ── */
const sendMessage = async () => {
  if (!canSend.value || isLoading.value) return;

  const text = inputText.value.trim();
  const attachments = selectedFiles.value.map(f => ({
    name: f.name,
    size: f.size,
    type: f.type,
    previewUrl: f.previewUrl,
  }));

  inputText.value = '';
  selectedFiles.value = [];

  messages.value.push({ role: 'user', content: text, attachments });
  await scrollToBottom();
};

const handleKeydown = (e) => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
};
</script>

<template>
  <div class="fixed bottom-10 right-6 z-50 flex flex-col items-end">

    <!-- ── Chat Window ── -->
    <Transition name="chat-pop">
      <div
        v-if="isOpen"
        class="mb-3 w-90 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        style="min-height: 350px; max-height: 70vh;"
      >
        <!-- Header -->
        <div class="bg-[#003854] text-white px-4 py-3 flex items-center gap-3 relative shrink-0">
          <!-- Logo -->
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46211 3.0025C7.5051 3.0025 8.39344 3.66479 8.72873 4.59025C9.06031 5.26612 9.82988 5.61209 10.5128 5.23276C10.545 5.21052 10.5784 5.19075 10.6118 5.17222L10.6131 5.17098C10.8184 5.05607 11.056 4.99058 11.3071 4.99058C12.0953 4.99058 12.7337 5.62815 12.7337 6.41523C12.7337 7.20231 12.0953 7.83987 11.3071 7.83987C10.7442 7.83987 10.2567 7.51368 10.0254 7.04044V7.03921C10.0167 7.02315 10.0093 7.00585 10.0019 6.98979C9.77544 6.57957 8.72255 6.38187 8.47757 6.7266C8.04701 7.38023 7.30591 7.81269 6.46211 7.81269C5.13208 7.81269 4.05444 6.73649 4.05444 5.40822C4.05444 4.07995 5.13208 3.0025 6.46211 3.0025ZM3.80575 10.148C4.38973 10.148 4.86236 9.67474 4.86236 9.09277C4.86236 8.50957 4.38973 8.03757 3.80575 8.03757C3.22178 8.03757 2.74915 8.50957 2.74915 9.09277C2.74915 9.67474 3.22178 10.148 3.80575 10.148ZM3.25766 19.0023C3.84163 19.0023 4.31426 18.5303 4.31426 17.9471C4.31426 17.3651 3.84163 16.8919 3.25766 16.8919C2.67368 16.8919 2.20105 17.3651 2.20105 17.9471C2.20105 18.5303 2.67368 19.0023 3.25766 19.0023ZM9.02939 25.5225C9.61213 25.5225 10.086 25.0505 10.086 24.4673C10.086 23.8854 9.61213 23.4121 9.02939 23.4121C8.44541 23.4121 7.97278 23.8854 7.97278 24.4673C7.97278 25.0505 8.44541 25.5225 9.02939 25.5225ZM17.6059 25.8611C18.1887 25.8611 18.6625 25.3891 18.6625 24.8059C18.6625 24.2227 18.1887 23.7507 17.6059 23.7507C17.022 23.7507 16.5493 24.2227 16.5493 24.8059C16.5493 25.3891 17.022 25.8611 17.6059 25.8611ZM24.0384 20.1613C24.6211 20.1613 25.095 19.6893 25.095 19.1061C25.095 18.5241 24.6211 18.0509 24.0384 18.0509C23.4544 18.0509 22.9818 18.5241 22.9818 19.1061C22.9818 19.6893 23.4544 20.1613 24.0384 20.1613ZM24.9886 11.758C25.5725 11.758 26.0464 11.2847 26.0464 10.7028C26.0464 10.1196 25.5725 9.64756 24.9886 9.64756C24.4058 9.64756 23.9332 10.1196 23.9332 10.7028C23.9332 11.2847 24.4058 11.758 24.9886 11.758ZM19.2663 4.97946C19.8491 4.97946 20.3229 4.50747 20.3229 3.92426C20.3229 3.34106 19.8491 2.86906 19.2663 2.86906C18.6823 2.86906 18.2097 3.34106 18.2097 3.92426C18.2097 4.50747 18.6823 4.97946 19.2663 4.97946ZM16.5258 0.704291C17.2632 1.44071 17.4228 2.53545 17.0034 3.42631C16.7597 4.13802 17.0591 4.92757 17.8113 5.14133C17.8497 5.14874 17.8868 5.15739 17.9239 5.16851H17.9251C18.1516 5.23276 18.3656 5.35385 18.5438 5.53178C19.1005 6.0878 19.1005 6.98979 18.5438 7.54581C17.987 8.10182 17.0838 8.10182 16.5271 7.54581C16.1287 7.14794 16.0148 6.57339 16.1868 6.07544V6.07421C16.193 6.05691 16.1992 6.03961 16.2054 6.02231C16.3353 5.57379 15.7315 4.6891 15.3133 4.75953H15.3146C14.5462 4.91892 13.7161 4.70145 13.1197 4.10589C12.1794 3.16684 12.1794 1.64335 13.1197 0.704291C14.06 -0.234764 15.5855 -0.234764 16.5258 0.704291ZM25.3684 6.44118C25.3684 7.48279 24.7052 8.36995 23.7785 8.70356C23.1018 9.0347 22.7553 9.80448 23.1352 10.4865C23.1574 10.5187 23.1772 10.5508 23.1958 10.5854L23.197 10.5866C23.3121 10.7917 23.3764 11.0277 23.3777 11.2798C23.3777 12.0669 22.738 12.7044 21.9511 12.7044C21.163 12.7044 20.5246 12.0669 20.5246 11.2798C20.5246 10.7176 20.8512 10.2308 21.3251 9.9997L21.3263 9.99847C21.3424 9.99105 21.3585 9.98364 21.3758 9.97623C21.7866 9.75011 21.9845 8.69738 21.6393 8.45397C20.9836 8.02398 20.5506 7.28262 20.5506 6.44118C20.5506 5.11291 21.6294 4.0367 22.9595 4.0367C24.2895 4.0367 25.3684 5.11291 25.3684 6.44118ZM27.2948 16.6126C26.5574 17.349 25.4612 17.5072 24.5691 17.0896C23.8565 16.8462 23.0659 17.1452 22.8518 17.8964C22.8444 17.9335 22.8358 17.9718 22.8246 18.0089V18.0101C22.7603 18.2362 22.639 18.45 22.4609 18.6279C21.9041 19.1839 21.0009 19.1839 20.4442 18.6279C19.8874 18.0719 19.8874 17.1699 20.4442 16.6126C20.8426 16.2148 21.4179 16.1023 21.9165 16.2728L21.9177 16.2741C21.935 16.279 21.9524 16.2852 21.9685 16.2926C22.42 16.4223 23.3047 15.8181 23.2341 15.4017C23.0745 14.6357 23.2923 13.8053 23.8886 13.211C24.829 12.2707 26.3545 12.2707 27.2948 13.211C28.2351 14.1501 28.2351 15.6723 27.2948 16.6126ZM21.7346 25.2754C20.6929 25.2754 19.8045 24.6144 19.4692 23.6877C19.1376 23.013 18.3681 22.6658 17.6851 23.0464C17.653 23.0674 17.6195 23.0884 17.5861 23.1069H17.5849C17.3795 23.2219 17.142 23.2873 16.8908 23.2873C16.1027 23.2873 15.4643 22.6498 15.4643 21.8627C15.4643 21.0756 16.1027 20.438 16.8908 20.438C17.4538 20.438 17.9412 20.7642 18.1726 21.2387C18.1813 21.256 18.1887 21.2721 18.1961 21.2881C18.4225 21.6984 19.4754 21.8973 19.7204 21.5513V21.5526C20.1509 20.8977 20.892 20.4652 21.7346 20.4652C23.0659 20.4652 24.1435 21.5414 24.1435 22.8709C24.1435 24.1992 23.0659 25.2754 21.7346 25.2754ZM11.6004 27.5242C10.863 26.7878 10.7034 25.693 11.1228 24.8022C11.3665 24.0905 11.0671 23.3009 10.3149 23.0872C10.2765 23.0798 10.2394 23.0711 10.2023 23.0612L10.2011 23.06C9.97464 22.9957 9.7606 22.8746 9.58243 22.6967C9.02567 22.1407 9.02567 21.2387 9.58243 20.6827C10.1392 20.1267 11.0424 20.1267 11.5991 20.6827C11.9975 21.0806 12.1114 21.6551 11.9394 22.1543C11.9332 22.1716 11.927 22.1889 11.9208 22.2062C11.7909 22.6559 12.3947 23.5394 12.8129 23.469H12.8116C13.58 23.3096 14.4101 23.5283 15.0065 24.1226C15.9468 25.0617 15.9468 26.5852 15.0065 27.5242C14.0662 28.4633 12.5407 28.4633 11.6004 27.5242ZM2.8902 21.8392C2.8902 20.7976 3.55336 19.9117 4.48005 19.5768C5.15558 19.2457 5.50325 18.4759 5.12218 17.7939C5.10114 17.7617 5.08135 17.7296 5.06155 17.695V17.6938C4.94649 17.4887 4.88092 17.2527 4.88092 17.0006C4.88092 16.2135 5.51933 15.576 6.30745 15.576C7.09558 15.576 7.73399 16.2135 7.73399 17.0006C7.73399 17.5628 7.40736 18.0496 6.9335 18.2807L6.93226 18.2819C6.91618 18.2893 6.89886 18.2968 6.88277 18.3042C6.47201 18.5303 6.27405 19.583 6.61924 19.8277H6.618C7.27374 20.2564 7.70677 20.9978 7.70677 21.8392C7.70677 23.1675 6.62914 24.2437 5.2991 24.2437C3.96907 24.2437 2.8902 23.1675 2.8902 21.8392ZM0.705227 11.8222C1.44262 11.0858 2.53882 10.9264 3.43087 11.3453V11.344C4.14352 11.5874 4.93412 11.2884 5.14816 10.5384C5.15558 10.5001 5.16424 10.4631 5.17414 10.426L5.17538 10.4235V10.4247C5.23848 10.1974 5.35973 9.98488 5.53913 9.80695C6.09589 9.24969 6.99907 9.24969 7.55583 9.80571C8.11259 10.363 8.11259 11.265 7.55583 11.821C7.15744 12.2188 6.58212 12.3325 6.08351 12.1608H6.08228C6.06496 12.1546 6.04763 12.1484 6.03031 12.1422C5.57996 12.0113 4.69533 12.6155 4.76585 13.0319C4.92546 13.7992 4.7077 14.6283 4.11135 15.2238C3.17105 16.1629 1.64553 16.1629 0.705227 15.2238C-0.235076 14.2835 -0.235076 12.7613 0.705227 11.8222ZM10.6106 4.70516C11.1933 4.70516 11.6672 4.23316 11.6672 3.64996C11.6672 3.06799 11.1933 2.59476 10.6106 2.59476C10.0266 2.59476 9.55398 3.06799 9.55398 3.64996C9.55398 4.23316 10.0266 4.70516 10.6106 4.70516Z" fill="white"/>
        </svg>

          <span class="font-semibold font-start flex-1">Chat with support</span>

          <!-- Three dots -->
          <button @click="showDropdown = !showDropdown" class=" hover:text-gray-300 transition-colors p-1 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 10.7812C10.4315 10.7812 10.7812 10.4315 10.7812 10C10.7812 9.56853 10.4315 9.21875 10 9.21875C9.56853 9.21875 9.21875 9.56853 9.21875 10C9.21875 10.4315 9.56853 10.7812 10 10.7812Z" fill="white"/>
            <path d="M5 10.7812C5.43147 10.7812 5.78125 10.4315 5.78125 10C5.78125 9.56853 5.43147 9.21875 5 9.21875C4.56853 9.21875 4.21875 9.56853 4.21875 10C4.21875 10.4315 4.56853 10.7812 5 10.7812Z" fill="white"/>
            <path d="M15 10.7812C15.4315 10.7812 15.7812 10.4315 15.7812 10C15.7812 9.56853 15.4315 9.21875 15 9.21875C14.5685 9.21875 14.2188 9.56853 14.2188 10C14.2188 10.4315 14.5685 10.7812 15 10.7812Z" fill="white"/>
          </svg>
          </button>

          <!-- Close -->
          <button @click="closeChat" class="text-white hover:text-gray-300 transition-colors p-1 rounded">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <!-- Dropdown -->
          <Transition name="dropdown">
            <div
              v-if="showDropdown"
              class="absolute top-full right-4 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50 w-44"
              @click.stop
            >
              <button
                @click="startNewChat"
                class="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#131313] hover:bg-gray-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <g clip-path="url(#clip0_28706_23220)">
                  <path d="M10.5 2.25V3.75H3V13.7888L4.32211 12.75H15V7.5H16.5V13.5C16.5 13.9142 16.1642 14.25 15.75 14.25H4.84091L1.5 16.875V3C1.5 2.58579 1.83579 2.25 2.25 2.25H10.5ZM14.25 2.25V0H15.75V2.25H18V3.75H15.75V6H14.25V3.75H12V2.25H14.25Z" fill="black"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_28706_23220">
                  <rect width="18" height="18" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                Start new chat
              </button>
              <button
                @click="endChat"
                class="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#131313] hover:bg-gray-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M14.0625 3.9375L3.9375 14.0625" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.0625 14.0625L3.9375 3.9375" stroke="#131313" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                End chat
              </button>
            </div>
          </Transition>
        </div>

        <!-- Messages -->
        <div ref="messagesEl" class="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-white">
          <template v-for="(msg, i) in messages" :key="i">
            <!-- Assistant -->
            <div v-if="msg.role === 'assistant'" class="flex justify-start">
              <div class="bg-gray-100 text-[#131313] text-sm rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%] leading-relaxed">
                {{ msg.content }}
              </div>
            </div>
            <!-- User -->
            <div v-else class="flex justify-end">
              <div class="flex flex-col items-end gap-1.5 max-w-[80%]">
                <!-- Attachments -->
                <template v-if="msg.attachments && msg.attachments.length">
                  <div
                    v-for="(att, ai) in msg.attachments"
                    :key="ai"
                    class="rounded-xl overflow-hidden border border-gray-200"
                  >
                    <!-- Image preview -->
                    <img
                      v-if="att.previewUrl"
                      :src="att.previewUrl"
                      :alt="att.name"
                      class="max-w-[200px] max-h-[160px] object-cover block"
                    />
                    <!-- Non-image file chip -->
                    <div v-else class="bg-[#F8F8F8] flex items-center gap-2 px-3 py-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#003854" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                      </svg>
                      <div>
                        <p class="text-xs font-medium text-[#131313] leading-tight truncate max-w-[130px]">{{ att.name }}</p>
                        <p class="text-[10px] text-gray-400">{{ formatFileSize(att.size) }}</p>
                      </div>
                    </div>
                  </div>
                </template>
                <!-- Text bubble -->
                <div
                  v-if="msg.content"
                  class="bg-[#003854] text-white text-sm rounded-lg rounded-tr-sm px-4 py-2.5 leading-relaxed"
                >
                  {{ msg.content }}
                </div>
              </div>
            </div>
          </template>

          <!-- Typing indicator -->
        </div>

        <!-- Input -->
        <div class="border-t border-gray-100 shrink-0">

          <!-- Staged file previews -->
          <div
            v-if="selectedFiles.length"
            class="flex flex-wrap gap-2 px-3 pt-3"
          >
            <div
              v-for="(f, i) in selectedFiles"
              :key="i"
              class="relative group flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-2 py-1.5 text-xs text-[#131313]"
            >
              <!-- Image thumbnail -->
              <img
                v-if="f.previewUrl"
                :src="f.previewUrl"
                class="w-8 h-8 rounded-lg object-cover shrink-0"
              />
              <!-- File icon -->
              <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#003854" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
              </svg>
              <div class="max-w-[90px]">
                <p class="truncate font-medium leading-tight">{{ f.name }}</p>
                <p class="text-gray-400 text-[10px]">{{ formatFileSize(f.size) }}</p>
              </div>
              <!-- Remove button -->
              <button
                @click="removeFile(i)"
                class="ml-0.5 text-gray-300 hover:text-red-400 transition-colors leading-none"
                aria-label="Remove file"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="flex items-center gap-2 px-3 py-3">
            <input
              v-model="inputText"
              @keydown="handleKeydown"
              type="text"
              placeholder="Ask me anything..."
              :disabled="isLoading"
              class="flex-1 text-sm text-[#131313] placeholder-[#131313] outline-none bg-[#F8F8F8]"
            />
            <!-- Paperclip -->
            <input
              ref="fileInput"
              type="file"
              multiple
              class="hidden"
              @change="handleFileChange"
            />
            <button
              @click="fileInput.click()"
              :class="[
                'transition-colors p-1',
                selectedFiles.length ? 'text-[#003854]' : 'text-gray-400 hover:text-gray-600'
              ]"
              :title="selectedFiles.length ? `${selectedFiles.length} file(s) attached` : 'Attach a file'"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
              </svg>
            </button>
            <!-- Send -->
            <button
              @click="sendMessage"
              :disabled="!canSend"
              class="bg-[#003854] hover:bg-[#0A5C7A] disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg p-2 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ── Toggle Bubble ── -->
    <button
      @click="toggleChat"
      class="w-12 h-12 bg-[#0A5C7A] hover:bg-[#003854] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200"
    >
      <Transition name="icon-swap" mode="out-in">
        <!-- Chevron down when open -->
        <svg v-if="isOpen" key="close" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
        
        <!-- Chat icon when closed -->
        <svg v-else key="open" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34" fill="none">
        <path d="M23.8001 26.9167L19.8334 31.875L15.8667 26.9167H8.50008C7.71769 26.9167 7.08342 26.2825 7.08342 25.5V10.062C7.08342 9.2796 7.71769 8.64533 8.50008 8.64533H31.1667C31.9492 8.64533 32.5834 9.2796 32.5834 10.062V25.5C32.5834 26.2825 31.9492 26.9167 31.1667 26.9167H23.8001ZM2.83341 2.83337H26.9167V5.66671H4.25008V21.25H1.41675V4.25004C1.41675 3.46764 2.05102 2.83337 2.83341 2.83337Z" fill="white"/>
      </svg>
      </Transition>
    </button>
  </div>
</template>

<style scoped>
/* Chat window pop */
.chat-pop-enter-active { animation: popIn 0.2s cubic-bezier(0.34, 1.56, 0.64, 1); }
.chat-pop-leave-active { animation: popIn 0.15s ease-in reverse; }
@keyframes popIn {
  from { opacity: 0; transform: scale(0.9) translateY(8px); transform-origin: bottom right; }
  to   { opacity: 1; transform: scale(1) translateY(0);    transform-origin: bottom right; }
}

/* Dropdown */
.dropdown-enter-active { animation: dropIn 0.15s ease-out; }
.dropdown-leave-active { animation: dropIn 0.1s ease-in reverse; }
@keyframes dropIn {
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Icon swap */
.icon-swap-enter-active, .icon-swap-leave-active { transition: opacity 0.15s, transform 0.15s; }
.icon-swap-enter-from { opacity: 0; transform: rotate(-90deg) scale(0.7); }
.icon-swap-leave-to   { opacity: 0; transform: rotate(90deg) scale(0.7); }
</style>