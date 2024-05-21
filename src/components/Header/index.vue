<template>
  <div class="max-w m-auto flex items-center">
    <Logo class="w-1/3" />
    <Nav class="w-1/3 flex" />
    <n-dropdown
      trigger="click"
      :options="languagesOptions"
      @select="handleSelect"
    >
      <n-button>{{ currentLanguage }}</n-button>
    </n-dropdown>
  </div>
</template>
<script setup lang="ts">
import Logo from "./Logo.vue";
import Nav from "./Nav.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const languagesOptions = [
  {
    label: "中文",
    value: "zh",
  },
  {
    label: "English",
    value: "en",
  },
];
const currentLanguage = computed(() => {
  return locale.value || localStorage.getItem("lang") || "zh";
});
const handleSelect = (val: string) => {
  locale.value = val;
  // 切换语言后，存储到localStorage中
  // 避免跳转页面或者刷新当前页后，语言又变成默认的中文
  localStorage.setItem("lang", val);
};
</script>
<style scoped></style>
