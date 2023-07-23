<template>
  <footer aria-label="Site Footer" class="bg-black">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="lg:flex lg:gap-8">
        <div>
          <img class="h-8 w-10 objct-cover" src="~/static/icon.png" alt="" />
        </div>

        <div class="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
          <div class="col-span-2">
            <div>
              <h2 class="text-2xl font-bold text-white">
                Dont miss updates from us!
              </h2>

              <p class="mt-6 text-gray-400">
                Subscribe to our news letter and never miss our latest news.
              </p>
            </div>
          </div>

          <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">
            <form @submit.prevent="handleSubscription" class="w-full text-white">
              <label for="email" class="sr-only"> Email </label>

              <div class="p-2 space-y-3 md:space-y-0 sm:flex sm:items-center">
                <input v-model="form.email" class="
                    rounded
                    h-12
                    w-full
                    border
                    outline-none
                    border-gray-300
                    bg-transparent
                    p-3
                    text-sm
                    tracking-widest
                    placeholder-gray-400
                  " type="email" id="email" placeholder="Enter your email" />

                <button :disabled="loading" type="submit" :class="[loading ? 'cursor-not-allowed opacity-20' : '']" class="
                    h-12
                    w-full
                    bg-green-400
                    rounded
                    px-6
                    py-3
                    text-sm
                    font-bold
                    uppercase
                    tracking-wide
                    sm:ml-4 sm:mt-0 sm:w-auto sm:flex-shrink-0
                  ">
                  {{ loading ? "processing..." : "Subscribe" }}
                </button>
              </div>
            </form>
          </div>

          <div class="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
            <p class="font-bold text-white">SECRETARIAT</p>

            <nav class="mt-6 flex flex-col space-y-4 text-sm text-gray-300">
              <a class="inline-block" href="">
                302, Iju Road; Iju-Ishaga bus stop, Lagos, Nigeria.
              </a>
            </nav>
          </div>

          <div class="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
            <p class="font-bold text-white">PHONE NUMBER</p>

            <nav class="mt-6 flex flex-col space-y-4 text-sm text-gray-300">
              <div class="flex items-center space-x-2" href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                  </path>
                </svg>
                <a href="https://wa.me/2348056210960">+234-8056210960</a>
              </div>
              <div class="flex items-center space-x-2" href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                  </path>
                </svg>
                <a href="https://wa.me/2348055177436">+234-8055177436</a>
              </div>
            </nav>
          </div>

          <div class="col-span-2 border-t border-white/10 pt-6 sm:col-span-1">
            <p class="font-bold text-white">EMAIL ADDRESS</p>

            <nav class="mt-6 flex flex-col space-y-4 text-sm text-gray-300">
              <div class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:panafstraginternational@gmail.com">panafstraginternational@gmail.com</a>
              </div>
              <div class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:isholawilliams@gmail.com">isholawilliams@gmail.com</a>
              </div>
            </nav>
          </div>

          <div class="
              col-span-2
              pl-3
              flex
              space-x-3
              gap-6
              text-gray-500
              lg:col-span-5
            ">
            <a class="hover:opacity-75" href="https://www.linkedin.com/in/panafstrag/" target="_blank" rel="noreferrer">
              <span class="sr-only"> Linkedin </span>
              <b-icon icon="linkedin" scale="2" variant=""></b-icon>
            </a>

            <a class="hover:opacity-75" href="https://web.facebook.com/panafstrag/" target="_blank" rel="noreferrer">
              <span class="sr-only"> Facebook </span>

              <b-icon icon="facebook" scale="2" variant=""></b-icon>
            </a>

            <!-- <a
              class="hover:opacity-75"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <span class="sr-only"> Twitter </span>

              <b-icon icon="twitter" scale="2" variant=""></b-icon>
            </a> -->
          </div>
        </div>
      </div>

      <div class="mt-12 border-t border-white/10 pt-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <p class="text-center text-xs text-gray-400 lg:text-left">
            Copyright &copy; 2022. PANAFRICANA. All rights reserved.
          </p>

          <nav class="
              flex
              justify-center
              gap-4
              text-xs text-gray-400
              lg:justify-end
            ">
            <a href="#"> Terms & Conditions </a>
            <a href="#"> Privacy Policy </a>
            <a href="#"> Cookies </a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      loading: false,
      form: {
        email: "",
      },
    };
  },
  methods: {
    resetForm() {
      this.form.email = "";
    },
    async handleSubscription() {
      this.loading = true;
      try {
        let payload = {
          email: this.form.email,
        };
        await this.$axios
          .post("https://panafstrag.onrender.com/api/admin/subscribe", payload)
          .then(() => {
            this.$toast.success("Subscription was successful").goAway(1500);
            this.resetForm();
            this.loading = false;
          });
      } catch (error) {
        this.$toast.error(error.response.data.errorMessage).goAway(1500);
        this.loading = false;
      }
    },
  },
};
</script>

<style></style>
