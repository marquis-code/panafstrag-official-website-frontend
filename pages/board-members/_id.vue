<template>
  <section class="container mx-auto">
    <button
      @click="goBack()"
      class="
        outline-none
        border
        bg-gray-200
        text-black
        px-3
        py-2
        rounded-md
        mt-6
        ml-6
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
    <main
      v-if="boardMember && !loading"
      class="md:flex space-y-10 md:space-y-0 space-x-5 lg:p-6 select-none my-6"
    >
      <div class="lg:w-3/12 flex justify-center items-center relative">
        <div
          class="
            animate-spin
            border-dashed border-2 border-green-500
            rounded-full
            h-64
            w-64
          "
        ></div>
        <img
          :src="boardMember.avatar"
          class="
            cursor-pointer
            object-cover
            rounded-full
            h-60
            w-60
            shadow-md
            absolute
          "
        />
      </div>
      <div class="lg:w-9/12">
        <div v-if="boardMember?.bio !== ''" class="text-medium">
          <p>{{ boardMember?.bio }}</p>
          <!-- <p>{{ splitBio[1] }}.</p>
          <p>{{ splitBio[3] }}.</p>
          <p>{{ splitBio[4] }}.</p>
          <p>{{ splitBio[5] }}.</p>
          <p>{{ splitBio[6] }}.</p>
          <p>{{ splitBio[7] }}.</p>
          <p>{{ splitBio[7] }}.</p>
          <p>{{ splitBio[7] }}.</p>
          <p>{{ splitBio[7] }}.</p> -->
        </div>
        <p v-else>OOPS! Board member bio not available..</p>
      </div>
    </main>
    <div v-if="loading" class="text-center py-2">
      <b-spinner class="align-middle"></b-spinner>
      <span class="text-lg">Loading...</span>
    </div>
    <!-- </div> -->
  </section>
</template>

<script>
export default {
  scrollToTop: true,
  // auth: false,
  data() {
    return {
      loading: true,
      boardMember: {},
      splitBioArray: [],
      newBio: "",
    };
  },
  head() {
    return {
      meta: [
        {
          hid: `description`,
          name: "description",
          content: `${this.boardMember?.name}'s panafstrag profile`,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: `${this.boardMember?.name}'s panafstrag profile`,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: `${this.boardMember?.bio}`,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `${this.boardMember?.avatar}`,
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: `${this.boardMember?.avatar}`,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `${this.boardMember?.name}'s panafstrag profile`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: `${this.boardMember?.bio}`,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `${this.boardMember?.avatar}`,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: `${this.boardMember?.avatar}`,
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: `${this.boardMember?.avatar}'`,
        },
      ],
    };
  },
  created() {
    this.getBoardMember();
  },
  methods: {
    async getBoardMember() {
      try {
        let res = await this.$axios.get(
          `https://panafstrag.onrender.com/api/panAfrica/board-member/${this.$route.params.id}`
        );
        this.boardMember = res.data;
        this.splitBioArray = res.data.bio.split(".");
        this.modifyBio(this.splitBioArray.length);
        this.loading = false;
      } catch (err) {
        console.log(err);
        // this.$toast
        //   .error("Something went wrong, please try again.")
        //   .goAway(1500);
        this.loading = false;
      }
    },
    modifyBio(bioLength) {
      for (let index = 0; index <= bioLength; index++) {
        return this.newBio = this.splitBioArray[index]
      };
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
