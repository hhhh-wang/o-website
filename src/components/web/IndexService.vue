<template>
  <div class="wrap-block">
    <!-- 我们的优势 -->
    <div class="content-block who-we-are">
      <div class="block-header">
        <div class="block-line"></div>
        <div class="header-title">
          <svg class="icon" viewBox="0 0 1024 1024">
            <defs>
              <linearGradient id="advantageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#3370ff"/>
                <stop offset="100%" style="stop-color:#66a3ff"/>
              </linearGradient>
            </defs>
            <path fill="url(#advantageGradient)" d="M768 128H256c-35.3 0-64 28.7-64 64v512c0 35.3 28.7 64 64 64h512c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64zm0 544c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32v448zM384 768h256v64H384v-64z"/>
          </svg>
          <h2 class="service-info-title">我们的优势</h2>
        </div>
      </div>
      <div class="feature-list">
        <div class="feature-item" v-for="(item, index) in featureList" :key="index">
          <div class="feature-icon" v-html="item.icon"></div>
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
        <div class="header-title">
          <svg class="icon" viewBox="0 0 1024 1024">
            <defs>
              <linearGradient id="capabilityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#3370ff"/>
                <stop offset="100%" style="stop-color:#66a3ff"/>
              </linearGradient>
            </defs>
            <path fill="url(#capabilityGradient)" d="M832 160H192c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H232V232h560v560zM368 624h48V432h-48v192zm144 0h48V336h-48v288zm144 0h48V528h-48v96z"/>
          </svg>
          <h2 class="service-info-title">我们的能力</h2>
        </div>
      </div>
      <div class="capability-list">
        <div class="capability-item" v-for="(item, index) in capabilityList" :key="index">
          <div class="capability-card">
            <div class="capability-icon">
              <div class="icon-circle" v-html="item.icon"></div>
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
        <div class="block-header">
          <div class="block-line"></div>
          <div class="header-title">
            <svg class="icon" viewBox="0 0 1024 1024">
              <defs>
                <linearGradient id="serviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#3370ff"/>
                  <stop offset="100%" style="stop-color:#66a3ff"/>
                </linearGradient>
              </defs>
              <path fill="url(#serviceGradient)" d="M832 192H192c-35.3 0-64 28.7-64 64v512c0 35.3 28.7 64 64 64h640c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64zm0 64v96H192v-96h640zM192 768v-352h640v352H192zm128-448c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/>
            </svg>
            <h2 class="service-info-title">我们的服务</h2>
          </div>
        </div>
        <div class="service-timeline">
          <div class="service-list">
            <template v-for="(item, index) in serviceList" :key="index">
              <div class="service-item">
                <div class="service-card">
                  <div class="service-icon">
                    <div class="icon-circle" v-html="item.icon"></div>
                  </div>
                  <h3 class="service-name">{{ item.description }}</h3>
                  <p class="service-detail">{{ item.detail }}</p>
                </div>
              </div>
              <!-- 除了最后一个元素外，都显示箭头 -->
              <div v-if="index !== serviceList.length - 1" class="arrow-divider">
                <svg viewBox="0 0 24 24" class="arrow-icon">
                  <defs>
                    <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#3370ff"/>
                      <stop offset="100%" style="stop-color:#66a3ff"/>
                    </linearGradient>
                  </defs>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill="url(#arrowGradient)"/>
                </svg>
                <svg viewBox="0 0 24 24" class="arrow-icon">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill="url(#arrowGradient)"/>
                </svg>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- 案例展示优化 -->
    <div class="content-block service-case">
      <div class="case-content">
        <div class="case-header">
          <div class="block-line"></div>
          <h2 class="service-info-title">解决方案</h2>
          <p class="case-subtitle"></p>
        </div>
        <div class="case-container">
          <!-- 左侧导航 -->
          <div class="case-nav">
            <div class="nav-item" 
                 v-for="(item, index) in caseCategories" 
                 :key="index"
                 :class="{ active: currentCase === index }"
                 @click="switchCase(index)">
              <div class="nav-icon">
                <i :class="item.icon"></i>
              </div>
              <div class="nav-info">
                <h3 class="nav-title">{{ item.title }}</h3>
                <p class="nav-desc">{{ item.shortDesc }}</p>
              </div>
            </div>
          </div>
          
          <!-- 右侧内容 -->
          <div class="case-detail">
            <div class="detail-header">
              <h2 class="detail-title">{{ currentCaseData.title }}</h2>
              <div class="detail-background">
                <h3>行业背景</h3>
                <p v-for="(bg, index) in currentCaseData.background" 
                   :key="index">{{ bg }}</p>
              </div>
              <div class="detail-actions">
                <button class="btn-primary">了解详情</button>
                <button class="btn-outline">获取应用</button>
              </div>
            </div>
            <div class="detail-examples">
              <h3>相关客户案例</h3>
              <div class="example-grid">
                <div class="example-item" 
                     v-for="(example, index) in currentCaseData.examples" 
                     :key="index">
                  <img :src="example.image" :alt="example.title">
                  <div class="example-info">
                    <h4>{{ example.title }}</h4>
                    <p>{{ example.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 咨询模块 -->
    <div class="content-block consultation-block">
      <div class="consultation-content">
        <div class="case-header">
          <div class="block-line"></div>
          <h2 class="service-info-title">获取专属方案</h2>
          <p class="case-subtitle">填写需求，免费获取专属解决方案和报价</p>
        </div>
        <div class="consultation-form">
          <div class="form-group">
            <input type="text" v-model="consultForm.phone" placeholder="请输入手机号码" class="form-input">
            <button class="submit-btn" @click="submitConsult">获取方案</button>
          </div>
          <p class="form-tip">提交成功后，我们的顾问将在24小时内与您联系</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {onBeforeMount, onMounted, ref, reactive, computed} from 'vue'
import {capabilityList} from '@/mock/data/capability'
import {serviceList, serviceIdeaInfo} from '@/mock/data/service'
import {caseList} from '@/mock/data/case'
import {featureList} from '@/mock/data/feature'
import {caseCategories} from '@/mock/data/caseCategories'
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

const currentCase = ref(0)

const currentCaseData = computed(() => caseCategories[currentCase.value])

const switchCase = (index: number) => {
  currentCase.value = index
}

// 咨询表单数据
const consultForm = reactive({
  phone: ''
})

// 提交咨询
const submitConsult = () => {
  if (!consultForm.phone) {
    // 这里可以使用你的提示组件
    alert('请输入手机号码')
    return
  }
  
  // 这里添加手机号码验证逻辑
  const phoneReg = /^1[3-9]\d{9}$/
  if (!phoneReg.test(consultForm.phone)) {
    alert('请输入正确的手机号码')
    return
  }

  // 这里添加提交逻辑
  console.log('提交咨询', consultForm)
  // 提交成功后清空表单
  consultForm.phone = ''
  alert('提交成功，我们的顾问将尽快与您联系')
}
</script>
<style lang="less" scoped>
.wrap-block {
  background: #fff;
  color: #1a1a1a;
  position: relative;
  overflow: hidden;

  // 背景装饰元素
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 90% 10%, rgba(51, 112, 255, 0.05) 0%, transparent 60%);
    pointer-events: none;
  }

  // 通用区块样式
  .content-block {
    position: relative;
    padding: 100px 0;
    
    &:nth-child(even) {
      background: #f8faff;
    }
  }

  // 统一的标题样式
  .block-header, .case-header, .service-content {
    text-align: center;
    margin-bottom: 80px;

    .block-line {
      width: 40px;
      height: 4px;
      background: linear-gradient(90deg, #3370ff, #66a3ff);
      margin: 0 auto 20px;
      border-radius: 2px;
    }

    .header-title {
      display: inline-flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 20px;

      .icon {
        width: 42px;
        height: 42px;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.1);
        }
      }

      .service-info-title {
        font-size: 42px;
        font-weight: 600;
        color: #1a1a1a;
        margin: 0;
        line-height: 1;
      }
    }

    .case-subtitle {
      font-size: 20px;
      color: #666;
      margin-top: 20px;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  // 我们的优势
  .who-we-are {
    .feature-list {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
      padding: 0 20px;
    }

    .feature-item {
      background: #fff;
      border-radius: 20px;
      padding: 40px 30px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(51, 112, 255, 0.1);

        .feature-icon {
          transform: scale(1.1);
          background: #fff;
          
          svg {
            color: #3370ff;
          }
        }
      }

      .feature-icon {
        width: 70px;
        height: 70px;
        margin: 0 auto 30px;
        background: #f5f7ff;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;

        svg {
          width: 40px;
          height: 40px;
          transition: all 0.3s ease;
        }
      }

      .feature-content {
        text-align: center;

        .feature-title {
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 15px;
        }

        .feature-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
        }
      }
    }
  }

  // 我们的能力
  .capability-list {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    padding: 0 20px;
  }

  .capability-card {
    background: #fff;
    border-radius: 20px;
    padding: 40px 30px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(51, 112, 255, 0.1);
    }

    .capability-icon {
      margin-bottom: 30px;

      .icon-circle {
        width: 80px;
        height: 80px;
        margin: 0 auto;
        border-radius: 24px;
        background: #f5f7ff;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;

        svg {
          width: 40px;
          height: 40px;
          transition: all 0.3s ease;
        }

        &:hover {
          background: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(51, 112, 255, 0.1);
          
          svg {
            transform: scale(1.1);
          }
        }
      }
    }

    .capability-title {
      font-size: 20px;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 15px;
      text-align: center;
    }

    .capability-desc {
      font-size: 14px;
      color: #666;
      line-height: 1.6;
      text-align: center;
    }
  }

  // 服务流程
  .service-timeline {
    position: relative;
    padding: 60px 0;

    .service-list {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 0 20px;
    }

    .service-item {
      flex: 1;
      max-width: 260px;
      text-align: center;
    }

    .arrow-divider {
      display: flex;
      align-items: center;
      padding: 0 5px;
      margin-top: -30px; // 向上偏移，与卡片对齐
      
      .arrow-icon {
        width: 20px;
        height: 20px;
        transition: all 0.3s ease;

        &:first-child {
          margin-right: -8px; // 让两个箭头靠得更近
        }

        &:last-child {
          margin-left: -8px;
        }
      }

      &:hover {
        .arrow-icon {
          transform: translateX(3px);
          
          &:first-child {
            transform: translateX(2px);
          }
          &:last-child {
            transform: translateX(4px);
          }
        }
      }
    }

    .service-card {
      background: #fff;
      border-radius: 20px;
      padding: 30px 20px;
      height: 100%;
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

      .service-icon {
        margin-bottom: 20px;

        .icon-circle {
          width: 64px;
          height: 64px;
          margin: 0 auto;
          border-radius: 16px;
          background: #f5f7ff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;

          svg {
            width: 32px;
            height: 32px;
            color: #3370ff;
            transition: all 0.3s ease;
          }
        }
      }

      .service-name {
        font-size: 18px;
        font-weight: 600;
        color: #1a1a1a;
        margin-bottom: 12px;
      }

      .service-detail {
        font-size: 14px;
        color: #666;
        line-height: 1.6;
      }

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 16px 30px rgba(51, 112, 255, 0.1);

        .icon-circle {
          background: linear-gradient(135deg, #3370ff, #66a3ff);
          
          svg {
            color: #fff;
            transform: scale(1.1);
          }
        }
      }
    }
  }

  // 解决方案
  .case-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 40px;
    padding: 0 20px;
  }

  .case-nav {
    width: 280px;
    flex-shrink: 0;

    .nav-item {
      background: #fff;
      border-radius: 16px;
      padding: 20px;
      margin-bottom: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

      &:hover, &.active {
        background: #f5f7ff;
        box-shadow: 0 10px 30px rgba(51, 112, 255, 0.1);
      }

      .nav-title {
        font-size: 18px;
        font-weight: 600;
        color: #1a1a1a;
        margin-bottom: 8px;
      }

      .nav-desc {
        font-size: 14px;
        color: #666;
      }
    }
  }

  .case-detail {
    flex: 1;
    background: #fff;
    border-radius: 24px;
    padding: 40px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

    .detail-title {
      font-size: 32px;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 30px;
      text-align: center;
    }

    .detail-background {
      margin-bottom: 40px;
      background: #f8faff;
      padding: 30px;
      border-radius: 16px;

      h3 {
        font-size: 20px;
        font-weight: 600;
        color: #1a1a1a;
        margin-bottom: 20px;
      }

      p {
        font-size: 15px;
        color: #666;
        line-height: 1.8;
        margin-bottom: 15px;
      }
    }

    .detail-actions {
      display: flex;
      gap: 20px;
      justify-content: center;

      button {
        padding: 14px 30px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;

        &.btn-primary {
          background: linear-gradient(135deg, #3370ff, #66a3ff);
          color: #fff;
          border: none;
          box-shadow: 0 4px 15px rgba(51, 112, 255, 0.2);

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(51, 112, 255, 0.3);
          }
        }

        &.btn-outline {
          border: 1px solid #3370ff;
          color: #3370ff;
          background: transparent;

          &:hover {
            background: #f5f7ff;
            transform: translateY(-2px);
          }
        }
      }
    }
  }

  // 咨询模块
  .consultation-block {
    background: #f8faff;

    .consultation-form {
      max-width: 600px;
      margin: 50px auto 0;

      .form-group {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;

        .form-input {
          flex: 1;
          height: 56px;
          padding: 0 25px;
          border: 1px solid #e6eeff;
          border-radius: 12px;
          font-size: 16px;
          color: #1a1a1a;
          background: #fff;
          transition: all 0.3s ease;

          &:focus {
            outline: none;
            border-color: #3370ff;
            box-shadow: 0 0 20px rgba(51, 112, 255, 0.1);
          }

          &::placeholder {
            color: #999;
          }
        }

        .submit-btn {
          padding: 0 35px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 500;
          background: linear-gradient(135deg, #3370ff, #66a3ff);
          color: #fff;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(51, 112, 255, 0.2);

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(51, 112, 255, 0.3);
          }
        }
      }

      .form-tip {
        font-size: 14px;
        color: #666;
        text-align: center;
      }
    }
  }
}

.feature-icon {
  svg {
    width: 40px;
    height: 40px;
    transition: all 0.3s ease;
  }

  &:hover {
    background: #fff;
    
    svg {
      transform: scale(1.1);
    }
  }
}
</style>