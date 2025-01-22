<template>
  <div class="wrap-block">
    <!-- 我们的优势 -->
    <div class="content-block who-we-are">
      <div class="block-header">
        <div class="block-line"></div>
        <h2 class="service-info-title">我们的优势</h2>
      </div>
      <div class="feature-list">
        <div class="feature-item" v-for="(item, index) in featureList" :key="index">
          <div class="feature-icon">
            <img :src="item.icon" :alt="item.title">
          </div>
          <div class="feature-content">
            <h3 class="feature-title">{{ item.title }}</h3>
            <p class="feature-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 我们能做什么 -->
    <div class="content-block what-we-do">
      <div class="block-header">
        <div class="block-line"></div>
        <h2 class="service-info-title">我们的能力</h2>
      </div>
      <div class="capability-list">
        <div class="capability-item" v-for="(item, index) in capabilityList" :key="index">
          <div class="capability-card">
            <div class="capability-icon">
              <div class="icon-circle"></div>
            </div>
            <h3 class="capability-title">{{ item.title }}</h3>
            <p class="capability-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 服务板块优化 -->
    <div class="content-block service-block">
      <div class="service-content">
        <div class="block-line"></div>
        <h2 class="service-info-title">我们的服务</h2>
        <div class="service-list">
          <div class="service-item" v-for="(item, index) in serviceList" :key="index">
            <div class="service-card">
              <div class="service-icon">
                <img :src="item.path" :alt="item.description">
              </div>
              <h3 class="service-name">{{ item.description }}</h3>
              <p class="service-detail">{{ item.detail }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 案例展示优化 -->
    <div class="content-block service-case">
      <div class="case-content">
        <div class="block-line"></div>
        <h2 class="service-info-title">经典案例</h2>
        <p class="case-subtitle">累计服务超过100家企业的成功案例</p>
        <div class="case-list">
          <div class="case-item" v-for="(item, index) in caseList" :key="index">
            <div class="case-card">
              <div class="case-image">
                <img :src="item.path" :alt="item.desc">
                <div class="case-overlay">
                  <div class="case-tags">
                    <span class="tag" v-for="tag in item.tags" :key="tag">{{ tag }}</span>
                  </div>
                </div>
              </div>
              <div class="case-info">
                <h3 class="case-name">{{ item.desc }}</h3>
                <div class="case-progress">
                  <div class="progress-bar">
                    <div class="progress-inner" :style="{ width: item.progress + '%' }"></div>
                  </div>
                  <span class="progress-text">完成度 {{ item.progress }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {onBeforeMount, onMounted, ref, reactive} from 'vue'
import {capabilityList} from '@/mock/data/capability'
import {serviceList, serviceIdeaInfo} from '@/mock/data/service'
import {caseList} from '@/mock/data/case'
import {featureList} from '@/mock/data/feature'
// 删除原来的数据定义，保留图片导入
import service1 from '@/assets/img/index/service1.png'
import service2 from '@/assets/img/index/service2.png'


interface ImgItem {
  name: string;
  path: string;
}

let serviceIdeaImg = reactive<ImgItem[]>([])

onBeforeMount(() => {
  serviceIdeaImg = [
    {
      name: 'lefImg',
      path: service1
    },
    {
      name: 'rightImg',
      path: service2
    }
  ]
})
</script>
<style lang="less" scoped>
.wrap-block {
  position: relative;
  padding-top: 54px;

  .content-block {
    position: relative;
    overflow: hidden;
  }

  .block-header {
    text-align: center;
    margin-bottom: 40px;
  }

  .service-card {
    padding: 24px;
    border-radius: 8px;
    transition: all 0.3s ease;
    background: #fff;
    height: 100%;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    }

    .service-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .service-name {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 12px;
      color: #333;
    }

    .service-detail {
      font-size: 14px;
      color: #666;
      line-height: 1.6;
    }
  }

  .case-card {
    border-radius: 8px;
    overflow: hidden;

    .case-info {
      padding: 16px;

      .case-name {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 12px;
      }

      .case-tags {
        margin-bottom: 16px;

        .el-tag {
          margin-right: 8px;
          margin-bottom: 8px;
        }
      }
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }
}

.service-block {
  max-width: 1440px;
  height: 500px;
  margin: 0 auto;
  text-align: center;
  overflow-x: hidden;

  .block-line {
    margin: 0 auto 12px;
    width: 24px;
    height: 4px;
    background-color: #3370ff;
    border-radius: 100px;
  }

  .service-info-title {
    font-weight: 700;
    font-size: 32px;
    position: relative;
    bottom: 2px;
    //padding-top: 60px;
  }

  .service-info-subtitle {
    font-size: 16px;
    line-height: 1.5;
    color: #646a73;
    margin-top: 30px;
  }

  .service-list {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    margin: 70px auto 0 auto;
  }

  .service-title-shadow {
    width: 111px;
    height: 111px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;
  }

  .service-title-shadow:hover {
    width: 111px;
    height: 111px;
    border-radius: 50%;
    transform: scale(1.05) translateY(-1px);
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, .15);
  }

  .service-name {
    margin-top: 30px;
    font-weight: 600;
    font-size: 20px;
  }
}

.service-idea {
  background-color: #F5F5F5;
  width: 100%;

  .service-idea {
    max-width: 1440px;
    overflow: hidden;
    display: flex;
  }

  .idea-left img {
    width: 600px;
  }

  .idea-right {
    height: 500px;
    width: calc(100% - 600px);
    margin-left: 100px;
    padding-top: 50px;

    .block-line {
      margin: 0 0 12px 0;
      width: 24px;
      height: 4px;
      background-color: #3370ff;
      border-radius: 100px;
    }

    .idea-title {
      font-weight: 700;
      font-size: 32px;
      position: relative;
      bottom: 2px;
      //padding-top: 60px;
    }

    .idea-subtitle {
      font-size: 16px;
      line-height: 1.5;
      color: #646a73;
      margin-top: 10px;
    }

    img {
      width: 500px;
      height: 200px;
      object-fit: cover;
      margin-top: 40px;
      margin-bottom: 30px;
      padding: 10px;
      border: #d3dce6 2px dashed;
    }

    .idea-desc {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      max-height: 88px;
      max-width: 550px;
      font-size: 14px;
      line-height: 30px;
      color: #646a73;
    }

    .el-button {
      margin-top: 40px;
    }
  }
}

.service-case {
  padding: 80px 0;
  background: #f8f9fa;

  .case-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .case-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 50px;
  }

  .case-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);

      .case-overlay {
        opacity: 1;
      }
    }
  }

  .case-image {
    position: relative;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .case-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(51, 112, 255, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .case-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 20px;
      justify-content: center;

      .tag {
        padding: 6px 12px;
        background: rgba(255, 255, 255, 0.2);
        color: #fff;
        border-radius: 20px;
        font-size: 12px;
        backdrop-filter: blur(4px);
      }
    }
  }

  .case-info {
    padding: 20px;

    .case-name {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin-bottom: 16px;
    }

    .case-progress {
      .progress-bar {
        height: 4px;
        background: #eee;
        border-radius: 2px;
        overflow: hidden;
        margin-bottom: 8px;

        .progress-inner {
          height: 100%;
          background: linear-gradient(90deg, #3370ff, #6695ff);
          border-radius: 2px;
          transition: width 0.3s ease;
        }
      }

      .progress-text {
        font-size: 14px;
        color: #666;
      }
    }
  }
}

.capability-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 0 40px;
  margin-top: 40px;
}

.capability-card {
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }

  .capability-icon {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;

    .icon-circle {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #3370ff, #6695ff);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .capability-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #333;
  }

  .capability-desc {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
  }
}

.who-we-are {
  padding: 40px 0;
  background: #fff;

  .feature-list {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 16px;

    .feature-icon {
      width: 48px;
      height: 48px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .feature-content {
      .feature-title {
        font-size: 20px;
        font-weight: 600;
        color: #333;
        margin-bottom: 4px;
      }

      .feature-desc {
        font-size: 14px;
        color: #666;
        white-space: nowrap;
      }
    }
  }
}
</style>