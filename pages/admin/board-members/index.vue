<template>
  <main>
    <Transition name="fade">
      <b-container>
        <section class="text-white">
          <div class="flex items-center justify-between my-3">
            <button @click="goBack()" class="outline-none border bg-gray-200 text-black px-3 py-1 rounded-md text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none"
                stroke="#747070" stroke-width="2" stroke-linecap="square" stroke-linejoin="bevel">
                <path d="M19 12H6M12 5l-7 7 7 7" />
              </svg>
            </button>

            <button @click="$router.push('/admin/board-members/create')"
              class="text-gray-400 rounded-md border bg-black text-white text-sm px-3 py-2">
              Create Board Member
            </button>
          </div>

          <div class="sm:flex-1 pb-0 mt-3">
            <label for="search" class="sr-only">Search</label>

            <input type="text" placeholder="Search.." v-model="search"
              class="w-full rounded-tr-md rounded-tl-md outline-none bg-white p-3 text-gray-700 transition border focus:border-white focus:outline-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent" />
          </div>
          <b-card class="mt-3">
            <b-table striped show-empty responsive :items="filteredMembers" :fields="fields" :busy="loading"  @row-clicked="viewMember"
              :current-page="currentPage" :per-page="perPage">
              <template #table-busy>
                <div class="text-center py-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <small>Loading...</small>
                </div>
              </template>

              <template #empty>
                <p class="text-center text-secondary py-2">
                  {{
                    search
                    ? `No board member found for search value: "${search}"`
                    : "No board member available"
                  }}
                </p>
              </template>

              <template #cell(sn)="data">
                <span class="font-medium py-2 text-sm">
                  {{ data.index + 1 }}</span>
              </template>

              <template #cell(name)="data">
                <div class="flex space-x-2">
                  <div class="z-50">
                    <enlargeable-image :src="data.item.avatar" class="z-50" animation_duration="700">
                      <img class="h-10 w-10 rounded-full" alt="" :src="data.item.avatar" />
                    </enlargeable-image>
                  </div>

                  <!-- <b-avatar :src="data.item.avatar" variant="dark"></b-avatar> -->
                  <div class="flex flex-col">
                    <span class="font-medium text-sm pb-0">{{
                      data.item.name
                    }}</span>
                    <p v-for="eachEmail in data.item.email" :key="eachEmail" class="font-medium py-2 text-sm pt-0">
                      <span class="mr-2 text-xs" v-for="userEmail in eachEmail.split(',')" :key="userEmail">{{ userEmail
                        === "null" ? null : userEmail }}</span>
                      <!-- {{ eachEmail ? eachEmail.split(',')[0] : "N/A" }} -->
                    </p>
                  </div>
                </div>
              </template>

              <template #cell(university)="data">
                <span class="font-medium py-2 text-sm">{{
                  data?.item?.university == "null"
                  ? "N/A"
                  : data?.item?.university &&
                    data?.item?.university.length > 25
                    ? data?.item?.university.slice(0, 25) + "..."
                    : data?.item?.university
                }}</span>
              </template>

              <template #cell(position)="data">
                <div class="py-2">
                  <p class="font-medium text-sm">
                    {{
                      data?.item?.position == "null"
                      ? "N/A"
                      : data?.item?.position &&
                        data?.item?.position.length > 25
                        ? data?.item?.position.slice(0, 25) + "..."
                        : data?.item?.position
                    }}
                  </p>
                  <p class="font-medium text-sm">
                    {{
                      data?.item?.faculty == "null"
                      ? "N/A"
                      : data?.item?.faculty
                    }}
                  </p>
                </div>
              </template>

              <template #cell(created_at)="data">
                <span class="font-medium py-2 text-sm">{{
                  $moment(data.item.createdAt).format("L")
                }}</span>`
              </template>

              <template #cell(actions)="data">
                <b-dropdown size="sm" variant="link" class="position-relative text-center w-100"
                  :toggle-class="'text-decoration-none'" :disabled="downloading" :no-caret="true" right>
                  <template #button-content>
                    <div class="flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </div>
                  </template>
                  <b-dropdown-item @click="handleEdit(data.item._id)">
                    <div class="flex items-center space-x-2">
                      <p>
                        <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                          viewBox="0 0 24 24" fill="none" stroke="#74d321" stroke-width="2" stroke-linecap="square"
                          stroke-linejoin="bevel">
                          <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                          <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                        </svg>
                      </p>

                      <p class="text-sm">Edit Member</p>
                    </div>
                  </b-dropdown-item>
                  <b-dropdown-item @click="handleDelete(data.item._id)">
                    <div class="flex items-center space-x-2">
                      <p>
                        <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                          viewBox="0 0 24 24" fill="none" stroke="#d33a21" stroke-width="2" stroke-linecap="square"
                          stroke-linejoin="bevel">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </p>
                      <p class="text-sm">Delete Member</p>
                    </div>
                  </b-dropdown-item>
                </b-dropdown>
              </template>
            </b-table>
            <div class="flex justify-end items-end z-0">
              <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" size="md"
                class="my-3"></b-pagination>
            </div>
          </b-card>
          <!-- </div> -->
        </section>
      </b-container>
    </Transition>

    <b-modal no-close-on-backdrop no-close-on-esc no-stacking hide-footer id="memberModal">
      <template #modal-title>
        <h1>Member Details:</h1>
      </template>

      <div class="mt-4">
        <div class="flex space-x-2">
          <b-avatar :src="memberData.avatar" variant="dark"></b-avatar>
          <div class="flex flex-col">
            <span class="font-medium text-sm pb-0">{{ memberData.name }}</span>
            <p v-for="eachEmail in memberData.email" :key="eachEmail" class="font-medium py-2 text-sm pt-0">
              <span class="mr-2 text-xs" v-for="userEmail in eachEmail.split(',')" :key="userEmail">{{ userEmail ===
                "null" ? null : userEmail }}</span>
            </p>
          </div>
        </div>
      </div>

      <div class="mt-4" v-if="memberData.startDate">
        <label class="font-medium text-sm">University</label>
        <span class="font-medium py-2 text-sm">{{
          memberData.university == "null"
          ? "N/A"
          : memberData.university && memberData.university.length > 25
            ? memberData.university.slice(0, 25) + "..."
            : memberData.university
        }}</span>
      </div>

      <div class="mt-4" v-if="memberData.endDate">
        <label class="font-medium text-sm">Position</label>
        <div class="py-2">
          <p class="font-medium text-sm">
            {{
              memberData.position == "null"
              ? "N/A"
              : memberData.position && memberData.position.length > 25
                ? memberData.position.slice(0, 25) + "..."
                : memberData.position
            }}
          </p>
          <p class="font-medium text-sm">
            {{ memberData.faculty == "null" ? "N/A" : memberData.faculty }}
          </p>
        </div>
      </div>

      <div class="flex justify-end items-center">
        <button @click="$bvModal.hide('memberModal')"
          class="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring">
          <span class="absolute inset-0 border border-red-600 group-active:border-red-500 rounded-full"></span>
          <span
            class="block border border-red-600 bg-red-600 rounded-full px-12 py-2 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
            Close
          </span>
        </button>
      </div>
    </b-modal>
  </main>
</template>


<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import EnlargeableImage from '@diracleo/vue-enlargeable-image';

export default {
  name: "board-members",
  layout: "admin",
  scrollToTop: true,
  components: {
    EnlargeableImage
  },
  data() {
    return {
      fields: [
        {
          key: "sn",
          label: "S/N",
          class: "font-medium text-gray-400 text-sm",
        },
        {
          key: "name",
          label: "Name",
          class: "font-medium text-gray-400 text-sm",
        },
        {
          key: "university",
          label: "University",
          class: "font-medium text-gray-400 text-sm",
        },
        {
          key: "position",
          label: "Position",
          class: "font-medium text-gray-400 text-sm",
        },
        {
          key: "created_at",
          label: "Date Created",
          class: "font-medium text-gray-400 text-sm",
        },
        {
          key: "actions",
          label: "Actions",
          class: "font-medium text-gray-400 text-sm",
        },
      ],
      boardMembers: [],
      currentPage: 1,
      perPage: 7,
      search: "",
      memberData: {},
      showModal: false,
      totalRows: 1,
      loading: true,
      isDeleting: false,
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
    this.fetchBoardMembers();
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.boardMembers.length;
  },
  methods: {
    viewMember(value) {
      this.memberData = value;
      this.$bvModal.show("memberModal");
    },
    async fetchBoardMembers() {
      this.loading = true;
      try {
        this.loading = true;
        let res = await this.$axios.get(
          "https://panafstrag.onrender.com/api/panAfrica/board-member"
        );
        this.boardMembers = res.data;
        this.totalRows = res.data.length;
      } catch (error) {
        this.$toast
          .error("Something went wrong, please try again.")
          .goAway(1500);
      } finally {
        this.loading = false;
      }
    },

    goBack() {
      this.$router.go(-1);
    },
    handleEdit(id) {
      this.$router.push(`/admin/board-members/${id}`);
    },
    handleDelete(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.triggerDeletion(id);
        } else {
          this.$swal("Cancelled", "Your file is still intact", "info");
        }
      });
    },

    async triggerDeletion(id) {
      try {
        await this.$axios.delete(
          `https://panafstrag.onrender.com/api/panAfrica/board-member/${id}`
        );
        this.$toast.success("Board member has been removed").goAway(1500);
        await this.fetchBoardMembers();
      } catch (error) {
        this.$toast.error(error.response.data.errorMessage).goAway(1500);
      }
    },
  },
  computed: {
    filteredMembers() {
      const search = this.search.toLowerCase();
      return this.boardMembers.filter((member) => {
        return (
          member?.name.toLowerCase?.().includes(search) ||
          member?.position.toLowerCase?.().includes(search) ||
          member?.faculty.toLowerCase?.().includes(search) ||
          member?.university.toLowerCase?.().includes(search)
        );
      });
    },
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
