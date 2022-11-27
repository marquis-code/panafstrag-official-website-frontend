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
          <form @submit.prevent="handleSubmit" class="space-y-4 w-full">
            <h1 class="text-center text-3xl font-medium">Create Archive</h1>
            <div>
              <label class="sr-only" for="title">Title</label>
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
                placeholder="Enter archive title"
                type="text"
                id="title"
                v-model="form.title"
              />
            </div>

            <div>
              <label class="sr-only" for="date">Publication date</label>
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
                placeholder="Enter date joined"
                type="date"
                id="date"
                v-model="form.publicationDate"
              />
            </div>

            <div>
              <label class="sr-only" for="description">Description</label>
              <textarea
                class="
                  w-full
                  rounded-lg
                  border-none
                  outline-none
                  ring-1 ring-gray-300
                  p-3
                  text-sm
                "
                placeholder="Enter archive description..."
                rows="8"
                id="description"
                v-model="form.description"
              ></textarea>
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

            <!-- <div class="flex justify-center items-center flex-col">
              <svg
                v-if="!archivePreview && !uploadingProfile"
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
              <svg
               v-if="archivePreview"
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
                  d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
                />
                <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
              </svg>
              <input
                @change="handleArchiveUpload"
                class="hidden"
                type="file"
                id="archive"
              />
              <label
                for="archive"
                class="text-indigo-700 text-sm font-medium cursor-pointer"
                :class="[
                  uploadingProfile ? 'opacity-25 cursor-not-allowed' : '',
                ]"
                >{{
                  uploadingProfile ? "Uploading..." : "Click to upload archive"
                }}</label
              >
            </div> -->

            <div class="mt-6">
              <button
                :disabled="processing"
                :class="[processing ? 'cursor-not-allowed bg-gray-300' : '']"
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
                <span class="font-medium">{{processing ? 'processing...' : 'Proceed'}} </span>

                <svg
                  v-if="!processing"
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
export default {
  name: "archives",
  data() {
    return {
      form: {
        title: "",
        publicationDate: "",
        description: "",
        videoUrl: ""
      },
      processing: false,
    };
  },
  methods: {
    resetForm() {
      this.form.title = null
      this.form.publicationDate = null
      this.form.description = null
      this.form.videoUrl = null
    },
    async handleSubmit() {
      this.processing = true;
      try {
        const payload = {
          title: this.form.title,
          publicationDate: this.form.publicationDate,
          description: this.form.description,
          uploadedVideoUrl: this.form.videoUrl
        }
        await this.$axios.post(
          `https://panafrica-website.herokuapp.com/api/panAfrica/archives`,
          payload
        );
        this.processing = false;
        this.resetForm();
      } catch (error) {
        this.$toast.warning(
          "An error occured while uploading your file, please try again"
        );
      } finally {
        // this.uploadingFile = false;
      }
    },
  },
};
</script>

<style>
</style>
