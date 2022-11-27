<template>
  <section class="container mx-auto">
    <main
      class="
        md:ml-6 md:w-9/12
        rounded-md
        shadow-md
        p-6
        my-10
        hover:shadow-green-300
        space-y-5
      "
    >
      <div class="">
        <h2 class="font-medium text-xl md:text-2xl text-gray-900 lowercase">
          {{ programme.title }}
        </h2>
      </div>
      <div class="">
        <p class="text-gray-900 text-sm font-light md:text-base">
          {{ programme.theme }}
        </p>
      </div>
      <div class="flex items-center space-x-2">
        <svg
          v-if="programme.startToEndDate"
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
          {{ programme.startToEndDate }}
        </p>
      </div>

      <h1
        v-if="programme.uploadedDocumentFiles"
        class="font-medium text-lg pt-3"
      >
        Conference Archives
      </h1>
      <div v-else>
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
      <section class="grid grid-cols-6 md:grid-cols-10">
        <div
          class=""
          v-for="(eachFile, index) in programme.uploadedDocumentFiles"
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
        </div>
      </section>
      <div v-if="program?.uploadedVideoUrl">
        {{ program?.uploadedVideoUrl }}
      </div>
    </main>
  </section>
</template>

<script>
export default {
  scrollToTop: true,
  loading: false,
  data() {
    return {
      programme: {},
    };
  },
  created() {
    this.fetchProgrammes();
  },
  methods: {
    async fetchProgrammes() {
      let res = await this.$axios.get(
        `https://panafrica-website.herokuapp.com/api/panAfrica/programmes/${this.$route.params.id}`
      );
      this.programme = res.data;
    },
  },
};
</script>
