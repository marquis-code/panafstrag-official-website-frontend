<template>
  <main>
  <site-navbar></site-navbar>
    <Nuxt />
    <footer>
     <FooterComponent />
      <!-- <main class="w-11/12 max-w-6xl mx-auto space-y-6">
        <main
          class="w-11/12 space-y-9 lg:space-y-0 lg:flex flex-row-reverse justify-between items-center text-white max-w-6xl mx-auto"
        >
          <div class="space-y-4">
            <h1 class="text-xl">Our Office</h1>
            <p class="text-sm font-light">302,Iju Road Agege, Iju Lagos, Nigeria.</p>
          </div>
          <div class="space-y-4">
            <h1 class="text-xl">Contact</h1>
            <p class="text-sm font-light">+234-8056210960</p>
            <p class="text-sm font-light">+234-8055177436</p>
          </div>
          <div class="space-y-4">
            <h1></h1>
            <p class="text-sm font-light">panafstraginternational@gmail.com</p>
            <p class="text-sm font-light">isholawilliams@gmail.com</p>
          </div>
        </main>
        <p class="text-xs text-white font-light text-end">
          Copyrights © 2022 All Rights Reserved by Eko Innovation Centre
        </p>
      </main> -->
    </footer>
  </main>
</template>

<script>
import FooterComponent from "@/components/FooterComponent"
export default {
  name: "Footer",
  components: {
    FooterComponent
  }
}
</script>

<style>

</style>

