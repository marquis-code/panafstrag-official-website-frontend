<template>
  <main class="min-h-500">
    <section class="bg-opacity-100 bg-black">
      <main
        class="background w-full h-full bg-blend-overlay pt-16 bg-opacity-70 bg-black"
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
    <!-- <board-members></board-members> -->
    <section class="bg-gray-900 text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
          <h2 class="text-3xl font-bold sm:text-4xl">Our Team</h2>
          <nuxt-link to="/board-members" class="flex justify-end items-end"
            >View More
            <span
              aria-hidden="true"
              class="block ml-2 transition group-hover:translate-x-0.5"
            >
              &rarr;
            </span></nuxt-link
          >
        </div>
        <section
          class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <article
            class="
              overflow-hidden
              rounded-lg
              border border-gray-100
              shadow-sm
              dark:border-gray-800 dark:shadow-gray-700/25
            "
          >
            <img
              alt="Office"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="h-56 w-full object-cover"
            />

            <div class="p-4 sm:p-6">
              <a href="#">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                  Prof. António Luís Jorge Gumbe
                  <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
                </h3>
              </a>

              <p
                class="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-gray-500
                  line-clamp-3
                  dark:text-gray-400
                "
              >
                University of Angola
              </p>

              <p
                class="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-gray-500
                  line-clamp-3
                  dark:text-gray-400
                "
              >
                gumbe.jorge@gmail.com
              </p>

              <nuxt-link
                :to="'/board-members/' + id"
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
          <article
            class="
              overflow-hidden
              rounded-lg
              border border-gray-100
              shadow-sm
              dark:border-gray-800 dark:shadow-gray-700/25
            "
          >
            <img
              alt="Office"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="h-56 w-full object-cover"
            />

            <div class="p-4 sm:p-6">
              <a href="#">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                  Eduardo Lourenço Viana
                  <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
                </h3>
              </a>

              <p
                class="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-gray-500
                  line-clamp-3
                  dark:text-gray-400
                "
              >
                Marioza & Viana- Advogados Associados, Brazil.
              </p>

              <p
                class="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-gray-500
                  line-clamp-3
                  dark:text-gray-400
                "
              >
                lourencoviana1@gmail.com
              </p>

              <nuxt-link
                :to="'/board-members/' + id"
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
          <article
            class="
              overflow-hidden
              rounded-lg
              border border-gray-100
              shadow-sm
              dark:border-gray-800 dark:shadow-gray-700/25
            "
          >
            <img
              alt="Office"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="h-56 w-full object-cover"
            />

            <div class="p-4 sm:p-6">
              <a href="#">
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                  Prof. Solomon Negash
                  <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
                </h3>
              </a>

              <p
                class="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-gray-500
                  line-clamp-3
                  dark:text-gray-400
                "
              >
                Kennesaw State University
              </p>

              <p
                class="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-gray-500
                  line-clamp-3
                  dark:text-gray-400
                "
              >
                560 Parliament Garden Way NW, Mail Drop #0405 Kennesaw, GA 30144
              </p>

              <p
                class="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-gray-500
                  line-clamp-3
                  dark:text-gray-400
                "
              >
                snegash@kennesaw.edu.
              </p>

              <nuxt-link
               :to="'/board-members/' + id"
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
      </div>
    </section>
  </main>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
// import BoardMembers from "@/pages/board-members.vue";
export default {
  name: "home",
  scrollToTop: true,
   loading: false,
  components: {
    Carousel,
    // BoardMembers,
  },
  data() {
    return {
      title: "Home",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Pan Africa &#8211; Original thinking, research help add to human knowledge",
        },
      ],
    };
  },
};
</script>

<style scoped>
.background {
  background-image: url("~/static/images/volunteering.jpeg");
  background-size: cover;
}
</style>

