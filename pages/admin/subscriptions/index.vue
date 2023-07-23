<template>
  <Transition name="fade">
    <b-container>
      <section class="text-white">
        <div class="flex items-center justify-between my-3">
          <!-- <h2 class="text-xl my-6 font-medium text-black">
          PANAFRICANA programmes
        </h2> -->
          <button @click="goBack()" class="outline-none border bg-gray-200 text-black px-3 py-1 rounded-md text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none"
              stroke="#747070" stroke-width="2" stroke-linecap="square" stroke-linejoin="bevel">
              <path d="M19 12H6M12 5l-7 7 7 7" />
            </svg>
          </button>
        </div>

        <div class="sm:flex-1 pb-0 mt-3">
          <label for="search" class="sr-only">Search</label>

          <input type="text" placeholder="Search.." v-model="search"
            class="w-full rounded-tr-md rounded-tl-md outline-none bg-white p-3 text-gray-700 transition border focus:border-white focus:outline-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent" />
        </div>
        <template>
          <b-table outlined striped show-empty responsive :items="filteredSubscriptions" :fields="fields" :busy="loading"
            :current-page="currentPage" :per-page="perPage">
            <template #table-busy>
              <div class="text-center my-2">
                <b-spinner class="align-middle"></b-spinner>
                <small>Loading...</small>
              </div>
            </template>

            <template #empty>
              <p class="text-center text-sm text-secondary py-2">
                {{
                                search
                                ? `No Subscription found for search value: "${search}"`
                                : "No subscription available"
                                }}
              </p>
            </template>

            <template #cell(sn)="data">
              <span class="font-medium py-2 text-sm">
                {{ data.index + 1 }}</span>
            </template>

            <template #cell(email)="data">
              <span class="font-medium py-2 text-sm">
                {{ data?.item?.email ?? "N/A" }}
              </span>
            </template>

            <template #cell(status)="data">
              <span @click="view(data)" class="font-medium py-2 text-sm text-green-500 font-medium">
                subscribed
              </span>
            </template>
            <template #cell(created_at)="data">
              <span class="font-light py-2 text-sm">{{
                              $moment(data.item.createdAt).format("L")
                              }}</span>
            </template>
          </b-table>

          <div class="flex justify-end items-end">
            <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" size="md"
              class="my-3"></b-pagination>
          </div>
        </template>
        <!-- </div> -->
      </section>
    </b-container>
  </Transition>
</template>


<script>
export default {
  name: "subscriptions",
  scrollToTop: true,
  layout: "admin",
  data() {
    return {
      fields: [
        {
          key: "sn",
          label: "S/N",
          class: "font-medium text-gray-400 text-sm",
        },
        {
          key: "email",
          label: "Email",
          class: "font-medium text-gray-400 text-sm",
        },
        {
          key: "status",
          label: "Status",
          class: "font-medium text-gray-400 text-sm",
        },
        {
          key: "created_at",
          label: "Created At",
          class: "font-medium text-gray-400 text-sm",
        },
      ],
      subscriptions: [],
      currentPage: 1,
      perPage: 5,
      search: "",
      showModal: false,
      totalRows: 1,
      loading: true,
      isDeleting: false,
      title: "Pan Africa Subscriptions",
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
    this.fetchSubscriptions();
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.subscriptions.length;
  },
  methods: {
    async fetchSubscriptions() {
      this.loading = true;
      try {
        this.loading = true;
        let res = await this.$axios.get(
          "https://panafstrag.onrender.com/api/admin/subscription"
        );
        this.subscriptions = res.data;
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
    // handleDelete(id) {
    //   Swal.fire({
    //     title: "Are you sure?",
    //     text: "You won't be able to revert this!",
    //     type: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Yes, delete it!",
    //   }).then((result) => {
    //     if (result.value) {
    //       this.triggerDeletion(id);
    //     } else {
    //       this.$swal("Cancelled", "Your file is still intact", "info");
    //     }
    //   });
    // },

    // async triggerDeletion(id) {
    //   try {
    //     await this.$axios.delete(
    //       `https://panafstrag.onrender.com/api/panAfrica/programmes/${id}`
    //     );
    //     this.$toast.success("Programme has been removed").goAway(1500);
    //     await this.fetchProgrammes();
    //   } catch (error) {
    //     this.$toast.error(error.response.data.errorMessage).goAway(1500);
    //   }
    // },
    // handleEdit(id) {
    //   this.$router.push(`/admin/programmes/${id}`);
    // },
  },
  computed: {
    filteredSubscriptions() {
      return this.subscriptions.filter((subscription) => {
        let search = this.search?.toLowerCase?.();
        return subscription?.email?.toLowerCase?.().includes(search);
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
