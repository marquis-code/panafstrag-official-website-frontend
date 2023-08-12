<template>
  <Transition name="fade">
    <b-container class="text-white">
      <button @click="goBack()" class="outline-none my-3 border bg-gray-200 text-black px-3 py-2 rounded-md text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#747070"
          stroke-width="2" stroke-linecap="square" stroke-linejoin="bevel">
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
      <hr />
      <div v-if="$nuxt.isOnline" class="space-y-4 my-6">
        <details class="group rounded-lg shadow-md bg-gray-50 p-6">
          <summary class="flex cursor-pointer items-center justify-between">
            <h2 class="text-sm md:text-base font-medium text-gray-900">
              PANAFSTRAG focus areas for studies and research with actionable
              Policy Briefs and Recommendations
            </h2>

            <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
              <svg v-if="isOpen" @click="toggle" xmlns="http://www.w3.org/2000/svg" width="27" height="27"
                viewBox="0 0 24 24" fill="none" stroke="#443d3d" stroke-width="1.5" stroke-linecap="butt"
                stroke-linejoin="bevel">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              <svg v-else @click="toggle" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"
                fill="none" stroke="#443d3d" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="bevel">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </span>
          </summary>
          <ul class="mt-4 leading-relaxed text-gray-700 list-disc space-y-3 pl-6">
            <li>Africa & Diaspora History & Culture</li>
            <li>Human Security (Freedom from want & Freedom from fear)</li>
            <li>Technology and Entrepreneurship</li>
            <li>Integration-National, Regional, Continental & Diaspora</li>
            <li>Synergy withthe Diaspora</li>
            <li>Climate Change and the impact on Human Security</li>
          </ul>
        </details>
      </div>
      <h2 v-if="$nuxt.isOnline" class="text-xl font-medium my-6 text-gray-500">
        PANAFSTRAG Programmes
      </h2>
      <div v-if="loading && $nuxt.isOnline" class="text-black">
        <p class="font-medium py-3">Loading ....</p>
      </div>

      <!-- <div v-if="!recentProgrammes.length && $nuxt.isOnline" class="text-black">
        <p class="font-medium py-3">No recent programmes available</p>
      </div> -->
      <h2 v-if="$nuxt.isOnline && activeProgrammes.length" class="text-base font-medium text-green-400">
        Active Programmes
      </h2>
      <section v-if="$nuxt.isOnline" class="my-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="program in activeProgrammes" :key="program._id">
          <article class="relative flex bg-white transition shadow-md h-60 border border-gray-100 rounded-md">
            <span
              class="animate-ping absolute inline-flex -top-1 -right-1 h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
            <div class="relative flex flex-1 flex-col justify-between">
              <div class="p-4 sm:p-6">
                <h3 v-if="program.title" class="font-bold text-sm uppercase text-gray-900">
                  {{
                    program.title && program.title.length > 100
                    ? program.title.slice(0, 100) + "..."
                    : program.title
                  }}
                </h3>

                <p v-if="program.theme" class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                  {{
                    program.theme === "null"
                    ? ""
                    : program.theme && program.theme.length > 100
                      ? program.theme.slice(0, 100).toLowerCase() + "..."
                      : program.theme.toLowerCase()
                  }}
                </p>
                <div class="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="#5bc747" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="bevel">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span class="mt-2 text-center text-sm leading-relaxed text-gray-400 line-clamp-3">{{ timeFrame(program)
                  }}</span>
                </div>
              </div>
              <div class="sm:flex sm:items-end sm:justify-end absolute bottom-0 right-0">
                <nuxt-link :to="'/programmes/' + program._id"
                  class="block bg-green-400 px-4 py-3 text-center text-xs rounded-tl-md rounded-br-md font-bold uppercase text-white transition hover:bg-green-600">
                  Read More
                </nuxt-link>
              </div>
            </div>
          </article>
        </div>
      </section>
      <h2 v-if="$nuxt.isOnline && pendingProgrammes.length" class="text-base font-medium my-3 text-gray-500">
        Pending Programmes
      </h2>
      <section v-if="$nuxt.isOnline" class="my-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="program in pendingProgrammes" :key="program._id">
          <article class="flex bg-white transition shadow-md h-60 border border-gray-100 rounded-md">
            <div class="relative flex flex-1 flex-col justify-between">
              <div class="p-4 sm:p-6">
                <h3 v-if="program.title" class="font-bold text-sm uppercase text-gray-900">
                  {{
                    program.title && program.title.length > 100
                    ? program.title.slice(0, 100) + "..."
                    : program.title
                  }}
                </h3>

                <p v-if="program.theme" class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                  {{
                    program.theme === "null"
                    ? ""
                    : program.theme && program.theme.length > 100
                      ? program.theme.slice(0, 100) + "..."
                      : program.theme
                  }}
                </p>
                <div class="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="#5bc747" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="bevel">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span class="mt-2 text-center text-sm leading-relaxed text-gray-400 line-clamp-3">{{ timeFrame(program)
                  }}</span>
                </div>
              </div>
              <div class="sm:flex sm:items-end sm:justify-end absolute bottom-0 right-0">
                <nuxt-link :to="'/programmes/' + program._id"
                  class="block bg-green-400 px-4 py-3 text-center text-xs rounded-tl-md rounded-br-md font-bold uppercase text-white transition hover:bg-green-600">
                  Read More
                </nuxt-link>
              </div>
            </div>
          </article>
        </div>
      </section>
      <h2 v-if="$nuxt.isOnline && completedProgrammes.length" class="text-base font-medium my-3 text-gray-500">
        Completed Programmes
      </h2>
      <section v-if="$nuxt.isOnline" class="my-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="program in completedProgrammes" :key="program._id">
          <article class="flex bg-white transition shadow-md h-60 border border-gray-100 rounded-md">
            <div class="relative flex flex-1 flex-col justify-between">
              <div class="p-4 sm:p-6">
                <h3 v-if="program.title" class="font-bold text-sm uppercase text-gray-900">
                  {{
                    program.title && program.title.length > 100
                    ? program.title.slice(0, 100) + "..."
                    : program.title
                  }}
                </h3>

                <p v-if="program.theme" class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                  {{
                    program.theme === "null"
                    ? ""
                    : program.theme && program.theme.length > 100
                      ? program.theme.slice(0, 100) + "..."
                      : program.theme
                  }}
                </p>
                <div class="flex items-center space-x-1"
                  v-if="program.startDate !== 'null' && program.endDate !== 'null'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="#5bc747" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="bevel">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span class="mt-2 text-center text-sm leading-relaxed text-gray-400 line-clamp-3">{{ timeFrame(program)
                  }}</span>
                </div>
              </div>
              <div class="sm:flex sm:items-end sm:justify-end absolute bottom-0 right-0">
                <nuxt-link :to="'/programmes/' + program._id"
                  class="block bg-green-400 px-4 py-3 text-center text-xs rounded-tl-md rounded-br-md font-bold uppercase text-white transition hover:bg-green-600">
                  Read More
                </nuxt-link>
              </div>
            </div>
          </article>
        </div>
      </section>
      <!-- </div> -->
    </b-container>
  </Transition>
