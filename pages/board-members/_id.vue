<template>
  <section class="container mx-auto">
    <main class="md:flex space-y-10 md:space-y-0 space-x-5 p-6 select-none">
      <div class="w-3/12">
        <img
          :src="boardMember.avatar"
          class="
            cursor-pointer
            object-cover
            rounded-md
            shadow-md
            hover:shadow-green-300
          "
        />
      </div>
      <div class="w-9/12">
        <p class="text-md text-gray-500 text-justify">
          {{boardMember.bio}}
        </p>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  scrollToTop: true,
  loading: false,
  data() {
    return {
      boardMember: {},
    };
  },
  created() {
    this.getBoardMember();
  },
  methods: {
    async getBoardMember() {
      let res = await this.$axios.get(
        `https://panafrica-website.herokuapp.com/api/panAfrica/board-member/${this.$route.params.id}`
      );
      this.boardMember = res.data;
    },
  },
};
</script>
