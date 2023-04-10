<template>
  <Transition name="fade">
    <!-- <section class=""> class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8" -->
    <b-container>
      <button
        @click="goBack()"
        class="
          outline-none
          mt-2
          border
          bg-gray-200
          text-black
          px-3
          py-1
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
      <!-- <h2 class="text-xl my-6 font-medium text-black">Create new program</h2> -->
      <div
        class="
          md:bg-white md:p-7 md:w-9/12 md:shadow-md md:rounded-md md:border
          lg:mt-4
          mb-6
          p-3
          pb-6
          lg:p-6
        "
      >
        <form @submit.prevent="handleSubmit" action="" class="space-y-6 w-full">
          <div>
            <label class="text-sm text-gray-400 pb-2" for="title">Title</label>
            <textarea
              class="
                w-full
                rounded-lg
                border border-gray-200
                outline-none
                p-3
                resize-none
                text-sm
              "
              placeholder="Describe programme title..."
              id="title"
              v-model="form.title"
              rows="2"
            ></textarea>
          </div>

          <div>
            <label class="text-sm text-gray-400 b-2" for="theme">Theme</label>
            <textarea
              class="
                w-full
                rounded-lg
                border border-gray-200
                outline-none
                p-3
                resize-none
                text-sm
              "
              placeholder="Describe programme theme..."
              id="theme"
              rows="2"
              v-model="form.theme"
            ></textarea>
          </div>

          <div
            class="
              md:flex
              justify-between
              items-center
              space-y-7
              md:space-y-0 md:space-x-3
            "
          >
            <div class="w-full">
              <label class="text-sm text-gray-400 b-2" for="date"
                >Start date</label
              >
              <client-only
                ><date-picker
                  class="w-full rounded-lg border outline-none p-3 text-sm"
                  placeholder="Select start date"
                  v-model="form.StartDate"
              /></client-only>
            </div>

            <div class="w-full">
              <label class="text-sm text-gray-400 b-2" for="date"
                >End date</label
              >
              <client-only
                ><date-picker
                  class="
                    w-full
                    rounded-lg
                    border border-gray-200
                    outline-none
                    p-3
                    text-sm
                  "
                  placeholder="Select end date"
                  v-model="form.EndDate"
              /></client-only>
            </div>
          </div>

          <div
            class="
              md:flex
              justify-between
              items-center
              space-y-7
              md:space-y-0 md:space-x-3
            "
          >
            <div class="mb-3 w-full">
              <label class="text-sm text-gray-400 b-2" for="videoUrl"
                >Video Url</label
              >
              <input
                class="
                  w-full
                  rounded-lg
                  border border-gray-200
                  outline-none
                  p-3
                  text-sm
                "
                type="text"
                placeholder="https://www.youtube.com...."
                id="videoUrl"
                v-model="form.videoUrl"
              />
            </div>

            <div class="mb-3 w-full">
              <label class="text-sm text-gray-400 b-2" for="programStatus"
                >Select Program Status</label
              >

              <select
                v-model="form.status"
                name="programStatus"
                class="
                  w-full
                  rounded-lg
                  border border-gray-200
                  outline-none
                  p-3
                  text-sm
                  bg-gray-100
                  px-2
                "
                id="programStatus"
              >
                <option value="" selected disabled>
                  Select program status
                </option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <div class="mb-3">
            <label class="text-sm text-gray-400 b-2" for="zoomMeetingUrl"
              >Zoom Meeting Link</label
            >
            <input
              class="
                w-full
                rounded-lg
                border border-gray-200
                outline-none
                p-3
                text-sm
              "
              pattern="https://.*"
              type="url"
              placeholder="Enter programme zoom meeting url"
              id="zoomMeetingUrl"
              v-model="form.zoomMeetingUrl"
            />
          </div>

          <div class="mb-3">
            <label class="text-sm text-gray-400 b-2" for="session_form"
              >Session Form</label
            >
            <input
              class="
                w-full
                rounded-lg
                border border-gray-200
                outline-none
                p-3
                text-sm
              "
              pattern="https://.*"
              type="url"
              placeholder="Enter programme form link.."
              id="session_form"
              v-model="form.session_form"
            />
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
              Click to upload progrmmes
            </label>
          </div>

          <div class="mt-6 md:flex justify-end items-end">
            <button
              :disabled="loading"
              type="submit"
              :class="[loading ? 'cursor-not-allowed opacity-20' : '']"
              class="
                inline-flex
                items-center
                justify-center
                rounded-lg
                bg-black
                px-3
                py-2
                w-full
                md:w-full
                lg:w-3/12
                text-white
              "
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
  <!-- </section> -->
</template>

<script>
import _ from "lodash";
export default {
  name: "archives",
  layout: "admin",
  data() {
    return {
      form: {
        title: "",
        theme: "",
        StartDate: "",
        EndDate: "",
        videoUrl: "",
        session_form: "",
        zoomMeetingUrl: "",
        programmes: null,
        status: null,
      },
      filesLength: null,
      loading: false,
    };
  },
  methods: {
    resetForm() {
      this.form.title = null;
      this.form.theme = null;
      this.form.EndDate = null;
      this.form.StartDate = null;
      this.form.session_form = null;
      (this.form.videoUrl = null), (this.form.programmes = null);
      this.filesLength = null;
      this.form.status = null;
      this.form.zoomMeetingUrl = null;
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
        for (const i of Object.keys(this.form.programmes || [])) {
          formData.append("programmes", this.form.programmes[i]);
        }
        formData.append("title", this.form.title);
        formData.append("theme", this.form.theme);
        formData.append("startDate", this.form.StartDate);
        formData.append("endDate", this.form.EndDate);
        formData.append("zoomMeetingUrl", this.form.zoomMeetingUrl);
        formData.append("session_form", this.form.session_form);
        formData.append("uploadedVideoUrl", this.form.videoUrl);
        formData.append("status", this.form.status);
        await this.$axios.post(
          `https://panafstrag.onrender.com/api/panAfrica/programmes`,
          formData
        );
        this.resetForm();
        this.$toast.success("Program was successfully created").goAway(1500);
        this.loading = false;
      } catch (error) {
        this.$toast.error(error.response.data.errorMessage).goAway(1500);
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
