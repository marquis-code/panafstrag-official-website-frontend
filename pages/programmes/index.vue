<template>
  <main class="text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="space-y-4">
        <details class="group rounded-lg bg-gray-50 p-6">
          <summary class="flex cursor-pointer items-center justify-between">
            <h2 class="font-medium text-gray-900">
              PANAFSTRAG Programmatic areas for studies and research with
              actionable Policy Briefs and Recommendations are:
            </h2>

            <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
              <svg
                v-if="isOpen"
                @click="toggle"
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#443d3d"
                stroke-width="1.5"
                stroke-linecap="butt"
                stroke-linejoin="bevel"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              <svg
                v-else
                @click="toggle"
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#443d3d"
                stroke-width="1.5"
                stroke-linecap="butt"
                stroke-linejoin="bevel"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </span>
          </summary>
          <ul
            class="mt-4 leading-relaxed text-gray-700 list-disc space-y-3 pl-6"
          >
            <li>Africa & Diaspora History & Culture</li>
            <li>Human Security (Freedom from want & Freedom from fear)</li>
            <li>Technology and Entrepreneurship</li>
            <li>Integration-National, Regional, Continental & Diaspora</li>
            <li>Synergy withthe Diaspora</li>
            <li>Climate Change and the impact on Human Security</li>
          </ul>
        </details>
      </div>

      <h1 class="text-center text-3xl font-medium font-sans py-6">
        Our Programmes
      </h1>
      <section class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div v-for="program in programmes" :key="program._id">
          <article
            class="flex bg-white transition shadow-xl h-72 ring-1 ring-gray-50 rounded-md"
          >

            <div class="flex flex-1 flex-col justify-between">
              <div
                class="
                  border-l border-gray-900/10
                  p-4
                  sm:border-l-transparent sm:p-6
                "
              >
                <a href="#">
                  <h3 class="font-bold uppercase text-gray-900">
                    {{
                      program.title && program.title.length > 100
                        ? program.title.slice(0, 100) + "..."
                        : program.title
                    }}
                  </h3>
                </a>

                <p
                  class="
                    mt-2
                    text-sm
                    leading-relaxed
                    text-gray-700
                    line-clamp-3
                  "
                >
                  {{
                    program.theme && program.theme.length > 100
                      ? program.theme.slice(0, 100) + "..."
                      : program.theme
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
                    class="
                      mt-2
                      text-center text-sm
                      leading-relaxed
                      text-gray-400
                      line-clamp-3
                    "
                    >{{ program.startToEndDate }}</span
                  >
                </div>
              </div>
              <div class="sm:flex sm:items-end sm:justify-end">
                <nuxt-link
                  :to="'/programmes/' + program._id"
                  class="
                    block
                    bg-green-400
                    px-5
                    py-3
                    text-center text-xs
                    rounded-tl-md
                    rounded-br-md
                    font-bold
                    uppercase
                    text-white
                    transition
                    hover:bg-green-600
                  "
                >
                  Read More
                </nuxt-link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "programme",
  scrollToTop: true,
  loading: false,
  data() {
    return {
      isOpen: true,
      programmes: [],
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
  },
  methods: {
    async getProgrammes() {
      let res = await this.$axios.get(
        "https://panafrica-website.herokuapp.com/api/panAfrica/programmes"
      );
      this.programmes = res.data;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
</style>
