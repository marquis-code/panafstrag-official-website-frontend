<template>
  <section class="text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold sm:text-4xl text-black">Our Team</h2>
      <main class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <section v-for="member in boardMembers" :key="member._id">
          <article
            class="
              overflow-hidden
              rounded-md
              border border-gray-100
              shadow-md
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
                  text-black
                  dark:text-gray-400
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
                    dark:text-gray-400
                    text-black
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
                  text-green-500
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
</template>


<script>
export default {
  name: "board-members",
  scrollToTop: true,
  loading: false,
  data() {
    return {
      boardMembers: [],
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
      let res = await this.$axios.get(
        "https://panafrica-website.herokuapp.com/api/panAfrica/board-member"
      );
      this.boardMembers = res.data;
    },
  },
  // methods: {
  //   async getBoardMembers() {
  //     let res = await this.$axios.get("/panAfrica/board-member");
  //     this.boardMember = res.data;
  //   },
  // },
};
</script>

<style>
</style>
