<template>
  <div class="index">
    <div class="banner-wrap">
      <Banner :BannerHeight="store.getBannerHeight"></Banner>
      <!-- 修改为单个卡片 -->
      <div class="transition-section">
        <div class="transition-card">
          <div class="card-item">
            <div class="card-icon">
              <i class="el-icon-data-analysis"></i>
            </div>
            <div class="card-content">
              <h3>专业技术</h3>
              <p>十年研发经验，技术深厚</p>
            </div>
          </div>
          <div class="divider"></div>
          <div class="card-item">
            <div class="card-icon">
              <i class="el-icon-cpu"></i>
            </div>
            <div class="card-content">
              <h3>创新思维</h3>
              <p>紧跟技术前沿，引领创新</p>
            </div>
          </div>
          <div class="divider"></div>
          <div class="card-item">
            <div class="card-icon">
              <i class="el-icon-service"></i>
            </div>
            <div class="card-content">
              <h3>优质服务</h3>
              <p>全程专人对接，快速响应</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <index-service></index-service>
  </div>
</template>
<script setup lang="ts">
import Banner from '@/components/web/Banner.vue';
import IndexService from '@/components/web/IndexService.vue';
import OverLay from '@/components/web/overLayText.vue';
import ScrollHint from '@/components/web/scrollHint.vue';
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

.transition-section {
  position: absolute;
  bottom: -60px;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 0 20px;

  .transition-card {
    max-width: 1000px;
    margin: 0 auto;
    background: #fff;
    border-radius: 12px;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 8px 30px rgba(51, 112, 255, 0.15);
    }

    .card-item {
      flex: 1;
      display: flex;
      align-items: center;
      padding: 0 20px;
    }

    .divider {
      width: 1px;
      height: 60px;
      background: #eee;
      margin: 0 10px;
    }

    .card-icon {
      width: 56px;
      height: 56px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: linear-gradient(135deg, #3370ff, #66a3ff);
      color: #fff;
      font-size: 24px;
      margin-right: 20px;
    }

    .card-content {
      flex: 1;
      
      h3 {
        font-size: 18px;
        color: #333;
        margin-bottom: 8px;
        font-weight: 600;
      }

      p {
        font-size: 14px;
        color: #666;
        line-height: 1.6;
        margin: 0;
      }
    }
  }
}

// 响应式调整
@media only screen and (max-width: 768px) {
  .transition-section {
    padding: 0 15px;
    bottom: -240px;

    .transition-card {
      flex-direction: column;
      padding: 30px;

      .card-item {
        width: 100%;
        padding: 15px 0;
      }

      .divider {
        width: 80%;
        height: 1px;
        margin: 5px 0;
      }
    }
  }

  .banner-wrap {
    margin-bottom: 260px;
  }
}
</style>