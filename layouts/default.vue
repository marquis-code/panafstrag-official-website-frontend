<template>
  <main class="app">
    <site-navbar></site-navbar>
    <Nuxt />
    <footer>
      <FooterComponent />
    </footer>
  </main>
</template>

<script>
import FooterComponent from "@/components/FooterComponent";
export default {
  name: "Footer",
  components: {
    FooterComponent,
  },
};
</script>

 <style>
.app {
  font-family: "Oxygen", sans-serif;
}
</style>

