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
        ring-1 ring-gray-50
        space-y-5
      "
    >
      <div v-if="archive.title" class="">
        <h2 class="font-medium text-xl md:text-2xl text-gray-900 lowercase">
          {{ archive.title }}
        </h2>
      </div>
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
      <div class="">
        <p class="text-gray-900 text-sm font-light md:text-base">
          {{ archive.description }}
        </p>
      </div>
      <div class="flex items-center space-x-2">
        <svg
          v-if="archive.publicationDate"
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
          {{ archive.publicationDate }}
        </p>
      </div>
      <lite-youtube
        :videoid="`${videoUrl}`"
        playlabel="Play: Keynote (Google I/O '18)"
        params="controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1"
      />
    </main>
  </section>
</template>

<script>
export default {
  scrollToTop: true,
  loading: false,
  data() {
    return {
      archive: {},
    };
  },
  created() {
    this.fetchArchives();
  },
  methods: {
    async fetchArchives() {
      let res = await this.$axios.get(
        `https://panafrica-website.herokuapp.com/api/panAfrica/archives/${this.$route.params.id}`
      );
      this.archive = res.data;
    },
  },
  computed: {
    videoUrl() {
      return this.archive?.uploadedVideoUrl?.split("=")[1];
    },
  },
};
</script>
