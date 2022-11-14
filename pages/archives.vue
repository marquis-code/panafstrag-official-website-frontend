<template>
   <h1>Coming soon ....</h1>
</template>


<script>
export default {
  name: "archives",
   loading: false,
  data() {
    return {
      title: "Pan Africa",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Pan Africa &#8211; Original thinking, research help add to human knowledge",
        },
      ],
    };
  },
};
</script>

<style>
</style>
