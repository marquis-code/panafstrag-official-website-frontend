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
      <h2 v-if="$nuxt.isOnline" class="text-xl font-medium my-6 text-gray-500">
        PANAFRICANA Objectives
      </h2>
      <div v-if="$nuxt.isOffline" class="text-gray-500 text-base relative">
        <img src="@/assets/noInternet.jpeg" class="h-96 w-96" />
        <div class="absolute -bottom-14 left-10">
          <p class="text-center">You are currently offline.</p>
          <p class="text-center">Check your internet connect and try again!</p>
        </div>
      </div>
      <div v-if="loading && $nuxt.isOnline" class="text-black">
        <p class="font-medium py-3">Loading ....</p>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <section v-for="objective in objectives" :key="objective._id">
          <div
            class="block rounded-xl p-6 h-72 shadow-md transition border space-y-5 hover:border-green-500/10 hover:shadow-green-500/10"
            href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            <p class="mt-1 text-md sm:text-base text-black">
              {{ objective.description }}
            </p>
          </div>
        </section>
      </div>

      <h2 v-if="$nuxt.isOnline" class="text-2xl font-medium my-6 text-black">
        Our Challanges
      </h2>
      <article v-if="$nuxt.isOnline" class="rounded-md bg-white p-6 border sm:p-8 my-6">
        <div class="flex items-start">
          <div class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:p-4 border"
            aria-hidden="true">
            <img src="@/assets/challangeFlag.png" />
          </div>

          <div class="sm:ml-8">
            <p class="mt-1 text-gray-700 text-base text-black">
              In the 21st century, Civil Society Movements in favour of
              stability, safety and development face many challenges: not only
              wars and arms proliferation climate change but also human rights
              violations, discrimination, hate and ignorance, emergencies, and
              abuse of the earth resources. Millions are now mobilizing to
              oppose the process of globalization and inequality, which breeds
              conflicts of all kinds. What is needed is a globalization of
              safety and stability that promote human values and sustainable
              solution for political and socio-economic development
            </p>
          </div>
        </div>
      </article>
      <!-- </div> -->
    </b-container>
  </Transition>
</template>

<script>
export default {
  name: "about-us",
  scrollToTop: true,
  // auth: false,
  data() {
    return {
      objectives: [],
      loading: true,
      title: "About Pan African",
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
    this.getObjectives();
  },
  methods: {
    async getObjectives() {
      try {
        let res = await this.$axios.get(
          "https://panafstrag.onrender.com/api/panAfrica/objective"
        );
        this.objectives = res.data;
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
