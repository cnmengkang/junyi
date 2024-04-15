<template>
  <!-- 我们的服务 -->
  <div class="mb-16">
    <h2 class="title mb-1">我们的服务</h2>
    <p class="text-center text-neutral-300">.OUR SERVICES.</p>
    <div class="flex gap-20 justify-center mt-10">
      <div class="card bg-indexCard w-4/12 items-center">
        <div class="card-rounded">11111</div>
        <h6 class="sub-title">鼠标定制</h6>
        <p class="text-center">共享高端配置，自由选择</p>
      </div>
      <div class="card bg-indexCard w-4/12 items-center">
        <div class="card-rounded">11111</div>
        <h6 class="sub-title">键盘定制</h6>
        <p class="text-center">个性化定制，自由选择</p>
      </div>
    </div>
  </div>
  <!-- 我们的服务 -->
  <!-- 鼠标解决方案 -->
  <div class="mb-16">
    <h2 class="title mb-1">鼠标解决方案</h2>
    <p class="text-center text-neutral-300">.Mouse Solutions.</p>
    <h2 class="title-1 mb-4 text-fontColor">方案一（PCBA定制）：</h2>
    <div class="flex gap-20 bg-bgColor p-8 mb-10">
      <div class="bg-indexPlan w-full items-center">
        <img src="/src/assets/images/u212.png" alt="" />
      </div>
      <div class="bg-indexPlan w-full items-center flex justify-center">
        <div class="flex flex-col items-center">
          <h2 class="title-1 mb-5 text-center text-fontColor">
            PCBA 定制服务商
          </h2>
          <p class="items-center flex justify-center gap-2 mb-6">
            物料采取<span class="circle"></span>鼠标定制<span
              class="circle"
            ></span
            >多种配置供选择
          </p>
          <button class="planInput relative">
            骏意键盘
            <div class="planInputButton"></div>
          </button>
        </div>
      </div>
    </div>
    <h2 class="title-1 mb-4 text-fontColor">方案二（整机定制）：</h2>
    <div class="flex gap-20 bg-bgColor p-8">
      <div class="bg-indexPlan w-full items-center">
        <img src="/src/assets/images/u212.png" alt="" />
      </div>
      <div class="bg-indexPlan w-full items-center flex justify-center">
        <div class="flex flex-col items-center">
          <h2 class="title-1 mb-5 text-center text-fontColor">
            PCBA 定制服务商
          </h2>
          <p class="items-center flex justify-center gap-2 mb-6">
            物料采取<span class="circle"></span>鼠标定制<span
              class="circle"
            ></span
            >多种配置供选择
          </p>
          <button class="planInput relative">
            骏意键盘
            <div class="planInputButton"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- 鼠标解决方案 -->
  <!-- 键盘解决方案 -->
  <div class="mb-16">
    <h2 class="title mb-1">键盘解决方案</h2>
    <p class="text-center text-neutral-300">.Mouse Solutions.</p>
    <h2 class="title-1 mb-4 text-fontColor">方案一（PCBA定制）：</h2>
    <div class="flex gap-20 bg-bgColor p-8 mb-10">
      <div class="bg-indexPlan w-full items-center">
        <img src="/src/assets/images/u212.png" alt="" />
      </div>
      <div class="bg-indexPlan w-full items-center flex justify-center">
        <div class="flex flex-col items-center">
          <h2 class="title-1 mb-5 text-center text-fontColor">
            PCBA 定制服务商
          </h2>
          <p class="items-center flex justify-center gap-2 mb-6">
            物料采取<span class="circle"></span>键盘定制<span
              class="circle"
            ></span
            >多种配置供选择
          </p>
          <button class="planInput relative">
            骏意键盘
            <div class="planInputButton"></div>
          </button>
        </div>
      </div>
    </div>
    <h2 class="title-1 mb-4 text-fontColor">方案二（整机定制）：</h2>
    <div class="flex gap-20 bg-bgColor p-8">
      <div class="bg-indexPlan w-full items-center">
        <img src="/src/assets/images/u212.png" alt="" />
      </div>
      <div class="bg-indexPlan w-full items-center flex justify-center">
        <div class="flex flex-col items-center">
          <h2 class="title-1 mb-5 text-center text-fontColor">整机定制</h2>
          <p class="items-center flex justify-center gap-2 mb-6">
            LOGO定制<span class="circle"></span>整体键盘<span class="circle">
            </span
            >价格优惠<span class="circle"> </span>高配置
          </p>
          <button class="planInput relative">
            骏意键盘
            <div class="planInputButton"></div>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- 键盘解决方案 -->
  <!-- 方案优势 -->
  <div class="mb-16">
    <h2 class="title mb-1">方案优势</h2>
  </div>
  <!-- 方案优势 -->
  <!-- 应用场景 -->
  <div class="mb-16">
    <h2 class="title mb-1">应用场景</h2>
    <p class="text-center text-neutral-300">.OUR SERVICES.</p>
    <div class="flex gap-20 justify-center mt-10">
      <div class="card bg-indexCard w-5/12">
        <div class="scenarios">智能办公</div>
      </div>
      <div class="card bg-indexCard w-5/12">
        <div class="scenarios">教育学习</div>
      </div>
    </div>
  </div>
  <!-- 应用场景 -->
  <Corporate class="mb-16" />
</template>

<script setup lang="ts">
import Corporate from "/src/components/Content/Corporate.vue";
</script>
