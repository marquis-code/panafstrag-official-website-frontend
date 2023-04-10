<template>
  <Transition name="fade">
    <section class="grid place-items-center lg:h-screen lg:items-center">
      <div
        class="
          w-full
          px-4
          py-12
          sm:px-6 sm:py-16
          lg:w-1/2 lg:px-8 lg:py-24
          mt-28
        "
      >
        <div class="mx-auto max-w-lg text-center">
          <h1 class="text-2xl font-bold sm:text-3xl">Admin Login</h1>

          <p class="mt-2 text-gray-500">Login to your account!</p>
        </div>

        <form
          @submit.prevent="handleSignin"
          class="mx-auto mt-8 mb-0 max-w-md space-y-4"
        >
          <div>
            <label for="email" class="sr-only">Email</label>

            <div class="relative">
              <input
                v-model="form.email"
                type="email"
                class="
                  w-full
                  rounded-lg
                  ring-1 ring-gray-300
                  border
                  outline-none
                  p-3
                  pr-12
                  text-sm
                  shadow-sm
                "
                placeholder="Enter email"
              />

              <span class="absolute inset-y-0 right-4 inline-flex items-center">
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
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  ></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label for="password" class="sr-only">Password</label>
            <div class="relative">
              <input
                v-if="!showPassword"
                v-model="form.password"
                type="password"
                class="
                  w-full
                  rounded-lg
                  ring-1 ring-gray-300
                  border
                  outline-none
                  p-3
                  pr-12
                  text-sm
                  shadow-sm
                "
                placeholder="Enter password"
              />
              <input
                v-if="showPassword"
                v-model="form.password"
                type="text"
                class="
                  w-full
                  rounded-lg
                  ring-1 ring-gray-300
                  border
                  outline-none
                  p-4
                  pr-12
                  text-sm
                  shadow-sm
                "
                placeholder="Enter password"
              />

              <span class="absolute inset-y-0 right-4 inline-flex items-center">
                <span
                  @click="togglePassword"
                  v-if="!showPassword"
                  class="text-green-500 font-medium text-sm cursor-pointer"
                  >Show</span
                >
                <span
                  @click="togglePassword"
                  v-if="showPassword"
                  class="text-red-500 font-medium text-sm cursor-pointer"
                  >Hide</span
                >
              </span>
            </div>
          </div>

          <div class="flex items-center justify-between flex-col space-y-5">
            <p class="text-sm text-gray-500">
              No account?
              <nuxt-link to="/admin/signup" class="underline"
                >Sign up</nuxt-link
              >
            </p>

            <button
              :disabled="loading"
              type="submit"
              :class="[loading ? 'cursor-not-allowed opacity-20' : '']"
              class="
                ml-3
                w-full
                inline-block
                rounded-lg
                bg-black
                px-5
                py-3
                text-sm
                font-medium
                text-white
              "
            >
              {{ loading ? "processing..." : "Sign in" }}
            </button>
          </div>
        </form>
      </div>

      <!-- <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 lg:flex hidden">
      <img
        alt="Welcome"
        src="@/assets/signup.jpeg"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </div> -->
    </section>
  </Transition>
</template>
<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
export default {
  name: "login",
  // auth: false,
  layout: "errorLayout",
  data() {
    return {
      loading: false,
      showPassword: false,
      userId: null,
      form: {
        email: "",
        password: "",
      },
    };
  },
  created() {
    // if (process.server) {
    //   return "";
    // }

    // if (!!localStorage.getItem("userId")) {
    //   this.$router.push("/admin/");
    // }

    if (process.server) {
      return "";
    } else {
      this.userId = localStorage.getItem("userId");
    }

    if (this.userId) {
      this.$router.push("/otp-verification");
    }

    if (this.userId !== null) {
      this.$router.push("/admin/");
    }
    // if (localStorage.getItem("userId").length) {
    //   this.$router.push("/admin/");
    //   return;
    // }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    async handleSignin() {
      // try {
      this.loading = true;
      let payload = {
        email: this.form.email,
        password: this.form.password,
      };
      this.$axios
        .post("https://panafstrag.onrender.com/api/admin/admin-signin", payload)
        .then((resp) => {
          this.$toast.success(resp.data.successMessage).goAway(1500);
          process.server
            ? ""
            : !!localStorage.setItem("userId", `${resp.data.data.userId}`);
          this.$router.push("/otp-verification");

          this.loading = false;
        })
        .catch((error) => {
          if (error.response) {
            this.$toast.error(error.response.data.errorMessage).goAway(1500);
            this.loading = false;
          } else if (error.request) {
            console.log(error.request);
            this.loading = false;
          } else {
            console.log("Error", error.message);
            this.loading = false;
          }
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
