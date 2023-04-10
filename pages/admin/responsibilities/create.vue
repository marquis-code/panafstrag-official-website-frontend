<template>
  <Transition name="fade">
    <section class="">
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
        <!-- <h2 class="text-xl my-6 font-medium text-black">
        Create new board responsibilities
      </h2> -->
        <div
          class="
             md:bg-white md:p-7 md:w-9/12 md:shadow-md md:rounded-md md:border
            lg:mt-4
            mb-6
            p-3
            pb-6
            lg:p-6
            mt-6
          "
        >
          <form @submit.prevent="handleSubmit" class="space-y-6 w-full">
            <!-- <h1 class="text-center text-3xl font-medium">
            Create New Board Responsibilities
          </h1> -->

            <div>
              <label class="sr-only" for="description">Description</label>
              <textarea
                class="w-full rounded-lg border outline-none p-3 text-sm"
                placeholder="Enter responsibilities description here..."
                rows="8"
                id="description"
                v-model="form.description"
              ></textarea>
            </div>

            <div class="mt-3 flex justify-end items-end">
              <button
                :disabled="loading"
                type="submit"
                :class="[loading ? 'cursor-not-allowed opacity-20' : '']"
                class="
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  bg-black
                  py-2
                  px-3
                  w-full
                  md:w-3/12
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
    </section>
  </Transition>
</template>

<script>
export default {
  name: "responsibility",
  layout: "admin",
  data() {
    return {
      loading: false,
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
    goBack() {
      this.$router.go(-1);
    },
    async handleSubmit() {
      this.loading = true;
      try {
        await this.$axios.post(
          `https://panafstrag.onrender.com/api/panAfrica/responsibilities`,
          this.form
        );
        this.resetForm();
        this.$toast
          .success("Responsibility was successfully created")
          .goAway(1500);
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
