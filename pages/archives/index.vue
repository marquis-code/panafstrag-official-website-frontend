<template>
  <Transition name="fade">
    <b-container class="text-white">
      <!-- <main class="text-white">
    <div class="mx-auto max-w-screen-xl px-4 pt-6 pb-16 sm:px-6 lg:px-8"> -->
      <button
        @click="goBack()"
        class="outline-none my-3 border bg-gray-200 text-black px-3 py-2 rounded-md text-sm"
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
      <div v-if="$nuxt.isOffline" class="text-gray-500 text-base relative">
        <img src="@/assets/noInternet.jpeg" />
        <div class="absolute -bottom-14 left-10">
          <p class="text-center">You are currently offline</p>
          <p class="text-center">Check your internet connect and try again!</p>
        </div>
      </div>
      <hr v-if="$nuxt.isOnline" />
      <h2 v-if="$nuxt.isOnline" class="text-xl font-medium my-6 text-gray-500">
        PANAFSTRAG Archives
      </h2>
      <div v-if="loading && $nuxt.isOnline" class="text-black">
        <p class="font-medium py-3">Loading ....</p>
      </div>
      <div
        v-if="
          Array.isArray(archivedProgrammes) &&
          !archivedProgrammes.length &&
          $nuxt.isOnline
        "
        class="text-black"
      >
        <p class="font-medium py-3">No archived programmes available</p>
      </div>
      <section
        v-if="$nuxt.isOnline"
        class="my-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <div v-for="archive in archivedProgrammes" :key="archive._id">
          <article
            class="flex bg-white transition h-60 border rounded-md shadow-md"
          >
            <div class="flex flex-1 flex-col justify-between relative">
              <div class="p-4 space-y-3 sm:p-6">
                <p class="text-sm font-semibold text-gray-900">
                  {{
                    archive.title && archive.title.length > 100
                      ? archive.title.slice(0, 100) + "..."
                      : archive.title
                  }}
                </p>

                <p
                  class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3"
                >
                  {{
                    archive.theme === "null"
                      ? ""
                      : archive.theme && archive.theme.length > 100
                      ? archive.theme.slice(0, 100) + "..."
                      : archive.theme
                  }}
                </p>

                <div class="flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5bc747"
                    stroke-width="1.5"
                    stroke-linecap="butt"
                    stroke-linejoin="bevel"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span
                    class="mt-2 text-center text-sm leading-relaxed text-gray-400 line-clamp-3"
                    >{{ timeFrame(archive) }}</span
                  >
                </div>
              </div>
              <div
                class="sm:flex sm:items-end sm:justify-end absolute bottom-0 right-0"
              >
                <nuxt-link
                  :to="'/archives/' + archive._id"
                  class="block bg-green-400 px-5 py-3 text-center text-xs rounded-tl-md rounded-br-md font-bold uppercase text-white transition hover:bg-green-600"
                >
                  Read More
                </nuxt-link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </b-container>
  </Transition>
</template>

<script>
export default {
  name: "Archives",
  scrollToTop: true,
  data() {
    return {
      programmes: [],
      loading: true,
      starting_date: null,
      ending_date: null,
      title: "Pan Africa Archives",
      description:
        "Pan Africa; Original thinking, research help add to human knowledge",
      image:
        "https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png",
    };
  },
  head() {
    return {
      meta: [
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.image,
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: this.title,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.image,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: this.image,
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: this.title,
        },
      ],
    };
  },
  created() {
    this.getArchives();
  },
  methods: {
    async getArchives() {
      try {
        let res = await this.$axios.get(
          "https://panafstrag.onrender.com/api/panAfrica/programmes"
        );
        this.programmes = res.data;
      } catch (error) {
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
    timeFrame(program) {
      let startDay = this.$moment(program.startDate)
        .format("YYYY-MM-Do")
        .split("-")[2];
      let endDay = this.$moment(program.endDate)
        .format("YYYY-MM-Do")
        .split("-")[2];
      let year = this.$moment(program.endDate)
        .format("YYYY-MM-DD")
        .split("-")[0];
      return `${startDay} to ${endDay}, ${year}`;
    },
  },
  computed: {
    archivedProgrammes() {
      return this.programmes.filter((p) => {
        this.starting_date = p.startDate;
        this.ending_date = p.endDate;
        let endDate = this.$moment(p.endDate)
          .format("YYYY-MM-DD")
          .split("-")[0];
        let currentDate = this.$moment(new Date())
          .format("YYYY-MM-DD")
          .split("-")[0];
        return Number(currentDate) - Number(endDate) >= 2;
      });
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
