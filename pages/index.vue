<template>
  <main class="min-h-500">
    <section class="bg-opacity-100 bg-black">
      <main
        class="
          background
          w-full
          h-full
          bg-blend-overlay
          pt-16
          bg-opacity-70 bg-black
        "
      >
        <carousel></carousel>
      </main>
    </section>
    <section class="w-11/12 sm:max-w-4xl mx-auto space-y-5 py-20">
      <h1 class="text-lg md:text-xl text-gray-500 font-light">
        PANAFSTRAG was founded in 1992 to provide an in-depth study and analyses
        of the challenges of political stability, safety and development in
        Africa and propose policy options and strategies for these issues while
        synergizing the potentials of its Diaspora for executing these policies.
      </h1>
      <p class="text-gray-500 text-md md:text-lg font-light">
        <span class="font-medium">PANAFSTRAG</span> as an international
        organization, is managed by a Board, the composition of which reflects
        regional, linguistic and gender representation. The President presides
        over the Board.
      </p>
      <p class="text-gray-500 text-md md:text-lg font-light">
        The current International Secretariat has Executive Secretary, Programme
        Coordinator and Administrative/Support Sta.
      </p>
    </section>

    <section class="section-color text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
          <h2 class="text-3xl text-black font-bold sm:text-4xl">Our Team</h2>
          <nuxt-link
            to="/board-members"
            class="flex justify-end items-end text-black"
            >View More
            <span
              aria-hidden="true"
              class="block ml-2 transition group-hover:translate-x-0.5"
            >
              &rarr;
            </span></nuxt-link
          >
        </div>
        <main
          class="
            mt-8
            grid grid-cols-1
            gap-10
            md:grid-cols-2
            lg:grid-cols-3
            h-full
            w-full
          "
        >
          <section v-for="member in boardMembers" :key="member._id">
            <article
              v-if="loading"
              class="
                overflow-hidden
                rounded-md
                shadow-md
                dark:border-gray-800 dark:shadow-gray-700/25
                p-4
                max-w-sm
                w-full
                mx-auto
              "
            >
              <div class="animate-pulse flex flex-col space-x-4">
                <div
                  class="
                    bg-slate-700
                    h-40
                    w-full
                    px-0
                    mx-0
                    rounded-tr-md rounded-tl-md
                  "
                ></div>
                <div class="flex-1 space-y-3 py-3">
                  <div
                    class="h-3 w-1/2 pl-0 -ml-4 bg-slate-700 rounded-full"
                  ></div>
                  <div
                    class="h-3 w-1/2 pl-0 -ml-4 bg-slate-700 rounded-full"
                  ></div>
                  <div
                    class="h-3 w-1/2 pl-0 -ml-4 bg-slate-700 rounded-full"
                  ></div>
                  <div
                    class="h-3 w-1/4 pl-0 -ml-4 bg-slate-700 rounded-full"
                  ></div>
                </div>
              </div>
            </article>

            <article
              v-else
              class="
                overflow-hidden
                rounded-md
                shadow-md
                dark:shadow-gray-700/25
                h-96
              "
            >
              <img
                alt="Office"
                :src="member.avatar"
                class="h-56 w-full object-cover"
              />

              <div class="p-4 sm:p-6">
                <a href="#">
                  <h3 class="text-lg font-medium text-black">
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
                    dark:text-gray-800
                  "
                >
                  {{ member.university }}
                </p>

                <div v-for="eachEmail in member.email" :key="eachEmail">
                  <p
                    class="
                      mt-2
                      text-sm
                      leading-relaxed
                      text-gray-500
                      line-clamp-3
                      dark:text-gray-800
                    "
                  >
                    {{ eachEmail }}
                  </p>
                </div>

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
                    text-green-600
                  "
                >
                  Read Bio

                  <span
                    aria-hidden="true"
                    class="block transition group-hover:translate-x-0.5"
                  >
                    &rarr;
                  </span>
                </nuxt-link>
              </div>
            </article>
          </section>
        </main>
      </div>
    </section>
  </main>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
export default {
  name: "home",
  scrollToTop: true,
  loading: true,
  components: {
    Carousel,
  },

  mounted() {
    this.getBoardMembers();
  },
  data() {
    return {
      boardMembers: [],
      loading: true,
      title: "Home",
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
  methods: {
    async getBoardMembers() {
      await this.$axios
        .get(
          "https://panafrica-website.herokuapp.com/api/panAfrica/board-member"
        )
        .then((res) => {
          this.loading = true;
          this.boardMembers = res.data;
          res.data.splice(3);
          setTimeout(() => {
            this.loading = false;
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.background {
  background-image: url("~/static/images/volunteering.jpeg");
  background-size: cover;
}

.section-color {
  background-color: #ecfcec;
}
</style>

