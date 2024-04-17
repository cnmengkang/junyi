<template>
  <div class="download relative">
    <img src="/public/images/downBg.png" alt="" />
    <div class="mb-16 absolute bottom-[10%] left-2/4 max-w -translate-x-1/2">
      <h2 class="title mb-10">骏意智能键鼠软件下载</h2>
      <div class="flex gap-20 justify-center">
        <div
          v-for="item in result"
          :key="item.id"
          @click="handleClickDownload(item)"
          class="card bg-downCard hover:bg-cardHover hover:text-fontColor w-80 transition duration-500"
        >
          <div
            v-if="item.id == 1"
            class="m-auto w-20 flex items-center justify-center"
          >
            <div class="m-auto w-20 flex items-center justify-center">
              <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
              <svg
                enable-background="new 0 0 512 512"
                id="Layer_1"
                class="fill-regal-fill"
                version="1.1"
                viewBox="0 0 512 512"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <path
                    d="M508.2,391.7c0,37.5,0,75,0.1,112.4c0,4.3-0.5,5.8-5.7,5.3c-16.3-1.7-32.4-4.8-48.7-6.6   c-12.2-1.3-24.3-3.6-36.4-5c-11.1-1.3-22.3-3.1-33.4-4.7c-16.4-2.3-32.8-4.6-49.2-6.9c-13.5-1.8-27-3-40.3-5.5   c-11.7-2.2-23.6-2.8-35.2-5.3c-6.6-1.4-13.5-0.8-20.1-3c-2.7-0.9-3.3-1.9-3.3-4.4c0.1-8.8,0-17.7,0-26.5c0-54.6,0-109.3,0-163.9   c0-6.7,0-6.7,6.4-6.7c28.2,0,56.4-1.1,84.5,0.3c58.9,2.9,117.8,0.6,176.7,1.4c4.4,0.1,4.7,2,4.7,5.4   C508.2,316,508.2,353.8,508.2,391.7C508.2,391.7,508.2,391.7,508.2,391.7z"
                  />
                  <path
                    d="M508.2,128.5c0,37.3,0,74.6,0,112c0,6.5,0,6.6-6.4,6.6c-50,0.1-100-0.6-149.9,0.4   c-36.5,0.8-72.9,0.3-109.4,0.8c-6.6,0.1-6.6,0-6.6-6.5c0-62.5,0-125,0-187.4c0-6.8,1-7.6,8-8.4c16.1-1.7,32.1-4.5,48.2-6.5   c12.1-1.5,24.3-3.2,36.4-4.9c11.9-1.7,23.9-2.7,35.8-5c11-2.2,22.4-2.8,33.5-4.7c12.6-2.1,25.2-3.2,37.8-5.2   c10.6-1.7,21.3-3.2,32-4.6c11.3-1.5,22.6-3,33.9-4.7c6.5-0.9,6.8-0.8,6.8,5.8C508.2,53.5,508.2,91,508.2,128.5z"
                  />
                  <path
                    d="M214,150.4c0,29.8,0,59.6,0,89.5c0,8.3-0.8,9-9.1,9.1c-8.7,0.1-17.3,0-26,0.1   c-55.1,0.5-110.2,1.3-165.3,1.2c-4.1,0-5.7-0.8-5.7-5.4C8,191.5,8,138.2,7.9,84.9c0-4.4,1.3-5.7,5.9-6.3   c14.5-1.7,28.8-4.4,43.2-6.4c12.6-1.8,25.2-3.4,37.9-5.1c13.5-1.8,27-3.6,40.4-5.6c9.6-1.5,19.5-1.6,28.9-4.1   c6.5-1.7,13.2-1.5,19.7-2.5c8.2-1.2,16.3-2.4,24.5-3.7c2.9-0.5,4.8-0.3,5,3.3c0.2,2.3,0.6,4.6,0.6,6.9   C214,91.1,214,120.8,214,150.4C214,150.4,214,150.4,214,150.4z"
                  />
                  <path
                    d="M214,361.6c0,26.8,0.3,53.7-0.2,80.5c-0.2,8.1,0.9,16.2-0.5,24.3c-0.4,2.1-1.1,2.8-3.2,2.5   c-10.5-1.5-21-3-31.5-4.4c-16.2-2.2-32.6-3.7-48.7-6.7c-11.4-2.1-22.9-3.2-34.3-5.1c-11.9-2-24-3.1-36-4.9   c-11.8-1.8-23.7-2.4-35.3-5.3c-4.1-1-8.5-1.1-12.8-1.3c-2.5-0.1-3.6-1-3.5-3.6c0.1-3.8,0-7.7,0-11.5c0-50,0.1-100-0.1-150   c0-5,1.2-6.4,6.3-6.4c33.7,0.3,67.3-0.6,101,0.4c31.1,0.9,62.3,0.4,93.4,0.8c4.9,0.1,5.5,2.7,5.5,6.2c0.1,9.7,0,19.3,0,29   C214,324.6,214,343.1,214,361.6z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div
            v-if="item.id == 2"
            class="m-auto w-20 flex items-center justify-center"
          >
            <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
            <svg
              enable-background="new 0 0 512 512"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
              xml:space="preserve"
              class="fill-regal-fill"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <path
                  d="M185.7,127.4c10.2-0.2,27.4,6.3,44.3,13.2c27.7,11.1,32,11.6,59.7,0.2c16.4-6.7,33.1-12.2,50.8-14   c27.2-2.8,52.2,3.6,75.5,17.6c11.5,7,21.7,15.4,29.9,26.1c2.8,3.6,2.9,5.6-1.3,8.4c-46.5,30.6-63.2,91.7-39,142.3   c11.3,23.6,29.2,40.7,52.6,52c3.7,1.8,4.3,3.4,2.9,7.2c-11.8,32.8-28.5,62.7-50.6,89.6c-5.3,6.4-10.7,12.7-16.7,18.6   c-18.2,18.1-39.4,23.6-64.2,16.9c-10.8-2.9-20.9-7.7-31.4-11.3c-28.2-9.8-55.1-4.6-81.6,6.7c-9.6,4.1-19.5,6.7-29.8,7.8   c-14.9,1.6-27.9-3.5-39.1-13.1c-22.3-19-39.5-42.2-54.1-67.5c-15.8-27.3-26.8-56.5-34.1-87.1c-6.9-28.9-9.8-58.1-6.5-87.7   c3-27.3,11.3-52.9,27.7-75.1C104.5,146,136.4,128.3,185.7,127.4z"
                />
                <path
                  d="M255.9,110.4c1.4-36.4,18.4-64.2,47.3-85.3C318.1,14.1,335,7.9,353.1,4.6c3.9-0.7,4.9,0.4,4.9,4.2   c0.3,41.6-16.9,74.4-50.1,98.6c-13.4,9.8-29.3,14-46.1,13.8c-4.5,0-6.5-1.2-5.9-5.9C256.1,113.7,255.9,112,255.9,110.4z"
                />
              </g>
            </svg>
          </div>
          <div class="" v-if="item.show">
            <h6 class="sub-title mt-10">Windows客户端下载</h6>
            <p class="mb-2">版本：{{ item.version }}</p>
            <p class="mb-2">更新时间：{{ item.timestamp }}</p>
            <p>
              系统支持：<span>{{ item.system_support }}</span>
            </p>
          </div>
          <div class="" v-else>
            <h6 class="sub-title mt-10">敬请期待</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
let result = ref();
onMounted(() => {
  getAjax();
});
let getAjax = () => {
  fetch("./data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      result.value = data;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};
let handleClickDownload = (item: any) => {
  if (!item.isDownload) return;
  console.log(item);
  const link = document.createElement("a");
  // 设置链接的下载属性，这里的文件名为example.txt，可以根据需求修改
  link.setAttribute("download", item.url);
  // 设置链接的href属性为文件的URL
  link.href = item.url;
  // 将链接添加到DOM中
  document.body.appendChild(link);
  // 模拟点击链接进行下载
  link.click();
  // 移除链接
  document.body.removeChild(link);
};
</script>
<style scoped>
.card:hover svg {
  fill: rgba(42, 121, 245, 1);
}
svg {
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}
</style>
