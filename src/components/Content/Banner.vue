<template>
  <n-carousel draggable show-arrow autoplay class="mb-10 wrapper">
    <img class="carousel-img" src="/src/assets/images/banner2.png" />
    <img class="carousel-img" src="/src/assets/images/banner1.png" />

    <img class="carousel-img" src="/src/assets/images/banner3.png" />

    <template #arrow="{ prev, next }">
      <div class="custom-arrow">
        <button type="button" class="custom-arrow--left" @click="prev">
          <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              enable-background="new 0 0 512 512"
              xml:space="preserve"
            >
              <path
                d="M217.9,256L345,129c9.4-9.4,9.4-24.6,0-33.9c-9.4-9.4-24.6-9.3-34,0L167,239c-9.1,9.1-9.3,23.7-0.7,33.1L310.9,417
	c4.7,4.7,10.9,7,17,7c6.1,0,12.3-2.3,17-7c9.4-9.4,9.4-24.6,0-33.9L217.9,256z"
              ></path></svg
          >
        </button>
        <button type="button" class="custom-arrow--right" @click="next">
          <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              enable-background="new 0 0 512 512"
              xml:space="preserve"
            >
              <path
                d="M294.1,256L167,129c-9.4-9.4-9.4-24.6,0-33.9s24.6-9.3,34,0L345,239c9.1,9.1,9.3,23.7,0.7,33.1L201.1,417
	c-4.7,4.7-10.9,7-17,7c-6.1,0-12.3-2.3-17-7c-9.4-9.4-9.4-24.6,0-33.9L294.1,256z"
              ></path></svg>
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

<script lang="ts"></script>

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
  background-color: rgba(255, 255, 255, 0.2);
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
.custom-arrow button:hover {
  background-color: #fff;
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
