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
          <form @submit.prevent="handleSubmit" action="" class="space-y-4 w-full">
            <h1 class="text-center text-3xl font-medium">Create New Board Responsibilities</h1>

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
                placeholder="Enter responsibilities description here..."
                rows="8"
                id="description"
                v-model="form.description"
              ></textarea>
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
export default {
  name: "responsibility",
  data() {
    return {
      form: {
        description: "",
      },
      processing: false,
    };
  },
  methods: {
    resetForm() {
      this.form.description = null;
    },
    async handleSubmit() {
      try {
        await this.$axios.post(
          `https://panafrica-website.herokuapp.com/api/panAfrica/responsibilities`,
          this.form
        );
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
