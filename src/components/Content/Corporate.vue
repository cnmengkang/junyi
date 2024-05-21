<template>
  <div
    class="corporate relative flex justify-center items-center bg-downCard h-80 bg-cover"
  >
    <div class="absolute">
      <h2 class="title mb-4 text-white">{{ $t('desc.title') }}</h2>
      <p class="text-white text-center">
        {{ $t('desc.desc') }}
      </p>
    </div>
  </div>
</template>
<style scoped>
.corporate {
  background-image: url(/public/images/Corporate.png);
}
</style>
