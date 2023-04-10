<template>
  <Transition name="fade">
    <section class="container mx-auto">
      <button
        @click="goBack()"
        class="outline-none border bg-gray-200 text-black px-3 py-2 mt-6 rounded-md text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#747070"
          stroke-width="2"
          stroke-linecap="square"
          stroke-linejoin="bevel"
        >
          <path d="M19 12H6M12 5l-7 7 7 7" />
        </svg>
      </button>
      <main class="md:w-9/12 rounded-md shadow-md p-7 my-10 border space-y-5">
        <div v-if="loading">
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

        <div class="space-y-3" v-else>
          <div class="">
            <p
              v-if="archive.title !== 'null'"
              class="text-white rounded-md bg-green-400 p-2"
            >
              Title:
            </p>
            <h6 class="text-lg md:text-xl text-gray-900 lowercase pt-3">
              {{ archive.title }}
            </h6>
          </div>

          <div class="mt-3">
            <p
              v-if="archive.theme !== 'null'"
              class="text-white rounded-md bg-green-400 p-2"
            >
              Theme:
            </p>
            <p class="text-gray-900 text-sm md:text-base pt-3">
              {{ archive.theme === "null" ? "" : archive.theme }}
            </p>
          </div>
          <!-- <div v-if="archive.title" class="space-y-3">
            <h6 class="font-medium text-xl md:text-2xl text-gray-900 lowercase">
              {{ archive.title }}
            </h6>

            <p class="text-gray-900 text-sm font-light md:text-base">
              {{ archive.theme === "null" ? "" : archive.theme }}
            </p>
          </div> -->
          <div class="">
            <p class="text-gray-900 text-sm font-light md:text-base">
              {{ archive.description }}
            </p>
          </div>
          <div
            :class="[archive.status === 'pending' ? 'hidden' : '']"
            class="flex items-center space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#443d3d"
              stroke-width="1.5"
              stroke-linecap="butt"
              stroke-linejoin="bevel"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <p class="text-md text-gray-900 text-justify">
              {{ timeFrame }}
            </p>
          </div>
          <!-- {{archive.uploadedVideoUrl}}  -->
          <!-- <lite-youtube :videoid="videoUrl"></lite-youtube> -->
          <div class="pt-4" v-if="archive?.uploadedVideoUrl !== ''">
            <video-player :src="archive?.uploadedVideoUrl" />
          </div>
          <!-- <video-player :src="archive.uploadedVideoUrl" /> -->
          <!--
          <h1
            v-if="archive.uploadedDocumentFiles"
            class="font-medium text-lg pt-3"
          >
            {{ !archive.uploadedDocumentFiles.length ? "" : "Paper download" }}
          </h1> -->
          <p class="font-medium text-base pt-3">
            {{ !archive.uploadedDocumentFiles.length ? "" : "Paper download" }}
          </p>

          <section
            v-if="archive.uploadedDocumentFiles"
            class="grid grid-cols-6 md:grid-cols-10"
          >
            <a
              :href="eachFile"
              class=""
              v-for="(eachFile, index) in archive.uploadedDocumentFiles"
              :key="index"
              download
            >
              <img src="@/assets/pdfIcon.svg" class="h-16 w-16" />
            </a>
          </section>

          <!-- <section class="grid grid-cols-6 md:grid-cols-10">
            <a
              :href="eachFile"
              class=""
              v-for="(eachFile, index) in archive.uploadedDocumentFiles"
              :key="index"
            >
              <svg
                class="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#443d3d"
                stroke-width="1.5"
                stroke-linecap="butt"
                stroke-linejoin="bevel"
              >
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
                />
                <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
              </svg>
            </a>
          </section> -->
        </div>
      </main>
    </section>
  </Transition>
</template>

<script>
import VideoPlayer from "nuxt-video-player";
require("nuxt-video-player/src/assets/css/main.css");
export default {
  scrollToTop: true,
  components: {
    VideoPlayer,
  },
  data() {
    return {
      loading: true,
      archive: {},
    };
  },
  created() {
    this.fetchArchives();
  },
  methods: {
    async fetchArchives() {
      this.loading = true;
      try {
        let res = await this.$axios.get(
          `https://panafstrag.onrender.com/api/panAfrica/programmes/${this.$route.params.id}`
        );
        this.archive = res.data;
      } catch (err) {
        this.$toast
          .error("Something went wrong, please try again.")
          .goAway(1500);
      } finally {
        this.loading = false;
      }
    },
  },
  computed: {
    videoUrl() {
      return this.archive?.uploadedVideoUrl?.split("=")[1];
    },
    goBack() {
      this.$router.go(-1);
    },
    timeFrame() {
      let startDay = this.$moment(this.archive?.startDate)
        .format("YYYY-MM-Do")
        .split("-")[2];
      let endDay = this.$moment(this.archive?.endDate)
        .format("YYYY-MM-Do")
        .split("-")[2];
      let year = this.$moment(this.archive?.startDate)
        .format("YYYY-MM-DD")
        .split("-")[0];
      return `${startDay} to ${endDay}, ${year}`;
    },
  },
};
</script>

<style scoped>
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
