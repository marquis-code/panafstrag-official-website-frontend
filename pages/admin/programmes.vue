<template>
  <section class="bg-gray-100">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-5">
        <div class="lg:col-span-2 lg:py-0">
          <img
            alt="Welcome"
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            class="h-full w-full object-cover"
          />
        </div>

        <div
          class="
            bg-white
            flex
            justify-center
            items-center
            w-full
            p-8
            lg:col-span-3 lg:p-12
          "
        >
          <form
            @submit.prevent="handleSubmit"
            action=""
            class="space-y-4 w-full"
          >
            <h1 class="text-center text-3xl font-medium">Create Programmes</h1>
            <div>
              <label class="sr-only" for="title">Title</label>
              <textarea
                class="
                  w-full
                  rounded-lg
                  border-none
                  outline-none
                  ring-1 ring-gray-300
                  p-3
                  resize-none
                  text-sm
                "
                placeholder="Describe programme title..."
                id="title"
                v-model="form.title"
                rows="4"
              ></textarea>
            </div>

            <div>
              <label class="sr-only" for="theme">Theme</label>
              <textarea
                class="
                  w-full
                  rounded-lg
                  border-none
                  outline-none
                  ring-1 ring-gray-300
                  p-3
                  resize-none
                  text-sm
                "
                placeholder="Describe programme theme..."
                id="theme"
                rows="4"
                v-model="form.theme"
              ></textarea>
            </div>

            <div>
              <label class="sr-only" for="date">Start to End date</label>
              <input
                class="
                  w-full
                  rounded-lg
                  border-none
                  outline-none
                  ring-1 ring-gray-300
                  p-3
                  text-sm
                "
                type="date"
                id="date"
                v-model="form.startToEndDate"
              />
            </div>

            <div class="mb-3">
              <label class="sr-only" for="videoUrl">Video Url</label>
              <input
                class="
                  w-full
                  rounded-lg
                  border-none
                  outline-none
                  ring-1 ring-gray-300
                  p-3
                  text-sm
                "
                type="text"
                placeholder="https://www.youtube.com...."
                id="videoUrl"
                v-model="form.videoUrl"
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
              <div
                v-else
                class="flex justify-center items-center space-x-2 py-3"
              >
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

              <!-- <img
                v-if="!profilePreview && !uploadingProfile"
                class="h-16 w-16"
                src="@/static/images/userIcon.svg"
              /> -->
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

            <div class="mt-6">
              <button
                type="submit"
                class="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  bg-black
                  px-5
                  py-3
                  text-white
                  sm:w-full
                "
              >
                <span class="font-medium"> Proceed </span>

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
      </div>
    </div>
  </section>
</template>

<script>
import _ from "lodash";
export default {
  name: "archives",
  data() {
    return {
      uploadingFile: false,
      uploadingProfile: false,
      form: {
        title: "",
        theme: "",
        startToEndDate: "",
        videoUrl: "",
        programmes: null,
      },
      filesLength: null,
      processing: false,
    };
  },
  methods: {
    resetForm() {
      this.form.title = null;
      this.form.theme = null;
      this.form.startToEndDate = null;
      (this.form.videoUrl = null), (this.form.programmes = null);
      this.filesLength = null;
    },
    async handleProgrammeUpload(e) {
      this.form.programmes = e.target.files;
      console.log(this.form.programmes);
      this.filesLength = e.target.files.length;
    },
    async handleSubmit() {
      const formData = new FormData();
      try {
        for (const i of Object.keys(this.form.programmes)) {
          formData.append("programmes", this.form.programmes[i]);
        }
        formData.append("title", this.form.title);
        formData.append("theme", this.form.theme);
        formData.append("uploadedVideoUrl", this.form.videoUrl);
        formData.append("startToEndDate", this.form.startToEndDate);
        const response = await this.$axios.post(
          `https://panafrica-website.herokuapp.com/api/panAfrica/programmes`,
          formData
        );
        this.resetForm();
      } catch (error) {
        console.log(error);
      } finally {
      }
    },
  },
};
</script>

<style>
</style>
