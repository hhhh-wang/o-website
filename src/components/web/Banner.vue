<template>
  <div class="banner">
    <div class="Limit">
      <el-carousel :interval="5000" arrow="hover" :height="bannerHeight + 'px'" :autoplay="true" ref="carousel"
                   trigger="click" indicator-position="none">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <div class="img_con">
            <div class="img_cover"></div>
            <img class="element-img" alt="" :src="item.imgUrl">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useHeaderStore } from '@/stores/handleHead';
import { onBeforeMount, reactive, ref, onMounted, onUnmounted } from 'vue';
type ImgItem = {
  id: number;
  imgUrl: string;
}

const HomePage = useHeaderStore();
let imgList = reactive<ImgItem[]>([])

const bannerHeight = ref(0);

const calculateBannerHeight = () => {
  const windowHeight = window.innerHeight;
  bannerHeight.value = Math.floor(windowHeight * 0.66);
};

onMounted(() => {
  calculateBannerHeight();
  window.addEventListener('resize', calculateBannerHeight);
});

onUnmounted(() => {
  window.removeEventListener('resize', calculateBannerHeight);
});

onBeforeMount(() => {
  imgList = [
    {
      id: 0,
      imgUrl: 'https://s1.ax1x.com/2023/04/28/p9l3MT0.jpg'
    },
    {
      id: 1,
      imgUrl: 'https://lf1-cdn-tos.bytescm.com/obj/static/ies/bytedance_official/_next/static/images/1-b4afd269ffb0ba19bd1dd33e3ed5cec3.png'
    },
    {
      id: 2,
      imgUrl: 'https://lf1-cdn-tos.bytescm.com/obj/static/ies/bytedance_official/_next/static/images/2-468bb0555d827d48bce4e178f085bf90.png'
    },
    {
      id: 3,
      imgUrl: 'https://s1.ax1x.com/2023/04/28/p9l1RiT.png'
    }, 
    {
      id: 4,
      imgUrl: 'https://s1.ax1x.com/2023/04/28/p9l16Zq.jpg'
    }
  ]
})
</script>
<style lang="less" scoped>
.banner {
  width: 100%;
  margin: 0 auto;
}

.Limit {
  width: 100%;
  box-sizing: border-box;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.img_con {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(51, 112, 255, .2);
    height: 100%;
    z-index: 666;
  }

  .element-img {
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
}

:deep(.el-carousel__arrow) {
  display: block !important;
  width: 70px;
  height: 70px;
  font-size: 40px;
  background-color: rgba(90, 88, 88, 0.1);
}
:deep(.el-carousel__arrow:hover) {
  background-color: rgba(16, 15, 15, 0.3);
}
</style>