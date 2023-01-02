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
      class="container mx-auto px-2 py-3 flex justify-between items-center"
    >
      <h1 class="text-2xl font-medium">
        <nuxt-link class="flex items-center space-x-2" to="/">
          <img class="h-10 w-10 objct-cover" src="~/static/icon.png" />
          <span class="text-sm md:text-md">PANAFSTRAG</span></nuxt-link
        >
      </h1>
      <div>
        <button
          @click="toggleDropdown()"
          id="mobile-open-button"
          class="text-3xl sm:hidden focus:outline-none"
        >
          <span v-if="showDropdown === false"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="bevel"
            >
              <path d="M21 9.5H7M21 4.5H3M21 14.5H3M21 19.5H7" /></svg
          ></span>
          <span
            v-if="showDropdown === true"
            class="h-2 w-2 text-white font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="bevel"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </span>
        </button>

        <nav
          class="
            hidden
            sm:flex
            justify-between
            items-center
            md:space-x-6
            lg:space-x-8
            text-sm
          "
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
              :class="[isHome ? 'text-green-500' : '']"
              class="
                uppercase
                hover:opacity-90 hover:text-green-500
                font-light
                text-xs
                select-none
              "
              >Home</nuxt-link
            >
          </div>

          <!-- <div class="inline-flex items-stretch bg-white"> -->
          <b-dropdown
            id="dropdown-divider"
            class="text-sm"
            toggle-class="text-decoration-none"
            no-caret
            variant="link"
            size="sm"
          >
            <template #button-content>
              <span
                class="
                  uppercase
                  hover:opacity-90 hover:text-green-500
                  font-light
                  text-xs
                  select-none
                  text-white
                "
                >ABOUT US</span
              >
            </template>
            <b-dropdown-item @click="handleBoardMembers()"
              >Board Members</b-dropdown-item
            >
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item @click="handleMiniCellsDropdown()"
              >PANAFSTRAG Cells</b-dropdown-item
            >
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item @click="handleObjectivesDropdown()"
              >PANAFSTRAG OBJECTIVES</b-dropdown-item
            >
          </b-dropdown>
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
              :class="[isProgramActive ? 'text-green-500' : '']"
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
              select-none
            "
          >
            <nuxt-link
              :class="[isArchiveActive ? 'text-green-500' : '']"
              to="/archives"
              class="hover:opacity-90 hover:text-green-500 font-light text-xs"
              >Archives</nuxt-link
            >
          </div>
          <div
            @click="handleSidebarRadio"
            class="
              uppercase
              transition
              ease-in
              delay-100
              hover:-translate-y-1 hover:scale-110
              duration-300
              select-none
            "
          >
            <a
              :class="[isRadioActive ? 'text-green-500' : '']"
              href="https://panafstragradio.com/"
              class="hover:opacity-90 hover:text-green-500 font-light text-xs"
              >Radio</a
            >
          </div>
        </nav>

        <div
          v-if="showDropdown"
          class="
            md:hidden
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
            select-none
          "
        >
          <div class="px-4 py-6">
            <!-- <span class="block h-10 w-32 rounded-lg bg-gray-200"></span> -->

            <nav aria-label="Main Nav" class="mt-14 flex flex-col space-y-4">
              <button
                @click="handleHome()"
                :class="[isHome ? 'bg-gray-100' : '']"
                class="
                  flex
                  items-center
                  rounded-lg
                  p-3
                  text-gray-500
                  focus:outline-none focus:ring focus:ring-gray-100
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="square"
                  stroke-linejoin="bevel"
                >
                  <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
                  <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
                </svg>

                <span class="ml-3 text-sm font-medium select-none"> HOME</span>
              </button>

              <button
                @click="handleAboutUs()"
                :class="[isAboutUs ? 'bg-gray-100' : '']"
                class="
                  flex
                  items-center
                  rounded-lg
                  p-3
                  text-gray-500
                  focus:outline-none focus:ring focus:ring-gray-100
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="square"
                  stroke-linejoin="bevel"
                >
                  <path
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>

                <span class="ml-3 text-sm uppercase font-medium select-none">
                  ABOUT US</span
                >
              </button>

              <button
                @click="handleCells()"
                :class="[isCells ? 'bg-gray-100' : '']"
                class="
                  flex
                  items-center
                  rounded-lg
                  p-3
                  text-gray-500
                  focus:outline-none focus:ring focus:ring-gray-100
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="square"
                  stroke-linejoin="bevel"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path
                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                  ></path>
                </svg>

                <span class="ml-3 text-sm font-medium select-none">
                  CELLS & RESPONSIBILITIES
                </span>
              </button>

              <button
                @click="handleProgrammes()"
                :class="[isProgramActive ? 'bg-gray-100' : '']"
                class="
                  flex
                  items-center
                  rounded-lg
                  p-3
                  text-gray-500
                  focus:outline-none focus:ring focus:ring-gray-100
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="square"
                  stroke-linejoin="bevel"
                >
                  <path
                    d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                  ></path>
                </svg>
                <span class="ml-3 text-sm font-medium select-none">
                  PROGRAMMES
                </span>
              </button>

              <button
                @click="handleBoardMobileMembers()"
                :class="[isMobileBoardMembersActive ? 'bg-gray-100' : '']"
                class="
                  flex
                  items-center
                  rounded-lg
                  p-3
                  text-gray-500
                  focus:outline-none focus:ring focus:ring-gray-100
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
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
                <span class="ml-3 text-sm font-medium select-none">
                  BOARD MEMBERS
                </span>
              </button>
              <button
                @click="handleArchives()"
                :class="[isArchiveActive ? 'bg-gray-100' : '']"
                class="
                  flex
                  items-center
                  rounded-lg
                  p-3
                  text-gray-500
                  focus:outline-none focus:ring focus:ring-gray-100
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="square"
                  stroke-linejoin="bevel"
                >
                  <path
                    d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
                  />
                  <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
                </svg>

                <span class="ml-3 text-sm font-medium select-none">
                  ARCHIVES
                </span>
              </button>

              <button
                @click="handleRadioRedirection"
                :class="[isRadioActive ? 'bg-gray-100' : '']"
                class="
                  flex
                  items-center
                  rounded-lg
                  p-3
                  text-gray-500
                  focus:outline-none focus:ring focus:ring-gray-100
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="square"
                  stroke-linejoin="bevel"
                >
                  <circle cx="12" cy="12" r="2"></circle>
                  <path
                    d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
                  ></path>
                </svg>

                <span class="pl-3">TV/radio</span>
              </button>
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
      dropdown: false,
      active: true,
      isHome: false,
      isProgramActive: false,
      isReportActive: false,
      isArchiveActive: false,
      isRadioActive: false,
      isMobileBoardMembersActive: false,
      isAboutUs: false,
      isCells: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    switchDropdown() {
      this.dropdown = !this.dropdown;
    },
    handleBoardMembers() {
      this.$router.push({ path: "/board-members" });
      this.switchDropdown();
    },
    handleMiniCellsDropdown() {
      this.$router.push({ path: "/cells" });
      this.switchDropdown();
    },
    handleObjectivesDropdown() {
      this.$router.push({ path: "/about-us" });
      this.switchDropdown();
    },
    handleHome() {
      this.$router.push({ path: "/" });
      this.toggleDropdown();
    },
    handleAboutUs() {
      this.$router.push({ path: "/about-us" });
      this.toggleDropdown();
    },
    handleCells() {
      this.$router.push({ path: "/cells" });
      this.toggleDropdown();
    },
    handleProgrammes() {
      this.$router.push({ path: "/programmes" });
      this.toggleDropdown();
    },
    handleBoardMobileMembers() {
      this.$router.push({ path: "/board-members" });
      this.toggleDropdown();
    },
    handleReports() {
      this.$router.push({ path: "/reports" });
      this.toggleDropdown();
    },
    handleArchives() {
      this.$router.push({ path: "/archives" });
      this.toggleDropdown();
    },

    handleSidebarRadio() {
      this.isRadioActive = true;
      this.isHome = false;
      this.isProgramActive = false;
      this.isMobileBoardMembersActive = false;
      this.isReportActive = false;
      this.isArchiveActive = false;
      this.isRadioActive = false;
      this.isAboutUs = false;
      this.isCells = false;
    },
    handleRadioRedirection() {
      window.location.href = "https://panafstragradio.com";
    },
  },
  watch: {
    $route: {
      handler(value) {
        if (value.fullPath === "/") {
          this.isHome = true;
          this.dropdown = false;
        } else {
          this.isHome = false;
        }

        if (value.fullPath === "/programmes") {
          this.isProgramActive = true;
          this.dropdown = false;
        } else {
          this.isProgramActive = false;
        }

        if (value.fullPath === "/board-members") {
          this.isMobileBoardMembersActive = true;
          this.dropdown = false;
        } else {
          this.isMobileBoardMembersActive = false;
        }

        if (value.fullPath === "/reports") {
          this.isReportActive = true;
          this.dropdown = false;
        } else {
          this.isReportActive = false;
        }

        if (value.fullPath === "/archives") {
          this.isArchiveActive = true;
          this.dropdown = false;
        } else {
          this.isArchiveActive = false;
        }

        if (value.fullPath === "/about-us") {
          this.isAboutUs = true;
          this.dropdown = false;
        } else {
          this.isAboutUs = false;
        }
        if (value.fullPath === "/cells") {
          this.isCells = true;
          this.dropdown = false;
        } else {
          this.isCells = false;
        }
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>
