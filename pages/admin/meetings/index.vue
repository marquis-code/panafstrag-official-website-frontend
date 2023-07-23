<template>
  <Transition name="fade">
    <b-container>
      <section class="text-white">
        <div class="flex items-center justify-between my-3">
          <button
            @click="goBack()"
            class="outline-none border bg-gray-200 text-black px-3 py-1 rounded-md text-sm"
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

          <button
            @click="$router.push('/admin/meetings/create')"
            class="text-gray-400 rounded-md border bg-black text-white text-sm px-3 py-2"
          >
            Create Meeting
          </button>
        </div>

        <div class="sm:flex-1 pb-0 mt-3">
          <label for="search" class="sr-only">Search</label>

          <input
            type="text"
            placeholder="Search.."
            v-model="search"
            class="w-full rounded-tr-md rounded-tl-md outline-none bg-white p-3 text-gray-700 transition border focus:border-white focus:outline-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <template>
          <b-table
            outlined
            striped
            show-empty
            responsive
            :items="filteredMeetings"
            :fields="fields"
            :busy="loading"
            :current-page="currentPage"
            :per-page="perPage"
          >
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
                    ? `No meeting found for search value: "${search}"`
                    : "No meetings available"
                }}
              </p>
            </template>

            <template #cell(sn)="data">
              <span class="font-light py-2 text-sm"> {{ data.index + 1 }}</span>
            </template>

            <template #cell(title)="data">
              <span class="font-light py-2 text-sm">{{
                data.item.title && data.item.title.length > 30
                  ? data.item.title.slice(0, 30) + "..."
                  : data.item.title
              }}</span>
            </template>

            <template #cell(description)="data">
              <span class="font-light py-2 text-sm">{{
                data.item.description && data.item.description.length > 100
                  ? data.item.description.slice(0, 70) + "..."
                  : data.item.description
              }}</span>
              <span
                v-if="!data?.item?.description"
                class="font-light py-2 text-sm"
                >N/A</span
              >
            </template>

            <template #cell(url)="data">
              <a
                class="font-medium py-2 text-sm"
                :href="data.item.url"
                target="_blank"
                >{{
                  data.item.url && data.item.url.length > 100
                    ? data.item.url.slice(0, 70) + "..."
                    : data.item.url
                }}</a
              >
              <!-- <span>{{
                data.item.url && data.item.url.length > 100
                  ? data.item.url.slice(0, 70) + "..."
                  : data.item.url
              }}</span> -->
            </template>

            <template #cell(created_at)="data">
              <span class="font-light py-2 text-sm">{{
                $moment(data.item.createdAt).format("L")
              }}</span>
            </template>

            <template #cell(actions)="data">
              <div class="flex items-center space-x-3 py-2">
                <svg
                  @click="handleEdit(data.item._id)"
                  class="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#74d321"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="bevel"
                >
                  <path
                    d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"
                  ></path>
                  <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                </svg>
                <svg
                  @click="handleDelete(data.item._id)"
                  class="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d33a21"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="bevel"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path
                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                  ></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </div>
            </template>
          </b-table>
          <div class="flex justify-end items-end">
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              size="md"
              class="my-3"
            ></b-pagination>
          </div>
        </template>
      </section>
    </b-container>
  </Transition>
</template>


<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default {
  name: "Meeting",
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
          key: "title",
          label: "Title",
          class: "font-medium text-gray-400 text-sm",
        },
        {
          key: "description",
          label: "Description",
          class: "font-medium text-gray-400 text-sm",
        },
        {
          key: "url",
          label: "Meeting Url",
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
      meetings: [],
      currentPage: 1,
      perPage: 20,
      search: "",
      showModal: false,
      totalRows: 1,
      loading: true,
      isDeleting: false,
      title: "Pan Africa Board Meetings",
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
    this.fetchMeetings();
  },
  mounted() {
    this.totalRows = this.meetings.length;
  },
  methods: {
    async fetchMeetings() {
      this.loading = true;
      try {
        this.loading = true;
        let res = await this.$axios.get(
          "https://panafstrag.onrender.com/api/panAfrica/meeting"
        );
        this.meetings = res.data;
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
      this.$router.push(`/admin/meetings/${id}`);
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
          `https://panafstrag.onrender.com/api/panAfrica/meeting/${id}`
        );
        this.$toast.success("Meeting has been removed").goAway(1500);
        await this.fetchMeetings();
      } catch (error) {
        this.$toast.error(error.response.data.errorMessage).goAway(1500);
      }
    },
  },
  computed: {
    filteredMeetings() {
      return this.meetings.filter((meeting) => {
        return meeting.title.toLowerCase().includes(this.search.toLowerCase());
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
