<template>
  <div class="nav gap-10 justify-center">
    <button
      class="text-2xl font-medium"
      :class="{ active: active === 1 }"
      @click="handleClickDownload('/')"
    >
      <n-dropdown trigger="hover" :options="options" @select="handleSelect">
        解决方案
      </n-dropdown>
    </button>
    <button
      class="text-2xl font-medium"
      :class="{ active: active === 2 }"
      @click="handleClickDownload('/download')"
    >
      软件下载
    </button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
let active = ref(0);
const router: any = useRouter();
let options: any = ref([
  {
    label: "我们的服务",
    key: "my",
  },
  {
    label: "鼠标解决方案",
    key: "mouse",
  },
  {
    label: "键盘解决方案",
    key: "keyboard",
  },
  {
    label: "方案优势",
    key: "plan",
  },
  {
    label: "应用场景",
    key: "scenes",
  },
]);
let handleClickDownload = (path: any) => {
  router.push(path);
  handSelectPatch(path);
};
onMounted(() => {
  handSelectPatch(router.currentRoute.value.path);
});
// 选中状态
let handSelectPatch = (pathUrl: any) => {
  let path = pathUrl;
  if (path == "/") {
    active.value = 1;
  } else {
    active.value = 2;
  }
};
let handleSelect = (key: string | number) => {
  scrollToAnchor(key);
};
let scrollToAnchor = (anchorId: any) => {
  let element = document.getElementById(anchorId);
  if (element) {
    const distanceFromTop = 100; // 设置距离顶部的距离
    const elementTop = element.getBoundingClientRect().top;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offset = elementTop + scrollTop - distanceFromTop;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }
};
</script>
<style scoped>
.active {
  font-weight: bold;
}
</style>
