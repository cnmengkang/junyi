<template>
  <!-- banner -->
  <banner />
  <!-- banner -->
  <!-- 我们的服务 -->
  <div class="max-w m-auto mb-16" id="my">
    <h2 class="title mb-1">{{ $t("content.title1") }}</h2>
    <p class="text-center text-neutral-300">.OUR SERVICES.</p>
    <div class="flex gap-20 mt-10">
      <div class="w-4/5">
        <img src="/public/images/my-left.png" alt="" />
      </div>
      <div class="w-2/5">
        <img
          style="height: 340px"
          class="bg-contain"
          src="/public/images/my-right.png"
          alt=""
        />
      </div>
    </div>
  </div>
  <!-- 我们的服务 -->
  <!-- 鼠标解决方案 -->
  <div class="max-w m-auto mb-16" id="mouse">
    <h2 class="title mb-1">{{ $t("content.title2") }}</h2>
    <p class="text-center text-neutral-300">.Mouse Solutions.</p>
    <div class="flex gap-20 justify-center mt-10">
      <div
        class="overflow-hidden relative w-2/4 hover:brightness-50 transition duration-500"
      >
        <img src="/public/images/mouse1.png" alt="" />
      </div>
      <div
        class="overflow-hidden relative w-2/4 hover:brightness-50 transition duration-500"
      >
        <img src="/public/images/mouse2.png" alt="" />
      </div>
    </div>
  </div>
  <!-- 鼠标解决方案 -->
  <!-- 键盘解决方案 -->
  <div class="max-w m-auto mb-16" id="keyboard">
    <h2 class="title mb-1">{{ $t("content.title3") }}</h2>
    <p class="text-center text-neutral-300">.Keyboard Solutions.</p>
    <div class="flex gap-20 justify-center mt-10">
      <div
        class="overflow-hidden relative w-2/4 hover:brightness-50 transition duration-500"
      >
        <img src="/public/images/keyboard1.png" alt="" />
      </div>
      <div
        class="overflow-hidden relative w-2/4 hover:brightness-50 transition duration-500"
      >
        <img src="/public/images/keyboard2.png" alt="" />
      </div>
    </div>
  </div>
  <!-- 键盘解决方案 -->
  <!-- 方案优势 -->
  <div class="mb-16" id="plan">
    <h2 class="title mb-1">{{ $t("content.title4") }}</h2>
    <p class="text-center text-neutral-300">.Scheme Advantage.</p>
    <div class="bg-Scheme mt-10">
      <div class="max-w flex m-auto gap-20">
        <div class="w-3/5 flex-wrap flex content-center">
          <div class="flex mb-5">
            <div class="mb-3">
              <h2 class="title-1 mb-2">{{$t('content4.title1')}}</h2>
              <p>
                {{$t('content4.desc1')}}
              </p>
            </div>
          </div>
          <div class="flex mb-5">
            <div class="mb-3">
              <h2 class="title-1 mb-2">{{$t('content4.title2')}}</h2>
              <p>
                {{$t('content4.desc2')}}
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="mb-3">
              <h2 class="title-1 mb-2">{{$t('content4.title3')}}</h2>
              <p>
                {{$t('content4.desc3')}}
              </p>
            </div>
          </div>
        </div>
        <div class="w-2/5">
          <img src="/public/images/plan.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <!-- 方案优势 -->
  <!-- 应用场景 -->
  <div class="max-w m-auto mb-16">
    <h2 class="title mb-1">{{ $t("content.title5") }}</h2>
    <p class="text-center text-neutral-300">.Application Scenario.</p>
    <div class="flex gap-20 justify-center mt-10">
      <div
        class="overflow-hidden relative w-2/4 hover:brightness-50 transition duration-500"
      >
        <img src="/public/images/smartOffice.png" alt="" />
        <div class="scenarios">
          <p class="mb-1">智能办公</p>
          <p class="text-xl">智慧办公 极速高效 省力省心</p>
        </div>
      </div>
      <div
        class="overflow-hidden relative w-2/4 hover:brightness-50 transition duration-500"
      >
        <img src="/public/images/study.png" alt="" />
        <div class="scenarios">
          <p class="mb-1">教育学习</p>
          <p class="text-xl">智慧学习 助益无穷 使用便捷</p>
        </div>
      </div>
    </div>
  </div>
  <!-- 应用场景 -->
  <Corporate class="mb-16" id="scenes" />
</template>
<script setup lang="ts">
import Corporate from "../components/Content/Corporate.vue";
import banner from "../components/Content/Banner.vue";
</script>
