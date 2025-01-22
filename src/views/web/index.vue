<template>
  <div class="index">
    <div class="banner-wrap">
      <Banner :BannerHeight="store.getBannerHeight"></Banner>
      <TransitionCards />
    </div>
    <index-service></index-service>
  </div>
</template>
<script setup lang="ts">
import Banner from '@/components/web/Banner.vue';
import IndexService from '@/components/web/IndexService.vue';
import TransitionCards from '@/components/web/TransitionCards.vue';
import {onMounted, onUnmounted, ref} from 'vue';

import {useHeaderStore} from '@/stores/handleHead';

const store = useHeaderStore();

let scrollTop = ref(0);
let oldScrollTop = ref(0);

onMounted(() => {
  window.addEventListener('resize', setBannerHeight);
  setBannerHeight();
  window.addEventListener('scroll', scrollHandle);
})

onUnmounted(() => {
  window.removeEventListener('resize', setBannerHeight)
  window.removeEventListener('scroll', scrollHandle)
})

function setBannerHeight() {
  store.setBannerHeight(window.innerHeight);
}

function scrollHandle() {
  scrollTop.value = document.documentElement.scrollTop ||
      window.pageYOffset ||
      document.body.scrollTop;
  scrollTop.value <= store.getBannerHeight - 35 ? commitValue(false) : commitValue(true);
  // 滚动条移动的距离
  let scrollStep = scrollTop.value - oldScrollTop.value;
  // 更新——滚动前，滚动条距文档顶部的距离
  oldScrollTop.value = scrollStep;
  scrollStep >= 40 ? store.setHeaderShow(true) : store.setHeaderShow(false);
}

function commitValue(value: boolean) {
  store.setShadowActive(value);
  store.setNavDarkActive(value);
}

</script>

<style lang="less" scoped>
.banner-wrap {
  overflow: visible;
  position: relative;
  margin-bottom: 80px;
}

.overlay {
  z-index: 666;
}

.wrap-block {
  position: relative;
  padding-top: 54px;
}

// 响应式调整
@media only screen and (max-width: 768px) {
  .banner-wrap {
    margin-bottom: 260px;
  }
}
</style>