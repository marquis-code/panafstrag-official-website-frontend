<template>
  <b-container class="text-white">
    <button
      @click="goBack()"
      class="
        outline-none
        my-3
        border
        bg-gray-200
        text-black
        px-3
        py-2
        rounded-md
        text-sm
      "
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
    <hr />
    <h2 v-if="$nuxt.isOnline" class="text-xl font-medium my-6 text-gray-500">
      PANAFSTRAG Cells
    </h2>
    <div v-if="$nuxt.isOffline" class="text-gray-500 text-base relative">
      <img src="@/assets/noInternet.jpeg" />
      <div class="absolute -bottom-14 left-10">
        <p class="text-center">You are currently offline</p>
        <p class="text-center">Check your internet connect and try again!</p>
      </div>
    </div>
    <section
      v-if="$nuxt.isOnline"
      class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-cols-3"
    >
      <div
        class="
          group
          relative
          block
          bg-gradient-to-r
          from-green-500
          to-black
          rounded-lg
          h-72
        "
      >
        <div class="relative p-8">
          <p class="text-sm font-medium uppercase tracking-widest text-white">
            PANAFSTRAG
          </p>

          <p class="text-2xl font-bold text-white">Cell 1</p>

          <div class="mt-20">
            <div
              class="
                lg:translate-y-8
                lg:transform
                lg:opacity-0
                lg:transition-all
                lg:group-hover:translate-y-0
                lg:group-hover:opacity-100
              "
            >
              <p class="text-sm sm:text-md text-white">
                Economy (including Cultural & Creative) Trade, Business and
                Finances
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="
          group
          relative
          block
          bg-gradient-to-r
          from-green-500
          to-black
          rounded-lg
          h-72
        "
      >
        <!-- w -->

        <div class="relative p-8">
          <p class="text-sm font-medium uppercase tracking-widest text-white">
            PANAFSTRAG
          </p>

          <p class="text-2xl font-bold text-white">Cell 2</p>

          <div class="md:mt-6 lg:mt-20">
            <div
              class="
                lg:translate-y-8
                lg:transform
                lg:opacity-0
                lg:transition-all
                lg:group-hover:translate-y-0
                lg:group-hover:opacity-100
              "
            >
              <p class="text-sm sm:text-md text-white">
                Soft Diplomacy, Africana Public Institutions Representation and
                Liaisons. All Media, ETC and Awareness Campaign: “I am an
                Africana” Establishing PANAFSTRAG TV/RADIO by 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="
          group
          relative
          block
          bg-gradient-to-r
          from-green-500
          to-black
          rounded-lg
          h-72
        "
      >
        <div class="relative p-8">
          <p class="text-sm font-medium uppercase tracking-widest text-white">
            PANAFSTRAG
          </p>

          <p class="text-2xl font-bold text-white">Cell 3</p>

          <div class="mt-20">
            <div
              class="
                lg:translate-y-8
                lg:transform
                lg:opacity-0
                lg:transition-all
                lg:group-hover:translate-y-0
                lg:group-hover:opacity-100
                md:group-hover:opacity-100
              "
            >
              <p class="text-sm sm:text-md text-white">
                Our Story, Africana Indigenous Knowledge Systems, Philosophy,
                Technology Culture and Arts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="
          group
          relative
          block
          bg-gradient-to-r
          from-green-500
          to-black
          rounded-lg
          h-72
        "
      >
        <div class="relative p-8">
          <p class="text-sm font-medium uppercase tracking-widest text-white">
            PANAFSTRAG
          </p>

          <p class="text-2xl font-bold text-white">Cell 4</p>

          <div class="mt-20">
            <div
              class="
                lg:translate-y-8
                lg:transform
                lg:opacity-0
                lg:transition-all
                lg:group-hover:translate-y-0
                lg:group-hover:opacity-100
              "
            >
              <p class="text-sm sm:text-md text-white">
                Development, Education and Health
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="
          group
          relative
          block
          bg-gradient-to-r
          from-green-500
          to-black
          rounded-lg
          h-72
        "
      >
        <div class="relative p-8">
          <p class="text-sm font-medium uppercase tracking-widest text-white">
            PANAFSTRAG
          </p>

          <p class="text-2xl font-bold text-white">Cell 5</p>

          <div class="mt-20">
            <div
              class="
                lg:translate-y-8
                lg:transform
                lg:opacity-0
                lg:transition-all
                lg:group-hover:translate-y-0
                lg:group-hover:opacity-100
              "
            >
              <p class="text-sm sm:text-md text-white">
                Digital Transformation and Cyber-security-4IR, Public, Private
                and CSOs
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="
          group
          relative
          block
          bg-gradient-to-r
          from-green-500
          to-black
          rounded-lg
          h-72
        "
      >
        <div class="relative p-8">
          <p class="text-sm font-medium uppercase tracking-widest text-white">
            PANAFSTRAG
          </p>

          <p class="text-2xl font-bold text-white">Cell 6</p>

          <div class="mt-20">
            <div
              class="
                lg:translate-y-8
                lg:transform
                lg:opacity-0
                lg:transition-all
                lg:group-hover:translate-y-0
                lg:group-hover:opacity-100
              "
            >
              <p class="text-sm sm:text-md text-white">Legal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="$nuxt.isOnline" class="text-white">
      <div class="pb-16 pt-10">
        <div class="max-w-xl">
          <h2
            v-if="boardResponsibilities"
            class="text-2xl font-medium my-6 text-black"
          >
            Duties Of Board Members
          </h2>
        </div>
        <div v-if="loading" class="text-black">
          <p class="font-medium py-3">Loading ....</p>
        </div>

        <div
          class="
            mt-8
            grid grid-cols-1
            gap-8
            md:mt-16 md:grid-cols-2 md:gap-12
            lg:grid-cols-3
          "
        >
          <section
            v-for="responsibility in boardResponsibilities"
            :key="responsibility._id"
          >
            <div class="flex items-start">
              <span class="section-color flex-shrink-0 rounded-lg p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5bc747"
                  stroke-width="1.5"
                  stroke-linecap="butt"
                  stroke-linejoin="bevel"
                >
                  <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  ></polygon>
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
</template>

<script>
export default {
  name: "cells",
  auth: false,
  scrollToTop: true,
  data() {
    return {
      boardResponsibilities: [],
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
    async getBoardResponsibilities() {
      try {
        let res = await this.$axios.get(
          "https://panafstrag.onrender.com/api/panAfrica/responsibilities"
        );
        this.boardResponsibilities = res.data;
        this.loading = false;
      } catch (error) {
        this.$toast
          .error("Something went wrong, please try again.")
          .goAway(1500);
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
</style>

