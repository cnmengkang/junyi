<template>
  <n-carousel draggable show-arrow autoplay class="mb-10 wrapper">
    <img class="carousel-img" src="/public/images/banner1.png" />
    <img class="carousel-img" src="/public/images/banner2.png" />
    <img class="carousel-img" src="/public/images/banner3.png" />

    <template #arrow="{ prev, next }">
      <div class="custom-arrow">
        <button type="button" class="custom-arrow--left" @click="prev">
          <img src="/public/images/arrow-left.png" alt="" />
        </button>
        <button type="button" class="custom-arrow--right" @click="next">
          <img src="/public/images/arrow-right.png" alt="" />
        </button>
      </div>
    </template>
    <template #dots="{ total, currentIndex, to }">
      <ul class="custom-dots">
        <li
          v-for="index of total"
          :key="index"
          :class="{ ['is-active']: currentIndex === index - 1 }"
          @click="to(index - 1)"
        />
      </ul>
    </template>
  </n-carousel>
</template>

<style scoped>
.carousel-img {
  width: 100%;
}
.wrapper {
  position: relative;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-right: 12px;
  color: #fff;
  border-width: 0;
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  top: 50%;
}
.custom-arrow .custom-arrow--left {
  left: 5%;
}
.custom-arrow .custom-arrow--right {
  right: 5%;
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
}

.custom-dots li {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 10px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 80px;
  background: #000;
}
</style>
