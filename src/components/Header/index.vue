<template>
  <div class="max-w m-auto flex items-center">
    <Logo class="w-1/3" />
    <Nav class="w-1/3 flex" />
    <div class="w-1/3 flex justify-end relative">
      <n-select
        class="lang-select"
        v-model:value="currentLanguage"
        @update:value="handleSelect"
        :options="languagesOptions"
        style="width: 150px"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import Logo from "./Logo.vue";
import Nav from "./Nav.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const { t } = useI18n();
let languagesOptions = computed(() => [
  {
    label: t("language.Chinese"),
    value: "zh",
  },
  {
    label: t("language.English"),
    value: "en",
  },
]);
const currentLanguage = computed(() => {
  return locale.value || localStorage.getItem("lang") || "zh";
});
const handleSelect = (value: string) => {
  locale.value = value;
  localStorage.setItem("lang", value);
};
</script>
<style scoped>
.language {
  width: 20px;
}
</style>
