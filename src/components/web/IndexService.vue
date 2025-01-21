<template>
    <div class="wrap-block">
        <!-- 我们能做什么 -->
        <div class="content-block what-we-do">
            <div class="block-header">
                <div class="block-line"></div>
                <h2 class="block-title">我们能做什么</h2>
                <p class="block-subtitle">用科技创新驱动企业数字化转型</p>
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
                <p class="service-info-subtitle">专注技术创新，助力企业数字化转型</p>
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
                <h2 class="case-title">经典案例</h2>
                <p class="case-subtitle">累计服务超过100家企业的成功案例</p>
                <div class="case-list">
                    <div class="case-item" v-for="(item, index) in caseList" :key="index">
                        <el-card class="case-card" :body-style="{ padding: '0px' }" shadow="hover">
                            <img :src="item.path" :alt="item.desc">
                            <div class="case-info">
                                <h3 class="case-name">{{ item.desc }}</h3>
                                <div class="case-tags">
                                    <el-tag v-for="tag in item.tags" :key="tag" size="small">{{ tag }}</el-tag>
                                </div>
                                <el-progress 
                                    :percentage="item.progress"
                                    :format="format"
                                    :stroke-width="4"
                                    status="success">
                                </el-progress>
                            </div>
                        </el-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import bigData from '@/assets/img/index/bigData.webp';
import cloud from '@/assets/img/index/cloud.webp';
import internet from '@/assets/img/index/internet.webp';
import media from '@/assets/img/index/media.webp';
import service1 from '@/assets/img/index/service1.png';
import service2 from '@/assets/img/index/service2.png';
import app1 from '@/assets/img/index/app1.jpg';
import system1 from '@/assets/img/index/system1.jpg'
import system2 from '@/assets/img/index/system2.jpg'
import { onBeforeMount, onMounted, ref, reactive } from 'vue'

interface BaseItem {
    path: string;
}
interface ServiceItem extends BaseItem {
    description: string;
    detail: string;
    icon?: string;
}
interface ImgItem extends BaseItem {
    name: string;
}
interface CaseItem extends BaseItem {
    desc: string;
    tags: string[];
    progress: number;
}

type InfoData = {
    ideaTitle: string;
    ideaSubTitle: string;
    ideaDesc: string;
}
// const serviceList = ref<ServiceItem[]>([])
let serviceList = reactive<ServiceItem[]>([
    {
        description: '数据分析与挖掘',
        detail: '运用先进的数据分析技术，帮助企业发现数据价值，优化决策流程',
        path: bigData,
        icon: 'data-analysis'
    },
    {
        description: 'AI智能应用',
        detail: '提供智能算法服务，包括计算机视觉、自然语言处理等解决方案',
        path: media,
        icon: 'ai'
    },
    {
        description: '物联网解决方案',
        detail: '打造智能硬件生态系统，实现设备互联互通，数据实时监控',
        path: internet,
        icon: 'iot'
    },
    {
        description: '云原生架构',
        detail: '基于云计算技术，提供高可用、可扩展的企业级解决方案',
        path: cloud,
        icon: 'cloud'
    }
])
let serviceIdeaInfo = reactive<InfoData>({
    ideaTitle: '变量工坊的愿景',
    ideaSubTitle: 'OUR VISION',
    ideaDesc: '作为技术创新的先行者，我们致力于用科技改变生活。通过深度学习、人工智能等前沿技术，为企业提供全方位的数字化转型解决方案。我们相信，技术创新将持续推动社会进步，让生活更智能、更便捷。'
})
let serviceIdeaImg = reactive<ImgItem[]>([])
let caseList = reactive<CaseItem[]>([
    {
        desc: '智慧城市数据平台',
        path: app1,
        tags: ['大数据', 'AI', '物联网'],
        progress: 100
    },
    {
        desc: '工业生产智能监控系统',
        path: system1,
        tags: ['工业互联网', '实时监控'],
        progress: 85
    },
    {
        desc: '智慧医疗解决方案',
        path: app1,
        tags: ['AI诊断', '医疗大数据'],
        progress: 90
    },
    {
        desc: '智能供应链管理平台',
        path: system2,
        tags: ['供应链', '区块链'],
        progress: 95
    }
])

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

interface CapabilityItem {
    title: string;
    description: string;
    icon: string;
}

let capabilityList = reactive<CapabilityItem[]>([
    {
        title: '网站建设',
        description: '专业的网站开发团队，提供响应式设计、SEO优化等全方位服务',
        icon: 'el-icon-monitor'
    },
    {
        title: '小程序开发',
        description: '微信、支付宝等多平台小程序开发，助力企业快速布局移动端',
        icon: 'el-icon-mobile'
    },
    {
        title: '谷歌插件',
        description: '专业的Chrome扩展开发，提供个性化浏览器功能增强解决方案',
        icon: 'el-icon-chrome'
    },
    {
        title: '解决方案',
        description: '为企业提供完整的技术咨询和解决方案，助力数字化转型',
        icon: 'el-icon-setting'
    }
])
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
        width: calc(100%-600px);
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
    background-color: #FFFFFF;
    width: 100%;

    .service-case {
        max-width: 1440px;
        //height: 700px;
        overflow: hidden;
        margin: 0 auto;
        text-align: center;
        padding-top: 50px;

        .block-line {
            margin: 0 auto 12px;
            width: 24px;
            height: 4px;
            background-color: #3370ff;
            border-radius: 100px;
        }

        .case-title {
            font-weight: 700;
            font-size: 32px;
            position: relative;
            bottom: 2px;
            //padding-top: 60px;
        }

        .case-subtitle {
            font-size: 16px;
            line-height: 1.5;
            color: #646a73;
            margin-top: 10px;
        }

        .case-list {
            display: flex;
            justify-content: space-evenly;
        }

        .el-card {
            width: 247px;
            height: 217px;
            margin-top: 40px;
        }

        .el-progress {
            margin-top: 10px;
        }

        :deep(.el-progress-bar__outer) {
            height: 2px !important;
        }

        .case-desc {
            margin-top: 30px;
            margin-bottom: 60px;
            font-weight: 500;
            font-size: 14px;
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
</style>