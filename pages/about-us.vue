<template>
  <section class="text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <!-- <div class="mx-auto max-w-lg"> -->
      <h2
        class="text-start text-2xl font-bold sm:text-4xl text-black font-sans"
      >
        Our Objectives
      </h2>
      <!-- </div> -->

      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <section v-for="objective in objectives" :key="objective._id">
          <div
            class="
              block
              rounded-xl
              p-8
              h-72
              shadow-xl
              transition
              ring-1 ring-gray-50
              hover:border-green-500/10 hover:shadow-green-500/10
            "
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <p class="mt-1 text-sm sm:text-base text-black text-justify">
              {{ objective.description }}
            </p>
          </div>
        </section>
      </div>

      <h2
        class="
          text-start text-2xl
          font-bold
          sm:text-4xl
          text-black
          font-sans
          pt-16
          pb-6
        "
      >
        Our Challanges
      </h2>
      <article class="rounded-xl bg-white p-6 ring ring-indigo-50 sm:p-8">
        <div class="flex items-start">
          <div
            class="
              hidden
              sm:grid
              sm:h-20
              sm:w-20
              sm:shrink-0
              sm:place-content-center
              sm:rounded-full
              sm:border-2
              sm:p-4
              sm:border-green-500
            "
            aria-hidden="true"
          >
          <img src="@/static/images/challangeFlag.png" />
            <!-- <div class="flex items-center gap-1">
              <span class="h-8 w-0.5 rounded-full bg-indigo-500"></span>
              <span class="h-6 w-0.5 rounded-full bg-indigo-500"></span>
              <span class="h-4 w-0.5 rounded-full bg-indigo-500"></span>
              <span class="h-6 w-0.5 rounded-full bg-indigo-500"></span>
              <span class="h-8 w-0.5 rounded-full bg-indigo-500"></span>
            </div> -->
          </div>

          <div class="sm:ml-8">
            <!-- <strong
              class="
                rounded
                border border-indigo-500
                bg-indigo-500
                px-3
                py-1.5
                text-[10px]
                font-medium
                text-white
              "
            >
              Episode #101
            </strong>

            <h3 class="mt-4 text-lg font-medium sm:text-xl">
              <a href="" class="hover:underline">
                Some Interesting Podcast Title
              </a>
            </h3> -->

            <p class="mt-1 text-sm text-justify text-gray-700  sm:text-base text-black">
              In the 21st century, civil society movements in favour of
              stability, safety and development face many challenges: not only
              wars and arms proliferation climate change but also human rights
              violations, discrimination, hate and ignorance, emergencies, and
              abuse of the earth resources. Millions are now mobilizing to
              oppose the process of globalization and inequality, which breeds
              conflicts of all kinds. What is needed is a globalisation of
              safety and stability that promote human values and sustainable
              solution for political and socio-economic development
            </p>

            <!-- <div class="mt-4 sm:flex sm:items-center sm:gap-2">
              <div class="flex items-center text-gray-500">
                <svg
                  class="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <p class="ml-1 text-xs font-medium">48:32 minutes</p>
              </div>

              <span class="hidden sm:block" aria-hidden="true">&middot;</span>

              <p class="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                Featuring
                <a href="" class="underline hover:text-gray-700">Barry</a>,
                <a href="" class="underline hover:text-gray-700">Sandra</a> and
                <a href="" class="underline hover:text-gray-700">August</a>
              </p>
            </div> -->
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "about-us",
  scrollToTop: true,
  loading: false,
  data() {
    return {
      objectives: [],
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
      let res = await this.$axios.get(
        "https://panafrica-website.herokuapp.com/api/panAfrica/objective"
      );
      this.objectives = res.data;
    },
  },
};
</script>

<style>
</style>
