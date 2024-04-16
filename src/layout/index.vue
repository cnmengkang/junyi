<template>
  <section class="main">
    <header class="header sticky top-0 z-10 w-full bg-white">
      <!-- fixedNav -->
      <Header />
    </header>
    <section class="flex-1">
      <router-view />
    </section>
    <footer class="bg-footer">
      <Footer />
    </footer>
  </section>
</template>
<script setup lang="ts">
import Header from "../components/Header/index.vue";
import Footer from "./Footer.vue";
</script>
<style scoped></style>
