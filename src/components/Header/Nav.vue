<template>
  <div class="nav">
    <button @click="handleClickDownload('/download')">软件下载</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
let handleClickDownload = (path: any) => {
  console.log(path);
  router.push(path);
};
</script>
<style scoped></style>
