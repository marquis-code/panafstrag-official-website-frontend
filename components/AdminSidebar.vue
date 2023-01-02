<template>
  <main class="flex h-screen">
    <div
      :class="[isOpen ? 'w-2/12 bg-white border h-full py-6' : 'hidden']"
      class="relative"
    >
      <div
        :class="[isOpen ? 'text-sm' : '']"
        class="
          flex
          justify-start
          items-start
          font-medium
          lg:pt-0
          xl:pt-7
          px-3
          lg:pb-0
        "
      >
        <nuxt-link class="flex items-center lg:space-x-3" to="/">
          <img
            :class="[isOpen ? 'lg:visible lg:h-6 lg:w-6' : 'hidden']"
            class="h-10 w-10"
            src="@/static/panaafricalogo.png"
          /><span class="font-bold">PANAFSTRAG</span>
        </nuxt-link>
      </div>
      <section class="space-y-6 mt-6 px-3">
        <button
          :class="[
            isHomeActive
              ? 'bg-black text-white w-full p-2 rounded-md'
              : 'text-gray-400',
          ]"
          class="flex items-center space-x-2 mt-6"
          @click="$router.push('/admin/')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span class="sm:text-sm"> Dashboard</span>
        </button>
        <button
          :class="[
            isMembersActive
              ? 'bg-black text-white w-full p-2 rounded-md'
              : 'text-gray-400',
          ]"
          class="flex items-center space-x-2"
          @click="$router.push('/admin/board-members/')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span class="sm:text-sm">Members</span>
        </button>

        <button
          :class="[
            isProgramActive
              ? 'bg-black text-white w-full p-2 rounded-md'
              : 'text-gray-400',
          ]"
          class="flex items-center space-x-2"
          @click="$router.push('/admin/programmes/')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          >
            <polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon>
            <line x1="3" y1="22" x2="21" y2="22"></line>
          </svg>
          <span class="sm:text-sm">Programmes</span>
        </button>

        <button
          :class="[
            isObjectivesActive
              ? 'bg-black text-white w-full p-2 rounded-md'
              : 'text-gray-400',
          ]"
          class="flex items-center space-x-2"
          @click="$router.push('/admin/objectives/')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          >
            <path d="M3 3v18h18" />
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
          </svg>
          <span class="sm:text-sm"> Objectives</span>
        </button>
        <button
          :class="[
            isResponsibilityActive
              ? 'bg-black text-white w-full p-2 rounded-md'
              : 'text-gray-400',
          ]"
          class="flex items-center space-x-2"
          @click="$router.push('/admin/responsibilities/')"
        >
          <b-icon class="" icon="trophy" variant="secondary"></b-icon>
          <span class="sm:text-sm"> Responsibilities</span>
        </button>
      </section>
      <button
        class="
          absolute
          bottom-2
          left-5
          rounded-md
          text-red-500
          bg-red-200
          px-3
          py-2
          w-10/12
        "
        @click="handleLogout()"
      >
        Logout
      </button>
    </div>

    <div
      :class="[
        isOpen
          ? 'w-10/12 bg-white border h-full py-6 overflow-scroll'
          : 'w-full h-full',
      ]"
    >
      <b-container class="">
        <div
          :class="[
            isOpen
              ? 'hidden'
              : 'visible flex justify-between items-center py-3 w-full',
          ]"
        >
          <h1 class="text-2xl font-medium">
            <nuxt-link class="flex items-center space-x-1" to="/">
              <img class="h-10 w-10 objct-cover" src="~/static/icon.png" />
              <span class="text-lg font-semibold">PANAFSTRAG</span></nuxt-link
            >
          </h1>
          <div class="cursor-pointer">
            <svg
              v-b-toggle.sidebar-mobile
              class="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#747070"
              stroke-width="1.5"
              stroke-linecap="square"
              stroke-linejoin="bevel"
            >
              <path d="M21 9.5H7M21 4.5H3M21 14.5H3M21 19.5H7" />
            </svg>
          </div>
        </div>
        <div
          :class="[isOpen ? 'visible' : 'hidden']"
          class="container mx-auto px-6 pt-2 md:px-0 space-y-1"
        >
          <p class="text-gray-400 text-xs">OVERVIEW</p>
          <p class="font-bold text-xl">{{ currentTitle }}</p>
        </div>

        <div>
          <b-sidebar
            id="sidebar-mobile"
            title="Sidebar"
            no-header
            backdrop
            shadow
          >
            <div class="px-3 py-2 mt-6">
              <h1 class="text-2xl font-medium">
                <nuxt-link class="flex items-center space-x-2" to="/">
                  <img class="h-10 w-10 objct-cover" src="~/static/icon.png" />
                  <span class="text-sm md:text-md text-lg font-bold"
                    >PANAFSTRAG</span
                  ></nuxt-link
                >
              </h1>

              <button
                :class="[
                  isHomeActive
                    ? 'bg-black text-white w-full p-2 rounded-md'
                    : 'text-gray-400',
                ]"
                class="flex items-center space-x-2 mt-6"
                @click="$router.push('/admin/')"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="square"
                  stroke-linejoin="bevel"
                >
                  <path
                    d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                  ></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span class="text-base"> Dashboard</span>
              </button>

              <p class="text-gray-400 pt-6">Config</p>
              <hr class="text-gray-400" />
              <section class="space-y-6 mt-6">
                <button
                  :class="[
                    isMembersActive
                      ? 'bg-black text-white w-full p-2 rounded-md'
                      : 'text-gray-400',
                  ]"
                  class="flex items-center space-x-2"
                  @click="$router.push('/admin/board-members/')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="square"
                    stroke-linejoin="bevel"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span class="text-base">Board Members</span>
                </button>

                <button
                  :class="[
                    isProgramActive
                      ? 'bg-black text-white w-full p-2 rounded-md'
                      : 'text-gray-400',
                  ]"
                  class="flex items-center space-x-2"
                  @click="$router.push('/admin/programmes/')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="square"
                    stroke-linejoin="bevel"
                  >
                    <polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon>
                    <line x1="3" y1="22" x2="21" y2="22"></line>
                  </svg>
                  <span class="text-base">Programmes</span>
                </button>

                <button
                  class="flex items-center space-x-2"
                  :class="[
                    isObjectivesActive
                      ? 'bg-black text-white w-full p-2 rounded-md'
                      : 'text-gray-400',
                  ]"
                  @click="$router.push('/admin/objectives/')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="square"
                    stroke-linejoin="bevel"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                  </svg>
                  <span class="text-base"> Objectives</span>
                </button>
                <button
                  :class="[
                    isResponsibilityActive
                      ? 'bg-black text-white w-full p-2 rounded-md'
                      : 'text-gray-400',
                  ]"
                  class="flex items-center space-x-2"
                  @click="$router.push('/admin/responsibilities/')"
                >
                  <b-icon class="" icon="trophy" variant="secondary"></b-icon>
                  <span class="text-base"> Responsibilities</span>
                </button>
              </section>
            </div>
            <template #footer>
              <div
                class="d-flex bg-dark text-light align-items-center px-3 py-2"
              >
                <strong class="mr-auto"
                  ><b-avatar></b-avatar>
                  <span class="text-xs">
                    {{ username ? username : "Admin" }}</span
                  ></strong
                >
                <b-button size="sm" @click="handleLogout">Logout</b-button>
              </div>
            </template>
          </b-sidebar>
        </div>
      </b-container>
      <hr :class="[isOpen ? 'visible' : 'hidden']" />
      <Nuxt />
    </div>
  </main>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