</template>

<script>
import { readFromCache, writeToCache } from "@/utils/cache.js";
import _ from "lodash";
export default {
  name: "programme",
  scrollToTop: true,
  data() {
    return {
      isOpen: true,
      dbData: [],
      cachedData: [],
      url: "https://panafstrag.onrender.com/api/panAfrica/programmes",
      programmes: [],
      starting_date: null,
      ending_date: null,
      loading: true,
      title: "Pan Africa programmes and conferences",
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
    this.getProgrammes();
    this.setProgrammes();
  },
  methods: {
    setProgrammes() {
      this.cachedData = readFromCache(this.url);
      if (this.cachedData?.length) {
        this.programmes = this.cachedData;
      }
    },
    async getProgrammes() {
      try {
        let res = await this.$axios.get(
          "https://panafstrag.onrender.com/api/panAfrica/programmes"
        );
        this.dbData = res?.data;
        writeToCache(res?.config?.url, res?.data);
      } catch (error) {
        this.$toast
          .error("Something went wrong, please try again.")
          .goAway(1500);
      } finally {
        this.loading = false;
      }
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
    goBack() {
      this.$router.go(-1);
    },

    timeFrame(program) {
      if (program.status === "pending") {
        let result = this.$moment(program.endDate).format("YYYY");
        return result;
      }
      let startDay = this.$moment(program.startDate)
        .format("YYYY-MMMM-Do")
        .split("-")[2];
      let endDay = this.$moment(program.endDate)
        .format("YYYY-MMMM-Do")
        .split("-")[2];
      let month = this.$moment(program.endDate)
        .format("YYYY-MMMM-Do")
        .split("-")[1];
      let year = this.$moment(program.endDate)
        .format("YYYY-MM-DD")
        .split("-")[0];
      if (startDay === endDay) {
        return `${endDay}, ${month}, ${year}`;
      }
      return `${startDay} to ${endDay}, ${month}, ${year}`;
    },
  },
  computed: {
    recentProgrammes() {
      return this.programmes.filter((p) => {
        this.starting_date = p?.startDate;
        this.ending_date = p?.endDate;
        let endDate = this.$moment(p.endDate)
          .format("YYYY-MM-DD")
          .split("-")[0];
        let currentDate = this.$moment(new Date())
          .format("YYYY-MM-DD")
          .split("-")[0];
        return Number(currentDate) - Number(endDate) <= 2;
      });
    },
    pendingProgrammes() {
      return this.programmes.filter((p) => {
        return p.status === "pending";
      });
    },
    completedProgrammes() {
      return this.programmes.filter((p) => {
        return p.status === "completed";
      });
    },
    activeProgrammes() {
      return this.programmes.filter((p) => {
        return p.status === "active";
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
