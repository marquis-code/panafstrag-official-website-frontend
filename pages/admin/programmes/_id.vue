<template>
  <Transition name="fade">
    <b-container>
      <button
        @click="goBack()"
        class="outline-none mt-2 border bg-gray-200 text-black px-3 py-1 rounded-md text-sm"
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
      <h2 class="text-xl my-6 font-medium text-black">Update programme</h2>
      <div
        class="md:bg-white md:p-7 md:w-9/12 md:shadow-md md:rounded-md md:border md:border-2 lg:mt-4 mb-6 p-3 pb-6 lg:p-6"
      >
        <form @submit.prevent="handleSubmit" action="" class="space-y-6 w-full">
          <div>
            <label class="text-sm text-gray-400" for="title">Title</label>
            <textarea
              class="w-full rounded-lg border border-gray-200 outline-none p-3 resize-none text-sm"
              placeholder="Describe programme title..."
              id="title"
              v-model="form.title"
              rows="4"
            ></textarea>
          </div>

          <div>
            <label class="text-sm text-gray-400" for="theme">Theme</label>
            <textarea
              class="w-full rounded-lg border border-gray-200 outline-none p-3 resize-none text-sm"
              placeholder="Describe programme theme..."
              id="theme"
              rows="4"
              v-model="form.theme"
            ></textarea>
          </div>

          <div>
            <label class="text-sm text-gray-400" for="zoomMeetingUrl"
              >Zoom Meeting Link</label
            >
            <input
              class="w-full rounded-lg border border-gray-200 outline-none p-3 text-sm"
              pattern="https://.*"
              type="url"
              placeholder="Enter programme zoom meeting url"
              id="zoomMeetingUrl"
              v-model="form.zoomMeetingUrl"
            />
          </div>

          <div
            class="md:flex justify-between items-center space-y-7 md:space-y-0 md:space-x-3"
          >
            <div class="w-full">
              <label class="text-sm text-gray-400" for="date">Start date</label>
              <client-only
                ><date-picker
                  class="w-full rounded-lg border border-gray-200 outline-none p-3 text-sm"
                  placeholder="Select start date"
                  v-model="form.startDate"
              /></client-only>
            </div>

            <div class="w-full">
              <label class="text-sm text-gray-400" for="date">End date</label>
              <client-only
                ><date-picker
                  class="w-full rounded-lg border border-gray-200 outline-none p-3 text-sm"
                  placeholder="Select end date"
                  v-model="form.endDate"
              /></client-only>
            </div>
          </div>

          <div
            class="md:flex justify-between items-center space-y-7 md:space-y-0 md:space-x-3"
          >
            <div class="mb-3 w-full mt-3">
              <label class="text-sm text-gray-400" for="uploadedVideoUrl"
                >Video Url</label
              >
              <input
                class="w-full rounded-lg border border-gray-200 outline-none p-3 text-sm"
                type="text"
                placeholder="https://www.youtube.com...."
                id="uploadedVideoUrl"
                v-model="form.uploadedVideoUrl"
              />
            </div>
            <div class="mb-3 w-full">
              <label class="text-sm text-gray-400" for="status"
                >Program status</label
              >
              <br />
              <small
                >Accepted values includes: <b>active</b>, <b>pending</b>,
                <b>completed</b>.</small
              >
              <input
                class="w-full rounded-lg border border-gray-200 outline-none p-3 text-sm"
                type="text"
                placeholder="Enter program status"
                id="status"
                v-model="form.status"
              />
            </div>
          </div>

          <div class="flex justify-center items-center flex-col">
            <svg
              v-if="!filesLength"
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e0dada"
              stroke-width="1.5"
              stroke-linecap="butt"
              stroke-linejoin="bevel"
            >
              <path
                d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2-2.4-3.5-4.4-3.5h-1.2c-.7-3-3.2-5.2-6.2-5.6-3-.3-5.9 1.3-7.3 4-1.2 2.5-1 6.5.5 8.8m8.7-1.6V21"
              />
              <path d="M16 16l-4-4-4 4" />
            </svg>
            <div v-else class="flex justify-center items-center space-x-2 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e0dada"
                stroke-width="1.5"
                stroke-linecap="butt"
                stroke-linejoin="bevel"
              >
                <path
                  d="M13 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9l-7-7z"
                />
                <path d="M13 3v6h6" />
              </svg>
              <span class="text-green-500 font-medium text-sm"
                >{{ filesLength }} has been selected</span
              >
            </div>
            <input
              disabled="true"
              @change="handleProgrammeUpload"
              multiple
              accept="image/*"
              class="hidden"
              type="file"
              id="archive"
            />
            <label
              for="archive"
              class="text-indigo-700 text-sm font-medium cursor-pointer"
            >
              Click to update uploaded progrmmes
            </label>
          </div>

          <div class="mt-3 flex justify-end items-end">
            <button
              :disabled="loading"
              type="submit"
              :class="[loading ? 'cursor-not-allowed opacity-20' : '']"
              class="inline-flex items-center justify-center rounded-lg bg-black px-3 py-2 text-white w-full md:w-3/12"
            >
              <span class="font-medium">
                {{ loading ? "processing..." : "Continue" }}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </b-container>
  </Transition>
</template>

<script>
import _ from "lodash";
export default {
  name: "programmes",
  layout: "admin",
  data() {
    return {
      form: {
        title: "",
        theme: "",
        startDate: "",
        endDate: "",
        uploadedVideoUrl: "",
        zoomMeetingUrl: "",
        programmes: null,
        status: "",
      },
      filesLength: null,
      loading: false,
    };
  },
  created() {
    this.fetchProgram();
  },
  methods: {
    resetForm() {
      this.form.title = null;
      this.form.theme = null;
      this.form.endDate = null;
      this.form.startDate = null;
      (this.form.zoomMeetingUrl = null), (this.form.status = null);
      (this.form.uploadedVideoUrl = null), (this.form.programmes = null);
      this.filesLength = null;
    },
    goBack() {
      this.$router.go(-1);
    },
    async handleProgrammeUpload(e) {
      this.form.programmes = e.target.files;
      this.filesLength = e.target.files.length;
    },
    async handleSubmit() {
      this.loading = true;
      const formData = new FormData();
      try {
        // for (const i of Object.keys(this.form.programmes)) {
        //   formData.append("programmes", this.form.programmes[i]);
        // }
        formData.append("title", this.form.title);
        formData.append("theme", this.form.theme);
        formData.append("status", this.form.status);
        formData.append("startDate", this.form.startDate);
        formData.append("zoomMeetingUrl", this.form.zoomMeetingUrl);
        formData.append("endDate", this.form.endDate);
        formData.append("uploadedVideoUrl", this.form.uploadedVideoUrl);
        await this.$axios.put(
          `https://panafstrag.onrender.com/api/panAfrica/programmes/${this.$route.params.id}`,
          formData
        );
        this.$toast.success("Programme was successfully updated").goAway(1500);
        this.$router.push("/admin/programmes");
        this.loading = false;
      } catch (error) {
        this.$toast.error(error?.response?.data?.errorMessage).goAway(1500);
        this.loading = false;
      }
    },
    async fetchProgram() {
      this.loading = true;
      try {
        let response = await this.$axios.get(
          `https://panafstrag.onrender.com/api/panAfrica/programmes/${this.$route.params.id}`
        );
        this.form = response?.data;
      } catch (error) {
        this.$toast
          .error("Something went wrong, please try again.")
          .goAway(1500);
      } finally {
        this.loading = false;
      }
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
