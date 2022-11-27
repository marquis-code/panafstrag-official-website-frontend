<template>
  <header
    class="
      text-white
      w-full
      sticky
      top-0
      z-40
      bg-blend-overlay bg-opacity-100 bg-black
    "
  >
    <section
      class="container mx-auto p-4 py-6 flex justify-between items-center"
    >
      <h1 class="text-2xl font-medium">
        <nuxt-link class="flex items-center space-x-3" to="/"
          ><img class="h-10 w-10 objct-cover" src="~/static/icon.png" />
          <span class="text-md">PANAFSTRAG</span></nuxt-link
        >
      </h1>
      <div>
        <button
          @click="toggleDropdown()"
          id="mobile-open-button"
          class="text-3xl sm:hidden focus:outline-none"
        >
          <span v-if="showDropdown === false">&#9776;</span>
          <span
            v-if="showDropdown === true"
            class="h-2 w-2 text-white font-medium font-mono"
            >X</span
          >
        </button>

        <nav
          class="hidden sm:flex justify-between items-center space-x-8 text-sm"
          aria-label="main"
        >
          <div
            class="
              transition
              ease-in
              delay-100
              hover:-translate-y-1 hover:scale-110
              duration-300
            "
          >
            <nuxt-link
              to="/"
              class="
                uppercase
                hover:opacity-90 hover:text-green-500
                font-light
                text-xs
              "
              >Home</nuxt-link
            >
          </div>
          <!-- <div
            class="
              uppercase
              transition
              ease-in
              delay-100
              hover:-translate-y-1 hover:scale-110
              duration-300
            "
          >
            <nuxt-link
              to="/about-us"
              class="hover:opacity-90 hover:text-green-500 font-light text-xs"
              >About Us</nuxt-link
            >
          </div> -->

          <div class="inline-flex items-stretch bg-white">
            <a href.prevent="#" class="text-sm text-white bg-black cursor-pointer" @click="switchDropdown"> About Us </a>

            <div class="relative" v-if="dropdown">
              <a
                href="#"
                type="button"
                class="
                  inline-flex
                  border-none
                  outline-none
                  h-full
                  items-center
                  justify-center
                  text-gray-600
                "
              >
                <span class="sr-only">About Us</span>
                <!-- <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="bg-black"
                  width="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="square"
                  stroke-linejoin="bevel"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg> -->
              </a>

              <div
                class="
                  absolute
                  right-0
                  z-10
                  mt-4
                  w-56
                  origin-top-right
                  rounded-md
                  border border-gray-100
                  bg-white
                  shadow-lg
                "
                role="menu"
              >
                <div class="p-2">
                  <button
                     @click="handleBoardMembers()"
                    class="
                      block
                      rounded-lg
                      px-4
                      py-2
                      text-sm text-gray-500
                      hover:bg-gray-50 hover:text-gray-700
                    "
                    role="menuitem"
                  >
                    Our Board Members
                  </button>

                  <button
                    @click="handleCells()"
                    class="
                      block
                      rounded-lg
                      px-4
                      py-2
                      text-sm text-gray-500
                      hover:bg-gray-50 hover:text-gray-700
                    "
                    role="menuitem"
                  >
                    Cells & Responsibilities
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- <div
            class="
              uppercase
              transition
              ease-in
              delay-100
              hover:-translate-y-1 hover:scale-110
              duration-300
            "
          >
            <nuxt-link
              to="/cells"
              class="hover:opacity-90 hover:text-green-500 font-light text-xs"
              >Cells & Responsibilities</nuxt-link
            >
          </div> -->
          <div
            class="
              uppercase
              transition
              ease-in
              delay-100
              hover:-translate-y-1 hover:scale-110
              duration-300
            "
          >
            <nuxt-link
              to="/programmes"
              class="hover:opacity-90 hover:text-green-500 font-light text-xs"
              >Programme</nuxt-link
            >
          </div>
          <div
            class="
              uppercase
              transition
              ease-in
              delay-100
              hover:-translate-y-1 hover:scale-110
              duration-300
            "
          >
            <nuxt-link
              to="/reports"
              class="hover:opacity-90 hover:text-green-500 font-light text-xs"
              >Reports and Policies Briefs</nuxt-link
            >
          </div>
           <div
            class="
              uppercase
              transition
              ease-in
              delay-100
              hover:-translate-y-1 hover:scale-110
              duration-300
            "
          >
            <nuxt-link
              to="/archives"
              class="hover:opacity-90 hover:text-green-500 font-light text-xs"
              >Archives</nuxt-link
            >
          </div>
        </nav>

        <div
          v-if="showDropdown"
          class="
            flex
            absolute
            top-0
            left-0
            h-screen
            z-50
            flex-col
            justify-between
            bg-black
            text-white
          "
        >
          <div class="px-4 py-6">
            <!-- <span class="block h-10 w-32 rounded-lg bg-gray-200"></span> -->

            <nav aria-label="Main Nav" class="mt-14 flex flex-col space-y-4">
              <nuxt-link
                to="/"
                class="
                  flex
                  items-center
                  rounded-lg
                  bg-gray-100
                  px-4
                  py-3
                  text-gray-700
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span
                  @click="toggleDropdown()"
                  class="ml-3 text-sm font-medium"
                >
                  Home
                </span>
              </nuxt-link>

              <nuxt-link
                to="/about-us"
                class="
                  flex
                  items-center
                  rounded-lg
                  px-4
                  py-3
                  text-gray-500
                  hover:bg-gray-100 hover:text-gray-700
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>

                <span
                  @click="toggleDropdown()"
                  class="ml-3 text-sm font-medium"
                >
                  About Us</span
                >
              </nuxt-link>

              <nuxt-link
                to="/cells"
                class="
                  flex
                  items-center
                  rounded-lg
                  px-4
                  py-3
                  text-gray-500
                  hover:bg-gray-100 hover:text-gray-700
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>

                <span
                  @click="toggleDropdown()"
                  class="ml-3 text-sm font-medium"
                >
                  CELLS & RESPONSIBILITIES
                </span>
              </nuxt-link>

              <nuxt-link
                to="/programme"
                class="
                  flex
                  items-center
                  rounded-lg
                  px-4
                  py-3
                  text-gray-500
                  hover:bg-gray-100 hover:text-gray-700
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>

                <span
                  @click="toggleDropdown()"
                  class="ml-3 text-sm font-medium"
                >
                  PROGRAMMES
                </span>
              </nuxt-link>

              <nuxt-link
                to="/reports"
                class="
                  flex
                  items-center
                  rounded-lg
                  px-4
                  py-3
                  text-gray-500
                  hover:bg-gray-100 hover:text-gray-700
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>

                <span
                  @click="toggleDropdown()"
                  class="ml-3 text-sm font-medium"
                >
                  REPORTS AND POLICIES BRIEFS
                </span>
              </nuxt-link>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: "SideNavbar",
  data() {
    return {
      showDropdown: false,
      dropdown: false
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    switchDropdown() {
      this.dropdown = !this.dropdown;
    },
    handleBoardMembers(){
      this.$router.push({ path: "/board-members" });
      this.switchDropdown();
    },
    handleCells(){
      this.$router.push({ path: "/cells" });
      this.switchDropdown();
    }
  },
};
</script>

<style>
</style>