export default {
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
      username: null,
      isOpen: true,
      currentPath: "",
      isHomeActive: false,
      isMembersActive: false,
      isObjectivesActive: false,
      isResponsibilityActive: false,
      isProgramActive: false,
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener("resize", this.onResize);
    // this.getLoggedUser();
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  watch: {
    $route: {
      immediate: true,
      handler(value) {
        this.currentPath = value.path;

        if (this.currentPath === "/admin" || this.currentPath === "/admin/") {
          this.isHomeActive = true;
        } else {
          this.isHomeActive = false;
        }

        if (
          this.currentPath === "/admin/board-members/" ||
          this.currentPath === "/admin/board-members/create"
        ) {
          this.isMembersActive = true;
        } else {
          this.isMembersActive = false;
        }

        if (
          this.currentPath === "/admin/objectives/" ||
          this.currentPath === "/admin/objectives/create"
        ) {
          this.isObjectivesActive = true;
        } else {
          this.isObjectivesActive = false;
        }

        if (
          this.currentPath === "/admin/responsibilities/" ||
          this.currentPath === "/admin/responsibilities/create"
        ) {
          this.isResponsibilityActive = true;
        } else {
          this.isResponsibilityActive = false;
        }

        if (
          this.currentPath === "/admin/programmes/" ||
          this.currentPath === "/admin/programmes/create"
        ) {
          this.isProgramActive = true;
        } else {
          this.isProgramActive = false;
        }
      },
      deep: true,
    },
  },
  computed: {
    currentTitle() {
      return this.currentPath === "/admin" || this.currentPath === "/admin/"
        ? "Dashboard"
        : this.currentPath === "/admin/board-members/"
        ? "Board Members"
        : this.currentPath === "/admin/board-members/create"
        ? "Create board member"
        : this.currentPath === "/admin/objectives/"
        ? "Objectives"
        : this.currentPath === "/admin/responsibilities/"
        ? "Responsibilities"
        : this.currentPath === "/admin/programmes/"
        ? "Programmes"
        : this.currentPath === "/admin/programmes/create"
        ? "Create Programme"
        : this.currentPath === "/admin/objectives/create"
        ? "Create Objective"
        : this.currentPath === "/admin/responsibilities/create"
        ? "Create Responsibilities"
        : "";
    },
  },
  methods: {
    // getLoggedUser() {
    //   this.username = localStorage.getItem("user");
    // },
    onResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      let mql1 = window.matchMedia("(max-width: 768px)");
      let mql2 = window.matchMedia("(max-width: 640px)");
      let mql3 = window.matchMedia("(max-width: 1024px)");
      if (mql1.matches || mql2.matches) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
    },
    handleLogout() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout!",
      }).then((result) => {
        if (result.value) {
          this.Logout();
        } else {
          this.$swal("Cancelled", "You're still logged in!", "info");
        }
      });
    },
    async Logout() {
      // await this.$auth.logout();
      localStorage.removeItem("userId");
      this.$router.push("/login");
      this.$swal("Logged Out!", "You have successfully logged out.", "success");
    },
  },
};
</script>

<style>
</style>
