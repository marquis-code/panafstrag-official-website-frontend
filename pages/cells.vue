<template>
  <Transition name="fade">
    <b-container class="text-white">
      <button @click="goBack()" class="outline-none my-3 border bg-gray-200 text-black px-3 py-2 rounded-md text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#747070"
          stroke-width="2" stroke-linecap="square" stroke-linejoin="bevel">
          <path d="M19 12H6M12 5l-7 7 7 7" />
        </svg>
      </button>
      <hr />
      <div v-if="$nuxt.isOnline" class="space-y-4 my-6">
        <details class="group rounded-lg shadow-md bg-gray-50 p-6">
          <summary class="flex cursor-pointer items-center justify-between">
            <h2 class="text-sm md:text-base font-medium text-gray-900">
              PANAFRICANA Language Groups
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
            <li>Afro-Anglo</li>
            <li>Afro-Franco</li>
            <li>Afro-Luso</li>
            <li>Afro-Dutch</li>
            <li>Afro-Spanish</li>
            <li>Afro-Arab</li>
          </ul>
        </details>
      </div>
      <h2 v-if="$nuxt.isOnline" class="text-xl font-medium my-6 text-gray-500">
        PANAFRICANA Cells
      </h2>
      <div v-if="$nuxt.isOffline" class="text-gray-500 text-base relative">
        <img src="@/assets/noInternet.jpeg" />
        <div class="absolute -bottom-14 left-10">
          <p class="text-center">You are currently offline</p>
          <p class="text-center">Check your internet connect and try again!</p>
        </div>
      </div>
      <section v-if="$nuxt.isOnline" class="mt-8 grid grid-cols-1 gap-8 md:gap-6 lg:gap-8 md:grid-cols-2 md:grid-cols-3">
        <div class="group relative block bg-gradient-to-r from-green-500 to-black rounded-lg h-72">
          <div class="relative p-8">
            <p class="text-sm font-medium uppercase tracking-widest text-white">
              PANAFRICANA
            </p>

            <p class="text-2xl font-bold text-white">Cell 1</p>

            <div class="mt-20">
              <div
                class="lg:translate-y-8 lg:transform lg:opacity-0 lg:transition-all lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                <p class="text-sm sm:text-md text-white">
                  Economy (including Cultural & Creative) Trade, Business and
                  Finances
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="group relative block bg-gradient-to-r from-green-500 to-black rounded-lg h-72">
          <!-- w -->

          <div class="relative p-8">
            <p class="text-sm font-medium uppercase tracking-widest text-white">
              PANAFRICANA
            </p>

            <p class="text-2xl font-bold text-white">Cell 2</p>

            <div class="mt-16 md:mt-6 lg:mt-20">
              <div
                class="lg:translate-y-8 lg:transform lg:opacity-0 lg:transition-all lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                <p class="text-sm sm:text-md text-white">
                  Soft Power Diplomacy, Africana Public Institutions
                  Representation and Liaisons. All Media, ETC and Awareness
                  Campaign: “I am an Africana” Establishing PANAFRICANA TV/RADIO
                  by 2024
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="group relative block bg-gradient-to-r from-green-500 to-black rounded-lg h-72">
          <div class="relative p-8">
            <p class="text-sm font-medium uppercase tracking-widest text-white">
              PANAFRICANA
            </p>

            <p class="text-2xl font-bold text-white">Cell 3</p>

            <div class="mt-20">
              <div
                class="lg:translate-y-8 lg:transform lg:opacity-0 lg:transition-all lg:group-hover:translate-y-0 lg:group-hover:opacity-100 md:group-hover:opacity-100">
                <p class="text-sm sm:text-md text-white">
                  Our Story, Africana Indigenous Knowledge Systems, Philosophy,
                  Technology Culture and Arts.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="group relative block bg-gradient-to-r from-green-500 to-black rounded-lg h-72">
          <div class="relative p-8">
            <p class="text-sm font-medium uppercase tracking-widest text-white">
              PANAFRICANA
            </p>

            <p class="text-2xl font-bold text-white">Cell 4</p>

            <div class="mt-20">
              <div
                class="lg:translate-y-8 lg:transform lg:opacity-0 lg:transition-all lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                <p class="text-sm sm:text-md text-white">
                  Development, Education and Health
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="group relative block bg-gradient-to-r from-green-500 to-black rounded-lg h-72">
          <div class="relative p-8">
            <p class="text-sm font-medium uppercase tracking-widest text-white">
              PANAFRICANA
            </p>

            <p class="text-2xl font-bold text-white">Cell 5</p>

            <div class="mt-20">
              <div
                class="lg:translate-y-8 lg:transform lg:opacity-0 lg:transition-all lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                <p class="text-sm sm:text-md text-white">
                  Digital Transformation and Cyber-security-4IR, Public, Private
                  and CSOs
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="group relative block bg-gradient-to-r from-green-500 to-black rounded-lg h-72">
          <div class="relative p-8">
            <p class="text-sm font-medium uppercase tracking-widest text-white">
              PANAFRICANA
            </p>

            <p class="text-2xl font-bold text-white">Cell 6</p>

            <div class="mt-20">
              <div
                class="lg:translate-y-8 lg:transform lg:opacity-0 lg:transition-all lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                <p class="text-sm sm:text-md text-white">Legal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section v-if="$nuxt.isOnline" class="text-white">
        <div class="pb-16 pt-10">
          <div class="max-w-xl">
            <h2 v-if="boardResponsibilities" class="text-2xl font-medium my-6 text-black">
              Duties Of Board Members
            </h2>
          </div>
          <div v-if="loading" class="text-black">
            <p class="font-medium py-3">Loading ....</p>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <section v-for="responsibility in boardResponsibilities" :key="responsibility._id">
              <div class="flex items-start">
                <span class="section-color flex-shrink-0 rounded-lg p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="#5bc747" stroke-width="1.5" stroke-linecap="butt" stroke-linejoin="bevel">
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                    </polygon>
                  </svg>
                </span>

                <div class="ml-4">
                  <p class="text-base text-black">
                    {{ responsibility.description }}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </b-container>
  </Transition>
</template>

<script>
export default {
  name: "cells",
  scrollToTop: true,
  data() {
    return {
      boardResponsibilities: [],
      isOpen: true,
      loading: true,
      title: "Pan Africa Cells",
      description:
        "Pan Africa; Original thinking, research help add to human knowledge",
      image:
        "https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png",
    };
  },
  created() {
    this.getBoardResponsibilities();
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
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    async getBoardResponsibilities() {
      try {
        let res = await this.$axios.get(
          "https://panafstrag.onrender.com/api/panAfrica/responsibilities"
        );
        this.boardResponsibilities = res.data;
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
  },
};
</script>

<style scoped>
.section-color {
  background-color: #ecfcec;
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

