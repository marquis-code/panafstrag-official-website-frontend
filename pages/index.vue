<template>
  <main class="min-h-500">
    <section class="bg-opacity-90 bg-black">
      <main
        class="
          background
          w-full
          h-full
          bg-blend-overlay
          pt-16
          bg-opacity-50 bg-black
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
        synergizing the potentials of its diaspora for executing these policies.
      </h1>
      <p class="text-gray-500 text-md md:text-lg font-light">
        <span class="font-medium">PANAFSTRAG</span> as an international
        organization, is managed by a board, the composition of which reflects
        regional, linguistic and gender representation.
      </p>
      <p class="text-gray-500 text-md md:text-lg font-light">
        The current International Secretariat has Executive Secretary, Programme
        Coordinator and Administrative/Support Staff.
      </p>
    </section>
  </main>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
export default {
  name: "home",
  // auth: false,
  scrollToTop: true,
  components: {
    Carousel,
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
  }
};
</script>

<style scoped>
.background {
  background-image: url("~/assets/meeting.png");
  background-size: cover;
}

.section-color {
  background-color: white;
}
</style>

