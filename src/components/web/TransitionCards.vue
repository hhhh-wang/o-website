<template>
  <div class="transition-section">
    <div class="transition-card">
      <template v-for="(item, index) in cardList" :key="index">
        <div class="card-item">
          <div class="card-icon" v-html="item.icon"></div>
          <div class="card-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
        <!-- 除了最后一个元素外，都显示分隔线 -->
        <div class="divider" v-if="index !== cardList.length - 1"></div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { transitionCardList } from '@/mock/data/transitionCards';

const cardList = transitionCardList;
</script>

<style lang="less" scoped>
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

      .icon {
        width: 32px;
        height: 32px;
        transition: all 0.3s ease;
      }

      &:hover .icon {
        transform: scale(1.1);
      }
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
}
</style> 