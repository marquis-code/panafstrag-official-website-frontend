<template>
  <b-container class="text-white pt-6 pb-16">
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
      Board Members
    </h2>
    <div v-if="$nuxt.isOffline" class="text-gray-500 text-base relative">
      <img class="object-cover" src="@/assets/noInternet.jpeg" />
      <div class="absolute top-0">
        <p class="">You are currently offline</p>
        <p class="">Check your internet connect and try again!</p>
      </div>
    </div>
    <section
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      v-if="loading && $nuxt.isOnline"
    >
      <div v-for="i in 3" :key="i">
        <article
          class="
            overflow-hidden
            rounded-md
            shadow-md
            dark:border-gray-800 dark:shadow-gray-700/25
            p-4
            w-full
            mx-auto
          "
        >
          <div class="animate-pulse flex flex-col space-x-4">
            <div
              class="
                bg-slate-400
                h-40
                w-full
                px-0
                mx-0
                rounded-tr-md rounded-tl-md
              "
            ></div>

            <div class="flex-1 space-y-3 py-3">
              <div class="h-3 w-1/2 pl-0 -ml-4 bg-slate-400 rounded-full"></div>
              <div class="h-3 w-1/2 pl-0 -ml-4 bg-slate-400 rounded-full"></div>
              <div class="h-3 w-1/2 pl-0 -ml-4 bg-slate-400 rounded-full"></div>
              <div class="h-3 w-1/4 pl-0 -ml-4 bg-slate-400 rounded-full"></div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <main class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <section v-for="member in boardMembers" :key="member._id">
        <nuxt-link :to="'/board-members/' + member._id">
          <article
            class="
              overflow-hidden
              rounded-lg
              border border-gray-100
              shadow-sm
              h-96
            "
          >
            <div
              class="flex pt-3 justify-center items-center relative"
            >
              <div
                class="
                  animate-spin
                  border-dashed border-2 border-green-500
                  rounded-full
                  h-56
                  w-56
                "
              ></div>
              <img
                alt="board member"
                :src="member.avatar"
                class="
                  cursor-pointer
                  object-cover
                  rounded-full
                  h-52
                  w-52
                  shadow-md
                  absolute
                "
              />
            </div>

            <div class="p-4 sm:p-6">
              <a href="#">
                <h3 class="text-lg font-medium text-gray-900">
                  {{ member.name }}
                </h3>
              </a>
              <p
                class="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-gray-500
                  line-clamp-3
                  flex flex-wrap
                  space-y-2
                  items-center
                "
                v-for="eachEmail in member.email"
                :key="eachEmail"
              >
                <span
                  class="mr-2 text-xs"
                  v-for="userEmail in eachEmail.split(',')"
                  :key="userEmail"
                  >{{ userEmail === "null" ? null : userEmail }}</span
                >
              </p>

              <nuxt-link
                :to="'/board-members/' + member._id"
                class="
                  group
                  mt-4
                  inline-flex
                  items-center
                  gap-1
                  text-sm
                  font-medium
                  text-blue-600
                "
              >
                Find out more

                <span
                  aria-hidden="true"
                  class="block transition group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </nuxt-link>
            </div>
          </article>
        </nuxt-link>
      </section>
    </main>
  </b-container>
  <!-- </div>
  </section> -->
</template>


<script>
export default {
  name: "board-members",
  scrollToTop: true,
  // auth: false,
  data() {
    return {
      boardMembers: [],
      loading: true,
      title: "Pan Africa Board Members",
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
    this.getBoardMembers();
  },
  methods: {
    async getBoardMembers() {
      try {
        let res = await this.$axios.get(
          "https://panafstrag.onrender.com/api/panAfrica/board-member"
        );
        this.boardMembers = res.data;
        this.loading = false;
      } catch (error) {
        this.$toast
          .error("Something went wrong, please try again.")
          .goAway(1500);
        this.loading = false;
      }
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>
