<template>
  <Transition name="fade">
    <section class="container mx-auto">
      <button @click="goBack()" class="outline-none border bg-gray-200 text-black px-3 py-2 mt-6 rounded-md text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#747070"
          stroke-width="2" stroke-linecap="square" stroke-linejoin="bevel">
          <path d="M19 12H6M12 5l-7 7 7 7" />
        </svg>
      </button>

      <div v-if="$nuxt.isOffline" class="text-gray-500 text-base relative">
      </div>
      <main v-if="$nuxt.isOnline" class="md:w-9/12 rounded-md shadow-md border space-y-5 my-6">
        <div v-if="loading" class="border-green-500 p-6 my-6">
          <div class="animate-pulse flex space-y-6 flex-col">
            <div class="rounded-md bg-slate-300 h-5 w-full"></div>
            <div class="rounded-md bg-slate-300 h-5 w-full"></div>
            <div class="flex items-center space-x-3">
              <div class="rounded-md bg-slate-300 h-6 w-10"></div>
              <div class="rounded-md bg-slate-300 h-4 w-6/12"></div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="rounded-md bg-slate-300 h-10 w-10"></div>
              <div class="rounded-md bg-slate-300 h-10 w-10"></div>
              <div class="rounded-md bg-slate-300 h-10 w-10"></div>
            </div>
          </div>
        </div>

        <div class="py-6" v-else>
          <div class="flex items-center space-x-3 px-6 pb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="#557fe8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
              <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
            </svg> <span class="font-bold text-lg">Program Overview</span>
          </div>
          <hr />

          <div class="flex items-center space-x-1 py-10 px-6">
            <span class="text-sm font-medium text-gray-900 w-2/12">Program details</span>
            <span class="w-10/12 border border-red-500"></span>
          </div>
          <div class="mx-6">
            <div
              class="text-xs text-gray-800 flex items-center justify-between border p-3 shadow-sm rounded-md divide divide-x-2 space-x-3 mx-auto mb-6">
              <span class="text-gray-500 block">Theme</span>
              <span class="block text-left pl-3 text-justify">{{ programme.theme }}</span>
            </div>
          </div>

          <div class="px-6 space-y-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="text-xs text-gray-800  flex items-center justify-between border p-3 shadow-sm rounded-md"
              v-if="programme.programType === 'single'">
              <span class="text-gray-500 block">Title</span>
              <span class="block">{{ programme.title ?? 'N/A' }}</span>
            </div>

            <div class="text-xs text-gray-800  flex items-center justify-between border p-3 shadow-sm rounded-md">
              <span class="text-gray-500 block">Program Type</span>
              <span class="block">{{ programme.programType ?? 'N/A' }}</span>
            </div>

            <div class="text-xs text-gray-800  flex items-center justify-between border p-3 shadow-sm rounded-md">
              <span class="text-gray-500 block">Program Schedule</span>
              <span class="block">{{ programme.meetingType ?? 'N/A' }}</span>
            </div>


            <div class="text-xs text-gray-800  flex items-center justify-between border p-3 shadow-sm rounded-md">
              <span class="text-gray-500 block">Start date</span>
              <span class="block">{{ formattedStartDate ?? 'N/A' }}</span>
            </div>

            <div class="text-xs text-gray-800  flex items-center justify-between border p-3 shadow-sm rounded-md">
              <span class="text-gray-500 block">End date</span>
              <span class="block">{{ formattedEndDate ?? 'N/A' }}</span>
            </div>

            <div class="text-xs text-gray-800  flex items-center justify-between border p-3 shadow-sm rounded-md">
              <span class="text-gray-500 block">Duration</span>
              <span class="block">{{ programme.duration ? `${programme.duration} days` : 'N/A' }}</span>
            </div>

            <div class="text-xs text-gray-800  flex items-center justify-between border p-3 shadow-sm rounded-md">
              <span class="text-gray-500 block">Status</span>
              <span class="block"
                :class="[programme.status === 'completed' ? 'text-white bg-green-500 rounded-full px-2 py-1.5 text-xs' : programme.status === 'pending' ? 'text-white bg-orange-500 rounded-full px-2 py-1.5 text-xs' : programme.status === 'active' ? 'text-white bg-red-500 rounded-full px-2 py-1.5 text-xs' : '']">
                <svg class="inline pr-1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                  fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg> {{ programme.status ?? 'N/A' }}</span>
            </div>

            <div class="text-xs text-gray-800  flex items-center justify-between border p-3 shadow-sm rounded-md">
              <span class="text-gray-500 block">Nested programmes</span>
              <span class="block">{{ programme.nestedProgrammes ? 'Yes' : 'No' }}</span>
            </div>

            <p class="font-semibold text-xs text-gray-800">
              {{
                !programme.uploadedDocumentFiles.length ? "" : "Paper download"
              }}
            </p>

            <div class="text-xs text-gray-800  flex items-center justify-between border p-3 shadow-sm rounded-md">
              <section v-if="programme.uploadedDocumentFiles" class="grid grid-cols-6 md:grid-cols-10">
                <a :href="eachFile" class="" v-for="(eachFile, index) in programme.uploadedDocumentFiles" :key="index"
                  download>
                  <img src="@/assets/pdfIcon.svg" class="h-14 w-14" alt="" />
                </a>
              </section>
            </div>
          </div>

          <div class="px-6 mt-6 space-y-6" v-if="programme.programType === 'series'">
            <div>
              <button @click="showNested = !showNested"
                class="text-white rounded-full px-3 py-2.5 text-xs bg-green-500">{{
                  showNested ? 'Hide' : 'Show' }} neested programmes</button>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6" v-if="showNested">
              <div v-for="(item, index) in programme.nestedProgrammes" :key="index" class="border bg-white shadow-md rounded-md space-y-3 p-3">
                <p class="flex text-xs select-none flex-col">
                  <span class="text-gray-400 inline-block">Title</span>
                  <span class="text-gray-900 inline-block">{{ item.title ?? 'N/A' }}</span>
                </p>
                <p class="flex text-xs select-none flex-col"><span class="text-gray-400">Meeting
                    Type</span> <span class="text-gray-900">{{ item.meetingType ?? 'N/A'
                    }}</span></p>
                <p class="flex text-xs select-none flex-col"><span class="text-gray-400">Program
                    recording</span> <span title="Copy to clipboard" @click="copyText(item.uploadedVideoUrl)"
                    class="text-gray-900 text-green-600 cursor-pointer font-bold ">{{
                      item.uploadedVideoUrl ?? 'N/A' }}</span></p>
                <p class="flex text-xs select-none flex-col"><span class="text-gray-400">Live meeting
                    Url</span> <span @click="copyText(item.zoomMeetingUrl)"
                    class="text-gray-900 text-green-600 cursor-pointer font-bold " title="Copy to clipboard">{{
                      item.zoomMeetingUrl ?? 'N/A' }}</span></p>
                <p class="flex text-xs select-none flex-col"><span class="text-gray-400">Program
                    session Form</span> <span class="text-gray-900">{{
                      item.session_form ?? 'N/A' }}</span></p>
                <p class="flex text-xs select-none flex-col">
                  {{
                    !item.uploadedDocumentFiles.length ? "" : "Paper download"
                  }}
                </p>
                <section v-if="item.uploadedDocumentFiles" class="grid grid-cols-6 md:grid-cols-10">
                  <a :href="eachFile" class="" v-for="(eachFile, index) in item.uploadedDocumentFiles" :key="index"
                    download>
                    <img src="@/assets/pdfIcon.svg" class="h-14 w-14" alt="" />
                  </a>
                </section>
                <p class="flex justify-between items-center text-xs select-none"><span class="text-gray-400">Program
                    status</span> <span class="text-gray-900"
                    :class="[item.status === 'completed' ? 'text-white bg-green-500 rounded-full px-2 py-1.5 text-xs' : item.status === 'pending' ? 'text-white bg-orange-500 rounded-full px-2 py-1.5 text-xs' : item.status === 'active' ? 'text-white bg-red-500 rounded-full px-2 py-1.5 text-xs' : '']">
                    <svg class="inline pr-1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                      fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg> {{
                      item.status ?? 'N/A'
                    }}</span></p>
              </div>
            </div>
          </div>
          <!-- <div class="" v-if="programme.programType === 'single'">
            <p v-if="programme.title !== 'null'" class="text-white rounded-md bg-green-400 p-2">
              Title:
            </p>
            <h6 class="text-lg md:text-xl text-gray-900 lowercase pt-3">
              {{ programme.title }}
            </h6>
          </div>

          <h6 class="text-lg md:text-xl text-gray-900 lowercase pt-3">
            {{ programme.title }}
          </h6>

          <div class="mt-3">
            <p v-if="programme.theme !== 'null'" class="text-white rounded-md bg-green-400 p-2">
              Theme:
            </p>
            <p class="text-gray-900 text-sm md:text-base pt-3">
              {{ programme.theme === "null" ? "" : programme.theme }}
            </p>
          </div> -->
        </div>
        <!-- <div v-if="programme?.startDate !== 'null' && programme.endDate !== 'null'"
          :class="[programme.status === 'pending' ? 'hidden' : '']" class="flex items-center space-x-2 mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5bc747"
            stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="bevel">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <p class="text-sm text-gray-900 text-justify">
            {{ timeFrame }}
          </p>
        </div> -->
        <!--
        <div class="pt-4" v-if="programme?.uploadedVideoUrl !== 'null'">
          <video-player :src="programme?.uploadedVideoUrl" />
        </div> -->
      </main>
    </section>
  </Transition>
