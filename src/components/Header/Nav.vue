<template>
  <div class="nav">
    <button @click="handleClickDownload('/')">解决方案</button>
    <button @click="handleClickDownload('/download')">软件下载</button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
let handleClickDownload = (path: any) => {
  router.push(path);
};
</script>
<style scoped></style>
