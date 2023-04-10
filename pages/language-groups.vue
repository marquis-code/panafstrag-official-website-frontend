<template>
  <Transition name="fade">
    <b-container class="pb-6">
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
          <div class="mt-6">
            <h2 class="text-2xl font-bold sm:text-3xl">
              PANAFSTRAG Language groups.
            </h2>

            <p class="mt-4 text-gray-600">
              PANAFSTRAG Language Groups brings together Africana people whose
              countries have that language as one of the official languages or
              as mother tongue. It is open to all Africana people who are ready
              as volunteers to offer actionable thoughts and ideas and also work
              well in one of the PANAFSTRAG Cells with a team to activate these
              ideas successfully.
            </p>
          </div>

      <h3 class="text-2xl font-medium pt-4">FUNCTION</h3>
      <p class="text-gray-600 pb-6">
        The Group provides a platform for easy production of knowledge and ideas
        without language obstacles.
      </p>
      <p class="text-gray-600 py-3">
        The Group is to provide a common linguistic, Ourstory (good and bad)
        economic, social and cultural platform for Africana people in all
        official languages of the Africana countries. The Groups are the linkage
        and enabler of collaboration through these languages with the official
        languages and the international political groupings; e.g:
      </p>
      <section
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-3"
      >
        <a
          href="#"
          class="
            relative
            block
            overflow-hidden
            rounded-xl
            bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)]
            bg-cover bg-center bg-no-repeat
          "
        >
          <span
            class="
              absolute
              right-4
              top-4
              z-10
              inline-flex
              items-center
              rounded-full
              bg-black
              px-3
              py-1
              text-xs
              font-semibold
              text-white
            "
          >
            <!-- 4.5 -->

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-1.5 h-4 w-4 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </span>

          <div class="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
            <h3 class="text-2xl font-bold">Afro-Anglophone</h3>

            <p class="text-sm">Anglophone and Caricom to the Commonwealth</p>
          </div>
        </a>

        <a
          href="#"
          class="
            relative
            block
            overflow-hidden
            rounded-xl
            bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)]
            bg-cover bg-center bg-no-repeat
          "
        >
          <span
            class="
              absolute
              right-4
              top-4
              z-10
              inline-flex
              items-center
              rounded-full
              bg-black
              px-3
              py-1
              text-xs
              font-semibold
              text-white
            "
          >
            <!-- 4.5 -->

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-1.5 h-4 w-4 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </span>

          <div class="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
            <h3 class="text-2xl font-bold">Afro-Francophone</h3>

            <p class="text-sm">Francophone to the Francophone Organization</p>
          </div>
        </a>

        <a
          href="#"
          class="
            relative
            block
            overflow-hidden
            rounded-xl
            bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)]
            bg-cover bg-center bg-no-repeat
          "
        >
          <span
            class="
              absolute
              right-4
              top-4
              z-10
              inline-flex
              items-center
              rounded-full
              bg-black
              px-3
              py-1
              text-xs
              font-semibold
              text-white
            "
          >
            <!-- 4.5 -->

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-1.5 h-4 w-4 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </span>

          <div class="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
            <h3 class="text-2xl font-bold">Afro-Lusophone</h3>

            <p class="text-sm">Lusophone to the Lusophone community</p>
          </div>
        </a>

        <a
          href="#"
          class="
            relative
            block
            overflow-hidden
            rounded-xl
            bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)]
            bg-cover bg-center bg-no-repeat
          "
        >
          <span
            class="
              absolute
              right-4
              top-4
              z-10
              inline-flex
              items-center
              rounded-full
              bg-black
              px-3
              py-1
              text-xs
              font-semibold
              text-white
            "
          >
            <!-- 4.5 -->

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-1.5 h-4 w-4 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </span>

          <div class="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
            <h3 class="text-2xl font-bold">Afro-Dutch</h3>

            <p class="text-sm">Dutch to the Dutch Community</p>
          </div>
        </a>

        <a
          href="#"
          class="
            relative
            block
            overflow-hidden
            rounded-xl
            bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)]
            bg-cover bg-center bg-no-repeat
          "
        >
          <span
            class="
              absolute
              right-4
              top-4
              z-10
              inline-flex
              items-center
              rounded-full
              bg-black
              px-3
              py-1
              text-xs
              font-semibold
              text-white
            "
          >
            <!-- 4.5 -->

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-1.5 h-4 w-4 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </span>

          <div class="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
            <h3 class="text-2xl font-bold">Afro-Hispanish</h3>

            <p class="text-sm">Spanish to the Spanish Community</p>
          </div>
        </a>

        <a
          href="#"
          class="
            relative
            block
            overflow-hidden
            rounded-xl
            bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)]
            bg-cover bg-center bg-no-repeat
          "
        >
          <span
            class="
              absolute
              right-4
              top-4
              z-10
              inline-flex
              items-center
              rounded-full
              bg-black
              px-3
              py-1
              text-xs
              font-semibold
              text-white
            "
          >
            <!-- 4.5 -->

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-1.5 h-4 w-4 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </span>

          <div class="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
            <h3 class="text-2xl font-bold">Afro-Arab</h3>

            <p class="text-sm">
              Arab to the Arab Institutions and Organizations.
            </p>
          </div>
        </a>
      </section>

      <h3 class="text-2xl font-medium pt-6">MEMBERSHIP</h3>
      <p class="text-gray-600 py-2">
        The Co-Leaders of each Group will forward nominees with C.Vs as members
        to the Board for ratification or rejection.
      </p>
      <p class="text-gray-600">
        Other members with Language skills cannot be members as there is an
        opportunity to work together in the Cells.
      </p>

      <h3 class="text-2xl font-medium pt-4">LEADERSHIP</h3>
      <p class="text-gray-600 py-2">
        Co-Leaders (1man & 1 woman) appointed from the Board with one from the
        Continent and the other from the 6th Region.
      </p>
      <p class="text-gray-600">
        Co-Leaders will represent each Group on the Board; who is preferably
        bilingual to include English
      </p>

      <h3 class="text-2xl font-medium pt-4">FEES</h3>
      <p class="text-gray-600">
        No fees are payable but donations in any form for projects and
        activities of the Cells are encouraged, Language Groups will organize
        activities through the Cells except for Group Meetings or external
        activities in that language.
      </p>
    </b-container>
  </Transition>
</template>

<script>
export default {
  name: "language-groups",
  scrollToTop: true,
  data() {
    return {
      title: "Pan Africa language groups",
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
