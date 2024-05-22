<template>
  <div class="flex justify-center items-center max-w m-auto text-white">
    <div class="left w-3/6 flex items-start gap-5 flex-col">
      <div class="logo">
        <img width="170" src="/public/images/whiteLogo.png" alt="" />
      </div>
      <div class="">
        <p class="mb-1">{{$t('footer.address')}} : {{ $t('footer.city') }}</p>
        <p>{{$t('footer.icp')}}</p>
      </div>
    </div>
    <div class="right w-3/6 flex items-center gap-5">
      <div class="w-10">
        <img src="/public/images/connect.png" alt="" />
      </div>
      <div class="">
        <p class="mb-1">{{$t('footer.contactUs')}}</p>
        <p class="mb-1">{{$t('footer.deckPeople')}} : {{ $t('footer.name') }}</p>
        <p>{{$t('footer.tel')}}：134-8076-8237</p>
      </div>
    </div>
  </div>
</template>
