<template>
  <div class="nav gap-10 justify-center">
    <button
      class="text-2xl font-medium"
      :class="{ active: active === 1 }"
      @click="handleClickDownload('/')"
    >
      <n-dropdown trigger="hover" :options="options" @select="handleSelect">
        {{ $t("header.menu1") }}
      </n-dropdown>
    </button>
    <button
      class="text-2xl font-medium"
      :class="{ active: active === 2 }"
      @click="handleClickDownload('/download')"
    >
      {{ $t("header.menu2") }}
    </button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
let active = ref(0);
const router: any = useRouter();
let options = computed(() => [
  {
    label: t("menu.nav1"),
    key: "my",
  },
  {
    label: t("menu.nav2"),
    key: "mouse",
  },
  {
    label: t("menu.nav3"),
    key: "keyboard",
  },
  {
    label: t("menu.nav4"),
    key: "plan",
  },
  {
    label: t("menu.nav5"),
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
  let path = router.currentRoute.value.path;
  if (path == "/") {
    scrollToAnchor(key);
  } else {
    active.value = 1;
    router.push("/");
    let timer = setInterval(() => {
      scrollToAnchor(key);
      clearInterval(timer);
    }, 500);
  }
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
