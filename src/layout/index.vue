<template>
  <section class="main">
    <header class="bg-header header flex items-center">
      <Header />
    </header>
    <section>
      <Banner />
    </section>
    <section class="flex-1 max-w">
      <router-view />
    </section>
    <footer class="bg-footer footer">
      <Footer />
    </footer>
  </section>
</template>
<script setup lang="ts">
import Header from "@/components/Header/index.vue";
import Banner from "./Banner.vue";
import Footer from "./Footer.vue";
</script>
<style scoped></style>