</template>

<script>
import VideoPlayer from "nuxt-video-player";
require("nuxt-video-player/src/assets/css/main.css");
export default {
  scrollToTop: true,
  data() {
    return {
      loading: true,
      showNested: false,
      programme: {},
    };
  },
  created() {
    this.fetchProgrammes();
  },
  methods: {
    exportToPDF() {
      html2pdf(document.getElementById("element-to-convert"));
    },
    async fetchProgrammes() {
      this.loading = true;
      try {
        let res = await this.$axios.get(
          `https://panafstrag.onrender.com/api/panAfrica/programmes/${this.$route.params.id}`
        );
        console.log(res, 'response');
        this.programme = res.data;
        this.loading = false;
      } catch (err) {
        this.$toast
          .error("Something went wrong, please try again.")
          .goAway(1500);
      } finally {
        this.loading = false;
      }
    },
    goBack() {
      this.$router.go(-1);
    },
    copyText(item) {
      window.navigator.clipboard.writeText(item).then(() => {
        this.$toastr.s('Youtube Url Copied!', 'Success')
      }).catch(() => {
        alert('somethig went wrong while copying text')
      })
    }
    // downloadFile(fileUrl) {
    //   axios({
    //     url: fileUrl,
    //     method: "GET",
    //     responseType: "blob",
    //   }).then((res) => {
    //     var FILE = window.URL.createObjectURL(new Blob([res.data]));

    //     var docUrl = document.createElement("x");
    //     docUrl.href = FILE;
    //     docUrl.setAttribute("download", "file.pdf");
    //     document.body.appendChild(docUrl);
    //     docUrl.click();
    //   });
    // },
  },
  computed: {
    timeFrame() {
      let startDay = this.$moment(this.programme.startDate)
        .format("YYYY-MM-Do")
        .split("-")[2];
      let endDay = this.$moment(this.programme.endDate)
        .format("YYYY-MM-Do")
        .split("-")[2];
      let month = this.$moment(this.programme.endDate)
        .format("YYYY-MMMM-Do")
        .split("-")[1];
      let year = this.$moment(this.programme.startDate)
        .format("YYYY-MM-DD")
        .split("-")[0];
      return `${startDay} to ${endDay}, ${month}, ${year}`;
    },
    formattedStartDate() {
      return new Date(this.programme?.startDate).toDateString()
    },
    formattedEndDate() {
      return new Date(this.programme?.endDate).toDateString()
    }
  },
};
</script>


<style scoped>
#app {
  margin-top: 60px;
}

.fade-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.fade-leave-to {
  transform: scale(0.8);
}
</style>
